import Nav from "@/components/Nav";
import Hero from "@/components/Hero";
import Services from "@/components/Services";
import AiSolutions from "@/components/AiSolutions";
import AiCapabilities from "@/components/AiCapabilities";
import OurClient from "@/components/OurClient";
import TalentNetwork from "@/components/TalentNetwork";
import FinalCta from "@/components/FinalCta";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <div className="flex flex-1 flex-col">
      <Nav />
      <main className="flex flex-1 flex-col">
        <Hero />
        <Services />
        <AiSolutions />
        <AiCapabilities />
        <OurClient />
        <TalentNetwork />
        <FinalCta />
      </main>
      <Footer />
    </div>
  );
}
