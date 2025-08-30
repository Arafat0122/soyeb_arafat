import { CircleCheckBig } from "lucide-react";
import Buttons from "../../../common/Buttons/Buttons";

const Service = () => {
  const services = [
    {
      title: "Web Design",
      img: "/webDev.png",
      description:
        "Crafting visually appealing and user-friendly interfaces that make every interaction seamless. I focus on clarity, usability, and aligning design with your brand identity.",
      features: [
        "User Research & Journey Mapping",
        "Visual Interface Design",
        "Interaction & Prototyping",
      ],
    },
    {
      title: "Web Development",
      img: "/webDev.png",
      description:
        "Building responsive, high-performance websites and web applications with modern technologies. My development ensures scalability, fast loading, and cross-device compatibility.",
      features: [
        "Front-End Development (React, Tailwind, Next.js)",
        "Back-End & API Integration (Node.js, Express, MongoDB)",
        "Responsive Designs",
      ],
    },
    {
      title: "Consultation",
      img: "/webDev.png",
      description:
        "Providing expert guidance on web strategy, technology selection, and best practices to help you bring your digital projects to life efficiently and effectively.",
      features: [
        "Project Planning & Roadmaps",
        "UI/UX Feedback & Optimization",
        "Tech Stack Recommendations",
      ],
    },
  ];

  return (
    <div className="mx-auto cards-container max-w-7xl px-4 pb-10 md:py-20 lg:py-[120px]">
      <div className="flex flex-col md:flex-row gap-4 md:gap-12 mb-[20px] md:mb-[40px]">
        <h1 className="text-[22px] md:text-4xl font-bold text-gray-950 md:w-[50%]">
          Main Services
        </h1>
        <p className="text-base md:text-xl text-gray-700 md:w-[90%]">
          These are the core services I offer to help clients bring their ideas
          to life online. From building responsive websites to crafting
          intuitive designs and providing expert guidance, every service is
          designed to deliver tangible results.
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-[30px]">
        {services.map((service, index) => (
          <div key={index} className="p-4 card">
            <img src={service.img} alt={service.title} className="rounded-xl" />
            <h6 className="pt-5 text-3xl font-medium text-gray-950">
              {service.title}
            </h6>
            <div className="card-overlay bottom">
              <div className="max-w-4xl p-6 mx-auto">
                <h2 className="mb-4 text-3xl font-bold">{service.title}</h2>
                <p className="mb-6 font-normal text-gray-200">{service.description}</p>
                <ul className="space-y-4 font-normal">
                  {service.features.map((feature, i) => (
                    <li key={i} className="flex items-center gap-4">
                      <span className="flex items-center justify-center p-2 text-white">
                        <CircleCheckBig size={26} />
                      </span>
                      <span className="text-gray-200">{feature}</span>
                    </li>
                  ))}
                </ul>
                <div className="mt-[20px]">
                  <Buttons btnText="Get a Service" />
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Service;