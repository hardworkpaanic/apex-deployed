import { cn, getImageUrl } from '@/shared/lib/utils'
import {
	CharacteristicNode,
	DataItem,
	ListNode,
	ParagraphNode
} from '@/shared/models/types/projects'
import { ArrowUpRight } from 'lucide-react'
import Image from 'next/image'
import Link from 'next/link'
import { Button } from '../ui'
import { ButtonVariant } from './project-card'

interface BlogProjectCardProps {
	data: DataItem
	className?: string
	projectId: string
	buttonVariant?: ButtonVariant
	buttonText?: string
	onButtonClick?: () => void
}

export function BlogProjectCard({
	data,
	className = '',
	projectId,
	buttonVariant = 'default',
	buttonText = 'Подробнее',
	onButtonClick
}: BlogProjectCardProps) {
	// Функция для рендеринга характеристик
	const renderCharacteristics = (characteristics: CharacteristicNode[]) => {
		if (!characteristics || characteristics.length === 0) return null

		// Ищем список в характеристиках
		const listNode = characteristics.find(node => node.type === 'list') as
			| ListNode
			| undefined
		const paragraphNode = characteristics.find(
			node => node.type === 'paragraph'
		) as ParagraphNode | undefined

		if (!listNode) return null

		// Получаем текст из параграфа если есть
		const paragraphText =
			paragraphNode?.children?.[0]?.text || 'Характеристики монтажа:'

		// Разделяем элементы списка на две колонки
		const items = listNode.children
			.map(item => item.children[0]?.text)
			.filter(Boolean)
		const midIndex = Math.ceil(items.length / 2)
		const leftColumnItems = items.slice(0, midIndex)
		const rightColumnItems = items.slice(midIndex)

		return (
			<>
				<span className="text-[14px] font-bold">{paragraphText}</span>
				<div className="flex flex-col md:flex-row md:gap-10">
					{leftColumnItems.length > 0 && (
						<ul className="list-disc pl-4">
							{leftColumnItems.map((item, index) => (
								<li key={`left-${index}`}>{item}</li>
							))}
						</ul>
					)}
					{rightColumnItems.length > 0 && (
						<ul className="list-disc mt-2 md:mt-0 pl-4">
							{rightColumnItems.map((item, index) => (
								<li key={`right-${index}`}>{item}</li>
							))}
						</ul>
					)}
				</div>
			</>
		)
	}

	return (
		<div
			className={`w-full border border-[#707070] px-4 md:px-7 md:py-7 py-5 rounded-[30px] ${className}`}
		>
			<Link
				className="block"
				href={`/projects/${data.documentId}`}
			>
				<Image
					src={getImageUrl(data.image.url)}
					alt={data.image.alternativeText || data.title}
					width={data.image.width}
					height={data.image.height}
					className="object-cover object-center w-full md:h-[440px] rounded-2xl"
				/>
				<div className="flex flex-col md:flex-row">
					<div className="flex w-full flex-col gap-3">
						<h4 className="text-base md:text-[22px] mt-5 font-bold">
							{data.title}
						</h4>

						{renderCharacteristics(data.characteristics)}
					</div>

					<Button
						size={'lg'}
						variant={buttonVariant}
						className={cn('mt-5')}
						onClick={onButtonClick}
					>
						{buttonText} <ArrowUpRight />
					</Button>
				</div>
			</Link>
		</div>
	)
}
