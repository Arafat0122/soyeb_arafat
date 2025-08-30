import Buttons from '@/common/Buttons/Buttons';
import React from 'react';

const ContactBanner = () => {
    return (
        <div className="pt-[80px]">
        <div className="bg-gray-950 rounded-b-[60px]">
          <div className="flex flex-col-reverse items-center justify-between gap-8 px-6 py-16 mx-auto max-w-7xl md:flex-row md:px-8">
            <div className="text-center md:text-left md:w-1/2">
              <h2 className="text-3xl font-bold text-white md:text-5xl">
                Let’s Work Together
              </h2>
              <p className="mt-4 text-gray-300 md:text-lg">
                Have an idea or a project in mind? I’m always excited to
              collaborate and bring visions to life. Reach out to me, and
              let’s create something amazing together.
              </p>
              <div className="mt-6">
                <Buttons btnText="Get in Touch" />
              </div>
            </div>

            
            <div className="flex justify-center md:w-1/2">
              <img
                src="/contact-banner.png"
                alt="Project Banner"
                className="h-full max-h-[400px] max-w-[400px] w-full shadow-lg rounded-xl"
              />
            </div>
          </div>
        </div>

        
      </div>
    );
};

export default ContactBanner;