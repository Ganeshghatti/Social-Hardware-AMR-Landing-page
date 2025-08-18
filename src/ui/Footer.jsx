import React from "react";
import Image from "next/image";

export default function Footer() {
  return (
    <footer className="bg-white w-full text-black py-8 border-t border-gray-200">
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
            <p className="font-semibold">Corporate Office:</p>
            <p>
              8, 34/4, 3rd Cross Rd, Pragathi Layout, Veerannapalya, sadhyagappa
              layout,
              <br />
              Bengaluru, Karnataka 560045, India
            </p>
            <p className="font-semibold">R&D Lab:</p>
            <p>
              679, 9th A Cross Rd, West of Chord Road 2nd Stage, West of Chord
              Road, Stage 2,
              <br />
              Basaveshwar Nagar, Bengaluru, Karnataka 560086, India
            </p>
            <p className="font-semibold">
              Phone:{" "}
              <a
                href="tel:+917337743354"
                className="hover:text-[#ff6600] underline"
              >
                +91 73377 43354
              </a>
            </p>
            <p className="font-semibold">
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
          <h3 className="font-semibold">ISO Certifications</h3>
          <ul className="list-disc list-inside space-y-1">
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
        <div className="flex flex-col space-y-2 md:text-center">
          <h3 className="font-semibold mb-2">Navigation</h3>
          {[
            { name: "Home", href: "#home" },
            { name: "Products", href: "#products" },
            { name: "Customize", href: "#customize" },
            { name: "Why Us", href: "#whyus" },
          ].map((link, index) => (
            <a
              key={index}
              href={link.href}
              className="text-sm font-medium hover:text-[#ff6600] transition-colors"
            >
              {link.name}
            </a>
          ))}
        </div>
      </div>
    </footer>
  );
}
