// ==============================================
// Типы для Rich Text (Блоки редактора)
// ==============================================

import { Image } from './base'

// Базовый узел для текста внутри блоков
interface RichTextChild {
	type: string // Обычно "text", но может быть и "link"
	text?: string // Текст присутствует для type: "text"
	bold?: boolean
	italic?: boolean
	underline?: boolean
	// Добавьте другие возможные свойства, например:
	// url?: string; // Для ссылок
	// children?: RichTextChild[]; // Для вложенных стилей
}

// --- Специфичные блоки ---

interface HeadingBlock {
	type: 'heading'
	children: RichTextChild[]
	level: number // 1, 2, 3 и т.д.
}

interface ParagraphBlock {
	type: 'paragraph'
	children: RichTextChild[]
}

interface ListBlock {
	type: 'list'
	format: 'ordered' | 'unordered' // или 'list'? В вашем примере 'unordered'
	children: ListItemBlock[]
}

interface ListItemBlock {
	type: 'list-item'
	children: RichTextChild[] // Содержимое пункта списка
}

// Заглушки для других возможных блоков (расширяйте по необходимости)
interface QuoteBlock {
	type: 'quote'
	children: (ParagraphBlock | HeadingBlock)[]
}

interface CodeBlock {
	type: 'code'
	children: [{ type: 'text'; text: string }]
	language?: string
}

interface ImageBlock {
	type: 'image'
	image: {
		url: string
		alternativeText?: string | null
		caption?: string | null
		width?: number
		height?: number
	}
	children?: RichTextChild[] // Обычно пусто
}

// --- Объединение всех возможных блоков контента ---
// Это основной тип для поля `content` в статье.
// Добавляйте сюда новые блоки по мере их появления в вашем Strapi редакторе.
export type ContentBlock =
	| HeadingBlock
	| ParagraphBlock
	| ListBlock
	| ListItemBlock // Сам список уже включает ListItem, но оставим для гибкости
	| QuoteBlock
	| CodeBlock
	| ImageBlock

// ==============================================
// Типы для данных статьи и ответа API
// ==============================================

// Интерфейс для одного элемента в массиве `data`
export interface ArticleData {
	id: number
	image?: Image
	documentId: string // Strapi v5
	title: string
	content: ContentBlock[] // Массив блоков — то, что вы генерировали
	slug: string
	createdAt: string // ISO date string
	updatedAt: string // ISO date string
	publishedAt: string // ISO date string
	// Добавьте другие поля: cover, author, category и т.д.
}

// Интерфейс для пагинации (как в вашем примере)
export interface PaginationMeta {
	page: number
	pageSize: number
	pageCount: number
	total: number
}

// Интерфейс для объекта `meta`
export interface ResponseMeta {
	pagination: PaginationMeta
}

// -------------------- ГЛАВНЫЙ ТИП --------------------
// Корневой интерфейс ответа от Strapi при запросе списка статей
export interface ArticleResponse {
	data: ArticleData[] // <-- ВНИМАНИЕ: здесь массив!
	meta: ResponseMeta
}

// Если у вас есть также запрос одной статьи, можно создать отдельный тип:
export interface SingleArticleResponse {
	data: ArticleData
	meta: Record<string, unknown> // Для одной статьи meta обычно пустая или содержит другую информацию
}
