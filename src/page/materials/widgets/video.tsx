import { getImageUrl } from '@/shared/lib/utils'
import { VideoSection, VideoTextSection } from '@/shared/models/types/material'
import Image from 'next/image'

export function Video({
	video,
	videoText,
}: {
	video: VideoSection
	videoText: VideoTextSection
}) {
	const imageUrl = video.Image?.[0]?.url
		? getImageUrl(video.Image[0].url)
		: null

	return (
		<>
			{/* Мобильная версия */}
			<section
				className='md:hidden text-white mt-15 md:mt-30 w-full h-80 bg-cover bg-center rounded-3xl flex items-center gap-4 justify-center flex-col'
				style={imageUrl ? { backgroundImage: `url(${imageUrl})` } : {}}
			>
				<Image src='/play.svg' alt='play' width={48} height={48} />
				<span className='text-[14px] text-white/70'>Смотреть видео</span>
			</section>

			{/* Десктопная версия */}
			<section className='hidden md:flex container max-w-[1320px] mx-auto px-4 text-white w-full h-135 bg-cover bg-center rounded-3xl mt-15 items-center gap-4 justify-center flex-col'>
				<div
					className='w-full h-full bg-cover bg-center rounded-3xl flex items-center gap-4 justify-center flex-col'
					style={imageUrl ? { backgroundImage: `url(${imageUrl})` } : {}}
				>
					<Image src='/play.svg' alt='play' width={48} height={48} />
					<span className='text-[14px] text-white/70'>Смотреть видео</span>
				</div>
			</section>

			{/* Текстовый блок с колонками */}
			<section className='container max-w-[1320px] mx-auto px-4 flex w-full flex-col md:justify-between md:flex-row mt-13.75 gap-5'>
				{videoText.texts?.map(item => (
					<div
						key={item.id}
						className='flex flex-col gap-2 w-full max-w-[427px]'
					>
						<span className='text-base font-bold'>{item.text1}</span>
						<div className='w-full h-0.5 bg-black'></div>
						<p className='whitespace-pre-line'>{item.text2}</p>
					</div>
				))}
			</section>
		</>
	)
}
