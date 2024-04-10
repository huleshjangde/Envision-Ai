"use client";
import HeartDiseaseForm from "@/components/HeartDiseaseForm";
import React, { useState } from "react";
import Markdown from "markdown-to-jsx";
const { GoogleGenerativeAI } = require("@google/generative-ai");
const genAI = new GoogleGenerativeAI("AIzaSyAHAHgWkZJmzBv8ug2wlTIqPKGUGG7Xm0g");

const Page = () => {
  const model = genAI.getGenerativeModel({ model: "gemini-pro" });

  const [output, setOutput] = useState("");
  const [status, setStaus] = useState("");
  const [pending, setPending] = useState(false);

  async function result(prompt: string, status: string) {
    // For text-only input, use the gemini-pro model
    setStaus(status);
    setPending(true);
    setOutput("");

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
      <div className="flex w-screen max-h-[90vh] px-20 mt-20">
        <HeartDiseaseForm call={result} />
        <div
          className={`w-1/2 static overflow-y-auto right-0 px-5 ${status == "yes" ? "bg-red-500/40" : "bg-green-400/25"}  font-bold text-slate-500 prose py-10 `}
        >
          {" "}
          <Markdown>{output}</Markdown>
          {/* {output ? (
            <p className="font-bold">
              Disclaimer: The AI prediction is for informational purposes only
              and should not replace professional medical advice. The accuracy
              is not guaranteed. Consult a healthcare provider for medical
              decisions.
            </p>
          ) : (
            <p className="text-gray-600">
              Please fill out the form and submit to receive a prediction about
              your heart health.
            </p>
          )} */}
          {output ? (
            <p className="font-bold text-black/85 bg-white/80 px-4 py-2 rounded-md mt-10">
              Disclaimer: The AI prediction is for informational purposes only
              and should not replace professional medical advice. The accuracy
              is not guaranteed. Consult a healthcare provider for medical
              decisions.
            </p>
          ) : pending == true ? (
            <div className="flex items-center justify-center">
              <div className="w-6 h-6 border-t-2 border-b-2 border-black rounded-full animate-spin"></div>
              <p className="ml-2 text-black">
                Generating prediction about your heart health...
              </p>
            </div>
          ) : (
            <p className="text-xl">
              {" "}
              Please fill out the form and submit to receive a prediction about
              your heart health.
            </p>
          )}
        </div>
      </div>
    </>
  );
};

export default Page;
