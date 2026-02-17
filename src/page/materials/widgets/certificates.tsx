import { Button } from '@/shared/components'
import { Input } from '@/shared/components/ui/input'
import { getImageUrl } from '@/shared/lib/utils'
import {
	CertificatesSection,
	FormSection,
} from '@/shared/models/types/material'
import Image from 'next/image'

export function Certificates({
	cer,
	from,
}: {
	cer: CertificatesSection
	from: FormSection
}) {
	return (
		<section className='bg-white rounded-3xl pt-30 relative bottom-20'>
			<div className='container max-w-[1320px] mx-auto px-4'>
				<h1 className='font-semibold text-[30px] md:text-[48px] max-w-[650px] leading-[110%]'>
					{cer.h2}
				</h1>

				<p className='italic mt-2 md:text-base text-[14px] leading-[150%]'>
					{cer.description}
				</p>

				<div className='flex justify-between md:px-10 mt-10'>
					{cer.sertificates.map(item => (
						<div
							key={item.id}
							className='flex items-center flex-col justify-center gap-4'
						>
							<Image
								src={getImageUrl(item.icon.url)}
								alt={item.icon.alternativeText || item.title}
								width={244}
								height={345}
								className='hidden md:block'
							/>
							<Image
								src={getImageUrl(item.icon.url)}
								alt={item.icon.alternativeText || item.title}
								width={60}
								height={88}
								className='block md:hidden'
							/>

							<span className='text-center md:text-[14px] text-[12px]'>
								{item.title}
							</span>
						</div>
					))}
				</div>

				<form className='bg-[#EDEDED] sm:gap-2 flex flex-col md:flex-row w-full md:mt-15 mt-5 rounded-3xl px-[20px] py-[30px]'>
					<div className=''>
						<h3 className='text-[22px] md:text-[46px] font-semibold leading-[110%]'>
							{from.h2}
						</h3>

						<p className='text-[14px] md:text-base leading-[150%] mt-2'>
							{from.description}
						</p>
					</div>

					<div className='flex flex-col mt-2 w-full max-w-[625px] gap-2'>
						<Input
							className='border-b outline-none border-black rounded-0'
							placeholder='Ваше Имя'
						/>
						<Input
							className='border-b border-black rounded-0'
							placeholder='Телефон'
						/>

						<Button className='mt-2' size={'lg'}>
							{from.buttonText}
						</Button>

						<p className='text-[12px] text-[#3C3C3C] leading-[130%] italic mt-2'>
							{from.succsessText}
						</p>
					</div>
				</form>
			</div>
		</section>
	)
}
