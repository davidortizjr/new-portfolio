import { useEffect, useRef } from 'react';
import gsap from 'gsap';

function NotFound() {
    const containerRef = useRef<HTMLDivElement>(null);
    const glitchRef = useRef<HTMLSpanElement>(null);

    useEffect(() => {
        const ctx = gsap.context(() => {
            gsap.fromTo(
                '.nf-reveal',
                { opacity: 0, y: 30 },
                {
                    opacity: 1,
                    y: 0,
                    duration: 0.8,
                    stagger: 0.12,
                    ease: 'power3.out',
                    delay: 0.2,
                }
            );

            gsap.to('.nf-big', {
                y: -12,
                duration: 3,
                ease: 'sine.inOut',
                yoyo: true,
                repeat: -1,
            });

            const glitch = () => {
                if (!glitchRef.current) return;
                const tl = gsap.timeline();
                tl.to(glitchRef.current, { skewX: 8, duration: 0.06, ease: 'none' })
                    .to(glitchRef.current, { skewX: -6, duration: 0.06, ease: 'none' })
                    .to(glitchRef.current, { skewX: 4, duration: 0.04, ease: 'none' })
                    .to(glitchRef.current, { skewX: 0, duration: 0.06, ease: 'none' });
            };

            const interval = setInterval(glitch, 4000);
            return () => clearInterval(interval);
        }, containerRef);

        return () => ctx.revert();
    }, []);

    return (
        <div className="nf-root" ref={containerRef}>
            <div className="nf-grid" aria-hidden="true" />

            <div className="nf-inner">
                <div className="nf-big nf-reveal" aria-hidden="true">
                    <span ref={glitchRef} className="nf-big-number">404</span>
                </div>

                <p className="nf-reveal section-tag flex items-center gap-2.5 pl-3 pr-4 py-1.5 rounded-xl bg-black text-12 text-white w-fit">
                    <span className="bg-green block size-2 rounded-full shrink-0" />
                    <span>Page not found</span>
                </p>

                <h1 className="nf-reveal nf-heading">
                    You've wandered somewhere that doesn't exist.
                </h1>

                <p className="nf-reveal nf-sub">
                    The page you're looking for was moved, deleted, or never existed in
                    the first place. Easy mistake.
                </p>

                <div className="nf-reveal nf-actions">
                    <a href="/" className="nf-btn-primary">
                        Go home
                    </a>
                    <a href="/#work" className="nf-btn-ghost">
                        See my work
                    </a>
                </div>
            </div>
        </div>
    );
}

export default NotFound;
