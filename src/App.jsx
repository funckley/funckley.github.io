// import { FaLinkedin, FaGithub, FaYoutube } from 'react-icons/fa'

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

function Navbar() {
  return (
    <header style={{
      position: 'fixed', top: 0, left: 0, right: 0, zIndex: 1000,
      background: '#181818', color: '#d8f7ffff', display: 'flex', alignItems: 'center',
      justifyContent: 'space-between', padding: '0 2rem', height: '56px', boxShadow: '0 2px 8px rgba(0,0,0,0.1)'
    }}>
      <Link
        to="/"
        style={{
          fontFamily: 'serif',
          fontSize: '1.4rem',
          fontWeight: 400,
          color: '#d8f7ffff',
          textDecoration: 'none'
        }}
      >
        Erfun Ackley
      </Link>
      <nav style={{ display: 'flex', gap: '2rem' }}>
        {navLinks.map(link => (
          <Link key={link.to} to={link.to} style={{ color: '#d8f7ffff', textDecoration: 'none', fontSize: '1rem' }}>{link.label}</Link>
        ))}
      </nav>
      {/* <div style={{ display: 'flex', gap: '1.2rem', alignItems: 'center' }}> */}
        {/* Social icons here */}
      {/* </div> */}
    </header>
  )
}

function Section({ id, children, style }) {
  return (
    <section id={id} style={{ minHeight: '100vh', padding: '80px 0 40px 0', ...style }}>
      {children}
    </section>
  )
}

