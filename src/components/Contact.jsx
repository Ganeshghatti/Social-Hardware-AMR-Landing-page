import React from "react";
import Image from "next/image";
import SectionTitle from "@/ui/SectionTitle";
import { FaUser, FaEnvelope, FaPhone, FaCommentAlt } from "react-icons/fa";


export default function Contact() {
  return (
    <section
      className="flex bg-white gap-6 md:gap-0 flex-col mt-12 ml-2"
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
        <div className="relative flex flex-col w-full md:w-3/5 lg:w-1/2 z-10">
          <div className="bg-[#ff6600] flex flex-col p-8 rounded-lg w-full md:w-2/3 md:self-center">
            <form className="space-y-10">
              <div>
                <label
                  htmlFor="name"
                  className=" text-sm font-medium text-white flex gap-2 items-center"
                ><FaUser className="text-white" />
                  Name
                </label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  required
                  className="mt-1 w-full bg-transparent border-b-2 border-white focus:outline-none focus:border-white text-white"
                />
              </div>
              <div>
                <label
                  htmlFor="email"
                  className=" text-sm font-medium text-white flex gap-2 items-center"
                ><FaEnvelope className="text-white" />
                  Email
                </label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  required
                  className="mt-1 w-full bg-transparent border-b-2 border-white focus:outline-none focus:border-white text-white"
                />
              </div>
              <div>
                <label
                  htmlFor="phone"
                  className=" text-sm font-medium text-white flex gap-2 items-center"
                ><FaPhone className="text-white" />
                  Phone
                </label>
                <input
                  type="tel"
                  id="phone"
                  name="phone"
                  className="mt-1 w-full bg-transparent border-b-2 border-white focus:outline-none focus:border-white text-white"
                />
              </div>
              <div>
                <label
                  htmlFor="message"
                  className=" text-sm font-medium text-white flex gap-2 items-center"
                ><FaCommentAlt className="text-white" />
                  Message
                </label>
                <textarea
                  id="message"
                  name="message"
                  rows="4"
                  required
                  className="mt-1 w-full bg-transparent border-b-2 border-white focus:outline-none focus:border-white text-white"
                ></textarea>
              </div>
              <button
                type="submit"
                className="w-full bg-white text-[#ff6600] py-2 px-4 rounded-md hover:bg-gray-100 transition-colors cursor-pointer font-semibold text-sm"
              >
                Send Message
              </button>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
}
