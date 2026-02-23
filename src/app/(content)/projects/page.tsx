import { getProjects } from '@/actions/lib/strapi'
import { Title } from '@/page/projects/widgets'
import { Footer } from '@/shared/components'
import { BlogProjectCard } from '@/shared/components/shared/blog-project'

export default async function ProjectsPage() {
	const data = await getProjects()
	console.log(data)
	return (
		<>
			<main className="container max-w-[1320px] mx-auto px-4">
				<Title />
				<div className="flex flex-col mt-5 gap-3">
					{data.data.map(project => (
						<BlogProjectCard
							key={project.id}
							data={project}
							projectId={project.documentId}
							buttonVariant={'default'}
							buttonText="Подробнее"
						/>
					))}
				</div>
			</main>
			<Footer />
		</>
	)
}
