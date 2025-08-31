import { CircleCheckBig, X } from "lucide-react";
import { useState } from "react";
import { HiArrowUp } from "react-icons/hi";

const Project = ({ limit }) => {
  const projects = [
    {
      name: "GeekCode - Transforming Ideas Into High-Impact Digital Products",
      description: "Built a modern, responsive website for GeekCode, a digital agency. Developed the full frontend using React & Tailwind CSS, including animated hero section, About Us, services, and client trust sections. Optimized for mobile, desktop, and performance, with smooth transitions, gradient typography, and engaging CTAs to boost user engagement and conversions.",
      coreFeatures: [
        "Full project development from frontend to backend",
        "Modern, responsive design with React & Tailwind CSS",
        "Animated hero section and engaging CTAs",
        "Optimized for mobile, desktop, and performance",
        "Gradient typography and smooth transitions"
      ],
      technologies: ["MERN Stack", "React", "Node.js", "Express", "MongoDB", "Tailwind CSS", "HTML5", "CSS3", "JavaScript"],
      liveLink: "https://geekcodedig.netlify.app/",
      clientCodeLink: "https://github.com/Arafat0122/GeekCode",
      serverCodeLink: "",
      image: "/GeekCode.png"
    },
    {
      name: "DigitalCrafted – Modern Business Website",
      description: "DigitalCrafted is a modern, responsive business website built with React and Tailwind CSS. It showcases services like AI video, SEO, social media, and web development with a clean, dark-themed design and smooth animations. Optimized with Vite for fast performance, the site is fully responsive across devices and scalable for future features. This project highlights my ability to craft professional, creative, and high-performing web solutions.",
      coreFeatures: [
        "Full MERN stack development",
        "Clean, dark-themed responsive design",
        "Showcases AI video, SEO, social media, and web services",
        "Smooth animations and interactive UI elements",
        "Optimized for performance with Vite and scalability for future features"
      ],
      technologies: ["MERN Stack", "React", "Node.js", "Express", "MongoDB", "Tailwind CSS", "Vite", "HTML5", "CSS3", "JavaScript"],
      liveLink: "https://digitalcrafted.netlify.app/",
      clientCodeLink: "https://github.com/Arafat0122/DigitalCrafted",
      serverCodeLink: "",
      image: "/DigitalCrafted.png"
    },
    {
      name: "Loop Global Tech – Boost Your Business Growth",
      description: "At Loop Global Tech, I contributed as a web developer, building scalable, user-friendly, and modern web applications. My role included developing responsive interfaces with React and Tailwind CSS, integrating APIs, optimizing performance, and ensuring cross-device compatibility. I collaborated closely with the team to deliver clean, efficient code and helped implement UI/UX improvements that enhanced usability and overall user experience.",
      coreFeatures: [
        "Responsive and modern web application development",
        "Scalable and performance-optimized interfaces",
        "Integration of APIs for dynamic functionality",
        "UI/UX improvements for enhanced user experience",
        "Cross-device and cross-browser compatibility"
      ],
      technologies: ["MERN Stack", "React", "Node.js", "Express", "MongoDB", "Tailwind CSS", "HTML5", "CSS3", "JavaScript"],
      liveLink: "https://loopglobal.netlify.app/",
      clientCodeLink: "https://github.com/Arafat0122/Loop-Global-Tech",
      serverCodeLink: "",
      image: "/LoopGlobalTech.png"
    },
    {
      name: "CodesRaft - Software, App & Web Development",
      description:
        "A dynamic software, app, and web development company delivering cutting-edge solutions with a focus on performance, scalability, and user experience.",
      coreFeatures: [
        "Custom software and web development",
        "Scalable and high-performance applications",
        "Modern frontend and backend architecture",
        "User-friendly interface design",
        "Industry-specific tailored solutions",
      ],
      technologies: ["MERN Stack", "React", "Tailwind CSS", "HTML5", "CSS3"],
      liveLink: "https://codesraft.com",
      clientCodeLink: "",
      serverCodeLink: "",
      image: "/CodesRaft.png",
    },
    {
      "name": "Rahmah Institute – Advanced Online Quran Learning",
      "description": "Rahmah Institute is an advanced online Quran learning platform with a feature-rich LMS. Built with the MERN stack and styled with Tailwind CSS, it includes secure authentication, real-time chat, video calling, comprehensive dashboards for Admin, Teachers, and Students, job posting, service and teacher hiring profiles, and a wide range of courses. The platform offers an interactive and professional educational experience for students and staff alike.",
      "coreFeatures": [
        "Full-stack development with MERN stack",
        "LMS with Admin, Teacher, and Student dashboards",
        "Real-time chat and video calling",
        "Job posting, teacher hiring, and service profiles",
        "Wide range of online courses",
        "Secure authentication and role-based access",
        "Responsive and interactive UI optimized for all devices"
      ],
      "technologies": ["MERN Stack", "React", "Node.js", "Express", "MongoDB", "Tailwind CSS", "Firebase", "Socket.io", "WebRTC", "HTML5", "CSS3", "JavaScript"],
      "liveLink": "https://rahmahinstitute.com/",
      "clientCodeLink": "",
      "serverCodeLink": "",
      "image": "/RahmahInstitute.png"
    },
    {
      "name": "QutorOn – Online Quran Learning Platform",
      "description": "QutorOn is a modern platform for online Quran learning, built using the MERN stack (MongoDB, Express.js, React.js, Node.js) and styled with Tailwind CSS. The platform offers a seamless, responsive user experience, with secure authentication and real-time data management powered by Firebase. QutorOn provides a comprehensive solution for learners, blending technology with tradition for an enriched educational experience.",
      "coreFeatures": [
        "Full-stack development with MERN stack",
        "LMS system with Admin, Teacher, and Student dashboards",
        "Secure authentication and role-based access",
        "Real-time data management with Firebase",
        "Responsive design optimized for all devices"
      ],
      "technologies": ["MERN Stack", "React", "Node.js", "Express", "MongoDB", "Tailwind CSS", "Firebase", "HTML5", "CSS3", "JavaScript"],
      "liveLink": "https://qutoron.com",
      "clientCodeLink": "",
      "serverCodeLink": "",
      "image": "/QutorOn.png"
    },
    {
      "name": "Quranic Ilm – Learn Quran Online",
      "description": "Quranic Ilm is a responsive website for a Quran teaching academy. The platform provides basic information about the academy, its courses, and teachers. Designed with a clean and accessible layout, it ensures an easy user experience for students and parents looking to enroll.",
      "coreFeatures": [
        "Responsive website for Quran teaching academy",
        "Information about courses, teachers, and enrollment",
        "Clean and accessible UI for all users",
        "Optimized for desktop and mobile devices",
        "Easy navigation and smooth performance"
      ],
      "technologies": ["React", "Tailwind CSS", "HTML5", "CSS3", "JavaScript"],
      "liveLink": "https://quranicilm.netlify.app",
      "clientCodeLink": "",
      "serverCodeLink": "",
      "image": "/QuranicIlm.png"
    },
    {
      name: "Bus Ticket System",
      description:
        "A comprehensive system for booking bus tickets online with seat selection and payment options.",
      coreFeatures: [
        "Real-time seat availability",
        "User-friendly booking interface",
        "Secure payment gateway integration",
      ],
      technologies: ["HTML", "CSS", "JavaScript"],
      liveLink: "https://arafat0122.github.io/b9a5/",
      clientCodeLink: "https://github.com/Arafat0122/b9a5",
      serverCodeLink: "",
      image: "https://i.ibb.co/Hd63wwt/ph-ticket.png",
    },
    {
      name: "Alpha Pro - Typing Game",
      description:
        "A fun and interactive typing practice game where users type the keys as they appear on screen.",
      coreFeatures: [
        "Random key generation",
        "Real-time typing feedback",
        "Score tracking and performance analysis",
      ],
      technologies: ["HTML", "CSS", "JavaScript"],
      liveLink: "https://arafat0122.github.io/alpha-pro/",
      clientCodeLink: "https://github.com/Arafat0122/alpha-pro",
      serverCodeLink: "",
      image: "https://i.ibb.co/vhgBj3q/alpha-pro.png",
    },
  ];

  const [selectedProject, setSelectedProject] = useState(null);

  // Apply limit if provided
  const displayedProjects = limit ? projects.slice(0, limit) : projects;

  return (
    <div className="px-4 py-10 mx-auto max-w-7xl">
      <div className="flex flex-col md:flex-row gap-4 md:gap-12 mb-[20px] md:mb-[80px]">
        <h1 className=" text-[22px]  md:text-4xl font-bold text-gray-950 md:w-[50%]">
          Projects I am Proud of
        </h1>
        <p className="text-base md:text-xl text-gray-700 md:w-[90%]">
          Here are some of the projects I’ve worked on, showcasing my skills in
          full-stack development, modern UI design, and scalable web solutions.
          Each project reflects my focus on performance, user experience, and
          clean code.
        </p>
      </div>
      <div className="grid gap-8 md:grid-cols-2">
        {displayedProjects.map((project, index) => (
          <div
            key={index}
            onClick={() => setSelectedProject(project)}
            className="block overflow-hidden transition bg-white shadow-lg cursor-pointer group rounded-2xl dark:bg-gray-900 hover:shadow-xl"
          >
            <div className="overflow-hidden">
              <img
                src={project.image}
                alt={project.name}
                className="object-cover w-full h-auto transition-transform duration-500 max-h-[400px] group-hover:scale-105"
              />
            </div>
            <div className="p-5">
              <h3 className="mb-2 text-xl font-semibold text-gray-900 dark:text-white">
                {project.name}
              </h3>
              <p className="text-gray-600 dark:text-gray-300 line-clamp-3">
                {project.description}
              </p>
            </div>
          </div>
        ))}
      </div>

      {selectedProject && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/70">
          <div className="relative w-full max-w-6xl p-6 bg-white rounded-2xl shadow-xl dark:bg-gray-900 overflow-y-auto max-h-[90vh]">
            <button
              onClick={() => setSelectedProject(null)}
              className="absolute text-xl text-red-600 top-3 right-3 dark:text-gray-300 hover:bg-red-500 rounded-full p-1 hover:text-white"
            >
              <X />
            </button>
            <div className="flex flex-col gap-6 md:flex-row">
              <div className="md:w-1/2">
                <img
                  src={selectedProject.image}
                  alt={selectedProject.name}
                  className="w-full h-full rounded-lg shadow-md"
                />
              </div>
              <div className="md:w-1/2">
                <h2 className="text-2xl font-bold text-gray-900 dark:text-white">
                  {selectedProject.name}
                </h2>
                <p className="mt-4 text-gray-700 dark:text-gray-300">
                  {selectedProject.description}
                </p>
                <h3 className="mt-6 text-lg font-semibold text-gray-900 dark:text-gray-200">
                  Core Features:
                </h3>
                <ul className="mt-2 space-y-1 text-gray-700 list-disc list-inside dark:text-gray-300">
                  {selectedProject.coreFeatures.map((feature, idx) => (
                    <li className="flex items-center gap-2" key={idx}>
                      <CircleCheckBig size={16} /> {feature}
                    </li>
                  ))}
                </ul>
                <div className="flex flex-wrap gap-3 mt-6">
                  {selectedProject.liveLink && (
                    <a
                      href={selectedProject.liveLink}
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      <button className="theme_btn2">
                        Live Site <div className="arrow_icon"><HiArrowUp /></div>
                      </button>
                    </a>
                  )}
                </div>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default Project;