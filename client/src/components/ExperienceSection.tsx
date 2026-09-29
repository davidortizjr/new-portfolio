import { useEffect, useRef } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

const experiences = [
    {
        period: 'May 2025',
        role: 'Fullstack Web Developer',
        company: 'BoardBrew Amusement Place',
        type: 'Freelance',
        description:
            'Collaborated directly with the client to gather requirements, deliver a tailored responsive website, and implement modern UI and backend functionality using HTML, CSS, JavaScript, Bootstrap, PHP, and MySQL.',
    },
    {
        period: 'Feb 2026 — May 2026',
        role: 'Software Engineer Intern',
        company: 'MicroSource Inc.',
        type: 'Internship',
        description:
            'Investigated and resolved defects across the React/TypeScript, C#, and ASP.NET stack, built and maintained application features, refactored backend code for readability and maintainability, and supported the team through Azure DevOps for testing and deployment.',
    },
];

function ExperienceSection() {
    const sectionRef = useRef<HTMLElement>(null);

    useEffect(() => {
        const ctx = gsap.context(() => {
            gsap.fromTo(
                '.experience-heading, .timeline-item',
                { opacity: 0, y: 30 },
                {
                    opacity: 1,
                    y: 0,
                    duration: 0.8,
                    stagger: 0.12,
                    ease: 'power3.out',
                    scrollTrigger: {
                        trigger: sectionRef.current,
                        start: 'top 75%',
                    },
                }
            );
        }, sectionRef);

        return () => ctx.revert();
    }, []);

    return (
        <section id="experience" className="experience-section p-gutter" ref={sectionRef}>
            <div className="projects-heading flex items-end justify-between flex-wrap gap-4 mb-12">
                <div>
                    <p className="section-tag flex items-center justify-start gap-2.5 pl-3 pr-4 py-1.5 rounded-xl bg-grey text-12 text-white w-fit mb-6">
                        <span className="bg-green block size-2 rounded-full shrink-0"></span>
                        <span>Experience</span>
                    </p>
                    <h2 className="text-fluid-3xl text-white font-bold">Where I’ve worked.</h2>
                </div>
            </div>

            <div className="timeline" aria-label="Professional experience timeline">
                {experiences.map((experience) => (
                    <article key={`${experience.role}-${experience.period}`} className="timeline-item">
                        <div className="timeline-meta">
                            <span className="timeline-period">{experience.period}</span>
                            <span className="timeline-type">{experience.type}</span>
                        </div>

                        <div className="timeline-content">
                            <h3>{experience.role}</h3>
                            <p className="timeline-company">{experience.company}</p>
                            <p>{experience.description}</p>
                        </div>
                    </article>
                ))}
            </div>
        </section>
    );
}

export default ExperienceSection;
