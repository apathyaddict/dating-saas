import React from "react";
import MaxWidthWrapper from "./MaxWithWrapper";
import { MessageSquareShare, Sparkles } from "lucide-react";
import Image from "next/image";

const teamMembers = [
  {
    id: 1,
    name: "Eve Seni",
    description: "Art, Wisdom, Guidance",
    image: "/eve.jpg",
    instagram: "https://www.instagram.com/johndoe/",
    bio: "The Gandalf you didn't know you needed.",
  },
  {
    id: 2,
    name: "Cindy Seni",
    description: "Looks, Dating, Social Media",
    image: "/cindy.JPG",
    instagram: "https://www.instagram.com/janesmith/",
    bio: "Netflix star, Social Media Goddess. ",
  },
  {
    id: 3,
    name: "Shirley Seni",
    description: "Health, Nutrition, Healthy Relationship",
    image: "/shirley.JPG",
    instagram: "https://www.instagram.com/michaeljohnson/",
    bio: "Her abs will make you believe in good things again. ",
  },
  {
    id: 4,
    name: "Dan ",
    description: "Eye Candy",
    image: "/dan.JPG",
    instagram: "",
    bio: "The most beautiful baby in the world",
  },
];

const Team = () => {
  return (
    <MaxWidthWrapper>
      {/*  max-w-6xl with 3*/}
      <div className="mx-auto mb-16 max-w-6xl sm:mb-32 sm:mt-12 sm:text-center">
        <h2 className="mt-2 text-3xl font-semibold text-slate-700 sm:text-5xl">
          Our Team
        </h2>
        <p className="text-md my-4 text-slate-700 sm:text-lg">
          Three sisters working together to look out for you.
        </p>

        {/* switch back and remove dan */}
        <ul className="mt-16 grid grid-cols-1 gap-10 sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-4">
          {teamMembers.map((member) => (
            <li
              key={member.id}
              className="overflow-hidden rounded-lg bg-white sm:mb-4 sm:border sm:shadow-md"
            >
              <div className="flex h-full flex-row items-center justify-between sm:flex-col sm:gap-2 sm:p-3">
                <div className="relative flex flex-1 justify-center">
                  <Image
                    className="mt-4 h-32 w-32 rounded-full object-cover"
                    src={member.image}
                    alt={member.name}
                    width={100}
                    height={100}
                  />
                </div>
                <div className="mt-4 flex flex-1 flex-col text-center">
                  <h3 className="mb-2 text-lg font-semibold text-primary">
                    {member.name}
                  </h3>
                  <p className="text-md font-semibold text-slate-600">
                    {member.description}
                  </p>
                  {/* </div> */}
                  {/* <div className="flex-1"> */}
                  <p className="text-md max-w-full px-3 font-thin text-slate-600">
                    {member.bio}
                  </p>

                  <div className="mx-auto items-center p-3">
                    <a
                      href={member.instagram}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-slate-400 transition duration-150 ease-in-out hover:text-pink-500"
                    >
                      <span className="sr-only">Instagram</span>
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width="24"
                        height="24"
                        viewBox="0 0 24 24"
                        fill="none"
                        stroke="currentColor"
                        stroke-width="2"
                        stroke-linecap="round"
                        stroke-linejoin="round"
                        class="lucide lucide-instagram"
                      >
                        <rect
                          width="20"
                          height="20"
                          x="2"
                          y="2"
                          rx="5"
                          ry="5"
                        />
                        <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z" />
                        <line x1="17.5" x2="17.51" y1="6.5" y2="6.5" />
                      </svg>
                    </a>
                  </div>
                </div>
              </div>
            </li>
          ))}
        </ul>
      </div>
    </MaxWidthWrapper>
  );
};

export default Team;
