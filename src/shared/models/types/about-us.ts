import { Image } from './base'

// Интерфейсы для секций
interface HeroSection {
	id: number
	title: string
	description: string
	buttonText: string
	imageDesktop: Image
	imageMobile: Image
}

interface AboutUsSection {
	id: number
	h2: string
	description: string
	text: string
	text2: string
	text3: string
	ourmission: string
	p1: string
	slogan: string
	image: Image
}

interface Fact {
	id: number
	text1: string
	text2: string
}

interface FactsSection {
	id: number
	h2: string
	facts: Fact[]
}

interface Diffrent {
	id: number
	text1: string
	text2: string
	image: Image[]
}

interface DiffrentsSection {
	id: number
	h2: string
	description: string
	diffrents: Diffrent[]
}

interface Person {
	id: number
	text1: string
	text2: string
	text3: string
	image: Image
}

interface TeamSection {
	id: number
	h2: string
	description: string
	people: Person[]
}

// Интерфейсы для производства
interface CapacityItem {
	value: string
	label: string
}

interface TechnologicalAdvantage {
	title: string
	description: string
}

interface VisitCard {
	text1: string
	text2: string
	buttonText: string
}

interface ProductionData {
	capacities: {
		title: string
		items: CapacityItem[]
	}
	technologicalAdvantages: {
		title: string
		items: TechnologicalAdvantage[]
	}
	productionVisit: {
		title: string
		description: string
		visitCard: VisitCard
	}
}

interface OurInsSection {
	id: number
	h2: string
	description: string
	data: ProductionData
	image: Image
}

// Интерфейс для Rich Text (блоки текста из Strapi)
interface RichTextNode {
	type: string
	format?: string
	children?: RichTextNode[]
	text?: string
}

interface ControlSection {
	id: number
	h2: string
	description: string | null
	text: RichTextNode[]
	text2: RichTextNode[]
	text3: RichTextNode[]
	text4: RichTextNode[]
}

interface Certificate {
	id: number
	title: string
	icon: Image
}

interface CertificatesSection {
	id: number
	h2: string
	description: string
	buttonText: string
	sertificates: Certificate[]
}

interface Review {
	id: number
	text1: string
	text2: string
	text3: string
}

interface ReviewsSection {
	id: number
	h2: string
	description: string
	reviews: Review[]
}

// Интерфейсы для нижних секций
interface PartnerSection {
	id: number
	h3: string
	description: string
	list: RichTextNode[]
	buttonText: string
}

interface VacancySection {
	id: number
	h3: string
	description: string
	list: RichTextNode[]
	buttonText: string
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
	hero: HeroSection
	aboutus: AboutUsSection
	facts: FactsSection
	diffrents: DiffrentsSection
	team: TeamSection
	ourins: OurInsSection
	control: ControlSection
	cervicates: CertificatesSection
	reviews: ReviewsSection
	partneram: PartnerSection
	vakansee: VacancySection
	form: FormSection
}

// Основной интерфейс ответа от API
interface ApiResponse {
	data: PageData
	meta: Record<string, unknown>
}

// Экспорт всех интерфейсов для использования в других файлах
export type {
	AboutUsSection,
	ApiResponse,
	CapacityItem,
	Certificate,
	CertificatesSection,
	ControlSection,
	Diffrent,
	DiffrentsSection,
	Fact,
	FactsSection,
	FormSection,
	HeroSection,
	OurInsSection,
	PageData,
	PartnerSection,
	Person,
	ProductionData,
	Review,
	ReviewsSection,
	RichTextNode,
	TeamSection,
	TechnologicalAdvantage,
	VacancySection,
	VisitCard,
}
