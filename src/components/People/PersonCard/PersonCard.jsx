import { Link } from "react-router-dom";

function PersonCard({ person }) {
  return (
    <div className="person-card">

      {/* =================================================
          PHOTO
      ================================================= */}

      <div className="profile-image">

        {person.image ? (
          <img
            src={person.image}
            alt={person.name}
          />
        ) : (
          <div className="no-image">
            No Photo
          </div>
        )}

      </div>


      {/* =================================================
          INFORMATION
      ================================================= */}

      <div className="card-body">

        <h3>{person.name}</h3>

        <p className="designation">
          {person.designation}
        </p>


        <div className="info">

          {person.position && (
            <p>
              <span>
                {person.position}
              </span>
            </p>
          )}

          {person.enrollment && (
            <p>
              Enrollment: {person.enrollment}
            </p>
          )}

        </div>


        {/* =================================================
            VIEW PROFILE
        ================================================= */}

        <Link
          to={`/people/${person._id}`}
          className="profile-btn"
        >
          View Profile →
        </Link>

      </div>

    </div>
  );
}

export default PersonCard;