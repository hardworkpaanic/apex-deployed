import Image from 'next/image'

export function Video() {
	return (
		<>
			<div className='container md:hidden mx-auto mt-15 md:mt-30 max-w-[1330px] px-4'>
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
					<h2 className='font-semibold mt-2 text-[30px] md:text-[48px] leading-[110%]'>
						Посмотрите, как мы монтируем
					</h2>

					<p className='mt-5 text-[14px] italic text-[#3C3C3C]'>
						Таймлапс монтажа фасада особняка в Подмосковье: 12 дней в 3 минутах
					</p>
				</div>
				<section className="bg-[url('/home-video.jpg')]  md:hidden text-white mt-5 w-full h-80 bg-cover bg-center rounded-3xl flex items-center gap-4 justify-center flex-col">
					<Image src='/play.svg' alt='play' width={48} height={48} />
					<span className='text-[14px] text-white/70'>Смотреть видео</span>
				</section>
			</div>

			{/* Mobile */}
			<section className='hidden md:hidden container max-w-[1320px] mx-auto px-4 text-white w-full h-135 bg-cover bg-center rounded-3xl mt-15 items-center gap-4 justify-center flex-col'>
				<div className="bg-[url('/home-video-desctop.jpg')]  w-full h-full bg-cover bg-center rounded-3xl flex items-center gap-4 justify-center flex-col">
					<Image src='/play.svg' alt='play' width={48} height={48} />
					<span className='text-[14px] text-white/70'>Смотреть видео</span>
				</div>
			</section>
		</>
	)
}
