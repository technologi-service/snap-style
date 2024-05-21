import {
  Menubar,
  MenubarContent,
  MenubarItem,
  MenubarMenu,
  MenubarSeparator,
  MenubarShortcut,
  MenubarTrigger,
} from "@/components/ui/menubar";
import { IoSearchOutline, IoCartOutline } from "react-icons/io5";

import Link from "next/link";
import { MenuSheet } from "./menuSheet";

export const TopMenu = () => {
  return (
    <Menubar className="flex px-5 justify-between items-center w-full">
      <MenubarMenu>
        <div>
          <Link href="/">
            <span className="dark:text-white text-black">Snap</span>
            <span> | shop</span>
          </Link>
        </div>
      </MenubarMenu>
      <div className="hidden sm:flex">
        <MenubarMenu>
          <MenubarTrigger>
            <Link href="/category/women">women</Link>
          </MenubarTrigger>
        </MenubarMenu>

        <MenubarMenu>
          <MenubarTrigger>
            <Link href="/category/men">men</Link>
          </MenubarTrigger>
        </MenubarMenu>

        <MenubarMenu>
          <MenubarTrigger>
            <Link href="/category/kid">children</Link>
          </MenubarTrigger>
        </MenubarMenu>
      </div>
      <div className="flex items-center px-3 space-x-3">
        <MenubarMenu>
          <Link href="/search" className="mx-2">
            <IoSearchOutline size={25} />
          </Link>
        </MenubarMenu>

        <MenubarMenu>
          <Link href="/cart">
            <div className="relative mx-2">
              <span className="absolute text-xs rounded-full px-1 font-bold -top-1 -right-3 bg-sky-700 text-white">
                3
              </span>

              <IoCartOutline size={25} />
            </div>
          </Link>
        </MenubarMenu>
        <div className="justify-end m-2 p-2 rounded-md transition-all hover:bg-gray-100 hover:text-black">
          <MenuSheet />
        </div>
      </div>
    </Menubar>
  );
};
