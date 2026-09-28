import { useEffect, useRef } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import {
  Atom,
  Braces,
  CloudCog,
  Code2,
  Container,
  Database,
  GitBranch,
  Globe2,
  Hash,
  PanelsTopLeft,
  Palette,
  Radio,
  Route,
  Send,
  Server,
  Wind,
} from 'lucide-react';

gsap.registerPlugin(ScrollTrigger);

const skills = [
  {
    title: 'Frontend',
    tools: [
      { title: 'React', icon: Atom },
      { title: 'TypeScript', icon: Code2 },
      { title: 'Responsive UI', icon: PanelsTopLeft },
      { title: 'Tailwind CSS', icon: Wind },
    ],
  },
  {
    title: 'Backend & Data',
    tools: [
      { title: 'PHP', icon: Code2 },
      { title: 'C#', icon: Hash },
      { title: 'ASP.NET', icon: Globe2 },
      { title: 'Node.js', icon: Server },
      { title: 'Express', icon: Braces },
      { title: 'MSSQL', icon: Database },
      { title: 'MySQL', icon: Database },
      { title: 'PostgreSQL', icon: Database },
      { title: 'Redis', icon: Database },
    ],
  },
  {
    title: 'API',
    tools: [
      { title: 'REST APIs', icon: Route },
      { title: 'WebSocket', icon: Radio },
    ],
  },
  {
    title: 'Tools',
    tools: [
      { title: 'Vite', icon: Wind },
      { title: 'GitHub', icon: GitBranch },
      { title: 'Azure DevOps', icon: CloudCog },
      { title: 'Figma', icon: Palette },
      { title: 'Postman', icon: Send },
      { title: 'VS Code', icon: Code2 },
      { title: 'Docker', icon: Container },
      { title: 'Git', icon: GitBranch },
    ],
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
        <div className="about-intro">
          <h2 className="about-heading text-fluid-3xl text-white font-bold mb-12">
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
          </div>
        </div>

        <div className="skills-grid">
          {skills.map((skill) => (
            <div className="skill-card" key={skill.title}>
              <h3>{skill.title}</h3>
              <div className="tools-grid" aria-label={`${skill.title} skills`}>
                {skill.tools.map(({ title, icon: Icon }) => (
                  <span className="tool-item" key={title} tabIndex={0} aria-label={title}>
                    <span className="tool-icon">
                      <Icon size={20} strokeWidth={1.75} aria-hidden="true" />
                    </span>
                    <span className="tool-label">{title}</span>
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default AboutSection;
