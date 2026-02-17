import { Button } from '@/shared/components'
import { Slider } from '@/shared/components/shared/slider'
import { getImageUrl } from '@/shared/lib/utils'
import {
	AdFeaturesSection,
	CharacteristicsSection,
} from '@/shared/models/types/material'
import { ArrowUpRight } from 'lucide-react'
import Image from 'next/image'

interface Props {
	characteristicsData: CharacteristicsSection
	additionalData: AdFeaturesSection
}

export function Characteristics({
	characteristicsData,
	additionalData,
}: Props) {
	// Разбиваем характеристики на две колонки по 3 элемента
	const firstColumn = characteristicsData.characteristics.slice(0, 3)
	const secondColumn = characteristicsData.characteristics.slice(3, 6)
	return (
		<section className='container max-w-[1320px] mt-15 md:mt-30 mx-auto px-4'>
			<div className='flex flex-col gap-2'>
				<Image
					src='/mini-logo-gray.svg'
					alt='mini-logo'
					width={28}
					height={8}
					className=''
					unoptimized
				/>
				<h2 className='font-semibold text-[30px] md:text-[42px] md:max-w-[600px] leading-[110%]'>
					{characteristicsData.h2}
				</h2>
			</div>

			<div className='mt-10'>
				<div className='w-full hidden md:flex flex-col md:flex-row md:justify-between gap-4'>
					{firstColumn.map(item => (
						<div
							key={item.id}
							className='bg-[#F3F3F3] w-full md:max-w-[427px] rounded-3xl flex flex-col gap-2 px-4 pb-32 md:p-7 md:pb-15 py-5'
						>
							{item.image && item.image[0] && (
								<Image
									src={getImageUrl(item.image[0].url)}
									alt={item.image[0].alternativeText || 'characteristic icon'}
									width={32}
									height={32}
									className='w-8 h-8'
									unoptimized
								/>
							)}

							<span className='text-[18px] md:mt-7 font-bold'>
								{item.text1}
							</span>

							<p className='text-[14px] md:text-base'>{item.text2}</p>
						</div>
					))}
				</div>

				<div className='w-full md:flex hidden flex-col mt-4 md:flex-row md:justify-between gap-4'>
					{secondColumn.map(item => (
						<div
							key={item.id}
							className='bg-[#F3F3F3] w-full md:max-w-[427px] rounded-3xl flex flex-col gap-2 px-4 pb-12 py-5 md:p-7 md:pb-15'
						>
							{item.image && item.image[0] && (
								<Image
									src={getImageUrl(item.image[0].url)}
									alt={item.image[0].alternativeText || 'characteristic icon'}
									width={32}
									height={32}
									className='w-8 h-8'
									unoptimized
								/>
							)}

							<span className='text-[18px] md:mt-7 font-bold'>
								{item.text1}
							</span>

							<p className='text-[14px] md:text-base'>{item.text2}</p>
						</div>
					))}
				</div>
				<Slider
					items={characteristicsData.characteristics.map((item, index) => (
						<div
							key={index}
							className='bg-[#F3F3F3] w-full md:max-w-[427px] h-[206px] rounded-3xl flex flex-col gap-2 px-4 pb-32 md:p-7 md:pb-15 py-5'
						>
							<Image
								src={getImageUrl(item.image[0].url)}
								alt='scales'
								width={32}
								height={32}
							/>

							<span className='text-[18px] md:mt-7 font-bold'>
								{item.text1}
							</span>

							<p className='text-[14px] md:text-base'>{item.text2}</p>
						</div>
					))}
				/>
				{/* Дополнительные характеристики */}
				<div className='bg-[#3C3C3C] md:items-center md:mt-[45px] relative flex flex-col md:flex-row md:justify-between text-white mt-5 rounded-3xl md:p-[60px] px-4 py-7'>
					<div className='flex flex-col'>
						<h4 className='text-[22px] font-bold'>{additionalData.h3}</h4>

						<div className='flex flex-col md:flex-row md:gap-10'>
							{/* Разбиваем дополнительные характеристики на две колонки */}
							<p className='text-[14px] mt-3 leading-[150%]'>
								{additionalData.additionalFeatures
									.slice(0, 3)
									.map((feature, index) => (
										<span key={index}>
											- {feature}
											{index < 2 && <br />}
										</span>
									))}
							</p>

							<p className='text-[14px] mt-3 leading-[150%]'>
								{additionalData.additionalFeatures
									.slice(3, 6)
									.map((feature, index) => (
										<span key={index}>
											- {feature}
											{index < 2 && <br />}
										</span>
									))}
							</p>

							{/* Декоративное изображение */}
							<Image
								src={'/materials/apex.png'}
								alt='apex'
								width={954}
								height={269}
								className='absolute bottom-0 top-[-20px] z-0 right-0'
								unoptimized
							/>
						</div>
					</div>

					<Button size={'lg'} className='rounded-3xl mt-5 z-10 font-bold'>
						{additionalData.butonText} <ArrowUpRight />
					</Button>
				</div>
			</div>
		</section>
	)
}
