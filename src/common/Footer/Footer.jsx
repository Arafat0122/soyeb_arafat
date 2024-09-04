import { Link } from "react-router-dom";
import Logo2 from "../../components/Logo2";
import { FaPhone } from "react-icons/fa6";
import { IoIosMail } from "react-icons/io";
import { IoLocationSharp } from "react-icons/io5";


const Footer = () => {
    return (
        <div>
<<<<<<< HEAD
            <footer className="grid grid-cols-1 lg:grid-cols-3 gap-7 bg-slate-300 p-10">
=======
            <footer className="grid grid-cols-1 lg:grid-cols-3 gap-7 bg-slate-300 text-base-content p-10">
>>>>>>> d8aa0efb56e8cbef389b332b84a7e54caf65721b
                <aside className="flex flex-col justify-center items-center max-w-full">
                    <Logo2 />
                    <p className="text-center">
                        A dedicated web developer  <br /> passionate about creating dynamic and user-friendly web applications
                    </p>
                </aside>
                <nav className="flex flex-col justify-center items-center max-w-full">
                    <h6 className="footer-title">Quick Links</h6>
                    <Link to={'/about'} className="link link-hover">About</Link>
                    <Link to={'/works'} className="link link-hover">Works</Link>
                    <Link to={'/contact'} className="link link-hover">{`Let's Talk`}</Link>
                </nav>
                <nav className="flex flex-col justify-center items-center max-w-full space-y-3">
                    <h6 className="footer-title">Contact</h6>
                    <p className="flex items-center gap-1"><IoLocationSharp />Lalbag, Rangpur</p>
                    <p className="flex items-center gap-1"><IoIosMail className="text-xl" /> soyebarafat0122@yahoo.com</p>
                    <p className="flex items-center gap-1"><FaPhone></FaPhone> +880 1317-110122</p>
                </nav>
            </footer>
<<<<<<< HEAD
            <footer className="footer footer-center bg-slate-300 pb-10">
=======
            <footer className="footer footer-center bg-slate-300 text-base-content pb-10">
>>>>>>> d8aa0efb56e8cbef389b332b84a7e54caf65721b
                <nav>
                    <div className="grid grid-flow-col gap-4">
                        <Link to={'mailto:soyebarafat0122@yahoo.com'} target="_blank" rel="noopener noreferrer">
                            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" className="w-7 h-7">
                                <path d="M2.003 5.884L10 9.882l7.997-3.998A2 2 0 0016 4H4a2 2 0 00-1.997 1.884z"></path>
                                <path d="M18 8.118l-8 4-8-4V14a2 2 0 002 2h12a2 2 0 002-2V8.118z"></path>
                            </svg>
                        </Link>
                        <Link to={'https://github.com/Arafat0122'} target="_blank" rel="noopener noreferrer">
                            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="24" height="24" className="fill-current">
                                <path d="M12 0a12 12 0 00-3.793 23.387c.603.111.824-.262.824-.577 0-.285-.01-1.04-.015-2.041-3.338.724-4.042-1.611-4.042-1.611-.545-1.385-1.332-1.755-1.332-1.755-1.089-.743.083-.728.083-.728 1.205.085 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.305 3.496.997.108-.775.417-1.305.76-1.605-2.665-.305-5.467-1.332-5.467-5.93 0-1.31.468-2.385 1.237-3.227-.125-.307-.535-1.527.116-3.18 0 0 1.01-.322 3.3 1.234.957-.266 1.98-.399 3-.405 1.02.006 2.043.139 3 .405 2.29-1.556 3.297-1.234 3.297-1.234.652 1.653.242 2.873.117 3.18.77.842 1.236 1.917 1.236 3.227 0 4.61-2.807 5.622-5.477 5.922.43.372.814 1.104.814 2.222 0 1.605-.015 2.896-.015 3.292 0 .315.215.693.825.575A12 12 0 0012 0z" />
                            </svg>
                        </Link>
                        <Link  to={'https://www.facebook.com/arafatsoyeb?mibextid=ZbWKwL'} target="_blank" rel="noopener noreferrer">
                            <svg
                                xmlns="http://www.w3.org/2000/svg"
                                width="24"
                                height="24"
                                viewBox="0 0 24 24"
                                className="fill-current">
                                <path
                                    d="M9 8h-3v4h3v12h5v-12h3.642l.358-4h-4v-1.667c0-.955.192-1.333 1.115-1.333h2.885v-5h-3.808c-3.596 0-5.192 1.583-5.192 4.615v3.385z"></path>
                            </svg>
                        </Link>
                    </div>
                </nav>
                <aside>
                    <p>Copyright © ${new Date().getFullYear()} - All right reserved by Soyeb Ahmed Arafat</p>
                </aside>
            </footer>
        </div>
    );
};

export default Footer;