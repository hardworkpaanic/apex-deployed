import { Slider } from '@/shared/components/shared/slider'
import { Badge } from '@/shared/components/ui/badge'
import { getImageUrl } from '@/shared/lib/utils'
import {
	GaranteeSection,
	InstrumentsSection,
	NodesSection,
	OurSection,
	RichTextNode,
	StatisticsSection,
	SystemSection,
	VideoSection,
	WhatgSection,
} from '@/shared/models/types/installation'
import { ArrowUpRight } from 'lucide-react'
import Image from 'next/image'

interface OurInstallersProps {
	our: OurSection
	nodes: NodesSection
	video: VideoSection
	system: SystemSection
	instruments: InstrumentsSection
	statistics: StatisticsSection
	garantee: GaranteeSection
	whatg: WhatgSection
}

// Вспомогательная функция для рендеринга RichText
function renderRichText(nodes: RichTextNode[]) {
	return nodes.map((node, index) => {
		if (node.type === 'paragraph') {
			return (
				<p key={index} className='text-[14px] font-semibold md:text-base'>
					{node.children?.[0]?.text}
				</p>
			)
		}
		if (node.type === 'list') {
			return (
				<ul key={index} className='mt-2 flex flex-col gap-1'>
					{node.children?.map((item, i) => (
						<li key={i} className='flex items-center gap-1'>
							<Image
								src={'/about-us/list-icon.png'}
								alt='check'
								width={22}
								height={22}
							/>
							<p className='text-[14px] leading-[150%]'>
								{item.children?.[0]?.text}
							</p>
						</li>
					))}
				</ul>
			)
		}
		return null
	})
}

