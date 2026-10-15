import React from "react";
import "./ResearchHero.css";

function ResearchHero() {
    return (
        <section className="research-hero">

            <div className="research-hero-content">

                <span className="research-label">
                    RESEARCH
                </span>

                <h1>
                    Advancing Drug Delivery
                    Through Innovation
                </h1>

                <p>
                    Our research integrates pharmaceutical sciences,
                    nanotechnology and advanced drug delivery to develop
                    effective therapeutic solutions for challenging
                    healthcare problems.
                </p>

            </div>


            <div className="research-hero-image">

                <img
                    src="/Research/IntrestedAreas.jpeg"
                    alt="Pharmaceutical research"
                />

            </div>

        </section>
    );
}

export default ResearchHero;