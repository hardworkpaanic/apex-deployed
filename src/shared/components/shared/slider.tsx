"use client";

import { ReactNode, useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Swiper as SwiperType } from "swiper/types";

// Импортируйте стили Swiper (нужно установить swiper)
import "swiper/css";
import { cn } from "@/shared/lib/utils";

interface SliderProps {
  items: ReactNode[]; // Массив элементов для слайдера
  showPagination?: boolean; // Пропс для управления отображением пагинации
  showArrows?: boolean;
  className?: string; // Пропс для управления отображением стрелок (если понадобятся)
}

export function Slider({
  items,
  showPagination = true,
  className, // По умолчанию показываем
}: SliderProps) {
  const [activeIndex, setActiveIndex] = useState(0);
  const [swiper, setSwiper] = useState<SwiperType | null>(null);

  // Показываем обычный div если элементов меньше 2 или на десктопе
  if (items.length < 2) {
    return <div className="w-full">{items}</div>;
  }

  const goToSlide = (index: number) => {
    if (swiper) {
      swiper.slideTo(index);
    }
  };

  return (
    <div className={cn("w-full md:hidden", className)}>
      <Swiper
        onSwiper={setSwiper}
        onSlideChange={(swiper) => setActiveIndex(swiper.activeIndex)}
        spaceBetween={20}
        speed={800}
        slidesPerView={1.1}
        breakpoints={{
          640: {
            slidesPerView: 2.2,
          },
        }}
      >
        {items.map((item, index) => (
          <SwiperSlide key={index}>{item}</SwiperSlide>
        ))}
      </Swiper>

      {/* Условный рендеринг пагинации */}
      {showPagination && (
        <div className="flex items-center justify-center gap-2 mt-4">
          {items.map((_, index) => (
            <button
              key={index}
              onClick={() => goToSlide(index)}
              className={`w-2.5 h-2.5 rounded-full transition-all duration-300 ${
                index === activeIndex ? "bg-[#D9D9D9]" : "bg-[#3C3C3C]"
              }`}
              aria-label={`Перейти к слайду ${index + 1}`}
            />
          ))}
        </div>
      )}
    </div>
  );
}
