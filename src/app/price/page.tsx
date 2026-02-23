import { getPricePage } from '@/actions/lib/strapi'
import {
	Landmark,
	PriceHero,
	PricingFactors,
	Works
} from '@/page/price/widgets'
import { ApiResponse } from '@/shared/models/types/price'
import { Metadata } from 'next'
import dynamic from 'next/dynamic'

export const revalidate = 60

// SEO метаданные
export async function generateMetadata(): Promise<Metadata> {
	const data = await getPricePage()

	const canonicalUrl = 'https://apex.ru/price'

	return {
		title: data?.data?.hero?.title || 'Цены | Название сайта',
		description:
			data?.data?.hero?.description ||
			'Стоимость услуг, цены на монтаж и оборудование, факторы ценообразования',
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
			'цены',
			'стоимость услуг',
			'прайс-лист',
			'факторы ценообразования',
			'рассчитать стоимость',
			'оплата',
			'инвестиции'
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
const DynamicQuestions = dynamic(
	() => import('@/page/price/widgets').then(mod => mod.Questions),
	{
		loading: () => (
			<div className="min-h-[300px] animate-pulse bg-gray-100 rounded-3xl" />
		)
	}
)

const DynamicFooter = dynamic(
	() => import('@/shared/components').then(mod => mod.Footer),
	{
		loading: () => <div className="min-h-[400px] animate-pulse bg-gray-100" />
	}
)

export default async function PricePage() {
	const data = await getPricePage()

	// Schema.org разметка для страницы цен
	const productJsonLd = {
		'@context': 'https://schema.org',
		'@type': 'Product',
		name: 'Услуги монтажа и оборудование',
		description: data?.data?.hero?.description || 'Цены на услуги',
		brand: {
			'@type': 'Brand',
			name: 'Название вашей компании'
		},
		offers: {
			'@type': 'AggregateOffer',
			priceCurrency: 'RUB',
			availability: 'https://schema.org/InStock',
			lowPrice: calculateMinPrice(data), // Функция для расчета мин. цены
			highPrice: calculateMaxPrice(data), // Функция для расчета макс. цены
			offerCount: data?.data?.pricefactors?.factors?.length || 0
		}
	}

	// Schema.org для таблицы цен
	const tableJsonLd = {
		'@context': 'https://schema.org',
		'@type': 'Table',
		name: data?.data?.investment?.h2 || 'Таблица стоимости',
		description:
			data?.data?.investment?.description || 'Сравнение цен и условий',
		about: 'Цены на услуги и оборудование'
	}

	// Schema.org для этапов оплаты
	const paymentJsonLd = {
		'@context': 'https://schema.org',
		'@type': 'PaymentMethod',
		name: 'Способы оплаты',
		description: data?.data?.payment?.description || 'Удобные способы оплаты',
		paymentMethodType: 'Расчетный счет, наличные, карты'
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
				name: 'Цены',
				item: 'https://ваш-сайт.ru/price'
			}
		]
	}

	return (
		<main>
			{/* Критические блоки (первый экран) */}
			<PriceHero data={data.data.hero} />

			{/* Блоки выше сгиба */}
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

			{/* Блоки с ленивой загрузкой */}
			<DynamicQuestions />
			<DynamicFooter />

			{/* Schema.org разметка */}
			<script
				type="application/ld+json"
				dangerouslySetInnerHTML={{ __html: JSON.stringify(productJsonLd) }}
			/>
			<script
				type="application/ld+json"
				dangerouslySetInnerHTML={{ __html: JSON.stringify(tableJsonLd) }}
			/>
			<script
				type="application/ld+json"
				dangerouslySetInnerHTML={{ __html: JSON.stringify(paymentJsonLd) }}
			/>
			<script
				type="application/ld+json"
				dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbJsonLd) }}
			/>
		</main>
	)
}

// Вспомогательные функции для расчета цен
function calculateMinPrice(data: ApiResponse): number {
	// Логика расчета минимальной цены из данных
	const prices =
		data?.data?.fullPrice?.listitems?.map(item => {
			const priceMatch = item.text?.match(/\d+/g)
			return priceMatch ? parseInt(priceMatch[0]) : Infinity
		}) || []

	return Math.min(...prices, 10000) // Значение по умолчанию
}

function calculateMaxPrice(data: ApiResponse): number {
	// Логика расчета максимальной цены из данных
	const prices =
		data?.data?.fullPrice?.listitems?.map(item => {
			const priceMatch = item.text?.match(/\d+/g)
			return priceMatch ? parseInt(priceMatch[0]) : 0
		}) || []

	return Math.max(...prices, 1000000) // Значение по умолчанию
}
