import { Button } from '@/shared/components'
import { getImageUrl } from '@/shared/lib/utils'
import { ResearchSection } from '@/shared/models/types/home'
import Image from 'next/image'

export function Research({ data }: { data: ResearchSection }) {
	return (
		<section className='container max-w-[1320px] mt-15 md:mt-24 mx-auto px-4'>
			<div className='flex flex-col md:flex-row md:items-start md:justify-between'>
				<div className=''>
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
						{data.description}
					</h2>

					<p className='mt-5 text-[14px] md:text-[16px] leading-[150%] text-[#3C3C3C]'>
						Экономика фасадного декора: полный расчёт стоимости владения
					</p>

					<Button size={'lg'} className='mt-10.5'>
						{data.butt}
					</Button>
				</div>
				{/* Мобильное изображение */}
				<Image
					src={getImageUrl(data.imageMobile.url)}
					alt={data.imageMobile.alternativeText || 'research'}
					width={data.imageMobile.width}
					height={data.imageMobile.height}
					className='w-full block md:hidden bg-contain bg-center mt-7.5'
					unoptimized
				/>

				{/* Десктопное изображение */}
				<Image
					src={getImageUrl(data.imageDesktop.url)}
					alt={data.imageDesktop.alternativeText || 'research'}
					width={data.imageDesktop.width}
					height={data.imageDesktop.height}
					className='hidden md:block bg-contain bg-center mt-7.5'
					unoptimized
				/>
			</div>
		</section>
	)
}
