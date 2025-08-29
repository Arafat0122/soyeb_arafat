import { Link, NavLink } from "react-router-dom";
import Logo from "../../components/Logo";
import "./Navbar.css";
import Buttons from "../Buttons/Buttons";

const Navbar = () => {
  const navLinks = (
    <>
      <li>
        <NavLink
          to="/"
          className={({ isActive }) => (isActive ? "active-link" : "")}
        >
          Home
        </NavLink>
      </li>
      <li>
        <NavLink
          to="/about"
          className={({ isActive }) => (isActive ? "active-link" : "")}
        >
          About
        </NavLink>
      </li>
      <li>
        <NavLink
          to="/works"
          className={({ isActive }) => (isActive ? "active-link" : "")}
        >
          Project
        </NavLink>
      </li>
      
      <li>
        <NavLink
          to="/services"
          className={({ isActive }) => (isActive ? "active-link" : "")}
        >
          Services
        </NavLink>
      </li>
    </>
  );

  return (
    <div className="fixed left-0 right-0 z-50 backdrop-blur-xl bg-gray-950">
      <div className="mx-auto text-white navbar font-fira max-w-7xl ">
        <div className="navbar-start">
          <div className="dropdown">
            <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="w-5 h-5"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M4 6h16M4 12h8m-8 6h16"
                />
              </svg>
            </div>
            <ul
              tabIndex={0}
              className="menu menu-sm dropdown-content  z-[1] mt-3 w-52 p-2 shadow-lg text-[18px]"
            >
              {navLinks}
            </ul>
          </div>
          <Link to="/">
            <Logo />
          </Link>
        </div>
        <div className="hidden navbar-center lg:flex">
          <ul className="px-1 space-x-1 text-[18px] font-medium menu menu-horizontal">
            {navLinks}
          </ul>
        </div>
        <div className="navbar-end">
          <Link to="/contact">
            <div className="">
              <Buttons btnText="Lets Talk" />
            </div>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
