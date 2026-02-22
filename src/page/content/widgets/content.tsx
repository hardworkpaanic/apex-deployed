import { ContentBlock } from '@/shared/models/types/article'

export function Content({ content }: { content: ContentBlock[] }) {
	// console.log(content)
	return (
		<section className="mt-7.5 container max-w-[800px] px-4 mx-auto">
			{content.map((block, index) => {
				// Заголовки
				if (block.type === 'heading') {
					const text = block.children[0]?.text || ''

					if (block.level === 2) {
						return (
							<h2
								key={index}
								className="text-[30px] font-semibold"
							>
								{text}
							</h2>
						)
					}

					if (block.level === 3) {
						return (
							<h3
								key={index}
								className="text-[22px] mt-7.5 font-semibold"
							>
								{text}
							</h3>
						)
					}
				}

				// Параграфы
				if (block.type === 'paragraph') {
					const text = block.children[0]?.text || ''
					// Пропускаем пустые параграфы
					if (!text.trim()) return null

					return (
						<p
							key={index}
							className="text-base mt-1.75 leading-[150%]"
						>
							{text}
						</p>
					)
				}

				// Списки
				if (block.type === 'list') {
					if (block.format === 'unordered') {
						return (
							<ul
								key={index}
								className="list-disc pl-4 pt-1"
							>
								{block.children.map((item, itemIndex) => (
									<li
										key={itemIndex}
										className="mt-1.75"
									>
										{item.children[0]?.text || ''}
									</li>
								))}
							</ul>
						)
					}

					// Нумерованный список с кружочками (как в вашем примере)
					if (block.format === 'ordered') {
						return (
							<ul
								key={index}
								className="flex flex-col gap-4 pt-3"
							>
								{block.children.map((item, itemIndex) => {
									const text = item.children[0]?.text || ''
									// Разделяем текст на основную часть и подтекст (если нужно)
									// В вашем примере используется два текста, но в данных только один
									// Поэтому показываем один текст
									return (
										<li
											key={itemIndex}
											className="flex gap-2 items-center"
										>
											<div className="rounded-full bg-[#EDEDED] flex items-center justify-center w-8 h-8 text-base font-semibold shrink-0">
												{itemIndex + 1}
											</div>
											<div className="">
												<p className="text-base font-semibold">{text}</p>
												{/* Здесь можно добавить подтекст, если он будет в данных */}
											</div>
										</li>
									)
								})}
							</ul>
						)
					}
				}

				return null
			})}
		</section>
	)
}
