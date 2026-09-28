import { useEffect } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

import './App.css'
import LoadingScreen from './components/LoadingScreen'
import ProjectsSection from './components/ProjectsSection'
import AboutSection from './components/AboutSection'
import ContactSection from './components/ContactSection'
import Footer from './components/Footer'
import pic from './assets/pic.jpg'

gsap.registerPlugin(ScrollTrigger);

function App() {
  const showLoadingScreen = window.location.hash.length <= 1;

  useEffect(() => {
    if (!showLoadingScreen) return;

    document.body.style.overflow = 'hidden';

    const animation = gsap.to('.loading-screen', {
      y: '-100%',
      duration: 1,
      delay: 2,
      ease: 'power4.inOut',
      onComplete: () => {
        document.body.style.overflow = '';
      },
    });

    return () => {
      animation.kill();
      document.body.style.overflow = '';
    };
  }, [showLoadingScreen]);


  useEffect(() => {
    gsap.fromTo(
      '.hero-text span',
      { opacity: 0, y: 20 },
      {
        opacity: 1,
        y: 0,
        duration: .7,
        delay: showLoadingScreen ? 3 : 0,
        stagger: 0.3,
        ease: 'power2.out',
      }
    );
  }, [showLoadingScreen]);


  useEffect(() => {
    gsap.fromTo('.hero-pic',
      {
        x: '100%',
      },
      {
        x: 0,
        duration: 1,
        delay: showLoadingScreen ? 3 : 0,
        ease: 'power4.inOut',
      }
    );
  }, [showLoadingScreen]);

  useEffect(() => {
    gsap.fromTo('.tag-projects',
      {
        opacity: 0,
        y: 20,
      },
      {
        opacity: 1,
        y: 0,
        duration: 1,
        delay: showLoadingScreen ? 5.5 : 0,
        ease: 'power4.inOut',
      }
    );
  }, [showLoadingScreen]);

  useEffect(() => {
    gsap.fromTo('.hero-paragraph',
      {
        opacity: 0,
        y: 20,
      },
      {
        opacity: 1,
        y: 0,
        duration: 1,
        delay: showLoadingScreen ? 4.5 : 0,
        ease: 'power4.inOut',
      }
    );
  }, [showLoadingScreen]);

  useEffect(() => {
    const refresh = setTimeout(() => ScrollTrigger.refresh(), showLoadingScreen ? 3200 : 0);
    return () => clearTimeout(refresh);
  }, [showLoadingScreen]);

  useEffect(() => {
    gsap.fromTo('.hero-links p',
      {
        opacity: 0,
        y: 20,
      },
      {
        opacity: 1,
        y: 0,
        duration: .5,
        delay: showLoadingScreen ? 5.1 : 0,
        ease: 'power4.inOut',
      }
    );
  }, [showLoadingScreen]);

  return (
    <>
      {showLoadingScreen && <LoadingScreen />}

      <div className="hero-section w-full lg:min-h-svh grid lg:grid-cols-2" id="hero">
        <div className="w-full min-h-svh lg:min-h-auto p-gutter flex gap-10 flex-col items-start justify-between">
          <div>
            <p className="tag-projects flex items-center justify-start gap-2.5 pl-3 pr-4 py-1.5 rounded-xl bg-black text-12 text-white">
              <span className="bg-green block size-2 rounded-full shrink-0"></span>
              <span>Open for new projects</span>
            </p>
          </div>
          <div>
            <div>
              <h1 className="hero-text text-fluid-4xl text-white font-bold mb-4">
                <span>Thoughtful </span>{' '}
                <span>software</span>{' '}
                <span>carefully </span>{' '}
                <span>engineered</span>{' '}
                <span>for</span>{' '}
                <span>the</span>{' '}
                <span>real</span>{' '}
                <span>world.</span>{' '}
              </h1>
            </div>
            <div>
              <p className="hero-paragraph mt-4">
                I’m a software engineer who enjoys turning ideas into reliable, <br />
                well-crafted software that people actually enjoy using.
              </p>
            </div>
          </div>
          <div className="hero-links mb-4">
            <p className="text-white">
              <span>Find me at </span>
              <span>
                <a href="https://github.com/davidortizjr" target="_blank" rel="noopener noreferrer" className="text-red-500 underline">
                  GitHub
                </a>
              </span>
              <span> and </span>
              <span>
                <a href="https://www.linkedin.com/in/david-ortiz-446012374/" target="_blank" rel="noopener noreferrer" className="text-red-500 underline">
                  LinkedIn
                </a>.
              </span>
            </p>
            <p className="text-white">
              <span> Check out my </span>
              <span className="text-red-500 underline">
                <a href="/cv">
                  CV
                </a>
              </span>
            </p>
          </div>
        </div>
        <div className="relative overflow-hidden">
          <img className="hero-pic size-full lg:absolute lg:inset-0 lg:object-cover" src={pic} alt="Profile Picture" />
        </div>
      </div>

      <ProjectsSection />
      <AboutSection />
      <ContactSection />
      <Footer />
    </>
  )
}

export default App
