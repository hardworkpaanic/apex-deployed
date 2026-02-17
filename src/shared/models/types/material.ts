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

interface WhatIsThisSection {
	id: number
	h2: string
	description: string
}

interface VideoSection {
	id: number
	Image: Image[]
}

interface VideoTextItem {
	id: number
	text1: string
	text2: string
}

interface VideoTextSection {
	id: number
	texts: VideoTextItem[]
}

interface CharacteristicItem {
	id: number
	text1: string
	text2: string
	image: Image[]
}

interface CharacteristicsSection {
	id: number
	h2: string
	characteristics: CharacteristicItem[]
}

interface AdFeaturesSection {
	id: number
	h3: string
	additionalFeatures: string[]
	butonText: string
}

interface WhySection {
	id: number
	h2: string
	description: string
	table: Image
}

interface EconomyMaterialCharacteristic {
	id: number
	text1: string
	text2: string
}

interface EconomyMaterial {
	id: number
	title: string
	characteristic: EconomyMaterialCharacteristic[]
}

interface EconomySection {
	id: number
	h2: string
	description: string
	final: string
	materilas: EconomyMaterial[]
}

interface ProductionStage {
	id: number
	text1: string
	text2: string
	text3: string
}

interface ProductionSection {
	id: number
	h2: string
	description: string
	buttonText: string
	stages: ProductionStage[]
}

interface CertificateItem {
	id: number
	title: string
	icon: Image
}

interface CertificatesSection {
	id: number
	h2: string
	description: string
	sertificates: CertificateItem[]
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
	whatisthis: WhatIsThisSection
	video: VideoSection
	videotext: VideoTextSection
	characteristics: CharacteristicsSection
	adFeatures: AdFeaturesSection
	why: WhySection
	economy: EconomySection
	production: ProductionSection
	cer: CertificatesSection
	form: FormSection
}

// Основной интерфейс ответа от API
interface ApiResponse {
	data: PageData
	meta: Record<string, unknown>
}

// Экспорт всех интерфейсов для использования в других файлах
export type {
	AdFeaturesSection,
	ApiResponse,
	CertificateItem,
	CertificatesSection,
	CharacteristicItem,
	CharacteristicsSection,
	EconomyMaterial,
	EconomyMaterialCharacteristic,
	EconomySection,
	FormSection,
	HeroSection,
	PageData,
	ProductionSection,
	ProductionStage,
	VideoSection,
	VideoTextItem,
	VideoTextSection,
	WhatIsThisSection,
	WhySection,
}
