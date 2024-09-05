import { motion } from 'framer-motion';

const educationData = [
    {
        institution: "Carmichael College",
        duration: "2022 - Present",
        degree: "Bachelor of Mathematics",
    },
    {
        institution: "Govt. Jasmuddin Kazi Abdul Gani College, Patgram",
        duration: "2020 - 2021",
        degree: "Higher Secondary Certificate",
        gpa: "GPA: 5.00 / 5.00",
    },
    {
        institution: "Islami Adarsha Biddyanikaton High School, Patgram",
        duration: "2020 - 2021",
        degree: "Secondary School Certificate",
        gpa: "GPA: 5.00 / 5.00",
    }
];

const Education = () => {
    return (
        <div>
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold font-monster text-center mb-8">My Education</h2>
            <section className="bg-gray-100 text-gray-800">
                <div className="container max-w-5xl px-4 py-12 mx-auto">
                    <div className="grid gap-4 mx-4 sm:grid-cols-12">
                        <div className="col-span-12 sm:col-span-3">
                            <div className="text-center sm:text-left mb-14 before:block before:w-24 before:h-3 before:mb-5 before:rounded-md before:mx-auto sm:before:mx-0 before:bg-red-600">
                                <h3 className="text-3xl font-semibold">Education</h3>
                                <span className="text-sm font-bold tracking-wider uppercase text-gray-600">My Academic Journey</span>
                            </div>
                        </div>
                        <div className="relative col-span-12 px-4 space-y-6 sm:col-span-9">
                            <div className="col-span-12 space-y-12 relative px-4 sm:col-span-8 sm:space-y-8 sm:before:absolute sm:before:top-2 sm:before:bottom-0 sm:before:w-0.5 sm:before:-left-3 before:bg-gray-300">
                                {educationData.map((edu, index) => (
                                    <motion.div
                                        key={index}
                                        initial={{ opacity: 0, y: 50 }}
                                        whileInView={{ opacity: 1, y: 0 }}
                                        transition={{ duration: 1, delay: index * 0.3 }} // Staggered delay
                                        viewport={{ once: true }}
                                        className="flex flex-col sm:relative sm:before:absolute sm:before:top-2 sm:before:w-4 sm:before:h-4 sm:before:rounded-full sm:before:left-[-35px] sm:before:z-[1] before:bg-red-600"
                                    >
                                        <h3 className="text-xl font-semibold tracking-wide">{edu.institution}</h3>
                                        <time className="text-xs tracking-wide uppercase text-gray-600">{edu.duration}</time>
                                        <p className="mt-3">{edu.degree}<br />{edu.gpa && edu.gpa}</p>
                                    </motion.div>
                                ))}
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </div>
    );
};

export default Education;