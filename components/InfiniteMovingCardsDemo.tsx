"use client";

import React, { useEffect, useState } from "react";
import { InfiniteMovingCards } from "@/components/ui/infinite-moving-cards";

export function InfiniteMovingCardsDemo() {
  return (
    <div className=" rounded-md flex flex-col antialiased mt-5 dark:bg-black dark:bg-grid-white/[0.05] items-center justify-center relative overflow-hidden">
      <InfiniteMovingCards
        items={testimonials}
        direction="right"
        speed="slow"
      />
    </div>
  );
}
const testimonials = [
  {
    quote:
      "Working with VisionSync has completely transformed how we approach project planning. It's like having a seasoned project manager right at our fingertips, guiding us through every step of the process.",
    name: "John Doe",
    title: "CEO, XYZ Company",
  },
  {
    quote:
      "VisionSync has revolutionized the way we organize and execute our projects. With its intelligent planning capabilities, we've seen a significant increase in efficiency and a decrease in project turnaround time.",
    name: "Jane Smith",
    title: "Project Manager, ABC Inc.",
  },
  {
    quote:
      "As a freelance developer, time is of the essence. VisionSync has become my go-to solution for project planning. Its intuitive interface and intelligent suggestions have helped me streamline my workflow and deliver projects ahead of schedule.",
    name: "Samuel Johnson",
    title: "Freelance Developer",
  },
  {
    quote:
      "I've tried numerous project planning tools in the past, but none come close to the level of insight and guidance provided by VisionSync. It's like having a personal assistant dedicated to ensuring our projects are executed flawlessly.",
    name: "Emily Williams",
    title: "CTO, Tech Innovations Ltd.",
  },
  {
    quote:
      "VisionSync has become an indispensable part of our project management toolkit. Its intelligent recommendations and predictive analytics have helped us stay ahead of deadlines and exceed client expectations consistently.",
    name: "Michael Brown",
    title: "Project Lead, Global Solutions Inc.",
  },
];
