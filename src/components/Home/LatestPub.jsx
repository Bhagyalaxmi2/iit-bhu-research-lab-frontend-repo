import "./LatestPub.css";

function LatestPub() {

  // =====================================================
  // FEATURED / LATEST PUBLICATIONS
  // =====================================================

  const publications = [
    {
      id: 1,
      year: "2025",
      type: "Research Article",

      title:
        "Advanced Nanotechnology-Based Approaches for Targeted Drug Delivery",

      journal:
        "Pharmaceutical Nanotechnology",

      description:
        "Research highlighting innovative formulation and nanocarrier strategies for improving therapeutic delivery.",

      link: "#",
    },

    {
      id: 2,
      year: "2025",
      type: "Research Article",

      title:
        "Bacteriophage-Based Strategies for Addressing Antimicrobial Resistance",

      journal:
        "International Journal of Pharmaceutics",

      description:
        "Investigation of delivery approaches for bacteriophages and their potential application against difficult-to-treat bacterial infections.",

      link: "#",
    },

    {
      id: 3,
      year: "2024",
      type: "Research Article",

      title:
        "Exosome-Mediated Drug Delivery for Advanced Therapeutic Applications",

      journal:
        "Journal of Drug Delivery Science and Technology",

      description:
        "Exploration of naturally derived exosomes as promising platforms for therapeutic delivery and biomedical applications.",

      link: "#",
    },
  ];


  return (
    <section className="latest-publications">

      {/* =================================================
          HEADER
      ================================================= */}

      <div className="publications-header">

        <span className="publications-label">
          LATEST PUBLICATIONS
        </span>

        <h2>
          Recent Research Contributions
        </h2>

        <p>
          Selected research contributions from the laboratory
          reflecting our ongoing work in pharmaceutical
          nanotechnology, drug delivery and therapeutic
          development.
        </p>

      </div>


      {/* =================================================
          PUBLICATION LIST
      ================================================= */}

      <div className="publication-list">

        {publications.map((publication) => (

          <article
            className="publication-item"
            key={publication.id}
          >

            {/* =========================================
                YEAR
            ========================================= */}

            <div className="publication-year">
              {publication.year}
            </div>


            {/* =========================================
                CONTENT
            ========================================= */}

            <div className="publication-content">

              <span className="publication-type">
                {publication.type}
              </span>

              <h3>
                {publication.title}
              </h3>

              <p className="publication-journal">
                {publication.journal}
              </p>

              <p className="publication-description">
                {publication.description}
              </p>

            </div>


            {/* =========================================
                LINK
            ========================================= */}

            <a
              href={publication.link}
              className="publication-link"
            >
              View
              <span>→</span>
            </a>

          </article>

        ))}

      </div>


      {/* =================================================
          ALL PUBLICATIONS BUTTON
      ================================================= */}

      <div className="publications-footer">

        <a
          href="/publications"
          className="all-publications-button"
        >
          View All Publications
          <span>→</span>
        </a>

      </div>

    </section>
  );
}

export default LatestPub;