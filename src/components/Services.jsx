import React from "react";
import MaxWidthWrapper from "./MaxWithWrapper";
import { Megaphone, Salad, Shirt, Smartphone } from "lucide-react";
import Image from "next/image";

const Services = () => {
  return (
    <MaxWidthWrapper className="mt-10 flex flex-col items-center justify-center text-center sm:mb-12 sm:mt-10">
      {/* <div className="mx-auto mb-32 mt-32 max-w-5xl sm:mt-56"> */}
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
          {/* </div> */}
        </div>

        <section className="flex flex-col items-center justify-center space-y-4 p-6 md:flex-row md:space-x-4 md:space-y-0">
          <div className="flex flex-col items-center space-y-4 md:w-1/3 md:flex-1">
            <div className="flex flex-col items-center rounded-md p-4">
              <Shirt className="mb-2 h-10 w-10 text-pink-500" />
              <h3 className="mb-2 text-lg font-bold text-slate-700">
                Enhance your Look
              </h3>
              <div className="text-center text-sm text-slate-700">
                Get fashion advice that works for you and get personalized style
                recommendations.
              </div>
            </div>
            <div className="flex flex-col items-center rounded-md p-4">
              <Salad className="mb-2 h-10 w-10 text-pink-500" />
              <h3 className="mb-2 text-lg font-bold text-slate-700">
                Health Tips
              </h3>
              <div className="text-center text-sm text-slate-700">
                Enhance your lifestyle and wellness with our help, focusing on
                nutrition and exercise.
              </div>
            </div>
          </div>

          <div className="m-3 min-w-10 rounded-xl bg-gray-900/10 p-3 ring-1 ring-inset ring-gray-900/10 md:w-1/3 lg:w-1/2">
            <Image
              src="/mainDating.png"
              alt="dating"
              width={539}
              height={360}
              className="rounded-md bg-white shadow-2xl ring-1 ring-gray-900/10"
            />
          </div>

          <div className="flex flex-col items-center space-y-4 md:w-1/3 md:flex-1">
            <div className="flex flex-col items-center rounded-md p-4">
              <Smartphone className="mb-2 h-10 w-10 text-pink-500" />
              <h3 className="mb-2 text-lg font-bold text-slate-700">
                Dating Profile Assistance
              </h3>
              <div className="text-center text-sm text-slate-700">
                Optimize your dating profile to attract more matches and
                increase your chances of finding love.
              </div>
            </div>
            <div className="flex flex-col items-center rounded-md p-4">
              <Megaphone className="mb-2 h-10 w-10 text-pink-500" />
              <h3 className="mb-2 text-lg font-bold text-slate-700">
                Life Tips and Tricks
              </h3>
              <div className="text-center text-sm text-slate-700">
                Get valuable advice on various topics to enhance your dating
                luck.
              </div>
            </div>
          </div>
        </section>
      </div>
    </MaxWidthWrapper>
  );
};

export default Services;
