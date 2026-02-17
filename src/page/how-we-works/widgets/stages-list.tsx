import {
	Accordion,
	AccordionContent,
	AccordionItem,
	AccordionTrigger,
} from '@/shared/components/ui/accordion'
import { Badge } from '@/shared/components/ui/badge'
import { Separator } from '@/shared/components/ui/separator'
import { cn, getImageUrl } from '@/shared/lib/utils'
import { StageDetail, StagesData } from '@/shared/models/types/how-we-work'
import Image from 'next/image'

export function StagesList({ stagesData }: { stagesData: StagesData }) {
	const stages = stagesData.stages

	const getStagePosition = (index: number) => {
		// Чередование позиций: 0 - слева, 1 - справа, 2 - слева, 3 - справа, 4 - слева
		return index % 2 === 0 ? 'left' : 'right'
	}

	const renderStage = (stage: StageDetail, index: number) => {
		const position = getStagePosition(index)
		const isLeft = position === 'left'

		return (
			<div
				key={stage.id}
				className={`flex flex-col ${index > 0 ? 'mt-15 md:mt-30' : ''} ${isLeft ? 'md:flex-row' : 'md:flex-row-reverse'} md:justify-between gap-10`}
			>
				{/* Контентная часть */}
				<div className='max-w-[650px] w-full'>
					<div className='flex flex-col'>
						<div>
							<Badge>{stage.number}</Badge>
							<h3 className='text-[30px] md:text-[48px] font-bold leading-[130%]'>
								{stage.title}
							</h3>

							<div className='flex md:mt-7 flex-col md:flex-row'>
								<div className='flex mt-3 max-w-[315px] w-full flex-col gap-2'>
									<span className='font-semibold'>Срок:</span>
									<span>
										{index === 0 && '5-10 рабочих дней'}
										{index === 1 && '7-20 рабочих дней'}
										{index === 2 &&
											'от 20 до 50 рабочих дней (зависит от объёма и сложности)'}
										{index === 3 &&
											'20-45 рабочих дней (зависит от объёма и сложности)'}
										{index === 4 && '1 день'}
									</span>
								</div>

								{index === 0 && (
									<div className='flex mt-4 flex-col gap-2'>
										<span className='font-semibold'>Стоимость:</span>
										<span>
											Бесплатная консультация, 3D — от 50 000 руб.
											(засчитывается в заказ)
										</span>
									</div>
								)}

								{index === 4 && (
									<div className='flex mt-4 flex-col gap-2'>
										<span className='font-semibold'>Стоимость:</span>
										<span>Включена в проект</span>
									</div>
								)}
							</div>
						</div>

						{/* Мобильная версия важного блока */}
						{stage.importent && (
							<div className='md:hidden'>
								<blockquote className='mt-6 border-l-2 text-[14px] md:text-[16px] leading-[150%] flex flex-col gap-2 pl-6 italic'>
									<span className='font-semibold'>
										{index === 0 && 'Важно:'}
										{index === 2 && 'Гарантия сроков:'}
										{index === 3 && 'Гарантия срока:'}
									</span>
									{stage.importent}
								</blockquote>
							</div>
						)}
					</div>

					<Separator className='bg-[#E5E5E5] mt-3 md:mt-10' />

					<div className='mt-2'>
						<Accordion type='single' collapsible defaultValue='item-1'>
							{stage.questions.map((question, qIndex) => (
								<AccordionItem key={question.id} value={`item-${qIndex + 1}`}>
									<AccordionTrigger className='text-base font-semibold leading-[150%]'>
										{question.question}
									</AccordionTrigger>
									<AccordionContent>
										<ul className='flex flex-col'>
											{question.answer && question.answer.length > 0 ? (
												question.answer.map(answer => (
													<div
														key={answer.id}
														className='items-center flex gap-2 mt-4 first:mt-0'
													>
														<Image
															src={'/about-us/list-icon.png'}
															alt='check'
															width={18}
															height={18}
														/>
														<p className='text-[12px] md:text-base leading-[150%]'>
															{answer.text}
														</p>
													</div>
												))
											) : (
												<div className='items-center flex gap-2 mt-4'>
													<Image
														src={'/about-us/list-icon.png'}
														alt='check'
														width={18}
														height={18}
													/>
													<p className='text-[12px] md:text-base leading-[150%]'>
														Информация уточняется
													</p>
												</div>
											)}
										</ul>
									</AccordionContent>
								</AccordionItem>
							))}
						</Accordion>
					</div>
				</div>

				{/* Блок с изображением */}
				<div className='max-w-[538px] relative'>
					<Image
						src={getImageUrl(stage.image.url)}
						alt={stage.title}
						className='hidden md:block'
						width={538}
						height={600}
					/>

					{/* Десктопная версия важного блока с уникальным позиционированием */}
					{stage.importent && (
						<div
							className={cn(
								'hidden md:block absolute',
								index === 0 && 'mt-[267px] ml-[91px]',
								index === 2 && 'mt-[170px] ml-[91px]',
								index === 3 && 'mt-[168px]',
								index === 4 && 'mt-0',
							)}
						>
							<blockquote className='border-l-2 text-[14px] md:text-[16px] leading-[150%] flex flex-col gap-2 pl-6 italic max-w-[420px]'>
								<span className='font-semibold'>
									{index === 0 && 'Важно:'}
									{index === 2 && 'Гарантия сроков:'}
									{index === 3 && 'Гарантия срока:'}
								</span>
								{stage.importent}
							</blockquote>
						</div>
					)}
				</div>
			</div>
		)
	}

	return (
		<section className='container mt-5 md:mt-30 max-w-[1330px] mx-auto px-4'>
			<div className='flex flex-col gap-10'>
				{stages.map((stage, index) => renderStage(stage, index))}
			</div>
		</section>
	)
}
