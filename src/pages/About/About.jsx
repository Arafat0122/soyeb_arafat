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
            title: "HP Life Certificate",
            img: "https://i.ibb.co/30cXbng/hp.jpg",
            description: "Soyeb Ahmed Arafat has successfully completed the HP LIFE online course Effective Leadership.",
            subText: "Presented 3/6/2024 by Stephanie Bormann, Deputy Director, HP Foundation.",
        },
        {
            title: "Programming Hero Certificate",
            img: "https://i.ibb.co/T2YYSX8/ph.jpg",
            description: "Soyeb Ahmed Arafat learned React, HTML, CSS, JavaScript, and more through this comprehensive web development course.",
            subText: "A complete web development course by Jhankar Mahbub.",
        },
        {
            title: "Coursera Certificate",
            img: "https://i.ibb.co/thc2h2J/cr.jpg",
            description: "Use Canva to Create Desktop and Mobile-friendly Web Pages",
            subText: 'Verify Certificate at: <a href="https://coursera.org/verify/KP6YNDRE5GKC" class="text-blue-500">Verification Link</a>',
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
                <div className="container mx-auto px-6">
                    {/* About Me Section */}
                    <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold font-monster text-center mb-8">About Me</h2>
                    <motion.div
                        initial={{ opacity: 0, scale: 0.95 }}
                        animate={{ opacity: 1, scale: 1 }}
                        transition={{ duration: 0.8, ease: "easeOut" }}
                        className="bg-white rounded-lg shadow-lg py-8 flex flex-col lg:flex-row justify-center items-center lg:items-start gap-5 hover:shadow-2xl transition-shadow duration-500 ease-in-out"
                    >
                        <div className="h-full my-auto w-full md:w-1/3 flex items-center justify-center">
                            <img
                                src="https://cdn-icons-png.flaticon.com/512/9321/9321618.png"
                                alt="Arafat"
                                className="w-48 h-48 rounded-full transform hover:scale-105 transition-transform duration-300 ease-in-out"
                            />
                        </div>
                        <div className="w-full lg:w-2/3 px-5 md:px-10 lg:pl-8">
                            <p className="text-lg md:text-xl lg:text-2xl font-light leading-relaxed text-gray-700 mb-4">
                                I am Soyeb Ahmed Arafat, a web developer skilled in HTML, CSS, JavaScript, React, Tailwind CSS, Node.js, Express.js, MongoDB, Firebase, and Git. With experience working on various web projects, I am dedicated to creating advanced and user-friendly websites. I am always eager to learn new technologies and bring innovative solutions to projects. My goal is to create beautiful and functional web applications for users while continuously improving my skills and experience in web development.
                            </p>
                            <div className="text-center text-sm md:text-base flex flex-col md:flex-row gap-2 justify-center lg:justify-start items-center mt-6">
                                <a href="/Soyeb Ahmed Arafat Resume.pdf" download="Soyeb Ahmed Arafat Resume.pdf" className="inline-block bg-red-600 text-white py-2 px-4 rounded-lg font-bold transition duration-300 ease-in-out hover:bg-red-700 transform hover:scale-105">
                                    Download Resume (PDF)
                                </a>
                                <a href="/Soyeb Ahmed Arafat Resume.docx" download="Soyeb Ahmed Arafat Resume.docx" className="inline-block bg-blue-600 text-white py-2 px-4 rounded-lg font-bold transition duration-300 ease-in-out hover:bg-blue-700 transform hover:scale-105">
                                    Download Resume (DOCX)
                                </a>
                            </div>
                        </div>
                    </motion.div>

                    {/* Certifications Section */}
                    <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold font-monster text-center lg:mt-10 my-8">My Certifications</h2>
                    <section className="bg-gray-100 lg:py-12">
                        <motion.div
                            initial={{ opacity: 0, y: 50 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.8, ease: "easeOut", delay: 0.2 }}
                            className="max-w-6xl mx-auto lg:px-4"
                        >
                            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
                                {certificates.map((cert, index) => (
                                    <motion.div
                                        key={index}
                                        whileHover={{ scale: 1.05 }}
                                        className="bg-white rounded-lg shadow-lg p-6 flex flex-col justify-center items-center transition duration-500 ease-in-out cursor-pointer"
                                        onClick={() => openModal(cert)}
                                        style={{ width: '100%', height: '450px' }}
                                    >
                                        <img
                                            src={cert.img}
                                            alt={cert.title}
                                            className="w-full h-56 object-cover rounded-md mb-4 border-2 hover:shadow-lg transition-transform duration-500 ease-in-out"
                                        />
                                        <h3 className="text-2xl lg:text-3xl font-bold my-2 text-gray-700">{cert.title}</h3>
                                        <p className="text-lg font-semibold text-gray-500 mb-4 text-center">{cert.description}</p>
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
                            <div className="bg-white p-6">
                                <button onClick={closeModal} className="absolute top-3 right-3 bg-red-600 text-white px-3 py-1 rounded-lg">
                                    Close
                                </button>
                                <div className="flex flex-col justify-center items-center">
                                    <img
                                        src={activeCertificate.img}
                                        alt={activeCertificate.title}
                                        className="w-full h-full object-cover rounded-md mb-4 border-2"
                                    />
                                    <h3 className="text-2xl lg:text-3xl font-bold my-2 text-gray-700">{activeCertificate.title}</h3>
                                    <p className="text-lg font-semibold text-gray-500 mb-4">{activeCertificate.description}</p>
                                    <p className="text-gray-600 text-center" dangerouslySetInnerHTML={{ __html: activeCertificate.subText }} />
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