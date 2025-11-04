"use client";

import React, { useState } from "react";
import { ImProfile } from "react-icons/im";
import { HiCheckCircle } from "react-icons/hi";
import axios from "axios";
import { useToast } from "./Toast";
import SectionTitle from "@/ui/SectionTitle";
import Image from "next/image";

export default function CompanyProfile() {
  const [email, setEmail] = useState("");
  const [name, setName] = useState("");
  const [loading, setLoading] = useState(false);
  const { showSuccess, showError } = useToast();

  const validateEmail = (email) => {
    return /\S+@\S+\.\S+/.test(email);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!validateEmail(email)) {
      showError("Please enter a valid email address.");
      return;
    }
    setLoading(true);
    try {
      const res = await axios.post(
        "https://www.socialhardware.in/api/send-company-profile",
        { email, name }
      );
      if (res.status === 200) {
        showSuccess("Thank you! The company profile will be sent to your inbox.");
        setEmail("");
        setName("");
      } else {
        showError("Sorry, there was a problem sending the profile. Please try again later.");
      }
    } catch (err) {
      showError("Network error. Please try again later.");
    } finally {
      setLoading(false);
    }
  };

  return (
    <section
      className="w-full py-8 lg:py-16"
      id="company-profile"
    >
      <div className="w-full border border-gray-200 bg-gradient-to-r from-white via-gray-50 to-white shadow-[0_10px_40px_rgba(0,0,0,0.06)] ring-1 ring-gray-100 pt-8 lg:pt-12 pb-6 lg:pb-8">
        {/* Section Title*/}
        <div className="flex justify-center mb-6 lg:mb-8">
          <div className="[&_h2]:text-[16px] lg:[&_h2]:text-[20px] [&_h2]:font-semibold [&_h2]:!text-[#ff6600] [&_svg]:w-5 lg:[&_svg]:w-6">
            <SectionTitle title="REQUEST COMPANY PROFILE" />
          </div>
        </div>

        <p className="text-[#777777] text-center mb-6 lg:mb-7 max-w-4xl mx-auto text-[16px] lg:text-[20px] font-semibold px-4">
          Get a concise overview of our capabilities, product portfolio and success stories.
        </p>

        {/* form and bullets */}
        <div className="relative w-full min-h-[200px] lg:h-[200px]">
          {/* Background Image */}
          <div className="absolute inset-0 w-full h-full">
            <Image 
              src="/company-profile-bg.png" 
              alt="Company Profile Background" 
              fill
              className="object-cover"
            />
          </div>

          <div className="relative z-10 flex flex-col items-center justify-center text-center space-y-6 lg:space-y-8 pt-1 lg:pt-1 pb-6 lg:pb-4 min-h-[200px] lg:min-h-0">
            {/* form */}
            <form
              className="w-full max-w-[525px] flex flex-col gap-3 mx-4 lg:mx-0 rounded-md items-center justify-center pt-4"
              onSubmit={handleSubmit}
            >
              <input
                type="text"
                placeholder="Name"
                className="w-full max-w-[400px] h-[40px] text-center text-gray-700 text-[14px] lg:text-[16px] px-3 placeholder-gray-500 border-b border-gray-700 sm:border-b-2 focus:outline-none"
                value={name}
                onChange={(e) => setName(e.target.value)}
                disabled={loading}
                required
                aria-label="Your name"
              />
              <input
                type="email"
                name="email"
                placeholder="Email"
                className="w-full max-w-[400px] h-[40px] text-gray-700 text-[14px] text-center lg:text-[16px] px-3 placeholder-gray-500 border-b border-gray-700 sm:border-b-2 focus:outline-none"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                disabled={loading}
                required
                aria-label="Your email"
              />
              <button
                type="submit"
                className={`text-white w-[200px] h-[48px] text-[14px] lg:text-[16px] font-semibold bg-[#ff6600] transition-colors hover:bg-[#e65c00] mt-2 rounded-md focus:outline-none ${
                  loading ? "opacity-60 cursor-not-allowed" : "cursor-pointer"
                }`}
                disabled={loading}
              >
                {loading ? "Sending..." : "Send"}
              </button>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
}