"use client";

import React, { useState } from "react";
import Image from "next/image";
import SectionTitle from "@/ui/SectionTitle";

export default function Gallery() {
  const [selectedImage, setSelectedImage] = useState(null);

  const galleryImages = [
    {
      src: "/Gallery/1.jpg",
      title: "Industrial Robot Assembly",
      alt: "Industrial robot assembly line",
    },
    {
      src: "/Gallery/2.jpg",
      title: "Automated Manufacturing",
      alt: "Automated manufacturing process",
    },
    {
      src: "/Gallery/3.jpg",
      title: "Precision Robotics",
      alt: "Precision robotics in action",
    },
    {
      src: "/Gallery/4.jpg",
      title: "Smart Factory Solutions",
      alt: "Smart factory automation",
    },
    {
      src: "/Gallery/5.jpg",
      title: "Advanced Cobot Technology",
      alt: "Advanced collaborative robot",
    },
    {
      src: "/Gallery/6.jpg",
      title: "Quality Control Automation",
      alt: "Automated quality control system",
    },
    {
      src: "/Gallery/7.jpg",
      title: "Flexible Production Line",
      alt: "Flexible production line setup",
    },
    {
      src: "/Gallery/8.jpg",
      title: "Innovative Robotics",
      alt: "Innovative robotics solution",
    },
    {
      src: "/Gallery/9.jpg",
      title: "Efficient Manufacturing",
      alt: "Efficient manufacturing process",
    },
    {
      src: "/Gallery/10.jpg",
      title: "Custom Automation",
      alt: "Custom automation solution",
    },
    {
      src: "/Gallery/11.jpg",
      title: "Smart Industrial Solutions",
      alt: "Smart industrial automation",
    },
    {
      src: "/Gallery/12.jpg",
      title: "Future of Manufacturing",
      alt: "Future of manufacturing technology",
    },
  ];

  const openModal = (image) => {
    setSelectedImage(image);
  };

  const closeModal = () => {
    setSelectedImage(null);
  };

  return (
    <section className="bg-white px-6 lg:px-24 py-16 w-full" id="gallery">
      <SectionTitle title="Gallery" />

      {/* Gallery Grid */}
      <div className="mt-12">
        <div className="columns-1 md:columns-2 lg:columns-3 gap-4 space-y-4">
          {galleryImages.map((image, index) => (
            <div
              key={index}
              className="break-inside-avoid mb-4 group cursor-pointer"
              onClick={() => openModal(image)}
            >
              <div className="relative overflow-hidden rounded-lg shadow-md hover:shadow-xl transition-all duration-300 transform hover:scale-105">
                <Image
                  src={image.src}
                  alt={image.alt}
                  width={400}
                  height={300}
                  className="w-full h-auto object-cover"
                  loading="lazy"
                />
                <div className="absolute inset-0  bg-opacity-0 group-hover:bg-opacity-30 transition-all duration-300 flex items-end">
                  <div className="p-4 w-full transform translate-y-full group-hover:translate-y-0 transition-transform duration-300">
                    <h3 className="text-white font-semibold text-lg">
                      {image.title}
                    </h3>
                    <p className="text-white text-sm opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                      Click to view larger
                    </p>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Modal for enlarged image */}
      {selectedImage && (
        <div
          className="fixed inset-0 bg-black bg-opacity-75 flex items-center justify-center z-50 p-4"
          onClick={closeModal}
        >
          <div className="relative max-w-4xl max-h-[90vh]">
            <button
              onClick={closeModal}
              className="absolute -top-12 right-0 text-white text-4xl font-bold hover:text-gray-300 transition-colors"
            >
              ×
            </button>
            <Image
              src={selectedImage.src}
              alt={selectedImage.alt}
              width={800}
              height={600}
              className="max-w-full max-h-[90vh] object-contain rounded-lg"
            />
            <div className="absolute bottom-4 left-4 right-4 bg-black bg-opacity-50 text-white p-4 rounded-lg">
              <h3 className="text-xl font-semibold">{selectedImage.title}</h3>
            </div>
          </div>
        </div>
      )}
    </section>
  );
}
