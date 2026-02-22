'use client'

import {
	Avatar,
	AvatarFallback,
	AvatarImage
} from '@/shared/components/ui/avatar'
import { cn, getImageUrl } from '@/shared/lib/utils'
import type { Image as ImageType } from '@/shared/models/types/base'
import { ChevronDown } from 'lucide-react'
import Image from 'next/image'
import { useState } from 'react'

interface DetailsProps {
	author: string
	date: string
	image?: ImageType
}

export function Details({ author, date, image }: DetailsProps) {
	const [isExpanded, setIsExpanded] = useState(false)

	// Статические тексты для блока "Читайте в статье"
	const articleTopics = [
		'Элегантные решения для вашего дома: премиум-строительство от экспертов',
		'Современные тенденции в дизайне интерьеров',
		'Инновационные материалы для строительства',
		'Лучшие практики от профессионалов'
	]

	return (
		<section className="container max-w-[800px] px-4 mx-auto">
			<div className="bg-[#EDEDED] mt-15 rounded-3xl p-7.5 w-full">
				<h3 className="text-[20px] font-semibold">Читайте в статье:</h3>
				{articleTopics.slice(0, 3).map((topic, index) => (
					<p
						key={index}
						className="text-base mt-3.75 leading-[110%]"
					>
						{topic}
					</p>
				))}

				<p
					className={isExpanded ? 'text-base mt-3.75 leading-[110%]' : 'hidden'}
				>
					{articleTopics[3]}
				</p>

				<button
					className="mt-3.75 flex gap-2 items-center cursor-pointer"
					onClick={() => setIsExpanded(!isExpanded)}
				>
					{isExpanded ? 'Скрыть' : 'Раскрыть'}{' '}
					<ChevronDown
						className={cn(
							'transition-transform',
							isExpanded ? 'rotate-180' : ''
						)}
						size={14}
					/>
				</button>
			</div>

			{image && (
				<Image
					src={getImageUrl(image.url)}
					alt={image.alternativeText || ''}
					width={image.width || 343}
					height={image.height || 400}
					className="w-full h-100 mt-5 object-cover object-center rounded-3xl"
				/>
			)}

			<div className="flex mt-2 justify-between">
				<div className="flex gap-2 items-center">
					<Avatar>
						<AvatarFallback>{author.charAt(0)}</AvatarFallback>
						<AvatarImage
							className=""
							src="/avatar.png"
						/>
					</Avatar>

					{/* TODO: Добавить характеристики */}

					<div className="flex flex-col leading-[110%]">
						<span className="text-base font-semibold">{author}</span>
						<span className="text-[14px] text-[#3C3C3C]">Автор</span>
					</div>
				</div>

				<span className="text-[14px] text-[#3C3C3C]">{date}</span>
			</div>
		</section>
	)
}
