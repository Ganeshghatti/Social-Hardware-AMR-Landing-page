import SectionTitle from "@/ui/SectionTitle";
import React from "react";
import Image from "next/image";

export default function EclipseModules() {
  return (
    <section className="bg-white ml-2 px-6 lg:px-24">
      <SectionTitle title="Eclipse System" />
      <Image
        src="/eclipse_system_modules.png"
        alt="Eclipse system"
        width={920}
        height={920}
        className="object-contain w-full mt-12 mx-auto"
      />
    </section>
  );
}
