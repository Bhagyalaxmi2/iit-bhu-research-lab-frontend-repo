import "./ResearchFocus.css";

function ResearchFocus() {

  // =====================================================
  // RESEARCH AREAS
  // These are summarized versions of the detailed
  // research areas already present on the Research page.
  // =====================================================

  const researchAreas = [
    {
      number: "01",

      title:
        "Targeted & Controlled Drug Delivery",

      description:
        "Development of nanotechnology-based systems for targeted and controlled delivery of therapeutic agents.",

      focus:
        "Nanocarriers • Targeted therapy • Controlled release",
    },


    {
      number: "02",

      title:
        "Antimicrobial Resistance",

      description:
        "Development of formulation and delivery strategies to improve antimicrobial therapy and address resistant infections.",

      focus:
        "AMR • Biofilms • Antimicrobial delivery",
    },


    {
      number: "03",

      title:
        "Bacteriophage Delivery",

      description:
        "Investigation of advanced delivery systems for bacteriophages as alternative approaches against difficult-to-treat bacterial infections.",

      focus:
        "Phage therapy • Biofilms • Alternative antimicrobials",
    },


    {
      number: "04",

      title:
        "Protein & Peptide Delivery",

      description:
        "Development of delivery strategies to improve the stability, absorption and therapeutic performance of proteins and peptides.",

      focus:
        "Protein delivery • Peptide therapeutics • Biopharmaceuticals",
    },


    {
      number: "05",

      title:
        "Exosome-Based Drug Delivery",

      description:
        "Exploration of naturally derived exosomes as promising vehicles for therapeutic delivery and cancer-related applications.",

      focus:
        "Exosomes • Cancer therapy • Drug loading",
    },
  ];


  return (

    <section className="research-focus-section">

      {/* =================================================
          HEADER
      ================================================= */}

      <div className="research-focus-header">

        <span className="research-focus-label">
          RESEARCH FOCUS
        </span>

        <h2>
          Areas Driving Our Scientific Research
        </h2>

        <p>
          Our research brings together pharmaceutical
          nanotechnology, formulation science and advanced
          drug delivery approaches to address challenging
          healthcare problems.
        </p>

      </div>


      {/* =================================================
          RESEARCH LIST
      ================================================= */}

      <div className="research-focus-list">

        {researchAreas.map((area) => (

          <article
            className="research-focus-item"
            key={area.number}
          >

            {/* NUMBER */}

            <div className="research-focus-number">
              {area.number}
            </div>


            {/* CONTENT */}

            <div className="research-focus-content">

              <h3>
                {area.title}
              </h3>

              <p>
                {area.description}
              </p>

              <span className="research-focus-keywords">
                {area.focus}
              </span>

            </div>


            {/* LINK */}

            <a
              href="/research"
              className="research-focus-link"
            >
              Explore
              <span>→</span>
            </a>

          </article>

        ))}

      </div>


      {/* =================================================
          VIEW ALL RESEARCH
      ================================================= */}

      <div className="research-focus-footer">

        <a
          href="/research"
          className="research-focus-button"
        >
          Explore All Research
          <span>→</span>
        </a>

      </div>

    </section>

  );
}

export default ResearchFocus;