import { Slider } from '@/shared/components/shared/slider'
import { ScrollArea } from '@/shared/components/ui/scroll-area'
import { getImageUrl } from '@/shared/lib/utils'
import { EconomySection, WhySection } from '@/shared/models/types/material'
import Image from 'next/image'

export function Comparisons({
	why,
	economy,
}: {
	why: WhySection
	economy: EconomySection
}) {
	return (
		<section className='bg-[#F0F0F0] mt-15 md:mt-30 md:pb-30 rounded-t-3xl py-10 md:pt-30 md:py-50'>
			<div className='container max-w-[1320px] mx-auto px-4'>
				<div className='flex items-center gap-2'>
					<Image
						src='/mini-logo-gray.svg'
						alt='mini-logo'
						width={28}
						height={8}
						className=''
						unoptimized
					/>
				</div>
				<h2 className='font-semibold mt-2 md:max-w-[762px] text-[30px] md:text-[48px] leading-[110%]'>
					{why.description}
				</h2>

				<p className='mt-5 text-[14px]  text-[#3C3C3C]'>
					Сравнение ключевых характеристик с альтернативными решениями
				</p>

				{why.table && (
					<Image
						src={getImageUrl(why.table.url)}
						alt={why.table.alternativeText || 'table'}
						width={why.table.width}
						height={why.table.height}
						className='mt-5 w-full'
						unoptimized
					/>
				)}

				<ScrollArea
					scrollbarOrientation='horizontal'
					className='md:hidden overflow-x-auto'
				>
					{why.table && (
						<Image
							src={getImageUrl(why.table.url)}
							alt={why.table.alternativeText || 'table'}
							width={why.table.width}
							height={why.table.height}
							className='mt-5 w-full'
							unoptimized
						/>
					)}
				</ScrollArea>

				<div className='flex items-center mt-10 md:mt-30 gap-2'>
					<Image
						src='/mini-logo-gray.svg'
						alt='mini-logo'
						width={28}
						height={8}
						className=''
						unoptimized
					/>
				</div>

				<div className='flex flex-col  md:flex-row justify-between'>
					<div className='md:w-1/2'>
						<h2 className='font-semibold mt-2 text-[30px] md:max-w-[550px] md:text-[48px] leading-[110%] '>
							{economy.h2}
						</h2>

						<p className='mt-5 text-[14px] max-w-[389px] z-10 text-white bg-black rounded-3xl px-2 py-[3px]'>
							{economy.description}
						</p>
						<div className='relative'>
							<Image
								src={'/materials/mat.png'}
								alt='a'
								width={1021.7252197265625}
								height={869.2107543945312}
								className='absolute object-cover hidden md:block w-[1021px] h-[869px] top-[-150px] z-0 left-20'
							/>
						</div>
					</div>

					<div className='md:w-1/2 '>
						<div className=' flex-col hidden md:flex md:flex-row gap-5'>
							{economy.materilas.slice(0, 2).map(material => (
								<div
									key={material.id}
									className='bg-white max-w-[315px] w-full rounded-2xl mt-5 p-5'
								>
									<div className='flex items-center gap-2'>
										<h5 className='text-base font-bold'>{material.title}</h5>
										{material.title === 'Полимербетон' && (
											<Image
												src={'/logo.svg'}
												width={47.23044967651367}
												height={14}
												alt='Logo'
												unoptimized
											/>
										)}
									</div>

									{material.characteristic.map(item => (
										<div key={item.id} className='mt-2'>
											<span className='text-[14px] font-semibold'>
												{item.text1}
											</span>
											<p>{item.text2}</p>
										</div>
									))}
								</div>
							))}
						</div>
						<div className='hidden md:flex  flex-col md:flex-row gap-5'>
							{economy.materilas.slice(2, 3).map(material => (
								<div
									key={material.id}
									className='bg-white max-w-[315px] w-full rounded-2xl mt-5 p-5'
								>
									<div className='flex items-center gap-2'>
										<h5 className='text-base font-bold'>{material.title}</h5>
									</div>

									{material.characteristic.map(item => (
										<div key={item.id} className='mt-2'>
											<span className='text-[14px] font-semibold'>
												{item.text1}
											</span>
											<p>{item.text2}</p>
										</div>
									))}
								</div>
							))}

							{/* Карточка экономии */}
							<div className='bg-gradient-to-br from-black to-[#7E7E7E] text-white max-w-[315px] flex flex-col gap-[198px] w-full rounded-2xl mt-5 p-5'>
								<div className='flex items-center gap-2'>
									<h5 className='text-base font-bold'>Экономия с </h5>
									<Image
										src={'/logo-white.svg'}
										width={47.23044967651367}
										height={14}
										alt='Logo'
										unoptimized
									/>
								</div>

								<div className='font-semibold text-[20px]'>{economy.final}</div>
							</div>
						</div>

						<Slider
							items={[
								<div className='bg-white max-w-[315px] w-full rounded-2xl mt-5 p-5'>
									<div className='flex items-center gap-2'>
										<h5 className='text-base font-bold'>Полимербетон</h5>
										<Image
											src={'/logo.svg'}
											width={47.23044967651367}
											height={14}
											alt='Logo'
											unoptimized
										/>
									</div>

									<div className='mt-2'>
										<span className='text-[14px] font-semibold'>
											Стоимость:
										</span>
										<p>23 000 ₽/м² × 300 м² = 6 900 000 ₽</p>
									</div>

									<div className='mt-2'>
										<span className='text-[14px] font-semibold'>
											Срок службы:
										</span>
										<p>50 лет</p>
									</div>
									<div className='mt-2'>
										<span className='text-[14px] font-semibold'>
											Обслуживание:
										</span>
										<p>0 ₽ (не требуется)</p>
									</div>
									<div className='mt-2'>
										<span className='text-[14px] font-semibold'>
											Итого за 25 лет:
										</span>
										<p>6 900 000 ₽</p>
									</div>
								</div>,
								<div className='bg-white max-w-[315px] w-full rounded-2xl mt-5 p-5'>
									<div className='flex items-center gap-2'>
										<h5 className='text-base font-bold'>Натуральный камень:</h5>
									</div>

									<div className='mt-2'>
										<span className='text-[14px] font-semibold'>
											Стоимость:
										</span>
										<p>50 000 ₽/м² × 300 м² = 15 000 000₽</p>
									</div>

									<div className='mt-2'>
										<span className='text-[14px] font-semibold'>
											Усиление конструкций:
										</span>
										<p>+ 2 500 000 ₽</p>
									</div>
									<div className='mt-2'>
										<span className='text-[14px] font-semibold'>
											Покраска каждые 5 лет:
										</span>
										<p> 3 000 ₽/м² × 5 раз = 4 500 000 ₽</p>
									</div>
									<div className='mt-2'>
										<span className='text-[14px] font-semibold'>
											Итого за 25 лет:
										</span>
										<p>22 000 000 ₽</p>
									</div>
								</div>,
								<div className='bg-white max-w-[315px] w-full rounded-2xl mt-5 p-5'>
									<div className='flex items-center gap-2'>
										<h5 className='text-base font-bold'>Пенопласт:</h5>
										<Image
											src={'/logo.svg'}
											width={47.23044967651367}
											height={14}
											alt='Logo'
											unoptimized
										/>
									</div>

									<div className='mt-2'>
										<span className='text-[14px] font-semibold'>
											Стоимость:
										</span>
										<p>8 000 ₽/м² × 300 м² = 2 400 000 ₽</p>
									</div>

									<div className='mt-2'>
										<span className='text-[14px] font-semibold'>
											Срок службы:
										</span>
										<p> 10 лет → замена 2 раза = 7 200 000₽</p>
									</div>
									<div className='mt-2'>
										<span className='text-[14px] font-semibold'>
											Покраска каждые 3 года:
										</span>
										<p>2 500 ₽/м² × 8 раз = 6 000 000 ₽</p>
									</div>
									<div className='mt-2'>
										<span className='text-[14px] font-semibold'>
											Итого за 25 лет:
										</span>
										<p>13 200 000 ₽</p>
									</div>
								</div>,
								<div className='bg-gradient-to-br from-black to-[#7E7E7E]  text-white max-w-[315px] flex flex-col gap-[198px] w-full rounded-2xl mt-5 p-5'>
									<div className='flex items-center gap-2'>
										<h5 className='text-base font-bold'>Экономия с </h5>
										<Image
											src={'/logo-white.svg'}
											width={47.23044967651367}
											height={14}
											alt='Logo'
											unoptimized
										/>
									</div>

									<div className='font-semibold text-[20px]'>
										15 100 000 ₽ (68%)
									</div>
								</div>,
							]}
							showPagination={false}
						/>

						<div className='relative w-full'>
							<Image
								src={'/materials/mat.png'}
								alt='a'
								width={569}
								height={468}
								className='absolute object-cover block md:hidden w-[370px] h-[468.17852783203125px] top-[-150px] z-0'
							/>
						</div>
					</div>
				</div>

				{/* TODO: Добавть картинку на задник */}
			</div>
		</section>
	)
}
