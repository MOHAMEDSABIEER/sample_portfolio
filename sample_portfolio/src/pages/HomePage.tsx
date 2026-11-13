import React, { useEffect } from 'react';
import { useLocation } from 'react-router-dom';
import { Hero } from '../components/Hero';
import { About } from '../components/About';
import { PortfolioGrid } from '../components/PortfolioGrid';
import { BrandsAndTestimonials } from '../components/BrandsAndTestimonials';
import { ContactSection } from '../components/ContactSection';

interface HomePageProps {
  contactSubject: string;
  onSelectService: (serviceId: string) => void;
  onDownloadResume: () => void;
}

const scrollToSection = (id: string, smooth = true) => {
  const element = document.getElementById(id);
  if (element) {
    const y = element.getBoundingClientRect().top + window.pageYOffset - 70;
    window.scrollTo({ top: y, behavior: smooth ? 'smooth' : 'auto' });
  }
};

export const HomePage: React.FC<HomePageProps> = ({
  contactSubject,
  onSelectService,
  onDownloadResume,
}) => {
  const location = useLocation();
  const target = (location.state as { scrollTo?: string } | null)?.scrollTo;

  // Coming back from a portfolio page (or a navbar link used on one):
  // jump to the requested section; otherwise start at the top.
  useEffect(() => {
    if (target) {
      requestAnimationFrame(() => scrollToSection(target, false));
    } else {
      window.scrollTo(0, 0);
    }
  }, [target, location.key]);

  return (
    <>
      <Hero
        onExploreClick={() => scrollToSection('portfolio')}
        onDownloadResume={onDownloadResume}
      />
      <About onSelectService={onSelectService} />
      <PortfolioGrid onSelectService={onSelectService} />
      <BrandsAndTestimonials />
      <ContactSection initialSubject={contactSubject} />
    </>
  );
};
