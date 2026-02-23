import { Header } from '@/shared/components'
import { inter } from '@/shared/fonts'
import type { Metadata } from 'next'
import './globals.css'

export const metadata: Metadata = {
	metadataBase: new URL('https://apex.ru'),
	title: {
		default: 'APEX',
		template: '%s | APEX'
	},
	description: 'APEX - современные решения для строительства',
	keywords: [
		'строительство',
		'строительные материалы',
		'строительные технологии',
		'строительные решения',
		'строительные услуги'
	],
	authors: [{ name: 'APEX' }],
	openGraph: {
		type: 'website',
		siteName: 'APEX',
		images: '/og-image.jpg'
	},
	twitter: {
		card: 'summary_large_image'
	},
	robots: {
		index: true,
		follow: true
	},
	alternates: {
		canonical: '/'
	}
}
export default function RootLayout({
	children
}: Readonly<{
	children: React.ReactNode
}>) {
	return (
		<html lang="en">
			<body className={`${inter.variable} antialiased`}>
				<Header />
				{children}
			</body>
		</html>
	)
}
