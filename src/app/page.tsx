import { Contact } from "@/components/Contact";
import { Education } from "@/components/Education";
import { Experience } from "@/components/Experience";
import { Hero } from "@/components/Hero";
import { SiteFooter } from "@/components/SiteFooter";
import { SiteHeader } from "@/components/SiteHeader";
import { Skills } from "@/components/Skills";
import { Work } from "@/components/Work";

export default function Home() {
  return (
    <div id="top">
      <SiteHeader />
      <main id="main" className="mx-auto max-w-[960px] px-4 sm:px-6 lg:px-0">
        <Hero />
        <Work />
        <Skills />
        <Experience />
        <Education />
        <Contact />
      </main>
      <SiteFooter />
    </div>
  );
}
