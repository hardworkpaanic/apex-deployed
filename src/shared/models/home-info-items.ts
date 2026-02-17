import { Crown, FileBadge, Gem, Home, LucideIcon } from 'lucide-react'

interface HomeInfoItem {
	icon: LucideIcon
	title: string
}

export const homeInfoItems: HomeInfoItem[] = [
	{
		icon: Home,
		title: '200+ реализованных проектов'
	},
	{
		icon: Crown,
		title: 'Гарантия на материал - 10 лет'
	},
	{
		icon: FileBadge,
		title: 'Договор с фиксированной ценой'
	},
	{
		icon: Gem,
		title: 'Экспертная команда специалистов'
	}
]
