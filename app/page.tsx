import Hero from "@/app/components/sections/Hero";
import Barbers from "./components/sections/Barbers";
import Services from "./components/sections/Services";
import Gallery from "./components/sections/Gallery";
import CTA from "./components/sections/CTA";
import Footer from "./components/sections/Footer";

export default function Home() {
  return (
    <main id="top">
      <Hero />
      <Barbers />
      <Services />
      <Gallery />
      <CTA />
      <Footer />
    </main>
  );
}