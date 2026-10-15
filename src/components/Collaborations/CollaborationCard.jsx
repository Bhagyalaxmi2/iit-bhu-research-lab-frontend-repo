function CollaborationCard({ partner }) {

  return (

    <div className="collaboration-card">

      <img
        src={partner.image}
        alt={partner.title}
      />

      <h3>{partner.title}</h3>

      <span className="partner-type">
        {partner.type}
      </span>

      <p>{partner.description}</p>

      <button>
        View Collaboration
      </button>

    </div>

  );

}

export default CollaborationCard;