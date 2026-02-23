import { Image } from './base'

export interface TextNode {
	type: 'text'
	text: string
}

export interface ParagraphNode {
	type: 'paragraph'
	children: TextNode[]
}

export interface ListItemNode {
	type: 'list-item'
	children: TextNode[]
}

export interface ListNode {
	type: 'list'
	format: 'unordered' | 'ordered'
	children: ListItemNode[]
}

interface HeadingNode {
	type: 'heading'
	level: number
	children: TextNode[]
}

type ContentNode = HeadingNode | ParagraphNode | ListNode
type CharacteristicNode = ParagraphNode | ListNode

interface Comment {
	id: number
	content: string
	type: string
}

interface DataItem {
	id: number
	documentId: string
	title: string
	characteristics: CharacteristicNode[]
	content: ContentNode[]
	date: string | null
	createdAt: string
	updatedAt: string
	publishedAt: string
	image: Image
	gallery: null
	list: any[]
	coment: Comment[]
}

interface Pagination {
	page: number
	pageSize: number
	pageCount: number
	total: number
}

interface Meta {
	pagination: Pagination
}

export interface ProjectsResponse {
	data: DataItem[]
	meta: Meta
}

export type {
	CharacteristicNode,
	Comment,
	ContentNode,
	DataItem,
	Meta,
	Pagination
}
