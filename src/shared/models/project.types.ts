// types/project.types.ts или в том же файле

import { ButtonVariant } from '../components/shared/project-card'

export type ProjectCharacteristics = {
	decorElements?: string | number // "47 элементов декора (колонны, карнизы, пилястры)"
	facadeArea?: string | number // "280 м²"
	height?: string // "до 12 метров (3 этажа)"
	installationTime?: string // "12 рабочих дней"
	teamSize?: string // "4 человека + альпинист"
	complexity?: string // "высокая (точная стыковка колонн)"
}

export interface ProjectCardProps {
	/** Дополнительные CSS классы */
	className?: string

	/** Вариант кнопки (из твоей системы кнопок) */
	buttonVariant?: ButtonVariant

	/** ID или slug проекта для ссылки */
	projectId?: string | number

	/** Заголовок проекта */
	title: string

	/** URL изображения */
	imageUrl: string

	/** Alt текст для изображения */
	imageAlt?: string

	/** Характеристики проекта */
	characteristics: ProjectCharacteristics

	/** Текст на кнопке */
	buttonText?: string

	/** Обработчик клика по кнопке (опционально, если нужно переопределить поведение ссылки) */
	onButtonClick?: () => void

	/** Размеры изображения (для оптимизации) */
	imageWidth?: number
	imageHeight?: number

	/** Дополнительные data-атрибуты для аналитики */
	dataAttributes?: Record<string, string>
}
