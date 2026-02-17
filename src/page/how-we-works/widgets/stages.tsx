import { Slider } from '@/shared/components/shared/slider'
import { Separator } from '@/shared/components/ui/separator'
import { getImageUrl } from '@/shared/lib/utils'
import {
	ControlSection,
	StagesSection,
} from '@/shared/models/types/how-we-work'
import Image from 'next/image'

export function Stages({
	data,
	control,
}: {
	data: StagesSection
	control: ControlSection
}) {
	return (
		<section className='container mt-15 md:mt-[83ox] max-w-[1330px] mx-auto px-4'>
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
				<h2 className='font-bold mt-2 text-[30px] md:text-[54px] leading-[110%]'>
					{data.h2}
				</h2>

				<p className='mt-5 text-[14px] md:hidden italic text-[#3C3C3C]'>
					{data.de}
				</p>
			</div>

			<div className='mt-5 md:mt-15 hidden md:flex flex-col flex-wrap md:flex-row gap-3'>
				{data.stages.slice(0, 3).map(stage => (
					<div
						key={stage.id}
						className='bg-[#F3F3F3] border border-[#EDEDED] rounded-[30px] p-7 flex flex-col justify-between w-full max-w-[315px] h-[253px]'
					>
						<div className='w-[32px] h-[32px] text-white font-bold text-base rounded-md bg-black flex items-center justify-center'>
							{stage.text1}
						</div>

						<div className='flex flex-col md:gap-2'>
							<p className='text-base font-semibold whitespace-pre-line'>
								{stage.text2}
							</p>
							<p className='text-base'>{stage.text3}</p>
						</div>
					</div>
				))}

				<div className='w-[280px] hidden md:block'></div>
				<div className='w-[638px] hidden h-[253px] md:flex items-end'>
					<p className='text-[14px] italic'>{data.de}</p>
				</div>

				{data.stages.slice(3, 5).map(stage => (
					<div
						key={stage.id}
						className='bg-[#F3F3F3] border border-[#EDEDED] rounded-[30px] p-7 flex flex-col justify-between w-full max-w-[315px] h-[253px]'
					>
						<div className='w-[32px] h-[32px] text-white font-bold text-base rounded-md bg-black flex items-center justify-center'>
							{stage.text1}
						</div>

						<div className='flex flex-col md:gap-2'>
							<p className='text-base font-semibold whitespace-pre-line'>
								{stage.text2}
							</p>
							<p className='text-base'>{stage.text3}</p>
						</div>
					</div>
				))}
			</div>

			<Slider
				className='mt-10'
				items={data.stages.map(stage => (
					<div
						key={stage.id}
						className='bg-[#F3F3F3] border border-[#EDEDED] rounded-[30px] p-7 flex flex-col justify-between w-full max-w-[315px] h-[253px]'
					>
						<div className='w-[32px] h-[32px] text-white font-bold text-base rounded-md bg-black flex items-center justify-center'>
							{stage.text1}
						</div>

						<div className='flex flex-col md:gap-2'>
							<p className='text-base font-semibold whitespace-pre-line'>
								{stage.text2}
							</p>
							<p className='text-base'>{stage.text3}</p>
						</div>
					</div>
				))}
			/>

			<div className='bg-black md:relative md:h-[283px] mt-15 md:mt-30 pb-35 md:pb-[59px] text-white rounded-2xl md:px-[50px] py-[59px] px-6 py-5'>
				<h3 className='text-[22px] md:text-[28px] font-semibold leading-[130%]'>
					{control.h2}
				</h3>
				<ul className='flex mt-2 flex-col'>
					{control.list.map(item => (
						<div key={item.id} className='items-center mt-4 flex gap-2'>
							<Image
								src={'/about-us/list-icon.png'}
								alt='check'
								width={24}
								height={24}
							/>
							<p className='text-white/70 leading-[150%]'>{item.text}</p>
						</div>
					))}
				</ul>

				<Image
					src={getImageUrl(control.image.url)}
					alt={control.image.alternativeText || 'phone'}
					width={control.image.width}
					height={control.image.height}
					className='absolute hidden md:block right-50 bottom-[-80px]'
					unoptimized
				/>
			</div>

			<div className='relative flex justify-center items-center w-full'>
				<Image
					src={getImageUrl(control.image.url)}
					alt={control.image.alternativeText || 'phone'}
					width={157.56}
					height={200}
					className='absolute md:hidden bottom-[-80px]'
					unoptimized
				/>
			</div>

			<Separator className='bg-[#EFEFEF] mt-40' />
		</section>
	)
}
