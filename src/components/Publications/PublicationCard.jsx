import AdminOnly from "../AdminOnly";
import React from "react";
import "./PublicationCard.css";

function PublicationCard({
  publication,
  onEdit,
  onDelete,
}) {
  // =====================================================
  // SAFETY CHECK
  // Prevents:
  // Cannot read properties of undefined
  // =====================================================

  if (!publication) {
    return null;
  }

  // =====================================================
  // OPEN PAPER
  // =====================================================

  const handleReadPaper = () => {
    if (publication.link) {
      window.open(
        publication.link,
        "_blank",
        "noopener,noreferrer"
      );
    } else if (publication.doi) {
      window.open(
        `https://doi.org/${publication.doi}`,
        "_blank",
        "noopener,noreferrer"
      );
    } else {
      alert("Research paper link is not available yet.");
    }
  };

  return (
    <article className="publication-card">

      {/* =================================================
          CARD HEADER
      ================================================= */}

      <div className="publication-card-header">

        <span
          className={`publication-status ${
            publication.status === "Accepted"
              ? "status-accepted"
              : "status-published"
          }`}
        >
          {publication.status}
        </span>

        <span className="publication-year">
          {publication.year}
        </span>

      </div>


      {/* =================================================
          TITLE
      ================================================= */}

      <h2 className="publication-title">
        {publication.title}
      </h2>


      {/* =================================================
          AUTHORS
      ================================================= */}

      <div className="publication-field">

        <strong>Authors</strong>

        <p>
          {publication.authors || "Authors not available"}
        </p>

      </div>


      {/* =================================================
          JOURNAL
      ================================================= */}

      <div className="publication-field">

        <strong>Journal</strong>

        <p>
          {publication.journal || "Journal not available"}
        </p>

      </div>


      {/* =================================================
          DETAILS
      ================================================= */}

      {publication.details && (
        <div className="publication-field">

          <strong>Publication Details</strong>

          <p>
            {publication.details}
          </p>

        </div>
      )}


      {/* =================================================
          CATEGORY + IMPACT FACTOR
      ================================================= */}

      <div className="publication-meta">

        {publication.category && (
          <span className="publication-category">
            {publication.category}
          </span>
        )}

        {publication.impactFactor && (
          <span className="publication-if">
            I.F. {publication.impactFactor}
          </span>
        )}

      </div>


      {/* =================================================
          BUTTONS
      ================================================= */}

      <div className="publication-actions">

        <button
          type="button"
          className="btn-read"
          onClick={handleReadPaper}
          
        >
          Read Paper ↗
        </button>

        <AdminOnly><button
          type="button"
          className="btn-edit"
          onClick={() => onEdit(publication)}
        >
          Edit
        </button>

        <button
          type="button"
          className="btn-delete"
          onClick={() => onDelete(publication.id)}
        >
          Delete
        </button></AdminOnly>

      </div>

    </article>
  );
}

export default PublicationCard;