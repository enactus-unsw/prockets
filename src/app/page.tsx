import Image from "next/image";
import { HeroSection } from "./components/Hero";
import {
  MissionSection,
  ServicesSection,
  ProductSection,
  SponsorsSection,
} from "./components/Sections";

export default function Home() {
  return (
    <>
      <HeroSection />
      <SponsorsSection />
      <ProductSection />
      <MissionSection />
      <ServicesSection />
    </>
  );
}
