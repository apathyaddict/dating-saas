import React from "react";
import MaxWidthWrapper from "./MaxWithWrapper";
import Link from "next/link";
import { buttonVariants } from "./ui/button";
import { MessageCircleHeart } from "lucide-react";

const HeroSection = () => {
  // nav menu
  return (
    <MaxWidthWrapper className="sm:mt-30 mb-56 mt-28 flex flex-col items-center justify-center text-center text-slate-800">
      <h1 className="max-w-4xl text-5xl font-bold lg:text-6xl">
        Unlock your{" "}
        <span className="bg-gradient-to-tr from-blue-600 to-red-400 bg-clip-text text-transparent">
          Dating
        </span>{" "}
        Potential
      </h1>
      <p className="mt-5 text-slate-700 sm:text-lg md:max-w-lg">
        From perfecting your profile to mastering the art of the first date,
        we’ve got you covered.
      </p>
      <Link
        className={buttonVariants({
          size: "lg",
          className: "mt-5 font-medium",
          variant: "iphone",
        })}
        href="/signup"
      >
        Sign Up Today <MessageCircleHeart className="ml-2 h-5 w-5" />
      </Link>

      {/* <div className="mb-2 mt-12 flex max-w-prose flex-col justify-center rounded-md p-4">
        <p className="text-slate-700 sm:text-lg">
          <h4 className="mb-2 font-medium">
            Are you tired of <span className="text-primary">striking out</span>{" "}
            in the dating world?
          </h4>{" "}
        </p>
        <p className="text-mdm mb-4"> It’s not your fault.</p>
        <p className="mb-4 mt-6">
          Dating is like marketing. And we're going to market you as
          irresistible. The secret to successful dating lies in how you present
          yourself.
        </p>
        <p className="mt-2">
          {" "}
          Think of us as your personal dating consultants. We’ll groom you,
          refine your approach, give you a health and workout plan and make sure
          you’re putting your best foot forward.{" "}
        </p>{" "}
        <h4 className="mt-4 text-lg font-semibold text-slate-700">
          From perfecting your profile to mastering the art of the first date,
          we’ve got you covered.
        </h4>
      </div> */}
      {/* Iphone chat */}
      <div className="chat max-w-1/3 mt-10 rounded-lg shadow-sm sm:max-w-[550px]">
        <div className="yours messages">
          <div className="message">
            Are you tired of striking out in the dating world?
          </div>
          <div className="message">It’s not your fault.</div>
        </div>
        <div className="mine messages">
          <div className="message last">It's not?</div>
        </div>
        <div className="yours messages">
          <div className="message">
            Dating is like marketing. And we're going to market you as
            irresistible.
          </div>
        </div>
        <div className="mine messages">
          <div className="message last">How do we do that?</div>
        </div>
        <div className="yours messages">
          <div className="message">
            Think of us as your personal dating consultants.
          </div>
          <div className="message">
            We&apos;ll groom you, refine your approach, give you a health and
            workout plan, make sure you&apos;re putting your best foot forward
            💪
          </div>
        </div>
      </div>
    </MaxWidthWrapper>
  );
};

export default HeroSection;
