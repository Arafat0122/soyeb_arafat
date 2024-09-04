

// Skill logos (imported or hosted on a CDN)
const frontEndSkills = [
    { name: 'HTML', logo: 'https://images.vexels.com/media/users/3/166383/isolated/lists/6024bc5746d7436c727825dc4fc23c22-html-programming-language-icon.png' },
    { name: 'CSS', logo: 'https://cdn-icons-png.flaticon.com/512/5968/5968242.png' },
    { name: 'JavaScript', logo: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSgh0cmaLPqUaZd6iuo7D_iaOeLYb1QUdjMiA&s' },
    { name: 'React', logo: 'https://upload.wikimedia.org/wikipedia/commons/thumb/a/a7/React-icon.svg/2300px-React-icon.svg.png' },
    { name: 'Tailwind CSS', logo: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQDML5CFq70Y9FJ52YnyCjfdyUA3g9B6is_jA&s' },
];

const backEndSkills = [
    { name: 'Node.js', logo: 'https://upload.wikimedia.org/wikipedia/commons/thumb/d/d9/Node.js_logo.svg/2560px-Node.js_logo.svg.png' },
    { name: 'Express.js', logo: 'https://cdn.icon-icons.com/icons2/2699/PNG/512/expressjs_logo_icon_169185.png' },
    { name: 'MongoDB', logo: 'https://www.pngall.com/wp-content/uploads/13/Mongodb-PNG-Image-HD.png' },
    { name: 'Firebase', logo: 'https://cdn.iconscout.com/icon/free/png-256/free-firebase-11796860-9632965.png' },
    { name: 'Git', logo: 'https://git-scm.com/images/logos/downloads/Git-Icon-1788C.png' },
];

const Skills = () => {
    return (
        <div className="bg-gray-100 py-10">
            <div className="container mx-auto">
                <h2 className="text-2xl md:text-3xl lg:text-5xl font-bold font-monster text-center mb-8">Skills & Technologies</h2>

                <div className="grid grid-cols-2 lg:grid-cols-1 gap-9 w-full">
                    <div className=" mx-auto">
                        <h3 className="text-xl md:text-2xl lg:text-3xl font-bold font-gideon text-center mb-6">FrontEnd</h3>
                        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-6">
                            {frontEndSkills.map((skill, index) => (
                                <div key={index} className="flex flex-col w-32 items-center py-4 bg-white rounded-lg shadow-lg hover:shadow-xl transition-shadow duration-300">
                                    <img src={skill.logo} alt={`${skill.name} logo`} className="w-20 h-20 mb-2" />
                                    <p className="text-xl font-semibold">{skill.name}</p>
                                </div>
                            ))}
                        </div>
                    </div>

                    <div className=" mx-auto">
                        <h3 className="text-xl md:text-2xl lg:text-3xl font-bold font-gideon text-center mb-6">BackEnd</h3>
                        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-6">
                            {backEndSkills.map((skill, index) => (
                                <div key={index} className="flex flex-col w-32 items-center py-4 bg-white rounded-lg shadow-lg hover:shadow-xl transition-shadow duration-300">
                                    <img src={skill.logo} alt={`${skill.name} logo`} className="w-20 h-20 mb-2" />
                                    <p className="text-xl font-semibold">{skill.name}</p>
                                </div>
                            ))}
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Skills;
