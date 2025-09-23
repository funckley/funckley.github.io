// import { FaLinkedin, FaGithub, FaYoutube } from 'react-icons/fa'
import { useState, useEffect } from 'react';

import TechnologyPage from './TechnologyPage';
import TheoryPage from './TheoryPage';
import MusicPage from './MusicPage';
import ContactPage from './ContactPage';
import { LanguageProvider, useLanguage } from './contexts/LanguageContext';
import { ThemeProvider, useTheme } from './contexts/ThemeContext';

import './App.css'
import {
  BrowserRouter as Router,
  Routes,
  Route,
  Link
} from 'react-router-dom'

const navLinks = [
  { label: 'nav.home', to: '/' },
  { label: 'nav.theory', to: '/theory' },
  { label: 'nav.technology', to: '/technology' },
  { label: 'nav.music', to: '/music' },
  { label: 'nav.contact', to: '/contact' },
]

// Custom hook for responsive design
function useWindowSize() {
  const [windowSize, setWindowSize] = useState({
    width: undefined,
    height: undefined,
  });

  useEffect(() => {
    function handleResize() {
      setWindowSize({
        width: window.innerWidth,
        height: window.innerHeight,
      });
    }
    
    window.addEventListener("resize", handleResize);
    handleResize();
    
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  return windowSize;
}

function Navbar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const { width } = useWindowSize();
  const { language, switchLanguage, t } = useLanguage();
  const { theme, toggleTheme } = useTheme();
  const isMobile = width <= 768;

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  const toggleLanguage = () => {
    switchLanguage(language === 'en' ? 'ja' : 'en');
  };

  return (
    <>
      <header className="navbar" style={{
        position: 'fixed', 
        top: 0, 
        left: 0, 
        right: 0, 
        zIndex: 1000,
        backgroundColor: 'var(--color-navbar-bg)', 
        color: 'var(--color-navbar-text)', 
        display: 'flex', 
        alignItems: 'center',
        justifyContent: 'space-between', 
        padding: isMobile ? '0.75rem 1rem' : '0 2rem', 
        minHeight: '56px', 
        boxShadow: '0 2px 8px var(--color-shadow-light)'
      }}>
        <Link 
          to="/" 
          style={{
            fontFamily: 'serif',
            fontSize: isMobile ? '1.2rem' : '1.4rem',
            fontWeight: 400,
            color: 'var(--color-navbar-text)',
            textDecoration: 'none',
            flexShrink: 0,
            display: 'flex',
            flexDirection: 'column',
            lineHeight: 1.2
          }}
        >
          <div>Erfun Ackley</div>
          <div className="japanese-name" style={{
            fontSize: isMobile ? '0.8rem' : '1.2rem',
            opacity: 0.85,
            letterSpacing: '0.5px'
          }}>
            アックリー エルファン
          </div>
        </Link>        {/* Desktop Navigation */}
        {!isMobile && (
          <div style={{ display: 'flex', alignItems: 'center', gap: '2rem' }}>
            <nav style={{ 
              display: 'flex', 
              gap: '2rem' 
            }}>
              {navLinks.map(link => (
                <Link 
                  key={link.to} 
                  to={link.to} 
                  style={{ 
                    color: 'var(--color-navbar-text)', 
                    textDecoration: 'none', 
                    fontSize: '1rem',
                    padding: '0.5rem',
                    borderRadius: '4px',
                    transition: 'background-color 0.3s ease'
                  }}
                  onMouseEnter={(e) => e.target.style.backgroundColor = 'var(--color-navbar-hover)'}
                  onMouseLeave={(e) => e.target.style.backgroundColor = 'transparent'}
                  className={language === 'ja' ? 'japanese-text' : ''}
                >
                  {t(link.label)}
                </Link>
              ))}
            </nav>
            
            <div style={{ display: 'flex', alignItems: 'center', gap: '1rem' }}>
              {/* Theme toggle button */}
              <button
                onClick={toggleTheme}
                style={{
                  background: 'none',
                  border: 'none',
                  outline: 'none',
                  color: 'var(--color-navbar-text)',
                  padding: '0.5rem',
                  cursor: 'pointer',
                  fontSize: '1.2rem',
                  transition: 'all 0.3s ease',
                  minWidth: '44px',
                  minHeight: '36px',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center'
                }}
                onMouseEnter={(e) => {
                  e.target.style.backgroundColor = 'var(--color-navbar-hover)';
                }}
                onMouseLeave={(e) => {
                  e.target.style.backgroundColor = 'transparent';
                }}
                title={theme === 'dark' ? 'Switch to light mode' : 'Switch to dark mode'}
              >
                {theme === 'dark' ? '☀' : '☾'}
              </button>
              
              {/* Language switcher */}
              <button
                onClick={toggleLanguage}
                style={{
                  background: 'none',
                  border: 'none',
                  outline: 'none',
                  color: 'var(--color-navbar-text)',
                  padding: '0.5rem 0.75rem',
                  cursor: 'pointer',
                  fontSize: '0.9rem',
                  transition: 'all 0.3s ease',
                  minWidth: '44px',
                  minHeight: '36px'
                }}
                onMouseEnter={(e) => {
                  e.target.style.backgroundColor = 'var(--color-navbar-hover)';
                }}
                onMouseLeave={(e) => {
                  e.target.style.backgroundColor = 'transparent';
                }}
              >
                <span className={language === 'en' ? 'japanese-text' : ''}>
                  {language === 'en' ? '日本語' : 'English'}
                </span>
              </button>
            </div>
          </div>
        )}

        {/* Mobile Hamburger Menu */}
        {isMobile && (
          <div style={{ display: 'flex', alignItems: 'center', gap: '1rem' }}>
            {/* Theme toggle for mobile */}
            <button
              onClick={toggleTheme}
              style={{
                background: 'none',
                border: 'none',
                outline: 'none',
                color: 'var(--color-navbar-text)',
                padding: '0.4rem',
                cursor: 'pointer',
                fontSize: '1rem',
                transition: 'all 0.3s ease',
                minWidth: '36px',
                minHeight: '36px',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center'
              }}
              title={theme === 'dark' ? 'Switch to light mode' : 'Switch to dark mode'}
            >
              {theme === 'dark' ? '☀' : '☾'}
            </button>
            
            {/* Language switcher for mobile */}
            <button
              onClick={toggleLanguage}
              style={{
                background: 'none',
                border: 'none',
                outline: 'none',
                color: 'var(--color-navbar-text)',
                padding: '0.4rem 0.6rem',
                cursor: 'pointer',
                fontSize: '0.8rem',
                transition: 'all 0.3s ease',
                minWidth: '44px',
                minHeight: '36px'
              }}
            >
              <span className={language === 'en' ? 'japanese-text' : ''}>
                {language === 'en' ? '日本語' : 'EN'}
              </span>
            </button>
            
            <button
              onClick={toggleMenu}
              style={{
                display: 'flex',
                flexDirection: 'column',
                background: 'none',
                border: 'none',
                cursor: 'pointer',
                padding: '0.5rem',
                color: 'var(--color-navbar-text)',
                minWidth: '44px',
                minHeight: '44px',
                justifyContent: 'center',
                alignItems: 'center'
              }}
              aria-label="Toggle menu"
            >
              <span style={{
                width: '24px',
                height: '2px',
                backgroundColor: 'var(--color-navbar-text)',
                margin: '3px 0',
                transition: '0.3s',
                transform: isMenuOpen ? 'rotate(-45deg) translate(-5px, 6px)' : 'none'
              }}></span>
              <span style={{
                width: '24px',
                height: '2px',
                backgroundColor: 'var(--color-navbar-text)',
                margin: '3px 0',
                transition: '0.3s',
                opacity: isMenuOpen ? '0' : '1'
              }}></span>
              <span style={{
                width: '24px',
                height: '2px',
                backgroundColor: 'var(--color-navbar-text)',
                margin: '3px 0',
                transition: '0.3s',
                transform: isMenuOpen ? 'rotate(45deg) translate(-5px, -6px)' : 'none'
              }}></span>
            </button>
          </div>
        )}
      </header>

      {/* Mobile Menu Overlay */}
      {isMenuOpen && isMobile && (
        <div style={{
          position: 'fixed',
          top: '56px',
          left: 0,
          right: 0,
          background: 'var(--color-navbar-bg)',
          borderTop: '1px solid var(--color-mobile-menu-border)',
          padding: '0',
          boxShadow: '0 4px 8px var(--color-shadow-medium)',
          zIndex: 999
        }}>
          {navLinks.map(link => (
            <Link
              key={link.to}
              to={link.to}
              onClick={() => setIsMenuOpen(false)}
              style={{
                display: 'flex',
                alignItems: 'center',
                color: 'var(--color-navbar-text)',
                textDecoration: 'none',
                fontSize: '1.1rem',
                padding: '1rem 1.5rem',
                borderBottom: '1px solid var(--color-mobile-menu-border)',
                transition: 'background-color 0.3s ease',
                minHeight: '44px'
              }}
              onMouseEnter={(e) => e.target.style.backgroundColor = 'var(--color-navbar-hover)'}
              onMouseLeave={(e) => e.target.style.backgroundColor = 'transparent'}
              className={language === 'ja' ? 'japanese-text' : ''}
            >
              {t(link.label)}
            </Link>
          ))}
        </div>
      )}
    </>
  )
}

function Section({ id, children, style }) {
  const { width } = useWindowSize();
  const isMobile = width <= 768;
  
  return (
    <section id={id} style={{ 
      minHeight: '100vh', 
      padding: isMobile ? '80px 0 20px 0' : '80px 0 40px 0', 
      ...style 
    }}>
      {children}
    </section>
  )
}

// Placeholder page components
function HomePage() {
  const { width } = useWindowSize();
  const { t } = useLanguage();
  const isMobile = width <= 768;
  const isTablet = width <= 1024 && width > 768;
  
  return (
    <main style={{ 
      maxWidth: 1300, 
      margin: '0 auto', 
      padding: isMobile ? '0 1rem' : isTablet ? '0 1.5rem' : '0 2rem' 
    }}>
      {/* ...existing homepage sections... */} 
      <Section id="bio">
        {/* Bio, intro, and image section goes here */}
        <div style={{ 
          display: 'flex', 
          alignItems: isMobile ? 'center' : 'flex-start', 
          gap: isMobile ? '1.5rem' : '2.5rem', 
          flexWrap: 'wrap',
          flexDirection: isMobile ? 'column' : 'row'
        }}>
          <div style={{ 
            flex: isMobile ? 'none' : '0 0 340px', 
            width: isMobile ? '100%' : 'auto',
            maxWidth: isMobile ? '280px' : '340px',
            minWidth: isMobile ? '200px' : '220px', 
            borderRadius: '0 0 0 0', 
            overflow: 'hidden', 
            background: 'var(--color-primary-bg)',
            alignSelf: isMobile ? 'center' : 'auto'
          }}>
            {/* Replace with your image */}
            <img src="/assets/img/IMG_0441.JPG" alt="Erfun Ackley" style={{ 
              width: '100%', 
              display: 'block', 
              objectFit: 'cover', 
              height: isMobile ? '220px' : '260px' 
            }} />
          </div>
          <div style={{ 
            flex: 1, 
            minWidth: isMobile ? '100%' : '260px',
            textAlign: isMobile ? 'center' : 'left'
          }}>
            <p style={{ 
              fontSize: isMobile ? '1rem' : '1.1rem', 
              lineHeight: 1.7, 
              marginBottom: isMobile ? '1rem' : '1.5rem' 
            }}>
              {t('bio.intro')}
            </p>
            <div style={{ 
              fontSize: isMobile ? '1rem' : '1.1rem', 
              lineHeight: 1.7, 
              marginBottom: isMobile ? '1rem' : '1.5rem' 
            }}>
              <p style={{ marginBottom: '1rem' }}>{t('bio.research_intro')}</p>
              <div style={{ paddingLeft: '1rem' }}>
                <p style={{ marginBottom: '1rem' }}>
                  <strong>{t('bio.research_1_title')}</strong><br/>
                  {t('bio.research_1_desc')}
                </p>
                <p style={{ marginBottom: '1rem' }}>
                  <strong>{t('bio.research_2_title')}</strong><br/>
                  {t('bio.research_2_desc')}
                </p>
                <p style={{ marginBottom: '1rem' }}>
                  <strong>{t('bio.research_3_title')}</strong><br/>
                  {t('bio.research_3_desc')}
                </p>
              </div>
            </div>
            <p style={{ 
              fontSize: isMobile ? '1rem' : '1.1rem', 
              lineHeight: 1.7, 
              marginBottom: isMobile ? '1rem' : '1.5rem' 
            }}>
              {t('bio.thesis_desc')}
            </p>
            <p style={{ 
              fontSize: isMobile ? '1rem' : '1.1rem', 
              lineHeight: 1.7 
            }}>
              {t('bio.artistic_practice')}
            </p>
          </div>
        </div>
      </Section>
      <Section id="education" style={{ 
        display: 'flex', 
        flexWrap: 'wrap', 
        gap: isMobile ? '2rem' : '4rem', 
        marginTop: '2rem',
        flexDirection: isMobile ? 'column' : 'row'
      }}>
        {/* Education and Professional Experience */}
        <div style={{ 
          flex: 1, 
          minWidth: isMobile ? '100%' : '320px'
        }}>
          <div style={{ 
            color: 'var(--color-primary-text)', 
            fontSize: isMobile ? '1.2rem' : '1.3rem', 
            marginBottom: '1.2rem' 
          }}>{t('education.title')}</div>
          <div style={{ marginBottom: '2.5rem' }}>
            <div style={{ fontWeight: 500 }}>{t('education.umich.institution')}</div>
            <div style={{ color: 'var(--color-primary-text)', fontSize: '1rem' }}>{t('education.umich.location')}</div>
            <div style={{ color: 'var(--color-primary-text)', fontSize: '1rem' }}>{t('education.umich.date')}</div>
            <div style={{ fontStyle: 'italic', marginTop: 2 }}>{t('education.umich.degree')}</div>
            <div>{t('education.umich.advisor')} <span style={{ textDecoration: 'underline' }}>Hao-Wen Dong</span></div>
          </div>
          <div>
            <div style={{ fontWeight: 500 }}>{t('education.azad.institution')}</div>
            <div style={{ color: 'var(--color-primary-text)', fontSize: '1rem' }}>{t('education.azad.location')}</div>
            <div style={{ color: 'var(--color-primary-text)', fontSize: '1rem' }}>{t('education.azad.date')}</div>
            <div style={{ fontStyle: 'italic', marginTop: 2 }}>{t('education.azad.degree')}</div>
            <div>{t('education.azad.advisor')}</div>
          </div>
        </div>
        <div style={{ 
          flex: 1, 
          minWidth: isMobile ? '100%' : '320px'
        }}>
          <div style={{ 
            color: 'var(--color-primary-text)', 
            fontSize: isMobile ? '1.2rem' : '1.3rem', 
            marginBottom: '1.2rem' 
          }}>{t('experience.title')}</div>
          <div style={{ marginBottom: '2.5rem' }}>
          <div style={{ marginBottom: '2.5rem' }}>
            <div>{t('experience.robotics.department')}</div>
            <div style={{ color: 'var(--color-primary-text)', fontSize: '1rem' }}>{t('experience.robotics.location')}</div>
            <div style={{ fontStyle: 'italic', marginTop: 2 }}>{t('experience.robotics.role')}</div>
            <div style={{ color: 'var(--color-primary-text)', fontSize: '1rem' }}>{t('experience.robotics.dates.0')}</div>
            <div style={{ color: 'var(--color-primary-text)', fontSize: '1rem' }}>{t('experience.robotics.dates.1')}</div>
          </div>
            <div>{t('experience.pat.department')}</div>
            <div style={{ color: 'var(--color-primary-text)', fontSize: '1rem' }}>{t('experience.pat.location')}</div>
            <div style={{ fontStyle: 'italic', marginTop: 2 }}>{t('experience.pat.role')}</div>
            <div style={{ color: 'var(--color-primary-text)', fontSize: '1rem' }}>{t('experience.pat.date')}</div>
          </div>
          <div>
            <div>{t('experience.stamps.department')}</div>
            <div style={{ color: 'var(--color-primary-text)', fontSize: '1rem' }}>{t('experience.stamps.location')}</div>
            <div style={{ fontStyle: 'italic', marginTop: 2 }}>{t('experience.stamps.role')}</div>
            <div style={{ color: 'var(--color-primary-text)', fontSize: '1rem' }}>{t('experience.stamps.date')}</div>
          </div>
        </div>
      </Section>
      <Section id="projects">
        {/* Projects grid placeholder */}
        <div style={{ 
          color: 'var(--color-primary-text)', 
          fontSize: isMobile ? '1.3rem' : '1.5rem', 
          margin: '2rem 0 1.5rem 0' 
        }}>{t('projects.title')}</div>
        <div style={{ 
          display: 'grid', 
          gridTemplateColumns: isMobile ? '1fr' : 'repeat(auto-fit, minmax(340px, 1fr))', 
          gap: '2rem' 
        }}>
          {/* Example project card */}
          <div style={{ 
            background: 'var(--color-card-bg)', 
            borderRadius: 8, 
            overflow: 'hidden', 
            padding: 0 
          }}>
            <img src="/assets/img/project1.jpg" alt="SoundInk" style={{ 
              width: '100%', 
              height: 180, 
              objectFit: 'cover' 
            }} />
            <div style={{ padding: '1rem' }}>
              <a href="#" style={{ 
                color: 'var(--color-primary-text)', 
                fontWeight: 500 
              }}>{t('projects.soundink.title')}</a>
              <div style={{ 
                fontSize: '0.95rem', 
                margin: '0.5rem 0' 
              }}>
                {t('projects.soundink.description')}
              </div>
              <a href="#" style={{ 
                color: 'var(--color-primary-text)', 
                fontStyle: 'italic', 
                fontSize: '0.95rem' 
              }}>{t('projects.soundink.link')}</a>
            </div>
          </div>
          {/* Add more project cards as needed */}
        </div>
      </Section>
    </main>
  )
}

function App() {
  const [grainInitialized, setGrainInitialized] = useState(false);

  // Function to initialize or reinitialize grain effect
  const initializeGrain = async () => {
    if (!window.grained) return;
    
    // Remove existing grain element (the library manages this, but let's be safe)
    const existingGrain = document.querySelector('.grained');
    if (existingGrain) {
      existingGrain.remove();
      console.log('Removed existing grain');
    }
    
    // Get current theme
    const currentTheme = document.documentElement.getAttribute('data-theme') || 'dark';
    console.log('Initializing grain for theme:', currentTheme);
    
    // Apply grain to main-container (not body) - this is the proper way
    try {
      window.grained('#main-container', {
        animate: false,
        patternWidth: 95,
        patternHeight: 54,
        grainOpacity: currentTheme === 'light' ? 0.08 : 0.05,
        grainDensity: 1,
        grainWidth: 1,
        grainHeight: 1
      });
      
      console.log('Grain effect initialized for', currentTheme, 'theme');
    } catch (error) {
      console.error('Error initializing grain:', error);
    }
  };

  useEffect(() => {
    // Load grained.js dynamically and then initialize
    const loadGrainedScript = () => {
      return new Promise((resolve, reject) => {
        // Check if already loaded
        if (window.grained) {
          resolve();
          return;
        }
        
        // Check if script tag already exists
        if (document.querySelector('script[src="/grained.js"]')) {
          // Script exists, wait for it to load
          const checkLoaded = () => {
            if (window.grained) {
              resolve();
            } else {
              setTimeout(checkLoaded, 100);
            }
          };
          checkLoaded();
          return;
        }
        
        // Create script tag
        const script = document.createElement('script');
        script.src = '/grained.js';
        script.onload = resolve;
        script.onerror = reject;
        document.head.appendChild(script);
      });
    };
    
    const initGrain = async () => {
      try {
        await loadGrainedScript();
        console.log('Grained.js loaded successfully');
        
        // Wait for the body element to be available
        const waitForElement = () => {
          return new Promise((resolve) => {
            const checkElement = () => {
              const element = document.getElementById('main-body');
              if (element) {
                console.log('Found main-body element');
                resolve(element);
              } else {
                console.log('Waiting for main-body element...');
                setTimeout(checkElement, 100);
              }
            };
            checkElement();
          });
        };
        
        await waitForElement();
        await initializeGrain();
        setGrainInitialized(true);
        
      } catch (error) {
        console.error('Error loading or initializing grain effect:', error);
      }
    };

    // Wait for React to render the DOM
    setTimeout(initGrain, 500);
  }, []);

  // Watch for theme changes and reinitialize grain
  useEffect(() => {
    if (!grainInitialized) return;

    let isInitializing = false;

    const observer = new MutationObserver((mutations) => {
      mutations.forEach((mutation) => {
        if (mutation.type === 'attributes' && mutation.attributeName === 'data-theme' && !isInitializing) {
          console.log('Theme changed, reinitializing grain...');
          isInitializing = true;
          initializeGrain().finally(() => {
            isInitializing = false;
          });
        }
      });
    });

    observer.observe(document.documentElement, {
      attributes: true,
      attributeFilter: ['data-theme']
    });

    return () => observer.disconnect();
  }, [grainInitialized]);

  return (
    <ThemeProvider>
      <LanguageProvider>
        <Router>
          <div id="main-container" style={{ 
            color: 'var(--color-primary-text)', 
            minHeight: '100vh', 
            fontFamily: 'serif',
            position: 'relative'
          }}>
            <Navbar />
            <Routes>
              <Route path="/" element={<HomePage />} />
              <Route path="/technology" element={<TechnologyPage />} />
              <Route path="/theory" element={<TheoryPage />} />
              <Route path="/music" element={<MusicPage />} />
              <Route path="/contact" element={<ContactPage />} />
            </Routes>
          </div>
        </Router>
      </LanguageProvider>
    </ThemeProvider>
  )
}

export default App
