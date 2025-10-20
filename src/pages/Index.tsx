import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import About from "@/components/About";
import Projects from "@/components/Projects";
import FundFlow from "@/components/FundFlow";
import Contact from "@/components/Contact";
import Footer from "@/components/Footer";

const Index = () => {
  return (
    <div className="min-h-screen">
      <Navbar />
      <Hero />
      <About />
      <FundFlow />
      <Projects />
      <Contact />
      <Footer />
    </div>
  );
};

export default Index;
