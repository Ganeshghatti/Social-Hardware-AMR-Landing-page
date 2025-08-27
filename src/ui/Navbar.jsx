"use client";

import Image from "next/image";
import { useState } from "react";
import { FaBars, FaTimes } from "react-icons/fa";

const navLinks = [
  { name: "Home", href: "#home" },
  { name: "Products", href: "#products" },
  { name: "Customise", href: "#customise" },
  { name: "Company Profile", href: "#company-profile" },
  { name: "Gallery", href: "#gallery" },
];

export default function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);

  // Smooth scroll handler
  const handleNavClick = (e, href) => {
    e.preventDefault();
    setMenuOpen(false);
    const section = document.querySelector(href);
    if (section) {
      section.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <nav className="w-full fixed top-0 px-6 lg:px-24 left-0 border-b border-gray-200 bg-white px-4 sm:px-10 h-24 flex items-center justify-between z-50">
      {/* Logo */}
      <div className="flex items-center min-w-[180px]">
        <Image
          src="/Horizontal Logo with black text.png"
          alt="Social Hardware Logo"
          width={160}
          height={40}
          priority
        />
      </div>
      {/* Desktop Nav Links */}
      <ul className="hidden md:flex flex-1 justify-center gap-8 text-sm font-semibold text-gray-800">
        {navLinks.map((link) => (
          <li key={link.name}>
            <a
              href={link.href}
              onClick={(e) => handleNavClick(e, link.href)}
              className="px-1 pb-1 transition-colors duration-200 hover:text-orange-500"
            >
              {link.name}
            </a>
          </li>
        ))}
      </ul>
      {/* Contact Button (Desktop) */}
      <div className="hidden md:flex items-center min-w-[140px] justify-end">
        <a
          href="#contact"
          onClick={(e) => handleNavClick(e, "#contact")}
          className="px-6 py-2 border-2 border-orange-500 text-orange-500 rounded-lg hover:bg-orange-50 transition-colors font-semibold"
        >
          Contact
        </a>
      </div>
      {/* Hamburger Icon (Mobile) */}
      <button
        className="md:hidden flex items-center justify-center p-2 ml-2 focus:outline-none"
        onClick={() => setMenuOpen((open) => !open)}
        aria-label="Toggle menu"
      >
        {menuOpen ? (
          <FaTimes className="w-6 h-6 text-orange-500" />
        ) : (
          <FaBars className="w-6 h-6 text-orange-500" />
        )}
      </button>
      {/* Mobile Menu */}
      {menuOpen && (
        <div className="md:hidden absolute top-full left-0 w-full bg-white shadow-lg border-b border-gray-200 animate-fade-in z-40">
          <ul className="flex flex-col items-center gap-4 py-6 text-base font-semibold text-gray-800">
            {navLinks.map((link) => (
              <li key={link.name}>
                <a
                  href={link.href}
                  onClick={(e) => handleNavClick(e, link.href)}
                  className="block px-4 py-2 hover:text-orange-500"
                >
                  {link.name}
                </a>
              </li>
            ))}
            <li>
              <a
                href="#contact"
                onClick={(e) => handleNavClick(e, "#contact")}
                className="block px-6 py-2 border-2 border-orange-500 text-orange-500 rounded-lg hover:bg-orange-50 transition-colors font-semibold mt-2"
              >
                Contact
              </a>
            </li>
          </ul>
        </div>
      )}
    </nav>
  );
}
