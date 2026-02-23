import { getAboutUs } from '@/actions/lib/strapi'
import { Hero } from '@/page/about/widgets'
import { Metadata } from 'next'
import dynamic from 'next/dynamic'

export const revalidate = 60

// SEO метаданные
export async function generateMetadata(): Promise<Metadata> {
	const data = await getAboutUs()

	const canonicalUrl = 'https://apex.ru/about'

	return {
		title: data?.data?.hero?.title || 'О компании | Название сайта',
		description:
			data?.data?.hero?.description ||
			'Информация о компании, команде, производстве и наших преимуществах',
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
			'о компании',
			'команда',
			'производство',
			'сертификаты',
			'вакансии',
			'партнерам',
			'преимущества',
			'миссия компании'
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

// Динамический импорт для всех виджетов страницы "О нас"
const DynamicAboutUs = dynamic(
	() => import('@/page/about/widgets').then(mod => mod.AboutUs),
	{
		loading: () => (
			<div className="min-h-[400px] animate-pulse bg-gray-100 rounded-3xl" />
		)
	}
)

const DynamicDifferences = dynamic(
	() => import('@/page/about/widgets').then(mod => mod.Differences),
	{
		loading: () => (
			<div className="min-h-[300px] animate-pulse bg-gray-100 rounded-3xl" />
		)
	}
)

const DynamicTeam = dynamic(
	() => import('@/page/about/widgets').then(mod => mod.Team),
	{
		loading: () => (
			<div className="min-h-[600px] animate-pulse bg-gray-100 rounded-3xl" />
		)
	}
)

const DynamicFooter = dynamic(
	() => import('@/shared/components').then(mod => mod.Footer),
	{
		loading: () => <div className="min-h-[400px] animate-pulse bg-gray-100" />
	}
)

export default async function AboutUsPage() {
	const data = await getAboutUs()

	// Schema.org разметка для организации (Organization)
	const organizationJsonLd = {
		'@context': 'https://schema.org',
		'@type': 'Organization',
		name: 'Название вашей компании',
		description: data?.data?.aboutus?.ourmission || 'Наша миссия',
		url: 'https://ваш-сайт.ru',
		logo: data?.data?.aboutus?.image?.url || '/logo.png',
		slogan: data?.data?.aboutus?.slogan || '',
		founder: 'Основатель компании',
		foundingDate: '2020', // Год основания
		numberOfEmployees: {
			'@type': 'QuantitativeValue',
			value: data?.data?.team?.people?.length || 10
		},
		address: {
			'@type': 'PostalAddress',
			addressCountry: 'RU',
			addressLocality: 'Город'
		},
		contactPoint: {
			'@type': 'ContactPoint',
			telephone: '+7-XXX-XXX-XX-XX',
			contactType: 'customer service'
		},
		sameAs: [
			'https://vk.com/...',
			'https://t.me/...'
			// Социальные сети
		]
	}

	// Schema.org для команды (Person)
	const teamJsonLd =
		data?.data?.team?.people?.map((person, index) => ({
			'@context': 'https://schema.org',
			'@type': 'Person',
			name: person.text1,
			description: person.text2,
			jobTitle: person.text3,
			image: person.image?.url,
			worksFor: {
				'@type': 'Organization',
				name: 'Название вашей компании'
			}
		})) || []

	// Schema.org для сертификатов (ImageObject)
	const certificatesJsonLd =
		data?.data?.cervicates?.sertificates?.map(cert => ({
			'@context': 'https://schema.org',
			'@type': 'ImageObject',
			name: cert.title,
			contentUrl: cert.icon?.url,
			description: `Сертификат соответствия: ${cert.title}`,
			associatedMedia: {
				'@type': 'MediaObject',
				contentUrl: cert.icon?.url
			}
		})) || []

	// Schema.org для производственных мощностей (Product)
	const productionJsonLd = {
		'@context': 'https://schema.org',
		'@type': 'Product',
		name: 'Производственные мощности',
		description: data?.data?.ourins?.description || 'Наше производство',
		productionDate: new Date().toISOString().split('T')[0],
		manufacturer: {
			'@type': 'Organization',
			name: 'Название вашей компании'
		}
	}

	// Schema.org для вакансий (JobPosting)
	const vacanciesJsonLd =
		data?.data?.vakansee?.list?.map(vacancy => ({
			'@context': 'https://schema.org',
			'@type': 'JobPosting',
			title: 'Вакансия',
			description: extractTextFromRichText(vacancy),
			datePosted: new Date().toISOString().split('T')[0],
			hiringOrganization: {
				'@type': 'Organization',
				name: 'Название вашей компании'
			},
			jobLocation: {
				'@type': 'Place',
				address: {
					'@type': 'PostalAddress',
					addressLocality: 'Город'
				}
			}
		})) || []

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
				name: 'О компании',
				item: 'https://ваш-сайт.ru/about'
			}
		]
	}

	return (
		<main>
			{/* Критический блок (первый экран) */}
			<Hero data={data.data.hero} />

			{/* Блоки с ленивой загрузкой (все, кроме Hero) */}
			<DynamicAboutUs
				about={data.data.aboutus}
				facts={data.data.facts}
			/>
			<DynamicDifferences data={data.data.diffrents} />
			<DynamicTeam
				team={data.data.team}
				ourins={data.data.ourins}
				control={data.data.control}
				certificates={data.data.cervicates}
				partneram={data.data.partneram}
				vakansee={data.data.vakansee}
			/>
			<DynamicFooter className="mt-0! rounded-none!" />

			{/* Schema.org разметка */}
			<script
				type="application/ld+json"
				dangerouslySetInnerHTML={{ __html: JSON.stringify(organizationJsonLd) }}
			/>

			{teamJsonLd.map((person, index) => (
				<script
					key={`person-${index}`}
					type="application/ld+json"
					dangerouslySetInnerHTML={{ __html: JSON.stringify(person) }}
				/>
			))}

			{certificatesJsonLd.map((cert, index) => (
				<script
					key={`cert-${index}`}
					type="application/ld+json"
					dangerouslySetInnerHTML={{ __html: JSON.stringify(cert) }}
				/>
			))}

			<script
				type="application/ld+json"
				dangerouslySetInnerHTML={{ __html: JSON.stringify(productionJsonLd) }}
			/>

			{vacanciesJsonLd.map((vacancy, index) => (
				<script
					key={`vacancy-${index}`}
					type="application/ld+json"
					dangerouslySetInnerHTML={{ __html: JSON.stringify(vacancy) }}
				/>
			))}

			<script
				type="application/ld+json"
				dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbJsonLd) }}
			/>
		</main>
	)
}

// Вспомогательная функция для извлечения текста из RichText
function extractTextFromRichText(node: any): string {
	if (typeof node === 'string') return node
	if (node?.text) return node.text
	if (node?.children) {
		return node.children
			.map((child: any) => extractTextFromRichText(child))
			.join(' ')
	}
	return ''
}
