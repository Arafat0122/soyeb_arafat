import React, { useState } from "react";

const Project = () => {
  const projects = [
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
      name: "QutorOn",
      description:
        "An online platform for learning and teaching the Quran, featuring live sessions and interactive lessons.",
      coreFeatures: [
        "Live Quran sessions",
        "Interactive lesson management",
        "Student and teacher dashboards",
      ],
      technologies: ["MERN", "Tailwind CSS", "Firebase"],
      liveLink: "https://qutoron.com/",
      clientCodeLink: "",
      serverCodeLink: "",
      image: "https://i.ibb.co/zxLxz5Z/QutorOn.png",
    },
    {
      name: "Flavor Fusion",
      description:
        "A vibrant food delivery web application allowing users to explore and order from various cuisines.",
      coreFeatures: [
        "User authentication and profile management",
        "Dynamic food menu and ordering system",
        "Admin dashboard for managing orders and menu",
      ],
      technologies: [
        "React",
        "Node.js",
        "Express.js",
        "MongoDB",
        "Tailwind CSS",
      ],
      liveLink: "https://flavor-fusion-ask.netlify.app/",
      clientCodeLink: "https://github.com/Arafat0122/flavor-fusion-client",
      serverCodeLink: "",
      image: "https://i.ibb.co/YPScczg/flavor-fusion.png",
    },
    {
      name: "Resident Hover",
      description:
        "A modern real estate platform designed for seamless property management, featuring advanced search and filter options.",
      coreFeatures: [
        "Comprehensive property listings",
        "Advanced search and filter options",
        "User-friendly property management tools",
      ],
      technologies: ["React", "Tailwind CSS", "Node.js", "Express.js", "MongoDB"],
      liveLink: "https://residentialhover.netlify.app/",
      clientCodeLink: "https://github.com/Arafat0122/Resident-Hover",
      serverCodeLink: "",
      image: "https://i.ibb.co/hy1v7Gn/Resident-Hover.png",
    },
    {
      name: "Book Vibe",
      description:
        "An interactive platform for book enthusiasts to manage their reading lists, track progress, and discover new books.",
      coreFeatures: [
        "Manage reading lists",
        "Track reading progress",
        "Discover new books and genres",
      ],
      technologies: ["React", "Tailwind CSS", "Firebase"],
      liveLink: "https://book-acent.netlify.app/",
      clientCodeLink: "https://github.com/Arafat0122/Book_Vibe",
      serverCodeLink: "",
      image: "https://i.ibb.co/JvrJTRM/Book-Vibe-Website.png",
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

  return (
    <div className="px-4 py-10 mx-auto max-w-7xl">
      {/* Section Heading */}
      <div className="flex flex-col md:flex-row gap-4 md:gap-12 mb-[20px] md:mb-[40px]">
        <h1 className=" text-[22px]  md:text-4xl font-bold text-gray-950 md:w-[50%]">
          Projects I'm Proud of
        </h1>
        <p className="text-base md:text-xl text-gray-700 md:w-[90%]">
          Here are some of the projects I’ve worked on, showcasing my skills in
          full-stack development, modern UI design, and scalable web solutions.
          Each project reflects my focus on performance, user experience, and
          clean code.
        </p>
      </div>

      {/* Projects Grid */}
      <div className="grid gap-8 md:grid-cols-2">
        {projects.map((project, index) => (
          <div
            key={index}
            onClick={() => setSelectedProject(project)}
            className="block overflow-hidden transition bg-white shadow-lg cursor-pointer group rounded-2xl dark:bg-gray-900 hover:shadow-xl"
          >
            {/* Image */}
            <div className="overflow-hidden">
              <img
                src={project.image}
                alt={project.name}
                className="object-cover w-full h-auto transition-transform duration-500 max-h-[400px] group-hover:scale-105"
              />
            </div>

            {/* Content */}
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

      {/* Modal */}
      {selectedProject && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/70">
          <div className="relative w-full max-w-4xl p-6 bg-white rounded-2xl shadow-xl dark:bg-gray-900 overflow-y-auto max-h-[90vh]">
            {/* Close Button */}
            <button
              onClick={() => setSelectedProject(null)}
              className="absolute text-xl text-gray-600 top-3 right-3 dark:text-gray-300 hover:text-red-500"
            >
              ✕
            </button>

            {/* Modal Content */}
            <div className="flex flex-col gap-6 md:flex-row">
              {/* Image */}
              <div className="md:w-1/2">
                <img
                  src={selectedProject.image}
                  alt={selectedProject.name}
                  className="w-full h-auto rounded-lg shadow-md"
                />
              </div>

              {/* Details */}
              <div className="md:w-1/2">
                <h2 className="text-2xl font-bold text-gray-900 dark:text-white">
                  {selectedProject.name}
                </h2>
                <p className="mt-4 text-gray-700 dark:text-gray-300">
                  {selectedProject.description}
                </p>

                {/* Core Features */}
                <h3 className="mt-6 text-lg font-semibold text-gray-900 dark:text-gray-200">
                  Core Features:
                </h3>
                <ul className="mt-2 space-y-1 text-gray-700 list-disc list-inside dark:text-gray-300">
                  {selectedProject.coreFeatures.map((feature, idx) => (
                    <li key={idx}>{feature}</li>
                  ))}
                </ul>

                {/* Technologies */}
                <h3 className="mt-6 text-lg font-semibold text-gray-900 dark:text-gray-200">
                  Technologies:
                </h3>
                <div className="flex flex-wrap gap-2 mt-2">
                  {selectedProject.technologies.map((tech, idx) => (
                    <span
                      key={idx}
                      className="px-3 py-1 text-sm font-medium text-indigo-600 bg-indigo-100 rounded-full dark:bg-indigo-800 dark:text-indigo-100"
                    >
                      {tech}
                    </span>
                  ))}
                </div>

                {/* Links */}
                <div className="flex flex-wrap gap-3 mt-6">
                  {selectedProject.liveLink && (
                    <a
                      href={selectedProject.liveLink}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="px-4 py-2 text-white transition bg-indigo-600 rounded-lg hover:bg-indigo-700"
                    >
                      Live Site
                    </a>
                  )}
                  {selectedProject.clientCodeLink && (
                    <a
                      href={selectedProject.clientCodeLink}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="px-4 py-2 text-white transition bg-gray-700 rounded-lg hover:bg-gray-800"
                    >
                      Client Code
                    </a>
                  )}
                  {selectedProject.serverCodeLink && (
                    <a
                      href={selectedProject.serverCodeLink}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="px-4 py-2 text-white transition bg-gray-700 rounded-lg hover:bg-gray-800"
                    >
                      Server Code
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
