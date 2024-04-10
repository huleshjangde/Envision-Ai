"use client";
import React, { useState } from "react";
import {
  CardTitle,
  CardDescription,
  CardHeader,
  CardContent,
  CardFooter,
  Card,
} from "@/components/ui/card";
import { Label } from "@/components/ui/label";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";

export default function BMIComponent({ call, setPending }: any) {
  const [height, setHeight] = useState("");
  const [weight, setWeight] = useState("");
  const [bmi, setBMI] = useState(null);
  const [status, setStatus] = useState("");

  const calculateBMI = () => {
    // Convert height from cm to meters

    const heightInMeters = Number(height) / 100;
    // Calculate BMI
    const bmiValue = Number(weight) / (heightInMeters * heightInMeters);
    // Round to two decimal places
    const roundedBMI = bmiValue.toFixed(2);
    // Update state with calculated BMI
    setBMI(roundedBMI as any);

    // Determine BMI status based on the value
    call(
      `Hi, I just calculated my BMI and it's ${bmiValue}. My height is ${heightInMeters} meters, and my weight is ${weight} kg. What does this mean for my health, and what should I do next?`,
    );
    if (bmiValue < 18.5) {
      setStatus("Underweight");
    } else if (bmiValue >= 18.5 && bmiValue < 24.9) {
      setStatus("Normal weight");
    } else if (bmiValue >= 24.9 && bmiValue < 29.9) {
      setStatus("Overweight");
    } else {
      setStatus("Obese");
    }
  };

  const resetForm = () => {
    // Reset form fields, BMI value, and status
    setHeight("");
    setWeight("");
    setBMI(null);
    setStatus("");
  };

  return (
    <Card className="w-[60%]">
      <CardHeader>
        <CardTitle className="text-2xl">BMI Calculator</CardTitle>
        <CardDescription>
          Enter your height and weight to calculate your BMI.
        </CardDescription>
      </CardHeader>
      <CardContent className="flex flex-col gap-4">
        <div className="grid grid-cols-2 gap-4">
          <div className="flex flex-col gap-3">
            <Label htmlFor="height">Height (cm)</Label>
            <Input
              id="height"
              placeholder="Enter your height"
              type="number"
              value={height}
              onChange={(e) => setHeight(e.target.value)}
            />
          </div>
          <div className="flex flex-col gap-3">
            <Label htmlFor="weight">Weight (kg)</Label>
            <Input
              id="weight"
              placeholder="Enter your weight"
              type="number"
              value={weight}
              onChange={(e) => setWeight(e.target.value)}
            />
          </div>
        </div>
        <Button onClick={calculateBMI}>Calculate</Button>
        {bmi && (
          <div>
            <Label htmlFor="bmi">Your BMI:</Label>
            <p id="bmi">{bmi}</p>
            <Label htmlFor="status">Status:</Label>
            <p id="status">{status}</p>
          </div>
        )}
      </CardContent>
      <CardFooter className="flex items-center justify-between">
        <Button size="sm" onClick={resetForm}>
          Reset
        </Button>
      </CardFooter>
    </Card>
  );
}
