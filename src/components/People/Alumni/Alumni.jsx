import "../People.css";
import PersonCard from "../PersonCard/PersonCard";

function Alumni({ people }) {
  return (
    <section className="people-section">

      <div className="section-heading">

        <h2>Alumni</h2>

        <p>
          Our alumni continue to make significant contributions in
          academia, research organizations, healthcare industries,
          and pharmaceutical companies across India and around the world.
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

export default Alumni;