import { getImageUrl } from '@/shared/lib/utils'
import { AboutUsSection, FactsSection } from '@/shared/models/types/about-us'
import Image from 'next/image'

export function AboutUs({
	about,
	facts,
}: {
	about: AboutUsSection
	facts: FactsSection
}) {
	return (
		<section className='container max-w-[1320px] mt-15 md:mt-30 mx-auto px-4'>
			<div className='flex flex-col md:flex-row md:justify-between'>
				<div className=''>
					<Image
						src='/mini-logo-gray.svg'
						alt='mini-logo'
						width={28}
						height={8}
						className=''
						unoptimized
					/>
					<h2 className='font-semibold text-[30px] md:text-[48px] leading-[110%]'>
						{about.h2}
					</h2>

					<p className='hidden md:block text-base mt-3'>{about.description}</p>
				</div>

				{/* TODO: Добавить сепараторы */}

				<div className='flex flex-col w-full md:max-w-[640px] md:mt-0 mt-5 gap-5'>
					<p className='text-[#3C3C3C] text-[14px] md:text-base leading-[150%]'>
						<span className='font-semibold'>APEX</span> {about.text}
					</p>

					<p className='text-[#3C3C3C] text-[14px] md:text-base leading-[150%]'>
						<span className='font-semibold'>Наша миссия —</span> {about.text2}
					</p>

					<p className='text-[#3C3C3C] text-[14px] md:text-base leading-[150%]'>
						{about.text3}
					</p>
				</div>
			</div>

			<Image
				src={getImageUrl(about.image.url)}
				alt={about.h2}
				width={342.99871826171875}
				height={99.328125}
				className='w-full md:hidden h-auto mt-10'
			/>

			<Image
				src={getImageUrl(about.image.url)}
				alt={about.h2}
				width={342.99871826171875}
				height={99.328125}
				className='w-full hidden md:block h-auto md:mt-30 mt-15'
			/>

			<div className='flex flex-col w-full gap-10 md:py-15 md:flex-row md:justify-between'>
				<div className='w-full md:max-w-[490px]'>
					<p className='text-[#3C3C3C] italic mt-5 md:text-[20px] text-[16px] font-semibold leading-[150%]'>
						{about.ourmission}
					</p>

					<p className='text-[#3C3C3C] italic md:text-[20px] md:mt-2 text-[14px] leading-[150%]'>
						{about.p1}
					</p>

					<p className='text-base italic font-semibold md:text-[20px] leading-[150%]'>
						{about.slogan}
					</p>
				</div>

				<div className='w-full flex justify-end'>
					<Image
						src={'/about-us/numbers.svg'}
						width={640.224609375}
						height={214}
						alt='numbers'
					/>
				</div>
			</div>

			{/* Блок с цифрами */}
			<div className='w-full justify-center mt-10 md:mt-30 text-center items-center'>
				<h2 className='font-semibold text-[22px] md:text-[48px] md:font-bold leading-[110%] text-center'>
					{facts.h2}
				</h2>
			</div>

			<div className='bg-[#F3F3F3] mt-5 flex flex-row rounded-3xl'>
				{facts.facts && facts.facts.length > 0 && (
					<>
						{/* Разбиваем факты на 4 колонки */}
						{[0, 1, 2, 3].map(colIndex => (
							<div
								key={colIndex}
								className={`w-full ${
									colIndex < 3 ? 'border-r-2 border-white' : ''
								}`}
							>
								{facts.facts.slice(colIndex * 2, colIndex * 2 + 2).map(fact => (
									<div
										key={fact.id}
										className='flex justify-center flex-col border-b-2 last:border-b-0 border-white py-5 md:py-12.5 px-4 items-center gap-2'
									>
										<span className='text-[22px] md:text-[48px] font-bold'>
											{fact.text1}
										</span>
										<span className='text-center'>{fact.text2}</span>
									</div>
								))}
							</div>
						))}
					</>
				)}
			</div>
		</section>
	)
}
