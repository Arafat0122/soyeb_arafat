import React from "react";
import {
  Upload,
  FileText,
  Globe2,
  DollarSign,
  Code,
  Layers,
  Rocket,
} from "lucide-react";

const StartSelling = () => {
  return (
    <section className="px-4 mx-auto text-center md:py-12 max-w-7xl">
      <h1 className="text-2xl font-bold text-gray-900 md:text-3xl lg:text-5xl">
        How I Build Web Applications
      </h1>
      <div className="grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-4 f mt-9 md:mt-12 md:gap-8 lg:gap-12">
        {/* Step 1: Write Clean Code */}
        <div className="flex flex-col items-center w-full p-4 text-center transition-shadow duration-300 border rounded-lg shadow-sm hover:shadow-lg">
          <div className="flex items-center justify-center w-16 h-16 mb-4 text-indigo-700 bg-indigo-200 rounded-full">
            <Code size={28} />
          </div>
          <h3 className="text-lg font-semibold text-gray-700">Clean Code</h3>
          <p className="mt-1 text-sm text-gray-500">
            I write modern, scalable, and reusable code with best practices.
          </p>
        </div>

        {/* Step 2: Build & Design */}
        <div className="flex flex-col items-center p-4 text-center transition-shadow duration-300 border rounded-lg shadow-sm hover:shadow-lg">
          <div className="flex items-center justify-center w-16 h-16 mb-4 text-purple-700 bg-purple-200 rounded-full">
            <Layers size={28} />
          </div>
          <h3 className="text-lg font-semibold text-gray-700">
            Build & Design
          </h3>
          <p className="mt-1 text-sm text-gray-500">
            Crafting responsive, user-friendly, and aesthetic web interfaces.
          </p>
        </div>

        {/* Step 3: Global Reach */}
        <div className="flex flex-col items-center p-4 text-center transition-shadow duration-300 border rounded-lg shadow-sm hover:shadow-lg">
          <div className="flex items-center justify-center w-16 h-16 mb-4 text-green-700 bg-green-200 rounded-full">
            <Globe2 size={28} />
          </div>
          <h3 className="text-lg font-semibold text-gray-700">
            Global Standards
          </h3>
          <p className="mt-1 text-sm text-gray-500">
            Developing applications that meet global industry standards.
          </p>
        </div>

        {/* Step 4: Launch & Grow */}
        <div className="flex flex-col items-center p-4 text-center transition-shadow duration-300 border rounded-lg shadow-sm hover:shadow-lg">
          <div className="flex items-center justify-center w-16 h-16 mb-4 text-yellow-700 bg-yellow-200 rounded-full">
            <Rocket size={28} />
          </div>
          <h3 className="text-lg font-semibold text-gray-700">Launch & Grow</h3>
          <p className="mt-1 text-sm text-gray-500">
            Delivering and deploying projects that help businesses grow.
          </p>
        </div>
      </div>
    </section>
  );
};

export default StartSelling;
