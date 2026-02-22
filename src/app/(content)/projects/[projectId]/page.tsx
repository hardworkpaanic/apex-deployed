import { getArticle } from '@/actions/lib/strapi'
import { Content, Details, Title } from '@/page/content/widgets'
import { Footer, WelcomeCard } from '@/shared/components'
import {
	Avatar,
	AvatarFallback,
	AvatarImage
} from '@/shared/components/ui/avatar'

export default async function ProjectPage({
	params
}: {
	params: Promise<{ projectId: string }>
}) {
	const { projectId } = await params
	const data = await getArticle(projectId)
	return (
		<main>
			<Title title={data.data.title} />
			<Details
				author={data.data.author}
				date={data.data.date}
			/>

			{/* TODO: Сделать слайдер */}
			<Content content={data.data.content} />

			<WelcomeCard
				className="mt-5"
				variant={'destructive'}
			>
				Добро пожаловать на наш блог, где мы делимся последними тенденциями в
				строительстве и дизайне. Узнайте о премиум-материалах, инновационных
				технологиях и лучших практиках, которые помогут вам создать идеальное
				пространство. Присоединяйтесь к нам, чтобы быть в курсе всех новинок и
				получать советы от экспертов!
			</WelcomeCard>

			<WelcomeCard
				className="mt-5"
				variant={'successes'}
			>
				Добро пожаловать на наш блог, где мы делимся последними тенденциями в
				строительстве и дизайне. Узнайте о премиум-материалах, инновационных
				технологиях и лучших практиках, которые помогут вам создать идеальное
				пространство. Присоединяйтесь к нам, чтобы быть в курсе всех новинок и
				получать советы от экспертов!
			</WelcomeCard>

			<WelcomeCard className="mt-5">
				Добро пожаловать на наш блог, где мы делимся последними тенденциями в
				строительстве и дизайне. Узнайте о премиум-материалах, инновационных
				технологиях и лучших практиках, которые помогут вам создать идеальное
				пространство. Присоединяйтесь к нам, чтобы быть в курсе всех новинок и
				получать советы от экспертов!
			</WelcomeCard>

			<WelcomeCard
				className="mt-5"
				variant={'info'}
			>
				Добро пожаловать на наш блог, где мы делимся последними тенденциями в
				строительстве и дизайне. Узнайте о премиум-материалах, инновационных
				технологиях и лучших практиках, которые помогут вам создать идеальное
				пространство. Присоединяйтесь к нам, чтобы быть в курсе всех новинок и
				получать советы от экспертов!
				<div className="flex mt-3 items-center gap-2">
					<Avatar className="w-10 h-10">
						<AvatarImage src="/avatar-big.png" />
						<AvatarFallback>ИИ</AvatarFallback>
					</Avatar>
					<div className="flex flex-col">
						<p className="text-base font-semibold">Иван Иванов</p>
						<p className="text-xs">Автор</p>
					</div>
				</div>
			</WelcomeCard>

			<Footer />
		</main>
	)
}
