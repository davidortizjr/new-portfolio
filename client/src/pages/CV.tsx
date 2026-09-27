import { useEffect, useRef } from 'react';
import gsap from 'gsap';
import cvPdf from '../assets/ORTIZ_CV.pdf';

const CV_PATH = cvPdf;

function CV() {
  const containerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.fromTo(
        '.cv-reveal',
        { opacity: 0, y: 24 },
        {
          opacity: 1,
          y: 0,
          duration: 0.8,
          stagger: 0.1,
          ease: 'power3.out',
          delay: 0.15,
        }
      );

      gsap.fromTo(
        '.cv-preview',
        { opacity: 0, y: 30 },
        {
          opacity: 1,
          y: 0,
          duration: 0.9,
          ease: 'power3.out',
          delay: 0.4,
        }
      );
    }, containerRef);

    return () => ctx.revert();
  }, []);

  return (
    <div className="cv-root p-gutter" ref={containerRef}>
      <div className="cv-header">
        <a href="/#hero" className="cv-reveal cv-back">
          &#8592; Back home
        </a>

        <p className="cv-reveal section-tag flex items-center gap-2.5 pl-3 pr-4 py-1.5 rounded-xl bg-black text-12 text-white w-fit">
          <span className="bg-green block size-2 rounded-full shrink-0" />
          <span>Curriculum Vitae</span>
        </p>

        <h1 className="cv-reveal cv-heading text-fluid-3xl text-white font-bold">
          My CV
        </h1>

        <p className="cv-reveal cv-sub">
          Preview it below, or grab a copy for yourself.
        </p>

        <div className="cv-reveal cv-actions">
          <a href={CV_PATH} download className="cv-btn-primary">
            Download CV
          </a>
          <a href={CV_PATH} target="_blank" rel="noopener noreferrer" className="cv-btn-ghost">
            Open in new tab
          </a>
        </div>
      </div>

      <div className="cv-preview">
        <iframe src={CV_PATH} title="David Ortiz — CV" className="cv-frame" />
        <p className="cv-fallback-note">
          Preview not showing? <a href={CV_PATH} target="_blank" rel="noopener noreferrer">Open it directly</a> instead —
          some mobile browsers don't render PDFs inline.
        </p>
      </div>
    </div>
  );
}

export default CV;
