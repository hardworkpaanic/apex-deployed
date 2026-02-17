import { Button } from "@/shared/components";
import { Slider } from "@/shared/components/shared/slider";
import { Flame } from "lucide-react";
import Image from "next/image";

export function Production() {
  return (
    <section className="bg-[url('/materials/production.jpg')] text-white rounded-t-3xl pb-20 bg-cover w-full bg-center pt-15 relative top-[-30px] md:pt-20 py-5 md:py-30 bg-no-repeat ">
      <div className="container max-w-[1320px] mx-auto px-4">
        <Image
          src="/mini-logo.svg"
          alt="mini-logo"
          width={28}
          height={8}
          className=""
          unoptimized
        />

        <div className="flex flex-col gap-2 md:flex-row md:items-end md:justify-between">
          <div className="md:max-w-[650px]">
            <h1 className="font-semibold text-[30px] md:text-[48px] leading-[110%]">
              Как мы производим полимербетон?
            </h1>

            <p className="italic mt-2 text-white/70 text-[14px] md:text-[16px] leading-[150%]">
              Процесс производства (7 этапов):
            </p>
          </div>

          <Button
            variant={"secondary"}
            className="hidden font-normal md:block"
            size={"lg"}
          >
            Записаться на экскурсию
          </Button>
        </div>

        <blockquote className="mt-6 border-l-2 md:max-w-[420px] md:hidden text-[14px] md:text-[16px] leading-[150%]  pl-6 italic">
          Инженерная точность + ручная доводка = идеальный результат
        </blockquote>

        <div className="mt-10 md:flex flex-col gap-5 hidden md:flex-row md:justify-between md:gap-5 md:flex-wrap md:mt-20">
          <div className="bg-white px-4 py-5 md:max-w-[400px] w-full text-black rounded-3xl flex flex-col md:justify-between md:h-[164px]">
            <span className="text-[14px] text-[#3C3C3C] italic">(01)</span>

            <div className="">
              <span className="text-base font-semibold">
                Проектирование форм
              </span>
              <p className="leading-[150%] text-[#3C3C3C]">
                ЧПУ-фрезеровка из МДФ (точность 0,1 мм)
              </p>
            </div>
          </div>{" "}
          <div className="bg-white px-4 py-5 md:max-w-[400px] w-full text-black rounded-3xl flex flex-col md:justify-between md:h-[164px]">
            <span className="text-[14px] text-[#3C3C3C] italic">(02)</span>

            <div className="">
              <span className="text-base font-semibold">
                Подготовка состава
              </span>
              <p className="leading-[150%] text-[#3C3C3C]">
                Молотый мрамор + смола + итальянские пигменты
              </p>
            </div>
          </div>
          <div className="bg-white px-4 py-5 md:max-w-[400px] w-full text-black rounded-3xl flex flex-col md:justify-between md:h-[164px]">
            <span className="text-[14px] text-[#3C3C3C] italic">(03)</span>

            <div className="">
              <span className="text-base font-semibold">
                Формовка первого слоя (лицевой)
              </span>
              <p className="leading-[150%] text-[#3C3C3C]">
                Прокрашенный в массе, стойкость цвета 50+ лет
              </p>
            </div>
          </div>
          <div className="bg-white px-4 py-5 md:max-w-[400px] w-full text-black rounded-3xl flex flex-col md:justify-between md:h-[164px]">
            <span className="text-[14px] text-[#3C3C3C] italic">(04)</span>

            <div className="">
              <span className="text-base font-semibold">
                Фактурный слой (каменный)
              </span>
              <p className="leading-[150%] text-[#3C3C3C]">
                Создаёт текстуру натурального камня
              </p>
            </div>
          </div>
          <div className="bg-white px-4 py-5 md:max-w-[400px] w-full text-black rounded-3xl flex flex-col md:justify-between md:h-[164px]">
            <span className="text-[14px] text-[#3C3C3C] italic">(05)</span>

            <div className="">
              <span className="text-base font-semibold">
                Армирование стекловолокном
              </span>
              <p className="leading-[150%] text-[#3C3C3C]">
                Прочность на изгиб 25 МПа
              </p>
            </div>
          </div>
          <div className="bg-transparent md:max-w-[400px] w-full"></div>
          <div className="bg-linear-to-r md:max-w-[400px] w-full hidden md:block from-[#444444]/99 to-[#000000] p-5 flex flex-col md:justify-between md:h-[164px] text-white rounded-2xl md:mt-0 mt-5">
            <Flame />
            <p className="text-[14px] ">
              Инженерная точность + ручная доводка = идеальный результат
            </p>
          </div>
          <div className="bg-white px-4 py-5 md:max-w-[400px] w-full text-black rounded-3xl flex flex-col md:justify-between md:h-[164px]">
            <span className="text-[14px] text-[#3C3C3C] italic">(06)</span>

            <div className="">
              <span className="text-base font-semibold">Контроль ОТК</span>
              <p className="leading-[150%] text-[#3C3C3C]">
                Проверка геометрии и цвета
              </p>
            </div>
          </div>
          <div className="bg-white px-4 py-5 md:max-w-[400px] w-full text-black rounded-3xl flex flex-col md:justify-between md:h-[164px]">
            <span className="text-[14px] text-[#3C3C3C] italic">(07)</span>

            <div className="">
              <span className="text-base font-semibold">Ручная доводка</span>
              <p className="leading-[150%] text-[#3C3C3C]">
                Шлифовка до идеального состояния
              </p>
            </div>
          </div>
        </div>

        <Slider
          className="mt-10"
          showPagination={false}
          items={[
            <div className="bg-white px-4 py-5 md:max-w-[400px] w-full text-black rounded-3xl flex flex-col md:justify-between md:h-[164px]">
              <span className="text-[14px] text-[#3C3C3C] italic">(01)</span>

              <div className="">
                <span className="text-base font-semibold">
                  Проектирование форм
                </span>
                <p className="leading-[150%] text-[#3C3C3C]">
                  ЧПУ-фрезеровка из МДФ (точность 0,1 мм)
                </p>
              </div>
            </div>,
            <div className="bg-white px-4 py-5 md:max-w-[400px] w-full text-black rounded-3xl flex flex-col md:justify-between md:h-[164px]">
              <span className="text-[14px] text-[#3C3C3C] italic">(02)</span>

              <div className="">
                <span className="text-base font-semibold">
                  Подготовка состава
                </span>
                <p className="leading-[150%] text-[#3C3C3C]">
                  Молотый мрамор + смола + итальянские пигменты
                </p>
              </div>
            </div>,
            <div className="bg-white px-4 py-5 md:max-w-[400px] w-full text-black rounded-3xl flex flex-col md:justify-between md:h-[164px]">
              <span className="text-[14px] text-[#3C3C3C] italic">(03)</span>

              <div className="">
                <span className="text-base font-semibold">
                  Формовка первого слоя (лицевой)
                </span>
                <p className="leading-[150%] text-[#3C3C3C]">
                  Прокрашенный в массе, стойкость цвета 50+ лет
                </p>
              </div>
            </div>,
            <div className="bg-white px-4 py-5 md:max-w-[400px] w-full text-black rounded-3xl flex flex-col md:justify-between md:h-[164px]">
              <span className="text-[14px] text-[#3C3C3C] italic">(04)</span>

              <div className="">
                <span className="text-base font-semibold">
                  Фактурный слой (каменный)
                </span>
                <p className="leading-[150%] text-[#3C3C3C]">
                  Создаёт текстуру натурального камня
                </p>
              </div>
            </div>,
          ]}
        />

        <div className="bg-linear-to-r md:hidden from-[#444444]/99 to-[#000000] p-5 flex flex-col gap-6.5 text-white rounded-2xl mt-5">
          <Flame />
          <p className="text-[14px] ">
            Инженерная точность + ручная доводка = идеальный результат
          </p>
        </div>
      </div>
    </section>
  );
}
