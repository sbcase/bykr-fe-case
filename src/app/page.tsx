import React from "react";
import Hero from "@/sections/Hero";
import Products from "@/sections/Products";
import WhyJoinUs from "@/sections/JoinUs";
import Testimonials from "@/sections/Testimonials";
import GrowYourCollection from "@/sections/GrowCollection";
import CollectedSection from "@/sections/Collected";

export default function Home() {
  return (
    <>
      <Hero />
      <Products />
      <WhyJoinUs />
      <Testimonials />
      <GrowYourCollection />
      <CollectedSection />
    </>
  );
}
