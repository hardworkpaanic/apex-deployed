import { Button } from '@/shared/components'
import { getImageUrl } from '@/shared/lib/utils'
import { HeroSection } from '@/shared/models/types/price'
import { ArrowUpRight } from 'lucide-react'
import Image from 'next/image'
import React from 'react'

export function PriceHero({ data }: { data: HeroSection }) {
	return (
		<>
			{/* Мобильная версия */}
			<section
				className='md:hidden text-white w-full h-168.25 bg-cover bg-center h-[504px] rounded-3xl flex flex-col py-10'
				style={{
					backgroundImage: `url(${getImageUrl(data.imageMobile.url)})`,
				}}
			>
				<div className='container max-w-[1320px] mx-auto px-4'>
					<Image
						src='/mini-logo.svg'
						alt='mini-logo'
						width={28}
						height={8}
						className=''
						unoptimized
					/>

					<h1 className='font-semibold mt-4 text-[30px] leading-[110%]'>
						{data.title}
					</h1>

					<p className='italic mt-2 text-white/70 text-[14px] leading-[150%]'>
						{data.description.split('\n').map((line, index) => (
							<React.Fragment key={index}>
								{line}
								{index < data.description.split('\n').length - 1 && <br />}
							</React.Fragment>
						))}
					</p>

					<div className='flex gap-2 flex-row md:justify-between mt-8'>
						<Button
							size={'lg'}
							variant={'secondary'}
							className='text-[15px] font-bold px-7 py-4'
						>
							{data.buttonText} <ArrowUpRight />
						</Button>
					</div>
				</div>
			</section>

			{/* Десктопная версия */}
			<section className='hidden md:flex container max-w-[1320px] mx-auto px-4 text-white w-full h-[480px] bg-cover bg-center flex-col'>
				<div
					className='container px-[60px] py-6.25 flex-1 flex flex-col bg-cover bg-center rounded-3xl justify-center'
					style={{
						backgroundImage: `url(${getImageUrl(data.imageDesktop.url)})`,
					}}
				>
					<div className='space-y-4'>
						<div>
							<Image
								src='/mini-logo.svg'
								alt='mini-logo'
								width={28}
								height={8}
								unoptimized
							/>
						</div>

						<h1 className='font-semibold max-w-[817px] text-[54px] leading-[110%]'>
							{data.title}
						</h1>

						<p className='italic mt-2 text-white/70 text-[16px] md:text-[20px] leading-[150%]'>
							{data.description.split('\n').map((line, index) => (
								<React.Fragment key={index}>
									{line}
									{index < data.description.split('\n').length - 1 && <br />}
								</React.Fragment>
							))}
						</p>

						<div className='flex gap-2 flex-row justify-between mt-8'>
							<Button size={'lg'} variant={'secondary'} className='font-bold'>
								{data.buttonText} <ArrowUpRight />
							</Button>
						</div>
					</div>
				</div>
			</section>
		</>
	)
}
