import { Slider } from '@/shared/components/shared/slider'
import { Separator } from '@/shared/components/ui/separator'
import { cn, getImageUrl } from '@/shared/lib/utils'
import {
	HowSection,
	TechnologySection,
	YearSection,
} from '@/shared/models/types/installation'
import Image from 'next/image'

interface HowIsTheInstallationGoingProps {
	howData: HowSection
	yearData: YearSection
	technologyData: TechnologySection
}

export function HowIsTheInstallationGoing({
	howData,
	yearData,
	technologyData,
}: HowIsTheInstallationGoingProps) {
	// Функция для извлечения текста из списка
	const extractListItems = (listData: any) => {
		const items: string[] = []
		if (listData && listData[0]?.children) {
			listData[0].children.forEach((item: any) => {
				if (item.children && item.children[0]?.text) {
					items.push(item.children[0].text)
				}
			})
		}
		return items
	}

	return (
		<section className='bg-black text-white mt-15 pt-15 md:pt-30 rounded-t-3xl'>
			<div className='mx-auto px-4 max-w-[1330px] container'>
				<Image
					src='/mini-logo.svg'
					alt='mini-logo'
					width={28}
					height={8}
					className=''
					unoptimized
				/>

				<h1 className='font-semibold mt-5 max-w-[508px] text-[30px] md:text-[48px] leading-[110%]'>
					{howData.h2}
				</h1>

				<Separator className='mt-5 bg-white' />

				<div className='flex flex-col md:flex-row md:justify-between mt-10 gap-5'>
					<div className='flex flex-col max-w-[427px] w-full gap-2'>
						<span className='text-base font-semibold'>Общий срок монтажа:</span>

						<div className='items-center mt-4 flex gap-2'>
							<Image
								src={'/about-us/list-icon.png'}
								alt='check'
								width={22}
								height={22}
							/>
							<p className='text-base text-[#B9B9B9] leading-[150%]'>
								{howData.totalInstallationTime}
							</p>
						</div>

						<div className='items-center flex gap-2'>
							<Image
								src={'/about-us/list-icon.png'}
								alt='check'
								width={22}
								height={22}
							/>
							<p className='text-base text-[#B9B9B9] leading-[150%]'>
								{howData.totalInstallationTime2}
							</p>
						</div>

						<div className='mt-5'>
							<span className='text-base font-semibold'>Важное:</span>
							<p className='text-base text-[#B9B9B9] mt-2 italic leading-[150%]'>
								{howData.Important}
							</p>
						</div>
					</div>

					{/* Десктоп версия */}
					<div className='md:max-w-[762px] hidden md:flex flex-col gap-5 w-full'>
						{howData.stages.map(stage => (
							<div
								key={stage.id}
								className='flex flex-col md:flex-row md:gap-[83px] md:border-b md:border-white md:pb-5 gap-2'
							>
								<span className='text-[15px] text-[#7A7A7A] italic'>
									{stage.number}
								</span>

								<div className=''>
									<span className='text-base font-semibold'>{stage.title}</span>
									<ul className='list-disc pl-4 flex flex-col mt-2 text-[14px] text-[#B9B9B9] italic'>
										{extractListItems(stage.list).map((item, index) => (
											<li key={index}>{item}</li>
										))}
									</ul>
								</div>

								<Image
									src={getImageUrl(stage.image.url)}
									alt={stage.title}
									width={139}
									height={139}
									className='md:ml-auto'
								/>
							</div>
						))}
					</div>

					{/* Мобильный слайдер */}
					<Slider
						className='mt-5 md:hidden'
						items={howData.stages.map(stage => (
							<div
								key={stage.id}
								className='flex flex-col md:flex-row md:gap-[83px] md:border-b md:border-white md:pb-5 gap-2'
							>
								<span className='text-[15px] text-[#7A7A7A] italic'>
									{stage.number}
								</span>

								<div className=''>
									<span className='text-base font-semibold'>{stage.title}</span>
									<ul className='list-disc pl-4 flex flex-col mt-2 text-[14px] text-[#B9B9B9] italic'>
										{extractListItems(stage.list).map((item, index) => (
											<li key={index}>{item}</li>
										))}
									</ul>
								</div>

								<Image
									src={getImageUrl(stage.image.url)}
									alt={stage.title}
									width={139}
									height={139}
									className='md:ml-auto'
								/>
							</div>
						))}
					/>
				</div>

				{/* Секция "Монтаж круглый год" */}
				<div className='flex flex-col md:mt-26.75 gap-3 mt-10 md:flex-row md:justify-between'>
					<div className=''>
						<Image
							src='/mini-logo.svg'
							alt='mini-logo'
							width={28}
							height={8}
							className=''
							unoptimized
						/>
						<h2 className='font-semibold mt-5 text-[30px] md:text-[48px] leading-[110%]'>
							{yearData.h2}
						</h2>
						<p className='text-[14px] md:text-base mt-4'>
							{yearData.description}
						</p>
					</div>
					<p className='text-[14px] max-w-[538px] md:mt-20 text-[#B9B9B9] leading-[150%]'>
						{yearData.description2}
					</p>
				</div>

				{/* Грид с преимуществами */}
				<div className='flex flex-col mt-10 w-full'>
					<div className='flex flex-col w-full md:border-b md:border-white/30 md:flex-row'>
						{yearData.data.slice(0, 3).map((item, index) => (
							<div
								key={item.id}
								className={cn(
									'flex flex-col mt-5 w-full pb-4 gap-2',
									index === 0 &&
										'md:max-w-[433px] md:pt-5 md:px-7 md:border-none',
									index === 1 &&
										'md:max-w-[433px] md:py-5 md:px-7 md:border-b-0 md:border-r-1 md:border-l-1 md:border-white/30',
									index === 2 &&
										'md:max-w-[433px] md:py-5 md:px-7 md:border-none',
									'border-b border-[#919191] md:border-b-0',
								)}
							>
								<span className='text-[14px] md:text-[20px] font-bold'>
									{item.text1}
								</span>
								<p className='text-[14px]'>{item.text2}</p>
							</div>
						))}
					</div>

					<div className='flex flex-col md:border-b md:border-white/30 md:flex-row'>
						{yearData.data.slice(3, 5).map((item, index) => (
							<div
								key={item.id}
								className={cn(
									'flex flex-col w-full pb-4 gap-2',
									index === 0 &&
										'md:px-7 md:border-r-1 md:pt-7 md:pb-10 md:border-b-0',
									index === 1 && 'md:px-7 md:pt-7 md:py-5 md:pb-9',
									'mt-5 md:mt-0 border-b border-[#919191] md:border-b-0',
								)}
							>
								<span className='text-[14px] md:text-[20px] font-bold'>
									{item.text1}
								</span>
								<p className='text-[14px]'>{item.text2}</p>
							</div>
						))}
					</div>
				</div>

				{/* Статистика и ограничения */}
				<div className='flex flex-col md:flex-row'>
					<div className='w-full md:border-r md:py-5 md:px-7 mt-4 md:mt-0 md:border-white/30'>
						<span className='text-base font-semibold'>Статистика:</span>

						<ul className='flex flex-col mt-5 md:gap-9 gap-4'>
							<li className='flex flex-row items-center gap-3'>
								<Image src={'/wall.svg'} alt='wall' width={24} height={24} />
								<div className='flex flex-col'>
									<span className='text-[14px] font-semibold'>
										35% наших объектов
									</span>
									<p className='text-[14px]'>
										монтируются в период ноябрь-март
									</p>
								</div>
							</li>

							<li className='flex flex-row items-center gap-3'>
								<Image src={'/temp.svg'} alt='temp' width={24} height={24} />
								<div className='flex flex-col'>
									<span className='text-[14px] font-semibold'>
										Средняя температура
									</span>
									<p className='text-[14px]'>
										при зимнем монтаже: -5°C до -10°C
									</p>
								</div>
							</li>

							<li className='flex flex-row items-center gap-3'>
								<Image src={'/ce.svg'} alt='ce' width={24} height={24} />
								<div className='flex flex-col'>
									<span className='text-[14px] font-semibold'>
										Ни одного случая отслоения
									</span>
									<p className='text-[14px]'>элементов за 10 лет работы</p>
								</div>
							</li>
						</ul>
					</div>

					<div className='w-full md:px-7 mt-4 md:mt-0 md:py-5'>
						<span className='text-base font-semibold'>Ограничения:</span>

						<ul className='flex flex-col mt-5 md:gap-9 gap-4'>
							<li className='flex flex-row items-center gap-3'>
								<Image src={'/temp.svg'} alt='temp' width={24} height={24} />
								<div className='flex flex-col'>
									<span className='text-[14px] font-semibold'>
										При температуре ниже -15°C
									</span>
									<p className='text-[14px]'>
										монтаж приостанавливается (безопасность монтажников)
									</p>
								</div>
							</li>

							<li className='flex flex-row items-center gap-3'>
								<Image src={'/wind.svg'} alt='wind' width={24} height={24} />
								<div className='flex flex-col'>
									<span className='text-[14px] font-semibold'>
										При сильном ветре (&gt;15 м/с)
									</span>
									<p className='text-[14px]'>работы на высоте запрещены</p>
								</div>
							</li>

							<li className='flex flex-row items-center gap-3'>
								<Image src={'/snow.svg'} alt='snow' width={24} height={24} />
								<div className='flex flex-col'>
									<span className='text-[14px] font-semibold'>
										Во время снегопада
									</span>
									<p className='text-[14px]'>
										монтаж возможен, но скорость снижается
									</p>
								</div>
							</li>
						</ul>
					</div>
				</div>

				{/* Секция "Сравнение технологий" */}
				<div className='bg-[#1E1E1E] relative rounded-2xl flex flex-col md:flex-row md:p-15 px-4 pt-5 pb-20 mt-10'>
					<div className='md:w-1/2 z-10'>
						<Image
							src='/mini-logo.svg'
							alt='mini-logo'
							width={28}
							height={8}
							className=''
							unoptimized
						/>

						<h3 className='font-semibold mt-2 text-[30px] md:text-[48px] leading-[110%]'>
							{technologyData.h2}
						</h3>
					</div>

					<div className='w-full md:w-1/2 z-10'>
						<Image
							src={getImageUrl(technologyData.table.url)}
							alt='table'
							width={831}
							height={346}
							className='hidden md:block w-full'
						/>
					</div>

					{/* Мобильная версия таблицы */}
					<div className='md:hidden w-full z-10'>
						<div className='bg-black rounded-2xl flex flex-col justify-between gap-4 px-4 py-6 mt-5'>
							<span className='text-[14px] font-semibold'>
								Наша технология (механический крепёж)
							</span>

							<Separator className='bg-[#FFFFFF]/30' />

							<ul className='flex flex-col gap-2'>
								<li className='flex items-center justify-between'>
									<span className='font-semibold text-[14px]'>
										Температура монтажа
									</span>
									<span className='text-[14px]'>До -15°C</span>
								</li>
								<li className='flex items-center justify-between'>
									<span className='font-semibold text-[14px]'>
										Скорость монтажа
									</span>
									<span className='text-[14px]'>Высокая</span>
								</li>
								<li className='flex items-center justify-between'>
									<span className='font-semibold text-[14px]'>Надёжность</span>
									<span className='text-[14px]'>Максимальная</span>
								</li>
								<li className='flex items-center justify-between'>
									<span className='font-semibold text-[14px]'>Сезонность</span>
									<span className='text-[14px]'>Круглый год</span>
								</li>
							</ul>
						</div>

						<div className='bg-black rounded-2xl flex flex-col justify-between gap-4 px-4 py-6 mt-5'>
							<span className='text-[14px] font-semibold'>
								Клеевая технология (конкуренты)
							</span>

							<Separator className='bg-[#FFFFFF]/30' />

							<ul className='flex flex-col gap-2'>
								<li className='flex items-center justify-between'>
									<span className='font-semibold text-[14px]'>
										Температура монтажа
									</span>
									<span className='text-[14px]'>От +5°C до +25°C</span>
								</li>
								<li className='flex items-center justify-between'>
									<span className='font-semibold text-[14px]'>
										Скорость монтажа
									</span>
									<span className='text-[14px]'>Низкая</span>
								</li>
								<li className='flex items-center justify-between'>
									<span className='font-semibold text-[14px]'>Надёжность</span>
									<span className='text-[14px]'>Средняя</span>
								</li>
								<li className='flex items-center justify-between'>
									<span className='font-semibold text-[14px]'>Сезонность</span>
									<span className='text-[14px]'>Тёплый сезон</span>
								</li>
							</ul>
						</div>
					</div>

					<Image
						src={getImageUrl(technologyData.image1.url)}
						alt='bg'
						width={347}
						height={346}
						className='absolute z-0 hidden md:block bottom-0 left-0'
					/>
				</div>
			</div>
		</section>
	)
}
