import Image from "next/image";
import { Component } from "./components/Hero";
import {
  MissionSection,
  ServicesSection,
  ProductSection,
} from "./components/Sections";

export default function Home() {
  return (
    <>
      <Component />
      <MissionSection />
      <ServicesSection />
      <ProductSection />
    </>
  );
}
