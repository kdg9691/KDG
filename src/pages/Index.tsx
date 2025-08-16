import Header from "@/components/Header";
import Hero from "@/components/Hero";
import About from "@/components/About";
import Music from "@/components/Music";
import Concert from "@/components/Concert";
import Social from "@/components/Social";
import Fanpage from "@/components/Fanpage";
import Footer from "@/components/Footer";

const Index = () => {
  return (
    <div className="min-h-screen">
      <Header />
      <Hero />
      <About />
      <Music />
      <Concert />
      <Social />
      <Fanpage />
      <Footer />
    </div>
  );
};

export default Index;
