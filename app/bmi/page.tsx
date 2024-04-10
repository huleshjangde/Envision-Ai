"use client";
import BMIComponent from "@/components/Bmi";
import Markdown from "markdown-to-jsx";
import React, { useState } from "react";
const { GoogleGenerativeAI } = require("@google/generative-ai");
const genAI = new GoogleGenerativeAI("AIzaSyAHAHgWkZJmzBv8ug2wlTIqPKGUGG7Xm0g");
const Page = () => {
  const [output, setOutput] = useState("");
  const [pending, setPending] = useState(false);
  const model = genAI.getGenerativeModel({ model: "gemini-pro" });
  async function result(prompt: string) {
    // For text-only input, use the gemini-pro model
    setOutput("");

    setPending(true);
    console.log("====================================");
    console.log(prompt);
    console.log("====================================");
    const result = await model.generateContent(prompt);
    const response = await result.response;

    const text = response.text();

    setOutput(text);
    setPending(false);
  }
  return (
    <>
      <div className="flex w-screen max-h-[90vh]  mt-20 px-20">
        <BMIComponent call={result} pending={setPending} />
        <div
          className={`bg-cover bg-center rounded-md  w-1/2 static overflow-y-auto right-0 bg-black/85  font-bold text-slate-300 prose `}
        >
          <div className=" bg-opacity-80 w-full h-fit px-5 py-5 text-xl  sen">
            <Markdown>{output}</Markdown>
            {output ? (
              <p className="font-bold text-white">.</p>
            ) : pending == true ? (
              <div className="flex items-center justify-center">
                <div className="w-6 h-6 border-t-2 border-b-2 border-white rounded-full animate-spin"></div>
                <p className="ml-2 text-white">Generating your BMI result...</p>
              </div>
            ) : (
              <p>
                {" "}
                Please fill out the form and submit to receive a BMI result.
              </p>
            )}

            {/* {
                pending ?  <div className="flex items-center justify-center">
                <div className="w-6 h-6 border-t-2 border-b-2 border-white rounded-full animate-spin"></div>
                <p className="ml-2 text-white">Generating your personalized diet plan...</p>
              </div> : "hello"
            } */}
          </div>
        </div>
      </div>
    </>
  );
};

export default Page;
