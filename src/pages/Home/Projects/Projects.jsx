

const projects = [
    {
        name: "Flavor Fusion",
        description: "A vibrant food delivery web application allowing users to explore and order from various cuisines.",
        coreFeatures: [
            "User authentication and profile management",
            "Dynamic food menu and ordering system",
            "Admin dashboard for managing orders and menu"
        ],
        technologies: ["React", "Node.js", "Express.js", "MongoDB", "Tailwind CSS"],
        liveLink: "https://flavor-fusion-ask.netlify.app/",
        clientCodeLink: "https://github.com/Arafat0122/flavor-fusion-client",
        serverCodeLink: "", // Assuming there's no separate server repo link provided
        image: 'https://i.ibb.co/YPScczg/flavor-fusion.png'
    },
    {
        name: "Bus Ticket System",
        description: "A comprehensive system for booking bus tickets online with seat selection and payment options.",
        coreFeatures: [
            "Real-time seat availability",
            "User-friendly booking interface",
            "Secure payment gateway integration"
        ],
        technologies: ["HTML", "CSS", "JavaScript"],
        liveLink: "https://arafat0122.github.io/b9a5/",
        clientCodeLink: "https://github.com/Arafat0122/b9a5",
        serverCodeLink: "", // Assuming there's no separate server repo link provided
        image: 'https://i.ibb.co/Hd63wwt/ph-ticket.png'
    },
    {
        name: "Alpha Pro - Typing Game",
        description: "A fun and interactive typing practice game where users type the keys as they appear on screen.",
        coreFeatures: [
            "Random key generation",
            "Real-time typing feedback",
            "Score tracking and performance analysis"
        ],
        technologies: ["HTML", "CSS", "JavaScript"],
        liveLink: "https://arafat0122.github.io/alpha-pro/",
        clientCodeLink: "https://github.com/Arafat0122/alpha-pro",
        serverCodeLink: "", // Assuming there's no separate server repo link provided
        image: 'https://i.ibb.co/vhgBj3q/alpha-pro.png'
    }
];

const Projects = () => {
    return (
        <div className="py-10">
            <div className="container mx-auto px-6">
                <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold font-monster text-center mb-12">My Best Projects</h2>
                <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8">
                    {projects.map((project, index) => (
                        <div key={index} className="bg-white rounded-lg shadow-lg overflow-hidden transform hover:scale-105 transition-transform duration-300 p-2 border">
                            <img src={project.image} alt={`${project.name} screenshot`} className="w-full h-56 object-cover" />
                            <div className="p-6">
                                <h3 className="text-2xl font-bold mb-7 font-fira">{project.name}</h3>
                                <p className="text-lg text-gray-700 mb-4 font-fira h-24">{project.description}</p>
                                <h4 className="text-xl font-semibold mb-2">Core Features:</h4>
                                <ul className="list-disc list-inside mb-4 h-32">
                                    {project.coreFeatures.map((feature, i) => (
                                        <li key={i} className="font-gideon">{feature}</li>
                                    ))}
                                </ul>
                                <h4 className="text-xl font-semibold mb-5">Technologies Used:</h4>
                                <div className="flex flex-wrap mb-4 h-32">
                                    {project.technologies.map((tech, i) => (
                                        <span key={i} className="bg-gray-200 rounded-full px-4 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2 h-fit">{tech}</span>
                                    ))}
                                </div>
                                <div className="flex justify-between">
                                    <a href={project.liveLink} className="btn btn-outline text-blue-500 hover:underline" target="_blank" rel="noopener noreferrer">Live Project</a>
                                    <a href={project.clientCodeLink} className="btn btn-outline text-blue-500 hover:underline" target="_blank" rel="noopener noreferrer">Client Code</a>
                                    {project.serverCodeLink && (
                                        <a href={project.serverCodeLink} className="text-blue-500 hover:underline" target="_blank" rel="noopener noreferrer">Server Code</a>
                                    )}
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
};

export default Projects;
