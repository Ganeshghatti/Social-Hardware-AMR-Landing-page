"use client";

import React, { useState } from "react";
import Image from "next/image";
import SectionTitle from "@/ui/SectionTitle";
import { FaEnvelope, FaWeightHanging, FaRuler } from "react-icons/fa";
import axios from "axios";
import { Slider } from "@/components/ui/slider";
import { useToast } from "./Toast";

export default function Customise() {
  const [formData, setFormData] = useState({
    email: "",
    payload: 3.5,
    reach: 820,
  });
  const [loading, setLoading] = useState(false);
  const { showSuccess, showError } = useToast();

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleSliderChange = (name, value) => {
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);

    try {
      const response = await axios.post(
        "https://www.socialhardware.in/api/request-custom-cobot-cost",
        formData
      );

      if (response.status === 200) {
        setFormData({
          email: "",
          payload: 1,
          reach: 200,
        });
        showSuccess("Custom quotation request sent successfully! We'll email you the details soon.");
      }
    } catch (error) {
      showError("Failed to send request. Please try again later.");
      console.error("Error sending request:", error);
    } finally {
      setLoading(false);
    }
  };

  return (
    <section
      className="flex bg-white gap-6 md:gap-0 flex-col mt-12 px-6 lg:px-24 w-full"
      id="customise"
    >
      <SectionTitle title="Customize" />
      <div className="flex gap-6 md:gap-0 flex-col md:flex-row items-center">
        <div className="w-full md:w-2/5 lg:w-1/2 flex justify-center">
          <Image
            src="/customise_arm.png"
            alt="A cobot in action"
            width={400}
            height={400}
            className="object-contain w-3/4"
          />
        </div>
        <div className="relative flex flex-col w-full md:w-3/5 lg:w-1/2 z-10">
          <div className="bg-white flex flex-col p-8 rounded-lg w-full md:w-2/3 md:self-center rounded-2xl border-gray-300 hover:border-gray-300 border shadow-md hover:shadow-lg transition-all duration-300 ease-in-out hover:scale-101">
            <h2 className="text-2xl font-bold text-[#ff6600] mb-6">
              Customize Your Cobot
            </h2>
            <form className="space-y-8" onSubmit={handleSubmit}>
              <div className="bg-gray-50 p-4 rounded-lg">
                <div className="flex items-center gap-2 mb-3">
                  <FaWeightHanging className="text-[#ff6600]" />
                  <label className="text-sm font-medium text-black">
                    Payload Capacity
                  </label>
                </div>
                <Slider
                  defaultValue={[1]}
                  min={1}
                  max={15}
                  step={0.5}
                  value={[formData.payload]}
                  onValueChange={(value) =>
                    handleSliderChange("payload", value[0])
                  }
                  className="w-full"
                />
                <div className="flex justify-between text-sm text-gray-600 mt-2">
                  <span>1 kg</span>
                  <span className="font-semibold">
                    Selected: {formData.payload} kg
                  </span>
                  <span>15 kg</span>
                </div>
              </div>

              <div className="bg-gray-50 p-4 rounded-lg">
                <div className="flex items-center gap-2 mb-3">
                  <FaRuler className="text-[#ff6600]" />
                  <label className="text-sm font-medium text-black">
                    Arm Reach
                  </label>
                </div>
                <Slider
                  defaultValue={[200]}
                  min={200}
                  max={2000}
                  step={20}
                  value={[formData.reach]}
                  onValueChange={(value) =>
                    handleSliderChange("reach", value[0])
                  }
                  className="w-full"
                />
                <div className="flex justify-between text-sm text-gray-600 mt-2">
                  <span>200 mm</span>
                  <span className="font-semibold">
                    Selected: {formData.reach} mm
                  </span>
                  <span>2000 mm</span>
                </div>
              </div>

              <div className="bg-gray-50 p-4 rounded-lg">
                <label
                  htmlFor="email"
                  className="text-sm font-medium text-black flex gap-2 items-center mb-2"
                >
                  <FaEnvelope className="text-[#ff6600]" />
                  Email Address
                </label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  required
                  value={formData.email}
                  onChange={handleChange}
                  className="w-full bg-white border border-gray-300 rounded-md px-3 py-2 focus:outline-none focus:ring-2 focus:ring-[#ff6600] focus:border-transparent"
                  placeholder="Enter your email"
                />
                <p className="text-xs text-gray-500 mt-1">
                  We'll send your custom quotation to this address
                </p>
              </div>

              <button
                type="submit"
                disabled={loading}
                className="w-full bg-[#ff6600] text-white py-3 px-4 rounded-md hover:bg-orange-600 transition-colors cursor-pointer font-semibold text-sm disabled:opacity-50 disabled:cursor-not-allowed flex items-center justify-center gap-2"
              >
                {loading ? (
                  <>
                    <svg
                      className="animate-spin h-4 w-4 text-white"
                      xmlns="http://www.w3.org/2000/svg"
                      fill="none"
                      viewBox="0 0 24 24"
                    >
                      <circle
                        className="opacity-25"
                        cx="12"
                        cy="12"
                        r="10"
                        stroke="currentColor"
                        strokeWidth="4"
                      ></circle>
                      <path
                        className="opacity-75"
                        fill="currentColor"
                        d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"
                      ></path>
                    </svg>
                    Processing...
                  </>
                ) : (
                  "Get Custom Quotation"
                )}
              </button>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
}
