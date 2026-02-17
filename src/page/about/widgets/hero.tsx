import { Button } from '@/shared/components'
import { cn, getImageUrl } from '@/shared/lib/utils'
import { HeroSection } from '@/shared/models/types/about-us'
import { ArrowUpRight } from 'lucide-react'
import Image from 'next/image'

export function Hero({ data }: { data: HeroSection }) {
	return (
		<>
			<section className="bg-[url('/about-us/hero-bg.jpg')] md:hidden text-white w-full h-168.25 bg-cover bg-center rounded-3xl flex flex-col">
				<div className='container max-w-[1320px] mx-auto px-4 py-12 flex-1 flex flex-col'>
					<div className='space-y-4'>
						<Image
							src={'/logo-white.svg'}
							width={94.46}
							height={28}
							alt='Logo'
							unoptimized
						/>

						<h1 className='font-semibold text-[30px] leading-[110%]'>
							{data.title}
						</h1>

						<p className='italic mt-2 text-white/70 text-[14px] leading-[150%]'>
							{data.description}
						</p>
						{/* TODO: Доделать ещё одну кнопку */}
						<div className='flex gap-2 flex-row md:justify-between mt-8'>
							<Button variant={'secondary'}>
								{data.buttonText} <ArrowUpRight />
							</Button>
						</div>
					</div>
				</div>
			</section>

			{/* Desctop */}

			<section className='hidden md:flex container max-w-[1320px] mx-auto px-4 text-white w-full md:h-[480px] bg-cover bg-center flex-col'>
				<div
					style={{
						backgroundImage: `url(${getImageUrl(data.imageDesktop.url)})`,
					}}
					className={cn(
						'container  px-[60px] py-2.25 flex-1 flex flex-col bg-cover bg-center md:h-[480px] rounded-3xl justify-center',
					)}
				>
					<div className='space-y-4 flex flex-col justify-between h-full py-[93px]'>
						<div className=''>
							<div>
								<Image
									src='/logo-white.svg'
									alt='logo'
									width={94.46}
									height={28}
									unoptimized
								/>
							</div>

							<h1 className='font-semibold max-w-[817px] text-[54px] leading-[110%]'>
								{data.title}
							</h1>

							<p className='italic mt-2 text-white/70 text-[16px] leading-[150%]'>
								{data.description}
							</p>
						</div>

						<div className='flex gap-2 flex-row justify-between mt-8'>
							<Button size={'lg'} variant={'secondary'}>
								{data.buttonText} <ArrowUpRight />
							</Button>
						</div>
					</div>
				</div>
			</section>
		</>
	)
}
