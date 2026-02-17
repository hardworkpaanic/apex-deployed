import { getInstallationPage } from '@/actions/lib/strapi'
import {
	Contact,
	HowIsTheInstallationGoing,
	InstallationHero,
	OurInstallers,
	QualityControlSystem,
	Video,
	WhyIsItSafe,
} from '@/page/installation/widgets'
import { Questions } from '@/page/price/widgets'
import { Footer } from '@/shared/components'

export default async function InstallationPage() {
	const data = await getInstallationPage()
	return (
		<main>
			<InstallationHero heroData={data.data.hero} factsData={data.data.data} />
			<WhyIsItSafe node={data.data.nodes} why={data.data.why} />
			<Video />
			<QualityControlSystem />
			<HowIsTheInstallationGoing
				howData={data.data.how}
				technologyData={data.data.technoljgy}
				yearData={data.data.year}
			/>
			<OurInstallers
				our={data.data.our}
				garantee={data.data.garantee}
				instruments={data.data.instruments}
				statistics={data.data.statistics}
				nodes={data.data.nodes}
				system={data.data.system}
				video={data.data.video}
				whatg={data.data.whatg}
			/>
			<Contact />
			<Questions />
			<Footer />
		</main>
	)
}
