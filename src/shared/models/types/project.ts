export interface ImageFormat {
	name: string
	hash: string
	ext: string
	mime: string
	path: string | null
	width: number
	height: number
	size: number
	sizeInBytes: number
	url: string
}

export interface Image {
	id: number
	documentId: string
	name: string
	alternativeText: string | null
	caption: string | null
	focalPoint: string | null
	width: number
	height: number
	formats: {
		thumbnail: ImageFormat
		small: ImageFormat
		// Добавьте другие форматы при необходимости (medium, large)
	}
	hash: string
	ext: string
	mime: string
	size: number
	url: string
	previewUrl: string | null
	provider: string
	provider_metadata: null
	createdAt: string // ISO date string
	updatedAt: string // ISO date string
	publishedAt: string // ISO date string
}

export interface TextNode {
	type: 'text'
	text: string
	bold?: boolean
	italic?: boolean
	underline?: boolean
}

export interface ParagraphBlock {
	type: 'paragraph'
	children: TextNode[]
}

export interface ListItemChildren {
	type: 'text'
	text: string
}

export interface ListItem {
	type: 'list-item'
	children: ListItemChildren[]
}

export interface ListBlock {
	type: 'list'
	format: 'unordered' | 'ordered'
	children: ListItem[]
}

export interface HeadingBlock {
	type: 'heading'
	level: number // 1, 2, 3, etc.
	children: TextNode[]
}

export type ContentBlock = ParagraphBlock | ListBlock | HeadingBlock

export interface Comment {
	id: number
	content: string
	type: string // 'destructive' or other types
}

export interface Data {
	id: number
	documentId: string
	title: string
	characteristics: ContentBlock[]
	content: ContentBlock[]
	date: string | null
	createdAt: string // ISO date string
	updatedAt: string // ISO date string
	publishedAt: string // ISO date string
	buttonText: string
	image: Image
	gallery: null // Уточните тип, если галерея может содержать данные
	list: any[] // Пустой массив, уточните тип при необходимости
	coment: Comment
}

export interface ProjectResponse {
	data: Data
	meta: Record<string, unknown> // Пустой объект meta
}

// Пример использования:
// const response: ApiResponse = { ... };
// console.log(response.data.title);
