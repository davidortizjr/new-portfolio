import { useEffect, useRef, useState } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

type Status = 'idle' | 'submitting' | 'success' | 'error';

function ContactSection() {
  const sectionRef = useRef<HTMLElement>(null);
  const feedbackRef = useRef<HTMLParagraphElement>(null);
  const buttonRef = useRef<HTMLButtonElement>(null);

  const [values, setValues] = useState({ name: '', email: '', message: '', company: '' });
  const [status, setStatus] = useState<Status>('idle');
  const [errorText, setErrorText] = useState('');

  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.fromTo(
        '.contact-reveal',
        { opacity: 0, y: 30 },
        {
          opacity: 1,
          y: 0,
          duration: 0.9,
          stagger: 0.12,
          ease: 'power3.out',
          scrollTrigger: {
            trigger: sectionRef.current,
            start: 'top 80%',
          },
        }
      );
    }, sectionRef);

    return () => ctx.revert();
  }, []);

  useEffect(() => {
    if (!feedbackRef.current) return;
    if (status === 'success' || status === 'error') {
      gsap.fromTo(
        feedbackRef.current,
        { opacity: 0, y: 8 },
        { opacity: 1, y: 0, duration: 0.4, ease: 'power2.out' }
      );
    }
  }, [status]);

  const handleChange = (
    event: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    const { name, value } = event.target;
    setValues((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = async (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();

    if (status === 'submitting') return;

    setStatus('submitting');
    setErrorText('');

    gsap.to(buttonRef.current, { scale: 0.97, duration: 0.15, yoyo: true, repeat: 1 });

    const apiBaseUrl = import.meta.env.VITE_API_URL?.replace(/\/$/, '') || '';

    try {
      const response = await fetch(`${apiBaseUrl}/api/contact`, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(values),
      });

      const data = await response.json().catch(() => ({}));

      if (!response.ok) {
        throw new Error(data.error || 'Something went wrong. Please try again.');
      }

      setStatus('success');
      setValues({ name: '', email: '', message: '', company: '' });
    } catch (err) {
      setStatus('error');
      setErrorText(err instanceof Error ? err.message : 'Something went wrong. Please try again.');
    }
  };

  return (
    <section id="contact" className="contact-section p-gutter" ref={sectionRef}>
      <p className="section-tag contact-reveal flex items-center justify-start gap-2.5 pl-3 pr-4 py-1.5 rounded-xl bg-grey text-12 text-white w-fit mb-6">
        <span className="bg-green block size-2 rounded-full shrink-0"></span>
        <span>Get in touch</span>
      </p>

      <h2 className="contact-reveal text-fluid-4xl text-white font-bold contact-heading">
        Let's build something worth using.
      </h2>

      <p className="contact-reveal hero-paragraph contact-subtext">
        Open for new projects. Send a message below, or email me directly.
      </p>

      <div className="contact-reveal contact-grid">
        <form className="contact-form" onSubmit={handleSubmit} noValidate>
          {/* Honeypot field — hidden from real visitors, bots tend to fill every input */}
          <input
            type="text"
            name="company"
            value={values.company}
            onChange={handleChange}
            className="contact-form-honeypot"
            tabIndex={-1}
            autoComplete="off"
            aria-hidden="true"
          />

          <div className="contact-field">
            <label htmlFor="name">Name</label>
            <input
              id="name"
              name="name"
              type="text"
              required
              value={values.name}
              onChange={handleChange}
              placeholder="Your name"
              autoComplete="name"
            />
          </div>

          <div className="contact-field">
            <label htmlFor="email">Email</label>
            <input
              id="email"
              name="email"
              type="email"
              required
              value={values.email}
              onChange={handleChange}
              placeholder="you@example.com"
              autoComplete="email"
            />
          </div>

          <div className="contact-field">
            <label htmlFor="message">Message</label>
            <textarea
              id="message"
              name="message"
              required
              rows={5}
              value={values.message}
              onChange={handleChange}
              placeholder="What are you looking to build?"
            />
          </div>

          <button
            type="submit"
            className="contact-submit"
            ref={buttonRef}
            disabled={status === 'submitting'}
          >
            {status === 'submitting' ? 'Sending…' : 'Send message'}
          </button>

          {(status === 'success' || status === 'error') && (
            <p
              ref={feedbackRef}
              className={`contact-feedback ${status === 'success' ? 'is-success' : 'is-error'}`}
              role="status"
            >
              {status === 'success'
                ? "Thanks — I'll get back to you soon."
                : errorText}
            </p>
          )}
        </form>

        <div className="contact-links-row">
          <a href="mailto:davidgortizjr@gmail.com" className="contact-email-link">
            davidgortizjr@gmail.com
          </a>

          <div className="contact-social-row">
            <a href="https://github.com/davidortizjr" target="_blank" rel="noopener noreferrer">
              GitHub
            </a>
            <a
              href="https://www.linkedin.com/in/david-ortiz-446012374/"
              target="_blank"
              rel="noopener noreferrer"
            >
              LinkedIn
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}

export default ContactSection;
