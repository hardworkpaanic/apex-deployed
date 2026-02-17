import { Image } from './base'

// Интерфейсы для секций
interface HeaderNavItem {
	id: number
	label: string
	href: string
}

interface HeaderSection {
	id: number
	buttonText: string
	logo: Image[]
	navItems: HeaderNavItem[]
}

interface HeroSection {
	id: number
	title: string
	description: string
	buttonText: string
	imageDesktop: Image
	imageMobile: Image
}

interface MaterialAdItem {
	id: number
	title: string
	icon: Image | null
}

interface MaterialSection {
	id: number
	h2: string
	blockquote: string
	structure: string
	image: Image[]
	mobileImage: Image[]
	ad: MaterialAdItem[]
}

interface AdvantagesItem {
	id: number
	title: string
	icon: null
}

interface AdvantagesSection {
	id: number
	advantages: AdvantagesItem[]
}

interface ResearchSection {
	id: number
	h2: string
	description: string
	butt: string
	imageDesktop: Image
	imageMobile: Image
}

interface ProjectsSection {
	id: number
	h2: string
	description: string
	buttonText: string
}

interface EcosystemListItem {
	id: number
	title: string
	description: string
	number: string
	image: Image[]
}

interface EcosystemSection {
	id: number
	h2: string
	description: string
	controlText: string
	image: null
	ecosystemList: EcosystemListItem[]
}

interface DifferencesAdvantage {
	id: number
	title: string
	icon: Image | null
}

interface DifferencesSection {
	id: number
	h2: string
	advantages: DifferencesAdvantage[]
	image1: Image[]
	image2: Image[]
}

interface FormSection {
	id: number
	h2: string
	description: string
	buttonText: string
	succsessText: string
}

// Главный интерфейс для всех данных страницы
interface PageData {
	id: number
	documentId: string
	createdAt: string
	updatedAt: string
	publishedAt: string
	header: HeaderSection
	hero: HeroSection
	material: MaterialSection
	advantages: AdvantagesSection
	research: ResearchSection
	projects: ProjectsSection
	ecosystem: EcosystemSection
	differences: DifferencesSection
	form: FormSection
}

// Основной интерфейс ответа от API
interface ApiResponse {
	data: PageData
	meta: Record<string, unknown>
}

// Экспорт всех интерфейсов для использования в других файлах
export type {
	AdvantagesItem,
	AdvantagesSection,
	ApiResponse,
	DifferencesAdvantage,
	DifferencesSection,
	EcosystemListItem,
	EcosystemSection,
	FormSection,
	HeaderNavItem,
	HeaderSection,
	HeroSection,
	MaterialAdItem,
	MaterialSection,
	PageData,
	ProjectsSection,
	ResearchSection,
}
