import {
	Item,
	ItemContent,
	ItemDescription,
	ItemMedia,
	ItemTitle,
} from '@/shared/components/ui/item'
import { getImageUrl } from '@/shared/lib/utils'
import { DifferencesSection } from '@/shared/models/types/home'
import Image from 'next/image'

export function Differences({ data }: { data: DifferencesSection }) {
	// Разбиваем advantages на колонки
	const firstColumnAdvantages = data.advantages.slice(0, 2)
	const secondColumnAdvantages = data.advantages.slice(2, 4)
	const thirdColumnAdvantages = data.advantages.slice(4, 5)

	return (
		<section className='rounded-t-3xl bg-white relative top-[-50px] md:pt-30 z-0 pt-10'>
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
				<h2 className='font-semibold mt-2 text-[30px] md:text-[48px] leading-[110%]'>
					{data.h2}
				</h2>

				{/* Мобильная версия */}
				{data.image1?.[0] && (
					<Image
						src={getImageUrl(data.image1[0].url)}
						alt={data.image1[0].alternativeText || 'differences'}
						width={343}
						height={156}
						className='mt-5 bg-contain md:hidden w-full bg-center'
					/>
				)}

				{/* Десктоп версия */}
				<div className='hidden md:flex flex-row gap-5 mt-[90px] justify-between'>
					{/* Первая колонка - изображение */}
					{data.image1?.[0] && (
						<Image
							src={getImageUrl(data.image1[0].url)}
							alt={data.image1[0].alternativeText || 'differences'}
							width={315}
							height={500}
							className='bg-contain bg-center'
						/>
					)}

					{/* Вторая колонка - первые 2 преимущества */}
					<div className='flex flex-col gap-5'>
						{firstColumnAdvantages.map(advantage => (
							<Item
								key={advantage.id}
								variant={'muted'}
								className='md:flex-col flex w-[315px] h-[240px] md:items-start justify-between p-7 rounded-3xl'
							>
								{advantage.icon && (
									<ItemMedia>
										<Image
											src={getImageUrl(advantage.icon.url)}
											alt={advantage.icon.alternativeText || 'icon'}
											width={32}
											height={32}
											className='w-8 h-8'
											unoptimized
										/>
									</ItemMedia>
								)}
								<ItemContent className='flex-none'>
									<ItemTitle className='text-[16px] text-[#3C3C3C]'>
										{advantage.title}
									</ItemTitle>
								</ItemContent>
							</Item>
						))}
					</div>

					{/* Третья колонка - следующие 2 преимущества */}
					<div className='flex flex-col gap-5'>
						{secondColumnAdvantages.map(advantage => (
							<Item
								key={advantage.id}
								variant={'muted'}
								className='md:flex-col w-[315px] h-[240px] md:items-start justify-between p-7 rounded-3xl'
							>
								{advantage.icon && (
									<ItemMedia>
										<Image
											src={getImageUrl(advantage.icon.url)}
											alt={advantage.icon.alternativeText || 'icon'}
											width={32}
											height={32}
											className='w-8 h-8'
											unoptimized
										/>
									</ItemMedia>
								)}
								<ItemContent className='flex-none'>
									<ItemTitle className='text-[16px] text-[#3C3C3C]'>
										{advantage.title}
									</ItemTitle>
								</ItemContent>
							</Item>
						))}
					</div>

					{/* Четвертая колонка - изображение и последнее преимущество */}
					<div className='flex flex-col gap-5'>
						{data.image2?.[0] && (
							<Image
								src={getImageUrl(data.image2[0].url)}
								alt={data.image2[0].alternativeText || 'home'}
								width={315}
								height={240}
								className='bg-contain bg-center'
								unoptimized
							/>
						)}

						{thirdColumnAdvantages.map(advantage => (
							<Item
								key={advantage.id}
								variant={'muted'}
								className='md:flex-col w-[315px] h-[240px] md:items-start p-7 justify-between rounded-3xl'
							>
								{advantage.icon && (
									<ItemMedia>
										<Image
											src={getImageUrl(advantage.icon.url)}
											alt={advantage.icon.alternativeText || 'icon'}
											width={32}
											height={32}
											className='w-8 h-8'
											unoptimized
										/>
									</ItemMedia>
								)}
								<ItemContent className='flex-none'>
									<ItemTitle className='text-[16px] text-[#3C3C3C]'>
										{advantage.title}
									</ItemTitle>
								</ItemContent>
							</Item>
						))}
					</div>
				</div>

				{/* Мобильная версия - преимущества списком */}
				<div className='flex text-[#3C3C3C] md:hidden flex-col gap-5 mt-5'>
					{data.advantages.map((advantage, index) => (
						<Item key={advantage.id} variant={'muted'} className='p-4'>
							{advantage.icon && (
								<ItemMedia>
									<Image
										src={getImageUrl(advantage.icon.url)}
										alt={advantage.icon.alternativeText || 'icon'}
										width={24}
										height={24}
										className='w-6 h-6'
										unoptimized
									/>
								</ItemMedia>
							)}
							<ItemContent>
								<ItemDescription className='text-[#3C3C3C]'>
									{advantage.title}
								</ItemDescription>
							</ItemContent>
						</Item>
					))}
				</div>
			</div>
		</section>
	)
}
