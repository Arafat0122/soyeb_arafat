import { ArrowUpRight } from "lucide-react";

const ContactInfo = () => {
  return (
    <div>
      <div className="flex flex-col justify-between p-6 bg-gray-950 rounded-2xl">
        <div className="p-3 md:p-6 bg-gray-900/90 rounded-2xl">
          <div className="flex flex-col items-center gap-4 md:flex-row">
            <img
              src="/WhatsApp Image 2025-08-31 at 01.23.41_385aecd7.jpg"
              alt="Shahinul Islam"
              className="w-24 rounded-full md:h-24 bg-green-950"
            />
            <div>
              <h3 className="text-xl font-semibold text-white">
                Soyeb Ahmed Arafat
              </h3>
              <p className="text-lg text-white">Dedicated Web Developer</p>
            </div>
            <ArrowUpRight className="hidden w-8 h-8 ml-auto bg-white rounded-full text-gray-950 md:block" />
          </div>
          <p className="mt-2 text-sm text-center text-gray-300 md:mt-6 md:text-left">
            We turn your vision into engaging experiences that get results.
            Let’s start creating something amazing today.
          </p>
        </div>
        <div className="mt-6 space-y-3 text-sm">
          <p>
            <p className="pt-3 pb-1 text-xl text-white">Email</p>{" "}
            <a
              href="mailto:soyebarafat0122@yahoo.com"
              className="text-xl font-semibold text-white"
            >
              soyebarafat0122@yahoo.com
            </a>
          </p>
          <p>
            <p className="pt-3 pb-1 text-xl text-white">Whatsapp</p>{" "}
            <a
              href="https://wa.me/8801608318553"
              target="_blank"
              className="text-xl font-semibold text-white"
            >
              +8801608318553
            </a>
          </p>
          <p>
            <p className="pt-3 pb-1 text-xl text-white">Phone Call</p>{" "}
            <a
              target="_blank"
              className="text-xl font-semibold text-white"
            >
              +8801317110122
            </a>
          </p>
        </div>
      </div>
    </div>
  );
};

export default ContactInfo;
