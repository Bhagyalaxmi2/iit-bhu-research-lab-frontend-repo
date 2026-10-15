import "./PrincipalInvestigator.css";
import { Link } from "react-router-dom";

function PrincipalInvestigator() {
  return (
    <section className="pi-section">
      {/* =================================================
          SECTION HEADER
      ================================================= */}

      <div className="pi-heading">
        <span className="pi-label">PRINCIPAL INVESTIGATOR</span>

        <h2>Leading Research in Pharmaceutical Nanotechnology</h2>
      </div>

      {/* =================================================
          PROFILE
      ================================================= */}

      <div className="pi-container">
        {/* =============================================
            PHOTO
        ============================================= */}

        <div className="pi-image">
          <img
            src="/Labmembers/Supervisor.png"
            alt="Dr. Ashish Kumar Agrawal"
          />
        </div>

        {/* =============================================
            INFORMATION
        ============================================= */}

        <div className="pi-content">
          <span className="pi-designation">Associate Professor</span>

          <h3>Dr. Ashish Kumar Agrawal</h3>

          <p className="pi-institution">
            Indian Institute of Technology (BHU), Varanasi
          </p>

          {/* =========================================
              RESEARCH AREAS
          ========================================= */}

          <div className="pi-research-tags">
            <span>Pharmaceutical Nanotechnology</span>

            <span>Drug Delivery</span>

            <span>Nanomedicine</span>
          </div>

          {/* =========================================
              INTRODUCTION
          ========================================= */}

          <p className="pi-description">
            Dr. Ashish Kumar Agrawal leads research in pharmaceutical
            nanotechnology and advanced drug delivery, with a focus on
            developing innovative therapeutic systems for challenging healthcare
            problems.
          </p>

          <p className="pi-description">
            His research encompasses targeted and controlled drug delivery,
            antimicrobial strategies, bacteriophage delivery, protein and
            peptide delivery, and biologically inspired platforms such as
            exosomes.
          </p>

          {/* =========================================
              PROFILE BUTTON
          ========================================= */}

          <a href="../Labmembers/Supervisor.pnj" className="pi-profile-btn">
            <Link to="/supervisor" className="pi-profile-btn">
              View Faculty Profile
              <span>→</span>
            </Link>
          </a>
        </div>
      </div>
    </section>
  );
}

export default PrincipalInvestigator;
