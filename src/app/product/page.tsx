import { Metadata } from "next";
import { ProductCarousel } from "./ProductCarousel";

export const metadata: Metadata = {
  title: "Product | Prockets",
  description:
    "Explore every component of the Prockets modular transtibial prosthetic system.",
};

export default function ProductPage() {
  return <ProductCarousel />;
}
