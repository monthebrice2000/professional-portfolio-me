import { useState } from 'react';

import Email from '@/components/Email';
import Loader from '@/components/Loader';
import SocialIcons from '@/components/SocialIcons';
import { Meta } from '@/layouts/Meta';
import About from '@/sections/About';
import Contact from '@/sections/Contact';
import Experience from '@/sections/Experience';
import Footer from '@/sections/Footer';
import Hero from '@/sections/Hero';
import Navbar from '@/sections/Navbar';
import Projects from '@/sections/Projects';
import { Main } from '@/templates/Main';

const Index = () => {
  const [isLoading, setIsLoading] = useState(true);
  const [showContent, setShowContent] = useState(false);

  const handleLoaderLoaded = () => {
    setIsLoading(false);
    setTimeout(() => setShowContent(true), 450);
  };

  return (
    <Main
      meta={
        <Meta title="MONTHE Brice" description="My Profesional Portfolio" />
      }
    >
      <div className="app">
        {showContent && (
          <>
            <Navbar />
            <SocialIcons />
            <Email />
            <main>
              <Hero />
              <About />
              <Experience />
              <Projects />
              <Contact />
            </main>
            <Footer />
          </>
        )}
        <Loader isLoading={isLoading} setIsLoading={handleLoaderLoaded} />
      </div>
    </Main>
  );
};

export default Index;
