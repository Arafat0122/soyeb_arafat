import Buttons from '@/common/Buttons/Buttons';

const ContactBanner = () => {
  return (
    <div className="pt-[80px]">
      <div className="bg-gray-950 rounded-b-2xl lg:rounded-b-[60px]">
        <div className="flex flex-col items-center justify-between gap-8 px-6 py-16 mx-auto max-w-7xl lg:flex-row md:px-8">
          <div className="text-left lg:w-1/2">
            <h2 className="text-3xl font-bold text-white md:text-5xl">
              Let’s Work Together
            </h2>
            <p className="mt-4 text-gray-300 md:text-lg">
              Have an idea or a project in mind? I’m always excited to
              collaborate and bring visions to life. Reach out to me, and
              let’s create something amazing together.
            </p>
            <div className="mt-6">
              <Buttons
                btnText="Get in Touch"
                phoneNumber="8801608318553"
                whatsappMessage="Hello Soyeb, I would like to get in touch with you regarding a project."
              />
            </div>
          </div>


          <div className="flex justify-end lg:w-1/2">
            <img
              src="/contact-banner.png"
              alt="Project Banner"
              className="h-full lg:max-h-[400px] lg:max-w-[400px] w-full shadow-lg rounded-xl lg:py-16"
            />
          </div>
        </div>
      </div>


    </div>
  );
};

export default ContactBanner;