export function OurInstallers({
	our,
	nodes,
	video,
	system,
	instruments,
	statistics,
	garantee,
	whatg,
}: OurInstallersProps) {
	return (
		<>
			<section className='pt-15 md:pt-30 relative top-[-30px] bg-white rounded-3xl'>
				<div className='flex container mx-auto px-4 max-w-[1330px] flex-col md:flex-row md:justify-between'>
					<div className='md:max-w-[650px]'>
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
						<h2 className='font-semibold mt-2 md:font-bold text-[30px] md:text-[54px] leading-[110%]'>
							{our.h2}
						</h2>

						<p className='text-base mt-5 italic'>{our.description}</p>
					</div>

					<div className='bg-[#EDEDED] md:mt-10 flex flex-col justify-between py-7 px-5 rounded-3xl gap-2 mt-5'>
						{our.list.map(item => (
							<div key={item.id} className='items-center flex gap-2'>
								<Image
									src={'/about-us/list-icon.png'}
									alt='check'
									width={22}
									height={22}
								/>
								<p className='text-[14px] leading-[150%]'>{item.text}</p>
							</div>
						))}
					</div>
				</div>

				<div className='container mx-auto px-4 max-w-[1330px]'>
					<div className='mt-5 md:mt-15 hidden md:flex justify-between w-full flex-row'>
						<div
							className='bg-cover md:w-[427px] md:h-[400px] w-[320px] h-[320px] bg-center rounded-2xl'
							style={{ backgroundImage: `url(${getImageUrl(our.image1.url)})` }}
						>
							<div className='bg-black/70 p-7 text-white w-full h-full flex justify-end flex-col rounded-2xl'>
								{renderRichText(our.text1)}
							</div>
						</div>
						<div
							className='bg-cover md:w-[427px] md:h-[400px] w-[320px] h-[320px] bg-center rounded-2xl'
							style={{ backgroundImage: `url(${getImageUrl(our.image2.url)})` }}
						>
							<div className='bg-black/70 p-7 text-white w-full h-full flex justify-end flex-col rounded-2xl'>
								{renderRichText(our.text2)}
							</div>
						</div>
						<div
							className='bg-cover md:w-[427px] md:h-[400px] w-[320px] h-[320px] bg-center rounded-2xl'
							style={{ backgroundImage: `url(${getImageUrl(our.image3.url)})` }}
						>
							<div className='bg-black/40 p-7 text-white w-full h-full flex justify-end flex-col rounded-2xl'>
								{renderRichText(our.text3)}
							</div>
						</div>
					</div>

					<Slider
						className='mt-10'
						items={[
							<div
								key='1'
								className='bg-cover md:w-[427px] md:h-[400px] w-[320px] h-[320px] bg-center rounded-2xl'
								style={{
									backgroundImage: `url(${getImageUrl(our.image1.url)})`,
								}}
							>
								<div className='bg-black/70 p-7 text-white w-full h-full flex justify-end flex-col rounded-2xl'>
									{renderRichText(our.text1)}
								</div>
							</div>,
							<div
								key='2'
								className='bg-cover md:w-[427px] md:h-[400px] w-[320px] h-[320px] bg-center rounded-2xl'
								style={{
									backgroundImage: `url(${getImageUrl(our.image2.url)})`,
								}}
							>
								<div className='bg-black/70 p-7 text-white w-full h-full flex justify-end flex-col rounded-2xl'>
									{renderRichText(our.text2)}
								</div>
							</div>,
							<div
								key='3'
								className='bg-cover md:w-[427px] md:h-[400px] w-[320px] h-[320px] bg-center rounded-2xl'
								style={{
									backgroundImage: `url(${getImageUrl(our.image3.url)})`,
								}}
							>
								<div className='bg-black/40 p-7 text-white w-full h-full flex justify-end flex-col rounded-2xl'>
									{renderRichText(our.text3)}
								</div>
							</div>,
						]}
					/>
				</div>
			</section>

			<section className='container hidden md:block mt-15 md:mt-30 max-w-[1330px] mx-auto px-4'>
				<div className='flex flex-col md:gap-[132px] md:flex-row'>
					<Image
						src='/installation/nodes.svg'
						alt='mini-logo'
						width={105}
						height={108}
						className='md:hidden'
						unoptimized
					/>
					<img
						src={getImageUrl(nodes.image.url)}
						alt={nodes.image.alternativeText || 'yzli'}
						className='hidden md:block w-[424px] h-[430px] object-contain'
					/>
					<div className=''>
						<h3 className='text-[22px] md:text-[54px] leading-[110%] mt-5 md:mt-0 font-bold'>
							{nodes.h2}
						</h3>

						<p className='text-[14px] md:text-base mt-2'>{nodes.description}</p>

						{nodes.content.map((node, index) => {
							if (node.type === 'paragraph') {
								return (
									<h3
										key={index}
										className='text-base md:mt-10 md:text-base md:font-bold mt-5 font-bold'
									>
										{node.children?.[0]?.text}
									</h3>
								)
							}
							if (node.type === 'list') {
								return (
									<ul key={index} className='flex flex-col md:mt-3'>
										{node.children?.map((item, i) => (
											<div key={i} className='items-center mt-4 flex gap-2'>
												<Image
													src={'/about-us/list-icon.png'}
													alt='check'
													width={22}
													height={22}
												/>
												<p className='text-base leading-[150%]'>
													{item.children?.[0]?.text}
												</p>
											</div>
										))}
									</ul>
								)
							}
							return null
						})}
					</div>
				</div>
			</section>

			<>
				<div className='container hidden md:block mx-auto mt-15 md:mt-30 max-w-[1330px] px-4'>
					<div className=''>
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
						<h2 className='font-semibold md:font-bold mt-2 text-[30px] md:text-[48px] leading-[110%]'>
							{video.texts[0]?.text1 || 'Посмотрите, как мы монтируем'}
						</h2>

						<p className='mt-5 text-[14px] italic text-[#3C3C3C]'>
							{video.texts[0]?.text2}
						</p>
					</div>
					<section className="bg-[url('/home-video.jpg')] md:hidden text-white mt-5 w-full h-80 bg-cover bg-center rounded-3xl flex items-center gap-4 justify-center flex-col">
						<Image src='/play.svg' alt='play' width={48} height={48} />
						<span className='text-[14px] text-white/70'>Смотреть видео</span>
					</section>
				</div>

				<section className='hidden md:flex container max-w-[1320px] mx-auto px-4 text-white w-full h-135 bg-cover bg-center rounded-3xl mt-15 items-center gap-4 justify-center flex-col'>
					<div className="bg-[url('/home-video-desctop.jpg')] w-full h-full bg-cover bg-center rounded-3xl flex items-center gap-4 justify-center flex-col">
						<Image src='/play.svg' alt='play' width={48} height={48} />
						<span className='text-[14px] text-white/70'>Смотреть видео</span>
					</div>
				</section>
			</>

			<section className='mt-15 md:mt-30 hidden md:block pb-30 container mx-auto max-w-[1330px] px-4'>
				<div className='flex flex-row justify-between items-end'>
					<div className='md:max-w-[804px]'>
						<div className='flex flex-col gap-2'>
							<img
								src={getImageUrl(system.image.url)}
								alt='blabla'
								width={80}
								height={41}
								className='md:hidden'
							/>
							<Image
								src='/mini-logo-gray.svg'
								alt='mini-logo'
								width={28}
								height={8}
								className='mt-5'
								unoptimized
							/>
						</div>
						<h2 className='font-semibold md:font-bold mt-2 text-[30px] md:text-[54px] leading-[110%]'>
							{system.h2}
						</h2>

						<p className='mt-5 text-[14px] md:text-[18px] italic text-[#3C3C3C]'>
							{system.description}
						</p>
					</div>

					<div className=''>
						<img
							src={getImageUrl(system.image.url)}
							alt='blabla'
							width={202}
							height={104}
							className=''
						/>
					</div>
				</div>

				<div className='mt-5 md:mt-15 flex flex-col md:flex-row md:justify-between flex-wrap'>
					{system.levels.map(level => (
						<div
							key={level.id}
							className='border border-[#EDEDED] rounded-2xl p-5 flex flex-col justify-between w-full md:max-w-[427px] md:h-[431px] max-w-[315px] h-[310px] mb-5'
						>
							<div>
								<div className='flex items-center justify-between'>
									<p className='text-base font-semibold'>{level.h4}</p>
									<Badge>{level.number}</Badge>
								</div>

								<div className='mt-4'>
									{level.content &&
										level.content.map((node, index) => {
											if (node.type === 'paragraph') {
												return (
													<p key={index} className='text-[14px] font-semibold'>
														{node.children?.[0]?.text}
													</p>
												)
											}
											if (node.type === 'list') {
												return (
													<div key={index} className='text-[14px]'>
														{node.children?.map((item, i) => (
															<p key={i}>• {item.children?.[0]?.text}</p>
														))}
													</div>
												)
											}
											return null
										})}
								</div>

								{level.content2 && (
									<div className='mt-4'>
										{level.content2.map((node, index) => {
											if (node.type === 'paragraph') {
												return (
													<p key={index} className='text-[14px] font-semibold'>
														{node.children?.[0]?.text}
													</p>
												)
											}
											if (node.type === 'list') {
												return (
													<div key={index} className='text-[14px]'>
														{node.children?.map((item, i) => (
															<p key={i}>• {item.children?.[0]?.text}</p>
														))}
													</div>
												)
											}
											return null
										})}
									</div>
								)}
							</div>

							<div>
								<p className='text-[14px] flex items-center gap-1 font-semibold'>
									Результат <ArrowUpRight size={16} />
								</p>
								<p className='text-[12px]'>{level.result}</p>
							</div>
						</div>
					))}
				</div>
			</section>

			<div className='container max-w-[1330px] mx-auto rounded-2xl'>
				<div className="bg-[url('/quality-control-tools.svg')] bg-cover w-full md:pb-10 pt-[140px] px-4 pb-2.5 bg-center rounded-[30px] md:pt-10 flex flex-col gap-5 md:px-[50px]">
					<div className='bg-white max-w-[634px] rounded-2xl p-5'>
						<h4 className='font-bold text-base leading-[110%]'>
							{instruments.h4}
						</h4>
						<div className='flex flex-col gap-2 mt-5'>
							{instruments.list.map(item => (
								<div key={item.id} className='items-start flex gap-2'>
									<Image
										src={'/about-us/list-icon.png'}
										alt='check'
										width={22}
										height={22}
									/>
									<p className='text-[14px] leading-[150%]'>{item.text}</p>
								</div>
							))}
						</div>
					</div>
					<div className='w-full flex md:mt-20 justify-end'>
						<div className='bg-white md:max-w-[458px] rounded-2xl p-5'>
							<h4 className='font-bold text-base leading-[110%]'>
								{statistics.h4}
							</h4>
							<div className='flex flex-col gap-2 mt-5'>
								{statistics.list.map(item => (
									<div key={item.id} className='items-start flex gap-2'>
										<Image
											src={'/about-us/list-icon.png'}
											alt='check'
											width={22}
											height={22}
										/>
										<p className='text-[14px] leading-[150%]'>{item.text}</p>
									</div>
								))}
							</div>
						</div>
					</div>
				</div>
			</div>

			<section className='container py-15 mx-auto px-4 max-w-[1330px]'>
				<div className='py-7 flex flex-col gap-5 text-center'>
					<h3 className='text-[30px] md:text-[54px] font-bold leading-[110%]'>
						{garantee.h2}
					</h3>

					<p className='md:text-[18px]'>{garantee.description}</p>

					<div className='bg-[#F5F5F5] md:py-10 mt-8 flex flex-col md:flex-row md:justify-between rounded-2xl px-4 py-5'>
						<div className='w-full'>
							<h4 className='text-[30px] md:text-[68px] font-semibold'>
								2 года
							</h4>
							<span className='font-semibold'>ГАРАНТИЯ НА МОНТАЖ</span>

							<div className='h-[1px] w-full mt-5 bg-[#D0D0D0]'></div>

							<div className='flex flex-col md:border-r mt-4 border-[#D0D0D0]'>
								<p className='text-[#999999] text-[14px] font-bold'>
									Покрывает:
								</p>
								<div className='w-full flex mt-10 flex-row'>
									<div className='flex w-full gap-6 flex-col'>
										<div className='flex flex-col gap-3 justify-center items-center'>
											<img src={'/galka.png'} alt='check' />
											<span className='text-[14px] font-bold'>
												Крепёж и узлы
											</span>
											<p className='text-[14px] leading-0'>
												(не расшатаются не отойдут)
											</p>
										</div>
										<div className='flex flex-col gap-3 justify-center items-center'>
											<img src={'/galka.png'} alt='check' />
											<span className='text-[14px] font-bold'>Геометрия</span>
											<p className='text-[14px] leading-0'>
												(не деформируется)
											</p>
										</div>
									</div>
									<div className='flex w-full gap-6 flex-col'>
										<div className='flex flex-col gap-3 justify-center items-center'>
											<img src={'/galka.png'} alt='check' />
											<span className='text-[14px] font-bold'>
												Герметизация швов
											</span>
											<p className='text-[14px] leading-0'>(не разрушится)</p>
										</div>
										<div className='flex flex-col gap-3 justify-center items-center'>
											<img src={'/galka.png'} alt='check' />
											<span className='text-[14px] font-bold'>
												Стыковка элементов
											</span>
											<p className='text-[14px] leading-0'>
												(зазоры не увеличатся)
											</p>
										</div>
									</div>
								</div>
								<p className='mt-4 text-[#999999] text-[14px] font-bold'>
									Не покрывает:
								</p>
								<div className='w-full flex mt-3 flex-row'>
									<div className='flex w-full gap-6 flex-col'>
										<div className='flex flex-col gap-2 justify-center items-center'>
											<img src={'/krestik.svg'} alt='cross' />
											<div>
												<span className='text-[14px] font-bold'>
													Механические повреждения
												</span>
												<p className='text-[14px]'>(удары, сколы)</p>
											</div>
										</div>
									</div>
									<div className='flex w-full gap-4 flex-col'>
										<div className='flex flex-col gap-2 justify-center items-center'>
											<img src={'/krestik.svg'} alt='cross' />
											<div>
												<span className='text-[14px] font-bold'>
													Форс-мажор
												</span>
												<p className='text-[14px]'>(ураганы, землетрясения)</p>
											</div>
										</div>
									</div>
								</div>
							</div>
						</div>
						<div className='w-full mt-10 md:mt-0'>
							<h4 className='text-[30px] md:text-[68px] font-semibold'>
								50 лет
							</h4>
							<span className='font-semibold'>ГАРАНТИЯ НА МАТЕРИАЛ</span>
							<div className='h-[1px] w-full mt-5 bg-[#D0D0D0]'></div>
							<p className='mt-4 text-[#999999] text-[14px] font-bold'>
								Покрывает:
							</p>
							<div className='w-full flex mt-10 flex-row'>
								<div className='flex w-full gap-6 flex-col'>
									<div className='flex flex-col gap-3 justify-center items-center'>
										<img src={'/galka.png'} alt='check' />
										<span className='text-[14px] font-bold'>
											Сохранность цвета
										</span>
										<p className='text-[14px] leading-0'>(не выгорит)</p>
									</div>
									<div className='flex flex-col gap-3 justify-center items-center'>
										<img src={'/galka.png'} alt='check' />
										<span className='text-[14px] font-bold'>
											Морозостойкость
										</span>
										<p className='text-[14px] leading-0'>(200+ циклов)</p>
									</div>
								</div>
								<div className='flex w-full gap-6 flex-col'>
									<div className='flex flex-col gap-3 justify-center items-center'>
										<img src={'/galka.png'} alt='check' />
										<span className='text-[14px] font-bold'>
											Целостность структуры
										</span>
										<p className='text-[14px] leading-0'>
											(не потрескается, не отслоится)
										</p>
									</div>
									<div className='flex flex-col gap-3 justify-center items-center'>
										<img src={'/galka.png'} alt='check' />
										<span className='text-[14px] font-bold'>
											Водонепроницаемость
										</span>
										<p className='text-[14px] leading-0'>
											(не впитывает влагу)
										</p>
									</div>
								</div>
							</div>
							<p className='mt-4 text-[#999999] text-[14px] font-bold'>
								Не покрывает:
							</p>
							<div className='w-full flex mt-3 flex-row'>
								<div className='flex w-full gap-6 flex-col'>
									<div className='flex flex-col gap-2 justify-center items-center'>
										<img src={'/krestik.svg'} alt='cross' />
										<div>
											<span className='text-[14px] font-bold'>
												Механические повреждения
											</span>
											<p className='text-[14px]'>(удары, царапины)</p>
										</div>
									</div>
								</div>
								<div className='flex w-full gap-4 flex-col'>
									<div className='flex flex-col gap-2 justify-center items-center'>
										<img src={'/krestik.svg'} alt='cross' />
										<div>
											<span className='text-[14px] font-bold'>
												Несанкционированный ремонт
											</span>
											<p className='text-[14px]'>третьими лицами</p>
										</div>
									</div>
								</div>
							</div>
						</div>
					</div>
				</div>

				<div className='flex flex-col py-7 md:flex-row gap-5'>
					<div className='flex-1'>
						<div>
							<div className='flex items-center gap-2'>
								<Image
									src='/mini-logo-gray.svg'
									alt='mini-logo'
									width={28}
									height={8}
									unoptimized
								/>
							</div>
							<h2 className='font-semibold mt-2 text-[30px] md:text-[48px] leading-[110%]'>
								{whatg.h2}
							</h2>
						</div>

						<div className='mt-5 md:mt-15 hidden md:grid grid-cols-2 gap-5'>
							<div className='bg-[#F3F3F3] p-5 rounded-2xl'>
								{renderRichText(whatg.text1)}
							</div>
							<div className='bg-[#F3F3F3] p-5 rounded-2xl'>
								{renderRichText(whatg.text2)}
							</div>
							<div className='bg-[#F3F3F3] p-5 rounded-2xl'>
								{renderRichText(whatg.text3)}
							</div>
							<div className='bg-[#F3F3F3] p-5 rounded-2xl'>
								{renderRichText(whatg.text4)}
							</div>
						</div>

						<Slider
							className='mt-10 md:hidden'
							items={[
								<div key='1' className='bg-[#F3F3F3] p-5 rounded-2xl'>
									{renderRichText(whatg.text1)}
								</div>,
								<div key='2' className='bg-[#F3F3F3] p-5 rounded-2xl'>
									{renderRichText(whatg.text2)}
								</div>,
								<div key='3' className='bg-[#F3F3F3] p-5 rounded-2xl'>
									{renderRichText(whatg.text3)}
								</div>,
								<div key='4' className='bg-[#F3F3F3] p-5 rounded-2xl'>
									{renderRichText(whatg.text4)}
								</div>,
							]}
						/>
					</div>

					<img
						src={getImageUrl(whatg.iamge.url)}
						alt={whatg.iamge.alternativeText || 'home'}
						className='hidden md:block w-full max-w-[426px] h-[630px] object-cover rounded-2xl'
					/>
				</div>
			</section>
		</>
	)
}
