import { headerMenuItems } from "@/shared/models";
import Image from "next/image";
import Link from "next/link";
import { NavigationMenu, NavigationMenuItem, NavigationMenuList } from "../ui";
import { DialogForm } from "./dialog-form";
import { MobileMenu } from "./mobile-menu";

export function Header() {
  return (
    <header className="flex items-center justify-between container max-w-[1330px] mx-auto px-4 py-6.25">
      <div className="flex items-center gap-12.5">
        <Image
          src={"/logo.svg"}
          width={94.46}
          height={28}
          alt="Logo"
          unoptimized
        />

        <NavigationMenu className="hidden md:flex">
          <NavigationMenuList className="flex flex-row gap-7.5">
            {headerMenuItems.map((item) => (
              <NavigationMenuItem
                className="mt-1.25 text-[15px]"
                key={item.title}
              >
                <Link href={item.href}>{item.title}</Link>
              </NavigationMenuItem>
            ))}
          </NavigationMenuList>
        </NavigationMenu>
      </div>
      <div className="flex flex-row gap-2 items-center">
        <span className="text-[15px] hidden md:block font-bold">
          +7 (495) 000-00-00
        </span>
        <DialogForm />
        <MobileMenu />
      </div>
    </header>
  );
}
