"use client";

import * as React from "react";
import { GrTechnology, GrUserWorker } from "react-icons/gr";
import { FaUserClock, FaMoneyBillWave } from "react-icons/fa";
import { BsFileBarGraph } from "react-icons/bs";
import { FcSupport } from "react-icons/fc";
import { IoMdTrophy } from "react-icons/io";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";
import Autoplay from "embla-carousel-autoplay";
import SectionTitle from "@/ui/SectionTitle";

export default function Advantages() {
  const advantages = [
    {
      icon: <GrTechnology />,
      title: "Technological Self-Reliance",
      description:
        "By investing in indigenous robotics, industries contribute to India's vision of becoming self-reliant (Atmanirbhar Bharat), reducing dependency on foreign technology and fostering domestic innovation.",
    },
    {
      icon: <FaUserClock />,
      title: "Faster Support and Maintenance",
      description:
        "With local manufacturing and service teams, indigenous systems offer quicker troubleshooting, repairs, and part replacements, minimizing downtime and ensuring seamless operations.",
    },
    {
      icon: <FaMoneyBillWave />,
      title: "Cost Efficiency",
      description:
        "Greater than 40% cost saving for faster ROI when comparing our cobots with Universal Robots UR3 and other similar imported systems.",
    },
    {
      icon: <IoMdTrophy />,
      title: "Compliance with Local Standards",
      description:
        "Indigenous systems are designed to align with Indian safety, operational, and regulatory standards, ensuring smoother integration and compliance.",
    },
    {
      icon: <FcSupport />,
      title: "Boost to the Local Economy",
      description:
        "Supporting indigenous systems creates jobs, encourages skill development, and strengthens India's manufacturing ecosystem, driving economic growth.",
    },
    {
      icon: <BsFileBarGraph />,
      title: "Scalability and Long-Term Reliability",
      description:
        "Locally produced robotic systems are easier to scale and upgrade, offering businesses a future-proof solution that evolves with their needs.",
    },
    {
      icon: <GrUserWorker />,
      title: "Designed for Local Needs",
      description:
        "Indigenous systems are built with a deep understanding of the unique challenges faced by Indian industries, including diverse operational environments, power conditions, and application-specific requirements.",
    },
  ];

  return (
    <section
      className="flex flex-col py-16 px-8 bg-gradient-to-b from-gray-50 to-white"
      id="advantages"
    >
      <SectionTitle title="Why Choose us?" />
      <Carousel
        className="w-full mt-16"
        opts={{
          align: "start",
          loop: true,
        }}
        plugins={[
          Autoplay({
            delay: 4000,
          }),
        ]}
      >
        <CarouselContent>
          {advantages.map((advantage, index) => (
            <CarouselItem key={index} className="md:basis-1/2 lg:basis-1/4">
              <div className="h-72">
                <div className="flex flex-col gap-4 bg-[#ff6600] pl-6 pr-6 pb-6 rounded-xl items-center h-full">
                  <div className="relative w-full h-13 flex justify-center">
                    <div className="absolute w-26 h-26 pt-13 bottom-0 bg-white rounded-full flex items-center justify-center opacity-50">
                      <span className="text-black text-4xl">
                        {advantage.icon}
                      </span>
                    </div>
                  </div>
                  <h5 className="text-2xl text-white font-semibold text-center">
                    {advantage.title}
                  </h5>
                  <p className="text-sm text-[#383838] text-center">
                    {advantage.description}
                  </p>
                </div>
              </div>
            </CarouselItem>
          ))}
        </CarouselContent>
      </Carousel>
    </section>
  );
}
