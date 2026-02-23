import { getInstallationPage } from '@/actions/lib/strapi'
import {
	HowIsTheInstallationGoing,
	InstallationHero,
	QualityControlSystem,
	Video,
	WhyIsItSafe
} from '@/page/installation/widgets'
import { Metadata } from 'next'
import dynamic from 'next/dynamic'

export const revalidate = 60

// SEO метаданные
export async function generateMetadata(): Promise<Metadata> {
	const data = await getInstallationPage()

	return {
		title: data?.data?.hero?.title || 'Монтаж | Название сайта',
		description:
			data?.data?.hero?.description || 'Профессиональный монтаж и установка',
		openGraph: {
			title: data?.data?.hero?.title,
			description: data?.data?.hero?.description,
			images: data?.data?.hero?.imageDesktop?.url
				? [data.data.hero.imageDesktop.url]
				: []
		},
		keywords: [
			'монтаж',
			'установка',
			'профессиональные монтажники',
			'качество монтажа'
		]
	}
}

// Динамический импорт для виджетов вопросов (импортируется из price)
const DynamicQuestions = dynamic(
	() => import('@/page/price/widgets').then(mod => mod.Questions),
	{
		loading: () => (
			<div className="min-h-[300px] animate-pulse bg-gray-100 rounded-3xl" />
		)
	}
)

// Динамический импорт для нижних блоков
const DynamicContact = dynamic(
	() => import('@/page/installation/widgets').then(mod => mod.Contact),
	{
		loading: () => (
			<div className="min-h-[400px] animate-pulse bg-gray-100 rounded-3xl" />
		)
	}
)

const DynamicOurInstallers = dynamic(
	() => import('@/page/installation/widgets').then(mod => mod.OurInstallers),
	{
		loading: () => (
			<div className="min-h-[500px] animate-pulse bg-gray-100 rounded-3xl" />
		)
	}
)

const DynamicFooter = dynamic(
	() => import('@/shared/components').then(mod => mod.Footer),
	{
		loading: () => <div className="min-h-[400px] animate-pulse bg-gray-100" />
	}
)

export default async function InstallationPage() {
	const data = await getInstallationPage()

	// Schema.org разметка для услуги монтажа
	const serviceJsonLd = {
		'@context': 'https://schema.org',
		'@type': 'Service',
		name: data?.data?.hero?.title,
		description: data?.data?.hero?.description,
		provider: {
			'@type': 'Organization',
			name: 'Название вашей компании',
			areaServed: 'RU'
		},
		areaServed: {
			'@type': 'Country',
			name: 'Россия'
		},
		hasOfferCatalog: {
			'@type': 'OfferCatalog',
			name: 'Услуги монтажа',
			itemListElement: [
				{
					'@type': 'Offer',
					itemOffered: {
						'@type': 'Service',
						name: 'Профессиональный монтаж'
					}
				}
			]
		}
	}

	// Schema.org для отзывов/статистики
	const reviewJsonLd = {
		'@context': 'https://schema.org',
		'@type': 'Product',
		name: 'Монтажные работы',
		review: {
			'@type': 'Review',
			reviewRating: {
				'@type': 'Rating',
				ratingValue: '5',
				bestRating: '5'
			},
			author: {
				'@type': 'Organization',
				name: 'Клиенты компании'
			}
		}
	}

	// FAQ разметка для этапов монтажа
	const faqJsonLd = {
		'@context': 'https://schema.org',
		'@type': 'FAQPage',
		mainEntity:
			data?.data?.how?.stages?.map((stage, index) => ({
				'@type': 'Question',
				name: stage.title,
				acceptedAnswer: {
					'@type': 'Answer',
					text:
						stage.list?.map(node => node.text).join(' ') ||
						`Этап ${stage.number} монтажа`
				}
			})) || []
	}

	return (
		<main>
			{/* Критические блоки (первый экран) */}
			<InstallationHero
				heroData={data.data.hero}
				factsData={data.data.data}
			/>

			{/* Блоки выше сгиба */}
			<WhyIsItSafe
				node={data.data.nodes}
				why={data.data.why}
			/>

			<Video />
			<QualityControlSystem />

			{/* Средней важности блоки */}
			<HowIsTheInstallationGoing
				howData={data.data.how}
				technologyData={data.data.technoljgy}
				yearData={data.data.year}
			/>

			{/* Блоки с ленивой загрузкой */}
			<DynamicOurInstallers
				our={data.data.our}
				garantee={data.data.garantee}
				instruments={data.data.instruments}
				statistics={data.data.statistics}
				nodes={data.data.nodes}
				system={data.data.system}
				video={data.data.video}
				whatg={data.data.whatg}
			/>

			<DynamicContact />
			<DynamicQuestions />
			<DynamicFooter />

			{/* Schema.org разметка */}
			<script
				type="application/ld+json"
				dangerouslySetInnerHTML={{ __html: JSON.stringify(serviceJsonLd) }}
			/>
			<script
				type="application/ld+json"
				dangerouslySetInnerHTML={{ __html: JSON.stringify(reviewJsonLd) }}
			/>
			<script
				type="application/ld+json"
				dangerouslySetInnerHTML={{ __html: JSON.stringify(faqJsonLd) }}
			/>
		</main>
	)
}
