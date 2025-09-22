"use client";

import * as React from "react";
import SectionTitle from "@/ui/SectionTitle";

export default function Advantages() {
  return (
    <section id="advantages" className="w-full bg-white">
      <div className="relative mx-auto w-full max-w-[1440px] h-[394px] px-6 xl:px-0 hidden xl:block">

        {/* WHY CHOOSE US via SectionTitle */}
        <div className="absolute left-[53px] top-[95px]">
          <div className="[&_h2]:text-[#FF6600] [&_h2]:text-[20px] [&_h2]:font-semibold [&_svg]:w-[17px]">
            <SectionTitle title="WHY CHOOSE US" />
          </div>
        </div>

        {/* Big heading */}
        <h2 className="absolute left-[53px] top-[152px] w-[385px] font-[700] text-[40px] leading-[49px] text-[#333333]">
          Driving
          <br />
          Innovation with
          <br />
          Trust & Excellence
        </h2>

        {/* Three info cards on the right */}
        <div className="absolute left-[563px] top-1/2 -translate-y-1/2 grid grid-cols-3 gap-[20px] w-[799px]">
          {/* Card 1 */}
          <div className="w-[253px] h-[172px] bg-white p-0">
            <h3 className="px-0 pt-[16px] text-[#333333] font-[600] text-[20px] leading-[24px]">
              Optimized Cost
              <br />Structure
            </h3>
            <p className="mt-[20px] w-[253px] text-[#333333] font-[500] text-[14px] leading-[20px]">
              Greater than 40% cost saving for faster ROI when comparing our cobots with
              Universal Robots UR3 and other similar imported systems.
            </p>
          </div>

          {/* Card 2 */}
          <div className="w-[253px] h-[172px] bg-white p-0">
            <h3 className="px-0 pt-[16px] text-[#333333] font-[600] text-[20px] leading-[24px]">
              Compliance with
              <br />Local Standards
            </h3>
            <p className="mt-[20px] w-[253px] text-[#333333] font-[500] text-[14px] leading-[20px]">
              Indigenous systems are designed to align with Indian safety, operational, and
              regulatory standards, ensuring smoother integration and compliance.
            </p>
          </div>

          {/* Card 3 */}
          <div className="w-[253px] h-[172px] bg-white p-0">
            <h3 className="px-0 pt-[16px] text-[#333333] font-[600] text-[20px] leading-[24px]">
              Boost to the
              <br />Local Economy
            </h3>
            <p className="mt-[20px] w-[253px] text-[#333333] font-[500] text-[14px] leading-[20px]">
              Supporting indigenous systems creates jobs, encourages skill development, and
              strengthens India&apos;s manufacturing ecosystem, driving economic growth.
            </p>
          </div>
        </div>
      </div>

      <div className="xl:hidden px-6 py-10 max-w-[1440px] mx-auto">
        <div className="[&_h2]:text-[#FF6600] [&_h2]:text-[18px] sm:[&_h2]:text-[20px] [&_h2]:font-semibold [&_svg]:w-[16px] mb-4">
          <SectionTitle title="WHY CHOOSE US" />
        </div>

        <h2 className="font-[700] text-[28px] sm:text-[32px] leading-[34px] sm:leading-[40px] text-[#333333] mb-6">
          Driving
          <br />
          Innovation with
          <br />
          Trust & Excellence
        </h2>

        <div className="grid grid-cols-1 sm:grid-cols-2 gap-5 sm:gap-6">
          {/* Card 1 */}
          <div className="w-[253px] h-[172px] bg-white p-0">
            <h3 className="px-0 pt-[16px] text-[#333333] font-[600] text-[20px] leading-[24px]">
              Optimized Cost
              <br />Structure
            </h3>
            <p className="mt-[20px] w-[253px] text-[#333333] font-[500] text-[14px] leading-[20px]">
              Greater than 40% cost saving for faster ROI when comparing our cobots with
              Universal Robots UR3 and other similar imported systems.
            </p>
          </div>

          {/* Card 2 */}
          <div className="w-[253px] h-[172px] bg-white p-0">
            <h3 className="px-0 pt-[16px] text-[#333333] font-[600] text-[20px] leading-[24px]">
              Compliance with
              <br />Local Standards
            </h3>
            <p className="mt-[20px] w-[253px] text-[#333333] font-[500] text-[14px] leading-[20px]">
              Indigenous systems are designed to align with Indian safety, operational, and
              regulatory standards, ensuring smoother integration and compliance.
            </p>
          </div>

          {/* Card 3 */}
          <div className="w-[253px] h-[172px] bg-white p-0">
            <h3 className="px-0 pt-[16px] text-[#333333] font-[600] text-[20px] leading-[24px]">
              Boost to the
              <br />Local Economy
            </h3>
            <p className="mt-[20px] w-[253px] text-[#333333] font-[500] text-[14px] leading-[20px]">
              Supporting indigenous systems creates jobs, encourages skill development, and
              strengthens India&apos;s manufacturing ecosystem, driving economic growth.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
