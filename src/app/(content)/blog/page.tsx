import { getArticles } from '@/actions/lib/strapi'
import { Title } from '@/page/blog/widgets'
import { ArticleCard, Footer, PaginationComponent } from '@/shared/components'

export default async function BlogPage() {
	const data = await getArticles()

	// Проверяем, что данные получены
	if (!data?.data || data.data.length === 0) {
		return (
			<>
				<main className="container max-w-[1320px] mx-auto px-4">
					<Title />
					<p className="text-center mt-10">Статьи не найдены</p>
				</main>
				<Footer />
			</>
		)
	}

	const articles = data.data
	const meta = data.meta

	// Разбиваем статьи для разных секций
	const mainArticle = articles[0] // Первая статья для большого блока
	const secondaryArticles = articles.slice(1, 4) // Следующие 3 для правой колонки
	const bottomArticles = articles.slice(4, 7) // Еще 3 для нижнего ряда
	const mobileArticles = articles.slice(0, 12) // Для мобильной версии (первые 12)

	return (
		<>
			<main className="container max-w-[1320px] mx-auto px-4">
				<Title />

				{/* Десктопная версия - первый ряд с колонками */}
				{mainArticle && secondaryArticles.length > 0 && (
					<section className="mt-10 hidden md:flex gap-5 flex-row">
						<div className="w-full">
							<ArticleCard
								article={mainArticle}
								className="h-[550px]!"
							/>
						</div>

						<div className="w-full flex flex-col gap-2">
							{secondaryArticles.map(article => (
								<ArticleCard
									key={article.id}
									article={article}
									row
								/>
							))}
						</div>
					</section>
				)}

				{/* Десктопная версия - второй ряд */}
				{bottomArticles.length > 0 && (
					<section className="mt-15 hidden md:flex justify-center flex-row gap-5">
						<ArticleCard
							key={articles[0].id}
							article={secondaryArticles[0]}
						/>
						<ArticleCard
							key={articles[0].id}
							article={secondaryArticles[0]}
						/>
						<ArticleCard
							key={articles[0].id}
							article={secondaryArticles[0]}
						/>
					</section>
				)}

				{/* Мобильная версия */}
				<section className="mt-15 flex md:hidden flex-col gap-5">
					{mobileArticles.map(article => (
						<ArticleCard
							key={article.id}
							article={article}
						/>
					))}
				</section>

				<PaginationComponent meta={meta} />
			</main>
			<Footer />
		</>
	)
}
