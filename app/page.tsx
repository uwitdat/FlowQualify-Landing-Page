import Benchmarks from "./sections/benchmarks";
import Contact from "./sections/contact";
import Demos from "./sections/demos";
import FAQ from "./sections/faq";
import Features from "./sections/features";
import { Hero } from "./sections/hero";
import HowItWorks from "./sections/how-it-works";
import Results from "./sections/results";
import Testimonials from "./sections/testimonials";
import WhatIs from "./sections/what-is";
import WhatQualifiedMeans from "./sections/what-qualified-means";
import WhyFlowQualify from "./sections/why-flowqualify";
import { META_DESCRIPTION } from "./config/constants";
//

export const metadata = {
  description: META_DESCRIPTION,
  alternates: { canonical: "/" },
};

export default function Home() {
  return (
    <main>
      <Hero />
      <WhatIs />
      <WhatQualifiedMeans />
      <Features />
      <HowItWorks />
      <Results />
      <Benchmarks />
      <Demos />
      <WhyFlowQualify />
      <FAQ />
      <Testimonials />
      <Contact />
    </main>
  );
}
