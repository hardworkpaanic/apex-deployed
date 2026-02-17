'use server'

import { ApiResponse } from '@/shared/models/types/about-us'
import { ApiResponse as HomeApi } from '@/shared/models/types/home'
import { ApiResponse as HowWeWorkApi } from '@/shared/models/types/how-we-work'
import { ApiResponse as installationApi } from '@/shared/models/types/installation'
import { ApiResponse as MaterialApi } from '@/shared/models/types/material'
import { ApiResponse as PriceApi } from '@/shared/models/types/price'

const STRAPI_URL = 'https://apex-api-strapi.onrender.com/api'

export async function getAboutUs() {
	const aboutUs = await fetch(`${STRAPI_URL}/aboutus?populate=all`, {
		cache: 'no-store',
	})
	return (await aboutUs.json()) as ApiResponse
}

export async function getHomePage() {
	const home = await fetch(`${STRAPI_URL}/glavaya?populate=all`, {
		cache: 'no-store',
	})

	return (await home.json()) as HomeApi
}

export async function getMaterialPage() {
	const material = await fetch(`${STRAPI_URL}/material?populate=all`, {
		cache: 'no-store',
	})
	return (await material.json()) as MaterialApi
}

export async function getPricePage() {
	const price = await fetch(`${STRAPI_URL}/price?populate=all`, {
		cache: 'no-store',
	})
	return (await price.json()) as PriceApi
}

export async function getInstallationPage() {
	const installation = await fetch(`${STRAPI_URL}/montazh?populate=all`, {
		cache: 'no-store',
	})
	return (await installation.json()) as installationApi
}

export async function getHowWeWorkPage() {
	const HowWeWork = await fetch(`${STRAPI_URL}/kak-my-rabotaem?populate=all`, {
		cache: 'no-store',
	})
	return (await HowWeWork.json()) as HowWeWorkApi
}
