
import { Link } from "react-router-dom";
import "./Footer.css";

const quickLinks = [
  { name: "Home", path: "/" },
  { name: "Supervisor Profile", path: "/supervisor" },
  { name: "Research Areas", path: "/research" },
  { name: "People", path: "/people" },
  { name: "Publications", path: "/publications" },
  { name: "Contact", path: "/contact" },
];

const socialLinks = [
  {
    name: "Google Scholar",
    url: "https://scholar.google.com/",
    mark: "G",
  },
  {
    name: "ORCID",
    url: "https://orcid.org/",
    mark: "iD",
  },
  {
    name: "ResearchGate",
    url: "https://www.researchgate.net/",
    mark: "RG",
  },
  {
    name: "LinkedIn",
    url: "https://www.linkedin.com/",
    mark: "in",
  },
];

function Footer() {
  return (
    <footer className="footer">
      {/* IIT (BHU) building background */}
      <div className="footer-building-bg" aria-hidden="true" />

      {/* Decorative background accents */}
      <div className="footer-decoration" aria-hidden="true" />

      <div className="footer-container">
        <div className="footer-main">

          {/* COLUMN 1: LAB IDENTITY */}
          <div className="footer-brand">
            <Link to="/" className="footer-brand-heading">
              <span className="footer-brand-mark" aria-hidden="true">
                <span>✳</span>
              </span>

              <span className="footer-brand-name">
                <strong>Nanotech Lab</strong>
                <small>IIT (BHU), Varanasi</small>
              </span>
            </Link>

            <div className="footer-brand-line" />

            <p className="footer-department">
              Department of Pharmaceutical Engineering
              and Technology, IIT (BHU), Varanasi
            </p>

            <p className="footer-description">
              Advancing pharmaceutical nanotechnology through
              research, innovation and scientific discovery.
            </p>
          </div>

          {/* COLUMN 2: QUICK LINKS */}
          <div className="footer-column">
            <h3 className="footer-column-title">Quick Links</h3>

            <ul className="footer-quick-links">
              {quickLinks.map((item) => (
                <li key={item.path}>
                  <Link to={item.path}>
                    <span aria-hidden="true">›</span>
                    {item.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* COLUMN 3: SOCIAL PROFILES */}
          <div className="footer-column">
            <h3 className="footer-column-title">Connect with Us</h3>

            <div className="footer-social">
              {socialLinks.map((item) => (
                <a
                  key={item.name}
                  href={item.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label={`Visit ${item.name}`}
                >
                  <span
                    className={`footer-social-mark footer-mark-${item.name
                      .toLowerCase()
                      .replace(/\s+/g, "")}`}
                    aria-hidden="true"
                  >
                    {item.mark}
                  </span>

                  <span>{item.name}</span>

                  <span className="footer-external" aria-hidden="true">
                    ↗
                  </span>
                </a>
              ))}
            </div>
          </div>

          {/* COLUMN 4: CONTACT */}
          <div className="footer-column footer-contact">
            <h3 className="footer-column-title">Contact the Lab</h3>

            <div className="footer-contact-item">
              <span className="footer-contact-icon" aria-hidden="true">
                ◉
              </span>

              <p>
                IIT (BHU), Varanasi
                <br />
                Uttar Pradesh, India
              </p>
            </div>

            <Link to="/contact" className="footer-contact-button">
              Contact the Lab
              <span aria-hidden="true">→</span>
            </Link>
          </div>

        </div>

        {/* COPYRIGHT BAR */}
        <div className="footer-bottom">
          <p>
            © {new Date().getFullYear()} Nanotech Lab, IIT (BHU),
            Varanasi. All rights reserved.
          </p>

          <div className="footer-legal">
            <Link to="/contact">Contact</Link>

            <a
              href="https://www.iitbhu.ac.in/"
              target="_blank"
              rel="noopener noreferrer"
            >
              IIT (BHU)
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
