import { NextResponse } from 'next/server'

export async function POST(request: Request) {
	try {
		const body = await request.json()
		const { name, phone } = body

		// Ваши данные для подключения к amoCRM
		const AMOCRM_DOMAIN = process.env.AMOCRM_DOMAIN // например: your-domain.amocrm.ru
		const AMOCRM_ACCESS_TOKEN = process.env.AMOCRM_ACCESS_TOKEN

		// Создание сделки в amoCRM
		const response = await fetch(`https://${AMOCRM_DOMAIN}/api/v4/leads`, {
			method: 'POST',
			headers: {
				'Content-Type': 'application/json',
				Authorization: `Bearer ${AMOCRM_ACCESS_TOKEN}`
			},
			body: JSON.stringify([
				{
					name: `Заявка с сайта: ${name}`,
					// Добавьте другие поля по необходимости
					custom_fields_values: [
						{
							field_code: 'PHONE',
							values: [{ value: phone }]
						}
					],
					// Можно добавить контакт
					_embedded: {
						contacts: [
							{
								first_name: name,
								custom_fields_values: [
									{
										field_code: 'PHONE',
										values: [{ value: phone }]
									}
								]
							}
						]
					}
				}
			])
		})

		if (!response.ok) {
			throw new Error('Ошибка при отправке в amoCRM')
		}

		return NextResponse.json({ success: true })
	} catch (error) {
		console.error('Ошибка:', error)
		return NextResponse.json(
			{ error: 'Ошибка при отправке заявки' },
			{ status: 500 }
		)
	}
}
