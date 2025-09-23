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

// Audio/Video Card Component
function MediaCard({ title, description, audioSrc, videoSrc, type, isMobile }) {
  return (
    <div style={{
      background: 'var(--color-card-bg)',
      borderRadius: 12,
      padding: isMobile ? '1.5rem' : '2rem',
      marginBottom: '2rem',
      boxShadow: '0 4px 12px var(--color-shadow-light)'
    }}>
      <h3 style={{
        fontSize: isMobile ? '1.3rem' : '1.5rem',
        marginBottom: '1rem',
        color: 'var(--color-primary-text)'
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
      
      {/* Audio Player */}
      {type === 'audio' && audioSrc && (
        <audio 
          controls 
          style={{
            width: '100%',
            height: '40px',
            borderRadius: '8px'
          }}
          preload="metadata"
        >
          <source src={audioSrc} type="audio/mpeg" />
          <source src={audioSrc} type="audio/wav" />
          <source src={audioSrc} type="audio/ogg" />
          Your browser does not support the audio element.
        </audio>
      )}
      
      {/* Video Player */}
      {type === 'video' && videoSrc && (
        <video 
          controls 
          style={{
            width: '100%',
            maxHeight: isMobile ? '250px' : '400px',
            borderRadius: '8px',
            backgroundColor: '#000'
          }}
          preload="metadata"
        >
          <source src={videoSrc} type="video/mp4" />
          <source src={videoSrc} type="video/webm" />
          <source src={videoSrc} type="video/ogg" />
          Your browser does not support the video element.
        </video>
      )}
      
      {/* Both Audio and Video */}
      {type === 'both' && (
        <div style={{ display: 'flex', flexDirection: 'column', gap: '1rem' }}>
          {audioSrc && (
            <div>
              <h4 style={{ fontSize: '1rem', marginBottom: '0.5rem', color: 'var(--color-primary-text)' }}>
                Audio
              </h4>
              <audio 
                controls 
                style={{
                  width: '100%',
                  height: '40px',
                  borderRadius: '8px'
                }}
                preload="metadata"
              >
                <source src={audioSrc} type="audio/mpeg" />
                <source src={audioSrc} type="audio/wav" />
                <source src={audioSrc} type="audio/ogg" />
                Your browser does not support the audio element.
              </audio>
            </div>
          )}
          
          {videoSrc && (
            <div>
              <h4 style={{ fontSize: '1rem', marginBottom: '0.5rem', color: 'var(--color-primary-text)' }}>
                Video
              </h4>
              <video 
                controls 
                style={{
                  width: '100%',
                  maxHeight: isMobile ? '250px' : '400px',
                  borderRadius: '8px',
                  backgroundColor: '#000'
                }}
                preload="metadata"
              >
                <source src={videoSrc} type="video/mp4" />
                <source src={videoSrc} type="video/webm" />
                <source src={videoSrc} type="video/ogg" />
                Your browser does not support the video element.
              </video>
            </div>
          )}
        </div>
      )}
    </div>
  );
}

export default function MusicPage() {
  const { width } = useWindowSize();
  const { t } = useLanguage();
  const isMobile = width <= 768;
  
  // Your compositions organized by category
  const electroacousticCompositions = [
    {
      id: 1,
      title: "A Composition for Guitar, Mundane Objects, and Electronics",
      audioSrc: "/assets/audio/A Composition for Guitar, Mundane Objects, and Electronics.mp3",
      type: "audio"
    },
    {
      id: 2,
      title: "Bandar-e Anzalī",
      audioSrc: "/assets/audio/Bandar-e Anzali.wav",
      type: "audio"
    },
    {
      id: 3,
      title: "Ivy: For Violin, Clarinet, Xylophone, Celeste, and Electronics",
      audioSrc: "/assets/audio/Ivy For Violin, Clarinet, Xylophone, Celeste, and Electronics.wav",
      type: "audio"
    },
    {
      id: 4,
      title: "Kitchenware in Sets of Seven",
      audioSrc: "/assets/audio/Kitchenware in Sets of Seven.wav",
      type: "audio"
    }
  ];

  const baroqueCompositions = [
    {
      id: 5,
      title: "Sinfonia for Harpsichord",
      audioSrc: "/assets/audio/Three-Part Invention for Harpsichord.wav",
      type: "audio"
    },
    {
      id: 6,
      title: "Fugue in C minor for Organ",
      audioSrc: "/assets/audio/Fugue in C minor Organ.wav",
      type: "audio"
    }
  ];

  const romanticCompositions = [
    {
      id: 7,
      title: "Rondo in B♭ minor",
      audioSrc: "/assets/audio/Rondo in B♭ minor.mp3",
      type: "audio"
    },
    {
      id: 8,
      title: "Nocturne in E♭",
      audioSrc: "/assets/audio/Nocturne in E♭.wav",
      type: "audio"
    }
  ];

  const serialismCompositions = [
    {
      id: 9,
      title: "Temporal Knot for Piano",
      audioSrc: "/assets/audio/Temporal Knot for Piano.wav",
      type: "audio"
    },
    {
      id: 10,
      title: "Fragments: A Bagatelle",
      audioSrc: "/assets/audio/Fragments A Bagatelle.wav",
      type: "audio"
    },
    {
      id: 11,
      title: "String Quartet No. 1",
      audioSrc: "/assets/audio/String Quartet No. 1.mp3",
      type: "audio"
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
      }}>{t('pages.music.title')}</h1>
      
      <p style={{
        fontSize: isMobile ? '1rem' : '1.1rem',
        lineHeight: 1.6,
        marginBottom: '3rem'
      }}>
        {t('pages.music.intro')}
      </p>
      
      {/* Electroacoustic Section */}
      <section style={{ marginBottom: '3rem' }}>
        <h2 style={{
          fontSize: isMobile ? '1.5rem' : '1.8rem',
          marginBottom: '2rem',
          color: 'var(--color-primary-text)'
        }}>
          Electroacoustic
        </h2>
        
        {electroacousticCompositions.map(composition => (
          <MediaCard
            key={composition.id}
            title={composition.title}
            audioSrc={composition.audioSrc}
            videoSrc={composition.videoSrc}
            type={composition.type}
            isMobile={isMobile}
          />
        ))}
      </section>

      {/* Neo-Baroque Section */}
      <section style={{ marginBottom: '3rem' }}>
        <h2 style={{
          fontSize: isMobile ? '1.5rem' : '1.8rem',
          marginBottom: '2rem',
          color: 'var(--color-primary-text)'
        }}>
          Neo-Baroque
        </h2>

        {baroqueCompositions.map(composition => (
          <MediaCard
            key={composition.id}
            title={composition.title}
            audioSrc={composition.audioSrc}
            videoSrc={composition.videoSrc}
            type={composition.type}
            isMobile={isMobile}
          />
        ))}
      </section>

      {/* Neo-Romantic Section */}
      <section style={{ marginBottom: '3rem' }}>
        <h2 style={{
          fontSize: isMobile ? '1.5rem' : '1.8rem',
          marginBottom: '2rem',
          color: 'var(--color-primary-text)'
        }}>
          Neo-Romantic
        </h2>
        
        {romanticCompositions.map(composition => (
          <MediaCard
            key={composition.id}
            title={composition.title}
            audioSrc={composition.audioSrc}
            videoSrc={composition.videoSrc}
            type={composition.type}
            isMobile={isMobile}
          />
        ))}
      </section>

      {/* Romantic Section */}
      <section style={{ marginBottom: '3rem' }}>
        <h2 style={{
          fontSize: isMobile ? '1.5rem' : '1.8rem',
          marginBottom: '2rem',
          color: 'var(--color-primary-text)'
        }}>
          Neo-Romantic
        </h2>
        
        {romanticCompositions.map(composition => (
          <MediaCard
            key={composition.id}
            title={composition.title}
            audioSrc={composition.audioSrc}
            videoSrc={composition.videoSrc}
            type={composition.type}
            isMobile={isMobile}
          />
        ))}
      </section>

      {/* Serialism Section */}
      <section style={{ marginBottom: '3rem' }}>
        <h2 style={{
          fontSize: isMobile ? '1.5rem' : '1.8rem',
          marginBottom: '2rem',
          color: 'var(--color-primary-text)'
        }}>
          Serialism
        </h2>
        
        {serialismCompositions.map(composition => (
          <MediaCard
            key={composition.id}
            title={composition.title}
            audioSrc={composition.audioSrc}
            videoSrc={composition.videoSrc}
            type={composition.type}
            isMobile={isMobile}
          />
        ))}
      </section>
      
      {/* Sound Design Section */}
      <section>
        <h2 style={{
          fontSize: isMobile ? '1.5rem' : '1.8rem',
          marginBottom: '2rem',
          color: 'var(--color-primary-text)'
        }}>
          {t('pages.music.sound_design_title')}
        </h2>
        
        <MediaCard
          title="Sound Design for Film: Pan's Labyrinth Scene"
          description={t('pages.music.pans_labyrinth_desc')}
          videoSrc="/assets/video/Labyrinth.mp4"
          type="video"
          isMobile={isMobile}
        />
      </section>
    </div>
  );
}