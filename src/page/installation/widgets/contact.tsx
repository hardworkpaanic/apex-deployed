import { Button, ProjectCard } from "@/shared/components";
import { Slider } from "@/shared/components/shared/slider";
import { Input } from "@/shared/components/ui/input";
import { ArrowUpRight } from "lucide-react";

export const projectData = [
  {
    title: "Особняк в неоклассике, Рублёвка",
    imageUrl: "/blog.jpg",
    projectId: "project1",
    buttonText: "Смотреть дополнительный кейс",

    characteristics: {
      decorElements: "47 элементов декора (колонны, карнизы, пилястры)",
      facadeArea: "280 м²",
      height: "до 12 метров (3 этажа)",
      installationTime: "12 рабочих дней",
      teamSize: "4 человека + альпинист",
      complexity: "высокая (точная стыковка колонн)",
    },
  },

  {
    title: "Реставрация исторического здания, СПб",
    imageUrl: "/installation/home2.png",
    projectId: "project1",
    buttonText: "Смотреть дополнительный кейс",

    characteristics: {
      decorElements: "89 элементов (воссоздание утраченных деталей)",
      facadeArea: "Площадь фасада: 520 м²",
      height: "Срок монтажа: 28 рабочих дней",
      installationTime: "12 рабочих дней",
      teamSize: "Бригада: 2 бригады по 4 человека",
      complexity: "Сложность: очень высокая (работа с историческим объектом)",
    },
  },
  {
    title: "Современная вилла в стиле ар-деко, Подмосковье",
    imageUrl: "/installation/home2.png",
    projectId: "project1",
    buttonText: "Смотреть дополнительный кейс",
    characteristics: {
      decorElements: "89 элементов (воссоздание утраченных деталей)",
      facadeArea: "Площадь фасада: 520 м²",
      height: "Срок монтажа: 28 рабочих дней",
      installationTime: "12 рабочих дней",
      teamSize: "Бригада: 2 бригады по 4 человека",
      complexity: "Сложность: очень высокая (работа с историческим объектом)",
    },
  },
];

export function Contact() {
  return (
    <section className="bg-black mt-5 md:mt-15 text-white rounded-t-3xl py-15 md:py-30">
      <div className="container max-w-[1320px] mx-auto px-4">
        <h2 className="text-[30px] md:text-[48px] font-semibold leading-[110%]">
          Примеры наших работ
        </h2>

        <p className="text-[14px] md:text-[16px] leading-[150%] mt-4">
          От классики до современной архитектуры
        </p>

        {/* TODO: Сделать карусель */}

        <div className="hidden md:block">
          {" "}
          {projectData.map((item, index) => (
            <ProjectCard
              key={index}
              {...item}
              className="mt-7.5"
              buttonVariant="secondary"
            />
          ))}
        </div>

        <Slider
          items={projectData.map((item, index) => (
            <ProjectCard
              key={index}
              {...item}
              className="mt-7.5"
              buttonVariant="secondary"
            />
          ))}
        />

        <div className="w-full md:flex justify-center">
          <Button
            variant={"secondary"}
            size={"lg"}
            className="w-full md:w-auto font-bold mx-auto mt-10"
          >
            Смотреть 200+ проектов <ArrowUpRight />
          </Button>
        </div>
        <form className="flex sm:gap-2 flex-col md:flex-row w-full mt-10 rounded-3xl">
          <div className="">
            <h3 className="text-[22px] md:text-[46px] font-semibold leading-[110%]">
              Получите расчёт вашего проекта за 24 часа
            </h3>

            <p className="text-[14px] md:text-base leading-[150%] mt-2">
              Мы перезвоним в течение 2 часов (пн-пт 9:00-20:00)
            </p>
          </div>

          <div className="flex flex-col mt-2 max-w-[650px] gap-2">
            <Input
              className="border-b outline-none border-white rounded-0"
              placeholder="Ваше Имя"
            />
            <Input
              className="border-b border-white rounded-0"
              placeholder="Телефон"
            />

            <Button
              className="mt-2 w-full md:max-w-[180px]"
              variant={"secondary"}
              size={"lg"}
            >
              Оставить заявку
            </Button>

            <p className="text-[12px] text-[#3C3C3C] leading-[130%] italic mt-2">
              Нажимая кнопку «Отправить», я даю согласие на обработку моих
              персональных данных на условиях и для целей, определенных
              в политике о конфиденциальности
            </p>
          </div>
        </form>
      </div>
    </section>
  );
}
