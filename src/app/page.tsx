import { getHomePage } from '@/actions/lib/strapi'
import {
	Differences,
	Ecosystem,
	HomeHero,
	HomeInfo,
	Materials,
	Projects,
	Research,
	Video,
} from '@/page/home/widgets'
import { Calculation } from '@/page/home/widgets/calculation'
import { Questions } from '@/page/home/widgets/questions'
import { Footer } from '@/shared/components'
import Image from 'next/image'

export default async function Home() {
	const data = await getHomePage()

	return (
		<main>
			<HomeHero data={data.data.hero} />
			<HomeInfo data={data.data.advantages} />
			<Video />
			<Materials data={data.data.material} />
			<Ecosystem data={data.data.ecosystem} />
			<Differences data={data.data.differences} />
			<Projects data={data.data.projects} />
			<Research data={data.data.research} />
			<Calculation />
			<Questions />

			<Image
				src={'telegram.svg'}
				alt='telegram'
				width={343}
				height={369}
				className='w-full block md:hidden mt-15 bg-contain bg-center'
			/>

			<div className='container max-w-[1320px] mx-auto'>
				<Image
					src={'/telegram-desctop.svg'}
					alt='telegram'
					width={1320}
					height={351}
					className='w-full h-[351px] hidden md:block mt-15 bg-contain bg-center'
				/>
			</div>

			<Footer />
		</main>
	)
}
