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

// Интерфейс для элемента факта
interface FactItem {
	id: number
	text1: string
	text2: string
}

// Секция с данными (переименована из FactsSection)
interface DataSection {
	id: number
	data: FactItem[]
}

// Интерфейс для пункта "почему мы"
interface WhyPoint {
	id: number
	text1: string
	text2: string
	text3: string
}

interface WhySection {
	id: number
	points: WhyPoint[]
}

// Интерфейс для этапа монтажа
interface Stage {
	id: number
	number: string
	title: string
	list: RichTextNode[]
	image: Image
}

interface HowSection {
	id: number
	h2: string
	totalInstallationTime: string
	totalInstallationTime2: string
	Important: string
	stages: Stage[]
}

// Интерфейс для пункта "год"
interface YearItem {
	id: number
	text1: string
	text2: string
}

interface YearSection {
	id: number
	h2: string
	description: string
	description2: string
	statistics: null | string
	limitations: null | string
	data: YearItem[]
}

// Интерфейс для секции технологии
interface TechnologySection {
	id: number
	h2: string
	image1: Image
	table: Image
}

// Интерфейс для секции "наши"
interface OurSection {
	id: number
	h2: string
	description: string
	text1: RichTextNode[]
	text2: RichTextNode[]
	text3: RichTextNode[]
	list: ListItem[]
	image1: Image
	image2: Image
	image3: Image
}

interface ListItem {
	id: number
	text: string
}

// Интерфейс для секции узлов
interface NodesSection {
	id: number
	h2: string
	description: string
	content: RichTextNode[]
	image: Image
}

// Интерфейс для текстов видео
interface VideoText {
	id: number
	text1: string
	text2: string
}

interface VideoSection {
	id: number
	texts: VideoText[]
}

// Интерфейс для уровня контроля качества
interface Level {
	id: number
	h4: string
	number: string
	content: RichTextNode[] | null
	content2: RichTextNode[] | null
	result: string
}

interface SystemSection {
	id: number
	h2: string
	description: string
	image: Image
	levels: Level[]
}

// Интерфейс для инструментов
interface InstrumentsSection {
	id: number
	h4: string
	list: ListItem[]
	image: null | Image
}

// Интерфейс для статистики
interface StatisticsSection {
	id: number
	h4: string
	list: ListItem[]
}

// Интерфейс для гарантии
interface GaranteeSection {
	id: number
	h2: string
	description: string
	table: null | Image
}

// Интерфейс для "что входит в гарантию"
interface WhatgSection {
	id: number
	h2: string
	text1: RichTextNode[]
	text2: RichTextNode[]
	text3: RichTextNode[]
	text4: RichTextNode[]
	iamge: Image // Обратите внимание: в JSON опечатка "iamge" вместо "image"
}

// Интерфейс для проектов
interface ProjectsSection {
	id: number
	h2: string
	description: string
	buttonText: string
}

// Интерфейс для формы
interface FormSection {
	id: number
	h2: string
	description: string
	buttonText: string
	succsessText: string
}

// Интерфейс для Rich Text (блоки текста из Strapi)
interface RichTextNode {
	type: string
	format?: string
	children?: RichTextNode[]
	text?: string
	url?: string
}

// Главный интерфейс для всех данных страницы
interface PageData {
	id: number
	documentId: string
	createdAt: string
	updatedAt: string
	publishedAt: string
	hero: HeroSection
	data: DataSection // переименовано из facts
	why: WhySection
	how: HowSection
	year: YearSection
	technoljgy: TechnologySection // обратите внимание на опечатку в названии
	our: OurSection
	nodes: NodesSection
	video: VideoSection
	system: SystemSection
	instruments: InstrumentsSection
	statistics: StatisticsSection
	garantee: GaranteeSection
	whatg: WhatgSection
	projects: ProjectsSection
	form: FormSection
}

// Основной интерфейс ответа от API
interface ApiResponse {
	data: PageData
	meta: Record<string, unknown>
}

// Экспорт всех интерфейсов для использования в других файлах
export type {
	ApiResponse,
	DataSection,
	FactItem,
	FormSection,
	GaranteeSection,
	HeroSection,
	HowSection,
	InstrumentsSection,
	Level,
	ListItem,
	NodesSection,
	OurSection,
	PageData,
	ProjectsSection,
	RichTextNode,
	Stage,
	StatisticsSection,
	SystemSection,
	TechnologySection,
	VideoSection,
	VideoText,
	WhatgSection,
	WhyPoint,
	WhySection,
	YearItem,
	YearSection,
}
