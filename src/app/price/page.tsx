import { getPricePage } from '@/actions/lib/strapi'
import {
	Landmark,
	PriceHero,
	PricingFactors,
	Questions,
	Works,
} from '@/page/price/widgets'
import { Footer } from '@/shared/components'

export default async function PricePage() {
	const data = await getPricePage()

	return (
		<main>
			<PriceHero data={data.data.hero} />
			<Landmark
				investment={data.data.investment}
				allInclusiveSection={data.data.allInclusive}
			/>
			<PricingFactors data={data.data.pricefactors} />
			<Works
				projects={data.data.projects}
				fullPrice={data.data.fullPrice}
				payment={data.data.payment}
				form={data.data.form}
			/>
			<Questions />
			<Footer />
		</main>
	)
}
