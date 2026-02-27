import Benchmarks from "./sections/benchmarks";
import FAQ from "./sections/faq";
import { Hero } from "./sections/hero";
import HowItWorks from "./sections/how-it-works";
import MessageAds from "./sections/message-ads";
import Testimonials from "./sections/testimonials";

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
      <HowItWorks />
      <Benchmarks />
      <MessageAds />
      <FAQ />
      <Testimonials />
    </main>
  );
}
