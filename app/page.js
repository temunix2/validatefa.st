import { Suspense } from 'react'
import Header from "@/components/Header";
import Hero from "@/components/Hero";
import Problem from "@/components/Problem";
import WithWithout from "@/components/WithWithout";
import Pricing from "@/components/Pricing";
import FAQ from "@/components/FAQ";
// import CTA from "@/components/CTA";
import Footer from "@/components/Footer";
import FeaturesAccordion from '@/components/FeaturesAccordion';

export default function Home() {
  return (
    <>
      <Suspense>
        <Header />
      </Suspense>
      <main>
        <Hero />
        <Problem />
        <WithWithout />
        {/* <FeaturesAccordion /> */}
        <Pricing />
        <FAQ />
      </main>
      <Footer />
    </>
  );
}