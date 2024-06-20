import React from "react";
import MaxWidthWrapper from "./MaxWithWrapper";
import Link from "next/link";
import { Button, buttonVariants } from "./ui/button";

const Navbar = () => {
  return (
    <nav className="sticky inset-x-0 top-0 z-30 h-14 w-full border-b border-pink-200 bg-white/75 backdrop-blur-lg transition-all">
      <section className="mx-auto w-full max-w-screen-xl px-2.5 md:px-20">
        <div className="flex h-14 items-center justify-between border-b border-pink-200">
          <Link href="/" className="z-40 flex font-semibold text-primary">
            <span>DeNebsify</span>
          </Link>
          <div className="hidden items-center space-x-8 font-semibold sm:flex">
            <Link
              href="/services"
              className="text-slate-700 hover:text-primary"
            >
              Services
            </Link>

            <Link className="text-slate-700 hover:text-primary" href="/pricing">
              Pricing
            </Link>

            <Link href="/contact" className="hover:text- text-slate-700">
              Contact Us
            </Link>

            <Link href="/faq" className="text-slate-700 hover:text-primary">
              FAQ
            </Link>
            <Button>
              <Link
                className={buttonVariants({
                  variant: "primary",
                  size: "sm",
                })}
                href="/signup"
              >
                Sign Up
              </Link>
            </Button>
          </div>
        </div>
      </section>
    </nav>
  );
};

export default Navbar;
