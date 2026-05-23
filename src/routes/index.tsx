import { createFileRoute } from "@tanstack/react-router";
import { Navbar } from "@/components/site/Navbar";
import { Hero } from "@/components/site/Hero";
import { About } from "@/components/site/About";
import { Services } from "@/components/site/Services";
import { Industries } from "@/components/site/Industries";
import { CaseStudies } from "@/components/site/CaseStudies";
import { Stats } from "@/components/site/Stats";
import { Pricing } from "@/components/site/Pricing";
import { Testimonials } from "@/components/site/Testimonials";
import { Blog } from "@/components/site/Blog";
import { CtaStrip } from "@/components/site/CtaStrip";
import { Contact } from "@/components/site/Contact";
import { Footer } from "@/components/site/Footer";
import { WhatsAppFloat } from "@/components/site/WhatsAppFloat";

export const Route = createFileRoute("/")({
  component: Index,
  head: () => ({
    meta: [
      { title: "Binary Vision AI — Premium IT Services & Digital Transformation" },
      { name: "description", content: "Binary Vision AI delivers enterprise-grade IT services: cloud infrastructure, AI engineering, cybersecurity and digital transformation for ambitious businesses." },
      { property: "og:title", content: "Binary Vision AI — Premium IT Services" },
      { property: "og:description", content: "Cloud, AI, security and digital transformation services that help ambitious businesses scale faster." },
    ],
  }),
});

function Index() {
  return (
    <div className="min-h-screen bg-background">
      <link rel="preconnect" href="https://fonts.googleapis.com" />
      <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="" />
      <link href="https://fonts.googleapis.com/css2?family=Inter:wght@400;500;600;700&family=Poppins:wght@500;600;700;800&display=swap" rel="stylesheet" />
      <Navbar />
      <main>
        <Hero />
        <About />
        <Services />
        <Industries />
        {/* <CaseStudies /> */}
        <Stats />
        {/* <Pricing /> */}
        {/* <Testimonials /> */}
        {/* <Blog /> */}
        <CtaStrip />
        <Contact />
      </main>
      <Footer />
      <WhatsAppFloat />
    </div>
  );
}
