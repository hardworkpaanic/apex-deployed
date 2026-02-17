import { Button } from '@/shared/components'
import { cn, getImageUrl } from '@/shared/lib/utils'
import { DataSection, HeroSection } from '@/shared/models/types/installation'
import { ArrowDown, ArrowUpRight } from 'lucide-react'
import Image from 'next/image'

interface InstallationHeroProps {
	heroData: HeroSection
	factsData: DataSection
}

export function InstallationHero({
	heroData,
	factsData,
}: InstallationHeroProps) {
	return (
		<>
			{/* Mobile */}
			<section className="bg-[url('/installation/hero-bg.jpg')] md:hidden text-white w-full h-168.25 bg-cover bg-center h-[504px] rounded-3xl justify-end flex flex-col py-10">
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
						{heroData.title}
					</h1>

					<p className='italic mt-2 text-white/70 text-[14px] leading-[150%]'>
						{heroData.description}
					</p>

					<div className='flex gap-2 flex-row justify-between mt-8'>
						<Button
							size={'lg'}
							variant={'secondary'}
							className='text-[15px] font-bold px-7 py-4'
						>
							{heroData.buttonText} <ArrowUpRight />
						</Button>

						<button className='border-none rounded-full bg-white/10 w-[40px] h-[40px] justify-center items-center flex backdrop-blur-sm'>
							<ArrowDown size={16} />
						</button>
					</div>
				</div>
			</section>

			{/* Desktop */}
			<section className='hidden md:flex container max-w-[1320px] mx-auto px-4 text-white w-full h-[480px] flex-col'>
				<div
					className='container px-[60px] py-6.25 flex-1 flex flex-col bg-cover h-[480px] w-full bg-center rounded-3xl justify-center'
					style={{
						backgroundImage: `url(${getImageUrl(heroData.imageDesktop.url)})`,
					}}
				>
					<div className='space-y-4 flex flex-col justify-between h-full py-[93px]'>
						<div className=''>
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
								{heroData.title}
							</h1>

							<p className='italic mt-2 max-w-[596px] text-white/70 text-[16px] leading-[150%]'>
								{heroData.description}
							</p>
						</div>

						<div className='flex gap-2 flex-row justify-between mt-8'>
							<Button size={'lg'} variant={'secondary'} className='font-bold'>
								{heroData.buttonText} <ArrowUpRight />
							</Button>
						</div>
					</div>
				</div>
			</section>

			{/* Facts Section */}
			<div className='flex flex-col md:w-full md:justify-between md:items-center md:px-40 md:flex-row container mt-5 max-w-[1320px] mx-auto px-4'>
				{factsData.data.map((fact, index) => (
					<div
						key={fact.id}
						className={cn(
							'flex md:flex-col justify-between py-2 items-center w-full',
							index === 1 && 'border-b md:border-none border-t border-#EDEDED',
						)}
					>
						<span className='text-[30px] md:text-[46px] font-semibold'>
							{fact.text1}
						</span>
						<span className='text-[12px] md:text-base italic'>
							{fact.text2}
						</span>
					</div>
				))}
			</div>
		</>
	)
}
