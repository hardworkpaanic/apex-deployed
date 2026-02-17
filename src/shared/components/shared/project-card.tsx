import { cn } from "@/shared/lib/utils";
import { ArrowUpRight } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import { Button } from "../ui";
import { ProjectCardProps } from "@/shared/models/project.types";

export type ButtonVariant =
  | "link"
  | "default"
  | "destructive"
  | "outline"
  | "secondary"
  | "ghost";

export function ProjectCard({
  className,
  buttonVariant,
  projectId = "project1",
  title,
  imageUrl,
  imageAlt = "Изображение проекта",
  characteristics,
  buttonText = "Смотреть кейс",
  onButtonClick,
  imageWidth = 311,
  imageHeight = 183,
  dataAttributes,
}: ProjectCardProps) {
  return (
    <div
      className={`w-full border border-[#707070] px-4 md:px-7 md:py-7 py-5 rounded-[30px] ${className}`}
      {...dataAttributes}
    >
      <Link className="" href={`/projects/${projectId}`}>
        <Image
          src={imageUrl}
          alt={imageAlt}
          width={imageWidth}
          height={imageHeight}
          className="object-cover object-center w-full md:h-[440px] rounded-2xl"
        />
        <div className="flex flex-col md:flex-row">
          <div className="flex w-full flex-col gap-3">
            <h4 className="text-base md:text-[22px] mt-5 font-bold">{title}</h4>

            <span className="text-[14px] font-bold">
              Характеристики монтажа:{" "}
            </span>

            <div className="flex flex-col md:flex-row md:gap-10">
              {characteristics.decorElements && (
                <ul className="list-disc pl-4">
                  <li>{characteristics.decorElements}</li>
                  {characteristics.facadeArea && (
                    <li>Площадь фасада: {characteristics.facadeArea}</li>
                  )}
                  {characteristics.height && (
                    <li>Высота: {characteristics.height}</li>
                  )}
                </ul>
              )}

              {(characteristics.installationTime ||
                characteristics.teamSize ||
                characteristics.complexity) && (
                <ul className="list-disc mt-2 md:mt-0 pl-4">
                  {characteristics.installationTime && (
                    <li>Срок монтажа: {characteristics.installationTime}</li>
                  )}
                  {characteristics.teamSize && (
                    <li>Бригада: {characteristics.teamSize}</li>
                  )}
                  {characteristics.complexity && (
                    <li>Сложность: {characteristics.complexity}</li>
                  )}
                </ul>
              )}
            </div>
          </div>

          <Button
            size={"lg"}
            variant={buttonVariant || "default"}
            className={cn(" mt-5")}
            onClick={onButtonClick}
          >
            {buttonText} <ArrowUpRight />
          </Button>
        </div>
      </Link>
    </div>
  );
}
