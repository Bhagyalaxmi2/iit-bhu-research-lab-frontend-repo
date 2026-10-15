import "../People.css";
import PersonCard from "../PersonCard/PersonCard";

function PhDScholars({ people }) {
  return (
    <section className="people-section">

      <div className="section-heading">

        <h2>PhD Scholars</h2>

        <p>
          Our doctoral scholars are actively engaged in innovative
          research in pharmaceutical nanotechnology, drug delivery,
          biomaterials, and advanced therapeutic systems.
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

export default PhDScholars;