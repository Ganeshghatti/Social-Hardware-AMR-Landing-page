"use client";

import React, { useState } from "react";
import { ImProfile } from "react-icons/im";
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
      className="flex bg-white gap-6 md:gap-0 justify-center w-full px-6 lg:px-24"
      id="company-profile"
    >
      <div className="w-full md:w-2/3 flex flex-col border rounded-2xl border-gray-300 p-8 items-center gap-4 bg-gray-50 text-center shadow-md hover:shadow-lg transition-all duration-300 ease-in-out hover:scale-101">
        <ImProfile className="text-6xl text-[#ff6600] mb-2" />
        <h3 className="text-4xl font-semibold text-black mb-2">
          Request Company Profile
        </h3>
        <p className="text-sm text-gray-500 mb-4">
          Share your email with us, and we'll send the company profile straight
          to your inbox!
        </p>
        <form
          className="mt-4 flex flex-col md:flex-row bg-white border border-gray-300 rounded-lg overflow-hidden shadow-sm w-full max-w-xl mx-auto"
          onSubmit={handleSubmit}
        >
          <input
            type="email"
            placeholder="Your Email"
            className="flex-1 text-black px-4 py-3 focus:outline-none bg-transparent text-base border-none"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            disabled={loading}
            required
          />
          <button
            type="submit"
            className={`bg-[#ff6600] text-white px-8 py-3 font-semibold hover:bg-[#e65c00] transition-colors cursor-pointer ${
              loading ? "opacity-60 cursor-not-allowed" : ""
            }`}
            disabled={loading}
          >
            {loading ? "Sending..." : "Send"}
          </button>
        </form>
      </div>
    </section>
  );
}
