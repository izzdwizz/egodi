import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import Services from "@/components/Services";
import Publications from "@/components/Publications";
import Experience from "@/components/Experience";
import Contact from "@/components/Contact";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <>
      <Navbar />
      <main className="max-w-screen-xl mx-auto">
        <Hero />
        <Services />
        <Publications />
        <Experience />
        <Contact />
      </main>
      <Footer />
    </>
  );
}
