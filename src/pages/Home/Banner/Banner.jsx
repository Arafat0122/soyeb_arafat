import { motion } from 'framer-motion';
import { Link } from "react-router-dom";

const Banner = () => {
    // Define animation variants
    const textVariants = {
        hidden: { opacity: 0, y: 20 },
        visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: 'easeOut' } },
    };

    const imageVariants = {
        hidden: { opacity: 0, scale: 0.9 },
        visible: { opacity: 1, scale: 1, transition: { duration: 0.6, ease: 'easeOut' } },
    };

    return (
        <>
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 items-center mt-10">
                <motion.div 
                    className="text-5xl font-anton lg:pl-5"
                    variants={textVariants}
                    initial="hidden"
                    animate="visible"
                >
                    <h1 className="mb-2">Hi, I<span className="text-red-600 font-bold">{`'`}</span>m Arafat</h1>
                    <h2>A dedicated web developer</h2>
                    <p className="text-lg lg:text-2xl space-x-2 mt-5">
                        <span>Design </span>
                        <span className="text-red-600 font-bold">*</span>
                        <span>Development </span>
                        <span className="text-red-600 font-bold">*</span>
                        <span>Consultation</span>
                    </p>
                    <div className="navbar-end flex flex-col lg:flex-row gap-0.5 lg:gap-2 lg:ml-14">
                        <Link to={"/works"}>
                            <button className="btn bg-black text-white hover:bg-transparent hover:border hover:border-black hover:text-black font-gideon w-36">
                                My Works
                            </button>
                        </Link>
                        <Link to={'/contact'}>
                            <button className="btn btn-outline font-gideon w-36 text-black">
                                {`Let's Talk`}
                            </button>
                        </Link>
                    </div>
                </motion.div>
                <motion.div 
                    className="flex justify-center bg-[url(https://png.pngtree.com/png-clipart/20240204/original/pngtree-digital-smart-data-circuit-board-technology-design-vector-png-image_14235047.png)] bg-no-repeat bg-cover bg-center"
                    variants={imageVariants}
                    initial="hidden"
                    animate="visible"
                >
                    <img className="h-96" src="https://i.ibb.co/b1WPbgW/Arafat.png" alt="Arafat" />
                </motion.div>
            </div>
            <motion.div 
                className="h-8 bg-black text-white font-bold font-monster lg:px-5 flex items-center justify-center"
                variants={textVariants}
                initial="hidden"
                animate="visible"
            >
                <div className="space-x-2 lg:hidden text-xs">
                    <span>Design </span>
                    <span className="text-red-600 font-bold">*</span>
                    <span>Development </span>
                    <span className="text-red-600 font-bold">*</span>
                    <span>Consultation</span>
                </div>
                <div className="hidden lg:flex space-x-2">
                    <span className="text-red-600 font-bold">*</span>
                    <span>Design </span>
                    <span className="text-red-600 font-bold">*</span>
                    <span>Development </span>
                    <span className="text-red-600 font-bold">*</span>
                    <span>Consultation</span>
                    <span className="text-red-600 font-bold">*</span>
                    <span>Design </span>
                    <span className="text-red-600 font-bold">*</span>
                    <span>Development </span>
                    <span className="text-red-600 font-bold">*</span>
                    <span>Consultation</span>
                </div>
            </motion.div>
        </>
    );
};

export default Banner;