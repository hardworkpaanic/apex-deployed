import { cn } from "@/shared/lib/utils";
import { ArrowUpRight } from "lucide-react";
import Image from "next/image";
import Link from "next/link";

export function ArticleCard({
  row,
  className,
}: {
  row?: boolean;
  className?: string;
}) {
  return (
    <Link
      href="/blog/13141424"
      className={cn(
        "w-full flex",
        row ? "flex-row gap-5 md:w-full" : "flex-col w-full md:max-w-full"
      )}
    >
      <Image
        src="/blog.jpg"
        alt="blog"
        width={row ? 203 : 343}
        height={row ? 178 : 299}
        className={cn(
          row
            ? "bg-contain bg-center rounded-2xl w-[203px] h-[178px]"
            : "bg-contain bg-center rounded-2xl w-full",
          className
        )}
      />

      <div className={cn(row ? "w-full" : undefined)}>
        <div className="flex mt-3 justify-between">
          <h4 className="w-full max-w-[80%] font-semibold text-[20px]">
            Элегантные решения для вашего дома: премиум-строительство от
            экспертов
          </h4>

          <ArrowUpRight />
        </div>

        {/* TODO: Сделать скрытие текста если он не помещается в 3 строки */}

        <p className="w-full max-w-[80%] text-[14px] mt-2 line-clamp-3">
          Добро пожаловать на наш блог, где мы делимся последними тенденциями в
          строительстве и дизайне. Узнайте о премиум-материалах, инновационных
          технологиях и лучших практиках, которые помогут вам создать идеальное
          пространство. Присоединяйтесь к нам, чтобы быть в курсе всех новинок и
          получать советы от экспертов!
        </p>
      </div>
    </Link>
  );
}
