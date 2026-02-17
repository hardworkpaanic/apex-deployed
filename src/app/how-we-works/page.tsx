import { getHowWeWorkPage } from '@/actions/lib/strapi'
import {
	Conditions,
	Control,
	HowWeWorksHero,
	Stages,
	StagesList,
} from '@/page/how-we-works/widgets'
import { Footer } from '@/shared/components'

export default async function HowWeWorksPage() {
	const data = await getHowWeWorkPage()
	console.log(data.data.yourcontrol)
	return (
		<main>
			<HowWeWorksHero data={data.data.hero} heroData={data.data.heroData} />
			<Stages data={data.data.stages} control={data.data.control} />
			<StagesList stagesData={data.data.stages.stages2} />
			<Control data={data.data.yourcontrol} />
			<Conditions
				what={data.data.what}
				form={data.data.form}
				one={data.data.one}
				price={data.data.price}
				structure={data.data.structure}
			/>
			<Footer className='mt-0! rounded-none!' />
		</main>
	)
}
