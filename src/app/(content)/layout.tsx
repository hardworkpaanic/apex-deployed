import { Breadcrumbs } from '@/shared/components'

export default function BlogLayout({
	children
}: {
	children: React.ReactNode
}) {
	return (
		<div className="">
			<Breadcrumbs />
			{children}
		</div>
	)
}
