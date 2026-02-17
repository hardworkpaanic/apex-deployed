import Image from 'next/image'
import { Button } from '../ui'
import {
	Dialog,
	DialogContent,
	DialogHeader,
	DialogTitle,
	DialogTrigger
} from '../ui/dialog'
import { Input } from '../ui/input'

export function DialogForm() {
	return (
		<Dialog>
			<DialogTrigger asChild>
				<Button>Получить расчет</Button>
			</DialogTrigger>

			<DialogContent className="bg-transparent w-full flex-col md:flex-row justify-center border-0 shadow-none flex items-center gap-3">
				<Image
					src="/dialog-form.png"
					alt="Dialog form"
					width={275}
					className="w-full md:w-[275px] h-[143px] md:h-auto object-cover object-center rounded-2xl"
					height={337}
				/>
				<div className="bg-white max-w-[650px] p-7 flex flex-col gap-5 rounded-3xl">
					<DialogHeader>
						<DialogTitle className="text-[30px] font-bold">
							Получить расчет
						</DialogTitle>
					</DialogHeader>

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
			</DialogContent>
		</Dialog>
	)
}
