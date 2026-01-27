import Contact from "./sections/contact";
import Demos from "./sections/demos";
import Features from "./sections/features";
import { Hero } from "./sections/hero";
import HowItWorks from "./sections/how-it-works";
import Testimonials from "./sections/testimonials";
import WhatIs from "./sections/what-is";
import WhyFlowQualify from "./sections/why-flowqualify";
import { META_DESCRIPTION } from "./config/constants";

export const metadata = {
  description: META_DESCRIPTION,
  alternates: { canonical: "/" },
};

export default function Home() {
  return (
    <main>
      <Hero />
      <WhatIs />
      <Features />
      <HowItWorks />
      <Demos />
      <WhyFlowQualify />
      <Testimonials />
      <Contact />
    </main>
  );
}
