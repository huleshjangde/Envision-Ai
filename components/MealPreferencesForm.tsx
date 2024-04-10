"use client";
import React, { useState } from "react";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";

export default function DietPlannerForm({ call }: any) {
  const [formData, setFormData] = useState<any>({
    dietaryRestrictions: [],
    cuisinePreferences: [],
    calorieGoals: "",
    mealsPerDay: "",
  });

  const handleChange = (name: string, value: string | string[]) => {
    setFormData((prevData: any) => ({
      ...prevData,
      [name]: value,
    }));
  };

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    console.log("Form submitted:", formData);
    let prompt = `I'm interested in creating a meal plan to improve my diet. Here are my preferences:
- Dietary Restrictions: ${formData.dietaryRestrictions.length > 0 ? formData.dietaryRestrictions.join(", ") : "None"}
- Cuisine Preferences: ${formData.cuisinePreferences.length > 0 ? formData.cuisinePreferences.join(", ") : "None"}
- Calorie Goals: ${formData.calorieGoals ? formData.calorieGoals : "Not specified"}
- Meals Per Day: ${formData.mealsPerDay ? formData.mealsPerDay : "Not specified"}

Please provide me with your customized meal plan based on these preferences. Thank you! `;
    call(prompt);
  };

  const dietaryRestrictionsOptions = ["Vegetarian", "Vegan", "Gluten-free"];
  const cuisinePreferencesOptions = ["Italian", "Mexican", "Asian"];

  return (
    <div className="w-full px-4 border-2 overflow-y-auto border-gray-200 py-5 shadow-md">
      <h1 className="text-4xl font-bold text-center text-blue-500">
        Build Your Balanced Diet
      </h1>
      <p className="text-gray-700 text-center">
        Empowering Your Health, One Meal at a Time
      </p>
      <form
        onSubmit={handleSubmit}
        className="flex flex-col gap-5 py-3 mt-4 mb-5"
      >
        <div className="flex flex-col gap-2">
          <Label className="text-lg font-bold">
            {" "}
            <span className="px-2 rounded-md py-1 w-fit mr-2 bg-green-700 text-white">
              {1}
            </span>{" "}
            Dietary Restrictions:
          </Label>
          <div className="space-y-2">
            {dietaryRestrictionsOptions.map((option, index) => (
              <label key={index} className="inline-flex items-center">
                <input
                  type="checkbox"
                  className="mr-4 ml-2"
                  value={option}
                  checked={formData.dietaryRestrictions.includes(option)}
                  onChange={(e) => {
                    const isChecked = e.target.checked;
                    const value = e.target.value;
                    if (isChecked) {
                      handleChange("dietaryRestrictions", [
                        ...formData.dietaryRestrictions,
                        value,
                      ]);
                    } else {
                      handleChange(
                        "dietaryRestrictions",
                        formData.dietaryRestrictions.filter(
                          (item: string) => item !== value,
                        ),
                      );
                    }
                  }}
                />
                {option}
              </label>
            ))}
          </div>
        </div>

        <div className="flex flex-col gap-2">
          <Label className="text-lg font-bold">
            {" "}
            <span className="px-2 rounded-md py-1 w-fit mr-2 bg-green-700 text-white">
              {2}
            </span>{" "}
            Cuisine Preferences:
          </Label>
          <div className="space-y-2">
            {cuisinePreferencesOptions.map((option, index) => (
              <label key={index} className="inline-flex items-center">
                <input
                  type="checkbox"
                  className="mr-4 ml-2"
                  value={option}
                  checked={formData.cuisinePreferences.includes(option)}
                  onChange={(e) => {
                    const isChecked = e.target.checked;
                    const value = e.target.value;
                    if (isChecked) {
                      handleChange("cuisinePreferences", [
                        ...formData.cuisinePreferences,
                        value,
                      ]);
                    } else {
                      handleChange(
                        "cuisinePreferences",
                        formData.cuisinePreferences.filter(
                          (item: string) => item !== value,
                        ),
                      );
                    }
                  }}
                />
                {option}
              </label>
            ))}
          </div>
        </div>

        <div className="flex flex-col gap-2">
          <Label className="text-lg font-bold">
            <span className="px-2 rounded-md py-1 w-fit mr-2 bg-green-700 text-white">
              {3}
            </span>{" "}
            Calorie Goals:
          </Label>
          <Input
            type="number"
            value={formData.calorieGoals}
            onChange={(e) => handleChange("calorieGoals", e.target.value)}
            placeholder="Enter calorie goal per day"
          />
        </div>

        <div className="flex flex-col gap-2">
          <Label className="text-lg font-bold">
            <span className="px-2 rounded-md py-1 w-fit mr-2 bg-green-700 text-white">
              {4}
            </span>{" "}
            Number of Meals per Day:
          </Label>
          <Input
            type="number"
            value={formData.mealsPerDay}
            onChange={(e) => handleChange("mealsPerDay", e.target.value)}
            placeholder="Enter number of meals per day"
          />
        </div>

        <button
          type="submit"
          className="bg-blue-500 hover:bg-blue-600 text-white font-bold text-xl py-2 px-4 rounded"
        >
          Generate Meal 🍑🍊🍎🍓🍅🫑 Plan
        </button>
      </form>
    </div>
  );
}
