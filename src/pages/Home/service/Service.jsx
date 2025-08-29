import { Check, CircleCheckBig } from "lucide-react";
import React from "react";
import Buttons from "../../../common/Buttons/Buttons";

const Service = () => {
  return (
    <div className="mx-auto cards-container max-w-7xl py-[120px] ">
      <div className="flex gap-12 mb-[40px]">
        <h1 className="text-4xl font-bold text-gray-950 w-[50%]">
          Main Service's
        </h1>
        <p className="text-xl text-gray-700 w-[90%]">
          Explore the key services I offer to help businesses and projects grow.
          From creating intuitive UI/UX designs to building responsive web
          applications and providing expert consultations, each service is
          crafted with attention to detail and a focus on delivering measurable
          results.
        </p>
      </div>
      <div className="grid grid-cols-3 gap-[30px]">
        <div className="p-4 card">
          <img src="/webDev.png" alt="Service" className="rounded-xl" />
          <h6 className="pt-5 text-3xl font-medium text-gray-950">Design</h6>
          <div className="card-overlay bottom">
            <div className="max-w-4xl p-6 mx-auto">
              <h2 className="mb-4 text-3xl font-bold ">Design</h2>
              <p className="mb-6 font-normal text-gray-200">
                Focused on blending usability with style, our designs make every
                click intuitive, every screen engaging, and every interaction
                align seamlessly with your brand.
              </p>

              <ul className="space-y-4 font-normal">
                <li className="flex items-center gap-4 ">
                  <span className="flex items-center justify-center p-2 text-gray-200">
                    <CircleCheckBig size={26} />
                  </span>
                  <span className="">User Research & Journey Mapping</span>
                </li>

                <li className="flex items-center gap-4">
                  <span className="flex items-center justify-center p-2 text-white ">
                    <CircleCheckBig size={26} />
                  </span>
                  <span className="text-gray-200">Visual Interface Design</span>
                </li>

                <li className="flex items-center gap-4">
                  <span className="flex items-center justify-center p-2 text-white l">
                    <CircleCheckBig size={26} />
                  </span>
                  <span className="text-gray-200">
                    Interaction & Prototyping
                  </span>
                </li>
              </ul>
              <div className="mt-[20px]">
                <Buttons btnText="Get a Service" />
              </div>
            </div>
          </div>
        </div>
        <div className="p-4 card">
          <img src="/webDev.png" alt="Service" className="rounded-xl" />
          <h6 className="pt-5 text-3xl font-medium text-gray-950">
            {" "}
            Web Development
          </h6>
          <div className="card-overlay bottom">
            <div className="max-w-4xl p-6 mx-auto">
              <h2 className="mb-4 text-3xl font-bold ">Design</h2>
              <p className="mb-6 font-normal text-gray-200">
                Focused on blending usability with style, our designs make every
                click intuitive, every screen engaging, and every interaction
                align seamlessly with your brand.
              </p>

              <ul className="space-y-4 font-normal">
                <li className="flex items-center gap-4 ">
                  <span className="flex items-center justify-center p-2 text-gray-200">
                    <CircleCheckBig size={26} />
                  </span>
                  <span className="">User Research & Journey Mapping</span>
                </li>

                <li className="flex items-center gap-4">
                  <span className="flex items-center justify-center p-2 text-white ">
                    <CircleCheckBig size={26} />
                  </span>
                  <span className="text-gray-200">Visual Interface Design</span>
                </li>

                <li className="flex items-center gap-4">
                  <span className="flex items-center justify-center p-2 text-white l">
                    <CircleCheckBig size={26} />
                  </span>
                  <span className="text-gray-200">
                    Interaction & Prototyping
                  </span>
                </li>
              </ul>
              <div className="mt-[20px]">
                <Buttons btnText="Get a Service" />
              </div>
            </div>
          </div>
        </div>
        <div className="p-4 card">
          <img src="/webDev.png" alt="Service" className="rounded-xl" />
          <h6 className="pt-5 text-3xl font-medium text-gray-950">
            {" "}
            Consultation
          </h6>
          <div className="card-overlay bottom">
            <div className="max-w-4xl p-6 mx-auto">
              <h2 className="mb-4 text-3xl font-bold ">Design</h2>
              <p className="mb-6 font-normal text-gray-200">
                Focused on blending usability with style, our designs make every
                click intuitive, every screen engaging, and every interaction
                align seamlessly with your brand.
              </p>

              <ul className="space-y-4 font-normal">
                <li className="flex items-center gap-4 ">
                  <span className="flex items-center justify-center p-2 text-gray-200">
                    <CircleCheckBig size={26} />
                  </span>
                  <span className="">User Research & Journey Mapping</span>
                </li>

                <li className="flex items-center gap-4">
                  <span className="flex items-center justify-center p-2 text-white ">
                    <CircleCheckBig size={26} />
                  </span>
                  <span className="text-gray-200">Visual Interface Design</span>
                </li>

                <li className="flex items-center gap-4">
                  <span className="flex items-center justify-center p-2 text-white l">
                    <CircleCheckBig size={26} />
                  </span>
                  <span className="text-gray-200">
                    Interaction & Prototyping
                  </span>
                </li>
              </ul>
              <div className="mt-[20px]">
                <Buttons btnText="Get a Service" />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Service;
