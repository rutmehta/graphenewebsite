import Hero from "@/app/components/home/Hero";
import Features from "@/app/components/home/Features";
import HowItWorks from "@/app/components/home/HowItWorks";
import Waitlist from "@/app/components/home/Waitlist";
import Header from "@/app/components/layout/Header";
import Footer from "@/app/components/layout/Footer";

export default function Home() {
  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      <main className="flex-grow">
        <Hero />
        <Features />
        <HowItWorks />
        <Waitlist />
      </main>
      <Footer />
    </div>
  );
}
