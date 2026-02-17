"use client";

import { ChevronRight } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import { useEffect, useState } from "react";
import { Separator } from "../ui/separator";
import { headerMenuItems } from "@/shared/models";

export function MobileMenu() {
  const [isOpen, setIsOpen] = useState(false);

  // Эффект для управления скроллом body
  useEffect(() => {
    if (isOpen) {
      // Запрещаем скролл
      document.body.style.overflow = "hidden";
    } else {
      // Возвращаем скролл
      document.body.style.overflow = "unset";
    }

    // Очистка при размонтировании компонента
    return () => {
      document.body.style.overflow = "unset";
    };
  }, [isOpen]);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <div className="">
      {/* Кнопка для открытия/закрытия меню */}
      <button
        className="flex items-center md:hidden justify-center"
        onClick={toggleMenu}
      >
        <Image
          src={"/mobile-menusvg.svg"}
          width={40}
          height={40}
          alt="mobile-menu"
        />
      </button>

      {/* Меню с анимацией */}
      <div
        className={`
          fixed top-[80px] left-0 w-screen h-screen bg-white z-10 px-4 py-5
          transition-all duration-300 ease-in-out
          ${
            isOpen
              ? "opacity-100 translate-y-0"
              : "opacity-0 -translate-y-2 pointer-events-none"
          }
        `}
      >
        <ul className="flex flex-col">
          {headerMenuItems.map((item, index) => (
            <li key={index} className="">
              <Link
                href={item.href}
                className="flex items-center py-4 justify-between text-[18px] text-[#4A4D52]"
              >
                {item.title}
                <ChevronRight size={18} color="#4A4D52" />
              </Link>
              {/* Показываем сепаратор только если это не последний элемент */}
              {index < headerMenuItems.length - 1 && (
                <Separator className="bg-[#E5E5E5]" />
              )}
            </li>
          ))}
        </ul>
        <p className="font-bold text-[20px] mt-7">+7 (495) 000-00-00</p>
      </div>
    </div>
  );
}
