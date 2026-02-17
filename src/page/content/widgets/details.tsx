'use client'

import {
	Avatar,
	AvatarFallback,
	AvatarImage
} from '@/shared/components/ui/avatar'
import { ChevronDown } from 'lucide-react'
import Image from 'next/image'
import { useState } from 'react'

export function Details() {
	const [isExpanded, setIsExpanded] = useState(false)

	return (
		<section className="container max-w-[800px] px-4 mx-auto">
			<div className="bg-[#EDEDED] mt-15 rounded-3xl p-7.5 w-full">
				<h3 className="text-[20px] font-semibold">Читайте в статье:</h3>
				<p className="text-base mt-3.75 leading-[110%]">
					Элегантные решения для вашего дома: премиум-строительство от экспертов
				</p>

				<p className="text-base mt-3.75 leading-[110%]">
					Элегантные решения для вашего дома: премиум-строительство от экспертов
				</p>

				<p className={'text-base mt-3.75 leading-[110%]'}>
					Элегантные решения для вашего дома: премиум-строительство от экспертов
				</p>

				<p
					className={isExpanded ? 'text-base mt-3.75 leading-[110%]' : 'hidden'}
				>
					Элегантные решения для вашего дома: премиум-строительство от экспертов
				</p>

				<button
					className="mt-3.75 flex gap-2 items-center cursor-pointer"
					onClick={() => setIsExpanded(!isExpanded)}
				>
					Раскрыть{' '}
					<ChevronDown
						className={isExpanded ? 'rotate-180' : ''}
						size={14}
					/>
				</button>
			</div>

			<Image
				src="/blog.jpg"
				alt=""
				width={343}
				height={400}
				className="w-full h-100 mt-5 object-cover object-center rounded-3xl"
			/>

			<div className="flex mt-2 justify-between">
				<div className="flex gap-2 items-center">
					<Avatar>
						<AvatarFallback>ИИ</AvatarFallback>
						<AvatarImage
							className=""
							src="/avatar.png"
						/>
					</Avatar>

					{/* TODO: Добавить характеристики */}

					<div className="flex flex-col leading-[110%]">
						<span className="text-base font-semibold">Иван Иванов</span>

						<span className="text-[14px] text-[#3C3C3C]">Автор</span>
					</div>
				</div>

				<span className="text-[14px] text-[#3C3C3C]">01.01.26</span>
			</div>
		</section>
	)
}
