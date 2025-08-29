import { useState } from 'react';
import Modal from 'react-modal';
import { motion } from 'framer-motion';

// Style for the Modal
const modalStyles = {
    content: {
        top: '50%',
        left: '50%',
        right: 'auto',
        bottom: 'auto',
        marginRight: '-50%',
        transform: 'translate(-50%, -50%)',
        width: '90%',
        maxWidth: '700px',
        height: '70%',
        maxHeight: '750px',
        borderRadius: '10px',
        padding: '0',
        overflow: 'hidden',
    },
    overlay: {
        backgroundColor: 'rgba(0, 0, 0, 0.7)',
    },
};

// Custom hook to manage modal states
const About = () => {
    const [isOpen, setIsOpen] = useState(false);
    const [activeCertificate, setActiveCertificate] = useState(null);

    // Modal open function
    const openModal = (certificate) => {
        setActiveCertificate(certificate);
        setIsOpen(true);
    };

    // Modal close function
    const closeModal = () => {
        setIsOpen(false);
        setActiveCertificate(null);
    };

    const certificates = [
        {
            title: "Web Development",
            institute: "Programming Hero",
            img: "/ph.jpg",
            description: "A comprehensive Web Development course, gaining expertise in React, HTML, CSS, JavaScript, and more.",
            subText: "A full-stack web development course by Jhankar Mahbub.",
        },
        {
            title: "Cybersecurity Awareness",
            institute: "HP LIFE",
            img: "/Arafat-Cyber.png",
            description: "This course provided an in-depth understanding of cybersecurity risks, best practices, and protective measures in digital environments.",
            subText: "Issued on 12/23/2024 by Stephanie Bormann, Deputy Director, HP Foundation.",
        },
        {
            title: "Data Science & Analytics",
            institute: "HP LIFE",
            img: "/Data-Science.png",
            description: "Soyeb Ahmed Arafat acquired essential skills in data analysis, visualization, and decision-making using data-driven approaches.",
            subText: "Issued on 01/28/2025 by Stephanie Bormann, Deputy Director, HP Foundation.",
        },
        {
            title: "Social Media Marketing",
            institute: "HP LIFE",
            img: "/Arafat-Leadership.png",
            description: "This course provided in-depth knowledge on social media strategies, audience engagement, content marketing, and analytics.",
            subText: "Issued on 09/15/2024 by Stephanie Bormann, Deputy Director, HP Foundation.",
        },
        {
            title: "Effective Leadership",
            institute: "HP LIFE",
            img: "/Arafat-Leadership.png",
            description: "This course focused on leadership strategies, communication skills, and team management to drive success in professional settings.",
            subText: "Issued on 03/06/2024 by Stephanie Bormann, Deputy Director, HP Foundation.",
        },
        {
            title: "Responsive Web Design",
            institute: "Coursera",
            img: "https://i.ibb.co/thc2h2J/cr.jpg",
            description: "Learned to create fully responsive, mobile-friendly web pages optimized for various screen sizes and devices.",
            subText: 'Certificate Verification: <a href="https://coursera.org/verify/KP6YNDRE5GKC" class="text-blue-500">View Certificate</a>',
        },
    ];

    return (
        <div>
            {/* Apply motion component for animation */}
            <motion.div
                initial={{ opacity: 0, y: 50 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, ease: "easeOut" }}
                className="py-10 bg-gray-50"
            >
                <div className="container px-6 mx-auto">
                    {/* About Me Section */}
                    <h2 className="mb-8 text-3xl font-bold text-center md:text-4xl lg:text-5xl font-monster">About Me</h2>
                    <motion.div
                        initial={{ opacity: 0, scale: 0.95 }}
                        animate={{ opacity: 1, scale: 1 }}
                        transition={{ duration: 0.8, ease: "easeOut" }}
                        className="flex flex-col items-center justify-center gap-5 py-8 transition-shadow duration-500 ease-in-out bg-white rounded-lg shadow-lg lg:flex-row lg:items-start hover:shadow-2xl"
                    >
                        <div className="flex items-center justify-center w-full h-full my-auto md:w-1/3">
                            <img
                                src="https://cdn-icons-png.flaticon.com/512/9321/9321618.png"
                                alt="Arafat"
                                className="w-48 h-48 transition-transform duration-300 ease-in-out transform rounded-full hover:scale-105"
                            />
                        </div>
                        <div className="w-full px-5 lg:w-2/3 md:px-10 lg:pl-8">
                            <p className="mb-4 text-lg font-light leading-relaxed text-gray-700 md:text-xl lg:text-2xl">
                                I am Soyeb Ahmed Arafat, a web developer skilled in HTML, CSS, JavaScript, React, Tailwind CSS, Node.js, Express.js, MongoDB, Firebase, and Git. With experience working on various web projects, I am dedicated to creating advanced and user-friendly websites. I am always eager to learn new technologies and bring innovative solutions to projects. My goal is to create beautiful and functional web applications for users while continuously improving my skills and experience in web development.
                            </p>
                            <div className="flex flex-col items-center justify-center gap-2 mt-6 text-sm text-center md:text-base md:flex-row lg:justify-start">
                                <a href="/Soyeb Ahmed Arafat Resume.pdf" download="Soyeb Ahmed Arafat Resume.pdf" className="inline-block px-4 py-2 font-bold text-white transition duration-300 ease-in-out transform bg-red-600 rounded-lg hover:bg-red-700 hover:scale-105">
                                    Download Resume (PDF)
                                </a>
                                <a href="/Soyeb Ahmed Arafat Resume.docx" download="Soyeb Ahmed Arafat Resume.docx" className="inline-block px-4 py-2 font-bold text-white transition duration-300 ease-in-out transform bg-blue-600 rounded-lg hover:bg-blue-700 hover:scale-105">
                                    Download Resume (DOCX)
                                </a>
                            </div>
                        </div>
                    </motion.div>

                    {/* Certifications Section */}
                    <h2 className="my-8 text-3xl font-bold text-center md:text-4xl lg:text-5xl font-monster lg:mt-10">My Certifications</h2>
                    <section className="bg-gray-100 lg:py-12">
                        <motion.div
                            initial={{ opacity: 0, y: 50 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.8, ease: "easeOut", delay: 0.2 }}
                            className="max-w-6xl mx-auto lg:px-4"
                        >
                            <div className="grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-3">
                                {certificates.map((cert, index) => (
                                    <motion.div
                                        key={index}
                                        whileHover={{ scale: 1.05 }}
                                        className="flex flex-col justify-center p-6 transition duration-500 ease-in-out bg-white rounded-lg shadow-lg cursor-pointer"
                                        onClick={() => openModal(cert)}
                                        style={{ width: '100%', height: '450px' }}
                                    >
                                        <img
                                            src={cert.img}
                                            alt={cert.title}
                                            className="object-cover w-full h-56 mb-4 transition-transform duration-500 ease-in-out border-2 rounded-md hover:shadow-lg"
                                        />
                                        <h3 className="my-2 text-2xl font-bold text-center text-gray-700">{cert.title}</h3>
                                        <h4 className="mb-2 text-xl font-semibold text-right text-gray-900">- {cert.institute}</h4>
                                        <p className="mb-4 text-center text-gray-500">{cert.description}</p>
                                    </motion.div>
                                ))}
                            </div>
                        </motion.div>
                    </section>

                    {/* Modal for displaying certificate details */}
                    <Modal
                        isOpen={isOpen}
                        onRequestClose={closeModal}
                        contentLabel="Certificate Modal"
                        style={modalStyles}
                        ariaHideApp={false}
                    >
                        {activeCertificate && (
                            <div className="p-6 bg-white">
                                <button onClick={closeModal} className="absolute px-3 py-1 text-white bg-red-600 rounded-lg top-3 right-3">
                                    Close
                                </button>
                                <div className="flex flex-col items-center justify-center">
                                    <img
                                        src={activeCertificate.img}
                                        alt={activeCertificate.title}
                                        className="object-cover w-full h-full mb-4 border-2 rounded-md"
                                    />
                                    <h3 className="my-2 text-2xl font-bold text-gray-700 lg:text-3xl">{activeCertificate.title}</h3>
                                    <p className="mb-4 text-lg font-semibold text-gray-500">{activeCertificate.description}</p>
                                    <p className="text-center text-gray-600" dangerouslySetInnerHTML={{ __html: activeCertificate.subText }} />
                                </div>
                            </div>
                        )}
                    </Modal>
                </div>
            </motion.div>
        </div>
    );
};

export default About;