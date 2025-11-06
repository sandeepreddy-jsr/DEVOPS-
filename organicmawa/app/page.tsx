"use client";

import { useState } from "react";
import Navigation from "@/components/Navigation";
import Hero from "@/components/Hero";
import Cultivation from "@/components/Cultivation";
import SeedPreparation from "@/components/SeedPreparation";
import Fertilizer from "@/components/Fertilizer";
import Education from "@/components/Education";
import Testimonials from "@/components/Testimonials";
import Contact from "@/components/Contact";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <main className="min-h-screen bg-gradient-to-b from-green-50 to-white">
      <Navigation />
      <Hero />
      <Cultivation />
      <SeedPreparation />
      <Fertilizer />
      <Education />
      <Testimonials />
      <Contact />
      <Footer />
    </main>
  );
}
