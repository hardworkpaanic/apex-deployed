import { getHowWeWorkPage } from '@/actions/lib/strapi'
import {
	Control,
	HowWeWorksHero,
	Stages,
	StagesList
} from '@/page/how-we-works/widgets'
import { Metadata } from 'next'
import dynamic from 'next/dynamic'

export const revalidate = 60

// SEO метаданные
export async function generateMetadata(): Promise<Metadata> {
	const data = await getHowWeWorkPage()

	const canonicalUrl = 'https://ваш-сайт.ru/how-we-works'

	return {
		title: data?.data?.hero?.title || 'Как мы работаем | Название сайта',
		description:
			data?.data?.hero?.description ||
			'Этапы работы, условия сотрудничества и контроль качества',
		alternates: {
			canonical: canonicalUrl
		},
		openGraph: {
			title: data?.data?.hero?.title,
			description: data?.data?.hero?.description,
			url: canonicalUrl,
			siteName: 'APEX',
			images: data?.data?.hero?.imageDesktop?.url
				? [
						{
							url: data.data.hero.imageDesktop.url,
							width: 1200,
							height: 630,
							alt: data.data.hero.title
						}
					]
				: [],
			locale: 'ru_RU',
			type: 'website'
		},
		twitter: {
			card: 'summary_large_image',
			title: data?.data?.hero?.title,
			description: data?.data?.hero?.description,
			images: data?.data?.hero?.imageDesktop?.url
				? [data.data.hero.imageDesktop.url]
				: []
		},
		keywords: [
			'как мы работаем',
			'этапы работы',
			'условия сотрудничества',
			'контроль качества',
			'процесс работы'
		],
		robots: {
			index: true,
			follow: true,
			googleBot: {
				index: true,
				follow: true,
				'max-video-preview': -1,
				'max-image-preview': 'large',
				'max-snippet': -1
			}
		}
	}
}

// Динамический импорт для блоков ниже сгиба
const DynamicConditions = dynamic(
	() => import('@/page/how-we-works/widgets').then(mod => mod.Conditions),
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

export default async function HowWeWorksPage() {
	const data = await getHowWeWorkPage()

	// Schema.org разметка для процесса работы (HowTo)
	const howToJsonLd = {
		'@context': 'https://schema.org',
		'@type': 'HowTo',
		name: data?.data?.stages?.h2 || 'Как мы работаем',
		description: data?.data?.stages?.de || 'Этапы нашего сотрудничества',
		step:
			data?.data?.stages?.stages2?.stages?.map((stage, index) => ({
				'@type': 'HowToStep',
				position: index + 1,
				name: stage.title,
				text: stage.importent || `Этап ${stage.number}`,
				image: stage.image?.url ? stage.image.url : undefined,
				url: `https://ваш-сайт.ru/how-we-works#step-${stage.number}`
			})) || []
	}

	// Schema.org для условий работы
	const conditionsJsonLd = {
		'@context': 'https://schema.org',
		'@type': 'Offer',
		name: 'Условия сотрудничества',
		description: 'Прозрачные условия работы и гарантии',
		areaServed: 'RU',
		availability: 'https://schema.org/InStock',
		priceSpecification: {
			'@type': 'PriceSpecification',
			priceCurrency: 'RUB',
			description: 'Индивидуальные условия'
		}
	}

	// FAQ разметка на основе вопросов этапов
	const faqItems =
		data?.data?.stages?.stages2?.stages?.flatMap(
			stage =>
				stage.questions?.map(q => ({
					'@type': 'Question',
					name: q.question,
					acceptedAnswer: {
						'@type': 'Answer',
						text: q.answer?.map(a => a.text).join(' ') || 'Ответ на вопрос'
					}
				})) || []
		) || []

	const faqJsonLd = {
		'@context': 'https://schema.org',
		'@type': 'FAQPage',
		mainEntity: faqItems
	}

	// BreadcrumbList разметка
	const breadcrumbJsonLd = {
		'@context': 'https://schema.org',
		'@type': 'BreadcrumbList',
		itemListElement: [
			{
				'@type': 'ListItem',
				position: 1,
				name: 'Главная',
				item: 'https://ваш-сайт.ru'
			},
			{
				'@type': 'ListItem',
				position: 2,
				name: 'Как мы работаем',
				item: 'https://ваш-сайт.ru/how-we-works'
			}
		]
	}

	return (
		<main>
			{/* Критические блоки (первый экран) */}
			<HowWeWorksHero
				data={data.data.hero}
				heroData={data.data.heroData}
			/>

			{/* Блоки выше сгиба */}
			<Stages
				data={data.data.stages}
				control={data.data.control}
			/>

			<StagesList stagesData={data.data.stages.stages2} />

			<Control data={data.data.yourcontrol} />

			{/* Блоки с ленивой загрузкой */}
			<DynamicConditions
				what={data.data.what}
				form={data.data.form}
				one={data.data.one}
				price={data.data.price}
				structure={data.data.structure}
			/>

			<DynamicFooter className="mt-0! rounded-none!" />

			{/* Schema.org разметка */}
			<script
				type="application/ld+json"
				dangerouslySetInnerHTML={{ __html: JSON.stringify(howToJsonLd) }}
			/>
			<script
				type="application/ld+json"
				dangerouslySetInnerHTML={{ __html: JSON.stringify(conditionsJsonLd) }}
			/>
			{faqItems.length > 0 && (
				<script
					type="application/ld+json"
					dangerouslySetInnerHTML={{ __html: JSON.stringify(faqJsonLd) }}
				/>
			)}
			<script
				type="application/ld+json"
				dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbJsonLd) }}
			/>
		</main>
	)
}
