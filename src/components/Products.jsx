"use client";

import * as React from "react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";
import SectionTitle from "@/ui/SectionTitle";
import Image from "next/image";
import Autoplay from "embla-carousel-autoplay";
import Modal from "@/components/Modal";

export default function Products() {
  const [selectedProduct, setSelectedProduct] = React.useState(null);
  const [isModalOpen, setIsModalOpen] = React.useState(false);

  const openModal = (product) => {
    setSelectedProduct(product);
    setIsModalOpen(true);
  };

  const closeModal = () => {
    setIsModalOpen(false);
    setSelectedProduct(null);
  };

  const products = [
    {
      name: "REACH-V1",
      description: "7-DOF Dual-Arm Robotic Arm",
      image: "/Products/reach-v1.png",
      techSpecs: {
        general: {
          armLength: "660 mm",
          singleArmMaxLoad: "1.5 kg",
          degreesOfFreedom: 7,
          repeatPositionAccuracy: "0.05 mm",
          robotWeight: "30 kg",
        },
      },
    },
    {
      name: "REACH-V2",
      description: "7-DOF Dual-Arm Robotic Arm with higher load capacity",
      image: "/Products/reach-v2.png",
      techSpecs: {
        general: {
          armLength: "820 mm",
          singleArmMaxLoad: "3.5 kg",
          degreesOfFreedom: 7,
          repeatPositionAccuracy: "0.28 mm",
          robotWeight: "45 kg",
        },
      },
    },
    {
      name: "LITE ALL-TERRAIN UGV",
      description:
        "Lightweight unmanned ground vehicle with versatile all-terrain capability.",
      image: "/Products/lite-ugv.png",
      techSpecs: {
        general: {
          dimensions: "900 x 800 x 450 mm",
          weight: "100 kg",
          height: "365 mm",
          maxLoad: "120 kg",
          groundClearance: "70 mm",
          maxDragWeight: "150 kg",
        },
        allTerrain: {
          maxClimbAngle: "30° (including stairs)",
          maxObstacleHeight: "150 mm",
        },
        hardwareComponents: [
          {
            component: "Track Material",
            description:
              "Kevlar-embedded rubber for durability and flexibility",
          },
          {
            component: "Mounting Plate",
            description:
              "Supports LIDAR, robotic arms, payloads, cameras, sensors, tools",
          },
        ],
        additional: {
          operatingTemperature: "0°C to +45°C",
          maxOperatingSpeed: "10 km/h",
          vibrationReduction: "6 independent vibration absorbers on each side",
          protectionGrade: "IP54",
        },
      },
    },
    {
      name: "ADVANCED ALL-TERRAIN UGV",
      description:
        "Heavy-duty unmanned ground vehicle with enhanced stability and payload capacity.",
      image: "/Products/advanced-ugv.png",
      techSpecs: {
        general: {
          dimensions: "1010 x 800 x 435 mm",
          weight: "180 kg",
          height: "426 mm",
          maxLoad: "260 kg",
        },
        allTerrain: {
          maxClimbAngle: "40° (including stairs)",
          maxObstacleHeight: "200 mm",
        },
        hardwareComponents: [
          {
            component: "Track Material",
            description:
              "Kevlar-embedded rubber for durability and flexibility",
          },
          {
            component: "Suspension System",
            description:
              "Christie and Matilda four-wheel balanced configuration",
          },
          {
            component: "Vibration Reduction",
            description: "6 independent vibration absorbers on each side",
          },
        ],
        additional: {
          operatingTemperature: "0°C to +45°C",
          maxOperatingSpeed: "10 km/h",
          protectionGrade: "IP54",
        },
      },
    },
    {
      name: "ROBOTIC EOAT - 10-DOF BIONIC HAND",
      description:
        "Robotic End of Arm Tooling (EOAT) featuring a 5-finger 10-DOF bionic hand.",
      image: "/Products/bionic-hand.png",
      techSpecs: {
        general: {
          degreesOfFreedom: "10-DOF per finger",
          mainMaterial: "Aluminium, Carbon Fiber",
          positionAccuracy: "+0.1 mm",
        },
        mechanical: {
          dimensions: "200 x 140 x 120 mm",
          weight: "0.5 kg",
          fingerLength: "90 mm",
          maxGripForce: "50 N per finger",
          jointRangeOfMotion: "0.85°",
          jointSpeed: "57.3°/s",
          payloadCapacity: "1.5 kg",
        },
      },
    },
    {
      name: "ROBOTIC EOAT - PRECISION GRIPPER",
      description:
        "Robotic End of Arm Tooling (EOAT) designed for precision gripping applications.",
      image: "/Products/precision-gripper.png",
      techSpecs: {
        general: {
          degreesOfFreedom: "2-DOF",
          weight: "0.5 kg",
          positionAccuracy: "+0.1 mm",
        },
        mechanical: {
          dimensions: "120 x 95 x 75 mm",
          weight: "0.5 kg",
          gripperLength: "40 mm",
          maxGripForce: "29 N/cm (approx 88N)",
          maxOpeningWidth: "60 mm",
          jointSpeed: "0.222 sec @12V",
          payloadCapacity: "1 kg",
        },
      },
    },
  ];

  const renderSpecTable = (title, specs) => {
    return (
      <div className="mb-6">
        <h3 className="text-lg font-semibold text-[#ff6600] mb-3">{title}</h3>
        <div className="bg-gray-50 rounded-lg p-4">
          <table className="w-full">
            <tbody>
              {Object.entries(specs).map(([key, value]) => (
                <tr
                  key={key}
                  className="border-b border-gray-200 last:border-b-0"
                >
                  <td className="py-2 font-medium text-gray-700 capitalize">
                    {key
                      .replace(/([A-Z])/g, " $1")
                      .replace(/^./, (str) => str.toUpperCase())}
                  </td>
                  <td className="py-2 text-gray-600">{value}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    );
  };

  const renderHardwareComponents = (components) => {
    return (
      <div className="mb-6">
        <h3 className="text-lg font-semibold text-[#ff6600] mb-3">
          Hardware Components
        </h3>
        <div className="bg-gray-50 rounded-lg p-4">
          <table className="w-full">
            <thead>
              <tr className="border-b border-gray-300">
                <th className="text-left py-2 font-medium text-gray-700">
                  Component
                </th>
                <th className="text-left py-2 font-medium text-gray-700">
                  Quantity
                </th>
                <th className="text-left py-2 font-medium text-gray-700">
                  Remarks/Description
                </th>
              </tr>
            </thead>
            <tbody>
              {components.map((item, index) => (
                <tr
                  key={index}
                  className="border-b border-gray-200 last:border-b-0"
                >
                  <td className="py-2 font-medium text-gray-700">
                    {item.component}
                  </td>
                  <td className="py-2 text-gray-600">{item.quantity || "-"}</td>
                  <td className="py-2 text-gray-600">
                    {item.remarks || item.description || "-"}
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    );
  };

  return (
    <section
      className="bg-white z-10 relative text-black flex flex-col ml-2 px-6 lg:px-24"
      id="products"
    >
      <SectionTitle title="Our Products" />
      <br />

      <Carousel
        className="w-full mt-6"
        plugins={[
          Autoplay({
            delay: 4000,
          }),
        ]}
      >
        <div className="absolute hidden md:block md:right-10 md:-top-8">
          <CarouselPrevious className="text-[#ff6600] bg-white cursor-pointer" />
          <CarouselNext className="text-[#ff6600] bg-white cursor-pointer" />
        </div>

        <div className="absolute block md:hidden right-1/2 -bottom-8">
          <CarouselPrevious className="text-[#ff6600] bg-white cursor-pointer" />
          <CarouselNext className="text-[#ff6600] bg-white cursor-pointer" />
        </div>

        <CarouselContent className="w-full">
          {products.map((product, index) => (
            <CarouselItem key={index} className="md:basis-1/3 lg:basis-1/4 p-4">
              <Card className="rounded-2xl border-gray-300 hover:border-gray-300 border shadow-md hover:shadow-lg transition-all duration-300 ease-in-out hover:scale-105 overflow-hidden h-full flex flex-col justify-around">
                <div className="relative w-full h-36">
                  <Image
                    src={product.image}
                    alt={product.name}
                    fill
                    className="object-cover"
                  />
                </div>
                <CardHeader>
                  <CardTitle className="text-lg text-center">
                    {product.name}
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-sm text-gray-600 text-center">
                    {product.description}
                  </p>
                </CardContent>
                <button
                  onClick={() => openModal(product)}
                  className="bg-[#ff6600] px-4 py-3 text-white w-fit self-center text-sm rounded-lg mt-4 hover:bg-orange-600 transition-colors cursor-pointer"
                >
                  Technical Specifications →
                </button>
              </Card>
            </CarouselItem>
          ))}
        </CarouselContent>
      </Carousel>

      <Modal open={isModalOpen} onClose={closeModal}>
        <div className="p-6">
          <div className="flex items-center mb-6">
            <div className="relative w-24 h-24 mr-4">
              <Image
                src={selectedProduct?.image}
                alt={selectedProduct?.name}
                fill
                className="object-cover rounded-lg"
              />
            </div>
            <div>
              <h2 className="text-2xl font-bold text-gray-800">
                {selectedProduct?.name}
              </h2>
              <p className="text-gray-600">{selectedProduct?.description}</p>
            </div>
          </div>

          <div className="space-y-6">
            {selectedProduct?.techSpecs.general &&
              renderSpecTable(
                "General Information",
                selectedProduct.techSpecs.general
              )}
            {selectedProduct?.techSpecs.powerAndController &&
              renderSpecTable(
                "Power Supply & Controller",
                selectedProduct.techSpecs.powerAndController
              )}
            {selectedProduct?.techSpecs.allTerrain &&
              renderSpecTable(
                "All-Terrain Capabilities",
                selectedProduct.techSpecs.allTerrain
              )}
            {selectedProduct?.techSpecs.mechanical &&
              renderSpecTable(
                "Mechanical Specifications",
                selectedProduct.techSpecs.mechanical
              )}
            {selectedProduct?.techSpecs.additional &&
              renderSpecTable(
                "Additional Information",
                selectedProduct.techSpecs.additional
              )}
            {selectedProduct?.techSpecs.environment &&
              renderSpecTable(
                "Environment Conditions",
                selectedProduct.techSpecs.environment
              )}
            {selectedProduct?.techSpecs.hardwareComponents &&
              renderHardwareComponents(
                selectedProduct.techSpecs.hardwareComponents
              )}
          </div>
        </div>
      </Modal>
    </section>
  );
}
