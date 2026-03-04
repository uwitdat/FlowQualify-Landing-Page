import Benchmarks from "./sections/benchmarks";
import { Hero } from "./sections/hero";
import HowItWorks from "./sections/how-it-works";
import Testimonials from "./sections/testimonials";
import DoorCta from "./sections/door-cta";
import FadeIn from "./components/fade-in";
import Footer from "./components/footer";
import StripeLayoutWrapper from "./components/StripeLayoutWrapper";

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
      <StripeLayoutWrapper>
        <FadeIn>
          <HowItWorks />
        </FadeIn>
        <FadeIn>
          <Testimonials />
        </FadeIn>
        <FadeIn>
          <Benchmarks />
        </FadeIn>
        <FadeIn>
          <DoorCta />
        </FadeIn>
        <Footer />
      </StripeLayoutWrapper>
    </main>
  );
}
