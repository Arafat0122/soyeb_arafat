

const PersonalData = () => {
    return (
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
            </div>
        </div>
    );
};

export default PersonalData;
