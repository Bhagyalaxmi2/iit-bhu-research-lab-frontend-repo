import React from "react";
import { useParams, Link } from "react-router-dom";
import peopleData from "./peopleData";
import "./Profile.css";

function Profile() {
  const { id } = useParams();

  const person = peopleData.find(
    (person) => person.id === Number(id)
  );

  // If person doesn't exist
  if (!person) {
    return (
      <div className="profile-not-found">
        <h2>Profile Not Found</h2>
        <Link to="/people">← Back to People</Link>
      </div>
    );
  }

  return (
    <div className="profile-page">

      {/* Back Button */}
      <Link to="/people" className="profile-back">
        ← Back to People
      </Link>

      {/* Profile Header */}
      <section className="profile-header">

        <div className="profile-image-box">
          <img
            src={person.image}
            alt={person.name}
          />
        </div>

        <div className="profile-basic">

          <h1>{person.name}</h1>

          <h3>{person.designation}</h3>

          {person.enrollment && (
            <p>
              <strong>Enrollment:</strong>{" "}
              {person.enrollment}
            </p>
          )}

          {person.email && (
            <p>
              <strong>Email:</strong>{" "}
              <a href={`mailto:${person.email}`}>
                {person.email}
              </a>
            </p>
          )}

        </div>

      </section>

      {/* Research Interests */}
      {person.researchInterests?.length > 0 && (
        <section className="profile-section">
          <h2>Research Interests</h2>

          <ul>
            {person.researchInterests.map(
              (interest, index) => (
                <li key={index}>{interest}</li>
              )
            )}
          </ul>
        </section>
      )}

      {/* Education */}
      {person.education?.length > 0 && (
        <section className="profile-section">
          <h2>Education</h2>

          {person.education.map(
            (item, index) => (
              <div
                className="education-item"
                key={index}
              >
                <h3>{item.degree}</h3>
                <p>{item.institute}</p>
                <span>{item.year}</span>
              </div>
            )
          )}
        </section>
      )}

      {/* Profile Links */}
      {person.profileLinks && (
        <section className="profile-section">

          <h2>Academic Links</h2>

          <div className="profile-links">

            {person.profileLinks.googleScholar && (
              <a
                href={person.profileLinks.googleScholar}
                target="_blank"
                rel="noreferrer"
              >
                Google Scholar
              </a>
            )}

            {person.profileLinks.orcid && (
              <a
                href={person.profileLinks.orcid}
                target="_blank"
                rel="noreferrer"
              >
                ORCID
              </a>
            )}

            {person.profileLinks.researchGate && (
              <a
                href={person.profileLinks.researchGate}
                target="_blank"
                rel="noreferrer"
              >
                ResearchGate
              </a>
            )}

          </div>

        </section>
      )}

    </div>
  );
}

export default Profile;