"use client";

import React, { useState } from "react";
import Image from "next/image";
import SectionTitle from "@/ui/SectionTitle";
import { FaUser, FaEnvelope, FaPhone, FaCommentAlt } from "react-icons/fa";
import axios from "axios";

export default function Contact() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    message: "",
    countryCode: "+91",
  });
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    setError("");

    try {
      const response = await axios.post(
        "https://www.socialhardware.in/api/contact",
        formData
      );

      if (response.status === 200) {
        setFormData({
          name: "",
          email: "",
          phone: "",
          message: "",
          countryCode: "+91",
        });
        alert("Message sent successfully!");
      }
    } catch (error) {
      setError("Failed to send message. Please try again.");
      console.error("Error sending message:", error);
    } finally {
      setLoading(false);
    }
  };

  return (
    <section
      className="flex bg-white gap-6 md:gap-0 flex-col mt-12 ml-2 px-6 lg:px-24 "
      id="contact"
    >
      <SectionTitle title="Contact us" />
      <div className="flex gap-6 md:gap-0 flex-col md:flex-row">
        <div className="relative w-full md:w-2/5 lg:w-1/2 flex justify-center">
          <Image
            src="/Contact/Icon.png"
            alt=""
            width={400}
            height={400}
            className="object-contain absolute z-0 w-4/5"
          />
          <Image
            src="/Contact/robot.png"
            alt="A cobot in action"
            width={400}
            height={400}
            className="object-contain z-10 relative w-full"
          />
        </div>
        <div className="relative flex flex-col w-full md:w-3/5 lg:w-1/2 z-10 ">
          <div className="bg-white flex flex-col p-8 rounded-lg w-full md:w-2/3 md:self-center rounded-2xl border-gray-300 hover:border-gray-300 border shadow-md hover:shadow-lg transition-all duration-300 ease-in-out hover:scale-101">
            <form className="space-y-10" onSubmit={handleSubmit}>
              <div>
                <label
                  htmlFor="name"
                  className=" text-sm font-medium text-black flex gap-2 items-center"
                >
                  <FaUser className="text-black" />
                  Name
                </label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  required
                  value={formData.name}
                  onChange={handleChange}
                  className="mt-1 w-full bg-transparent border-b-2 border-black focus:outline-none focus:border-black text-black"
                />
              </div>
              <div>
                <label
                  htmlFor="email"
                  className=" text-sm font-medium text-black flex gap-2 items-center"
                >
                  <FaEnvelope className="text-black" />
                  Email
                </label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  required
                  value={formData.email}
                  onChange={handleChange}
                  className="mt-1 w-full bg-transparent border-b-2 border-black focus:outline-none focus:border-black text-black"
                />
              </div>
              <div>
                <label
                  htmlFor="phone"
                  className=" text-sm font-medium text-black flex gap-2 items-center"
                >
                  <FaPhone className="text-black" />
                  Phone
                </label>
                <input
                  type="tel"
                  id="phone"
                  name="phone"
                  value={formData.phone}
                  onChange={handleChange}
                  className="mt-1 w-full bg-transparent border-b-2 border-black focus:outline-none focus:border-black text-black"
                />
              </div>
              <div>
                <label
                  htmlFor="message"
                  className=" text-sm font-medium text-black flex gap-2 items-center"
                >
                  <FaCommentAlt className="text-black" />
                  Message
                </label>
                <textarea
                  id="message"
                  name="message"
                  rows="4"
                  required
                  value={formData.message}
                  onChange={handleChange}
                  className="mt-1 w-full bg-transparent border-b-2 border-black focus:outline-none focus:border-black text-black"
                ></textarea>
              </div>
              {error && <div className="text-red-500 text-sm">{error}</div>}
              <button
                type="submit"
                disabled={loading}
                className="w-full bg-[#ff6600] text-white py-2 px-4 rounded-md hover:bg-orange-600 transition-colors cursor-pointer font-semibold text-sm disabled:opacity-50 disabled:cursor-not-allowed"
              >
                {loading ? "Sending..." : "Send Message"}
              </button>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
}
