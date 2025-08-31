import { useState } from "react";
import { Link, NavLink } from "react-router-dom";
import { Menu, X } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";
import Buttons from "../Buttons/Buttons";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const handleClose = () => setIsOpen(false);

  const navLinks = (
    <>
      <li>
        <NavLink
          to="/"
          onClick={handleClose}
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
          onClick={handleClose}
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
          onClick={handleClose}
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
          onClick={handleClose}
          className={({ isActive }) =>
            `px-3 py-2 ${isActive ? "text-blue-500" : "text-white"}`
          }
        >
          Services
        </NavLink>
      </li>
      <li>
        <Link to="/contact" onClick={handleClose}>
          <Buttons btnText="Lets Talk" />
        </Link>
      </li>
    </>
  );

  return (
    <nav className="fixed left-0 right-0 z-50 bg-gray-950 backdrop-blur-xl">
      <div className="flex items-center justify-between px-6 py-4 mx-auto text-white max-w-7xl">
        <Link to="/" onClick={handleClose}>
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

      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.3, ease: "easeInOut" }}
            className="absolute left-0 w-full px-6 py-6 bg-gray-950 md:hidden"
          >
            <ul className="flex flex-col space-y-4">{navLinks}</ul>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
};

export default Navbar;
