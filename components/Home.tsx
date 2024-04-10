import React from "react";
import { Input } from "./ui/input";
import { Button } from "./ui/button";
import Image from "next/image";
import { HeartIcon } from "./Icons";
import { Spotlight } from "./ui/Spotlight";
import { LampContainer } from "./ui/lamp";
import Link from "next/link";

const Home = () => {
  return (
    <>
      <div className="w-full relative z-50 py-12 md:py-24 lg:py-32 h-screen flex justify-center items-center justify-items-center ">
        <div className="container flex flex-col items-center  justify-center space-y-4 md:px-6  lg:space-y-6 w-[80%]">
          <div className="flex flex-col items-center justify-center space-y-2 w-full">
            <Spotlight
              className="-top-40 left-0 md:left-60 md:-top-20"
              fill="red"
            />
            <h1 className="text-4xl font-bold tracking-tighter text-center sm:text-5xl md:text-6xl ">
              <span className="text-green-700  "> HealthBridge AI </span>{" "}
              Leading the Evolution of Healthcare with{" "}
              <span className="text-red-700">AI-Powered Solutions</span>
            </h1>
            <p className="mx-auto max-w-[600px] text-gray-500 text-center md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed dark:text-gray-400">
              Transforming healthcare with cutting-edge AI technology. Providing
              personalized and efficient care for all.
            </p>
          </div>
          <form className="flex flex-col gap-4 min-[400px]:flex-row">
            {/* <Input className="w-full max-w-[300px] sm:max-w-[400px]" placeholder="Enter your email" type="email" /> */}
            <Link
              href={"/heart"}
              className="hover:scale-105 transition-all ease-linear 0.5 flex bg-black text-white px-5 py-2 rounded-md"
            >
              Discover AI Solutions <HeartIcon className="h-6 w-6 ml-2" />
            </Link>
          </form>
        </div>
        {/* <div className='w-[40%] relative flex justify-center'><Image src={'/dr3.png'} alt={''} width={500} className='relative' height={500} /> <div className='w-48 h-48 bg-red-400 blur-3xl absolute top-0 left-20 -z-10'></div></div> */}
      </div>
    </>
  );
};

export default Home;
