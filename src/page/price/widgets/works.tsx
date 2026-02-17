import { projectData } from '@/page/installation/widgets/contact'
import { Button, ProjectCard } from '@/shared/components'
import { Slider } from '@/shared/components/shared/slider'
import { Input } from '@/shared/components/ui/input'
import { getImageUrl } from '@/shared/lib/utils'
import {
	FormSection,
	FullPriceSection,
	PaymentSection,
	ProjectSection,
} from '@/shared/models/types/price'
import { ArrowUpRight } from 'lucide-react'
import Image from 'next/image'

export function Works({
	projects,
	fullPrice,
	payment,
	form,
}: {
	projects: ProjectSection
	fullPrice: FullPriceSection
	payment: PaymentSection
	form: FormSection
}) {
	return (
		<section className='bg-black mt-15 text-white rounded-t-3xl py-15 md:py-30'>
			<div className='container max-w-[1320px] mx-auto px-4'>
				<h2 className='text-[30px] text-center md:text-[48px] font-semibold leading-[110%]'>
					{projects[0].h2}
				</h2>

				<div className='w-full flex justify-center items-center'>
					{' '}
					<p className='text-[14px] text-center text-[#999999] md:text-[16px] items-center w-[420px] leading-[150%] mt-4'>
						{projects[0].description}
					</p>
				</div>

				<div className='hidden md:block'>
					{projectData.map((item, index) => (
						<ProjectCard
							key={index}
							{...item}
							className='mt-7.5'
							buttonVariant='secondary'
						/>
					))}
				</div>
				<Slider
					items={projectData.map((item, index) => (
						<ProjectCard
							key={index}
							{...item}
							className='mt-7.5'
							buttonVariant='secondary'
						/>
					))}
				/>

				<div className='w-full md:flex justify-center'>
					<Button
						variant={'secondary'}
						size={'lg'}
						className='w-full md:w-auto mx-auto mt-10'
					>
						{projects[0].butonText} <ArrowUpRight />
					</Button>
				</div>

				{/* Полная стоимость владения
— считаем на дистанции */}

				<div className='bg-[#171717] rounded-[30px] px-4 md:px-8 md:py-16 py-10 text-center mt-10 md:mt-30'>
					<div className='w-full flex justify-center items-'>
						{' '}
						<h2 className='text-[30px] max-w-[670px] text-center md:text-[48px] font-semibold leading-[110%]'>
							{fullPrice.h2}
						</h2>
					</div>

					<p className='text-[14px] md:text-[16px] text-[#B9B9B9] leading-[150%] mt-4'>
						{fullPrice.description}
					</p>

					<p className='text-start text-base md:hidden font-semibold leading-[150%] mt-7.5'>
						Фасад дома 300 м²: сравнение стоимости за 25 лет
					</p>

					<Image
						src={getImageUrl(fullPrice.table.url)}
						alt={fullPrice.table.alternativeText || 'Table'}
						width={fullPrice.table.width}
						height={fullPrice.table.height}
						className='w-full py-9 hidden md:block'
					/>

					<div className='mt-2.5 md:hidden'>
						<div className='rounded-2xl flex flex-col gap-3.5 bg-black text-start p-5'>
							<span className='text-base font-semibold'>Полимербетон APEX</span>

							<div className='flex flex-col gap-2'>
								<span className='text-[14px] font-semibold'>
									Стоимость с монтажом:
								</span>

								<span>3 900 000 ₽</span>
							</div>

							<div className='flex flex-col gap-2'>
								<span className='text-[14px] font-semibold'>
									Усиление конструкций:
								</span>

								<span>0 ₽</span>
							</div>

							<div className='flex flex-col gap-2'>
								<span className='text-[14px] font-semibold'>
									Покраска / ремонт (каждые 5–7 лет):
								</span>

								<span>0 ₽</span>
							</div>

							<div className='flex flex-col gap-2'>
								<span className='text-[14px] font-semibold'>
									ИТОГО за 25 лет:
								</span>

								<span>6 900 000 ₽</span>
							</div>
						</div>

						<div className='flex bg-white mt-2 text-black rounded-2xl px-5 py-2.5 justify-between'>
							<span className='text-[14px] font-semibold'>
								Экономия с APEX:
							</span>

							<span className='text-[14px]'>Базовая</span>
						</div>

						{/* TODO: Сделать карусель */}
					</div>

					<h5 className='text-base font-semibold '>
						Дополнительные преимущества APEX:
					</h5>

					<ul className='text-start flex flex-col md:w-full md:justify-center md:items-center md:flex-row md:gap-10 gap-2.5 mt-5 list-disc pl-4 text-[12px] md:text-[14px] text-[#999999]'>
						{fullPrice.listitems.map(item => (
							<li key={item.id}>{item.text}</li>
						))}
					</ul>
				</div>

				<h2 className='text-[30px] md:text-[48px] md:mt-30 font-semibold leading-[110%] mt-10'>
					Удобные способы оплаты
				</h2>

				<p className='text-base text-[#B9B9B9] md:text-[16px] leading-[150%] mt-5'>
					Умная поэтапная оплата по факту работ и безналичный расчёт для юрлиц
				</p>
				<p className='text-[14px] text-[#B9B9B9] italic md:text-[16px] leading-[150%] mt-1'>
					Все условия оплаты и сроки чётко фиксируются в договоре. Мы не требуем
					полной предоплаты — вы платите по факту выполненных работ.
				</p>

				<div className='hidden md:flex gap-2 flex-col md:flex-row justify-between'>
					<div className='w-full'>
						{' '}
						<div className='bg-[#1E1E1E] mt-7.5 rounded-[30px] px-4 md:px-7 md:py-7 py-5'>
							<h3 className='flex text-base font-semibold items-center gap-2'>
								<img
									className='w-5 md:w-10 md:h-10 h-5'
									src='/price/rub.svg'
									alt='rub'
								/>
								Умная поэтапная оплата
							</h3>

							<div className='flex gap-3 mt-5 items-center'>
								<div className='bg-black flex items-center justify-center font-bold rounded-[10px] w-8 h-8'>
									1
								</div>

								<div className='flex flex-col gap-1'>
									<span className='font-bold text-[14px]'>
										Старт проектирования — 10%
									</span>
									<span className='text-[14px] text-[#B9B9B9]'>
										{' '}
										Оплата запуска проектных работ.
									</span>
								</div>
							</div>

							<div className='flex gap-3 mt-5 items-center'>
								<div className='bg-black flex items-center justify-center font-bold rounded-[10px] w-8 h-8'>
									2
								</div>

								<div className='flex flex-col gap-1'>
									<span className='font-bold text-[14px]'>
										После утверждения проекта — 40%
									</span>
									<span className='text-[14px] text-[#B9B9B9]'>
										{' '}
										Проект согласован и передан в производство.
									</span>
								</div>
							</div>

							<div className='flex gap-3 mt-5 items-center'>
								<div className='bg-black flex items-center justify-center font-bold rounded-[10px] w-8 h-8'>
									3
								</div>

								<div className='flex flex-col gap-1'>
									<span className='font-bold text-[14px]'>
										Перед отгрузкой — 50%
									</span>
									<span className='text-[14px] text-[#B9B9B9]'>
										{' '}
										Готовые изделия передаются к поставке.
									</span>
								</div>
							</div>
						</div>
						<div className='bg-[#1E1E1E] mt-2.5 rounded-[30px] px-4 md:px-7 md:py-7 py-5'>
							<h3 className='flex text-base font-semibold items-center gap-2'>
								Этапы оплаты за монтаж
							</h3>

							<div className='flex gap-3 mt-5 items-center'>
								<div className='bg-black flex items-center justify-center font-bold rounded-[10px] w-8 h-8'>
									1
								</div>

								<div className='flex flex-col gap-1'>
									<span className='font-bold text-[14px]'>
										Начало монтажных работ — 40%
									</span>
									<span className='text-[14px] text-[#B9B9B9]'>
										{' '}
										Оплата старта работ на объекте.
									</span>
								</div>
							</div>

							<div className='flex gap-3 mt-5 items-center'>
								<div className='bg-black flex items-center justify-center font-bold rounded-[10px] w-8 h-8'>
									2
								</div>

								<div className='flex flex-col gap-1'>
									<span className='font-bold text-[14px]'>
										Выполнение работ — остаток
									</span>
									<span className='text-[14px] text-[#B9B9B9]'>
										{' '}
										Оплата производится раз в 20 дней за фактически выполненные
										объёмы.
									</span>
								</div>
							</div>
						</div>
					</div>

					<div className='flex w-full flex-col gap-2'>
						<div className='bg-[#1E1E1E] mt-7.5 rounded-[30px] px-4 md:px-7 md:py-7 py-5'>
							<h3 className='flex text-base font-semibold items-center gap-2'>
								<img
									className='w-5 md:w-10 md:h-10 h-5'
									src='/price/port.svg'
									alt='rub'
								/>
								Для юридических лиц
							</h3>

							<div className='flex flex-col mt-5 gap-3.5'>
								<div className='flex items-center gap-5'>
									<img src='/price/list-w.svg' alt='' />

									<span className='font-bold text-[14px] md:text-bold'>
										Безналичный расчёт с НДС
									</span>
								</div>

								<div className='flex items-center gap-5'>
									<img src='/price/list-w.svg' alt='' />

									<span className='font-bold text-[14px] md:text-bold'>
										Договор подряда
									</span>
								</div>

								<div className='flex items-center gap-5'>
									<img src='/price/list-w.svg' alt='' />

									<span className='font-bold text-[14px] md:text-bold'>
										Счёт на оплату
									</span>
								</div>

								<div className='flex items-center gap-5'>
									<img src='/price/list-w.svg' alt='' />

									<span className='font-bold text-[14px] md:text-bold'>
										Поэтапная оплата по актам выполненных работ
									</span>
								</div>
							</div>
						</div>
						<Button
							variant={'secondary'}
							size={'lg'}
							className='w-full rounded-full'
						>
							Получить реквизиты
						</Button>

						<Image
							src={'/price/home-dectop-3.png'}
							width={655}
							height={228}
							alt='home3'
							className='object-cover object-center h-[198px] rounded-[30px] w-full'
						/>
					</div>
				</div>

				<Slider
					items={[
						<div className='w-full'>
							{' '}
							<div className='bg-[#1E1E1E] mt-7.5 rounded-[30px] px-4 md:px-7 md:py-7 py-5'>
								<h3 className='flex text-base font-semibold items-center gap-2'>
									<img
										className='w-5 md:w-10 md:h-10 h-5'
										src='/price/rub.svg'
										alt='rub'
									/>
									Умная поэтапная оплата
								</h3>

								<div className='flex gap-3 mt-5 items-center'>
									<div className='bg-black flex items-center justify-center font-bold rounded-[10px] w-8 h-8'>
										1
									</div>

									<div className='flex flex-col gap-1'>
										<span className='font-bold text-[14px]'>
											Старт проектирования — 10%
										</span>
										<span className='text-[14px] text-[#B9B9B9]'>
											{' '}
											Оплата запуска проектных работ.
										</span>
									</div>
								</div>

								<div className='flex gap-3 mt-5 items-center'>
									<div className='bg-black flex items-center justify-center font-bold rounded-[10px] w-8 h-8'>
										2
									</div>

									<div className='flex flex-col gap-1'>
										<span className='font-bold text-[14px]'>
											После утверждения проекта — 40%
										</span>
										<span className='text-[14px] text-[#B9B9B9]'>
											{' '}
											Проект согласован и передан в производство.
										</span>
									</div>
								</div>

								<div className='flex gap-3 mt-5 items-center'>
									<div className='bg-black flex items-center justify-center font-bold rounded-[10px] w-8 h-8'>
										3
									</div>

									<div className='flex flex-col gap-1'>
										<span className='font-bold text-[14px]'>
											Перед отгрузкой — 50%
										</span>
										<span className='text-[14px] text-[#B9B9B9]'>
											{' '}
											Готовые изделия передаются к поставке.
										</span>
									</div>
								</div>
							</div>
							<div className='bg-[#1E1E1E] mt-2.5 rounded-[30px] px-4 md:px-7 md:py-7 py-5'>
								<h3 className='flex text-base font-semibold items-center gap-2'>
									Этапы оплаты за монтаж
								</h3>

								<div className='flex gap-3 mt-5 items-center'>
									<div className='bg-black flex items-center justify-center font-bold rounded-[10px] w-8 h-8'>
										1
									</div>

									<div className='flex flex-col gap-1'>
										<span className='font-bold text-[14px]'>
											Начало монтажных работ — 40%
										</span>
										<span className='text-[14px] text-[#B9B9B9]'>
											{' '}
											Оплата старта работ на объекте.
										</span>
									</div>
								</div>

								<div className='flex gap-3 mt-5 items-center'>
									<div className='bg-black flex items-center justify-center font-bold rounded-[10px] w-8 h-8'>
										2
									</div>

									<div className='flex flex-col gap-1'>
										<span className='font-bold text-[14px]'>
											Выполнение работ — остаток
										</span>
										<span className='text-[14px] text-[#B9B9B9]'>
											{' '}
											Оплата производится раз в 20 дней за фактически
											выполненные объёмы.
										</span>
									</div>
								</div>
							</div>
						</div>,

						<div className='flex w-full flex-col gap-2'>
							<div className='bg-[#1E1E1E] mt-7.5 rounded-[30px] px-4 md:px-7 md:py-7 py-5'>
								<h3 className='flex text-base font-semibold items-center gap-2'>
									<img
										className='w-5 md:w-10 md:h-10 h-5'
										src='/price/port.svg'
										alt='rub'
									/>
									Для юридических лиц
								</h3>

								<div className='flex flex-col mt-5 gap-3.5'>
									<div className='flex items-center gap-5'>
										<img src='/price/list-w.svg' alt='' />

										<span className='font-bold text-[14px] md:text-bold'>
											Безналичный расчёт с НДС
										</span>
									</div>

									<div className='flex items-center gap-5'>
										<img src='/price/list-w.svg' alt='' />

										<span className='font-bold text-[14px] md:text-bold'>
											Договор подряда
										</span>
									</div>

									<div className='flex items-center gap-5'>
										<img src='/price/list-w.svg' alt='' />

										<span className='font-bold text-[14px] md:text-bold'>
											Счёт на оплату
										</span>
									</div>

									<div className='flex items-center gap-5'>
										<img src='/price/list-w.svg' alt='' />

										<span className='font-bold text-[14px] md:text-bold'>
											Поэтапная оплата по актам выполненных работ
										</span>
									</div>
								</div>
							</div>
							<Button
								variant={'secondary'}
								size={'lg'}
								className='w-full rounded-full'
							>
								Получить реквизиты
							</Button>

							<Image
								src={'/price/home-dectop-3.png'}
								width={655}
								height={228}
								alt='home3'
								className='object-cover object-center h-[198px] rounded-[30px] w-full'
							/>
						</div>,
					]}
				/>

				<form className='flex sm:gap-2 flex-col md:flex-row w-full mt-10 md:mt-30 rounded-3xl'>
					<div className=''>
						<h3 className='text-[22px] md:text-[46px] font-semibold leading-[110%]'>
							Получите расчёт вашего проекта за 24 часа
						</h3>

						<p className='text-[14px] md:text-base leading-[150%] mt-2'>
							Мы перезвоним в течение 2 часов (пн-пт 9:00-20:00)
						</p>
					</div>

					<div className='flex flex-col mt-2 max-w-[650px] gap-2'>
						<Input
							className='border-b outline-none border-white rounded-0'
							placeholder='Ваше Имя'
						/>
						<Input
							className='border-b border-white rounded-0'
							placeholder='Телефон'
						/>

						<Button
							className='mt-2 max-w-[180px]'
							variant={'secondary'}
							size={'lg'}
						>
							Оставить заявку
						</Button>

						<p className='text-[12px] text-[#3C3C3C] leading-[130%] italic mt-2'>
							Нажимая кнопку «Отправить», я даю согласие на обработку моих
							персональных данных на условиях и для целей, определенных
							в политике о конфиденциальности
						</p>
					</div>
				</form>
			</div>
		</section>
	)
}
