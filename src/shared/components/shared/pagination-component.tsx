'use client'

import { usePathname, useRouter, useSearchParams } from 'next/navigation'
import { useEffect, useState } from 'react'
import {
	Pagination,
	PaginationContent,
	PaginationItem,
	PaginationLink,
	PaginationNext,
	PaginationPrevious
} from '../ui/pagination'

interface PaginationComponentProps {
	meta?: {
		pagination: {
			page: number
			pageSize: number
			pageCount: number
			total: number
		}
	}
}

export function PaginationComponent({ meta }: PaginationComponentProps) {
	const router = useRouter()
	const pathname = usePathname()
	const searchParams = useSearchParams()

	const [currentPage, setCurrentPage] = useState(1)

	// Если есть meta из серверных данных, используем её
	const totalPages = meta?.pagination?.pageCount || 6
	const serverPage = meta?.pagination?.page || 1

	// Синхронизируем с URL параметрами и серверными данными
	useEffect(() => {
		const page = searchParams.get('page')
		if (page) {
			setCurrentPage(parseInt(page))
		} else {
			setCurrentPage(serverPage)
		}
	}, [searchParams, serverPage])

	const handlePageChange = (page: number) => {
		if (page >= 1 && page <= totalPages) {
			setCurrentPage(page)

			// Обновляем URL параметр
			const params = new URLSearchParams(searchParams.toString())
			if (page === 1) {
				params.delete('page')
			} else {
				params.set('page', page.toString())
			}

			const newUrl = params.toString()
				? `${pathname}?${params.toString()}`
				: pathname

			router.push(newUrl)
		}
	}

	const handlePrevious = () => {
		if (currentPage > 1) {
			handlePageChange(currentPage - 1)
		}
	}

	const handleNext = () => {
		if (currentPage < totalPages) {
			handlePageChange(currentPage + 1)
		}
	}

	// Не показываем пагинацию, если всего 1 страница
	if (totalPages <= 1) {
		return null
	}

	return (
		<div className="mt-30 flex w-full items-center justify-center">
			<Pagination>
				<PaginationContent>
					<PaginationItem className="rounded-full">
						<PaginationPrevious
							href="#"
							onClick={e => {
								e.preventDefault()
								handlePrevious()
							}}
							className={
								currentPage === 1 ? 'pointer-events-none opacity-50' : ''
							}
						/>
					</PaginationItem>

					{[...Array(totalPages)].map((_, index) => {
						const pageNumber = index + 1
						return (
							<PaginationItem key={pageNumber}>
								<PaginationLink
									className="rounded-full"
									href="#"
									onClick={e => {
										e.preventDefault()
										handlePageChange(pageNumber)
									}}
									isActive={currentPage === pageNumber}
								>
									{pageNumber}
								</PaginationLink>
							</PaginationItem>
						)
					})}

					<PaginationItem className="rounded-full">
						<PaginationNext
							href="#"
							onClick={e => {
								e.preventDefault()
								handleNext()
							}}
							className={
								currentPage === totalPages
									? 'pointer-events-none opacity-50'
									: ''
							}
						/>
					</PaginationItem>
				</PaginationContent>
			</Pagination>
		</div>
	)
}
