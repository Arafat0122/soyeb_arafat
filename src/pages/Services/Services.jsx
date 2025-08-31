import Buttons from "@/common/Buttons/Buttons";
import MotionWrapper from "@/common/MotionWrapper/MotionWrapper";
import { CircleCheckBig } from "lucide-react";

const services = [
  {
    title: "Web Development",
    description:
      "Building responsive, scalable, and high-performance web applications using the MERN stack. From front-end UI to back-end APIs, I deliver complete solutions.",
    features: [
      "Front-End Development",
      "Back-End & API Integration",
      "Full-Stack MERN Applications",
    ],
    img: "/webDev.png",
  },
  {
    title: "UI/UX & Responsive Design",
    description:
      "Crafting intuitive and visually appealing interfaces that are mobile-friendly and engaging for every user.",
    features: [
      "Wireframes & Prototypes",
      "User-Centered Design",
      "Landing Pages & Marketing Pages",
    ],
    img: "/webDesign.png",
  },
  {
    title: "API Integrations",
    description:
      "Seamlessly integrate APIs and external services to enhance website functionality and interactivity.",
    features: [
      "Payment Gateway Integration (Stripe, PayPal)",
      "Calendly, Social Media & Other APIs",
      "Real-Time Features with Firebase",
    ],
    img: "/apiIntegration.png",
  },
  {
    title: "Performance & SEO Optimization",
    description:
      "Optimizing websites for speed, SEO, and accessibility to improve user experience and search engine rankings.",
    features: [
      "Fast Loading Websites",
      "SEO-Friendly Development",
      "Accessibility (WCAG) Compliance",
    ],
    img: "/seo.png",
  },
  {
    title: "Consultation & Web Strategy",
    description:
      "Providing expert guidance on tech stack, performance improvements, and scalable web solutions tailored to your business goals.",
    features: [
      "Project Planning & Roadmaps",
      "Tech Stack Recommendations",
      "UI/UX & Performance Feedback",
    ],
    img: "/consultation.png",
  },
];

const Services = () => {
  const whatsappNumber = "+8801608318553";

  return (
    <div className="py-[80px]">
      {/* Hero Section */}
      <div className="bg-gray-950 rounded-b-2xl lg:rounded-b-[60px]">
        <MotionWrapper direction="up" delay={0.1}>
          <div className="flex flex-col items-center justify-between gap-12 px-4 py-20 mx-auto max-w-7xl lg:flex-row md:px-8">
            {/* Left Content */}
            <div className=" md:text-left lg:w-1/2">
              <h2 className="text-3xl font-bold text-white md:text-5xl">
                Vision Into Reality
              </h2>
              <p className="mt-4 leading-relaxed text-gray-300 md:text-lg">
                I deliver web solutions that combine cutting-edge technology,
                seamless design, and measurable results. From responsive web
                apps to interactive features, every service is crafted to help
                you achieve your business goals.
              </p>
              <div className="mt-6">
                <Buttons btnText="Explore Services" />
              </div>
            </div>

            {/* Right Image */}
            <div className="flex justify-center md:justify-end lg:w-1/2">
              <img
                src="/Services.png"
                alt="Services Banner"
                className="h-auto lg:max-h-[400px] w-full  lg:py-[72px]"
              />
            </div>
          </div>
        </MotionWrapper>
      </div>

      {/* Services Grid */}
      <div className="grid grid-cols-1 gap-10 px-4 pt-12 mx-auto md:pt-24 md:grid-cols-2 lg:grid-cols-3 max-w-7xl">
        {services.map((service, index) => (
          <MotionWrapper direction="up" delay={0.1}>
            <div
              key={index}
              className="relative flex flex-col transition-all duration-500 transform bg-white shadow-lg rounded-2xl group hover:-translate-y-3 hover:shadow-3xl max-h-[600px] h-full"
            >
              {/* Card Image */}
              <div className="overflow-hidden rounded-t-2xl">
                <img
                  src={service.img}
                  alt={service.title}
                  className="object-cover w-full transition-transform duration-500 h-52 group-hover:scale-105"
                />
              </div>

              {/* Card Content */}
              <div className="flex flex-col flex-1 p-6">
                <div>
                  <h3 className="mb-3 text-xl font-bold transition-colors duration-300 lg:text-2xl text-gray-950 group-hover:text-blue-500">
                    {service.title}
                  </h3>
                  <p className="mb-5 text-gray-700">{service.description}</p>
                  <ul className="mb-6 space-y-3">
                    {service.features.map((feature, i) => (
                      <li
                        key={i}
                        className="flex items-center gap-3 text-gray-700 transition-colors duration-300 group-hover:text-blue-500"
                      >
                        <CircleCheckBig size={22} />
                        {feature}
                      </li>
                    ))}
                  </ul>
                </div>

                {/* Get Service Button */}
                <div className="mt-auto border-2 rounded-full w-fit">
                  <Buttons
                    btnText="Get Service"
                    onClick={() =>
                      window.open(
                        `https://wa.me/${whatsappNumber.replace(/\D/g, "")}`,
                        "_blank"
                      )
                    }
                  />
                </div>
              </div>
            </div>
          </MotionWrapper>
        ))}
      </div>
    </div>
  );
};

export default Services;
