import SectionTitle from "@/ui/SectionTitle";
import React from "react";
import Image from "next/image";

export default function PrabhalModules() {
  return (
    <section className="bg-white px-6 lg:px-24 bg-gradient-to-b from-gray-50 to-white border border-gray-200 py-12 w-full">
      <SectionTitle title="Prabhal System" />
      <Image
        src="/prabhal_system_modules.png"
        alt="Prabhal system"
        width={920}
        height={920}
        className="object-contain md:w-2/3 w-full mt-12 mx-auto"
      />
    </section>
  );
}
