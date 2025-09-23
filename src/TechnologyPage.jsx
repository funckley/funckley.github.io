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
function ProjectCard({ title, description, imageUrl, videoUrls, youtubeUrl, projectUrl, isMobile }) {
  // Convert YouTube URL to embed format
  const getEmbedUrl = (url) => {
    if (!url) return null;
    
    // Handle youtu.be format
    if (url.includes('youtu.be/')) {
      const videoId = url.split('youtu.be/')[1].split('?')[0];
      return `https://www.youtube.com/embed/${videoId}`;
    }
    
    // Handle youtube.com/watch format
    if (url.includes('youtube.com/watch')) {
      const videoId = url.split('v=')[1].split('&')[0];
      return `https://www.youtube.com/embed/${videoId}`;
    }
    
    // If already embed format, return as is
    if (url.includes('youtube.com/embed/')) {
      return url;
    }
    
    return url;
  };

  const embedUrl = getEmbedUrl(youtubeUrl);
  return (
    <div style={{
      background: 'var(--color-card-bg)',
      borderRadius: 12,
      overflow: 'hidden',
      marginBottom: '2rem',
      boxShadow: '0 4px 12px var(--color-shadow-light)',
      transition: 'transform 0.3s ease, box-shadow 0.3s ease'
    }}>
      {/* Project Content */}
      <div style={{
        padding: isMobile ? '1.5rem' : '2rem'
      }}>
        <h3 style={{
          fontSize: isMobile ? '1.3rem' : '1.5rem',
          marginBottom: '1.5rem',
          color: 'var(--color-primary-text)',
          lineHeight: 1.3
        }}>
          {title}
        </h3>
        
        {/* YouTube Video */}
        {embedUrl && (
          <div style={{
            marginBottom: '1.5rem',
            position: 'relative',
            paddingBottom: '56.25%', // 16:9 aspect ratio
            height: 0,
            overflow: 'hidden'
          }}>
            <iframe
              src={embedUrl}
              style={{
                position: 'absolute',
                top: 0,
                left: 0,
                width: '100%',
                height: '100%',
                border: 'none',
                borderRadius: '8px'
              }}
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
              allowFullScreen
              title={title}
            />
          </div>
        )}
        
        {/* Local Videos & GIFs */}
        {videoUrls && videoUrls.length > 0 && (
          <div style={{
            marginBottom: '1.5rem',
            display: 'flex',
            flexDirection: isMobile ? 'column' : 'row',
            gap: '1rem'
          }}>
            {videoUrls.map((mediaUrl, index) => (
              <div key={index} style={{ flex: 1 }}>
                {mediaUrl.endsWith('.gif') ? (
                  <img
                    src={mediaUrl}
                    alt={title + ' demo'}
                    style={{
                      width: '100%',
                      height: 'auto',
                      maxHeight: isMobile ? '250px' : '300px',
                      borderRadius: '8px',
                      backgroundColor: '#000',
                      display: 'block',
                      objectFit: 'contain'
                    }}
                  />
                ) : (
                  <video
                    controls
                    style={{
                      width: '100%',
                      height: 'auto',
                      maxHeight: isMobile ? '250px' : '300px',
                      borderRadius: '8px',
                      backgroundColor: '#000',
                      display: 'block'
                    }}
                    preload="metadata"
                  >
                    <source src={mediaUrl} type="video/mp4" />
                    <source src={mediaUrl} type="video/webm" />
                    <source src={mediaUrl} type="video/mov" />
                    Your browser does not support the video element.
                  </video>
                )}
              </div>
            ))}
          </div>
        )}
        
        {/* // Project Image */}
        {imageUrl && (
          <div style={{
            width: '100%',
            marginBottom: '1.5rem',
            borderRadius: '8px',
            overflow: 'hidden',
            display: 'flex',
            justifyContent: 'center',
            alignItems: 'center',
            background: '#000'
          }}>
            {/* Support array of images */}
            {Array.isArray(imageUrl)
              ? imageUrl.map((img, idx) => (
                  <img
                    key={idx}
                    src={img}
                    alt={title}
                    style={{
                      width: '100%',
                      height: 'auto',
                      maxHeight: isMobile ? '300px' : '400px',
                      objectFit: 'contain',
                      borderRadius: '8px',
                      background: '#000',
                      display: 'block',
                      marginRight: idx < imageUrl.length - 1 ? '1rem' : 0
                    }}
                  />
                ))
              : (
                  <img
                    src={imageUrl}
                    alt={title}
                    style={{
                      width: '100%',
                      height: 'auto',
                      maxHeight: isMobile ? '300px' : '400px',
                      objectFit: 'contain',
                      borderRadius: '8px',
                      background: '#000',
                      display: 'block'
                    }}
                  />
                )}
          </div>
        )}
        
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
      description: "SoundInk is an interactive web-based application designed to explore the intersection of technology, creativity, and therapeutic engagement. Developed using React and the Web Audio API, the tool enables users to generate musical compositions through intuitive, gesture-based drawing, supporting both mouse and touchscreen interactions. Originally conceived as a platform for music therapy and educational outreach, SoundInk allows users to create sound by drawing on a canvas, with parameters such as color, instrument selection, tempo, and pitch directly influencing the resulting audio output. The project emphasizes ease of use, creative freedom, and multisensory interaction, making music creation approachable and engaging for users of all backgrounds.\n\nPrincipal Investigators: Anıl Çamcı, Yousef El-Magharbel.",
      imageUrl: null, // Add image path when available
      youtubeUrl: "https://youtu.be/X2v7K0LeHaI",
      projectUrl: null // Add project URL when available
    },
    {
      id: 2,
      title: "The Droodle Task: Propelling Human Creativity with LLMs",
      description: "The Droodle Task is a research project conducted at the Robot Studio in the Department of Robotics, University of Michigan, exploring how large language models (LLMs) can serve as collaborative partners in enhancing human creativity. In collaboration with Patrícia Alves-Oliveira, Peter H. Kahn, Jr., and robotics researcher Trey Davis, the project investigates how AI-driven interaction can stimulate original and imaginative responses in humans through a structured creative activity.\n\nAt the core of the study is the Droodle Captioning Task, in which participants are presented with ambiguous, hand-drawn images (\"droodles\") and asked to generate surprising captions that shift the viewer's perception. The research examines how LLMs can guide users through this process by combining visual interpretation with verbal imagination, ultimately boosting creative engagement.\n\nKey innovations include the development of creative collaboration modules that balance divergent and convergent thinking, process-oriented prompting techniques to sustain motivation, and initial explorations of multi-agent systems where AI agents critique or expand upon one another's suggestions. The project spans multiple domains, including computational creativity, human-AI collaboration, natural language processing, human-centered design, and embodied AI.",
      imageUrl: "/assets/img/Droodle.png",
      projectUrl: null
    },
    {
      id: 3,
      title: "TensioSonics: Tension-based Interaction for Musical Expression",
      description: "TensioSonics is an experimental musical interface that translates physical tension into sound, offering a uniquely tactile approach to musical expression. The system uses custom-built tension sensors to capture the minute variations in force applied by a performer's hands, converting these physical gestures into real-time audio synthesis parameters. By manipulating the tension of elastic materials, users can control pitch, timbre, amplitude, and spatial positioning of sounds, creating an intimate connection between physical effort and sonic outcome.\n\nThe project explores how haptic feedback and proprioceptive awareness can enhance musical performance, drawing on research in embodied cognition and gestural control. The tension sensors, built using strain gauges and custom electronics, provide high-resolution data that drives a sophisticated audio engine programmed in SuperCollider. This allows for nuanced control over granular synthesis, filtering, and spatialization, enabling performers to sculpt complex sonic textures through subtle changes in grip strength and hand positioning.\n\nTensioSonics challenges traditional notions of musical interfaces by prioritizing physical engagement over visual feedback, encouraging performers to develop new forms of muscle memory and gestural vocabulary. The system has been used in live performance contexts, demonstrating its potential for both solo expression and ensemble interaction.\n\nResearch Areas: Tangible User Interfaces, Embodied Interaction, Musical Expression, Sensor Design, Real-time Audio Processing",
      imageUrl: null,
      youtubeUrl: "https://youtu.be/C_vBWWUC4X0",
      projectUrl: null
    },
    {
      id: 4,
      title: "Deep Drawing: An Intermedia AI Co-Performer",
      description: "Deep Drawing is an intermedia AI co-performer project developed as part of the FEAST (Faculty Engineering/Arts Student Teams) initiative at ArtsEngine, University of Michigan, in collaboration with Julie Zhu, John Granzow, and Zhiyu Zhang. The project explores the role of artificial intelligence in live, cross-modal performance, combining drawing and sound into an interactive system that produces real-time generative visuals. Using contact microphones embedded in a tabletop surface, the system captures audio signals produced by drawing or writing. These sound inputs—often highly variable and noisy—are processed through a deep learning model that transforms them into projected digital art during performance.\n\nThe project addresses key technical challenges in real-time audio analysis, including the interpretation of low-amplitude, high-variability drawing sounds and the limitations of time-of-arrival methods due to the rapid speed of sound. Achieving responsive performance required the development of a novel machine learning architecture that improves both processing speed and predictive accuracy under tight computational constraints.\n\nDeep Drawing investigates the expressive possibilities of human-AI co-performance, offering a new framework for algorithmic creativity across sensory modalities. The project was presented and performed at the AI Music Creativity Conference (AIMC 2024) at Oxford University.\n\nResearch Areas: Computational Creativity, Human-Computer Interaction, Artificial Intelligence, Interactive Systems Design, Digital Signal Processing",
      imageUrl: "/assets/img/DeepDrawing.png",
      videoUrls: ["/assets/video/DeepDrawing.mp4", "/assets/video/DeepDrawing2.gif"],
      projectUrl: null
    },
    {
      id: 5,
      title: "AquaMachina: Hybrid Analog-Digital Synthesis",
      description: "AquaMachina is an innovative sound synthesis system that bridges the gap between analog and digital domains through the creative use of water as a transmission medium. The project explores how aquatic environments can serve as both a medium for signal processing and a source of generative content, creating a unique hybrid synthesis approach that combines the unpredictability of physical systems with the precision of digital control.\n\nThe system uses underwater speakers and hydrophones to transmit and capture audio signals through water-filled containers of varying sizes, shapes, and acoustic properties. As sound waves propagate through the water, they undergo natural filtering, reverberation, and modulation effects that are impossible to replicate through purely digital means. The resulting audio is captured, analyzed, and fed back into the digital synthesis chain, creating complex feedback loops between the physical and virtual domains.\n\nMy role in AquaMachina involved designing the digital signal processing architecture, developing real-time analysis algorithms to extract meaningful parameters from the aquatic audio, and creating the control interfaces that allow performers to manipulate both the digital synthesis engines and the physical properties of the water systems. The project also involved extensive experimentation with different water containers, temperatures, and additives to explore their sonic characteristics.\n\nThe system has been used in both studio compositions and live performance settings, offering a compelling example of how environmental elements can be integrated into contemporary music technology.\n\nResearch Areas: Hybrid Synthesis, Environmental Sound Processing, Real-time Signal Analysis, Physical Modeling, Interactive Performance Systems",
      imageUrl: null,
      youtubeUrl: "https://youtu.be/kjnG0xAqnvQ",
      projectUrl: null
    },
    {
      id: 6,
      title: "Kill the Priest",
      description: "Kill the Priest is a first-person mystery game developed in Unity, combining interactive storytelling, suspenseful gameplay, and immersive audiovisual design. Set in a shadowy, Victorian-era estate, players assume the role of an investigator tasked with uncovering the truth behind a series of unexplained disappearances. Originally created as an introductory game development project, the game blends basic mechanics—such as shooting and item discovery—with atmospheric world-building to deliver a compelling, text-free narrative experience. The project was later adapted into virtual reality (VR) to deepen immersion and expand on its interactive potential.\n\nPlayers navigate a richly layered environment where clues are embedded in the architecture, lighting, and sound. The visual and sonic design draws from Gothic aesthetics, using carefully selected textures, dim lighting, and ambient audio to evoke an atmosphere of mystery and unease. Core gameplay includes exploratory mechanics, weapon-based interaction, and environmental storytelling.\n\nThe VR adaptation introduced new challenges and opportunities—requiring redesigns in player navigation, shooting mechanics, and environmental scale. The use of VR controllers enhanced sensory engagement, allowing players to physically aim, explore, and interact with the world in more intuitive ways. This shift also laid the groundwork for more sophisticated storytelling mechanisms, including spatial audio cues and interactive objects that reveal hidden elements of the game's backstory.\n\nResearch Areas: Interactive Storytelling, Immersive Media, VR Design, First-Person Game Mechanics, Auditory Immersion, Narrative World-Building",
      imageUrl: "/assets/img/KillThePriest.jpg",
      youtubeUrl: "https://youtu.be/Rdqe51TpzUM",
      projectUrl: null
    },
    {
      id: 7,
      title: "ConcertVR: An Immersive VR Music Experience",
      description: "ConcertVR is a virtual reality project that reimagines the experience of live musical performance through immersive audiovisual design. Centered on a performance of a percussion work by Iannis Xenakis, the project places the viewer inside a dynamically rendered concert space, combining spatial audio and real-time audio-responsive visuals to create a deeply engaging sensory environment. Developed in Unity as part of the Immersive Media course at the University of Michigan (Winter 2024), and directed by Anıl Çamcı, ConcertVR explores how spatial listening and responsive design can enhance presence and perception in virtual performance.\n\nThe auditory design involved multi-microphone recording techniques to capture the nuance and directional quality of the percussion performance. This spatial information was then used to drive a custom particle system, programmed to react dynamically to different audio input streams. As a result, visual elements—such as color bursts, ambient motion, and a central \"portal\" effect—respond in real time to variations in sound intensity and frequency content, providing a visual mapping of the music's energy and structure.\n\nMy primary contributions included the design and implementation of this audio-responsive particle system, along with collaborative work on the recording and post-processing stages. I also contributed to optimizing the human-computer interaction design for VR, ensuring the system responded fluidly to both user perspective and real-time audio cues.\n\nResearch Areas: Virtual Reality, Spatial Audio Design, Real-Time Audio Visualization, Immersive Performance, Human-Computer Interaction",
      imageUrl: "/assets/img/ConcertVR.png",
      projectUrl: null
    },
    {
      id: 8,
      title: "Fear Follower",
      description: "Fear Follower is an interactive installation created for Halloween 2023, blending motion capture, robotics, and immersive audiovisual design to produce a heightened sensory experience of surveillance, tension, and pursuit. Developed in collaboration with SinYu Deng (visual animation) and Adam Schmidt (robot construction and control), the project explores how technology can be used to provoke visceral emotional responses through interactive storytelling and spatial presence.\n\nThe installation centers around a projected eyeball that visually tracks the user's movement in real time, accompanied by a robotic hand that follows the user across the space. This eerie, responsive environment leverages marker-based motion tracking (via specially designed glasses and gloves) to link user behavior directly to both the robotic and visual systems. As the robotic hand moves closer, the soundscape—crafted using granular synthesis and dynamic filtering in SuperCollider and Max/MSP—intensifies, building suspense through spatialized audio cues that reflect proximity and motion.\n\nVisual feedback is handled through TouchDesigner, where the eyeball's gaze direction and color intensity react to hand movement, deepening the sense of being watched. The robot itself is controlled via Max/MSP and Arduino, and uses real-time motion data to continually orient toward the user. Its speed and direction shift based on the velocity of the user's hand, creating a sense of lifelike pursuit and unpredictable engagement.\n\nResearch Areas: Human-Robot Interaction, Motion Capture Technology, Immersive Sound Design, Audiovisual Synchronization, Interactive Installation Art",
      imageUrl: null,
      youtubeUrl: "https://youtu.be/LVjrf0Ow-ZU",
      projectUrl: null
    },
    {
      id: 9,
      title: "Sonic Toy Land: A Virtual Interface for Musical Expression",
      description: "Sonic Toy Land is a Virtual Interface for Musical Expression (VIME) that blends childhood nostalgia with advanced spatial audio design in an immersive VR environment. Developed in collaboration with Ayden Williams and Maddie Vassalo, the project transforms a life-sized virtual playroom into an interactive musical space where users arrange toys to create custom sonic patterns. At the core of the system is a train-track-based sequencer, allowing users to position and manipulate toys along a moving track to control rhythm, instrumentation, and playback sequences.\n\nBy combining playful interaction with technical precision, Sonic Toy Land offers an intuitive, exploratory interface that invites users to engage with musical structure through tactile spatial arrangements. The use of real-time spatial audio enhances immersion, with sounds dynamically shifting in perspective and position based on the user's location and actions within the VR environment. Carefully crafted visual and auditory feedback ensures that each interaction—whether placing a toy, adjusting the train, or triggering a musical phrase—feels expressive and responsive.\n\nSonic Toy Land explores how virtual environments can foster creativity and musical engagement through non-traditional interfaces, redefining how users compose, perform, and experience music in VR.\n\nResearch Areas: Virtual Musical Instruments, Spatial Audio, VR Interaction Design, Playful Interfaces, Music Technology",
      imageUrl: ["/assets/img/SonicToyLand.png", "/assets/img/SonicToyLand2.png"],
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
            videoUrls={project.videoUrls}
            youtubeUrl={project.youtubeUrl}
            projectUrl={project.projectUrl}
            isMobile={isMobile}
          />
        ))}
      </section>
    </div>
  );
}