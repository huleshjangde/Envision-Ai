import React from "react";
import { HeartPulseIcon, ImageIcon, StoryIcon } from "@/components/Icons"; // Import your icons
import ThreeDCardDemo from "@/components/ui/Mycard";
import Image from "next/image";
import { artPrompts } from "@/lib/prompts";
const Services: React.FC = () => {
  const data = [
    {
      icon: <HeartPulseIcon className="h-12 w-12" />,
      title: "Be specific",
      description: `Detail subjects, shapes, colors, and textures. For example, "a surreal landscape with twisting trees and a bright red sun"`,
      pageTitle: "heart",
    },
    {
      icon: <StoryIcon className="h-12 w-12" />,
      title: "Reference other artworks",
      description: ` Mention artists or styles you want to emulate, like "a cubist portrait in the style of Picasso."`,
      pageTitle: "story",
    },
    {
      icon: <ImageIcon className="h-12 w-12" />,
      title: "Suggest mood or emotion",
      description: `Use phrases like "a melancholy seascape" or "a whimsical still life" to convey feeling.`,
      pageTitle: "log",
    },
    // {
    //   icon: <ImageIcon className="h-5 w-5" />,
    //   title: "Stay open-ended",
    //   description: `Use phrases like "with unexpected details" or "suggesting solitude" to allow for creativity.`,
    //   pageTitle: "log",
    // },
  ];

  return (
    <>
      <div className="mx-auto w-full flex flex-col mt-10  gap-10   sm:h-[300px] sm:flex-row ">
        {data.map((item, index) => (
          <>
            <div
              key={index}
              className="flex  flex-col   py-1 items-center  relative"
            >
              <ThreeDCardDemo
                icon={item.icon}
                title={item.title}
                description={item.description}
                page={item.pageTitle}
              />
              {index < 2 && (
                <Image
                  width={200}
                  height={200}
                  className="hidden sm:block absolute z-30  top-0 -right-40 "
                  src={"/arr1.svg"}
                  alt={"imagge"}
                />
              )}
            </div>
          </>
        ))}
      </div>

      <div className="flex flex-col w-full gap-4 justify-center">
        {artPrompts.slice(1, 6).map((item, index) => {
          return (
            <>
              {" "}
              <p className="py-2  hover:bg-black hover:text-white transition-all ease-linear duration-300 px-4 border border-gray-300 rounded-md">
                {item}
              </p>{" "}
            </>
          );
        })}
      </div>
    </>
  );
};

export default Services;
