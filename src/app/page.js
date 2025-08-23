import Advantages from "@/components/Advantages";
import Contact from "@/components/Contact";
import Hero from "@/components/Hero";
import Products from "@/components/Products";
import Customize from "@/components/Customize";
import Footer from "@/ui/Footer";
import Navbar from "@/ui/Navbar";
import Image from "next/image";

export default function Home() {
  return (
    <main className="mt-24 px-6 lg:px-24 w-full bg-white gap-16 md:gap-24 flex flex-col">
      <Navbar />
      <Hero />
      <Products />
       <Customize />
      <Contact />
      <Advantages />
      <Footer />
    </main>
  );
}
