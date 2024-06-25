import React from "react";
import MaxWidthWrapper from "./MaxWithWrapper";
import {
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger,
} from "./ui/tooltip";
import { cn } from "@/lib/utils";
import { Check, HelpCircle, Minus } from "lucide-react";

//   {
//     name: "SOS Session",
//     slug: "onetime",
//     profile: 0,
//     sessions: 1,
//     price: {
//       amount: 9,

//     },
//   },
//   {
//     name: "Pro",
//     slug: "pro",
//     profile: 1,
//     sessions: 5,
//     price: {
//       amount: 19,

//     },
//   },
// ];
const pricingItems = [
  {
    plan: "Regular",
    tagline: "Get our dating help",
    price: 350,
    sessionPrice: 70,
    sessions: 3,
    features: [
      {
        text: "Initial Consultation",
        footnote: `A comprehensive one-on-one session to assess your current dating approach and set personalized goals.. This includes a brief “Makeover" component, where we offer honest feedback on any physical changes that will be beneficial. We believe in being candid because, sometimes, beauty requires tough love.`,
      },
      {
        text: "Health and Workout Plan",
        footnote:
          "Customized fitness and wellness guidance to help you look and feel your best.",
      },
      {
        text: "Ongoing Sessions (3)",
        footnote:
          "Regular check-ins to monitor your progress, provide support, and adjust your plan as needed.",
      },

      {
        text: "1-Hour Debrief Session",
        negative: true,
      },
      {
        text: "Fashion and Grooming Advice",
        negative: true,
      },
      {
        text: "Social Media Booster",
        negative: true,
      },
      {
        text: "Dating Simulation",
        negative: true,
      },
    ],
  },
  {
    plan: "Pro",
    tagline: "For larger projects with higher needs.",
    price: 770,
    sessionPrice: 70,
    sessions: 6,
    // seesions: PLANS.find((p) => p.slug === "pro")!.quota,
    features: [
      {
        text: "Initial Consultation",
        footnote:
          "A comprehensive one-on-one session to assess your current dating approach and set personalized goals.",
      },
      {
        text: "Health and Workout Plan",
        footnote:
          "Customized fitness and wellness guidance to help you look and feel your best.",
      },
      {
        text: "Ongoing Sessions (6)",
        footnote:
          "Regular check-ins to monitor your progress, provide support, and adjust your plan as needed.",
      },
      {
        text: "1-Hour Debrief Session",
        footnote: `A comprehensive follow-up meeting where we provide tailored advice and actionable steps to enhance your dating potential. This includes a "Makeover" component, where we offer honest feedback on any physical `,
      },
      {
        text: "Fashion and Grooming Advice",
        footnote: `Expert styling and grooming tips to elevate your appearance and boost your confidence.`,
      },

      {
        text: "Social Media Booster",
        footnote: `Advice from our very own social media, influencer and Content creator on how to enhance your dating profile, and your socials.`,
      },
      {
        text: "Dating Simulation",
        footnote: `Real-life practice sessions with feedback to hone your dating skills and prepare you for real-world encounters`,
      },
    ],
  },
];
const Pricing = () => {
  return (
    <MaxWidthWrapper className="mb-8 mt-12 max-w-5xl text-center">
      <div className="mx-auto mb-8 sm:max-w-lg">
        <h1 className="text-4xl font-bold text-primary sm:text-5xl">Pricing</h1>
        <p className="mt-3 text-slate-700 sm:text-lg">
          Whether you&apos;re just trying out our service or need more,
          we&apos;ve got you covered.
        </p>
      </div>
      <div className="grid grid-cols-1 gap-10 pt-6 lg:grid-cols-2">
        <TooltipProvider>
          {pricingItems.map((item) => {
            return (
              <div
                key={item.plan}
                className={cn("relative rounded-2xl bg-white shadow-lg", {
                  "border-2 border-pink-600 text-slate-800 shadow-pink-400":
                    item.plan === "Pro",
                  "border border-gray-200 text-slate-800": item.plan !== "Pro",
                })}
              >
                {item.plan === "Pro" && (
                  <div className="absolute -top-5 left-0 right-0 mx-auto w-32 rounded-full bg-gradient-to-r from-pink-600 to-red-500 px-3 py-2 text-sm font-medium text-white">
                    Upgrade now
                  </div>
                )}

                <div className="p-5">
                  <h3 className="font-display text-zinc-00 my-3 text-center text-3xl font-bold">
                    {item.plan}
                  </h3>
                  <p className="text-gray-500">{item.tagline}</p>
                  <p className="font-display my-3 text-6xl font-semibold text-slate-700">
                    ${item.price}
                  </p>
                  <p className="text-gray-500">
                    + ${item.sessionPrice} per session
                  </p>
                </div>

                <div className="flex h-16 items-center justify-center border-b border-t border-gray-200 bg-gray-50">
                  <div className="flex items-center space-x-1">
                    <p>{item.sessions.toLocaleString()} sessions minimum</p>
                    <Tooltip delayDuration={300}>
                      <TooltipTrigger className="ml-1.5 cursor-default">
                        <HelpCircle className="h-4 w-4 text-zinc-500" />
                      </TooltipTrigger>
                      <TooltipContent className="w-80 p-2">
                        More can be purchased if necessary
                      </TooltipContent>
                    </Tooltip>
                  </div>
                </div>
                <ul className="my-10 space-y-5 px-8">
                  {item.features.map((feature) => {
                    return (
                      <li key={feature.text} className="flex space-x-5">
                        <div className="flex-shrink-0">
                          {feature.negative ? (
                            <Minus className="h-6 w-6 text-gray-300" />
                          ) : (
                            <Check className="h-6 w-6 text-red-500" />
                          )}
                        </div>
                        {feature.footnote ? (
                          <div className="flex items-center space-x-1">
                            <p
                              className={cn("text-gray-600", {
                                "text-gray-400": feature.negative,
                              })}
                            >
                              {feature.text}
                            </p>
                            <Tooltip delayDuration={300}>
                              <TooltipTrigger className="ml-1.5 cursor-default">
                                <HelpCircle className="h-4 w-4 text-zinc-500" />
                              </TooltipTrigger>
                              <TooltipContent className="w-80 p-2">
                                {feature.footnote}
                              </TooltipContent>
                            </Tooltip>
                          </div>
                        ) : (
                          <p
                            className={cn("text-gray-600", {
                              "text-gray-400": feature.negative,
                            })}
                          >
                            {feature.text}
                          </p>
                        )}
                      </li>
                    );
                  })}
                </ul>
              </div>
            );
          })}
        </TooltipProvider>
      </div>
    </MaxWidthWrapper>
  );
};

export default Pricing;
