import { cn } from '@/shared/lib/utils'
import { footerMenuItems } from '@/shared/models/footer-menu-items'
import Image from 'next/image'
import Link from 'next/link'
import { Button } from '../ui'

export function Footer({ className }: { className?: string }) {
	return (
		<>
			<footer
				className={cn(
					className,
					'container max-w-[1320px] md:hidden mx-auto px-4 text-white rounded-t-3xl pt-15 mt-15 pb-8 bg-black'
				)}
			>
				<div className='flex justify-between items-center'>
					<Image
						src={'/logo-white.svg'}
						width={94.46}
						height={28}
						alt='Logo'
						unoptimized
					/>

					<span className='text-[12px] text-[#4A4D52]'>Наверх</span>
				</div>

				<div className='flex flex-col gap-3 mt-5'>
					<span className='text-[14px] font-semibold'>Меню</span>
					{footerMenuItems.map(item => (
						<Link key={item.title} href={item.href}>
							<span className='text-[12px]'>{item.title}</span>
						</Link>
					))}

					<Link className='text-[14px] mt-2' href='/privacy-policy'>
						Политика конфиденциальности
					</Link>

					<span className='text-[30px] font-semibold'>+7 (495) 000-00-00</span>
					<span className='text-[30px] font-semibold'>info@apex.ru</span>
				</div>

				<Button className='w-full px-[15px] mt-5' variant={'secondary'}>
					Получить расчет
				</Button>

				<span className='text-[14px] pt-5 text-[#535353]'>
					Все права защищены © 2026
				</span>
			</footer>

			<footer
				className={cn(
					className,
					'hidden md:block bg-black text-white py-[80px] mt-[168px] rounded-t-3xl'
				)}
			>
				<div className='container max-w-[1320px] mx-auto'>
					<div className='flex flex-row justify-between'>
						<div className='flex flex-row border-r pr-[60px] border-[#3C3C3C] w-full justify-between'>
							<div className='w-full'>
								<div className='grow'>
									<Image
										src={'/logo-white.svg'}
										width={108.80094909667969}
										height={32.249900817871094}
										alt='Logo'
										unoptimized
									/>
								</div>

								<Link
									href='/private-policy'
									className='text-[14px] mt-[263.75px] flex'
								>
									Политика конфиденциальности
								</Link>
							</div>
							<div className=''>
								<h2 className='text-[30px] w-[302px] text-end	 font-semibold'>
									+7 (495) 000-00-00
								</h2>
								<h2 className='text-[30px] w-[302px] text-end font-semibold'>
									info@apex.ru
								</h2>
							</div>
						</div>
						{/* separator */}

						<div className='flex flex-row w-full pl-[60px] justify-between'>
							<div className='flex flex-col gap-3 mt-2'>
								<span className='text-[14px] font-semibold'>Меню</span>
								{footerMenuItems.map(item => (
									<Link key={item.title} href={item.href}>
										<span className='text-[14px]'>{item.title}</span>
									</Link>
								))}
							</div>

							<div className='mt-5 flex items-center-end flex-col'>
								<Button size={'lg'} className='' variant={'secondary'}>
									Получить расчет
								</Button>

								<p className='flex text-[14px] mt-[246px] text-[#535353]'>
									Все права защищены © 2026
								</p>
							</div>
						</div>
					</div>
				</div>
			</footer>
		</>
	)
}
