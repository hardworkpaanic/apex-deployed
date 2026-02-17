import { Button } from '@/shared/components'
import { Slider } from '@/shared/components/shared/slider'
import { ProjectsSection } from '@/shared/models/types/home'

interface ProjectCard {
	id: number
	title: string
	image: string
	badge?: string
}

// Предполагаем, что данные для карточек приходят отдельно
interface ProjectsProps {
	data: ProjectsSection
	projects?: ProjectCard[] // Опциональные данные для карточек
}

const defaultProjects = [
	{
		id: 1,
		title: 'Особняк в неоклассическом стиле',
		image: '/homepage/project1.jpg',
	},
	{
		id: 2,
		title: 'Особняк в неоклассическом стиле',
		image: '/homepage/project2.jpg',
	},
]

export function Projects({ data, projects }: ProjectsProps) {
	const displayProjects = projects || defaultProjects

	return (
		<section className='flex justify-center mt-15 md:mt-30 items-center flex-col gap-5'>
			<div className='w-full container max-w-[1320px] mx-auto px-4'>
				<h2 className='font-semibold mt-2 text-[30px] md:text-[48px] text-center leading-[110%]'>
					{data.h2}
				</h2>
				<span className='text-base leading-[150%] flex text-center mt-2 md:text-[16px] justify-center text-[#3C3C3C]'>
					{data.description}
				</span>
			</div>

			<div className='w-full container max-w-[1320px] md:mt-5 mx-auto px-4'>
				<div className='md:flex w-full hidden flex-col md:flex-row md: flex-items-center md:justify-center gap-[22px]'>
					{displayProjects.map(project => (
						<div key={project.id} className='flex flex-col w-full gap-2'>
							<div
								className='w-full h-[250px] md:h-[413px] rounded-3xl bg-cover bg-center relative'
								style={{ backgroundImage: `url(${project.image})` }}
							></div>
							<p className='text-base leading-[150%] md:text-[22px] font-semibold mt-2'>
								{project.title}
							</p>
							<span className='text-base leading-[150%] md:text-[16px] text-[#3C3C3C]'>
								Подробнее
							</span>
						</div>
					))}
				</div>

				<Slider
					className='mt-10'
					showPagination={false}
					items={displayProjects.map(project => (
						<div key={project.id} className='flex flex-col w-full gap-2'>
							<div
								className='w-full h-[250px] md:h-[413px] rounded-3xl bg-cover bg-center relative'
								style={{ backgroundImage: `url(${project.image})` }}
							></div>
							<p className='text-base leading-[150%] md:text-[22px] font-semibold mt-2'>
								{project.title}
							</p>
							<span className='text-base leading-[150%] md:text-[16px] text-[#3C3C3C]'>
								Подробнее
							</span>
						</div>
					))}
				/>
			</div>

			<div className='w-full container max-w-[1320px]mx-auto mt-3 px-4 flex items-center justify-center'>
				<Button size={'lg'}>{data.buttonText}</Button>
			</div>
		</section>
	)
}
