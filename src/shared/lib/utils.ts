import { clsx, type ClassValue } from 'clsx'
import { twMerge } from 'tailwind-merge'

const STRAPI_URL = 'https://apex-api-strapi.onrender.com'

export function cn(...inputs: ClassValue[]) {
	return twMerge(clsx(inputs))
}

export function getImageUrl(url: string) {
	const finalUrl = `${STRAPI_URL}${url}`
	return finalUrl
}
