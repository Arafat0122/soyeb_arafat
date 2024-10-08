import { motion } from 'framer-motion';

const projects = [
    {
        name: "QutorOn",
        description: "An online platform for learning and teaching the Quran, featuring live sessions and interactive lessons.",
        coreFeatures: [
            "Live Quran sessions",
            "Interactive lesson management",
            "Student and teacher dashboards"
        ],
        technologies: ["MERN", "Tailwind CSS", "Firebase"],
        liveLink: "https://qutoron.com/",
        clientCodeLink: "",
        serverCodeLink: "",
        image: 'https://i.ibb.co/zxLxz5Z/QutorOn.png'
    },
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
        serverCodeLink: "",
        image: 'https://i.ibb.co/YPScczg/flavor-fusion.png'
    },
    {
        name: "Resident Hover",
        description: "A modern real estate platform designed for seamless property management, featuring advanced search and filter options.",
        coreFeatures: [
            "Comprehensive property listings",
            "Advanced search and filter options",
            "User-friendly property management tools"
        ],
        technologies: ["React", "Tailwind CSS", "Node.js", "Express.js", "MongoDB"],
        liveLink: "https://residentialhover.netlify.app/",
        clientCodeLink: "https://github.com/Arafat0122/Resident-Hover",
        serverCodeLink: "",
        image: 'https://i.ibb.co/hy1v7Gn/Resident-Hover.png'
    },
    {
        name: "Book Vibe",
        description: "An interactive platform for book enthusiasts to manage their reading lists, track progress, and discover new books.",
        coreFeatures: [
            "Manage reading lists",
            "Track reading progress",
            "Discover new books and genres"
        ],
        technologies: ["React", "Tailwind CSS", "Firebase"],
        liveLink: "https://book-acent.netlify.app/",
        clientCodeLink: "https://github.com/Arafat0122/Book_Vibe",
        serverCodeLink: "", // Assuming no separate server repo
        image: 'https://i.ibb.co/JvrJTRM/Book-Vibe-Website.png'
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
        serverCodeLink: "",
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
        serverCodeLink: "",
        image: 'https://i.ibb.co/vhgBj3q/alpha-pro.png'
    }
];

const Projects = () => {
    return (
        <motion.div
            className="py-10"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 1 }}
        >
            <div className="container mx-auto px-6">
                <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold font-monster text-center mb-12">My Best Projects</h2>
                <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
                    {projects.map((project, index) => (
                        <motion.div
                            key={index}
                            className="bg-white rounded-lg shadow-lg overflow-hidden transform hover:scale-105 transition-transform duration-300 border"
                            initial={{ opacity: 0 }}
                            animate={{ opacity: 1 }}
                            transition={{ delay: index * 0.1, duration: 0.5 }}
                        >
                            <div className="flex flex-col h-full">
                                <img src={project.image} alt={`${project.name} screenshot`} className="w-full h-56 object-cover mb-4" />
                                <div className="flex flex-col flex-grow p-4">
                                    <h3 className="text-2xl font-bold mb-4">{project.name}</h3>
                                    <p className="text-lg text-gray-700 mb-4">{project.description}</p>
                                    <h4 className="text-xl font-semibold mb-2">Core Features:</h4>
                                    <ul className="list-disc list-inside mb-4 pl-5">
                                        {project.coreFeatures.map((feature, i) => (
                                            <li key={i} className="font-gideon mb-1">{feature}</li>
                                        ))}
                                    </ul>
                                    <h4 className="text-xl font-semibold mb-2">Technologies Used:</h4>
                                    <div className="flex flex-wrap mb-4">
                                        {project.technologies.map((tech, i) => (
                                            <span key={i} className="bg-gray-200 rounded-full px-4 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2">{tech}</span>
                                        ))}
                                    </div>
                                    <div className="flex justify-between items-center mt-auto">
                                        <a href={project.liveLink} className="btn btn-outline text-blue-500 hover:underline mb-2 md:mb-0" target="_blank" rel="noopener noreferrer">Live Project</a>
                                        <a href={project.clientCodeLink} className="btn btn-outline text-blue-500 hover:underline mb-2 md:mb-0" target="_blank" rel="noopener noreferrer">Client Code</a>
                                        {project.serverCodeLink && (
                                            <a href={project.serverCodeLink} className="text-blue-500 hover:underline" target="_blank" rel="noopener noreferrer">Server Code</a>
                                        )}
                                    </div>
                                </div>
                            </div>
                        </motion.div>
                    ))}
                </div>
            </div>
        </motion.div>
    );
};

export default Projects;