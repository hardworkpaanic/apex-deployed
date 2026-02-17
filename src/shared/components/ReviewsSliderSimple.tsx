'use client'

import { ChevronLeft, ChevronRight, Star } from 'lucide-react'
import { useRef, useState } from 'react'
import { Swiper as SwiperType } from 'swiper'
import 'swiper/css'
import { Swiper, SwiperSlide } from 'swiper/react'

const reviews = [
	{
		id: 1,
		rating: 5,
		name: 'Иван Петрович К.',
		position: 'Владелец дома, Рублёвка',
		text: 'Работали с APEX над фасадом нашего дома в Подмосковье. Очень довольны результатом. Особенно порадовала прозрачность процесса — каждый день получали фото с объекта. Сроки выдержали точно.',
	},
	{
		id: 2,
		rating: 5,
		name: 'Мария Сергеевна Л.',
		position: 'Владелец квартиры, Москва',
		text: 'Отличная работа! Качество материалов и профессиональный подход команды впечатляют. Все сделали вовремя, даже чуть раньше срока. Рекомендую!',
	},
	{
		id: 3,
		rating: 4,
		name: 'Алексей Владимирович П.',
		position: 'Директор компании',
		text: 'Сотрудничали по отделке офиса. Все прошло гладко, команда работала аккуратно, убирали за собой. Есть небольшие замечания, но в целом доволен.',
	},
	{
		id: 4,
		rating: 5,
		name: 'Елена Дмитриевна С.',
		position: 'Владелец ресторана',
		text: 'Делали ремонт в ресторане. Очень ответственный подход, учли все нюансы общественного заведения. Клиенты отмечают красивый дизайн.',
	},
	{
		id: 5,
		rating: 5,
		name: 'Дмитрий Игоревич М.',
		position: 'Владелец коттеджа, Барвиха',
		text: 'Полный цикл работ по отделке дома. От проекта до реализации. Профессионалы своего дела. Цена/качество соответствуют.',
	},
	{
		id: 6,
		rating: 5,
		name: 'Ольга Викторовна Т.',
		position: 'Владелец салона красоты',
		text: 'Быстро и качественно сделали ремонт в салоне. Уложились в сроки и бюджет. Особенно понравился индивидуальный подход к планировке.',
	},
	{
		id: 1,
		rating: 5,
		name: 'Иван Петрович К.',
		position: 'Владелец дома, Рублёвка',
		text: 'Работали с APEX над фасадом нашего дома в Подмосковье. Очень довольны результатом. Особенно порадовала прозрачность процесса — каждый день получали фото с объекта. Сроки выдержали точно.',
	},
	{
		id: 2,
		rating: 5,
		name: 'Мария Сергеевна Л.',
		position: 'Владелец квартиры, Москва',
		text: 'Отличная работа! Качество материалов и профессиональный подход команды впечатляют. Все сделали вовремя, даже чуть раньше срока. Рекомендую!',
	},
	{
		id: 3,
		rating: 4,
		name: 'Алексей Владимирович П.',
		position: 'Директор компании',
		text: 'Сотрудничали по отделке офиса. Все прошло гладко, команда работала аккуратно, убирали за собой. Есть небольшие замечания, но в целом доволен.',
	},
	{
		id: 4,
		rating: 5,
		name: 'Елена Дмитриевна С.',
		position: 'Владелец ресторана',
		text: 'Делали ремонт в ресторане. Очень ответственный подход, учли все нюансы общественного заведения. Клиенты отмечают красивый дизайн.',
	},
	{
		id: 5,
		rating: 5,
		name: 'Дмитрий Игоревич М.',
		position: 'Владелец коттеджа, Барвиха',
		text: 'Полный цикл работ по отделке дома. От проекта до реализации. Профессионалы своего дела. Цена/качество соответствуют.',
	},
	{
		id: 6,
		rating: 5,
		name: 'Ольга Викторовна Т.',
		position: 'Владелец салона красоты',
		text: 'Быстро и качественно сделали ремонт в салоне. Уложились в сроки и бюджет. Особенно понравился индивидуальный подход к планировке.',
	},
	{
		id: 1,
		rating: 5,
		name: 'Иван Петрович К.',
		position: 'Владелец дома, Рублёвка',
		text: 'Работали с APEX над фасадом нашего дома в Подмосковье. Очень довольны результатом. Особенно порадовала прозрачность процесса — каждый день получали фото с объекта. Сроки выдержали точно.',
	},
	{
		id: 2,
		rating: 5,
		name: 'Мария Сергеевна Л.',
		position: 'Владелец квартиры, Москва',
		text: 'Отличная работа! Качество материалов и профессиональный подход команды впечатляют. Все сделали вовремя, даже чуть раньше срока. Рекомендую!',
	},
	{
		id: 3,
		rating: 4,
		name: 'Алексей Владимирович П.',
		position: 'Директор компании',
		text: 'Сотрудничали по отделке офиса. Все прошло гладко, команда работала аккуратно, убирали за собой. Есть небольшие замечания, но в целом доволен.',
	},
	{
		id: 4,
		rating: 5,
		name: 'Елена Дмитриевна С.',
		position: 'Владелец ресторана',
		text: 'Делали ремонт в ресторане. Очень ответственный подход, учли все нюансы общественного заведения. Клиенты отмечают красивый дизайн.',
	},
	{
		id: 5,
		rating: 5,
		name: 'Дмитрий Игоревич М.',
		position: 'Владелец коттеджа, Барвиха',
		text: 'Полный цикл работ по отделке дома. От проекта до реализации. Профессионалы своего дела. Цена/качество соответствуют.',
	},
	{
		id: 6,
		rating: 5,
		name: 'Ольга Викторовна Т.',
		position: 'Владелец салона красоты',
		text: 'Быстро и качественно сделали ремонт в салоне. Уложились в сроки и бюджет. Особенно понравился индивидуальный подход к планировке.',
	},
]

