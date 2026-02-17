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

interface TableRowItem {
	label: string
	value: string
}

interface TableRow {
	items: TableRowItem[]
}

interface InvestmentTable {
	pricingTable: {
		rows: TableRow[]
	}
}

interface InvestmentSection {
	id: number
	h2: string
	description: string
	h4: string
	p: string
	table: InvestmentTable
}

interface PriceFactorItem {
	id: number
	text1: string
	text2: string
	text3: string | null
}

interface PriceFactorsSection {
	id: number
	h2: string
	description: string | null
	factors: PriceFactorItem[]
	image: Image
}

interface AllInclusivePoint {
	id: number
	text: string
}

interface AllInclusiveSection {
	id: number
	h3: string
	point: AllInclusivePoint[]
}

type ProjectSection = [
	{
		id: number
		h2: string
		description: string
		butonText: string
	}
]

interface FullPriceSection {
	id: number
	h2: string
	description: string
	span: string | null
	table: Image
	listitems: AllInclusivePoint[]
}

interface PaymentStage {
	id: number
	text1: string
	text2: string
	text3: string
}

interface SmartPayment {
	id: number
	h4: string
	stahes: PaymentStage[]
}

interface YourFaceSection {
	id: number
	h4: string
	butonText: string
	listitems: AllInclusivePoint[]
	image: Image
}

interface StagesSection {
	id: number
	h4: string
	stages: PaymentStage[]
}

interface PaymentSection {
	id: number
	h2: string
	description: string
	description2: string
	smartpayment: SmartPayment
	yourface: YourFaceSection
	stages: StagesSection
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
	investment: InvestmentSection
	priceFactors: PriceFactorsSection
	allInclusive: AllInclusiveSection
	pricefactors: PriceFactorsSection
	projects: ProjectSection
	fullPrice: FullPriceSection
	payment: PaymentSection
	form: FormSection
}

// Основной интерфейс ответа от API
interface ApiResponse {
	data: PageData
	meta: Record<string, unknown>
}

// Экспорт всех интерфейсов для использования в других файлах
export type {
	AllInclusivePoint,
	AllInclusiveSection,
	ApiResponse,
	FormSection,
	FullPriceSection,
	HeaderNavItem,
	HeaderSection,
	HeroSection,
	InvestmentSection,
	InvestmentTable,
	PageData,
	PaymentSection,
	PaymentStage,
	PriceFactorItem,
	PriceFactorsSection,
	ProjectSection,
	SmartPayment,
	StagesSection,
	TableRow,
	TableRowItem,
	YourFaceSection,
}
