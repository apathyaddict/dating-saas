import React from "react";
import MaxWidthWrapper from "./MaxWithWrapper";
import Instagram from "./Instagram";
import { Mail } from "lucide-react";
import { Button, buttonVariants } from "./ui/button";
import Link from "next/link";

const ContactUs = () => {
  return (
    <div className="mx-auto mt-8 w-full max-w-screen-xl bg-gray-100 px-2.5 py-16 md:px-20">
      <section className="flex flex-col items-start justify-around">
        <div className="mb-6 flex-1">
          <h1 className="text-4xl font-bold text-slate-700">Get in Touch</h1>
          <p className="sm:max-w-1/4 my-4 text-sm font-thin">
            All Inital contact will be done over email. After sign up, a method
            of communication will be chosen by the client.{" "}
          </p>

          <div className="flex flex-1 flex-row justify-start gap-4">
            {/* TODO: add proper links */}
            <Link href="http://www.google.com" target="_blank">
              <Button
                className={buttonVariants({ size: "md", variant: "link" })}
              >
                <Instagram className={"white"} />
              </Button>
            </Link>
            <Link href="http://www.google.com" target="_blank">
              <Button
                className={buttonVariants({ size: "xs", variant: "link" })}
              >
                <Mail className="text-white" />
              </Button>
            </Link>
            <Button>
              <Link
                className={buttonVariants({
                  variant: "primary",
                  size: "sm",
                })}
                href="/signup"
              >
                <p className="font-bold">Sign Up</p>
              </Link>
            </Button>
          </div>
        </div>
        <div className="flex-1">
          <p className="text-xs font-thin">
            {" "}
            Copyright of concept and Ideas. Seni sisters.{" "}
            <span className="mt-2 text-xs font-extralight text-gray-800">
              2004.
            </span>
          </p>
        </div>
        <div className="mt-6 flex-1">
          <Link href="/" className="font-semibold text-primary">
            <span>DeNebsify</span>
          </Link>
        </div>
      </section>
    </div>
  );
};

export default ContactUs;
