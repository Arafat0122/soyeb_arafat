import { motion } from 'framer-motion';

const PersonalData = () => {
    // Define animation variants
    const containerVariants = {
        hidden: { opacity: 0, y: 20 },
        visible: { opacity: 1, y: 0, transition: { duration: 0.8 } },
    };

    const itemVariants = {
        hidden: { opacity: 0, scale: 0.9 },
        visible: { opacity: 1, scale: 1, transition: { duration: 0.6 } },
    };

    return (
        <motion.div
            className="py-10"
            variants={containerVariants}
            initial="hidden"
            animate="visible"
        >
            <div className="container mx-auto px-6">
                <motion.h2
                    className="text-3xl md:text-4xl lg:text-5xl font-bold font-monster text-center mb-8"
                    variants={itemVariants}
                >
                    About Me
                </motion.h2>
                <motion.div
                    className="bg-white rounded-lg shadow-lg py-8 flex flex-col lg:flex-row justify-center items-center lg:items-start gap-5"
                    variants={itemVariants}
                >
                    <motion.div
                        className="h-full my-auto w-full md:w-1/3 flex items-center justify-center"
                        variants={itemVariants}
                    >
                        <img
                            src="https://cdn-icons-png.flaticon.com/512/9321/9321618.png"
                            alt="Arafat"
                            className="w-48 h-48"
                        />
                    </motion.div>
                    <motion.div
                        className="w-full lg:w-2/3 px-5 md:px-10 lg:pl-8"
                        variants={itemVariants}
                    >
                        <p className="text-lg md:text-xl lg:text-2xl font-light leading-relaxed text-gray-700 mb-4">
                            I am Soyeb Ahmed Arafat, a web developer skilled in HTML, CSS, JavaScript, React, Tailwind CSS, Node.js, Express.js, MongoDB, Firebase, and Git. With experience working on various web projects, I am dedicated to creating advanced and user-friendly websites. I am always eager to learn new technologies and bring innovative solutions to projects. My goal is to create beautiful and functional web applications for users while continuously improving my skills and experience in web development.
                        </p>
                        <div className="text-center text-sm md:text-base flex flex-col md:flex-row gap-2 justify-center lg:justify-start items-center mt-6">
                            <a
                                href="/public/Soyeb Ahmed Arafat Resume.pdf"
                                download="Soyeb Ahmed Arafat Resume.pdf"
                                className="inline-block bg-red-600 text-white py-2 px-4 rounded-lg font-bold transition duration-300 ease-in-out hover:bg-red-700"
                            >
                                Download Resume (PDF)
                            </a>
                            <a
                                href="/public/Soyeb Ahmed Arafat Resume.docx"
                                download="Soyeb Ahmed Arafat Resume.docx"
                                className="inline-block bg-blue-600 text-white py-2 px-4 rounded-lg font-bold transition duration-300 ease-in-out hover:bg-blue-700"
                            >
                                Download Resume (DOCX)
                            </a>
                        </div>
                    </motion.div>
                </motion.div>
            </div>
        </motion.div>
    );
};

export default PersonalData;