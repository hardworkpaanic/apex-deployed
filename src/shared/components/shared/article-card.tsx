import { cn, getImageUrl } from '@/shared/lib/utils'
import { ArticleData } from '@/shared/models/types/article'
import { ArrowUpRight } from 'lucide-react'
import Image from 'next/image'
import Link from 'next/link'

interface ArticleCardProps {
	article: ArticleData
	row?: boolean
	className?: string
}

export function ArticleCard({ article, row, className }: ArticleCardProps) {
	// Функция для получения первого текстового блока из контента
	const getPreviewText = () => {
		if (!article.content || article.content.length === 0) {
			return 'Описание отсутствует'
		}

		// Ищем первый параграф с текстом
		for (const block of article.content) {
			if (
				block.type === 'paragraph' &&
				block.children &&
				block.children.length > 0
			) {
				// Собираем текст из всех дочерних элементов
				const text = block.children.map(child => child.text || '').join(' ')

				if (text.trim()) {
					return text
				}
			}
		}

		return 'Описание отсутствует'
	}

	// Получаем URL изображения (заглушка, пока нет поля image)
	// TODO: Заменить на реальное поле изображения из ArticleData

	const imageUrl = article.image?.url
		? getImageUrl(article.image.url)
		: '/blog.jpg' // Временно

	const previewText = getPreviewText()
	const articleUrl = `/blog/${article.documentId}`

	return (
		<Link
			href={articleUrl}
			className={cn(
				'w-full flex group',
				row ? 'flex-row gap-5 md:w-full' : 'flex-col w-full md:max-w-full'
			)}
		>
			<div
				className={cn(
					'relative overflow-hidden rounded-2xl',
					row ? 'w-[203px] h-[178px] flex-shrink-0' : 'w-full aspect-[343/299]'
				)}
			>
				<Image
					src={imageUrl}
					alt={article.title || 'Статья'}
					fill
					className={cn(
						'object-cover transition-transform duration-300 group-hover:scale-105',
						className
					)}
				/>
			</div>

			<div className={cn(row ? 'flex-1' : 'w-full')}>
				<div className="flex mt-3 justify-between items-start gap-2">
					<h4 className="font-semibold text-[20px] leading-tight line-clamp-2">
						{article.title}
					</h4>

					<ArrowUpRight className="w-5 h-5 flex-shrink-0 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
				</div>

				<p className="text-[14px] mt-2 line-clamp-3 text-gray-600">
					{previewText}
				</p>
			</div>
		</Link>
	)
}
