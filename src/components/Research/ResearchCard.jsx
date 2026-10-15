import React from "react";
import "./ResearchCard.css";

function ResearchCard({ research, onEdit, onDelete }) {

    return (
        <article className="research-card">

            {/* ==========================================
                IMAGE
            ========================================== */}

            <div className="research-card-image-wrapper">

                {research.image ? (

                    <img
                        src={research.image}
                        alt={research.title}
                        className="research-card-image"
                    />

                ) : (

                    <div className="research-no-image">
                        Research
                    </div>

                )}

            </div>


            {/* ==========================================
                CONTENT
            ========================================== */}

            <div className="research-card-content">


                {/* RESEARCH AREA */}

                <span className="research-tag">
                    {research.researchArea}
                </span>


                {/* TITLE */}

                <h3>
                    {research.title}
                </h3>


                {/* DESCRIPTION */}

                <p className="research-description">
                    {research.description}
                </p>


                {/* STATUS */}

                {research.status && (

                    <span className="research-status">
                        {research.status}
                    </span>

                )}


                {/* ======================================
                    ADMIN ACTIONS
                ====================================== */}

                <div className="research-card-actions">

                    <button
                        type="button"
                        className="edit-btn"
                        onClick={() => onEdit(research)}
                    >
                        ✏ Edit
                    </button>


                    <button
                        type="button"
                        className="delete-btn"
                        onClick={() => onDelete(research._id)}
                    >
                        🗑 Delete
                    </button>

                </div>

            </div>

        </article>
    );
}

export default ResearchCard;