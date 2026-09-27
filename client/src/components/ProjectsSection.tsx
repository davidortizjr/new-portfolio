import { useEffect, useRef, useState } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

import { projects } from '../data/projects';

gsap.registerPlugin(ScrollTrigger);

function ProjectsSection() {
  const sectionRef = useRef<HTMLElement>(null);
  const listRef = useRef<HTMLUListElement>(null);
  const previewRef = useRef<HTMLDivElement>(null);
  const quickX = useRef<gsap.QuickToFunc | null>(null);
  const quickY = useRef<gsap.QuickToFunc | null>(null);
  const [activeId, setActiveId] = useState<string | null>(null);

  const activeProject = projects.find((project) => project.id === activeId) ?? null;

  useEffect(() => {
    if (previewRef.current) {
      quickX.current = gsap.quickTo(previewRef.current, 'x', {
        duration: 0.6,
        ease: 'power3',
      });
      quickY.current = gsap.quickTo(previewRef.current, 'y', {
        duration: 0.6,
        ease: 'power3',
      });
    }
  }, []);

  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.fromTo(
        '.projects-heading',
        { opacity: 0, y: 30 },
        {
          opacity: 1,
          y: 0,
          duration: 0.9,
          ease: 'power3.out',
          scrollTrigger: {
            trigger: sectionRef.current,
            start: 'top 80%',
          },
        }
      );

      gsap.fromTo(
        '.project-row',
        { opacity: 0, y: 24 },
        {
          opacity: 1,
          y: 0,
          duration: 0.7,
          stagger: 0.08,
          ease: 'power3.out',
          scrollTrigger: {
            trigger: listRef.current,
            start: 'top 85%',
          },
        }
      );
    }, sectionRef);

    return () => ctx.revert();
  }, []);

  const handleMouseMove = (event: React.MouseEvent<HTMLLIElement>) => {
    quickX.current?.(event.clientX);
    quickY.current?.(event.clientY);
  };

  const handleMouseEnter = (id: string, event: React.MouseEvent<HTMLLIElement>) => {
    setActiveId(id);
    quickX.current?.(event.clientX);
    quickY.current?.(event.clientY);
    gsap.to(previewRef.current, {
      opacity: 1,
      scale: 1,
      duration: 0.4,
      ease: 'power3.out',
    });
  };

  const handleMouseLeave = () => {
    setActiveId(null);
    gsap.to(previewRef.current, {
      opacity: 0,
      scale: 0.85,
      duration: 0.3,
      ease: 'power2.in',
    });
  };

  return (
    <section id="work" className="projects-section p-gutter" ref={sectionRef}>
      <div className="projects-heading flex items-end justify-between flex-wrap gap-4 mb-12">
        <div>
          <p className="section-tag flex items-center justify-start gap-2.5 pl-3 pr-4 py-1.5 rounded-xl bg-grey text-12 text-white w-fit mb-6">
            <span className="bg-green block size-2 rounded-full shrink-0"></span>
            <span>Selected work</span>
          </p>
          <h2 className="text-fluid-3xl text-white font-bold">Things I've built.</h2>
        </div>
        <p className="projects-count text-fluid-sm">
          {String(projects.length).padStart(2, '0')} projects
        </p>
      </div>

      <ul className="projects-list" ref={listRef}>
        {projects.map((project) => (
          <li
            key={project.id}
            className="project-row"
            onMouseEnter={(event) => handleMouseEnter(project.id, event)}
            onMouseMove={handleMouseMove}
            onMouseLeave={handleMouseLeave}
          >
            <a
              href={project.href}
              target="_blank"
              rel="noopener noreferrer"
              className="project-row-link"
            >
              <span className="project-row-index">{project.index}</span>
              <span className="project-row-title">{project.title}</span>
              <span className="project-row-category">{project.category}</span>
              <span className="project-row-arrow" aria-hidden="true">
                &#8594;
              </span>
            </a>
          </li>
        ))}
      </ul>

      <div className="project-preview" ref={previewRef} aria-hidden="true">
        {activeProject && (
          <div
            className="project-preview-card"
            style={{ backgroundColor: activeProject.color }}
          >
            <span>{activeProject.title}</span>
          </div>
        )}
      </div>
    </section>
  );
}

export default ProjectsSection;
