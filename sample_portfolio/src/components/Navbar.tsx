import React, { useState, useEffect } from 'react';
import { Menu, X, ChevronDown, Sparkles } from 'lucide-react';
import { useNavigate, useLocation } from 'react-router-dom';
import { SERVICES_DATA } from '../data/portfolioData';

interface NavbarProps {
  onSelectService: (serviceId: string) => void;
  onOpenContact: (subject?: string) => void;
}

export const Navbar: React.FC<NavbarProps> = ({ onSelectService, onOpenContact }) => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [portfolioDropdownOpen, setPortfolioDropdownOpen] = useState(false);
  const [activeSection, setActiveSection] = useState('home');
  const navigate = useNavigate();
  const location = useLocation();
  const onSubPage = location.pathname.startsWith('/portfolio/');

  useEffect(() => {
    if (onSubPage) setActiveSection('portfolio');
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
      if (onSubPage) return;

      const sections = ['home', 'about', 'portfolio', 'clients', 'contact'];
      for (const section of sections) {
        const el = document.getElementById(section);
        if (el) {
          const rect = el.getBoundingClientRect();
          if (rect.top <= 120 && rect.bottom >= 120) {
            setActiveSection(section);
            break;
          }
        }
      }
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, [onSubPage]);

  const scrollTo = (id: string) => {
    setMobileMenuOpen(false);
    setPortfolioDropdownOpen(false);
    const element = document.getElementById(id);
    if (element) {
      const yOffset = -70;
      const y = element.getBoundingClientRect().top + window.pageYOffset + yOffset;
      window.scrollTo({ top: y, behavior: 'smooth' });
    } else {
      // We are on a portfolio sub-page: go back home, then scroll to the section.
      navigate('/', { state: { scrollTo: id } });
    }
  };

  const closeMenus = () => {
    setMobileMenuOpen(false);
    setPortfolioDropdownOpen(false);
  };

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled
          ? 'bg-[#0b101b]/95 backdrop-blur-md border-b border-slate-800/80 py-3 shadow-xl shadow-black/40'
          : 'bg-transparent py-4'
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex items-center justify-between gap-4">
        {/* Zone 1: Logo Wordmark */}
        <a
          href="#home"
          onClick={(e) => {
            e.preventDefault();
            scrollTo('home');
          }}
          className="flex items-center gap-2 group cursor-pointer shrink-0"
        >
          <div className="relative">
            <span className="font-script text-3x1 sm:text-4xl font-bold tracking-wide text-transparent bg-clip-text bg-gradient-to-r from-amber-300 via-amber-400 to-amber-500 drop-shadow-[0_2px_10px_rgba(245,158,11,0.3)] transition-transform group-hover:scale-105 duration-200">
              JABIR
            </span>
            <div className="h-[2px] w-full bg-gradient-to-r from-amber-400/80 via-amber-300 to-transparent rounded-full -mt-1 transform group-hover:w-full transition-all duration-300" />
          </div>
        </a>

        {/* Zone 2: Navigation Links */}
        <nav className="hidden md:flex items-center gap-6 lg:gap-8 text-sm font-medium">
          <button
            onClick={() => scrollTo('home')}
            className={`transition-colors whitespace-nowrap cursor-pointer relative py-1 ${
              activeSection === 'home'
                ? 'text-amber-400 font-semibold'
                : 'text-slate-300 hover:text-white'
            }`}
          >
            Home
            {activeSection === 'home' && (
              <span className="absolute bottom-0 left-0 right-0 h-0.5 bg-amber-400 rounded-full" />
            )}
          </button>

          <button
            onClick={() => scrollTo('about')}
            className={`transition-colors whitespace-nowrap cursor-pointer relative py-1 ${
              activeSection === 'about'
                ? 'text-amber-400 font-semibold'
                : 'text-slate-300 hover:text-white'
            }`}
          >
            About
            {activeSection === 'about' && (
              <span className="absolute bottom-0 left-0 right-0 h-0.5 bg-amber-400 rounded-full" />
            )}
          </button>

          {/* Portfolio with Dropdown */}
          <div
            className="relative"
            onMouseEnter={() => setPortfolioDropdownOpen(true)}
            onMouseLeave={() => setPortfolioDropdownOpen(false)}
          >
            <button
              onClick={() => scrollTo('portfolio')}
              className={`flex items-center gap-1 transition-colors whitespace-nowrap cursor-pointer py-1 ${
                activeSection === 'portfolio'
                  ? 'text-amber-400 font-semibold'
                  : 'text-slate-300 hover:text-white'
              }`}
            >
              Portfolio
              <ChevronDown
                className={`w-4 h-4 transition-transform duration-200 ${
                  portfolioDropdownOpen ? 'rotate-180 text-amber-400' : ''
                }`}
              />
              {activeSection === 'portfolio' && (
                <span className="absolute bottom-0 left-0 right-0 h-0.5 bg-amber-400 rounded-full" />
              )}
            </button>

            {/* Dropdown Menu */}
            {portfolioDropdownOpen && (
              <div className="absolute top-full left-1/2 -translate-x-1/2 mt-2 w-72 bg-[#0f172a] border border-amber-500/20 rounded-xl shadow-2xl shadow-black/80 py-2 backdrop-blur-xl animate-in fade-in duration-150 z-50">
                <div className="px-3 py-1.5 text-[11px] font-semibold uppercase tracking-wider text-amber-400 border-b border-slate-800/80 mb-1 flex items-center gap-1.5">
                  <Sparkles className="w-3 h-3" />
                  Eight Core Services
                </div>
                <div className="max-h-80 overflow-y-auto">
                  {SERVICES_DATA.map((service, idx) => (
                    <button
                      key={service.id}
                      onClick={() => {
                        closeMenus();
                        onSelectService(service.id);
                      }}
                      className="w-full text-left px-3 py-2 text-xs text-slate-300 hover:text-amber-300 hover:bg-slate-800/70 transition-colors flex items-center justify-between group"
                    >
                      <span className="truncate pr-2">{service.title}</span>
                      <span className="text-[10px] text-amber-400/60 group-hover:text-amber-400 font-mono">
                        0{idx + 1}
                      </span>
                    </button>
                  ))}
                </div>
              </div>
            )}
          </div>

          <button
            onClick={() => scrollTo('clients')}
            className={`transition-colors whitespace-nowrap cursor-pointer relative py-1 ${
              activeSection === 'clients'
                ? 'text-amber-400 font-semibold'
                : 'text-slate-300 hover:text-white'
            }`}
          >
            Clients
            {activeSection === 'clients' && (
              <span className="absolute bottom-0 left-0 right-0 h-0.5 bg-amber-400 rounded-full" />
            )}
          </button>

          <button
            onClick={() => scrollTo('contact')}
            className={`transition-colors whitespace-nowrap cursor-pointer relative py-1 ${
              activeSection === 'contact'
                ? 'text-amber-400 font-semibold'
                : 'text-slate-300 hover:text-white'
            }`}
          >
            Contact
            {activeSection === 'contact' && (
              <span className="absolute bottom-0 left-0 right-0 h-0.5 bg-amber-400 rounded-full" />
            )}
          </button>
        </nav>

        {/* Zone 3: Primary Action & Mobile Menu Toggle */}
        <div className="flex items-center gap-3 shrink-0">
          <button
            onClick={() => onOpenContact()}
            className="hidden sm:inline-flex items-center justify-center px-4 sm:px-5 py-2 sm:py-2.5 text-xs sm:text-sm font-semibold text-slate-950 bg-gradient-to-r from-amber-400 via-amber-400 to-amber-500 hover:from-amber-300 hover:to-amber-400 rounded-full shadow-lg shadow-amber-500/20 hover:shadow-amber-500/30 transition-all duration-200 transform hover:-translate-y-0.5 cursor-pointer whitespace-nowrap"
          >
            Let's Collaborate <span className="ml-1.5 font-bold">➔</span>
          </button>

          {/* Mobile hamburger button */}
          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="md:hidden p-2 text-slate-300 hover:text-amber-400 focus:outline-none cursor-pointer"
            aria-label="Toggle menu"
          >
            {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>
      </div>

      {/* Mobile Drawer Menu */}
      {mobileMenuOpen && (
        <div className="md:hidden bg-[#0d1322] border-b border-slate-800 px-4 pt-3 pb-6 mt-2 space-y-3 shadow-2xl animate-in slide-in-from-top-2 duration-200">
          <div className="flex flex-col space-y-2 text-sm font-medium">
            <button
              onClick={() => scrollTo('home')}
              className={`text-left py-2 px-3 rounded-lg transition-colors ${
                activeSection === 'home'
                  ? 'bg-amber-500/10 text-amber-400 font-semibold'
                  : 'text-slate-300 hover:bg-slate-800'
              }`}
            >
              Home
            </button>
            <button
              onClick={() => scrollTo('about')}
              className={`text-left py-2 px-3 rounded-lg transition-colors ${
                activeSection === 'about'
                  ? 'bg-amber-500/10 text-amber-400 font-semibold'
                  : 'text-slate-300 hover:bg-slate-800'
              }`}
            >
              About Me
            </button>
            <button
              onClick={() => scrollTo('portfolio')}
              className={`text-left py-2 px-3 rounded-lg transition-colors ${
                activeSection === 'portfolio'
                  ? 'bg-amber-500/10 text-amber-400 font-semibold'
                  : 'text-slate-300 hover:bg-slate-800'
              }`}
            >
              My Portfolio (8 Services)
            </button>
            <div className="pl-4 space-y-1 border-l-2 border-slate-800 ml-2">
              {SERVICES_DATA.map((service) => (
                <button
                  key={service.id}
                  onClick={() => {
                    closeMenus();
                    onSelectService(service.id);
                  }}
                  className="block text-left text-xs py-1.5 text-slate-400 hover:text-amber-300 w-full"
                >
                  • {service.title}
                </button>
              ))}
            </div>
            <button
              onClick={() => scrollTo('clients')}
              className={`text-left py-2 px-3 rounded-lg transition-colors ${
                activeSection === 'clients'
                  ? 'bg-amber-500/10 text-amber-400 font-semibold'
                  : 'text-slate-300 hover:bg-slate-800'
              }`}
            >
              Clients & Testimonials
            </button>
            <button
              onClick={() => scrollTo('contact')}
              className={`text-left py-2 px-3 rounded-lg transition-colors ${
                activeSection === 'contact'
                  ? 'bg-amber-500/10 text-amber-400 font-semibold'
                  : 'text-slate-300 hover:bg-slate-800'
              }`}
            >
              Contact
            </button>
          </div>

          <div className="pt-2">
            <button
              onClick={() => {
                setMobileMenuOpen(false);
                onOpenContact();
              }}
              className="w-full flex items-center justify-center py-2.5 px-4 text-xs font-semibold text-slate-950 bg-gradient-to-r from-amber-400 to-amber-500 rounded-full shadow-lg shadow-amber-500/20"
            >
              Let's Collaborate ➔
            </button>
          </div>
        </div>
      )}
    </header>
  );
};
