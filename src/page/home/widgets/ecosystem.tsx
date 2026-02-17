import { Checkbox } from '@/shared/components/ui/checkbox'
import { getImageUrl } from '@/shared/lib/utils'
import { EcosystemSection } from '@/shared/models/types/home'
import Image from 'next/image'

export function Ecosystem({ data }: { data: EcosystemSection }) {
	// Разделяем элементы на две колонки
	const firstColumnItems = data.ecosystemList.filter(
		(_, index) => index % 2 === 0,
	)
	const secondColumnItems = data.ecosystemList.filter(
		(_, index) => index % 2 === 1,
	)

	return (
		<section className='w-full z-10 bg-black mt-5 text-white rounded-t-3xl md:pb-[50px] pt-15 md:pt-30'>
			<div className='container max-w-[1320px] flex flex-col md:flex-row md:justify-between gap-5 mx-auto px-4'>
				<div className='max-w-[538px]'>
					<h2 className='text-[30px] md:font-bold md:text-[48px] font-semibold leading-[110%]'>
						{data.h2}
					</h2>

					<p className='text-[14px] md:text-[16px] leading-[150%] mt-4'>
						{data.description}
					</p>

					<div className='flex items-start md:hidden mt-2 gap-2'>
						<Image
							src='/mini-logo-black.svg'
							alt='mini-logo'
							width={28}
							height={8}
							className='mt-2'
							unoptimized
						/>

						<span className='text-[15px] font-light text-[#7A7A7A] italic'>
							{data.controlText}
						</span>
					</div>

					<Image
						src='/homepage/eco/2.png'
						alt='wjwjw'
						width={519}
						height={387}
						className='mt-2 relative hidden md:block'
					/>
				</div>
				{/* TODO: Завтра доделать список */}
				<div className='w-full max-w-[700px]'>
					<span className='bg-[#171717] hidden md:block max-w-[563px] md:flex items-center gap-3 text-base py-5 px-6 md:px-7 rounded-3xl'>
						<Checkbox checked />
						{data.controlText}
					</span>

					{/* Desktop version with two columns */}
					<div className='hidden md:flex flex-row md:gap-20 justify-between px-5 pt-10'>
						{/* First column */}
						<div className='flex flex-col gap-7.5'>
							{firstColumnItems.map(item => (
								<div key={item.id} className='flex flex-row items-start gap-5'>
									<span className='text-[15px] text-[#7A7A7A] italic'>
										{item.number}
									</span>

									<div className='flex flex-col gap-2'>
										{item.image && item.image[0] && (
											<Image
												src={getImageUrl(item.image[0].url)}
												alt={item.image[0].alternativeText || item.title}
												width={92}
												height={92}
												className='w-[92px] h-[92px] rounded-xl object-cover'
											/>
										)}

										<h4 className='text-base font-semibold'>{item.title}</h4>
										<p className='text-[15px] text-[#7A7A7A]'>
											{item.description}
										</p>
									</div>
								</div>
							))}
						</div>

						{/* Second column */}
						<div className='flex flex-col gap-7.5'>
							{secondColumnItems.map(item => (
								<div key={item.id} className='flex flex-row items-start gap-5'>
									<span className='text-[15px] text-[#7A7A7A] italic'>
										{item.number}
									</span>

									<div className='flex flex-col gap-2'>
										{item.image && item.image[0] && (
											<Image
												src={getImageUrl(item.image[0].url)}
												alt={item.image[0].alternativeText || item.title}
												width={92}
												height={92}
												className='w-[92px] h-[92px] rounded-xl object-cover'
											/>
										)}

										<h4 className='text-base font-semibold'>{item.title}</h4>
										<p className='text-[15px] text-[#7A7A7A]'>
											{item.description}
										</p>
									</div>
								</div>
							))}
						</div>
					</div>

					{/* Mobile version */}
					<div className='flex md:hidden flex-col gap-5'>
						{data.ecosystemList.map(item => (
							<div key={item.id} className='flex flex-row items-start gap-5'>
								<span className='text-[15px] text-[#7A7A7A] italic'>
									{item.number}
								</span>

								<div className='flex flex-row gap-2'>
									{item.image && item.image[0] && (
										<Image
											src={getImageUrl(item.image[0].url)}
											alt={item.image[0].alternativeText || item.title}
											width={62}
											height={62}
											className='w-[62px] h-[62px] rounded-xl object-cover'
										/>
									)}

									<div className=''>
										<h4 className='text-[14px] font-semibold'>{item.title}</h4>
										<p className='text-[14px] text-[#7A7A7A]'>
											{item.description}
										</p>
									</div>
								</div>
							</div>
						))}
					</div>

					<Image
						src='/homepage/eco/flag.png'
						alt='flag'
						width={281.88591832614395}
						height={225.52248588127844}
						className='mt-5 block md:hidden'
					/>
				</div>
			</div>
		</section>
	)
}
