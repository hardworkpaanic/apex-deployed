import { Separator } from '@/shared/components/ui/separator'
import { getImageUrl } from '@/shared/lib/utils'
import { MaterialSection } from '@/shared/models/types/home'
import Image from 'next/image'

export function Materials({ data }: { data: MaterialSection }) {
	return (
		<section className='container max-w-[1320px] md:pt-[120px] pb-[108px] mt-12.5 mx-auto px-4 flex  flex-col'>
			<div className='flex gap-5 md:gap-20 flex-col md:flex-row'>
				{/* Мобильное изображение */}
				{data.mobileImage?.[0] && (
					<Image
						src={getImageUrl(data.mobileImage[0].url)}
						alt={data.mobileImage[0].alternativeText || 'material'}
						width={data.mobileImage[0].width}
						height={data.mobileImage[0].height}
						unoptimized
						className='bg-cover md:hidden w-full bg-center'
					/>
				)}

				{/* Десктопное изображение */}
				{data.image?.[0] && (
					<Image
						src={getImageUrl(data.image[0].url)}
						alt={data.image[0].alternativeText || 'material'}
						width={data.image[0].width}
						height={data.image[0].height}
						className='bg-cover hidden md:block w-full bg-center'
					/>
				)}

				<div className='flex flex-col justify-center gap-5'>
					<div className='flex items-center gap-2'>
						<Image
							src='/mini-logo-gray.svg'
							alt='mini-logo'
							width={28}
							height={8}
							className=''
							unoptimized
						/>

						<span className='text-[15px] font-light text-[#7A7A7A] italic'>
							материалы
						</span>
					</div>
					<h2 className='font-semibold text-[30px] md:text-[42px] md:max-w-[520px] leading-[110%]'>
						{data.h2}
					</h2>

					<blockquote className='mt-6 border-l-2 md:max-w-[420px] text-[14px] md:text-[16px] leading-[150%]  pl-6 italic'>
						{data.blockquote}
					</blockquote>

					<span className='text-base font-semibold md:text-[16px] text-black mt-3'>
						Состав:
					</span>

					{/* TODO: Вынести #7A7A7A как отдельный цвет */}
					<p className='text-[14px] md:text-[16px] leading-[150%] text-[#7A7A7A]'>
						{data.structure}
					</p>

					{/* TODO: Исправить Баг  */}
					<div className='flex sm:hidden gap-5 flex-col'>
						<div className='flex justify-between items-center'>
							{data.ad?.slice(0, 2).map(item => (
								<div
									key={item.id}
									className='flex w-[166px] justify-center flex-col items-center gap-3'
								>
									{item.icon && (
										<Image
											src={getImageUrl(item.icon.url)}
											alt={item.title}
											width={48}
											height={48}
											unoptimized
										/>
									)}
									<Separator className='h-0.5! w-6.5!' />
									<span className='text-[12px] text-center leading-[140%] text-[#3C3C3C]'>
										{item.title}
									</span>
								</div>
							))}
						</div>
						<div className='flex justify-between items-center'>
							{data.ad?.slice(2, 4).map(item => (
								<div
									key={item.id}
									className='flex w-[166px] justify-center flex-col items-center gap-3'
								>
									{item.icon && (
										<Image
											src={getImageUrl(item.icon.url)}
											alt={item.title}
											width={48}
											height={48}
											unoptimized
										/>
									)}
									<Separator className='h-0.5! w-6.5!' />
									<span className='text-[12px] text-center leading-[140%] text-[#3C3C3C]'>
										{item.title}
									</span>
								</div>
							))}
						</div>
					</div>
				</div>
			</div>

			<div className='w-full mt-[110px] hidden md:flex justify-between'>
				{data.ad?.map(item => (
					<div
						key={item.id}
						className='flex justify-center flex-col items-center gap-3'
					>
						{item.icon && (
							<Image
								src={getImageUrl(item.icon.url)}
								alt={item.title}
								width={48}
								height={48}
								unoptimized
							/>
						)}
						<Separator className='h-0.5! w-6.5!' />
						<span className='text-[12px] md:text-base leading-[140%] text-[#3C3C3C]'>
							{item.title}
						</span>
					</div>
				))}
			</div>
		</section>
	)
}
