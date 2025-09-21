// import { FaLinkedin, FaGithub, FaYoutube } from 'react-icons/fa'
import { useState, useEffect } from 'react';

import TechnologyPage from './TechnologyPage';
import TheoryPage from './TheoryPage';
import MusicPage from './MusicPage';
import ContactPage from './ContactPage';

import './App.css'
import {
  BrowserRouter as Router,
  Routes,
  Route,
  Link
} from 'react-router-dom'

const navLinks = [
  { label: 'Home', to: '/' },
  { label: 'Technology', to: '/technology' },
  { label: 'Theory', to: '/theory' },
  { label: 'Music', to: '/music' },
  { label: 'Contact', to: '/contact' },
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
  const isMobile = width <= 768;

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <>
      <header style={{
        position: 'fixed', 
        top: 0, 
        left: 0, 
        right: 0, 
        zIndex: 1000,
        background: '#1C1C1C', 
        color: '#FCFAF2', 
        display: 'flex', 
        alignItems: 'center',
        justifyContent: 'space-between', 
        padding: isMobile ? '0.75rem 1rem' : '0 2rem', 
        minHeight: '56px', 
        boxShadow: '0 2px 8px rgba(0,0,0,0.1)'
      }}>
        <Link
          to="/"
          style={{
            fontFamily: 'serif',
            fontSize: isMobile ? '1.2rem' : '1.4rem',
            fontWeight: 400,
            color: '#FCFAF2',
            textDecoration: 'none',
            flexShrink: 0
          }}
        >
          Erfun Ackley
        </Link>

        {/* Desktop Navigation */}
        {!isMobile && (
          <nav style={{ 
            display: 'flex', 
            gap: '2rem' 
          }}>
            {navLinks.map(link => (
              <Link 
                key={link.to} 
                to={link.to} 
                style={{ 
                  color: '#FCFAF2', 
                  textDecoration: 'none', 
                  fontSize: '1rem',
                  padding: '0.5rem',
                  borderRadius: '4px',
                  transition: 'background-color 0.3s ease'
                }}
                onMouseEnter={(e) => e.target.style.backgroundColor = 'rgba(252, 250, 242, 0.1)'}
                onMouseLeave={(e) => e.target.style.backgroundColor = 'transparent'}
              >
                {link.label}
              </Link>
            ))}
          </nav>
        )}

        {/* Mobile Hamburger Menu */}
        {isMobile && (
          <button
            onClick={toggleMenu}
            style={{
              display: 'flex',
              flexDirection: 'column',
              background: 'none',
              border: 'none',
              cursor: 'pointer',
              padding: '0.5rem',
              color: '#FCFAF2',
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
              backgroundColor: '#FCFAF2',
              margin: '3px 0',
              transition: '0.3s',
              transform: isMenuOpen ? 'rotate(-45deg) translate(-5px, 6px)' : 'none'
            }}></span>
            <span style={{
              width: '24px',
              height: '2px',
              backgroundColor: '#FCFAF2',
              margin: '3px 0',
              transition: '0.3s',
              opacity: isMenuOpen ? '0' : '1'
            }}></span>
            <span style={{
              width: '24px',
              height: '2px',
              backgroundColor: '#FCFAF2',
              margin: '3px 0',
              transition: '0.3s',
              transform: isMenuOpen ? 'rotate(45deg) translate(-5px, -6px)' : 'none'
            }}></span>
          </button>
        )}
      </header>

      {/* Mobile Menu Overlay */}
      {isMenuOpen && isMobile && (
        <div style={{
          position: 'fixed',
          top: '56px',
          left: 0,
          right: 0,
          background: '#1C1C1C',
          borderTop: '1px solid rgba(252, 250, 242, 0.1)',
          padding: '0',
          boxShadow: '0 4px 8px rgba(0,0,0,0.2)',
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
                color: '#FCFAF2',
                textDecoration: 'none',
                fontSize: '1.1rem',
                padding: '1rem 1.5rem',
                borderBottom: '1px solid rgba(252, 250, 242, 0.1)',
                transition: 'background-color 0.3s ease',
                minHeight: '44px'
              }}
              onMouseEnter={(e) => e.target.style.backgroundColor = 'rgba(252, 250, 242, 0.1)'}
              onMouseLeave={(e) => e.target.style.backgroundColor = 'transparent'}
            >
              {link.label}
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
            borderRadius: '0 50% 50% 0', 
            overflow: 'hidden', 
            background: '#1C1C1C',
            alignSelf: isMobile ? 'center' : 'auto'
          }}>
            {/* Replace with your image */}
            <img src="/assets/img/your-image.jpg" alt="Erfun Ackley" style={{ 
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
              I am an independent researcher based in Greater Tokyo, Japan, recently graduated with an M.A. from the University of Michigan. I explore the intersections of artificial intelligence, creative practice, and philosophical theory through a multidisciplinary approach that spans computer science, epistemology, and the historical dynamics of technology in society.
            </p>
            <div style={{ 
              fontSize: isMobile ? '1rem' : '1.1rem', 
              lineHeight: 1.7, 
              marginBottom: isMobile ? '1rem' : '1.5rem' 
            }}>
              <p style={{ marginBottom: '1rem' }}>My research unfolds across three primary branches:</p>
              <div style={{ paddingLeft: '1rem' }}>
                <p style={{ marginBottom: '1rem' }}>
                  <strong>1. Computational Creativity & AI Tools</strong><br/>
                  I design intelligent systems to assist and stimulate creativity within the artistic community—including musicians, sound designers, and game developers. These tools are informed by both rule-based and data-driven methods, with applications in audio, interaction, and generative media.
                </p>
                <p style={{ marginBottom: '1rem' }}>
                  <strong>2. Epistemology of Creativity & Human Action</strong><br/>
                  I conduct theoretical research on the nature of creativity and human action, and how these fundamentally differ from—or align with—artificial intelligence. This includes inquiries into epistemology, logic, and Gödel's Incompleteness Theorems as a foundation for understanding the limits of formal and algorithmic systems. This perspective informs the design of tools that aim not to replicate creativity, but to better stimulate and extend human creative potential.
                </p>
                <p style={{ marginBottom: '1rem' }}>
                  <strong>3. Philosophy, Economics, and Technology in Society</strong><br/>
                  I conduct interdisciplinary research in epistemology, aesthetics, and ethics, while also drawing from economic history and the cultural evolution of technology to analyze how ideas shape tools—and vice versa.
                </p>
              </div>
            </div>
            <p style={{ 
              fontSize: isMobile ? '1rem' : '1.1rem', 
              lineHeight: 1.7, 
              marginBottom: isMobile ? '1rem' : '1.5rem' 
            }}>
              During my graduate studies at the University of Michigan, I collaborated with faculty and fellows across the Departments of Robotics, Performing Arts Technology, Psychology, and the School of Art & Design. My master's thesis—advised by Hao-Wen Dong, John Granzow, and Patrícia Alves-Oliveira—investigated the design and evaluation of intelligent creative tools built on contrasting paradigms: axiomatic, rule-based systems versus purely data-driven models, and how we might design effective hybrid systems grounded in a deeper understanding of human creative action. The work combined technical development with a critical theoretical component, exploring not only how AI can assist human creativity, but also how excessive reliance on data-driven methods may ultimately distort our conception of creativity itself. This foundational inquiry continues to shape the next phase of my research.
            </p>
            <p style={{ 
              fontSize: isMobile ? '1rem' : '1.1rem', 
              lineHeight: 1.7 
            }}>
              In addition to research, I am a composer, sound artist, and game designer, with a focus on systems-based creativity and computational approaches to artistic expression.
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
            color: '#FCFAF2', 
            fontSize: isMobile ? '1.2rem' : '1.3rem', 
            marginBottom: '1.2rem' 
          }}>Education</div>
          <div style={{ marginBottom: '2.5rem' }}>
            <div style={{ fontWeight: 500 }}>University of Michigan</div>
            <div style={{ color: '#FCFAF2', fontSize: '1rem' }}>Ann Arbor, MI</div>
            <div style={{ color: '#FCFAF2', fontSize: '1rem' }}>May 2025</div>
            <div style={{ fontStyle: 'italic', marginTop: 2 }}>M.A. in Media Arts & Technology</div>
            <div>Advisor: <span style={{ textDecoration: 'underline' }}>Hao-Wen Dong</span></div>
          </div>
          <div>
            <div style={{ fontWeight: 500 }}>Azad University, Central Tehran Branch</div>
            <div style={{ color: '#FCFAF2', fontSize: '1rem' }}>Tehran, Iran</div>
            <div style={{ color: '#FCFAF2', fontSize: '1rem' }}>February 2022</div>
            <div style={{ fontStyle: 'italic', marginTop: 2 }}>B.S. in Audio Technology</div>
            <div>Advisor: Reza Sabooni</div>
          </div>
        </div>
        <div style={{ 
          flex: 1, 
          minWidth: isMobile ? '100%' : '320px'
        }}>
          <div style={{ 
            color: '#FCFAF2', 
            fontSize: isMobile ? '1.2rem' : '1.3rem', 
            marginBottom: '1.2rem' 
          }}>Professional Experience</div>
          <div style={{ marginBottom: '2.5rem' }}>
          <div style={{ marginBottom: '2.5rem' }}>
            <div>Robot Studio, Department of Robotics</div>
            <div style={{ color: '#FCFAF2', fontSize: '1rem' }}>University of Michigan, Ann Arbor, MI</div>
            <div style={{ fontStyle: 'italic', marginTop: 2 }}>Researcher</div>
            <div style={{ color: '#FCFAF2', fontSize: '1rem' }}>May 2025-present</div>
            <div style={{ color: '#FCFAF2', fontSize: '1rem' }}>May 2024-August 2024</div>
          </div>
            <div>Department of Performing Arts Technology</div>
            <div style={{ color: '#FCFAF2', fontSize: '1rem' }}>University of Michigan, Ann Arbor, MI</div>
            <div style={{ fontStyle: 'italic', marginTop: 2 }}>Graduate Research Assistant</div>
            <div style={{ color: '#FCFAF2', fontSize: '1rem' }}>September 2023-May 2025</div>
          </div>
          <div>
            <div>Penny W. Stamps School of Art & Design</div>
            <div style={{ color: '#FCFAF2', fontSize: '1rem' }}>University of Michigan, Ann Arbor, MI</div>
            <div style={{ fontStyle: 'italic', marginTop: 2 }}>Programmer and Sound Designer</div>
            <div style={{ color: '#FCFAF2', fontSize: '1rem' }}>December 2023-April 2024</div>
          </div>
        </div>
      </Section>
      <Section id="projects">
        {/* Projects grid placeholder */}
        <div style={{ 
          color: '#FCFAF2', 
          fontSize: isMobile ? '1.3rem' : '1.5rem', 
          margin: '2rem 0 1.5rem 0' 
        }}>Recent Projects:</div>
        <div style={{ 
          display: 'grid', 
          gridTemplateColumns: isMobile ? '1fr' : 'repeat(auto-fit, minmax(340px, 1fr))', 
          gap: '2rem' 
        }}>
          {/* Example project card */}
          <div style={{ 
            background: '#1C1C1C', 
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
                color: '#FCFAF2', 
                fontWeight: 500 
              }}>SoundInk</a>
              <div style={{ 
                fontSize: '0.95rem', 
                margin: '0.5rem 0' 
              }}>
                An interactive web application developed using React and the Web Audio API to support both touch and mouse interactions. This project merges technology and creative expression to provide therapeutic and educational experiences through music and art.
              </div>
              <a href="#" style={{ 
                color: '#FCFAF2', 
                fontStyle: 'italic', 
                fontSize: '0.95rem' 
              }}>PROJECT PAGE</a>
            </div>
          </div>
          {/* Add more project cards as needed */}
        </div>
      </Section>
    </main>
  )
}

function App() {
  return (
    <Router>
      <div style={{ background: '#1C1C1C', color: '#FCFAF2', minHeight: '100vh', fontFamily: 'serif' }}>
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
  )
}

export default App
