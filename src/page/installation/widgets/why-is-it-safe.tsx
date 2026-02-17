import { Slider } from '@/shared/components/shared/slider'
import { getImageUrl } from '@/shared/lib/utils'
import { NodesSection, WhySection } from '@/shared/models/types/installation'
import Image from 'next/image'

export function WhyIsItSafe({
	why,
	node,
}: {
	why: WhySection
	node: NodesSection
}) {
	// Функция для рендеринга форматированного текста с выделенными жирными элементами
	const renderFormattedText = (text: string) => {
		if (!text) return null

		// Регулярное выражение для поиска строк, начинающихся с "- Уровень X:"
		const parts = text.split(/( - Уровень \d:)/g)

		return parts.map((part, index) => {
			if (part.match(/^ - Уровень \d:$/)) {
				return (
					<span key={index} className='text-[#3C3C3C] font-semibold'>
						{part}
					</span>
				)
			}
			return part
		})
	}

	return (
		<>
			<section className='container mt-15 md:mt-30 max-w-[1330px] mx-auto px-4'>
				<div className='md:max-w-[500px]'>
					<div className='flex items-center gap-2'>
						<Image
							src='/mini-logo-gray.svg'
							alt='mini-logo'
							width={28}
							height={8}
							className=''
							unoptimized
						/>
					</div>
					<h2 className='font-semibold mt-2 text-[30px] md:text-[48px] leading-[110%]'>
						Почему монтаж APEX — это безопасно
					</h2>
				</div>

				{/* Десктоп версия - сетка из 6 блоков */}
				<div className='mt-5 md:mt-[54px] hidden md:grid md:grid-cols-2 lg:grid-cols-3 gap-4'>
					{why.points.map(point => (
						<div
							key={point.id}
							className='border border-[#EDEDED] rounded-2xl p-7 flex flex-col justify-start gap-4 w-full min-h-[323px]'
						>
							<div className='w-[32px] h-[32px] text-white font-bold text-base rounded-md bg-black flex items-center justify-center'>
								{point.text1}
							</div>

							<div className='flex flex-col gap-2'>
								<p className='text-base font-semibold'>{point.text2}</p>
								<p className='text-[12px] italic md:text-[14px]'>
									{point.id === 77
										? renderFormattedText(point.text3)
										: point.text3}
								</p>
							</div>
						</div>
					))}
				</div>

				{/* Мобильная версия - слайдер */}
				<div className='md:hidden mt-10'>
					<Slider
						items={why.points.map(point => (
							<div
								key={point.id}
								className='border border-[#EDEDED] rounded-2xl p-7 flex flex-col justify-start gap-4 w-full max-w-[428px] min-h-[323px]'
							>
								<div className='w-[32px] h-[32px] text-white font-bold text-base rounded-md bg-black flex items-center justify-center'>
									{point.text1}
								</div>

								<div className='flex flex-col gap-2'>
									<p className='text-base font-semibold'>{point.text2}</p>
									<p className='text-[12px] italic md:text-[14px]'>
										{point.id === 77
											? renderFormattedText(point.text3)
											: point.text3}
									</p>
								</div>
							</div>
						))}
					/>
				</div>
			</section>

			{/* Секция с узлами крепления */}
			<section className='container md:hidden mt-15 md:mt-30 max-w-[1330px] mx-auto px-4'>
				<div className='flex flex-col md:flex-row md:gap-[132px] items-start'>
					{/* Изображение - скрыто на мобилке, показывается на десктопе */}
					<div className='hidden md:block'>
						<Image
							src={getImageUrl(node.image.url)}
							alt={node.image.alternativeText || 'Узлы крепления'}
							width={node.image.width}
							height={node.image.height}
							className='object-contain'
							unoptimized
						/>
					</div>

					{/* Изображение для мобильной версии */}
					<div className='md:hidden'>
						<Image
							src={getImageUrl(node.image.url)}
							alt={node.image.alternativeText || 'Узлы крепления'}
							width={105}
							height={108}
							className='object-contain'
							unoptimized
						/>
					</div>

					{/* Контент */}
					<div className='flex-1'>
						<h3 className='text-[22px] md:text-[54px] leading-[110%] mt-5 md:mt-0 font-bold'>
							{node.h2}
						</h3>

						<p className='text-[14px] md:text-base mt-2'>{node.description}</p>

						{/* Рендеринг контента из rich text */}
						{node.content.map((contentItem, index) => {
							if (contentItem.type === 'paragraph') {
								return (
									<h3
										key={index}
										className='text-base md:mt-10 md:text-base md:font-bold mt-5 font-bold'
									>
										{contentItem.children?.[0]?.text}
									</h3>
								)
							}

							if (contentItem.type === 'list' && contentItem.children) {
								return (
									<ul key={index} className='flex flex-col md:mt-3'>
										{contentItem.children.map((item, itemIndex) => (
											<li
												key={itemIndex}
												className='items-center mt-4 flex gap-2'
											>
												<Image
													src={'/about-us/list-icon.png'}
													alt='check'
													width={22}
													height={22}
												/>
												<p className='text-base leading-[150%]'>
													{item.children?.[0]?.text}
												</p>
											</li>
										))}
									</ul>
								)
							}

							return null
						})}
					</div>
				</div>
			</section>
		</>
	)
}
