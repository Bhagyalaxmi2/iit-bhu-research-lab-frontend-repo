import "./CollaborationCTA.css";

function CollaborationCTA() {
  return (
    <section className="collaboration-section">
      {/* ================================
          HEADER
      ================================= */}

      <div className="collaboration-header">
        <span className="collaboration-label">COLLABORATION & RESEARCH</span>

        <div className="collaboration-intro">
          <h2>Collaborate With Our Laboratory</h2>
          <p>
            We welcome academic, scientific and industry collaborations in
            pharmaceutical nanotechnology, advanced drug delivery, nanomedicine
            and related interdisciplinary research areas.
          </p>
      
        </div>
        
      </div>

      {/* ================================
          COLLABORATION CARDS
      ================================= */}

      <div className="collaboration-grid">
        {/* CARD 01 */}

        <div className="collaboration-card">
          <span className="card-number">01</span>

          <h3>Academic Collaboration</h3>

          <p>
            Collaborative research projects, joint publications, student
            research and interdisciplinary scientific initiatives.
          </p>
        </div>

        {/* CARD 02 */}

        <div className="collaboration-card">
          <span className="card-number">02</span>

          <h3>Research Partnerships</h3>

          <p>
            Opportunities to work together on emerging challenges in drug
            delivery, nanotechnology and pharmaceutical sciences.
          </p>
        </div>

        {/* CARD 03 */}

        <div className="collaboration-card">
          <span className="card-number">03</span>

          <h3>Industry Engagement</h3>

          <p>
            Translational research and technology-focused partnerships
            connecting laboratory research with real-world healthcare
            applications.
          </p>
        </div>
      </div>

      {/* ================================
          ACTION BUTTONS
      ================================= */}

      <div className="collaboration-actions">
        <a href="/contact" className="collaboration-primary">
          Contact the Laboratory
          <span>→</span>
        </a>

        <a href="/research" className="collaboration-secondary">
          Explore Our Research
        </a>
      </div>
    </section>
  );
}

export default CollaborationCTA;
