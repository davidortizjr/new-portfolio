import { useEffect, useRef } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

const skills = [
  {
    title: 'Development',
    detail: 'React · TypeScript · PHP · C# · ASP.NET · Git · Node.js · Express ',
  },
  {
    title: 'Data',
    detail: 'MSSQL · MySQL · PostgreSQL · Redis · REST APIs · WebSocket',
  },
  {
    title: 'Tools',
    detail: 'Vite · Tailwind CSS · GitHub · Azure DevOps · Figma · Postman · VS Code · Docker',
  },
  {
    title: 'Craft',
    detail: 'GSAP animation · Responsive UI · Performance',
  },
];

function AboutSection() {
  const sectionRef = useRef<HTMLElement>(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.fromTo(
        '.about-heading, .about-paragraph',
        { opacity: 0, y: 30 },
        {
          opacity: 1,
          y: 0,
          duration: 0.9,
          stagger: 0.15,
          ease: 'power3.out',
          scrollTrigger: {
            trigger: sectionRef.current,
            start: 'top 80%',
          },
        }
      );

      gsap.fromTo(
        '.skill-card',
        { opacity: 0, y: 20 },
        {
          opacity: 1,
          y: 0,
          duration: 0.6,
          stagger: 0.1,
          ease: 'power3.out',
          scrollTrigger: {
            trigger: '.skills-grid',
            start: 'top 85%',
          },
        }
      );
    }, sectionRef);

    return () => ctx.revert();
  }, []);

  return (
    <section id="about" className="about-section p-gutter" ref={sectionRef}>
      <p className="section-tag about-heading flex items-center justify-start gap-2.5 pl-3 pr-4 py-1.5 rounded-xl bg-grey text-12 text-white w-fit mb-6">
        <span className="bg-green block size-2 rounded-full shrink-0"></span>
        <span>About me</span>
      </p>

      <div className="about-grid">
        <h2 className="about-heading text-fluid-3xl text-white font-bold">
          Software engineer building software people actually enjoy using.
        </h2>

        <div className="about-copy">
          <p className="about-paragraph">
            I'm David, a software engineer who enjoys turning ideas into
            reliable, well-crafted software. My work spans full-stack development, from
            database design to the small interface details that make a product feel
            considered.
          </p>
          <p className="about-paragraph">
            I care about getting the fundamentals right first, then layering on the
            motion and polish that make an interface feel alive.
          </p>

          <div className="skills-grid">
            {skills.map((skill) => (
              <div className="skill-card" key={skill.title}>
                <h3>{skill.title}</h3>
                <p>{skill.detail}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

export default AboutSection;
