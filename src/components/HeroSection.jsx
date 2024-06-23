import React from "react";
import MaxWidthWrapper from "./MaxWithWrapper";
import Link from "next/link";
import { buttonVariants } from "./ui/button";
import { MessageCircleHeart } from "lucide-react";

const HeroSection = () => {
  // nav menu
  return (
    <MaxWidthWrapper className="mb-56 mt-28 flex flex-col items-center justify-center text-center text-slate-800 sm:mt-52">
      <h1 className="max-w-4xl text-5xl font-bold lg:text-6xl">
        Unlock your{" "}
        <span className="bg-gradient-to-tr from-pink-400 to-red-600 bg-clip-text text-transparent">
          Dating
        </span>{" "}
        Potential
      </h1>
      <p className="mt-5 max-w-prose text-slate-700 sm:text-lg">
        Find the love you deserve with guidance and support.
      </p>
      <Link
        className={buttonVariants({ size: "lg", className: "mt-5" })}
        href="/pricing"
      >
        Sign Up Today <MessageCircleHeart className="ml-2 h-5 w-5" />
      </Link>
    </MaxWidthWrapper>
  );
};

export default HeroSection;
