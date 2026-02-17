import { Button } from '@/shared/components'
import { getImageUrl } from '@/shared/lib/utils'
import { HeroSection } from '@/shared/models/types/material'
import { ArrowUpRight } from 'lucide-react'
import Image from 'next/image'

export function Hero({ data }: { data: HeroSection }) {
	return (
		<section className='container max-w-[1320px] mx-auto px-4'>
			{/* Мобильное изображение */}
			<Image
				src={getImageUrl(data.imageMobile.url)}
				alt={data.imageMobile.alternativeText || 'hero background mobile'}
				width={data.imageMobile.width}
				height={data.imageMobile.height}
				className='bg-cover md:hidden w-full bg-center mt-10'
			/>

			<div className='flex flex-row md:items-center md:justify-between md:gap-15'>
				<div className='mt-10'>
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

					{/* Заголовок с выделением ключевых слов */}
					<h2 className='font-semibold mt-2 text-[30px] max-w-[650px] md:text-[48px] leading-[110%]'>
						{data.title}
					</h2>

					{/* Описание с выделением чисел */}
					<p className='mt-5 text-[14px] md:text-[16px] max-w-[480px] leading-[150%] text-[#3C3C3C]'>
						{data.description}
					</p>

					<Button size={'lg'} className='mt-10.5'>
						{data.buttonText} <ArrowUpRight />
					</Button>
				</div>

				{/* Десктопное изображение */}
				<Image
					src={getImageUrl(data.imageDesktop.url)}
					alt={data.imageDesktop.alternativeText || 'hero background desktop'}
					width={data.imageDesktop.width}
					height={data.imageDesktop.height}
					className='object-cover hidden md:block max-w-[640px] max-h-[400px] object-center mt-10'
				/>
			</div>
		</section>
	)
}
