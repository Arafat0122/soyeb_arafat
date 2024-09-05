import { Link } from "react-router-dom";
import Logo2 from "../../components/Logo2";
import { FaPhone } from "react-icons/fa";
import { IoIosMail } from "react-icons/io";
import { IoLocationSharp } from "react-icons/io5";
import { FaLinkedin, FaFacebook, FaGithub } from "react-icons/fa";

const Footer = () => {
    return (
        <footer className="bg-slate-300 p-10 pb-0 text-gray-900">
            <div className="grid grid-cols-1 lg:grid-cols-3 gap-7">
                <aside className="flex flex-col justify-center items-center max-w-full">
                    <Logo2 />
                    <p className="text-center">
                        A dedicated web developer <br /> passionate about creating dynamic and user-friendly web applications
                    </p>
                </aside>
                <nav className="flex flex-col justify-center items-center max-w-full">
                    <h6 className="text-lg font-bold pb-2 text-black">Quick Links</h6>
                    <Link to={'/about'} className="link link-hover">About</Link>
                    <Link to={'/works'} className="link link-hover">Works</Link>
                    <Link to={'/contact'} className="link link-hover">{`Let's Talk`}</Link>
                </nav>
                <nav className="flex flex-col justify-center items-center max-w-full">
                    <h6 className="text-lg font-bold pb-2 text-black">Contact</h6>
                    <p className="flex items-center gap-1"><IoLocationSharp /> Rangpur, Bangladesh</p>
                    <p className="flex items-center gap-1"><IoIosMail className="text-xl" /> soyebarafat0122@yahoo.com</p>
                    <p className="flex items-center gap-1"><FaPhone /> +880 1317-110122</p>
                </nav>
            </div>
            <div className="footer-center bg-slate-300 pt-3">
                <nav className="mb-3">
                    <div className="flex items-center justify-center gap-4">
                        <Link to={'mailto:soyebarafat0122@yahoo.com'} target="_blank" rel="noopener noreferrer">
                            <IoIosMail className="text-4xl" />
                        </Link>
                        <Link to={'https://github.com/Arafat0122'} target="_blank" rel="noopener noreferrer">
                            <FaGithub className="text-4xl" />
                        </Link>
                        <Link to={'https://www.facebook.com/arafatsoyeb?mibextid=ZbWKwL'} target="_blank" rel="noopener noreferrer">
                            <FaFacebook className="text-4xl" />
                        </Link>
                        <Link to={'https://www.linkedin.com/in/soyeb-ahmed-arafat-b01ab9313/'} target="_blank" rel="noopener noreferrer">
                            <FaLinkedin className="text-4xl" />
                        </Link>
                    </div>
                </nav>
                <aside>
                    <p>Copyright © {new Date().getFullYear()} - All rights reserved by Soyeb Ahmed Arafat</p>
                </aside>
            </div>
        </footer>
    );
};

export default Footer;