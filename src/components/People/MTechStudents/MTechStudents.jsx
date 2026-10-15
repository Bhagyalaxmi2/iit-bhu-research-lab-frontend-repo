import { useEffect, useState } from "react";
import PersonCard from "../PersonCard/PersonCard";
import "../People.css";



function MTechStudents({ people }) {
  return (
    <section className="people-section">

      <div className="section-heading">

        <h2>M.Tech Students</h2>

        <p>
          Our M.Tech students work on interdisciplinary research
          projects involving pharmaceutical sciences, nanotechnology,
          drug delivery, and advanced healthcare technologies.
        </p>

      </div>

      <div className="people-grid">

        {people.map((person, index) => (
          <PersonCard
            key={person._id}
            person={person}
          />
        ))}

      </div>

    </section>
  );
}

export default MTechStudents;