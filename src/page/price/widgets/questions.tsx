import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/shared/components/ui/accordion";
import Image from "next/image";

export function Questions() {
  return (
    <section className="container max-w-[1320px] mx-auto mt-15 md:mt-20 px-4">
      <div className="flex flex-col md:flex-row md:justify-between">
        <div className="mt-15">
          <div className="flex items-center gap-2">
            <Image
              src="/mini-logo-gray.svg"
              alt="mini-logo"
              width={28}
              height={8}
              className=""
              unoptimized
            />
          </div>
          <h2 className="font-semibold mt-2 md:text-[48px] max-w-[427px] text-[30px] leading-[110%]">
            Часто задаваемые вопросы о ценах{" "}
          </h2>
        </div>
        <Accordion
          type="single"
          collapsible
          className="mt-5 w-full max-w-[650px]"
          defaultValue="item-1"
        >
          <AccordionItem className="" value="item-1">
            <AccordionTrigger className="text-[16px] md:text-[18px] font-semibold">
              Почему APEX дороже, чем у конкурентов?
            </AccordionTrigger>
            <AccordionContent>
              Мы предлагаем полный цикл услуг 'под ключ': архитектурное
              проектирование, 3D-визуализация, производство премиального
              материала (85% натурального камня), профессиональный монтаж с
              гарантией. Конкуренты часто продают только элементы без монтажа.
              Плюс, на дистанции 25 лет наш материал экономит до 15 млн рублей
              (не требует покраски и ремонта).
            </AccordionContent>
          </AccordionItem>
          <AccordionItem className="" value="item-2">
            <AccordionTrigger className="text-[16px] md:text-[18px] font-semibold">
              Входит ли монтаж в стоимость?
            </AccordionTrigger>
            <AccordionContent>
              Lorem ipsum dolor, sit amet consectetur adipisicing elit. Minus
              aliquam nostrum deserunt ipsum quod voluptatem tenetur. Nisi,
              officiis fugit! Aut suscipit quam libero odit iste voluptatem.
              Quod eum repellat in.
            </AccordionContent>
          </AccordionItem>
          <AccordionItem className="" value="item-3">
            <AccordionTrigger className="text-[16px] md:text-[18px] font-semibold">
              Можно ли получить скидку?
            </AccordionTrigger>
            <AccordionContent>
              Lorem ipsum dolor, sit amet consectetur adipisicing elit. Minus
              aliquam nostrum deserunt ipsum quod voluptatem tenetur. Nisi,
              officiis fugit! Aut suscipit quam libero odit iste voluptatem.
              Quod eum repellat in.
            </AccordionContent>
          </AccordionItem>
          <AccordionItem className="" value="item-4">
            <AccordionTrigger className="text-[16px] md:text-[18px] font-semibold">
              Что входит в проектирование?
            </AccordionTrigger>
            <AccordionContent>
              Lorem ipsum dolor, sit amet consectetur adipisicing elit. Minus
              aliquam nostrum deserunt ipsum quod voluptatem tenetur. Nisi,
              officiis fugit! Aut suscipit quam libero odit iste voluptatem.
              Quod eum repellat in.
            </AccordionContent>
          </AccordionItem>
          <AccordionItem className="" value="item-5">
            <AccordionTrigger className="text-[16px] md:text-[18px] font-semibold">
              Входит ли 3D-визуализация в стоимость?
            </AccordionTrigger>
            <AccordionContent>
              Lorem ipsum dolor, sit amet consectetur adipisicing elit. Minus
              aliquam nostrum deserunt ipsum quod voluptatem tenetur. Nisi,
              officiis fugit! Aut suscipit quam libero odit iste voluptatem.
              Quod eum repellat in.
            </AccordionContent>
          </AccordionItem>
          <AccordionItem className="" value="item-6">
            <AccordionTrigger className="text-[16px] md:text-[18px] font-semibold">
              Могут ли измениться цены в процессе работы?
            </AccordionTrigger>
            <AccordionContent>
              Lorem ipsum dolor, sit amet consectetur adipisicing elit. Minus
              aliquam nostrum deserunt ipsum quod voluptatem tenetur. Nisi,
              officiis fugit! Aut suscipit quam libero odit iste voluptatem.
              Quod eum repellat in.
            </AccordionContent>
          </AccordionItem>
          <AccordionItem className="" value="item-7">
            <AccordionTrigger className="text-[16px] md:text-[18px] font-semibold">
              Как быстро готовится расчёт?
            </AccordionTrigger>
            <AccordionContent>
              Lorem ipsum dolor, sit amet consectetur adipisicing elit. Minus
              aliquam nostrum deserunt ipsum quod voluptatem tenetur. Nisi,
              officiis fugit! Aut suscipit quam libero odit iste voluptatem.
              Quod eum repellat in.
            </AccordionContent>
          </AccordionItem>
          <AccordionItem className="" value="item-8">
            <AccordionTrigger className="text-[16px] md:text-[18px] font-semibold">
              Что если мой бюджет меньше?
            </AccordionTrigger>
            <AccordionContent>
              Lorem ipsum dolor, sit amet consectetur adipisicing elit. Minus
              aliquam nostrum deserunt ipsum quod voluptatem tenetur. Nisi,
              officiis fugit! Aut suscipit quam libero odit iste voluptatem.
              Quod eum repellat in.
            </AccordionContent>
          </AccordionItem>
          <AccordionItem className="" value="item-9">
            <AccordionTrigger className="text-[16px] md:text-[18px] font-semibold">
              Можно ли оплатить не всю сумму сразу?
            </AccordionTrigger>
            <AccordionContent>
              Lorem ipsum dolor, sit amet consectetur adipisicing elit. Minus
              aliquam nostrum deserunt ipsum quod voluptatem tenetur. Nisi,
              officiis fugit! Aut suscipit quam libero odit iste voluptatem.
              Quod eum repellat in.
            </AccordionContent>
          </AccordionItem>
          <AccordionItem className="" value="item-10">
            <AccordionTrigger className="text-[16px] md:text-[18px] font-semibold">
              Как оплачивать — сразу всю сумму?
            </AccordionTrigger>
            <AccordionContent>
              Lorem ipsum dolor, sit amet consectetur adipisicing elit. Minus
              aliquam nostrum deserunt ipsum quod voluptatem tenetur. Nisi,
              officiis fugit! Aut suscipit quam libero odit iste voluptatem.
              Quod eum repellat in.
            </AccordionContent>
          </AccordionItem>
        </Accordion>
      </div>
    </section>
  );
}
