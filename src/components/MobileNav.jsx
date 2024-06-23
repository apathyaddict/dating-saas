"use client";
import React from "react";

import { Menu } from "lucide-react";
import Link from "next/link";
import { usePathname, useRouter } from "next/navigation";
import { cn } from "@/lib/utils";
import { Sheet, SheetClose, SheetContent, SheetTrigger } from "./ui/sheet";

const MobileNav = () => {
  const pathname = usePathname();

  const sidebarLinks = [
    { route: "/services", label: "Services" },
    { route: "/pricing", label: "Pricing" },
    { route: "/contact", label: "Contact" },
  ];

  return (
    <section>
      <Sheet>
        <SheetTrigger>
          <Menu className="h-10 w-10 cursor-pointer text-slate-700" />
        </SheetTrigger>
        <SheetContent side="left" className="border-none bg-white">
          <Link
            href="/"
            className="flex cursor-pointer items-center gap-1 pb-10 pl-4"
          >
            <h1 className="text-24 ml-2 font-extrabold text-primary">
              DeNebsify
            </h1>
          </Link>
          <div className="flex h-[calc(100vh-72px)] flex-col justify-between overflow-y-auto">
            <SheetClose asChild>
              <nav className="text-white-1 flex h-full flex-col gap-6">
                {sidebarLinks.map(({ route, label }) => {
                  const isActive =
                    pathname === route || pathname.startsWith(`${route}/`);
                  return (
                    <SheetClose asChild key={route}>
                      <Link
                        href={route}
                        className={cn(
                          "flex items-center justify-start gap-3 py-4 max-lg:px-4",
                          {
                            "bg-nav-focus border-r-4 border-primary": isActive,
                          },
                        )}
                      >
                        {/* <img src={imgURL} alt={`${label} icon`} className="w-6 h-6" /> */}
                        <span>{label}</span>
                      </Link>
                    </SheetClose>
                  );
                })}
              </nav>
            </SheetClose>
          </div>
        </SheetContent>
      </Sheet>
    </section>
  );
};

export default MobileNav;
