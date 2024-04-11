"use client";
import React, { useEffect, useState } from "react";

import Image from "next/image";
import { Spotlight } from "./ui/Spotlight";

import { Textarea } from "./ui/textarea";

import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import { ArrowBigRight } from "lucide-react";
import Markdown from "markdown-to-jsx";
import { Skeleton } from "./ui/skeleton";

const { GoogleGenerativeAI } = require("@google/generative-ai");
const genAI = new GoogleGenerativeAI("AIzaSyAHAHgWkZJmzBv8ug2wlTIqPKGUGG7Xm0g");
const Home = () => {
  const model = genAI.getGenerativeModel({ model: "gemini-pro" });
  //  useEffect(()=>{

  //  })

  const [output, setOutput] = useState("");
  const [status, setStaus] = useState("");
  const [pending, setPending] = useState(false);

  async function result() {
    // For text-only input, use the gemini-pro model
    setPending(true);
    setStaus(status);
    setOutput("");

    console.log("====================================");
    console.log(prompt);
    console.log("====================================");
    const result = await model.generateContent(
      `Your an Hindi Story writer based on image description or imagine, your response should be only story with title do not writre long  : " ${prompt} " `,
    );
    const response = await result.response;

    const text = response.text();
    setPending(false);
    setOutput(text);
  }

  useGSAP(() => {
    gsap.from("#green-box", {
      scale: 20,
      opacity: 0,
      duration: 1,
      ease: "power3.out",
    });
  }, []);

  const check = () => {
    gsap.from("#area", {
      width: "0px",
      duration: 1,
    });
  };

  useGSAP(() => {
    gsap.from("#areas", {
      opacity: 0,
      width: "0px",
      duration: 2,
      delay: 0,
    });
  }, []);

  useGSAP(() => {
    gsap.from("#box2", {
      opacity: 0,

      width: "0px",
      duration: 2,
      delay: 0,
    });
  }, []);

  useGSAP(() => {
    gsap.from("#green-box2", {
      opacity: 0,
      duration: 4,
      ease: "power3.out",
    });
  }, []);

  const [prompt, setPrompt] = useState("");
  const [img, setImg] = useState("");
  const [loading, setLoading] = useState(false);
  const [imgFileName, setImgFileName] = useState("");

  useGSAP(() => {
    gsap.from("#area", {
      opacity: 0,

      duration: 2,
    });
  }, [img]);
  async function query() {
    if (hasStory) {
      result();
      setImg("");

      setLoading(true);
      const response = await fetch(
        "https://api-inference.huggingface.co/models/stabilityai/stable-diffusion-xl-base-1.0",
        {
          headers: {
            Authorization: "Bearer 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",
          },
          method: "POST",
          body: JSON.stringify(prompt),
        },
      );
      if (response.ok) {
        // Assuming the response contains image data in blob format
        const blob = await response.blob();
        // Create a URL for the blob object
        const imgUrl = URL.createObjectURL(blob);
        // Update the state with the image URL
        setImg(imgUrl);
        setLoading(false);
        setImgFileName("downloaded_image.png");

        console.log("====================================");
        console.log("image generated");
        console.log("====================================");
      } else {
        console.error("Failed to fetch image");
        setLoading(false);
      }
    } else {
      setImg("");

      console.log("=================image result===================");
      console.log("hello from api");
      console.log("====================================");
      setLoading(true);
      const response = await fetch(
        "https://api-inference.huggingface.co/models/stabilityai/stable-diffusion-xl-base-1.0",
        {
          headers: {
            Authorization: "Bearer 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",
          },
          method: "POST",
          body: JSON.stringify(prompt),
        },
      );
      if (response.ok) {
        // Assuming the response contains image data in blob format
        const blob = await response.blob();
        // Create a URL for the blob object
        const imgUrl = URL.createObjectURL(blob);
        // Update the state with the image URL
        setImg(imgUrl);
        setLoading(false);
        setImgFileName("downloaded_image.png");

        console.log("====================================");
        console.log("image generated");
        console.log("====================================");
      } else {
        console.error("Failed to fetch image");
        setLoading(false);
      }
    }
  }

  const [isCreative, setIsCreative] = useState(false);
  const [hasStory, setHasStory] = useState(false);

  const handleCreativeChange = () => {
    setIsCreative(!isCreative);
  };

  const handleStoryChange = () => {
    setHasStory(!hasStory);
  };

  function handleDownload() {
    if (img) {
      const link = document.createElement("a");
      link.href = img;
      link.download = imgFileName;
      document.body.appendChild(link);
      link.click();
      document.body.removeChild(link);
    }
  }
  return (
    <>
      <div className="w-full  relative z-50 pt-20 h-fit flex justify-center items-center justify-items-center ">
        <div className="container relative flex flex-col items-center  justify-center space-y-4 md:px-6  lg:space-y-6 w-full px-2 sm:w-[80%]">
          {/* <video className="absolute opacity-80 animate-in rounded-md rotate-45 -top-32 right-11" width="200" height="150" muted loop autoPlay>
              <source src="/ai.mp4" type="video/mp4" />
              Your browser does not support the video tag.
            </video> */}
          <div className="flex flex-col items-center justify-center space-y-2 w-full">
            <Spotlight
              className="-top-40 left-0 md:left-60 md:-top-20"
              fill="red"
            />
            <h1
              id="green-box"
              className="text-3xl text-gray-800 mix-blend-difference scale-100 opacity-1 font-bold tracking-tighter text-center sm:text-5xl md:text-7xl "
            >
              <span className="text-green-700  "> Envision: </span> Your Gateway
              to Infinite Stories and Imagery{" "}
              <span className="text-red-700">AI-Powered</span>
            </h1>
            <p
              id="green-box2"
              className="mx-auto max-w-[800px] text-gray-500 text-xs text-center md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed dark:text-gray-400 opacity-[100%]"
            >
              Unleash Your Creativity, Explore Boundless Realms: Where Words and
              Images Collide in a Symphony of Imagination
            </p>
          </div>
          <div className="flex flex-col">
            <Textarea
              id="areas"
              placeholder="Describe the image you'd like to generate..."
              onChange={(e) => setPrompt(e.target.value)}
              value={prompt}
              rows={2}
              className="sm:w-[600px] w-[80vw] border-none focus-visible:ring-0  focus-visible:ring-offset-0 disabled:cursor-not-allowed disabled:opacity-50 bg-slate-200/90 text-black text-lg backdrop-blur-[1px] focus:ring-0 focus:ring-offset-0 ring-0 outline-none ring-offset-0"
            />
            <div
              id="box2"
              className="sm:w-[600px] w-[80vw] py-2 bg-slate-200/90 border-t  border-t-gray-600 flex justify-between px-10"
            >
              <label className="flex items-center cursor-pointer">
                <input
                  type="checkbox"
                  className="mr-2"
                  checked={isCreative}
                  onChange={handleCreativeChange}
                />
                Creative
              </label>
              <label className="flex items-center cursor-pointer">
                <input
                  type="checkbox"
                  className="mr-2"
                  checked={hasStory}
                  onChange={handleStoryChange}
                />
                With story
              </label>
              <button
                className={`${loading ? "animate-pulse bg-black text-white px-4 rounded-md" : ""} hover:scale-105 hover:bg-black hover:text-white hover:rounded-full transition-all ease-linear duration-300`}
                onClick={query}
              >
                {" "}
                <ArrowBigRight />
              </button>
            </div>
          </div>

          <div className="flex flex-col-reverse sm:flex-row gap-4 items-center justify-center overflow-y-auto">
            {pending && (
              <>
                {" "}
                <div className="flex flex-col gap-4">
                  <Skeleton className="h-4 w-[250px] bg-gray-500" />
                  <Skeleton className="h-4 w-[350px] bg-gray-500" />
                  <Skeleton className="h-4 w-[200px] sm:w-[450px] bg-gray-500" />
                  <Skeleton className="h-4 w-[250px] bg-gray-500" />
                </div>{" "}
              </>
            )}
            <div className="sm:w-[1/2] w-[80vw] max-h-[600px]">
              <Markdown>{output}</Markdown>
            </div>

            {loading && (
              <Skeleton className="h-[400px] sm:h-[600px]  bg-gray-500 w-[80vw] sm:w-[600px] rounded-xl" />
            )}
            {img && (
              <>
                {" "}
                <Image
                  id="area"
                  width={600}
                  height={600}
                  className="rounded-md my-5 shadow-lg w-[80vw] sm:w-[500px]  sm:h-[500px]  inline-block opacity-[100%]"
                  src={img}
                  alt={"imagge"}
                />
              </>
            )}
          </div>

          {img && (
            <button
              onClick={handleDownload}
              className="px-8 py-2 rounded-full relative bg-slate-700 text-white text-sm hover:shadow-2xl hover:shadow-white/[0.1] transition duration-200 border border-slate-600"
            >
              <div className="absolute inset-x-0 h-px w-1/2 mx-auto -top-px shadow-2xl  bg-gradient-to-r from-transparent via-teal-500 to-transparent" />
              <span className="relative z-20">Download Image</span>
            </button>
          )}
        </div>
        {/* <div className='w-[40%] relative flex justify-center'><Image src={'/dr3.png'} alt={''} width={500} className='relative' height={500} /> <div className='w-48 h-48 bg-red-400 blur-3xl absolute top-0 left-20 -z-10'></div></div> */}
      </div>
    </>
  );
};

export default Home;
