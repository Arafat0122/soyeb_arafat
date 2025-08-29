import { useState } from "react";
import { Link, NavLink } from "react-router-dom";
import { Menu, X } from "lucide-react";
import Buttons from "../Buttons/Buttons";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const navLinks = (
    <>
      <li>
        <NavLink
          to="/"
          className={({ isActive }) =>
            `px-3 py-2 ${isActive ? "text-blue-500" : "text-white"}`
          }
        >
          Home
        </NavLink>
      </li>
      <li>
        <NavLink
          to="/about"
          className={({ isActive }) =>
            `px-3 py-2 ${isActive ? "text-blue-500" : "text-white"}`
          }
        >
          About
        </NavLink>
      </li>
      <li>
        <NavLink
          to="/works"
          className={({ isActive }) =>
            `px-3 py-2 ${isActive ? "text-blue-500" : "text-white"}`
          }
        >
          Projects
        </NavLink>
      </li>
      <li>
        <NavLink
          to="/services"
          className={({ isActive }) =>
            `px-3 py-2 ${isActive ? "text-blue-500" : "text-white"}`
          }
        >
          Services
        </NavLink>
      </li>
      <li>
        <Link to="/contact">
          <Buttons btnText="Lets Talk" />
        </Link>
      </li>
    </>
  );

  return (
    <nav className="fixed left-0 right-0 z-50 bg-gray-950 backdrop-blur-xl">
      <div className="flex items-center justify-between px-6 py-4 mx-auto text-white max-w-7xl">
        
        <Link to="/">
          <img src="/logo-main.png" alt="Logo" className="h-[60px]" />
        </Link>

        <ul className="hidden space-x-4 text-[18px] font-medium md:flex items-center">
          {navLinks}
        </ul>

       
        <button
          className="md:hidden"
          onClick={() => setIsOpen(!isOpen)}
        >
          {isOpen ? <X size={28} /> : <Menu size={28} />}
        </button>
      </div>

      
      {isOpen && (
        <div className="absolute left-0 w-full px-6 py-6 bg-gray-900 md:hidden">
          <ul className="flex flex-col space-y-4">{navLinks}</ul>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
