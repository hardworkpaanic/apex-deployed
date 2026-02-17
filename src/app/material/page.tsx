import { getMaterialPage } from '@/actions/lib/strapi'
import {
	Certificates,
	Characteristics,
	Comparisons,
	Hero,
	Production,
	Questions,
	Video,
} from '@/page/materials/widgets'
import { Footer } from '@/shared/components'
import Image from 'next/image'

export default async function MaterialPage() {
	const data = await getMaterialPage()
	return (
		<main>
			<Hero data={data.data.hero} />
			<div className='mt-16 md:mt-30 container max-w-[1320px] mx-auto px-4'>
				<div className='bg-[#3C3C3C] md:h-[320px] relative h-[386px] rounded-3xl text-white flex flex-col justify-end md:justify-center'>
					<Image
						src='/materials/materials.svg'
						alt='materials'
						width={427}
						height={280}
						className='w-full max-w-[427px]  absolute top-0 z-0 object-cover rounded-3xl '
						unoptimized
					/>
					<div className='p-6 z-10 md:pl-100'>
						<Image
							src='/mini-logo.svg'
							alt='mini-logo'
							width={28}
							height={8}
							className=''
							unoptimized
						/>

						<h2 className='font-semibold mt-7 text-[22px] leading-[110%]'>
							{data.data.whatisthis.h2}
						</h2>

						<p className='italic mt-2 text-white/70 text-[14px] leading-[150%]'>
							{data.data.whatisthis.description}
						</p>
					</div>
				</div>
			</div>

			<Video video={data.data.video} videoText={data.data.videotext} />
			<Characteristics
				characteristicsData={data.data.characteristics}
				additionalData={data.data.adFeatures}
			/>
			<Comparisons economy={data.data.economy} why={data.data.why} />
			<Production />
			<Certificates cer={data.data.cer} from={data.data.form} />
			<Questions />
			<Footer />
		</main>
	)
}
