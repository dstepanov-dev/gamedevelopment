import { Header } from '@/components/Header';
import { Hero } from '@/components/Hero';
import { About } from '@/components/sections/About';
import { Services } from '@/components/sections/Services';
import { Platforms } from '@/components/sections/Platforms';
import { Portfolio } from '@/components/sections/Portfolio';
import { Company } from '@/components/sections/Company';
import { CallToAction } from '@/components/sections/CallToAction';
import { Contact } from '@/components/sections/Contact';
import { Footer } from '@/components/sections/Footer';

export default function HomePage(): JSX.Element {
  return (
    <>
      <Header />
      <main>
        <Hero />
        <About />
        <Services />
        <Platforms />
        <Portfolio />
        <Company />
        <CallToAction />
        <Contact />
      </main>
      <Footer />
    </>
  );
}
