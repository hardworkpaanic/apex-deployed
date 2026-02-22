'use client'

import Image from 'next/image'
import { useState } from 'react'
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
	const [formData, setFormData] = useState({
		name: '',
		phone: ''
	})
	const [isLoading, setIsLoading] = useState(false)

	const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
		const { name, value } = e.target
		setFormData(prev => ({ ...prev, [name]: value }))
	}

	const handleSubmit = async (e: React.FormEvent) => {
		e.preventDefault()
		setIsLoading(true)

		try {
			// Отправка в amoCRM через ваш API
			const response = await fetch('/api/amocrm/lead', {
				method: 'POST',
				headers: {
					'Content-Type': 'application/json'
				},
				body: JSON.stringify(formData)
			})

			if (response.ok) {
				// Очистить форму или показать сообщение об успехе
				setFormData({ name: '', phone: '' })
				alert('Заявка успешно отправлена!')
			} else {
				throw new Error('Ошибка отправки')
			}
		} catch (error) {
			console.error('Ошибка:', error)
			alert('Произошла ошибка при отправке')
		} finally {
			setIsLoading(false)
		}
	}

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
				<form
					onSubmit={handleSubmit}
					className="bg-white max-w-[650px] p-7 flex flex-col gap-5 rounded-3xl"
				>
					<DialogHeader>
						<DialogTitle className="text-[30px] font-bold">
							Получить расчет
						</DialogTitle>
					</DialogHeader>

					<Input
						name="name"
						value={formData.name}
						onChange={handleChange}
						className="border-b outline-none border-black rounded-0"
						placeholder="Ваше Имя"
						required
					/>
					<Input
						name="phone"
						value={formData.phone}
						onChange={handleChange}
						className="border-b border-black rounded-0"
						placeholder="Телефон"
						required
						type="tel"
					/>

					<Button
						className="mt-2"
						size={'lg'}
						type="submit"
						disabled={isLoading}
					>
						{isLoading ? 'Отправка...' : 'Оставить заявку'}
					</Button>

					<p className="text-[12px] text-[#3C3C3C] leading-[130%] italic mt-2">
						Нажимая кнопку «Отправить», я даю согласие на обработку моих
						персональных данных на условиях и для целей, определенных в политике
						о конфиденциальности
					</p>
				</form>
			</DialogContent>
		</Dialog>
	)
}
