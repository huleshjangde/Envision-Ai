"use client";
import Link from "next/link";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { HeartIcon } from "@/components/Icons";
import Services from "@/components/Services";
import Navbar from "@/components/Navbar";
import Home from "@/components/Home";
import { Spotlight } from "@/components/ui/Spotlight";
import { InfiniteMovingCardsDemo } from "@/components/InfiniteMovingCardsDemo";
import { useState, useEffect } from "react";
import Image from "next/image";

export default function Component() {
  const [position, setPosition] = useState({ x: 0, y: 0 });

  useEffect(() => {
    const handleMouseMove = (event: any) => {
      setPosition({ x: event.clientX, y: event.clientY });
    };

    document.addEventListener("mousemove", handleMouseMove);

    return () => {
      document.removeEventListener("mousemove", handleMouseMove);
    };
  }, []);
  return (
    <div className="flex flex-col h-full relative z-50 w-full  cursor-crosshair">
      <div
        className={`${position.x == 0 && "hidden"} -rotate-90`}
        style={{
          position: "fixed",
          top: position.y,
          left: position.x,
          zIndex: 20,
        }}
      >
        <Image
          width={50}
          height={50}
          className=""
          src={"/magic.png"}
          alt={"imagge"}
        />
      </div>
      <main className="flex-1">
        <Home />

        <InfiniteMovingCardsDemo />

        <section className="w-full py-12 md:py-24 lg:py-32 border-t">
          <div className="container grid items-center justify-center gap-4 px-4 text-center md:px-6">
            <div className="space-y-3">
              <h2 className="text-3xl font-bold tracking-wide md:text-4xl/tight">
                How To Craft an Effective AI Art Prompts
              </h2>
              <p className="mx-auto max-w-[600px] text-gray-500 md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed dark:text-gray-400">
                Crafting effective AI art prompts involves being specific yet
                open-ended, referencing other artworks, and suggesting mood or
                emotion
              </p>
            </div>

            <Services />
          </div>
        </section>
        {/* <section className="w-full py-12 md:py-24 lg:py-32 border-t">
          <div className="container grid items-center gap-6 px-4 text-center md:px-6">
            <div className="space-y-2">
              <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">
                Transforming Healthcare with AI
              </h2>
              <p className="mx-auto max-w-[600px] text-gray-500 md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed dark:text-gray-400">
                Experience the future of healthcare with AI-driven solutions
                that enhance patient care and outcomes.
              </p>
            </div>
            <div className="mx-auto w-full max-w-sm space-y-2">
              <form className="flex space-x-2">
                <Input
                  className="max-w-lg flex-1"
                  placeholder="Enter your email"
                  type="email"
                />
                <Button type="submit">Get Started</Button>
              </form>
              <p className="text-xs text-gray-500 dark:text-gray-400">
                Sign up to learn more about our Envision tools.
                <Link className="underline underline-offset-2" href="#">
                  Terms & Conditions
                </Link>
              </p>
            </div>
          </div>
        </section> */}
      </main>
    </div>
  );
}
