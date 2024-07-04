

const About = () => {
    return (
        <div>
            <div className="py-10">
                <div className="container mx-auto px-6">
                    <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold font-monster text-center mb-8">About Me</h2>
                    <div className="bg-white rounded-lg shadow-lg py-8 flex flex-col lg:flex-row justify-center items-center lg:items-start gap-5">
                        <div className="h-full my-auto w-full md:w-1/3 flex items-center justify-center">
                            <img src="https://cdn-icons-png.flaticon.com/512/9321/9321618.png" alt="Arafat" className="w-48 h-48" />
                        </div>
                        <div className="w-full lg:w-2/3 px-5 md:px-10 lg:pl-8">
                            <p className="text-lg md:text-xl lg:text-2xl font-light leading-relaxed text-gray-700 mb-4">
                                I am Soyeb Ahmed Arafat, a web developer skilled in HTML, CSS, JavaScript, React, Tailwind CSS, Node.js, Express.js, MongoDB, Firebase, and Git. With experience working on various web projects, I am dedicated to creating advanced and user-friendly websites. I am always eager to learn new technologies and bring innovative solutions to projects. My goal is to create beautiful and functional web applications for users while continuously improving my skills and experience in web development.
                            </p>
                            <div className="text-center md:text-left">
                                <a href="/resume_arafat.pdf" download="a.pdf" className="inline-block bg-green-500 text-white py-2 px-4 rounded-lg font-bold transition duration-300 ease-in-out hover:bg-green-600">
                                    Download Resume
                                </a>
                            </div>
                        </div>
                    </div>
                    <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold font-monster text-center my-8">My Certifications</h2>
                    <section className="bg-gray-100 lg:py-12">
                        <div className="max-w-6xl mx-auto px-4">
                            <div className="grid grid-cols-1 gap-8">
                                {/* Certificate 1 - HP Life */}
                                <div className="bg-white rounded-lg shadow-lg p-6 flex flex-col justify-center items-center px-12">
                                    <img src="https://i.ibb.co/30cXbng/hp.jpg" alt="HP Life Certificate" className="h-2/3 object-cover mb-4 border-2 hover:scale-125 lg:hover:scale-105" />
                                    <h3 className="text-2xl lg:text-3xl font-bold my-2">HP Life Certificate</h3>
                                    <p className="text-lg font-semibold text-gray-500 mb-4">Certificate of Completion</p>
                                    <p className="text-gray-600 lg:px-10">
                                        Soyeb Ahmed Arafat has successfully completed the HP LIFE online course Effective Leadership. By completing this course, the above-named student has learned about effective leadership and its importance, how to successfully leverage different leadership strategies, and why ethics plays a role in effective leadership. Presented 3/6/2024 by Stephanie Bormann, Deputy Director, HP Foundation.
                                    </p>
                                </div>

                                {/* Certificate 2 - Programming Hero */}
                                <div className="bg-white rounded-lg shadow-lg p-6 flex flex-col justify-center items-center">
                                    <img src="https://i.ibb.co/T2YYSX8/ph.jpg" alt="Programming Hero Certificate" className="h-2/3 object-cover mb-4 border-2 hover:scale-125 lg:hover:scale-105" />
                                    <h3 className="text-2xl lg:text-3xl font-bold my-2">Programming Hero Certificate</h3>
                                    <p className="text-sm text-gray-500 mb-4">A complete web development course by Jhankar Mahbub</p>
                                    <p className="text-gray-600 lg:px-10">
                                        Soyeb Ahmed Arafat learned React, HTML, CSS, JavaScript, and more through this comprehensive web development course.
                                    </p>
                                </div>

                                {/* Certificate 3 - Coursera */}
                                <div className="bg-white rounded-lg shadow-lg p-6 flex flex-col justify-center items-center">
                                    <img src="https://i.ibb.co/thc2h2J/cr.jpg" alt="Coursera Certificate" className="h-2/3 object-cover mb-4 border-2 hover:scale-125 lg:hover:scale-105" />
                                    <h3 className="text-2xl lg:text-3xl font-bold my-2">Coursera Certificate</h3>
                                    <p className="font-semibold text-gray-500 mb-4">Use Canva to Create Desktop and Mobile-friendly Web Pages</p>
                                    <p className="text-gray-600 lg:px-10">
                                        Soyeb Ahmed Arafat has successfully completed an online non-credit project authorized by Coursera Project Network. Coursera has confirmed the identity of this individual and their participation in the project.
                                        <br />
                                        Verify at: <a href="https://coursera.org/verify/KP6YNDRE5GKC" target="_blank" rel="noopener noreferrer" className="text-blue-500">Coursera Verification Link</a>
                                    </p>
                                </div>
                            </div>
                        </div>
                    </section>
                </div>
            </div>
        </div>
    );
};

export default About;