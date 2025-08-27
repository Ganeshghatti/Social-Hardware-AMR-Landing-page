"use client";

import React from "react";
import Image from "next/image";
import { FaMapMarkerAlt, FaPhone, FaEnvelope } from "react-icons/fa";
import { FaLinkedin, FaXTwitter } from "react-icons/fa6";
import { GiMedal } from "react-icons/gi";

const navLinks = [
  { name: "Home", href: "#home" },
  { name: "Products", href: "#products" },
  { name: "Customise", href: "#customise" },
  { name: "Company Profile", href: "#company-profile" },
  { name: "Gallery", href: "#gallery" },
];

export default function Footer() {
  const handleNavClick = (e, href) => {
    e.preventDefault();
    const section = document.querySelector(href);
    if (section) {
      section.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <footer className="bg-white px-6 lg:px-24 w-full text-black py-8 border-t border-gray-200">
      <div className="grid grid-cols-1 md:grid-cols-3 gap-8 w-full">
        {/* Company Info */}
        <div className="flex flex-col gap-4">
          <Image
            src="/Horizontal Logo with black text.png"
            alt="Company Logo"
            width={150}
            height={50}
            className="object-contain"
          />
          <div className="text-sm space-y-2">
            <p className="font-semibold flex items-center gap-2">
              <FaMapMarkerAlt className="text-[#ff6600]" />
              Corporate Office:
            </p>
            <p>
              8, 34/4, 3rd Cross Rd, Pragathi Layout, Veerannapalya, sadhyagappa
              layout,
              <br />
              Bengaluru, Karnataka 560045, India
            </p>
            <p className="font-semibold flex items-center gap-2">
              <FaMapMarkerAlt className="text-[#ff6600]" />
              R&D Lab:
            </p>
            <p>
              679, 9th A Cross Rd, West of Chord Road 2nd Stage, West of Chord
              Road, Stage 2,
              <br />
              Basaveshwar Nagar, Bengaluru, Karnataka 560086, India
            </p>
            <p className="font-semibold flex items-center gap-2">
              <FaPhone className="text-[#ff6600]" />
              Phone:{" "}
              <a
                href="tel:+917337743354"
                className="hover:text-[#ff6600] underline"
              >
                +91 73377 43354
              </a>
            </p>
            <p className="font-semibold flex items-center gap-2">
              <FaEnvelope className="text-[#ff6600]" />
              Email:{" "}
              <a
                href="mailto:info@socialhardware.in"
                className="hover:text-[#ff6600] underline"
              >
                info@socialhardware.in
              </a>
            </p>
          </div>
        </div>

        {/* ISO Certifications */}
        <div className="text-sm space-y-2">
          <h3 className="font-semibold flex items-center gap-2">
            ISO Certifications
          </h3>
          <br />
          <ul className="space-y-2 ml-1 list-disc pl-5">
            <li>
              <span className="font-semibold">ISO 9001:2015</span>: Quality
              Management System
            </li>
            <li>
              <span className="font-semibold">ISO 31000:2018</span>: Risk
              Management
            </li>
            <li>
              <span className="font-semibold">ISO/EC 27001</span>: Information
              Security Management
            </li>
            <li>
              <span className="font-semibold">ISO 13850:2015</span>: Safety of
              Machinery - Emergency Stop Functions
            </li>
            <li>
              <span className="font-semibold">ISO 10218-1:2011</span>: Robots
              and Robotic Devices - Safety Requirements
            </li>
            <li>
              <span className="font-semibold">ISOMEC 17025</span>: Laboratory
              Testing Accreditation
            </li>
          </ul>
        </div>

        {/* Navigation Links */}
        <div className="flex flex-col space-y-1 items-center text-center">
          <h3 className="font-semibold">Links</h3>
          <br />
          <ul className="flex flex-col gap-3 text-sm text-gray-800">
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
          <div className="flex items-center gap-4 mt-4">
            <a
              href="https://www.linkedin.com/company/social-hardware/"
              target="_blank"
              rel="noopener noreferrer"
              className="text-gray-600 hover:text-[#ff6600] transition-colors"
            >
              <FaLinkedin size={24} />
            </a>
            <a
              href="https://x.com/social_hardware"
              target="_blank"
              rel="noopener noreferrer"
              className="text-gray-600 hover:text-[#ff6600] transition-colors"
            >
              <FaXTwitter size={24} />
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}
