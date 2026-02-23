import { getMaterialPage } from '@/actions/lib/strapi'
import {
	Characteristics,
	Comparisons,
	Hero,
	Video
} from '@/page/materials/widgets'
import { Metadata } from 'next'
import dynamic from 'next/dynamic'
import Image from 'next/image'

export const revalidate = 60

// SEO метаданные
export async function generateMetadata(): Promise<Metadata> {
	const data = await getMaterialPage()

	return {
		title: data?.data?.hero?.title || 'Материалы | Название сайта',
		description:
			data?.data?.hero?.description || 'Описание страницы материалов',
		openGraph: {
			title: data?.data?.hero?.title,
			description: data?.data?.hero?.description,
			images: data?.data?.hero?.imageDesktop?.url
				? [data.data.hero.imageDesktop.url]
				: []
		},
		keywords: ['материалы', 'характеристики', 'сертификаты', 'производство']
	}
}

// Динамический импорт для блоков ниже сгиба
const DynamicProduction = dynamic(
	() => import('@/page/materials/widgets').then(mod => mod.Production),
	{
		loading: () => (
			<div className="min-h-[300px] animate-pulse bg-gray-100 rounded-3xl" />
		)
	}
)

const DynamicCertificates = dynamic(
	() => import('@/page/materials/widgets').then(mod => mod.Certificates),
	{
		loading: () => (
			<div className="min-h-[400px] animate-pulse bg-gray-100 rounded-3xl" />
		)
	}
)

const DynamicQuestions = dynamic(
	() => import('@/page/materials/widgets').then(mod => mod.Questions),
	{
		loading: () => (
			<div className="min-h-[200px] animate-pulse bg-gray-100 rounded-3xl" />
		)
	}
)

const DynamicFooter = dynamic(
	() => import('@/shared/components').then(mod => mod.Footer),
	{
		loading: () => <div className="min-h-[400px] animate-pulse bg-gray-100" />
	}
)

export default async function MaterialPage() {
	const data = await getMaterialPage()

	// Schema.org разметка для страницы материалов
	const jsonLd = {
		'@context': 'https://schema.org',
		'@type': 'Product',
		name: data?.data?.hero?.title,
		description: data?.data?.hero?.description,
		brand: {
			'@type': 'Brand',
			name: 'APEX'
		},
		offers: {
			'@type': 'Offer',
			availability: 'https://schema.org/InStock',
			priceCurrency: 'RUB',
			price: 'По запросу'
		}
	}

	// Schema.org для сертификатов
	const certificatesJsonLd = data?.data?.cer?.sertificates?.map(cert => ({
		'@context': 'https://schema.org',
		'@type': 'ImageObject',
		name: cert.title,
		contentUrl: cert.icon?.url,
		description: `Сертификат соответствия: ${cert.title}`
	}))

	return (
		<main>
			{/* Критические блоки (выше сгиба) */}
			<Hero data={data.data.hero} />

			{/* Блок "Что это такое" с оптимизированным изображением */}
			<div className="mt-16 md:mt-30 container max-w-[1320px] mx-auto px-4">
				<div className="bg-[#3C3C3C] md:h-[320px] relative h-[386px] rounded-3xl text-white flex flex-col justify-end md:justify-center">
					<Image
						src="/materials/materials.svg"
						alt="Изображение материалов и продукции"
						width={427}
						height={280}
						className="w-full max-w-[427px] absolute top-0 z-0 object-cover rounded-3xl"
						loading="eager"
						priority={false}
						sizes="(max-width: 768px) 100vw, 427px"
					/>
					<div className="p-6 z-10 md:pl-100">
						<Image
							src="/mini-logo.svg"
							alt="Логотип компании"
							width={28}
							height={8}
							className=""
							loading="lazy"
						/>

						<h1 className="font-semibold mt-7 text-[22px] leading-[110%]">
							{data.data.whatisthis.h2}
						</h1>

						<p className="italic mt-2 text-white/70 text-[14px] leading-[150%]">
							{data.data.whatisthis.description}
						</p>
					</div>
				</div>
			</div>

			{/* Критические виджеты */}
			<Video
				video={data.data.video}
				videoText={data.data.videotext}
			/>
			<Characteristics
				characteristicsData={data.data.characteristics}
				additionalData={data.data.adFeatures}
			/>
			<Comparisons
				economy={data.data.economy}
				why={data.data.why}
			/>

			{/* Блоки с ленивой загрузкой */}
			<DynamicProduction />
			<DynamicCertificates
				cer={data.data.cer}
				from={data.data.form}
			/>
			<DynamicQuestions />
			<DynamicFooter />

			{/* Schema.org разметка */}
			<script
				type="application/ld+json"
				dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
			/>

			{certificatesJsonLd?.map((cert, index) => (
				<script
					key={index}
					type="application/ld+json"
					dangerouslySetInnerHTML={{ __html: JSON.stringify(cert) }}
				/>
			))}
		</main>
	)
}
