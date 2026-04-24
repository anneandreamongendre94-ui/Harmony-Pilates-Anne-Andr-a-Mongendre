import { Link, useLocation } from "react-router-dom";
import { motion } from "motion/react";

export function Navbar() {
  const location = useLocation();
  
  const navLinks = [
    { name: "Home", path: "/" },
    { name: "About", path: "/about" },
    { name: "Services", path: "/services" },
    { name: "Contact", path: "/contact" },
  ];

  return (
    <header className="sticky top-0 z-50 bg-[#FDFCF8]/80 backdrop-blur-md border-b border-stone-100 shadow-[0_4px_20px_rgba(146,166,130,0.05)]">
      <nav className="flex justify-between items-center w-full px-6 md:px-12 py-6 max-w-7xl mx-auto">
        <Link to="/" className="text-2xl font-serif italic text-primary-container">
          Harmony Pilates
        </Link>
        <div className="hidden md:flex items-center gap-12">
          {navLinks.map((link) => {
            const isActive = location.pathname === link.path;
            return (
              <Link
                key={link.name}
                to={link.path}
                className={`relative font-serif tracking-tight transition-colors duration-300 ${
                  isActive ? "text-primary-container font-medium" : "text-stone-500 hover:text-primary-container"
                }`}
              >
                {link.name}
                {isActive && (
                  <motion.div
                    layoutId="underline"
                    className="absolute -bottom-1 left-0 right-0 h-0.5 bg-primary-container"
                  />
                )}
              </Link>
            );
          })}
        </div>
        <button className="bg-primary text-on-primary px-6 py-2 rounded-lg text-sm font-semibold hover:shadow-lg transition-all duration-300 ease-in-out transform hover:scale-[1.02]">
          Book Class
        </button>
      </nav>
    </header>
  );
}
