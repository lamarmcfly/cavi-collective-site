import { Header } from "@/components/layout/header";
import { Footer } from "@/components/layout/footer";
import { Hero } from "@/components/sections/hero";
import { CaviDifference } from "@/components/sections/cavi-difference";
import { WorkflowLadder } from "@/components/sections/workflow-ladder";
import { StarterBundles } from "@/components/sections/starter-bundles";
import { DivisionGrid } from "@/components/sections/division-grid";
import { Governance } from "@/components/sections/governance";
import { CTASection } from "@/components/sections/cta-section";

export default function HomePage() {
  return (
    <>
      <Header />
      <main className="flex-1 pt-36 md:pt-40 lg:pt-44">
        <Hero />
        <CaviDifference />
        <WorkflowLadder />
        <StarterBundles />
        <DivisionGrid />
        <Governance />
        <CTASection />
      </main>
      <Footer />
    </>
  );
}
