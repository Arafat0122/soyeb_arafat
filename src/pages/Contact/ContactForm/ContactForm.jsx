import React from "react";
import Buttons from "@/common/Buttons/Buttons";

const ContactForm = () => {
  return (
    <div className="px-6 text-white">
      <form className="p-8 space-y-6 bg-gray-950 rounded-2xl">
        <div className="flex flex-col space-y-2">
          <label className="text-sm font-medium text-white">Full Name*</label>
          <input
            type="text"
            placeholder="Enter your full name"
            className="w-full px-1 py-2 text-white placeholder-gray-500 bg-transparent border-b border-gray-600 focus:border-blue-500 focus:outline-none"
          />
        </div>

        <div className="grid gap-6 md:grid-cols-2">
          <div className="flex flex-col space-y-2">
            <label className="text-sm font-medium text-white">
              Email Address*
            </label>
            <input
              type="email"
              placeholder="example@email.com"
              className="w-full px-1 py-2 text-white placeholder-gray-500 bg-transparent border-b border-gray-600 focus:border-blue-500 focus:outline-none"
            />
          </div>
          <div className="flex flex-col space-y-2">
            <label className="text-sm font-medium text-white">
              Phone (Whatsapp)*
            </label>
            <input
              type="text"
              placeholder="+8801*******"
              className="w-full px-1 py-2 text-white placeholder-gray-500 bg-transparent border-b border-gray-600 focus:border-blue-500 focus:outline-none"
            />
          </div>
        </div>

        <div className="grid gap-6 md:grid-cols-2">
          <div className="flex flex-col space-y-2">
            <label className="text-sm font-medium text-white">Services*</label>
            <input
              type="text"
              placeholder="Insert Your  Service"
              className="w-full px-1 py-2 text-white placeholder-gray-500 bg-transparent border-b border-gray-600 focus:border-blue-500 focus:outline-none"
            />
          </div>
          <div className="flex flex-col space-y-2">
            <label className="text-sm font-medium text-white">
              Project Budget*
            </label>
            <input
              type="text"
              placeholder="Insert Your Range"
              className="w-full px-1 py-2 text-white placeholder-gray-500 bg-transparent border-b border-gray-600 focus:border-blue-500 focus:outline-none"
            />
          </div>
        </div>

        <div className="flex flex-col space-y-2">
          <label className="text-sm font-medium text-white">
            Project Details*
          </label>
          <textarea
            rows="5"
            placeholder="Tell us more about your project..."
            className="w-full px-1 py-2 text-white placeholder-gray-500 bg-transparent border-b border-gray-600 focus:border-blue-500 focus:outline-none"
          ></textarea>
        </div>

        <Buttons btnText="Send Message" />
      </form>
    </div>
  );
};

export default ContactForm;
