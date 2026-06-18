"use client";

import { useState } from "react";

const slides = [
  {
    title: "Design Meets Code",
    content: "How Figma designs become the live website you see online",
    type: "intro",
  },
  // ... (all the slide data)
];

export default function Slideshow() {
  const [current, setCurrent] = useState(0);

  const next = () => {
    if (current < slides.length - 1) setCurrent(current + 1);
  };

  const prev = () => {
    if (current > 0) setCurrent(current - 1);
  };

  const goToSlide = (index: number) => {
    setCurrent(index);
  };
  
  // ... rest of component
}