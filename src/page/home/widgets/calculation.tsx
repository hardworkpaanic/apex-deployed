import { Button } from '@/shared/components'
import { Input } from '@/shared/components/ui/input'
import Image from 'next/image'

export function Calculation() {
	return (
		<section className="container max-w-[1320px] mx-auto mt-15 px-4">
			<div className="flex flex-col md:flex-row md:items-start md:justify-between">
				<h2 className="font-semibold max-w-[550px] mt-2 md:mt-0 text-[30px] md:text-[48px] leading-[110%]">
					Работаем с архитекторами и застройщикам{' '}
				</h2>

				<div className="">
					<p className=" text-[14px] md:w-[650px] md:text-[16px] leading-[150%] text-[#3C3C3C]">
						BIM-библиотека, техническая поддержка на всех этапах, дилерские
						условия Мы понимаем потребности архитекторов и застройщиков.
						Предоставляем полный пакет технической документации, BIM-модели для
						Revit, DWG-чертежи узлов крепления. Бесплатная техническая поддержка
						на всех этапах проекта. Специальные условия для постоянных
						партнёров.{' '}
					</p>

					<Button
						size={'lg'}
						className="mt-10.5"
					>
						Узнать условия для профессионалов
					</Button>
				</div>
			</div>
			<Image
				src="/homepage/home2.jpg"
				alt="home2"
				width={342}
				height={170}
				className="w-full block md:hidden bg-contain bg-center mt-7.5"
			/>

			<Image
				src="/homepage/home2-desctop.jpg"
				alt="home2"
				width={1316.67041015625}
				height={380}
				className="w-full hidden md:block bg-contain bg-center mt-7.5 md:mt-15"
			/>

			<form className="bg-[#EDEDED] flex flex-col md:flex-row w-full mt-5 md:mt-18.5 rounded-3xl px-[20px] py-[30px]">
				<div className="">
					<h3 className="text-[22px] md:text-[46px] font-semibold leading-[110%]">
						Получите расчёт вашего проекта за 24 часа
					</h3>

					<p className="text-[14px] md:text-base leading-[150%] mt-2">
						Мы перезвоним в течение 2 часов (пн-пт 9:00-20:00)
					</p>
				</div>

				<div className="flex flex-col mt-2 w-full max-w-[630px] gap-2">
					<Input
						className="border-b outline-none border-black rounded-0"
						placeholder="Ваше Имя"
					/>
					<Input
						className="border-b border-black rounded-0"
						placeholder="Телефон"
					/>

					<Button
						className="mt-2"
						size={'lg'}
					>
						Оставить заявку
					</Button>

					<p className="text-[12px] text-[#3C3C3C] leading-[130%] italic mt-2">
						Нажимая кнопку «Отправить», я даю согласие на обработку моих
						персональных данных на условиях и для целей, определенных в политике
						о конфиденциальности
					</p>
				</div>
			</form>
		</section>
	)
}
