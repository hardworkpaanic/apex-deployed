'use client'

import { usePathname } from 'next/navigation'
import { Fragment } from 'react'
import {
	Breadcrumb,
	BreadcrumbItem,
	BreadcrumbLink,
	BreadcrumbList,
	BreadcrumbPage,
	BreadcrumbSeparator
} from '../ui/breadcrumb'

// Map of path segments to their display names
const PATH_LABELS: Record<string, string> = {
	blog: 'Блог',
	projects: 'Проекты'
	// Add more path mappings as needed
}

export function Breadcrumbs() {
	const path = usePathname()
	const pathArray = path.split('/')

	// Function to get the display name for a path segment
	const getDisplayName = (segment: string, index: number, array: string[]) => {
		// If this is the last segment and it's a number (like an ID), show "Статья"
		if (index === array.length - 1 && /^\d+$/.test(segment)) {
			return 'Статья'
		}
		// Return custom label if exists, otherwise return the segment
		return PATH_LABELS[segment.toLowerCase()] || segment
	}

	return (
		<Breadcrumb className="md:w-full md:justify-center md:flex container max-w-[1320px] mx-auto px-4">
			<BreadcrumbList>
				<BreadcrumbItem>
					<BreadcrumbLink href="/">Главная</BreadcrumbLink>
				</BreadcrumbItem>
				{pathArray.filter(Boolean).map((item, index, array) => {
					const isLast = index === array.length - 1
					const href = `/${array.slice(0, index + 1).join('/')}`
					const displayName = getDisplayName(item, index, array)

					return (
						<Fragment key={index}>
							<BreadcrumbSeparator>/</BreadcrumbSeparator>
							<BreadcrumbItem>
								{isLast ? (
									<BreadcrumbPage>{displayName}</BreadcrumbPage>
								) : (
									<BreadcrumbLink href={href}>{displayName}</BreadcrumbLink>
								)}
							</BreadcrumbItem>
						</Fragment>
					)
				})}
			</BreadcrumbList>
		</Breadcrumb>
	)
}
