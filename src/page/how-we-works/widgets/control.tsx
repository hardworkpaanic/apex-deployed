import { YourControlSection } from '@/shared/models/types/how-we-work'
import { Check } from 'lucide-react'
import Image from 'next/image'

export function Control({ data }: { data: YourControlSection }) {
	return (
		<section className='container mt-15 md:mt-30 max-w-[1330px] mx-auto px-4'>
			<div className='flex flex-col md:flex-row md:justify-between'>
				<div className='w-full max-w-[569px]'>
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
							{data.h2}
						</h2>
					</div>

					<div className='w-full bg-[#EDEDED] rounded-2xl px-5 md:px-7 md:py-5 py-2.5 flex items-center justify-center text-[#3C3C3C] text-base italic text-center mt-5'>
						{data.description}
					</div>

					<div className='md:flex md:gap-2.5 md:mt-10'>
						{data.list1.slice(0, 2).map(item => (
							<div
								key={item.id}
								className='w-full border border-[#E5E5E5] rounded-2xl pl-5 py-2.5 flex flex-row items-start text-[#3C3C3C] md:max-w-[279.5px] text-base gap-3 mt-3'
							>
								<Check size={24} className='mt-1' />
								<div className='flex flex-col'>
									<span className='text-[14px] font-semibold'>
										{item.text1}
									</span>
									<span className='text-[13px]'>{item.text2}</span>
								</div>
							</div>
						))}
					</div>

					<div className='md:flex md:gap-2.5'>
						{data.list1.slice(2, 4).map(item => (
							<div
								key={item.id}
								className='w-full border border-[#E5E5E5] rounded-2xl px-5 py-2.5 flex flex-row items-start text-[#3C3C3C] md:max-w-[279.5px] text-base gap-3 mt-3'
							>
								<Check size={24} className='mt-1' />
								<div className='flex flex-col'>
									<span className='text-[14px] font-semibold'>
										{item.text1}
									</span>
									<span className='text-[13px]'>{item.text2}</span>
								</div>
							</div>
						))}
					</div>

					{data.list1.slice(4, 5).map(item => (
						<div
							key={item.id}
							className='w-full border border-[#E5E5E5] rounded-2xl px-5 py-2.5 flex flex-row items-start text-[#3C3C3C] text-base gap-3 mt-3'
						>
							<Check size={24} className='mt-1' />
							<div className='flex flex-col'>
								<span className='text-[14px] font-semibold'>{item.text1}</span>
								<span className='text-[13px]'>{item.text2}</span>
							</div>
						</div>
					))}
				</div>

				<div className='w-full max-w-[652px]'>
					<h6 className='text-[14px] md:text-start md:text-[20px] text-center mt-5'>
						{data.h3}
					</h6>

					<div className='flex flex-col mt-5 gap-5'>
						<div className='h-[282px] md:h-[180px] w-full flex gap-5'>
							{data.list2.slice(0, 2).map(item => (
								<div
									key={item.id}
									className='flex w-full md:items-start flex-col items-center'
								>
									<div className='w-[60px] md:w-[40px] md:h-[40px] h-[60px] text-white font-bold text-base rounded-full bg-black flex items-center justify-center'>
										{item.text1}
									</div>

									<p className='text-center mt-4 font-semibold text-base'>
										{item.text2}
									</p>
									{item.text3 && (
										<p className='text-center text-[#3C3C3C] md:text-[13px] md:text-start mt-2 text-[12px] whitespace-pre-line'>
											{item.text3}
										</p>
									)}
								</div>
							))}
						</div>

						<div className='h-[282px] w-full flex gap-5'>
							{data.list2.slice(2, 3).map(item => (
								<div
									key={item.id}
									className='flex w-full md:items-start flex-col items-center'
								>
									<div className='w-[60px] md:w-[40px] md:h-[40px] h-[60px] text-white font-bold text-base rounded-full bg-black flex items-center justify-center'>
										{item.text1}
									</div>

									<p className='text-center mt-4 font-semibold text-base'>
										{item.text2}
									</p>
									{item.text3 && (
										<ul className='md:text-[13px] text-[#3C3C3C] pl-4 md:text-start list-disc mt-2 text-[12px]'>
											{item.text3.split('\n').map((line, index) => (
												<li key={index}>{line}</li>
											))}
										</ul>
									)}
								</div>
							))}

							{data.list2.slice(3, 4).map(item => (
								<div
									key={item.id}
									className='flex w-full md:items-start flex-col items-center'
								>
									<div className='w-[60px] md:w-[40px] md:h-[40px] h-[60px] text-white font-bold text-base rounded-full bg-black flex items-center justify-center'>
										{item.text1}
									</div>

									<p className='text-center mt-4 font-semibold text-base'>
										{item.text2}
									</p>
									{item.text3 && (
										<p className='text-center text-[#3C3C3C] md:text-[13px] md:text-start mt-2 text-[12px] whitespace-pre-line'>
											{item.text3}
										</p>
									)}
								</div>
							))}
						</div>
					</div>
				</div>
			</div>
		</section>
	)
}
