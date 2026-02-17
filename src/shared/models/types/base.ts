// Основные интерфейсы для изображений и медиа
interface ImageFormat {
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

interface ImageFormats {
	thumbnail?: ImageFormat
	large?: ImageFormat
	small?: ImageFormat
	medium?: ImageFormat
}

interface Image {
	id: number
	documentId: string
	name: string
	alternativeText: string | null
	caption: string | null
	focalPoint: string | null
	width: number
	height: number
	formats: ImageFormats | null
	hash: string
	ext: string
	mime: string
	size: number
	url: string
	previewUrl: string | null
	provider: string
	provider_metadata: null
	createdAt: string
	updatedAt: string
	publishedAt: string
}

export type { Image, ImageFormat, ImageFormats }
