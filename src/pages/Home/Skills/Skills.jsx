import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';


const frontEndSkills = [
    { name: 'HTML', logo: 'https://images.vexels.com/media/users/3/166383/isolated/lists/6024bc5746d7436c727825dc4fc23c22-html-programming-language-icon.png', wikiLink: 'https://en.wikipedia.org/wiki/HTML' },
    { name: 'CSS', logo: 'https://cdn-icons-png.flaticon.com/512/5968/5968242.png', wikiLink: 'https://en.wikipedia.org/wiki/CSS' },
    { name: 'JavaScript', logo: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSgh0cmaLPqUaZd6iuo7D_iaOeLYb1QUdjMiA&s', wikiLink: 'https://en.wikipedia.org/wiki/JavaScript' },
    { name: 'React', logo: 'https://upload.wikimedia.org/wikipedia/commons/thumb/a/a7/React-icon.svg/2300px-React-icon.svg.png', wikiLink: 'https://en.wikipedia.org/wiki/React_(JavaScript_library)' },
    { name: 'Tailwind CSS', logo: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQDML5CFq70Y9FJ52YnyCjfdyUA3g9B6is_jA&s', wikiLink: 'https://en.wikipedia.org/wiki/Tailwind_CSS' },
];

const backEndSkills = [
    { name: 'Node.js', logo: 'https://upload.wikimedia.org/wikipedia/commons/thumb/d/d9/Node.js_logo.svg/2560px-Node.js_logo.svg.png', wikiLink: 'https://en.wikipedia.org/wiki/Node.js' },
    { name: 'Express.js', logo: 'https://cdn.icon-icons.com/icons2/2699/PNG/512/expressjs_logo_icon_169185.png', wikiLink: 'https://en.wikipedia.org/wiki/Express.js' },
    { name: 'MongoDB', logo: 'https://www.pngall.com/wp-content/uploads/13/Mongodb-PNG-Image-HD.png', wikiLink: 'https://en.wikipedia.org/wiki/MongoDB' },
    { name: 'Firebase', logo: 'https://cdn.iconscout.com/icon/free/png-256/free-firebase-11796860-9632965.png', wikiLink: 'https://en.wikipedia.org/wiki/Firebase' },
    { name: 'Git', logo: 'https://git-scm.com/images/logos/downloads/Git-Icon-1788C.png', wikiLink: 'https://en.wikipedia.org/wiki/Git' },
];

const SkillCard = ({ skill }) => {
    const [ref, inView] = useInView({ triggerOnce: true, threshold: 0.1 });

    return (
        <motion.a
            ref={ref}
            href={skill.wikiLink}
            target="_blank"
            rel="noopener noreferrer"
            className="flex flex-col items-center p-4 transition-shadow duration-300 bg-white rounded-lg shadow-lg cursor-pointer hover:shadow-xl"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            initial={{ opacity: 0, y: 30 }} // Adjusted y-axis start value
            animate={{ opacity: inView ? 1 : 0, y: inView ? 0 : 30 }}
            transition={{ duration: 0.5 }}
        >
            <img src={skill.logo} alt={`${skill.name} logo`} className="w-16 h-16 mb-2" />
            <p className="text-lg font-semibold">{skill.name}</p>
        </motion.a>
    );
};

const Skills = () => {
    return (
        <div className="py-10 bg-gray-100">
            <div className="container px-4 mx-auto">
                <h2 className="mb-8 text-2xl font-bold text-center md:text-3xl lg:text-5xl font-monster">Skills & Technologies</h2>

                <div className="grid grid-cols-1 gap-8">
                    <div>
                        <h3 className="mb-6 text-xl font-bold text-center md:text-2xl lg:text-3xl font-gideon">FrontEnd</h3>
                        <div className="grid grid-cols-2 gap-6 md:grid-cols-3 lg:grid-cols-5">
                            {frontEndSkills.map((skill, index) => (
                                <SkillCard key={index} skill={skill} />
                            ))}
                        </div>
                    </div>

                    <div>
                        <h3 className="mb-6 text-xl font-bold text-center md:text-2xl lg:text-3xl font-gideon">BackEnd</h3>
                        <div className="grid grid-cols-2 gap-6 md:grid-cols-3 lg:grid-cols-5">
                            {backEndSkills.map((skill, index) => (
                                <SkillCard key={index} skill={skill} />
                            ))}
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Skills;