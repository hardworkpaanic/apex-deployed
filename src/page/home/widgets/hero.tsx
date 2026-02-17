'use client'

import { Button } from '@/shared/components'
import { getImageUrl } from '@/shared/lib/utils'
import { HeroSection } from '@/shared/models/types/home'
import { ArrowDown, ArrowUpRight } from 'lucide-react'
import { motion } from 'motion/react'
import Image from 'next/image'

export function HomeHero({ data }: { data: HeroSection }) {
	return (
		<>
			<section
				className='md:hidden text-white w-full h-168.25 bg-cover bg-center rounded-3xl flex flex-col'
				style={{
					backgroundImage: `url(${getImageUrl(data.imageMobile.url)})`,
				}}
			>
				<div className='container mx-auto max-w-[1330px] px-4 py-6.25 flex-1 flex flex-col justify-end'>
					<div className='space-y-4'>
						<Image
							src='/mini-logo.svg'
							alt='mini-logo'
							width={28}
							height={8}
							className=''
							unoptimized
						/>

						<h1 className='font-semibold text-[30px] leading-[110%]'>
							{data.title}
						</h1>

						<p className='italic mt-2 text-white/70 text-[14px] leading-[150%]'>
							{data.description}{' '}
						</p>
						{/* TODO: Доделать ещё одну кнопку */}
						<div className='flex gap-2 flex-row justify-between mt-8'>
							<div className='flex gap-2 flex-row'>
								<Button variant={'secondary'}>{data.buttonText}</Button>
								<Button className='md:hidden' variant={'secondary'}>
									<ArrowUpRight />
								</Button>
							</div>

							<motion.button
								className='border-none rounded-full bg-white/10 w-[40px] h-[40px] justify-center items-center flex backdrop-blur-sm'
								initial={{ rotate: -90, opacity: 0.2 }}
								animate={{ rotate: 0, opacity: 1 }}
								transition={{ duration: 0.6, delay: 1, type: 'spring' }}
								whileHover={{
									scale: 1.1,
									rotate: 360,
									transition: { duration: 0.4 },
								}}
								whileTap={{ scale: 0.9 }}
							>
								<ArrowDown size={16} />
							</motion.button>
						</div>
					</div>
				</div>
			</section>

			{/* Desktop */}
			<section className='hidden md:flex container max-w-[1330px] mx-auto px-4 text-white w-full h-[580px] bg-cover bg-center flex-col'>
				<motion.div
					className='container max-w-[1320px] px-[60px] py-6.25 flex-1 flex flex-col bg-cover bg-center rounded-3xl justify-center'
					style={{
						backgroundImage: `url(${getImageUrl(data.imageDesktop.url)})`,
					}}
					initial={{ opacity: 0.95 }}
					whileInView={{ opacity: 1 }}
					transition={{ duration: 0.1 }}
					viewport={{ once: true }}
				>
					<div className='space-y-4'>
						<motion.div
							initial={{ x: -10, opacity: 0.2 }}
							animate={{ x: 0, opacity: 1 }}
							transition={{ duration: 0.1, delay: 0.2 }}
						>
							<Image
								src='/mini-logo.svg'
								alt='mini-logo'
								width={28}
								height={8}
								unoptimized
							/>
						</motion.div>

						<motion.h1
							className='font-semibold max-w-[817px] text-[54px] leading-[110%]'
							initial={{ y: 10, opacity: 0.2 }}
							animate={{ y: 0, opacity: 1 }}
							transition={{
								duration: 0.2,
								delay: 0.4,
								type: 'spring',
								stiffness: 50,
							}}
						>
							{data.title}
						</motion.h1>

						<motion.p
							className='italic mt-2 text-white/70 text-[16px] leading-[150%]'
							initial={{ y: 10, opacity: 0.2 }}
							animate={{ y: 0, opacity: 1 }}
							transition={{ duration: 0.3, delay: 0.6 }}
						>
							{data.description}
						</motion.p>

						<motion.div
							className='flex gap-2 flex-row justify-between mt-8'
							initial={{ y: 15, opacity: 0.2 }}
							animate={{ y: 0, opacity: 1 }}
							transition={{ duration: 0.4, delay: 0.8 }}
						>
							<Button size={'lg'} variant={'secondary'}>
								{data.buttonText}
							</Button>

							<motion.button
								className='border-none rounded-full bg-white/10 w-[60px] h-[60px] justify-center items-center flex backdrop-blur-sm'
								initial={{ rotate: -90, opacity: 0.2 }}
								animate={{ rotate: 0, opacity: 1 }}
								transition={{ duration: 0.6, delay: 1, type: 'spring' }}
								whileHover={{
									scale: 1.1,
									rotate: 360,
									transition: { duration: 0.4 },
								}}
								whileTap={{ scale: 0.9 }}
							>
								<ArrowDown />
							</motion.button>
						</motion.div>
					</div>
				</motion.div>
			</section>
		</>
	)
}
