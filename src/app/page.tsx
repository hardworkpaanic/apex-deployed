import { getHomePage } from '@/actions/lib/strapi'
import {
	Differences,
	Ecosystem,
	HomeHero,
	HomeInfo,
	Materials,
	Projects,
	Research,
	Video
} from '@/page/home/widgets'
import { Metadata } from 'next'
import dynamic from 'next/dynamic'
import Image from 'next/image'

export const revalidate = 60

// SEO метаданные
export async function generateMetadata(): Promise<Metadata> {
	const data = await getHomePage()

	return {
		title: 'Главная страница',
		description: data?.data?.hero?.description || 'Описание страницы',
		openGraph: {
			title: data?.data?.hero?.title,
			description: data?.data?.hero?.description,
			images: data?.data?.hero?.imageDesktop?.url
				? [data.data.hero.imageDesktop.url]
				: []
		}
	}
}

// Динамический импорт для блоков ниже "скролла"
const DynamicCalculation = dynamic(
	() => import('@/page/home/widgets/calculation').then(mod => mod.Calculation),
	{
		loading: () => <div className="min-h-[200px] animate-pulse bg-gray-100" />
	}
)

const DynamicQuestions = dynamic(
	() => import('@/page/home/widgets/questions').then(mod => mod.Questions),
	{
		loading: () => <div className="min-h-[200px] animate-pulse bg-gray-100" />
	}
)

const DynamicFooter = dynamic(
	() => import('@/shared/components').then(mod => mod.Footer),
	{
		loading: () => <div className="min-h-[400px] animate-pulse bg-gray-100" />
	}
)

export default async function Home() {
	const data = await getHomePage()

	return (
		<main>
			{/* Критические блоки (выше сгиба) */}
			<HomeHero data={data.data.hero} />
			<HomeInfo data={data.data.advantages} />
			<Video />
			<Materials data={data.data.material} />
			<Ecosystem data={data.data.ecosystem} />
			<Differences data={data.data.differences} />
			<Projects data={data.data.projects} />
			<Research data={data.data.research} />

			{/* Блоки с ленивой загрузкой */}
			<DynamicCalculation />
			<DynamicQuestions />

			{/* Изображения Telegram с lazy loading */}
			<Image
				src={'telegram.svg'}
				alt="Подпишитесь на наш Telegram"
				width={343}
				height={369}
				className="w-full block md:hidden mt-15 bg-contain bg-center"
				loading="lazy"
				decoding="async"
			/>

			<div className="container max-w-[1320px] mx-auto">
				<Image
					src={'/telegram-desctop.svg'}
					alt="Подпишитесь на наш Telegram"
					width={1320}
					height={351}
					className="w-full h-[351px] hidden md:block mt-15 bg-contain bg-center"
					loading="lazy"
					decoding="async"
				/>
			</div>

			<DynamicFooter />
		</main>
	)
}
