import React from "react";
import MaxWidthWrapper from "./MaxWithWrapper";
import { Megaphone, Salad, Shirt, Smartphone } from "lucide-react";
import Image from "next/image";

const Services = () => {
  return (
    <MaxWidthWrapper className="mt-10 flex flex-col items-center justify-center text-center sm:mb-12 sm:mt-10">
      <div className="mb-12 px-6 lg:px-8">
        <div className="mx-auto max-w-2xl sm:text-center">
          <h2 className="my-4 bg-gradient-to-tr from-pink-400 to-red-600 bg-clip-text text-4xl font-bold text-transparent sm:text-5xl">
            Unlock Your Dating Potential Improve Your Chances
          </h2>
          <p className="my-5 text-lg text-slate-700">
            Our service offers fashion, health, dating profile, and general
            advice to help you improve your chances of getting dates. Our
            experts will guide you through conversations, providing valuable
            help and advice.{" "}
            <span className="font-semibold">Change your luck today.</span>
          </p>
        </div>

        <section className="flex flex-col items-center justify-center space-y-4 sm:mt-16 md:flex-row md:items-stretch md:space-x-4 md:space-y-0">
          <div className="flex flex-col items-center space-y-4 p-2 md:min-h-full md:w-1/3 md:flex-1">
            <div className="flex flex-col items-center rounded-md">
              <Shirt className="mb-2 h-10 w-10 text-pink-500" />
              <h3 className="mb-2 text-lg font-bold text-slate-700">
                Enhance your Look
              </h3>
              <div className="text-center text-sm text-slate-700">
                Expert styling and grooming tips to elevate your appearance and
                boost your confidence.
              </div>
            </div>
            <div className="flex flex-col items-center rounded-md">
              <Salad className="mb-2 h-10 w-10 text-pink-500" />
              <h3 className="mb-2 text-lg font-bold text-slate-700">
                Health Tips
              </h3>
              <div className="text-center text-sm text-slate-700">
                Tailored fitness and wellness guidance designed to enhance your
                physical and mental well-being as well as monthly check-ins and
                support for fitness goals.
              </div>
            </div>
          </div>

          <div className="bordersm:w-1/3 m-3 flex min-w-10 items-center justify-center rounded-xl lg:w-1/2">
            <Image
              src="/mainDating.png"
              alt="dating"
              width={539}
              height={360}
              className="rounded-md p-3 shadow-2xl"
            />
          </div>

          <div className="flex flex-col items-center space-y-4 md:min-h-full md:w-1/3 md:flex-1">
            <div className="flex flex-col items-center rounded-md">
              <Smartphone className="mb-2 h-10 w-10 text-pink-500" />
              <h3 className="mb-2 text-lg font-bold text-slate-700">
                Dating Profile Assistance
              </h3>
              <div className="text-center text-sm text-slate-700">
                Get advice from our very own social media, influencer and
                content creator on how to enhance your dating profile, and your
                socials.
              </div>
            </div>
            <div className="flex flex-col items-center rounded-md p-4">
              <Megaphone className="mb-2 h-10 w-10 text-pink-500" />
              <h3 className="mb-2 text-lg font-bold text-slate-700">
                Dating Simulation
              </h3>
              <div className="text-center text-sm text-slate-700">
                Real-life practice sessions with feedback to hone your dating
                skills and prepare you for real-world encounters.
              </div>
            </div>
          </div>
        </section>
      </div>
    </MaxWidthWrapper>
  );
};

export default Services;
