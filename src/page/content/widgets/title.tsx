export function Title({ title }: { title: string }) {
	return (
		<section>
			<h1 className="font-bold text-[30px] md:text-[54px] md:text-center mt-5">
				{title}
			</h1>
		</section>
	)
}
