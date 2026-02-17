import { getAboutUs } from '@/actions/lib/strapi'
import { AboutUs, Differences, Hero, Team } from '@/page/about/widgets'
import { Footer } from '@/shared/components'

export default async function AboutUsPage() {
	const data = await getAboutUs()

	return (
		<main>
			<Hero data={data.data.hero} />
			<AboutUs about={data.data.aboutus} facts={data.data.facts} />
			<Differences data={data.data.diffrents} />
			<Team
				team={data.data.team}
				ourins={data.data.ourins}
				control={data.data.control}
				certificates={data.data.cervicates}
				partneram={data.data.partneram}
				vakansee={data.data.vakansee}
			/>
			<Footer className='mt-0! rounded-none!' />
		</main>
	)
}
