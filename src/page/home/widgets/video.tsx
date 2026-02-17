import Image from 'next/image'

export function Video() {
	return (
		<>
			<section className="bg-[url('/home-video.jpg')] md:hidden text-white mt-15 w-full h-80 bg-cover bg-center rounded-3xl flex items-center gap-4 justify-center flex-col">
				<Image
					src="/play.svg"
					alt="play"
					width={48}
					height={48}
				/>
				<span className="text-[14px] text-white/70">Смотреть видео</span>
			</section>

			{/* Mobile */}
			<section className="hidden md:flex container max-w-[1320px] mx-auto px-4 text-white w-full h-135 bg-cover bg-center rounded-3xl mt-15 items-center gap-4 justify-center flex-col">
				<div className="bg-[url('/home-video-desctop.jpg')]  w-full h-full bg-cover bg-center rounded-3xl flex items-center gap-4 justify-center flex-col">
					<Image
						src="/play.svg"
						alt="play"
						width={48}
						height={48}
					/>
					<span className="text-[14px] text-white/70">Смотреть видео</span>
				</div>
			</section>
		</>
	)
}
