"use client"

import React from "react";
import Image from "next/image";

export default function Hero() {
  const handleScrollToProducts = () => {
    const productsSection = document.getElementById('products');
    if (productsSection) {
      productsSection.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section className="flex w-full bg-white gap-6 md:gap-0 flex-col-reverse md:flex-row items-center" id="home">
      <div className="relative flex flex-col w-full md:w-3/5 lg:w-1/2 z-10">
        <h1 className="text-3xl md:text-5xl font-bold mb-3 text-black">
          Indigenous <span className="text-[#ff6600]">Robots</span> for Global
          Challenges
        </h1>
        <h3 className="text-md md:text-xl text-gray-700 mb-3">
          Our cutting-edge robotic systems are built in India with global
          standards in mind—tailored for businesses seeking performance,
          scalability, and long-term value.
        </h3>
        <button 
          onClick={handleScrollToProducts}
          className="flex items-center bg-[#ff6600] text-white p-3 w-fit rounded cursor-pointer hover:bg-orange-600 transition-colors font-semibold "
        >
          Discover Products →
        </button>
        <div className="mt-12 flex flex-col">
          <div className="flex items-center gap-2">
            <p className="font-bold text-[#ff6600]">our products</p>
            <svg
              width="100"
              height="2"
              viewBox="0 0 100 2"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <line y1="1" x2="100" y2="1" stroke="#ff6600" strokeWidth="2" />
            </svg>
          </div>
          <div className="flex mt-2 gap-2 w-fit">
            <Image
              src="/Hero/p1.png"
              alt="Product 1"
              width={90}
              height={90}
              className="object-contain"
            />
            <Image
              src="/Hero/p2.png"
              alt="Product 2"
              width={90}
              height={90}
              className="object-contain"
            />
            <Image
              src="/Hero/p3.png"
              alt="Product 3"
              width={90}
              height={90}
              className="object-contain"
            />
            <Image
              src="/Hero/p4.png"
              alt="Product 4"
              width={90}
              height={90}
              className="object-contain"
            />
          </div>
        </div>
      </div>
      <div className="relative w-full md:w-2/5 lg:w-1/2 flex justify-center h-auto lg:min-h-[85vh]">
        <Image
          src="/Hero/Icon.png"
          alt=""
          width={400}
          height={400}
          className="object-contain absolute z-0 w-4/5"
        />
        <Image
          src="/Hero/robot.png"
          alt="A cobot in action"
          width={400}
          height={400}
          className="object-contain z-10 relative w-full"
        />
      </div>
      <Image
        src="/Hero/designbg.png"
        alt="Background pattern"
        width={500}
        height={400}
        className="absolute -bottom-1/5 left-0 w-4/5 h-full object-cover z-0 opacity-15"
      />
      {/* <Image
        src="/Hero/designbg.png"
        alt="Background pattern"
        width={500}
        height={400}
        className="absolute top-0 left-0 w-2/3 h-full object-cover"
      /> */}
    </section>
  );
}
