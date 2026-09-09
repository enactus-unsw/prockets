import Image from "next/image";
import { HeroSection } from "./components/Hero";
import {
  MissionSection,
  ServicesSection,
  ProductSection,
} from "./components/Sections";

export default function Home() {
  return (
    <>
      <HeroSection />
      <ProductSection />
      <MissionSection />
      <ServicesSection />
    </>
  );
}
