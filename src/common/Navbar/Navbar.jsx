import { Link, NavLink } from "react-router-dom";
import Logo from "../../components/Logo";
import "./Navbar.css"


const Navbar = () => {
    const navLinks = <>
        <li><NavLink to={"/"} className={({ isActive }) => (isActive ? "active-link" : "")} > Home </NavLink></li>
        <li><NavLink to={"/about"} className={({ isActive }) => (isActive ? "active-link" : "")} >About</NavLink></li>
        <li><NavLink to={"/works"} className={({ isActive }) => (isActive ? "active-link" : "")} >Works</NavLink></li>
    </>
    return (
        <div className="">
            <div className="navbar text-slate-700 font-fira">
                <div className="navbar-start">
                    <div className="dropdown">
                        <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
                            <svg
                                xmlns="http://www.w3.org/2000/svg"
                                className="h-5 w-5"
                                fill="none"
                                viewBox="0 0 24 24"
                                stroke="currentColor">
                                <path
                                    strokeLinecap="round"
                                    strokeLinejoin="round"
                                    strokeWidth="2"
                                    d="M4 6h16M4 12h8m-8 6h16" />
                            </svg>
                        </div>
                        <ul
                            tabIndex={0}
<<<<<<< HEAD
                            className="menu menu-sm dropdown-content bg-[#ffffff] rounded-box z-[1] mt-3 w-52 p-2 shadow-lg text-lg">
                            {navLinks}
                        </ul>
                    </div>
                    <Link to={'/'}><Logo></Logo></Link>
=======
                            className="menu menu-sm dropdown-content bg-base-100 rounded-box z-[1] mt-3 w-52 p-2 shadow text-lg">
                            {navLinks}
                        </ul>
                    </div>
                    <Logo></Logo>
>>>>>>> d8aa0efb56e8cbef389b332b84a7e54caf65721b
                </div>
                <div className="navbar-center hidden lg:flex">
                    <ul className="menu menu-horizontal px-1 font-medium text-lg space-x-1">
                        {navLinks}
                    </ul>
                </div>
                <div className="navbar-end">
<<<<<<< HEAD
                    <Link to={'/contact'}><p className="btn btn-outline text-black">{`Let's Talk`}</p></Link>
=======
                    <Link to={'/contact'}><a className="btn btn-outline">{`Let's Talk`}</a></Link>
>>>>>>> d8aa0efb56e8cbef389b332b84a7e54caf65721b
                </div>
            </div>
        </div>
    );
};

export default Navbar;