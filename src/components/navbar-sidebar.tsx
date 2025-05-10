import type { PropsWithChildren } from "react";
import {
  Sheet,
  SheetContent,
  SheetHeader,
  SheetTitle,
} from "@/components/ui/sheet";
import { ScrollArea } from "@/components/ui/scroll-area";
import Link from "next/link";
import { Button } from "@/components/ui/button";

interface NavbarItem extends PropsWithChildren {
  href: string;
}

type NavbarSidebarProps = {
  items: NavbarItem[];
  open: boolean;
  onOpenChange: (open: boolean) => void;
};

export const NavbarSidebar = ({
  items,
  open,
  onOpenChange,
}: NavbarSidebarProps) => {
  return (
    <Sheet open={open} onOpenChange={onOpenChange}>
      <SheetContent side="left" className="h-full transform-none p-0">
        <SheetHeader className="border-b px-4">
          <div className="flex items-center">
            <SheetTitle className="text-2xl font-bold">Menu</SheetTitle>
          </div>
        </SheetHeader>
        <ScrollArea className="h-full gap-2 overflow-y-auto">
          <div className="flex flex-col gap-2 px-4">
            {items.map(({ href, children }) => (
              <Link href={href} key={href} onClick={() => onOpenChange(false)}>
                <Button variant={"noShadow"} className="w-full justify-start">
                  {children}
                </Button>
              </Link>
            ))}
          </div>
          <div className="mt-4 flex flex-col gap-2 border-t p-4">
            <Link href="/sign-in" onClick={() => onOpenChange(false)}>
              <Button variant={"noShadow"} className="w-full justify-start">
                Sign in
              </Button>
            </Link>
            <Link href="/sign-up" onClick={() => onOpenChange(false)}>
              <Button variant={"noShadow"} className="w-full justify-start">
                Start selling
              </Button>
            </Link>
          </div>
        </ScrollArea>
      </SheetContent>
    </Sheet>
  );
};
