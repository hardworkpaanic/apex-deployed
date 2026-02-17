import {
	AllInclusiveSection,
	InvestmentSection,
} from '@/shared/models/types/price'
import { Check } from 'lucide-react'
import Image from 'next/image'

export function Landmark({
	investment,
	allInclusiveSection,
}: {
	investment: InvestmentSection
	allInclusiveSection: AllInclusiveSection
}) {
	// Получаем лейблы из первой строки таблицы
	const labels =
		investment.table.pricingTable.rows[0]?.items.map(item => item.label) || []

	return (
		<section className='mt-15 md:mt-30'>
			<div className='container max-w-[1320px] mx-auto px-4'>
				<div className='flex flex-col md:gap-20 md:justify-between md:flex-row'>
					<div className='md:max-w-[500px]'>
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
						<h2 className='font-semibold md:font-bold mt-2 text-[30px] md:text-[48px] leading-[110%]'>
							{investment.h2}
						</h2>

						<p className='mt-5 text-[14px] md:text-[16px] md:max-w-[426px] md:mt-55 italic text-[#3C3C3C]'>
							{investment.description}
						</p>
					</div>

					<div className=''>
						<h5 className='mt-5 text-[20px] font-semibold'>{investment.h4}</h5>

						<p className='mt-2 text-[14px] md:text-base text-[#3C3C3C]'>
							{investment.p}
						</p>

						<div className='mt-5 flex flex-col'>
							{/* Лейблы для десктопа */}
							<div className='hidden md:flex flex-row gap-1 mb-1'>
								{labels.map((label, index) => (
									<div
										key={index}
										className='md:w-[223px] flex items-center justify-between bg-[#F3F3F3] rounded-2xl p-5'
									>
										<span className='text-[14px] font-semibold'>{label}</span>
									</div>
								))}
							</div>

							{investment.table.pricingTable.rows.map((row, rowIndex) => (
								<div
									key={rowIndex}
									className='flex flex-col md:flex-row gap-1 mt-2'
								>
									{row.items.map((item, itemIndex) => (
										<div
											key={itemIndex}
											className='bg-[#F3F3F3] md:w-[223px] rounded-2xl flex items-center justify-between p-5'
										>
											{/* Лейбл для мобильных */}
											<span className='text-[14px] font-semibold md:hidden'>
												{item.label}
											</span>
											<span className='text-[14px]'>{item.value}</span>
										</div>
									))}
								</div>
							))}
						</div>
					</div>
				</div>
				{/* 2 */}
				<div className='flex flex-col md:h-[340px] mt-5 md:mt-30 md:gap-10 md:justify-between md:flex-row'>
					<div className='mt-15 w-full md:max-w-[547px] md:mt-0'>
						<div className='border border-border rounded-2xl px-4 py-5'>
							<h5 className='font-semibold text-base leading-[150%]'>
								Что влияет на итоговую стоимость:
							</h5>

							<div className='flex items-center gap-2.5 mt-5'>
								<Image
									src='/price/list.svg'
									alt='list'
									width={24}
									height={24}
								/>
								<div className='flex flex-col leading-[15%0]'>
									<span className='text-[14px] font-bold'>
										Архитектурная сложность
									</span>
									<span className='text-[14px] text-[#3C3C3C]'>
										количество и детализация элементов
									</span>
								</div>
							</div>

							<div className='flex items-center gap-2.5 mt-5'>
								<Image
									src='/price/list.svg'
									alt='list'
									width={24}
									height={24}
								/>
								<div className='flex flex-col leading-[15%0]'>
									<span className='text-[14px] font-bold'>Стиль фасада</span>
									<span className='text-[14px] text-[#3C3C3C]'>
										классические стили требуют больше ручной работы
									</span>
								</div>
							</div>

							<div className='flex items-center gap-2.5 mt-5'>
								<Image
									src='/price/list.svg'
									alt='list'
									width={24}
									height={24}
								/>
								<div className='flex flex-col leading-[15%0]'>
									<span className='text-[14px] font-bold'>
										Индивидуальные формы
									</span>
									<span className='text-[14px] text-[#3C3C3C]'>
										авторские элементы по вашим эскизам
									</span>
								</div>
							</div>
							<div className='flex items-center gap-2.5 mt-5'>
								<Image
									src='/price/list.svg'
									alt='list'
									width={24}
									height={24}
								/>
								<div className='flex flex-col leading-[15%0]'>
									<span className='text-[14px] font-bold'>
										Регион реализации
									</span>
									<span className='text-[14px] text-[#3C3C3C]'>
										логистика и особенности монтажа
									</span>
								</div>
							</div>
						</div>
					</div>

					<Image
						src={'/price/home1.jpg'}
						alt='home'
						width={189.9999847412111}
						height={340.0000000000003}
						className='mt-5 w-full block md:hidden object-cover object-center'
					/>

					<Image
						src={'/price/home-desctop.png'}
						alt='home'
						width={295}
						height={340}
						className='w-[295px] hidden md:block object-cover object-center'
					/>

					<div className='border border-border w-full md:max-w-[747px] rounded-2xl md:mt-0 md:h-[340px] mt-5 px-4 py-5'>
						<h5 className='font-semibold text-base leading-[150%]'>
							{allInclusiveSection.h3}
						</h5>

						{allInclusiveSection.point.map(point => (
							<div key={point.id} className='flex gap-2 mt-3 items-center'>
								<Check size={16} />
								<span className='text-[14px] font-bold'>{point.text}</span>
							</div>
						))}
					</div>
				</div>
			</div>
		</section>
	)
}
