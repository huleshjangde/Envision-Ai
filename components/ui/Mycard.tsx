import React from "react";
import { CardBody, CardContainer, CardItem } from "../ui/3d-card";
import { Button } from "./button";
import Link from "next/link";

interface ThreeDCardProps {
  title: string;
  description: string;
  icon: JSX.Element;
  page: string; // Assuming the icon will be passed as a JSX.Element
}

const ThreeDCardDemo: React.FC<ThreeDCardProps> = ({
  title,
  description,
  icon,
  page,
}) => {
  return (
    <CardContainer className="py-2  ">
      <CardBody className="bg-gray-50 py-0  flex justify-center items-center flex-col relative group/card dark:hover:shadow-2xl dark:hover:shadow-emerald-500/[0.1] dark:bg-black dark:border-white/[0.2] border-black/[0.1] w-auto sm:w-[20rem] h-fit rounded-xl p-6 border  ">
        <CardItem
          translateZ="50"
          className="text-xs font-bold text-neutral-600 dark:text-white"
        >
          {icon}
        </CardItem>

        <CardItem
          translateZ="50"
          className="text-lg font-bold tracking-wide text-yellow-400 dark:text-white"
        >
          {title}
        </CardItem>

        <CardItem
          as="p"
          translateZ="60"
          className="text-neutral-500 text-xs max-w-sm mt-2 dark:text-neutral-300 line-clamp-2"
        >
          {description}
        </CardItem>
        {/* <Link
          className="bg-black/75 py-2 px-5 mt-5 text-white rounded-md capitalize hover:bg-black/90 hover:scale-105 transition-all"
          href={`/${page}`}
        >
          {" "}
          Try Now {page}
        </Link> */}
      </CardBody>
    </CardContainer>
  );
};

export default ThreeDCardDemo;
