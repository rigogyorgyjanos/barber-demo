import Hero from "@/app/components/sections/Hero";
import Barbers from "./components/sections/Barbers";
import Services from "./components/sections/Services";
import Gallery from "./components/sections/Gallery";
import CTA from "./components/sections/CTA";
import Map from "./components/sections/Map"
import Footer from "./components/sections/Footer";
import Navbar from "./components/layout/Navbar";

export default function Home() {
  return (
    <>
      <Navbar />
      <main id="top">
        <Hero />
        <Barbers />
        <Services />
        <Gallery />
        <CTA />
        <Map />
        <Footer />
      </main>
    </>
  );
}