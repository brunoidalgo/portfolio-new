import HeroSection from '@/components/HeroSection';
import { Services } from '@/components/Services';
import { Projects } from '@/components/Projects';
import { Resume } from '@/components/Resume';
import { Testemonials } from '@/components/Testemonials';
import { Contact } from '@/components/Contact';
import Pricing from '@/components/Pricing';
import Footer from '@/components/footer';
import { NavBar } from '@/components/NavBar';

export default function Home() {
  return (
    <>
      <NavBar />
      <HeroSection />
      <Services />
      <Projects />
      <Resume />
      <Testemonials />
      <Pricing />
      <Contact />
      <Footer />
    </>
  );
}
