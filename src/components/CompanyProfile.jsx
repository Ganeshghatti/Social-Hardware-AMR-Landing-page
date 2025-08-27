"use client";

import React, { useState } from "react";
import { ImProfile } from "react-icons/im";
import Modal from "./Modal";
import axios from "axios";

export default function CompanyProfile() {
  const [email, setEmail] = useState("");
  const [loading, setLoading] = useState(false);
  const [modalOpen, setModalOpen] = useState(false);
  const [modalMessage, setModalMessage] = useState("");
  const [error, setError] = useState("");

  const validateEmail = (email) => {
    return /\S+@\S+\.\S+/.test(email);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setError("");
    if (!validateEmail(email)) {
      setError("Please enter a valid email address.");
      return;
    }
    setLoading(true);
    try {
      const res = await axios.post(
        "https://www.socialhardware.in/api/send-company-profile",
        { email }
      );
      if (res.status === 200) {
        setModalMessage(
          "Thank you! The company profile will be sent to your inbox."
        );
        setModalOpen(true);
        setEmail("");
      } else {
        setModalMessage(
          "Sorry, there was a problem sending the profile. Please try again later."
        );
        setModalOpen(true);
      }
    } catch (err) {
      setModalMessage("Network error. Please try again later.");
      setModalOpen(true);
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
          Share your email with us, and we’ll send the company profile straight
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
        {error && <div className="text-red-500 text-sm mt-2">{error}</div>}
      </div>
      <Modal open={modalOpen} onClose={() => setModalOpen(false)}>
        <div className="p-8 text-center">
          <h4 className="text-2xl font-bold mb-4">{modalMessage}</h4>
          <button
            className="mt-4 bg-[#ff6600] text-white px-6 py-2 rounded hover:bg-[#e65c00] transition-colors font-semibold"
            onClick={() => setModalOpen(false)}
          >
            Close
          </button>
        </div>
      </Modal>
    </section>
  );
}
