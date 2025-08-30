import Buttons from "@/common/Buttons/Buttons";
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
        <div className="py-16 md:py-28 lg:py-20 bg-gray-50">
            {/* Hero Section */}
            <div className="bg-gray-950 rounded-b-[60px]">
                <div className="flex flex-col-reverse items-center justify-between gap-8 px-6 py-16 mx-auto max-w-7xl md:flex-row md:px-8">
                    <div className="text-center md:text-left md:w-1/2">
                        <h2 className="text-3xl md:text-5xl font-bold text-white">
                            Services That Transform Ideas Into Reality
                        </h2>
                        <p className="mt-4 text-gray-300 md:text-lg">
                            I deliver web solutions that combine cutting-edge technology, seamless design, and measurable results. From responsive web apps to interactive features, every service is crafted to help you achieve your business goals.
                        </p>
                        <div className="mt-6">
                            <Buttons btnText="Explore Services" />
                        </div>
                    </div>

                    <div className="flex justify-center md:w-1/2">
                        <img
                            src="/Services.png"
                            alt="Project Banner"
                            className="h-auto max-h-[400px] max-w-full shadow-2xl rounded-xl"
                        />
                    </div>
                </div>
            </div>

            {/* Services Grid */}
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10 mx-auto max-w-7xl px-4 pt-24">
                {services.map((service, index) => (
                    <div
                        key={index}
                        className="bg-white rounded-2xl shadow-lg relative group transform transition-all duration-500 hover:-translate-y-3 hover:shadow-3xl flex flex-col"
                    >
                        {/* Card Image */}
                        <div className="overflow-hidden rounded-t-2xl">
                            <img
                                src={service.img}
                                alt={service.title}
                                className="w-full h-52 object-cover transition-transform duration-500 group-hover:scale-105"
                            />
                        </div>

                        {/* Card Content */}
                        <div className="p-6 flex flex-col flex-1">
                            <div>
                                <h3 className="text-2xl font-bold text-gray-950 mb-3 group-hover:text-blue-500 transition-colors duration-300">
                                    {service.title}
                                </h3>
                                <p className="text-gray-700 mb-5">{service.description}</p>
                                <ul className="space-y-3 mb-6">
                                    {service.features.map((feature, i) => (
                                        <li key={i} className="flex items-center gap-3 text-gray-700 group-hover:text-blue-500 transition-colors duration-300">
                                            <CircleCheckBig size={22} />
                                            {feature}
                                        </li>
                                    ))}
                                </ul>
                            </div>

                            {/* Get Service Button */}
                            <div className="mt-auto border-2 w-fit rounded-full">
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
                ))}
            </div>
        </div>

    );
};

export default Services;