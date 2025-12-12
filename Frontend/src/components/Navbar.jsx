import { useState } from "react";
import { MdMenu, MdClose } from "react-icons/md";

function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const toggleMenu = () => setIsOpen((prev) => !prev);

  return (
    <nav className="relative px-4 py-3 flex justify-between items-center shadow-md">
      {/* Brand */}
      <p className="text-xl font-bold text-blue-600">Messer</p>

      {/* Desktop Links */}
      <div className="hidden md:flex gap-6">
        <a href="#" className="hover:text-blue-400 transition-colors">
          Home
        </a>
        <a href="#" className="hover:text-blue-400 transition-colors">
          About
        </a>
        <a href="#" className="hover:text-blue-400 transition-colors">
          Contact
        </a>
      </div>

      {/* Mobile Menu Icon */}
      <button
        className="md:hidden focus:outline-none"
        onClick={toggleMenu}
        aria-label="Toggle Menu"
      >
        {isOpen ? <MdClose size={28} /> : <MdMenu size={28} />}
      </button>

      {/* Mobile Dropdown Menu */}
      <div
        className={`absolute top-full right-1 rounded w-1/4 bg-transparent flex flex-col items-center gap-4 py-4 transition-all duration-300 ease-in-out md:hidden ${
          isOpen ? "opacity-100 visible" : "opacity-0 invisible"
        }`}
      >
        <a
          href="#"
          className="hover:text-blue-400 font-bold"
          onClick={toggleMenu}
        >
          Home
        </a>
        <a
          href="#"
          className="hover:text-blue-400 font-bold"
          onClick={toggleMenu}
        >
          About
        </a>
        <a
          href="#"
          className="hover:text-blue-400 font-bold"
          onClick={toggleMenu}
        >
          Contact
        </a>
      </div>
    </nav>
  );
}

export default Navbar;
