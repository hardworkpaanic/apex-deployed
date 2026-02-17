import { clsx, type ClassValue } from 'clsx'
import { twMerge } from 'tailwind-merge'

const STRAPI_URL = 'http://127.0.0.1:1337'

export function cn(...inputs: ClassValue[]) {
	return twMerge(clsx(inputs))
}

export function getImageUrl(url: string) {
	const finalUrl = `${STRAPI_URL}${url}`
	return finalUrl
}
