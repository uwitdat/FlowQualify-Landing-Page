import Landing from "./sections/landing";
import DashboardPreview from "./sections/dashboard-preview";
import { Pitch } from "./sections/pitch";
import { Hero } from "./sections/hero";
import Manifesto from "./sections/manifesto";
import FeaturesGrid from "./sections/features-grid";
import UseCases from "./sections/use-cases";
import Testimonials from "./sections/testimonials";
import Integrations from "./sections/integrations";
import StatsBanner from "./sections/stats-banner";
import { META_DESCRIPTION } from "./config/constants";

export const metadata = {
  description: META_DESCRIPTION,
  alternates: { canonical: "/" },
};

export default function Home() {
  return (
    <main>
      <Landing />
      <DashboardPreview />
      <Pitch />
      <Hero />
      <Manifesto />
      <FeaturesGrid />
      <UseCases />
      <Testimonials />
      <Integrations />
      <StatsBanner />
    </main>
  );
}
