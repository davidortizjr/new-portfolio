function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer className="site-footer p-gutter">
      <p>© {year} David Ortiz. Built with React, GSAP &amp; Tailwind.</p>
      <a href="#hero">Back to top ↑</a>
    </footer>
  );
}

export default Footer;
