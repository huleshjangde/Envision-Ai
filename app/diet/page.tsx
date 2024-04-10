"use client";
import MealPreferencesForm from "@/components/MealPreferencesForm";
import Markdown from "markdown-to-jsx";
import React, { useState } from "react";
const { GoogleGenerativeAI } = require("@google/generative-ai");
const genAI = new GoogleGenerativeAI("AIzaSyAHAHgWkZJmzBv8ug2wlTIqPKGUGG7Xm0g");

const Page = () => {
  const model = genAI.getGenerativeModel({ model: "gemini-pro" });

  const [output, setOutput] = useState("");
  const [status, setStaus] = useState("");
  const [pending, setPending] = useState(false);

  async function result(prompt: string) {
    // For text-only input, use the gemini-pro model
    setPending(true);
    setStaus(status);
    setOutput("");

    console.log("====================================");
    console.log(prompt);
    console.log("====================================");
    const result = await model.generateContent(prompt);
    const response = await result.response;

    const text = response.text();
    setPending(false);
    setOutput(text);
  }
  return (
    <>
      <div className="flex w-screen max-h-[90vh]  mt-20 px-20">
        <MealPreferencesForm call={result} />
        <div
          style={{ backgroundImage: "url('/diet.jpeg')" }}
          className={`bg-cover bg-center bg-opacity-60 w-1/2 static overflow-y-auto right-0 ${status == "yes" ? "bg-red-500/40" : "bg-green-400/25"}  font-bold text-slate-500 prose `}
        >
          <div className="bg-black bg-opacity-80 w-full h-fit px-5 py-5 text-xl text-green-500 sen">
            <Markdown>{output}</Markdown>
            {output ? (
              <p className="font-bold text-white">.</p>
            ) : pending == true ? (
              <div className="flex items-center justify-center">
                <div className="w-6 h-6 border-t-2 border-b-2 border-white rounded-full animate-spin"></div>
                <p className="ml-2 text-white">
                  Generating your personalized diet plan...
                </p>
              </div>
            ) : (
              <p>
                {" "}
                Please fill out the form and submit to receive a Your Diet plan.
              </p>
            )}
          </div>
        </div>
      </div>
    </>
  );
};

export default Page;
