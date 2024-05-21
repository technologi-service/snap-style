import {
  Sheet,
  SheetContent,
  SheetDescription,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "@/components/ui/sheet";
import { Input } from "@/components/ui/input";
import { Separator } from "@/components/ui/separator";

import {
  IoLogInOutline,
  IoLogOutOutline,
  IoPeopleOutline,
  IoPersonSharp,
  IoSearchOutline,
  IoShirtOutline,
  IoTicketOutline,
} from "react-icons/io5";
import Link from "next/link";

export const MenuSheet = () => {
  return (
    <Sheet>
      <SheetTrigger>menu</SheetTrigger>
      <SheetContent>
        <SheetHeader>
          <SheetTitle className="font-bold mt-4">Snap | shop</SheetTitle>
        </SheetHeader>
        <div className="relative space-x-2 mt-4">
          <IoSearchOutline
            className="absolute left-2 top-1/2 transform -translate-y-1/2"
            size={28}
          />
          <Input className="pl-8" placeholder="Search..." />
        </div>

        <nav className="mt-1">
          <Link
            href="/"
            className="flex items-center mt-10 hover:bg-gray-100 hover:text-black rounded transition-all "
          >
            <IoPersonSharp size={30} />
            <SheetDescription className="ml-3 text-xl">Perfil</SheetDescription>
          </Link>
          <Link
            href="/"
            className="flex items-center mt-10 hover:bg-gray-100 hover:text-black rounded transition-all "
          >
            <IoTicketOutline size={30} />
            <SheetDescription className="ml-4 text-xl">
              Ordenes
            </SheetDescription>
          </Link>

          <Link
            href="/"
            className="flex items-center mt-10 hover:bg-gray-100 hover:text-black rounded transition-all "
          >
            <IoLogInOutline size={30} />
            <SheetDescription className="ml-3 text-xl">Entrar</SheetDescription>
          </Link>
          <Link
            href="/"
            className="flex items-center mt-10 hover:bg-gray-100 hover:text-black rounded transition-all "
          >
            <IoLogOutOutline size={30} />
            <SheetDescription className="ml-3 text-xl">Salir</SheetDescription>
          </Link>
        </nav>

        <Separator className="mt-5" />

        <div>
          <Link
            href="/"
            className="flex items-center mt-10 hover:bg-gray-100 hover:text-black rounded transition-all "
          >
            <IoShirtOutline size={30} />
            <SheetDescription className="ml-3 text-xl">
              Productos
            </SheetDescription>
          </Link>

          <Link
            href="/"
            className="flex items-center mt-10 hover:bg-gray-100 hover:text-black rounded transition-all "
          >
            <IoTicketOutline size={30} />
            <SheetDescription className="ml-3 text-xl">
              Ordenes
            </SheetDescription>
          </Link>
          <Link
            href="/"
            className="flex items-center mt-10 hover:bg-gray-100 hover:text-black rounded transition-all "
          >
            <IoPeopleOutline size={30} />
            <SheetDescription className="ml-3 text-xl">
              Usuarios
            </SheetDescription>
          </Link>
        </div>
      </SheetContent>
    </Sheet>
  );
};
