import SiteLayout from "@/components/feature/SiteLayout";
import Hero from "./components/Hero";
import PlanSection from "./components/PlanSection";
import StoreInfo from "./components/StoreInfo";
import MapSection from "./components/MapSection";
import CTASection from "./components/CTASection";

export default function Home() {
  return (
    <SiteLayout>
      <Hero />
      <PlanSection />
      <StoreInfo />
      <MapSection />
      <CTASection />
    </SiteLayout>
  );
}