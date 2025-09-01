"use client";

import React, { useState } from "react";
import { ImProfile } from "react-icons/im";
import { HiCheckCircle } from "react-icons/hi";
import axios from "axios";
import { useToast } from "./Toast";

export default function CompanyProfile() {
  const [email, setEmail] = useState("");
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
        { email }
      );
      if (res.status === 200) {
        showSuccess("Thank you! The company profile will be sent to your inbox.");
        setEmail("");
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
      className="w-full px-6 lg:px-24 py-16"
      id="company-profile"
    >
      <div className="w-full rounded-3xl border border-gray-200 bg-gradient-to-r from-white via-gray-50 to-white shadow-[0_10px_40px_rgba(0,0,0,0.06)] ring-1 ring-gray-100 p-6 sm:p-8 lg:p-12">
        <div className="flex flex-col md:flex-row items-center md:items-start justify-between gap-8">
          {/* Left: content */}
          <div className="max-w-2xl text-center md:text-left w-full">
            <div className="flex flex-col sm:flex-row items-center justify-center md:justify-start gap-3 mb-3">
              <div className="inline-flex h-12 w-12 sm:h-14 sm:w-14 items-center justify-center rounded-xl bg-[#ff6600]/10 text-[#ff6600]">
                <ImProfile className="h-6 w-6 sm:h-7 sm:w-7" />
              </div>
              <h3 className="text-2xl sm:text-3xl md:text-4xl font-semibold text-black tracking-tight">
                Request Company Profile
              </h3>
            </div>
            <p className="text-gray-600">
              Get a concise overview of our capabilities, product portfolio and success stories.
            </p>

            {/* Value bullets */}
            <ul className="mt-4 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-3 text-left">
              <li className="flex items-center gap-2 text-sm text-gray-700 justify-center md:justify-start">
                <HiCheckCircle className="text-[#ff6600]" />
                Capabilities snapshot
              </li>
              <li className="flex items-center gap-2 text-sm text-gray-700 justify-center md:justify-start">
                <HiCheckCircle className="text-[#ff6600]" />
                Product highlights
              </li>
              <li className="flex items-center gap-2 text-sm text-gray-700 justify-center md:justify-start">
                <HiCheckCircle className="text-[#ff6600]" />
                Case studies
              </li>
            </ul>
          </div>

          {/* Right: inline pill form */}
          <form
            className="w-full md:w-auto flex max-w-xl md:max-w-none rounded-full overflow-hidden bg-white border border-gray-200 shadow-sm focus-within:ring-2 focus-within:ring-[#ff6600]"
            onSubmit={handleSubmit}
          >
            <input
              type="email"
              placeholder="Your email address"
              className="flex-1 w-full md:w-96 text-black px-5 py-3.5 bg-transparent text-base placeholder-gray-400 focus:outline-none"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              disabled={loading}
              required
              aria-label="Your email"
            />
            <button
              type="submit"
              className={`bg-[#ff6600] text-white px-6 sm:px-8 py-3.5 font-semibold transition-colors hover:bg-[#e65c00] focus:outline-none ${
                loading ? "opacity-60 cursor-not-allowed" : "cursor-pointer"
              }`}
              disabled={loading}
            >
              {loading ? "Sending..." : "Send"}
            </button>
          </form>
        </div>
      </div>
    </section>
  );
}
