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
            Ответы на частые вопросы
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
              Чем полимербетон отличается от искусственного камня?
            </AccordionTrigger>
            <AccordionContent>
              Полимербетон на 85% состоит из натурального мрамора и доломита.
              Искусственный камень обычно содержит 20-40% натуральной крошки.
              Наш материал ближе к натуральному камню по составу и визуалу, но
              превосходит его по техническим характеристикам.
            </AccordionContent>
          </AccordionItem>
          <AccordionItem className="" value="item-2">
            <AccordionTrigger className="text-[16px] md:text-[18px] font-semibold">
              Безопасен ли материал для здоровья?
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
              Как материал ведёт себя при морозах?
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
              Не выгорит ли материал на солнце?
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
              Можно ли отличить полимербетон от натурального камня визуально?
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
              Требует ли материал обслуживания?
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
              Как материал крепится к фасаду?
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
              Можно ли монтировать зимой?
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
              Какой реальный срок службы материала?
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
              Можно ли сделать индивидуальный цвет или текстуру?
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
