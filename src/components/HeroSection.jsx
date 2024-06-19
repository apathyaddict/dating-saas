import React from "react";
import MaxWidthWrapper from "./MaxWithWrapper";
import Link from "next/link";
import { buttonVariants } from "./ui/button";
import { MessageCircleHeart } from "lucide-react";

const HeroSection = () => {
  return (
    <MaxWidthWrapper className="mb-12 mt-28 flex flex-col items-center justify-center text-center sm:mt-40">
      <h1 className="max-w-4xl text-5xl font-bold lg:text-6xl">
        Unlock your <span className="text-primary">Dating</span> Potential
      </h1>
      <p className="mt-5 max-w-prose text-zinc-700 sm:text-lg">
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
