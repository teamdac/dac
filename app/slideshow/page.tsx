"use client";

import { useState } from "react";

const slides = [
  {
    title: "Design Meets Code",
    content: "How Figma designs become the live website you see online",
    type: "intro",
  },
  {
    title: "1. Design in Figma",
    content: "Alyssa designs the visual look in Figma",
    items: [
      { icon: "📐", label: "Layout", desc: "How each page is positioned" },
      { icon: "🎨", label: "Colors", desc: "Color palette and styling" },
      { icon: "✍️", label: "Typography", desc: "Fonts and text styling" },
      { icon: "🧩", label: "Components", desc: "Buttons, cards, inputs" },
    ],
  },
  {
    title: "2. Code the Website",
    content: "I take the design and code it in React/Next.js",
    items: [
      { icon: "📄", label: "Pages", desc: "All 9 pages working" },
      { icon: "⚙️", label: "Functionality", desc: "Buttons, forms work" },
      { icon: "📱", label: "Responsive", desc: "Works on all devices" },
      { icon: "☁️", label: "Deployed", desc: "Live online" },
    ],
  },
  {
    title: "3. Design → Code Connection",
    content: "The Figma design and live website are the same thing",
    twoColumn: true,
  },
  {
    title: "4. How We Work Together",
    content: "Simple and iterative workflow",
    steps: true,
  },
  {
    title: "5. What Alyssa Does Next",
    content: "Your turn! Here's what we need",
    items: [
      { icon: "🎯", label: "Design Each Page", desc: "All 9 pages" },
      { icon: "🎨", label: "Choose Colors & Fonts", desc: "Visual style" },
      { icon: "📐", label: "Create Components", desc: "Reusable elements" },
      { icon: "📤", label: "Share the File", desc: "Send Figma link" },
    ],
  },
];

export default function Slideshow() {
  const [current, setCurrent] = useState(0);

  const next = () => {
    if (current < slides.length - 1) setCurrent(current + 1);
  };

  const prev = () => {
    if (current > 0) setCurrent(current - 1);
  };

  const slide = slides[current];

  return (
    <div className="min-h-screen bg-gray-100 py-8 px-4">
      <div className="max-w-2xl mx-auto bg-white rounded-lg shadow-lg p-12 min-h-96">
        {/* Slide Content */}
        <div className="mb-8">
          <h1 className="text-4xl font-bold mb-6 text-gray-900">{slide.title}</h1>
          <p className="text-lg text-gray-600 mb-8">{slide.content}</p>

          {/* Intro Slide */}
          {slide.type === "intro" && (
            <div className="flex justify-center items-center gap-8 my-12 flex-wrap">
              <div className="text-center">
                <div className="text-6xl mb-2">🎨</div>
                <p className="text-sm font-medium">Design in Figma</p>
              </div>
              <div className="text-3xl text-gray-400">→</div>
              <div className="text-center">
                <div className="text-6xl mb-2">💻</div>
                <p className="text-sm font-medium">Code in React</p>
              </div>
              <div className="text-3xl text-gray-400">→</div>
              <div className="text-center">
                <div className="text-6xl mb-2">🌍</div>
                <p className="text-sm font-medium">Live Website</p>
              </div>
            </div>
          )}

          {/* Grid Items */}
          {slide.items && (
            <div className="grid grid-cols-2 gap-4 my-8">
              {slide.items.map((item, i) => (
                <div key={i} className="bg-blue-50 p-4 rounded-lg border border-blue-100">
                  <div className="text-3xl mb-2">{item.icon}</div>
                  <h3 className="font-semibold text-gray-900 mb-1">{item.label}</h3>
                  <p className="text-sm text-gray-600">{item.desc}</p>
                </div>
              ))}
            </div>
          )}

          {/* Two Column */}
          {slide.twoColumn && (
            <div className="grid grid-cols-2 gap-4 my-8">
              <div className="bg-blue-50 p-6 rounded-lg border border-blue-100">
                <h3 className="font-semibold text-lg mb-2">🎨 Figma (Design)</h3>
                <p className="text-sm text-gray-600">Visual mockups, colors, layouts, typography</p>
              </div>
              <div className="bg-blue-50 p-6 rounded-lg border border-blue-100">
                <h3 className="font-semibold text-lg mb-2">💻 Website (Code)</h3>
                <p className="text-sm text-gray-600">HTML, CSS, React, interactivity</p>
              </div>
            </div>
          )}

          {/* Steps */}
          {slide.steps && (
            <div className="space-y-4 my-8">
              {["Alyssa Designs", "I Code It", "Deploy Live", "She Sees It Live"].map((step, i) => (
                <div key={i} className="flex gap-4">
                  <div className="w-10 h-10 bg-blue-500 text-white rounded-full flex items-center justify-center font-bold flex-shrink-0">
                    {i + 1}
                  </div>
                  <div>
                    <p className="font-semibold text-gray-900">{step}</p>
                  </div>
                </div>
              ))}
            </div>
          )}
        </div>

        {/* Controls */}
        <div className="flex justify-between items-center pt-8 border-t border-gray-200">
          <button
            onClick={prev}
            disabled={current === 0}
            className="px-4 py-2 bg-blue-500 text-white rounded disabled:bg-gray-300 disabled:cursor-not-allowed hover:bg-blue-600"
          >
            ← Previous
          </button>

          <div className="flex gap-2">
            {slides.map((_, i) => (
              <button
                key={i}
                onClick={() => setCurrent(i)}
                className={`w-2 h-2 rounded-full transition-all ${
                  i === current ? "bg-blue-500 w-6" : "bg-gray-300"
                }`}
              />
            ))}
          </div>

          <button
            onClick={next}
            disabled={current === slides.length - 1}
            className="px-4 py-2 bg-blue-500 text-white rounded disabled:bg-gray-300 disabled:cursor-not-allowed hover:bg-blue-600"
          >
            Next →
          </button>
        </div>

        <div className="text-center mt-4 text-gray-600 text-sm">
          Slide {current + 1} of {slides.length}
        </div>
      </div>
    </div>
  );
}