export function ReviewsSliderSimple() {
	const swiperRef = useRef<SwiperType | null>(null)
	const [activeIndex, setActiveIndex] = useState(0)

	// Определяем количество слайдов на странице в зависимости от ширины экрана
	const getSlidesPerGroup = () => {
		if (typeof window !== 'undefined') {
			if (window.innerWidth >= 1024) return 3
			if (window.innerWidth >= 768) return 2
		}
		return 1
	}

	// Количество страниц пагинации
	const totalPages = Math.ceil(reviews.length / getSlidesPerGroup())

	return (
		<div className='w-full'>
			<Swiper
				onSwiper={swiper => {
					swiperRef.current = swiper
				}}
				onSlideChange={swiper => {
					setActiveIndex(swiper.activeIndex)
				}}
				spaceBetween={20}
				speed={800}
				slidesPerView={1.1}
				breakpoints={{
					640: {
						slidesPerView: 1,
						slidesPerGroup: 1,
					},
					768: {
						slidesPerView: 2,
						slidesPerGroup: 2,
					},
					1024: {
						slidesPerView: 3,
						slidesPerGroup: 3,
					},
				}}
				className='w-full'
			>
				{reviews.map(review => (
					<SwiperSlide key={review.id}>
						<div className='bg-[#171717] px-7 h-[233px] py-8 flex flex-col mt-5 gap-5 rounded-2xl'>
							<div className='flex flex-col md:flex-row-reverse md:items-start md:justify-between md:w-full'>
								<span className='flex items-center gap-1 text-[20px] font-bold'>
									{review.rating} <Star size={18} />
								</span>
								<div className='flex flex-col'>
									<span className='text-[20px] font-bold'>{review.name}</span>
									<p className='text-[14px] italic'>{review.position}</p>
								</div>
							</div>

							<p className='text-[14px] leading-[150%] text-[#B9B9B9]'>
								{review.text}
							</p>
						</div>
					</SwiperSlide>
				))}
			</Swiper>

			<div className='flex justify-center gap-4 items-center mt-10'>
				<button
					onClick={() => swiperRef.current?.slidePrev()}
					className='bg-[#3C3C3C] transition-colors duration-300 flex items-center justify-center w-[50px] h-[50px] rounded-full cursor-pointer group disabled:opacity-50 disabled:cursor-not-allowed'
					aria-label='Предыдущий отзыв'
					disabled={activeIndex === 0}
				>
					<ChevronLeft className='group-hover:scale-110 transition-transform duration-300' />
				</button>

				<div className='flex items-center gap-2'>
					{Array.from({ length: totalPages }).map((_, index) => {
						const pageIndex = index * getSlidesPerGroup()
						return (
							<button
								key={index}
								onClick={() => swiperRef.current?.slideTo(pageIndex)}
								className={`w-2.5 h-2.5 rounded-full transition-all duration-300 ${
									Math.floor(activeIndex / getSlidesPerGroup()) === index
										? 'bg-white scale-125'
										: 'bg-[#3C3C3C]'
								}`}
								aria-label={`Перейти к странице ${index + 1}`}
							/>
						)
					})}
				</div>

				<button
					onClick={() => swiperRef.current?.slideNext()}
					className='bg-[#3C3C3C] transition-colors duration-300 flex items-center justify-center w-[50px] h-[50px] rounded-full cursor-pointer group disabled:opacity-50 disabled:cursor-not-allowed'
					aria-label='Следующий отзыв'
					disabled={activeIndex >= reviews.length - getSlidesPerGroup()}
				>
					<ChevronRight className='group-hover:scale-110 transition-transform duration-300' />
				</button>
			</div>
		</div>
	)
}
