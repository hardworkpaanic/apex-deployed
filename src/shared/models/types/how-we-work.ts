// ==================== ОБЩИЕ ТИПЫ ====================

import { Image } from './base'

interface BaseEntity {
	id: number
	documentId?: string
	createdAt?: string
	updatedAt?: string
	publishedAt?: string
}

interface RichTextNode {
	type: string
	format?: string
	children: RichTextNode[]
	text?: string
	bold?: boolean
	italic?: boolean
	underline?: boolean
	strikethrough?: boolean
	code?: boolean
}

interface ListItem {
	id: number
	text?: string
	text1?: string
	text2?: string
	text3?: string
}

// ==================== СЕКЦИЯ HERO ====================

interface HeroListItem {
	id: number
	text1: string
	text2: string
}

interface HeroData {
	id: number
	data: HeroListItem[]
}

interface HeroSection extends BaseEntity {
	id: number
	title: string
	description: string
	buttonText: string
	imageDesktop: Image
	imageMobile: Image
}

// ==================== СЕКЦИЯ CONTROL ====================

interface ControlSection extends BaseEntity {
	id: number
	h2: string
	image: Image
	list: ListItem[]
}

// ==================== СЕКЦИЯ STAGES ====================

interface StageListItem {
	id: number
	text1: string
	text2: string
	text3: string
}

interface StageQuestionAnswer {
	id: number
	text: string
}

interface StageQuestion {
	id: number
	question: string
	answer: StageQuestionAnswer[]
}

interface StageDetail {
	id: number
	number: string
	title: string
	importent: string | null
	image: Image
	questions: StageQuestion[]
}

interface StagesData {
	id: number
	stages: StageDetail[]
}

interface StagesSection extends BaseEntity {
	id: number
	h2: string
	de: string
	stages: StageListItem[]
	stages2: StagesData
}

// ==================== СЕКЦИЯ YOUR CONTROL ====================

interface YourControlListItem {
	id: number
	text1: string
	text2: string
	text3?: string
}

interface YourControlSection extends BaseEntity {
	id: number
	h2: string
	description: string
	h3: string
	list1: YourControlListItem[]
	list2: YourControlListItem[]
}

// ==================== СЕКЦИЯ ONE (МЕНЕДЖЕР) ====================

interface OneSection extends BaseEntity {
	id: number
	h2: string
	description1: string
	description2: string
	description3: string
	image: Image
}

// ==================== СЕКЦИЯ WHAT (ОПИСАНИЕ РАБОТЫ МЕНЕДЖЕРА) ====================

interface WhatSection extends BaseEntity {
	id: number
	h2: string
	text1: RichTextNode[]
	text2: RichTextNode[]
	text3: RichTextNode[]
	text4: RichTextNode[]
	text5: RichTextNode[]
	text6: RichTextNode[]
}

// ==================== СЕКЦИЯ PRICE (ЦЕНА) ====================

interface PriceWhat {
	id: number
	content: RichTextNode[]
	image: Image
}

interface PriceWhen {
	id: number
	h3: string
	content: RichTextNode[]
}

interface PriceSection extends BaseEntity {
	id: number
	h2: string
	description1: string
	description2: string
	description3: string
	what: PriceWhat
	when: PriceWhen
}

// ==================== СЕКЦИЯ STRUCTURE (СТРУКТУРА ОПЛАТЫ) ====================

interface StructureSection extends BaseEntity {
	id: number
	h2: string
	item1: RichTextNode[]
	item2: RichTextNode[]
	item3: RichTextNode[]
}

// ==================== СЕКЦИЯ FORM (ФОРМА) ====================

interface FormSection extends BaseEntity {
	id: number
	h2: string
	description: string
	buttonText: string
	succsessText: string
}

// ==================== ГЛАВНЫЙ ИНТЕРФЕЙС ДАННЫХ ====================

interface PageData extends BaseEntity {
	id: number
	documentId: string
	createdAt: string
	updatedAt: string
	publishedAt: string
	hero: HeroSection
	heroData: HeroData
	control: ControlSection
	stages: StagesSection
	yourcontrol: YourControlSection
	one: OneSection
	what: WhatSection
	price: PriceSection
	structure: StructureSection
	form: FormSection
}

interface ApiResponse {
	data: PageData
	meta: Record<string, unknown>
}

// ==================== ЭКСПОРТЫ ====================

export type {
	ApiResponse,
	// Base
	BaseEntity,
	// Control
	ControlSection,
	// Form
	FormSection,
	HeroData,
	HeroListItem,
	// Hero
	HeroSection,
	ListItem,
	// One (Manager)
	OneSection,
	// Main
	PageData,
	// Price
	PriceSection,
	PriceWhat,
	PriceWhen,
	RichTextNode,
	StageDetail,
	StageListItem,
	StageQuestion,
	StageQuestionAnswer,
	StagesData,
	// Stages
	StagesSection,
	// Structure
	StructureSection,
	// What
	WhatSection,
	YourControlListItem,
	// Your Control
	YourControlSection,
}
