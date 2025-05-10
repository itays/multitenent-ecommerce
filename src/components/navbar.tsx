"use client";

import React, { PropsWithChildren, useState } from "react";
import { Poppins } from "next/font/google";
import Link from "next/link";
import { cn } from "@/lib/utils";
import { Button } from "@/components/ui/button";
import { usePathname } from "next/navigation";
import { NavbarSidebar } from "./navbar-sidebar";
import { ThemeSwitch } from "@/components/ThemeSwitch";
import { MenuIcon } from "lucide-react";

const poppins = Poppins({
  subsets: ["latin"],
  weight: ["700"],
});

interface NavbarItemProps extends PropsWithChildren {
  href: string;
  isActive?: boolean;
}

const NavbarItem = ({ children, isActive, href }: NavbarItemProps) => {
  return (
    <Button variant={isActive ? "noShadow" : "neutral"} asChild>
      <Link href={href}>{children}</Link>
    </Button>
  );
};

const navbarItems = [
  {
    href: "/",
    children: "Home",
  },
  {
    href: "/about",
    children: "About",
  },
];

const Navbar = () => {
  const pathname = usePathname();
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);
  return (
    <nav className="bg-background flex h-20 gap-4 border-b px-4 font-medium">
      <Link href="/" className="flex items-center pl-6">
        <span className={cn("text-5xl font-semibold", poppins.className)}>
          funroad
        </span>
      </Link>

      <NavbarSidebar
        items={navbarItems}
        open={isSidebarOpen}
        onOpenChange={setIsSidebarOpen}
      />

      <div className="hidden items-center gap-4 lg:flex">
        {navbarItems.map(({ href, children, ...item }) => (
          <NavbarItem
            key={href}
            href={href}
            {...item}
            isActive={pathname === href}
          >
            {children}
          </NavbarItem>
        ))}
      </div>

      <div className="ml-auto hidden items-center gap-4 lg:flex">
        <Button variant={"neutral"} asChild>
          <Link href="/sign-in">Sign in</Link>
        </Button>
        <Button variant={"neutral"} asChild>
          <Link href="/sign-up">Start selling</Link>
        </Button>
      </div>

      <div className="ml-auto flex items-center">
        <ThemeSwitch />
      </div>

      <div className="flex items-center justify-center lg:hidden">
        <Button
          variant={"neutral"}
          onClick={() => setIsSidebarOpen(true)}
          size={"icon"}
        >
          <MenuIcon />
        </Button>
      </div>
    </nav>
  );
};

export { Navbar };
