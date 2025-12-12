import { FaGithub, FaLinkedin, FaTwitter } from "react-icons/fa";
import { Link } from "react-router-dom";

function Footer() {
  return (
    <footer className="bg-gray-800 text-white py-8">
      <div className="max-w-7xl mx-auto px-4 grid grid-cols-1 md:grid-cols-3 gap-8">
        {/* Brand Section */}
        <div>
          <h2 className="text-xl font-bold text-blue-600 mb-2">Messer</h2>
          <p className="text-sm">
            A simple and fast real-time messaging platform built with modern web
            technologies.
          </p>
        </div>

        {/* Quick Links */}
        <div>
          <h3 className="text-lg font-semibold text-white mb-3">Quick Links</h3>
          <ul className="space-y-2">
            <li>
              <Link to="/" className="hover:text-blue-400 transition-colors">
                Home
              </Link>
            </li>
            <li>
              <Link
                to="/about"
                className="hover:text-blue-400 transition-colors"
              >
                About
              </Link>
            </li>
            <li>
              <Link
                to="/contact"
                className="hover:text-blue-400 transition-colors"
              >
                Contact
              </Link>
            </li>
            <li>
              <Link
                to="/privacy"
                className="hover:text-blue-400 transition-colors"
              >
                Privacy Policy
              </Link>
            </li>
          </ul>
        </div>

        {/* Social Media */}
        <div>
          <h3 className="text-lg font-semibold text-red-600 mb-3">Follow Us</h3>
          <div className="flex space-x-4">
            <a
              href="https://github.com/"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-blue-400"
            >
              <FaGithub size={22} />
            </a>
            <a
              href="https://linkedin.com/"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-blue-400"
            >
              <FaLinkedin size={22} />
            </a>
            <a
              href="https://twitter.com/"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-blue-400"
            >
              <FaTwitter size={22} />
            </a>
          </div>
        </div>
      </div>

      {/* Divider */}
      <div className="border-t border-gray-700 mt-8 pt-4 text-center text-sm text-gray-400">
        © {new Date().getFullYear()} Messer. All rights reserved.
      </div>
    </footer>
  );
}

export default Footer;
