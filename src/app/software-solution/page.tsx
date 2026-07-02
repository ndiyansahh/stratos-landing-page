import type { Metadata } from "next";
import Nav from "@/components/Nav";
import SoftwareSolution from "@/components/SoftwareSolution";
import PartnershipVision from "@/components/PartnershipVision";
import Process from "@/components/Process";
import FinalCta from "@/components/FinalCta";
import Footer from "@/components/Footer";

export const metadata: Metadata = {
  title: "Software Solution | Stratoshub",
  description:
    "Choose the engagement model that fits your project — Freelance Engagement, PT as Vendor, or Joint Entity — plus our milestone-based payment structure and partnership methodology.",
};

export default function SoftwareSolutionPage() {
  return (
    <div className="flex flex-1 flex-col">
      <Nav />
      <main className="flex flex-1 flex-col">
        <section className="bg-cream-100 bg-noise px-6 pb-4 pt-20 text-center">
          <p className="font-mono-tight text-xs uppercase tracking-[0.3em] text-navy-900/50">
            Software Solution
          </p>
          <h1 className="mx-auto mt-6 max-w-3xl font-mono-tight text-4xl font-bold tracking-tight text-navy-900 sm:text-6xl">
            Engagement models built for how you work
          </h1>
          <p className="mx-auto mt-6 max-w-xl text-navy-900/70">
            From first prototype to a jointly-owned business — pick the structure that
            matches your project size and stage of trust.
          </p>
        </section>
        <SoftwareSolution />
        <PartnershipVision />
        <Process />
        <FinalCta />
      </main>
      <Footer />
    </div>
  );
}
