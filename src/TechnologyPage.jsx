import React, { useState, useEffect } from 'react';
import { useLanguage } from './contexts/LanguageContext';

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

// Project Card Component
function ProjectCard({ title, description, imageUrl, projectUrl, isMobile }) {
  return (
    <div style={{
      background: 'var(--color-card-bg)',
      borderRadius: 12,
      overflow: 'hidden',
      marginBottom: '2rem',
      boxShadow: '0 4px 12px var(--color-shadow-light)',
      transition: 'transform 0.3s ease, box-shadow 0.3s ease'
    }}>
      {/* Project Image */}
      {imageUrl && (
        <div style={{
          width: '100%',
          height: isMobile ? '200px' : '250px',
          background: 'var(--color-secondary-bg)',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          color: 'var(--color-secondary-text)',
          fontSize: '0.9rem'
        }}>
          <img 
            src={imageUrl} 
            alt={title}
            style={{
              width: '100%',
              height: '100%',
              objectFit: 'cover'
            }}
          />
        </div>
      )}
      
      {/* Project Content */}
      <div style={{
        padding: isMobile ? '1.5rem' : '2rem'
      }}>
        <h3 style={{
          fontSize: isMobile ? '1.3rem' : '1.5rem',
          marginBottom: '1rem',
          color: 'var(--color-primary-text)',
          lineHeight: 1.3
        }}>
          {title}
        </h3>
        
        {description && (
          <p style={{
            fontSize: isMobile ? '0.95rem' : '1rem',
            lineHeight: 1.6,
            marginBottom: '1.5rem',
            color: 'var(--color-secondary-text)'
          }}>
            {description}
          </p>
        )}
        
        {projectUrl && (
          <a 
            href={projectUrl}
            target="_blank"
            rel="noopener noreferrer"
            style={{
              color: 'var(--color-primary-text)',
              textDecoration: 'none',
              fontWeight: 500,
              fontSize: '0.95rem',
              borderBottom: '1px solid var(--color-primary-text)',
              transition: 'opacity 0.3s ease'
            }}
            onMouseEnter={(e) => e.target.style.opacity = '0.7'}
            onMouseLeave={(e) => e.target.style.opacity = '1'}
          >
            View Project →
          </a>
        )}
      </div>
    </div>
  );
}

export default function TechnologyPage() {
  const { width } = useWindowSize();
  const { t } = useLanguage();
  const isMobile = width <= 768;
  
  // Project data - placeholders for now
  const projects = [
    {
      id: 1,
      title: "SoundInk: Music Therapy & Education Application",
      description: "Project description coming soon...",
      imageUrl: null, // Add image path when available
      projectUrl: null // Add project URL when available
    },
    {
      id: 2,
      title: "The Droodle Task: Propelling Human Creativity with LLMs",
      description: "Project description coming soon...",
      imageUrl: null,
      projectUrl: null
    },
    {
      id: 3,
      title: "TensioSonics: Interactive Algorithmic Improvisation/Composition through Motion Control",
      description: "Project description coming soon...",
      imageUrl: null,
      projectUrl: null
    },
    {
      id: 4,
      title: "Deep Drawing: An Intermedia AI Co-Performer",
      description: "Project description coming soon...",
      imageUrl: null,
      projectUrl: null
    },
    {
      id: 5,
      title: "AquaMachina: A Speculative Underwater World",
      description: "Project description coming soon...",
      imageUrl: null,
      projectUrl: null
    },
    {
      id: 6,
      title: "Kill the Priest",
      description: "Project description coming soon...",
      imageUrl: null,
      projectUrl: null
    },
    {
      id: 7,
      title: "ConcertVR: An Immersive VR Music Experience",
      description: "Project description coming soon...",
      imageUrl: null,
      projectUrl: null
    },
    {
      id: 8,
      title: "Fear Follower",
      description: "Project description coming soon...",
      imageUrl: null,
      projectUrl: null
    },
    {
      id: 9,
      title: "Sonic Toy Land: A Virtual Interface for Musical Expression",
      description: "Project description coming soon...",
      imageUrl: null,
      projectUrl: null
    },
    {
      id: 10,
      title: "Pepper Ghost, A Future Data Interpretation of Past Species",
      description: "Project description coming soon...",
      imageUrl: null,
      projectUrl: null
    }
  ];
  
  return (
    <div style={{ 
      paddingTop: 80, 
      color: 'var(--color-primary-text)',
      padding: isMobile ? '80px 1rem 2rem 1rem' : '80px 2rem 2rem 2rem',
      maxWidth: 1300,
      margin: '0 auto'
    }}>
      <h1 style={{
        fontSize: isMobile ? '2rem' : '2.5rem',
        marginBottom: isMobile ? '1rem' : '1.5rem'
      }}>{t('pages.technology.title')}</h1>
      
      <p style={{
        fontSize: isMobile ? '1rem' : '1.1rem',
        lineHeight: 1.6,
        marginBottom: '3rem'
      }}>
        {t('pages.technology.intro')}
      </p>
      
      {/* Projects Section */}
      <section>
        {projects.map(project => (
          <ProjectCard
            key={project.id}
            title={project.title}
            description={project.description}
            imageUrl={project.imageUrl}
            projectUrl={project.projectUrl}
            isMobile={isMobile}
          />
        ))}
      </section>
    </div>
  );
}