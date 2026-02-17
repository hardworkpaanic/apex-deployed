import { getImageUrl } from '@/shared/lib/utils'
import { PriceFactorsSection } from '@/shared/models/types/price'
import { Flame } from 'lucide-react'
import Image from 'next/image'

export function PricingFactors({ data }: { data: PriceFactorsSection }) {
	return (
		<section className='mt-15 md:mt-30'>
			<div className='container max-w-[1320px] mx-auto px-4'>
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

				<p className='mt-5 text-[14px] md:text-base italic text-[#3C3C3C]'>
					{data.description}
				</p>

				<div className='flex flex-col md:flex-row md:justify-between md:flex-wrap'>
					{/* Мобильный блок с фиксированным текстом (отображается только на мобильных) */}
					<div className='bg-linear-to-r md:hidden w-full h-full md:max-w-[315px] md:h-[253px] from-[#444444]/99 to-[#000000] p-5 flex flex-col justify-between text-white rounded-2xl mt-5'>
						<Flame />
						<p className='text-[14px] '>
							Мы работаем по принципу фиксированной стоимости: все факторы
							учитываются на этапе проектирования и закрепляются в договоре.
							Никаких доплат и скрытых расходов в процессе реализации.
						</p>
					</div>

					{/* Первые два фактора */}
					{data.factors.slice(0, 2).map(factor => (
						<div
							key={factor.id}
							className='bg-[#F3F3F3] w-full h-full flex flex-col justify-between md:max-w-[315px] md:h-63.25 mt-5 rounded-3xl p-7.5'
						>
							<div>
								<span className='text-base font-semibold leading-[150%]'>
									{factor.text1}
								</span>
								<p className='text-base text-[#3C3C3C] mt-2'>{factor.text2}</p>
							</div>
							<p className='font-bold text-base mt-3'>{factor.text3}</p>
						</div>
					))}

					{/* Десктопный блок с фиксированным текстом (скрыт на мобильных) */}
					<div className='bg-linear-to-r hidden w-full h-full md:max-w-[640px] md:h-[253px] from-[#444444]/99 to-[#000000] p-5 md:flex flex-col justify-between text-white rounded-2xl mt-5'>
						<Flame />
						<p className='text-[14px] '>
							Мы работаем по принципу фиксированной стоимости: все факторы
							учитываются на этапе проектирования и закрепляются в договоре.
							Никаких доплат и скрытых расходов в процессе реализации.
						</p>
					</div>

					{/* Блок с изображением */}
					<div className='bg-[#F3F3F3] w-full h-full flex flex-col justify-between md:max-w-[315px] md:h-63.25 mt-2 rounded-3xl overflow-hidden'>
						<Image
							src={getImageUrl(data.image.url)}
							alt={data.image.alternativeText || data.image.name}
							width={data.image.width}
							height={data.image.height}
							className='w-full h-full object-cover'
							unoptimized
						/>
					</div>

					{/* Остальные факторы (начиная с 3-го) */}
					{data.factors.slice(2).map(factor => (
						<div
							key={factor.id}
							className='bg-[#F3F3F3] w-full h-full flex flex-col justify-between md:max-w-[315px] md:h-63.25 mt-2 rounded-3xl p-7.5'
						>
							<div>
								<span className='text-base font-semibold leading-[150%]'>
									{factor.text1}
								</span>
								<p className='text-base text-[#3C3C3C] mt-2'>{factor.text2}</p>
							</div>
							<p className='font-bold text-base mt-3'>{factor.text3}</p>
						</div>
					))}
				</div>
			</div>
		</section>
	)
}
