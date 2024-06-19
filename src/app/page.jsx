import HeroSection from "@/components/HeroSection";
import Services from "@/components/Services";
import React from "react";

const Home = () => {
  return (
    <section className="relative overflow-hidden">
      {/* color blob */}
      <div
        aria-hidden="true"
        className="pointer-events-none absolute inset-x-0 -top-40 -z-10 transform-gpu overflow-hidden blur-3xl sm:-top-80"
      >
        <div
          style={{
            clipPath:
              "polygon(50% 0%, 100% 35%, 100% 100%, 50% 80%, 0% 100%, 0% 35%)", // Adjust the points to form a heart shape
          }}
          className="relative left-[calc(50%-13rem)] aspect-[1155/678] w-[36.125rem] -translate-x-1/2 rotate-[30deg] bg-gradient-to-tr from-red-500 via-pink-500 to-orange-500 opacity-60 sm:left-[calc(50%-36rem)] sm:w-[72.1875rem]"
        />
      </div>

      <div
        aria-hidden="true"
        className="sm:top-100 pointer-events-none absolute inset-x-10 -bottom-40 -z-10 transform-gpu overflow-hidden blur-3xl"
      >
        <div
          style={{
            clipPath:
              "polygon(00% 0%, 100% 35%, 100% 100%, 50% 80%, 0% 100%, 0% 35%)", // Adjust the points to form a heart shape
          }}
          className="relative left-[calc(50%-13rem)] aspect-[155/678] w-[6.125rem] -translate-x-1/2 rotate-[30deg] bg-gradient-to-tr from-blue-300 via-blue-600 opacity-60 sm:left-[calc(50%-36rem)] sm:w-[72.1875rem]"
        />
      </div>

      <HeroSection />
      <Services />
      <div>
        <div className="relative isolate">
          <div
            //to let the users  know this is purely decorative
            aria-hidden="true"
            className="pointer-events-none absolute inset-x-0 -top-40 -z-10 transform-gpu overflow-hidden blur-3xl sm:-top-80"
          >
            <div
              style={{
                clipPath:
                  "polygon(74.1% 44.1%, 100% 61.6%, 97.5% 26.9%, 85.5% 0.1%, 80.7% 2%, 72.5% 32.5%, 60.2% 62.4%, 52.4% 68.1%, 47.5% 58.3%, 45.2% 34.5%, 27.5% 76.7%, 0.1% 64.9%, 17.9% 100%, 27.6% 76.8%, 76.1% 97.7%, 74.1% 44.1%)",
              }}
              className="relative left-[calc(50%-11rem)] aspect-[1155/678] w-[36.125rem] -translate-x-1/2 rotate-[30deg] bg-gradient-to-tr from-[#ed2f4c] to-[#9089fc] opacity-30 sm:left-[calc(50%-30rem)] sm:w-[72.1875rem]"
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Home;
