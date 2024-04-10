"use client";
import React, { useState } from "react";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { HeartIcon } from "./Icons";

export default function HeartDiseaseForm({ call }: any) {
  const [prediction, setPrediction] = useState(null);
  const [formData, setFormData] = useState<any>({
    age: "",
    sex: "",
    cp: "",
    trestbps: "",
    chol: "",
    fbs: "",
    restecg: "",
    thalach: "",
    exang: "",
    oldpeak: "",
    slope: "",
    ca: "",
    thal: "",
  });

  const handleChange = (name: any, value: any) => {
    setFormData((prevData: any) => ({
      ...prevData,
      [name]: value,
    }));
  };

  const handleSubmit = async (e: any) => {
    e.preventDefault();

    try {
      const response = await fetch("http://localhost:8000/predict/", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(formData),
      });

      if (response.ok) {
        const data = await response.json();
        // Handle successful prediction response
        console.log(data.prediction);
        if (data.prediction == "Patient Does Not Have Any Heart Disease") {
          let prompt = `your are heart patient docter and Patient Does Not Have Any Heart Disease please write good msg suggestion for good health patients details Age: ${formData.age}
            Gender: ${formData.sex === 0 ? "Female" : "Male"}
            Chest Pain Type: ${formData.cp}
            Resting Blood Pressure: ${formData.trestbps} mm Hg
            Serum Cholesterol: ${formData.chol} mg/dl
            Fasting Blood Sugar: ${formData.fbs}
            Resting Electrocardiographic Results: ${formData.restecg}
            Maximum Heart Rate Achieved: ${formData.thalach}
            Exercise Induced Angina: ${formData.exang}
            ST Depression Induced by Exercise: ${formData.oldpeak}
            Slope of the Peak Exercise ST Segment: ${formData.slope}
            Number of Major Vessels Colored by Fluoroscopy: ${formData.ca}
            Thalassemia: ${formData.thal} `;

          call(prompt, "no");
        } else {
          let prompt = `your are heart patient docter and Patient Has Heart Disease, They Need More Tests, please suggest test for patient here is the patients details Age: ${formData.age}
            Gender: ${formData.sex === 0 ? "Female" : "Male"}
            Chest Pain Type: ${formData.cp}
            Resting Blood Pressure: ${formData.trestbps} mm Hg
            Serum Cholesterol: ${formData.chol} mg/dl
            Fasting Blood Sugar: ${formData.fbs}
            Resting Electrocardiographic Results: ${formData.restecg}
            Maximum Heart Rate Achieved: ${formData.thalach}
            Exercise Induced Angina: ${formData.exang}
            ST Depression Induced by Exercise: ${formData.oldpeak}
            Slope of the Peak Exercise ST Segment: ${formData.slope}
            Number of Major Vessels Colored by Fluoroscopy: ${formData.ca}
            Thalassemia: ${formData.thal}`;
          console.log("====================================");
          console.log(prompt);
          call(prompt, "yes");
          console.log("====================================");
        }
        setPrediction(data.prediction);
      } else {
        // Handle error response
        console.error("Prediction error");
      }
    } catch (error: any) {
      console.error("Prediction error:", error.message);
    }
  };

  const fields = [
    { name: "age", label: "Age" },
    { name: "sex", label: "Gender ( 0 = Female 1 = Male)" },
    { name: "cp", label: "Chest Pain Type" },
    { name: "trestbps", label: "Resting Blood Pressure" },
    { name: "chol", label: "Serum Cholesterol" },
    { name: "fbs", label: "Fasting Blood Sugar" },
    { name: "restecg", label: "Resting Electrocardiographic Results" },
    { name: "thalach", label: "Maximum Heart Rate Achieved" },
    { name: "exang", label: "Exercise Induced Angina" },
    {
      name: "oldpeak",
      label: "ST Depression Induced by Exercise Relative to Rest",
    },
    { name: "slope", label: "Slope of the Peak Exercise ST Segment" },
    { name: "ca", label: "Number of Major Vessels Colored by Fluoroscopy" },
    { name: "thal", label: "Thalassemia" },
  ];

  return (
    <div className="w-1/2 px-4 border-2 overflow-y-auto border-gray-200 py-5 shadow-md">
      <h1 className="text-4xl font-bold text-center text-red-500">
        Heart Health Evaluation
      </h1>
      <p className="text-center">
        Empowering Your Health with Advanced Predictive Analysis
      </p>
      <form
        onSubmit={handleSubmit}
        className="flex flex-col gap-5 py-3 mt-4 mb-5"
      >
        {fields.map((field, index) => (
          <div key={field.name} className="flex flex-col gap-2">
            <div className="flex">
              <span className="px-2 rounded-md py-1 mr-2 bg-green-700 text-white">
                {index + 1}
              </span>
              <Label className="text-lg font-bold" htmlFor={field.name}>
                {field.label}
              </Label>
            </div>
            <Input
              type="number"
              value={formData[field.name]}
              onChange={(e) => handleChange(field.name, e.target.value)}
              className="w-4/5 text-black"
              id={field.name}
              placeholder={`Enter ${field.label}`}
            />
          </div>
        ))}
        <button
          onClick={handleSubmit}
          className="bg-green-600 hover:bg-green-700 text-white font-bold py-2 px-4 rounded"
        >
          Predict Heart ❤️ Health
        </button>
      </form>

      {prediction && (
        <div>
          <h2>Prediction Result</h2>
          <p>{prediction}</p>
        </div>
      )}
    </div>
  );
}
