import "./OurLaboratory.css";

function OurLaboratory() {
  return (
    <section className="our-laboratory">

      {/* Section Heading */}
      <div className="laboratory-heading">
        <span className="laboratory-label">
          OUR LABORATORY
        </span>

        <h2>
          Research, Collaboration & Laboratory Life
        </h2>

        <p>
          A glimpse into the people, research activities, and
          collaborative environment of our laboratory.
        </p>
      </div>


      {/* Gallery */}
      <div className="laboratory-gallery">

        {/* Featured Image */}
        <div className="gallery-feature">
          <img
            src="../Team/team1.jpeg"
            alt="Pharmaceutical Nanotechnology Research Laboratory team"
          />
        </div>


        {/* Smaller Images */}
        <div className="gallery-small">

          <div className="gallery-item">
            <img
              src="../Team/team4.jpeg"
              alt="Laboratory team"
            />
          </div>

          <div className="gallery-item">
            <img
              src="../Team/team3.jpeg"
              alt="Laboratory activities"
            />
          </div>

          <div className="gallery-item">
            <img
              src="../Team/team2.jpeg"
              alt="Research laboratory"
            />
          </div>

        </div>

      </div>

    </section>
  );
}

export default OurLaboratory;