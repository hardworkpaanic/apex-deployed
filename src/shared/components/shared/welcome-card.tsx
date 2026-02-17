import { cn } from '@/shared/lib/utils'
import { cva, VariantProps } from 'class-variance-authority'

const welcomeCardVariants = cva(
	'text-[13px] container max-w-[800px] px-4 mx-auto leading-[150%] rounded-2xl p-5 border-l-2',
	{
		variants: {
			variant: {
				default: 'bg-[#EDEDED] border-black text-[#3C3C3C]',
				successes: 'bg-[#F2F8F3] border-[#57AF63] text-[#3C3C3C]',
				destructive: 'bg-[#F9EBEB] border-[#AF5757] text-[#3C3C3C]',
				info: 'bg-[#EDEDED] border-0 text-[#3C3C3C]'
			}
		}
	}
)

export function WelcomeCard({
	variant = 'default',
	children,
	className
}: VariantProps<typeof welcomeCardVariants> & {
	children: React.ReactNode
	className?: string
}) {
	return (
		<div className={cn(welcomeCardVariants({ variant }), className)}>
			{children}
		</div>
	)
}