// Placeholder page components
function HomePage() {
  return (
    <main style={{ maxWidth: 1300, margin: '0 auto', padding: '0 2rem' }}>
      {/* ...existing homepage sections... */} 
      <Section id="bio">
        {/* Bio, intro, and image section goes here */}
        <div style={{ display: 'flex', alignItems: 'flex-start', gap: '2.5rem', flexWrap: 'wrap' }}>
          <div style={{ flex: '0 0 340px', minWidth: 220, borderRadius: '0 50% 50% 0', overflow: 'hidden', background: '#222' }}>
            {/* Replace with your image */}
            <img src="/assets/img/your-image.jpg" alt="Erfun Ackley" style={{ width: '100%', display: 'block', objectFit: 'cover', height: 260 }} />
          </div>
          <div style={{ flex: 1, minWidth: 260 }}>
            <p style={{ fontSize: '1.1rem', lineHeight: 1.7, marginBottom: 0 }}>
              I am a master’s student and multidisciplinary researcher at the University of Michigan, where I explore the intersections of artificial intelligence, computational creativity, and hybrid systems for music and media technology. My work combines mathematical modeling, rule-based approaches, and machine learning to develop creative AI systems with applications in audio, interaction design, and virtual environments. In addition to my research, I am a composer, game designer, and developer.
            </p>
            <p style={{ fontSize: '1.1rem', lineHeight: 1.7, marginBottom: 0 }}>
              My specific interests include hybrid and explainable AI, cognitive modeling, multi-agent collaborative systems, human-computer interaction, virtual and extended reality, audio and music synthesis, and digital signal processing.
            </p>
            <p style={{ fontSize: '1.1rem', lineHeight: 1.7 }}>
              Currently, I am conducting research under the supervision of Professor Hao-Wen Dong, focusing on integrating machine learning and rule-based systems to create generative models for music and interactive media. This work leverages geometrical and statistical techniques to enhance creative AI frameworks.
            </p>
          </div>
        </div>
      </Section>
      <Section id="education" style={{ display: 'flex', flexWrap: 'wrap', gap: '4rem', marginTop: '2rem' }}>
        {/* Education and Professional Experience */}
        <div style={{ flex: 1, minWidth: 320 }}>
          <div style={{ color: '#d8f7ffff', fontSize: '1.3rem', marginBottom: '1.2rem' }}>Education</div>
          <div style={{ marginBottom: '2.5rem' }}>
            <div style={{ fontWeight: 500 }}>University of Michigan</div>
            <div style={{ color: '#d8f7ffff', fontSize: '1rem' }}>Ann Arbor, MI</div>
            <div style={{ color: '#d8f7ffff', fontSize: '1rem' }}>May 2025</div>
            <div style={{ fontStyle: 'italic', marginTop: 2 }}>M.A. in Media Arts & Technology</div>
            <div>Advisor: <span style={{ textDecoration: 'underline' }}>Hao-Wen Dong</span></div>
          </div>
          <div>
            <div style={{ fontWeight: 500 }}>Azad University, Central Tehran Branch</div>
            <div style={{ color: '#d8f7ffff', fontSize: '1rem' }}>Tehran, Iran</div>
            <div style={{ color: '#d8f7ffff', fontSize: '1rem' }}>February 2022</div>
            <div style={{ fontStyle: 'italic', marginTop: 2 }}>B.S. in Audio Technology</div>
            <div>Advisor: Reza Sabooni</div>
          </div>
        </div>
        <div style={{ flex: 1, minWidth: 320 }}>
          <div style={{ color: '#d8f7ffff', fontSize: '1.3rem', marginBottom: '1.2rem' }}>Professional Experience</div>
          <div style={{ marginBottom: '2.5rem' }}>
          <div style={{ marginBottom: '2.5rem' }}>
            <div>Robot Studio, Department of Robotics</div>
            <div style={{ color: '#d8f7ffff', fontSize: '1rem' }}>University of Michigan, Ann Arbor, MI</div>
            <div style={{ fontStyle: 'italic', marginTop: 2 }}>Researcher</div>
            <div style={{ color: '#d8f7ffff', fontSize: '1rem' }}>May 2025-present</div>
            <div style={{ color: '#d8f7ffff', fontSize: '1rem' }}>May 2024-August 2024</div>
          </div>
            <div>Department of Performing Arts Technology</div>
            <div style={{ color: '#d8f7ffff', fontSize: '1rem' }}>University of Michigan, Ann Arbor, MI</div>
            <div style={{ fontStyle: 'italic', marginTop: 2 }}>Graduate Research Assistant</div>
            <div style={{ color: '#d8f7ffff', fontSize: '1rem' }}>September 2023-May 2025</div>
          </div>
          <div>
            <div>Penny W. Stamps School of Art & Design</div>
            <div style={{ color: '#d8f7ffff', fontSize: '1rem' }}>University of Michigan, Ann Arbor, MI</div>
            <div style={{ fontStyle: 'italic', marginTop: 2 }}>Programmer and Sound Designer</div>
            <div style={{ color: '#d8f7ffff', fontSize: '1rem' }}>December 2023-April 2024</div>
          </div>
        </div>
      </Section>
      <Section id="projects">
        {/* Projects grid placeholder */}
        <div style={{ color: '#d8f7ffff', fontSize: '1.5rem', margin: '2rem 0 1.5rem 0' }}>Recent Projects:</div>
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(340px, 1fr))', gap: '2rem' }}>
          {/* Example project card */}
          <div style={{ background: '#222', borderRadius: 8, overflow: 'hidden', padding: 0 }}>
            <img src="/assets/img/project1.jpg" alt="SoundInk" style={{ width: '100%', height: 180, objectFit: 'cover' }} />
            <div style={{ padding: '1rem' }}>
              <a href="#" style={{ color: '#d8f7ffff', fontWeight: 500 }}>SoundInk</a>
              <div style={{ fontSize: '0.95rem', margin: '0.5rem 0' }}>
                An interactive web application developed using React and the Web Audio API to support both touch and mouse interactions. This project merges technology and creative expression to provide therapeutic and educational experiences through music and art.
              </div>
              <a href="#" style={{ color: '#d8f7ffff', fontStyle: 'italic', fontSize: '0.95rem' }}>PROJECT PAGE</a>
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
      <div style={{ background: '#181818', color: '#d8f7ffff', minHeight: '100vh', fontFamily: 'serif' }}>
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
