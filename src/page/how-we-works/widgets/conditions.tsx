import { Button } from '@/shared/components'
import { Slider } from '@/shared/components/shared/slider'
import { Input } from '@/shared/components/ui/input'
import { getImageUrl } from '@/shared/lib/utils'
import {
	FormSection,
	OneSection,
	PriceSection,
	RichTextNode,
	StructureSection,
	WhatSection,
} from '@/shared/models/types/how-we-work'
import Image from 'next/image'

interface ConditionsProps {
	one: OneSection
	what: WhatSection
	price: PriceSection
	structure: StructureSection
	form: FormSection
}

export function Conditions({
	one,
	what,
	price,
	structure,
	form,
}: ConditionsProps) {
	// Функция для обработки жирного текста
	const renderBoldText = (text: string) => {
		const parts = text.split(/(\*\*.*?\*\*)/g)
		return parts.map((part, index) => {
			if (part.startsWith('**') && part.endsWith('**')) {
				return <strong key={index}>{part.slice(2, -2)}</strong>
			}
			return part
		})
	}

	// Функция для рендеринга RichText
	const renderRichText = (nodes: RichTextNode[]) => {
		return nodes.map((node, index) => {
			if (node.type === 'paragraph') {
				return (
					<p
						key={index}
						className={
							index === 0
								? 'font-semibold text-base'
								: 'text-[14px] leading-[150%]'
						}
					>
						{node.children?.map((child, childIndex) => {
							if (child.bold) {
								return <strong key={childIndex}>{child.text}</strong>
							}
							if (child.italic) {
								return (
									<em key={childIndex} className='italic'>
										{child.text}
									</em>
								)
							}
							return child.text
						})}
					</p>
				)
			}

			if (node.type === 'list' && node.children) {
				return (
					<ul key={index} className='flex flex-col gap-2'>
						{node.children.map((item, itemIndex) => (
							<li key={itemIndex} className='flex items-center gap-2'>
								<Image
									src='/about-us/list-icon.png'
									alt='check'
									width={18}
									height={18}
								/>
								<span className='text-[14px] leading-[150%]'>
									{item.children?.[0]?.text}
								</span>
							</li>
						))}
					</ul>
				)
			}

			return null
		})
	}

	return (
		<section className='bg-black text-white rounded-t-3xl md:py-30 py-15'>
			<div className='container max-w-[1330px] mx-auto px-4'>
				{/* One Section */}
				<div>
					<div className='flex flex-col md:flex-row md:justify-between'>
						<div className='md:max-w-[762px]'>
							<div className='flex items-center gap-2'>
								<Image
									src='/mini-logo-black.svg'
									alt='mini-logo'
									width={28}
									height={8}
									unoptimized
								/>
							</div>
							<h2 className='font-semibold mt-2 text-[30px] md:font-bold md:text-[48px] leading-[110%]'>
								{one.h2}
							</h2>
							<p className='mt-5 text-[14px] md:text-[20px]'>
								{one.description1}
							</p>
						</div>

						<div className='md:max-w-[427px]'>
							<p className='mt-5 text-[14px]'>
								{renderBoldText(one.description2)}
							</p>
							<p className='mt-5 text-[14px]'>{one.description3}</p>
						</div>
					</div>

					<Image
						src={getImageUrl(one.image.url)}
						alt={one.image.alternativeText || 'Conditions'}
						width={one.image.width}
						height={one.image.height}
						className='w-full md:hidden object-cover mt-5 object-center'
					/>
					<Image
						src={getImageUrl(one.image.url)}
						alt={one.image.alternativeText || 'Conditions'}
						width={one.image.width}
						height={one.image.height}
						className='w-full md:block hidden object-cover mt-20 object-center'
					/>
				</div>

				{/* What Section */}
				<div className='mt-15 md:mt-30'>
					<div>
						<div className='flex items-center gap-2'>
							<Image
								src='/mini-logo-black.svg'
								alt='mini-logo'
								width={28}
								height={8}
								unoptimized
							/>
						</div>
						<h2 className='font-semibold md:font-bold max-w-[650px] mt-2 text-[30px] md:text-[48px] leading-[110%]'>
							{what.h2}
						</h2>
						<p className='mt-5 md:hidden text-[14px]'>
							Технология сухого крепления не зависит от температуры
						</p>
						<p className='mt-5 md:hidden text-[14px] leading-[150%] italic text-[#B9B9B9]'>
							Большинство конкурентов монтируют декор на клей или раствор — это
							невозможно при отрицательных температурах. Мы используем
							запатентованную систему механического крепления: элементы
							фиксируются на металлокаркасе из нержавеющей стали без клея и
							раствора.
						</p>
					</div>

					<div className='mt-5 md:mt-15 hidden md:grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-5'>
						{/* Карточка 1 - Консультация */}
						<div className='border border-[#E5E5E54D] w-full h-[280px] flex flex-col justify-between rounded-3xl p-7'>
							{renderRichText([what.text1[0]])}
							{renderRichText([what.text1[1]])}
						</div>

						{/* Карточка 2 - Проектирование */}
						<div className='border border-[#E5E5E54D] w-full h-[280px] flex flex-col justify-between rounded-3xl p-7'>
							{renderRichText([what.text2[0]])}
							{renderRichText([what.text2[1]])}
						</div>

						{/* Карточка 3 - Производство */}
						<div className='border border-[#E5E5E54D] w-full h-[280px] flex flex-col justify-between rounded-3xl p-7'>
							{renderRichText([what.text3[0]])}
							{renderRichText([what.text3[1]])}
						</div>

						{/* Карточка 4 - Монтаж */}
						<div className='border border-[#E5E5E54D] w-full h-[280px] flex flex-col justify-between rounded-3xl p-7'>
							{renderRichText([what.text4[0]])}
							{renderRichText([what.text4[1]])}
						</div>

						{/* Карточка 5 - Как связаться с менеджером */}
						<div className='bg-linear-to-r from-[#5A5C69] to-[#20232C] w-full h-[280px] flex flex-col justify-between rounded-3xl p-7'>
							<span className='font-semibold text-[20px]'>
								{what.text5[0]?.children?.[0]?.text}
							</span>
							<ul>
								{what.text5[1]?.children?.map((item, index) => (
									<li key={index} className='text-[14px]'>
										{item.children?.[0]?.text}
									</li>
								))}
							</ul>
						</div>

						{/* Пустой блок для структуры */}
						<div className='w-full hidden lg:block'></div>

						{/* Карточка 6 - Сдача */}
						<div className='border border-[#E5E5E54D] w-full h-[280px] flex flex-col justify-between rounded-3xl p-7 lg:col-start-3'>
							{renderRichText([what.text6[0]])}
							{renderRichText([what.text6[1]])}
						</div>

						<div className='w-full hidden lg:block'></div>
					</div>

					<Slider
						className='mt-10'
						items={[
							<div
								key='1'
								className='border border-[#E5E5E54D] w-full h-[280px] flex flex-col justify-between rounded-3xl p-7'
							>
								{renderRichText([what.text1[0]])}
								{renderRichText([what.text1[1]])}
							</div>,
							<div
								key='2'
								className='border border-[#E5E5E54D] w-full h-[280px] flex flex-col justify-between rounded-3xl p-7'
							>
								{renderRichText([what.text2[0]])}
								{renderRichText([what.text2[1]])}
							</div>,
							<div
								key='3'
								className='border border-[#E5E5E54D] w-full h-[280px] flex flex-col justify-between rounded-3xl p-7'
							>
								{renderRichText([what.text3[0]])}
								{renderRichText([what.text3[1]])}
							</div>,
							<div
								key='4'
								className='border border-[#E5E5E54D] w-full h-[280px] flex flex-col justify-between rounded-3xl p-7'
							>
								{renderRichText([what.text4[0]])}
								{renderRichText([what.text4[1]])}
							</div>,
							<div
								key='6'
								className='border border-[#E5E5E54D] w-full h-[280px] flex flex-col justify-between rounded-3xl p-7'
							>
								{renderRichText([what.text6[0]])}
								{renderRichText([what.text6[1]])}
							</div>,
						]}
					/>

					<div className='bg-linear-to-r md:hidden mt-10 from-[#5A5C69] to-[#20232C] w-full h-[280px] flex flex-col justify-between rounded-3xl p-7'>
						<span className='font-semibold text-[20px]'>
							{what.text5[0]?.children?.[0]?.text}
						</span>
						<ul>
							{what.text5[1]?.children?.map((item, index) => (
								<li key={index} className='text-[14px]'>
									{item.children?.[0]?.text}
								</li>
							))}
						</ul>
					</div>
				</div>

				{/* Price Section */}
				<div className='mt-15 md:mt-30 flex flex-col md:flex-row md:justify-between'>
					<div className='md:max-w-[762px]'>
						<div className='flex items-center gap-2'>
							<Image
								src='/mini-logo-black.svg'
								alt='mini-logo'
								width={28}
								height={8}
								unoptimized
							/>
						</div>
						<h2 className='font-semibold mt-2 text-[30px] md:font-bold md:text-[48px] leading-[110%]'>
							{price.h2}
						</h2>
						<p className='mt-5 text-[14px] max-w-[500px] md:text-[20px]'>
							{price.description1}
						</p>
					</div>
					<div className='md:max-w-[538px]'>
						<p className='mt-5 md:mt-2 text-[14px] text-[#B9B9B9] md:text-white italic leading-[150%]'>
							{price.description2}
						</p>
						<p className='mt-5 text-[14px] italic text-[#B9B9B9] md:text-white leading-[150%] whitespace-pre-line'>
							{price.description3}
						</p>
					</div>
				</div>

				<div className='flex flex-col mt-5 md:justify-between md:gap-10 md:flex-row'>
					<div className='bg-[#1C1C1C] flex flex-col md:justify-between md:max-w-[650px] md:h-[460px] w-full mt-10 rounded-3xl md:px-10 px-4 py-10'>
						<Image
							src={getImageUrl(price.what.image.url)}
							alt={price.what.image.alternativeText || 'logo'}
							width={price.what.image.width || 83}
							height={price.what.image.height || 44}
							className='md:w-[163px] md:h-[84px]'
						/>
						<div>
							{price.what.content.map((node, index) => {
								if (node.type === 'paragraph') {
									return (
										<h6
											key={index}
											className='text-[22px] md:text-[24px] font-semibold mt-4'
										>
											{node.children?.[0]?.text}
										</h6>
									)
								}
								if (node.type === 'list' && node.children) {
									return (
										<ul
											key={index}
											className='list-disc flex flex-col gap-2 pl-4 md:mt-2 mt-10 text-[14px]'
										>
											{node.children.map((item, itemIndex) => (
												<li key={itemIndex}>{item.children?.[0]?.text}</li>
											))}
										</ul>
									)
								}
								return null
							})}
						</div>
					</div>

					<div className='bg-[#1C1C1C] md:max-w-[650px] flex flex-col md:justify-between md:h-[460px] w-full mt-10 rounded-3xl px-4 md:px-10 pt-10 pb-7'>
						<div>
							<h6 className='text-[22px] font-semibold'>{price.when.h3}</h6>
							<p className='text-[14px] md:mt-2 mt-10 whitespace-pre-line'>
								{price.when.content.map((node, index) => {
									if (node.type === 'list' && node.children) {
										return node.children.map((item, itemIndex) => (
											<span key={itemIndex}>
												{item.children?.[0]?.text}
												{itemIndex < node.children.length - 1 && <br />}
											</span>
										))
									}
									if (node.type === 'paragraph' && node.children) {
										return (
											<span key={index} className='block mt-5'>
												{node.children[0]?.text}
											</span>
										)
									}
									return null
								})}
							</p>
						</div>
					</div>
				</div>

				{/* Structure Section */}
				<div className='mt-15 md:mt-30'>
					<div className='flex items-center gap-2'>
						<Image
							src='/mini-logo-black.svg'
							alt='mini-logo'
							width={28}
							height={8}
							unoptimized
						/>
					</div>
					<h2 className='font-semibold mt-2 text-[30px] md:text-[48px] leading-[110%]'>
						{structure.h2}
					</h2>
				</div>

				<div className='hidden md:flex flex-col md:flex-row md:justify-between flex-wrap'>
					{/* Item 1 */}
					<div className='border mt-10 md:max-w-[426px] border-white/15 rounded-3xl p-7'>
						<div className='flex flex-row items-center gap-3'>
							<Image
								src='/HowWeWorks/oplasy.svg'
								width={30}
								height={30}
								alt='oplasy'
							/>
							<p className='text-base font-semibold'>
								{structure.item1[0]?.children?.[0]?.text}
							</p>
						</div>
						{structure.item1.slice(1).map((node, index) => {
							if (node.type === 'list' && node.children) {
								return (
									<div key={index} className='flex flex-col mt-5'>
										{node.children.map((item, itemIndex) => (
											<span
												key={itemIndex}
												className={
													itemIndex === 0
														? 'text-[24px] font-semibold'
														: 'text-[14px] md:text-base'
												}
											>
												{item.children?.[0]?.text}
											</span>
										))}
									</div>
								)
							}
							return null
						})}
					</div>

					{/* Item 2 */}
					<div className='border mt-10 md:max-w-[426px] border-white/15 rounded-3xl p-7'>
						<div className='flex flex-row items-center gap-3'>
							<Image
								src='/HowWeWorks/oplasy2.svg'
								width={30}
								height={30}
								alt='oplasy'
							/>
							<p className='text-base font-semibold'>
								{structure.item2[0]?.children?.[0]?.text}
							</p>
						</div>
						{structure.item2.slice(1).map((node, index) => {
							if (node.type === 'list' && node.children) {
								return (
									<div key={index} className='flex flex-col mt-5'>
										{node.children.map((item, itemIndex) => (
											<span
												key={itemIndex}
												className={
													itemIndex === 0
														? 'text-[24px] font-semibold'
														: 'text-[14px] md:text-base'
												}
											>
												{item.children?.[0]?.text}
											</span>
										))}
									</div>
								)
							}
							if (node.type === 'paragraph' && node.children) {
								return (
									<div key={index} className='flex flex-col mt-5'>
										<p className='text-[14px] italic md:text-base'>
											{node.children[0]?.text}
										</p>
									</div>
								)
							}
							return null
						})}
					</div>

					{/* Item 3 */}
					<div className='border mt-10 md:max-w-[426px] border-white/15 rounded-3xl p-7'>
						<div className='flex flex-row items-center gap-3'>
							<Image
								src='/HowWeWorks/oplasy3.svg'
								width={30}
								height={30}
								alt='oplasy'
							/>
							<p className='text-base font-semibold'>
								{structure.item3[0]?.children?.[0]?.text}
							</p>
						</div>
						{structure.item3.slice(1).map((node, index) => {
							if (node.type === 'paragraph' && node.children) {
								return (
									<div key={index} className='flex flex-col mt-5'>
										<span className='text-[24px] font-semibold'>
											{node.children[0]?.text}
										</span>
									</div>
								)
							}
							if (node.type === 'list' && node.children) {
								return (
									<div key={index} className='flex flex-col'>
										{node.children.map((item, itemIndex) => (
											<p key={itemIndex} className='text-[14px] md:text-base'>
												{item.children?.[0]?.text}
											</p>
										))}
									</div>
								)
							}
							return null
						})}
					</div>
				</div>

				<Slider
					items={[
						<div
							key='1'
							className='border mt-10 md:max-w-[426px] border-white/15 rounded-3xl p-7'
						>
							<div className='flex flex-row items-center gap-3'>
								<Image
									src='/HowWeWorks/oplasy.svg'
									width={30}
									height={30}
									alt='oplasy'
								/>
								<p className='text-base font-semibold'>
									{structure.item1[0]?.children?.[0]?.text}
								</p>
							</div>
							{structure.item1.slice(1).map((node, index) => {
								if (node.type === 'list' && node.children) {
									return (
										<div key={index} className='flex flex-col mt-5'>
											{node.children.map((item, itemIndex) => (
												<span
													key={itemIndex}
													className={
														itemIndex === 0
															? 'text-[24px] font-semibold'
															: 'text-[14px] md:text-base'
													}
												>
													{item.children?.[0]?.text}
												</span>
											))}
										</div>
									)
								}
								return null
							})}
						</div>,
						<div
							key='2'
							className='border mt-10 md:max-w-[426px] border-white/15 rounded-3xl p-7'
						>
							<div className='flex flex-row items-center gap-3'>
								<Image
									src='/HowWeWorks/oplasy2.svg'
									width={30}
									height={30}
									alt='oplasy'
								/>
								<p className='text-base font-semibold'>
									{structure.item2[0]?.children?.[0]?.text}
								</p>
							</div>
							{structure.item2.slice(1).map((node, index) => {
								if (node.type === 'list' && node.children) {
									return (
										<div key={index} className='flex flex-col mt-5'>
											{node.children.map((item, itemIndex) => (
												<span
													key={itemIndex}
													className={
														itemIndex === 0
															? 'text-[24px] font-semibold'
															: 'text-[14px] md:text-base'
													}
												>
													{item.children?.[0]?.text}
												</span>
											))}
										</div>
									)
								}
								if (node.type === 'paragraph' && node.children) {
									return (
										<div key={index} className='flex flex-col mt-5'>
											<p className='text-[14px] italic md:text-base'>
												{node.children[0]?.text}
											</p>
										</div>
									)
								}
								return null
							})}
						</div>,
						<div
							key='3'
							className='border mt-10 md:max-w-[426px] border-white/15 rounded-3xl p-7'
						>
							<div className='flex flex-row items-center gap-3'>
								<Image
									src='/HowWeWorks/oplasy3.svg'
									width={30}
									height={30}
									alt='oplasy'
								/>
								<p className='text-base font-semibold'>
									{structure.item3[0]?.children?.[0]?.text}
								</p>
							</div>
							{structure.item3.slice(1).map((node, index) => {
								if (node.type === 'paragraph' && node.children) {
									return (
										<div key={index} className='flex flex-col mt-5'>
											<span className='text-[24px] font-semibold'>
												{node.children[0]?.text}
											</span>
										</div>
									)
								}
								if (node.type === 'list' && node.children) {
									return (
										<div key={index} className='flex flex-col'>
											{node.children.map((item, itemIndex) => (
												<p key={itemIndex} className='text-[14px] md:text-base'>
													{item.children?.[0]?.text}
												</p>
											))}
										</div>
									)
								}
								return null
							})}
						</div>,
					]}
				/>

				{/* Form Section */}
				<form className='flex sm:gap-2 md:mt-30 flex-col md:flex-row w-full mt-10 rounded-3xl'>
					<div>
						<h3 className='text-[22px] md:text-[46px] font-semibold leading-[110%]'>
							{form.h2}
						</h3>
						<p className='text-[14px] md:text-base leading-[150%] mt-2'>
							{form.description}
						</p>
					</div>

					<div className='flex flex-col mt-2 max-w-[650px] gap-2'>
						<Input
							className='border-b outline-none border-white rounded-none'
							placeholder='Ваше Имя'
						/>
						<Input
							className='border-b border-white rounded-none'
							placeholder='Телефон'
						/>
						<Button className='mt-2' variant='secondary' size='lg'>
							{form.buttonText}
						</Button>
						<p className='text-[12px] text-[#3C3C3C] leading-[130%] italic mt-2'>
							{form.succsessText}
						</p>
					</div>
				</form>
			</div>
		</section>
	)
}
