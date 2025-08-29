import React from "react";

const Project = () => {
  const projects = [
    {
      name: "CodesRaft - Software, App & Web Development",
      description:
        "A dynamic software, app, and web development company delivering cutting-edge solutions with a focus on performance, scalability, and user experience.",
      liveLink: "https://codesraft.com",
      image: "/CodesRaft.png",
    },
    {
      name: "QutorOn",
      description:
        "An online platform for learning and teaching the Quran, featuring live sessions and interactive lessons.",
      liveLink: "https://qutoron.com/",
      image: "https://i.ibb.co/zxLxz5Z/QutorOn.png",
    },
    {
      name: "Flavor Fusion",
      description:
        "A vibrant food delivery web application allowing users to explore and order from various cuisines.",
      liveLink: "https://flavor-fusion-ask.netlify.app/",
      image: "https://i.ibb.co/YPScczg/flavor-fusion.png",
    },
    {
      name: "Resident Hover",
      description:
        "A modern real estate platform designed for seamless property management, featuring advanced search and filter options.",
      liveLink: "https://residentialhover.netlify.app/",
      image: "https://i.ibb.co/hy1v7Gn/Resident-Hover.png",
    },
  ];

  return (
    <div className="px-4 py-10 mx-auto max-w-7xl">
      <div className="flex gap-12 mb-[40px] justify-between">
        <h1 className="text-4xl font-bold text-gray-950 w-[30%]">
          Projects I'm Proud of
        </h1>
        <p className="text-xl text-gray-700 w-[60%]">
          Here are some of the projects I’ve worked on, showcasing my skills in
          full-stack development, modern UI design, and scalable web solutions.
          Each project reflects my focus on performance, user experience, and
          clean code.
        </p>
      </div>

      <div className="grid gap-8 md:grid-cols-2">
        {projects.map((project, index) => (
          <a
            key={index}
            href={project.liveLink}
            target="_blank"
            rel="noopener noreferrer"
            className="block overflow-hidden transition bg-white shadow-lg group rounded-2xl dark:bg-gray-900 hover:shadow-xl"
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
          </a>
        ))}
      </div>
    </div>
  );
};

export default Project;
