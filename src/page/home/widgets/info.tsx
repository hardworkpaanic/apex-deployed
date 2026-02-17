'use client'

import {
	Item,
	ItemContent,
	ItemMedia,
	ItemTitle,
} from '@/shared/components/ui/item'
import { homeInfoItems } from '@/shared/models'
import { AdvantagesSection } from '@/shared/models/types/home'
import { motion } from 'motion/react'

// Анимация для контейнера
const containerVariants = {
	hidden: { opacity: 0 },
	visible: {
		opacity: 1,
	},
	transition: {
		staggerChildren: 0.2,
		delayChildren: 0.1,
	},
}

// Анимация для каждого элемента
const itemVariants = {
	hidden: {
		opacity: 0,
		y: 20,
		scale: 0.95,
	},
	visible: {
		opacity: 1,
		y: 0,
		scale: 1,
	},
	transition: {
		type: 'spring',
		stiffness: 100,
		damping: 12,
	},
	hover: {
		scale: 1.03,
		y: -5,
		boxShadow: '0 10px 25px -5px rgba(0, 0, 0, 0.3)',
	},

	tap: {
		scale: 0.98,
	},
}

// Анимация для иконки
const iconVariants = {
	hidden: {
		opacity: 0,
		rotate: -10,
		scale: 0.8,
	},
	visible: {
		opacity: 1,
		rotate: 0,
		scale: 1,
	},
	transition: {
		type: 'spring',
		stiffness: 150,
		delay: 0.2,
	},
	hover: {
		rotate: [0, 5, -5, 0],
	},
}

export function HomeInfo({ data }: { data: AdvantagesSection }) {
	return (
		<motion.section
			className='flex mt-2.5 md:mt-15 container max-w-[1320px] mx-auto px-4 flex-col md:flex-row md:justify-between gap-1 md:gap-5.5'
			variants={containerVariants}
			initial='hidden'
			animate='visible'
		>
			{homeInfoItems.map((item, index) => (
				<motion.div
					key={item.title}
					variants={itemVariants}
					whileHover='hover'
					whileTap='tap'
					custom={index}
					style={{ originY: 0.5 }}
				>
					<Item
						variant={'muted'}
						className='bg-[#3C3C3C] md:flex-col w-full md:items-start md:gap-9 text-white p-4 rounded-3xl cursor-pointer relative overflow-hidden'
					>
						{/* Фоновая анимация при hover */}
						<motion.div
							className='absolute inset-0 bg-gradient-to-r from-purple-500/10 to-blue-500/10'
							initial={{ opacity: 0 }}
							whileHover={{ opacity: 1 }}
							transition={{ duration: 0.3 }}
						/>

						<ItemMedia>
							<motion.div variants={iconVariants} whileHover='hover'>
								<item.icon />
							</motion.div>
						</ItemMedia>

						<ItemContent>
							<motion.div
								initial={{ opacity: 0, x: -10 }}
								animate={{ opacity: 1, x: 0 }}
								transition={{ delay: 0.3 + index * 0.1 }}
							>
								<ItemTitle className='text-[15px] font-normal'>
									{item.title}
								</ItemTitle>
							</motion.div>
						</ItemContent>

						{/* Индикатор при hover */}
						<motion.div
							className='absolute bottom-0 left-0 right-0 h-1 bg-gradient-to-r from-purple-500 to-blue-500'
							initial={{ scaleX: 0 }}
							whileHover={{ scaleX: 1 }}
							transition={{ duration: 0.3 }}
						/>
					</Item>
				</motion.div>
			))}
		</motion.section>
	)
}
