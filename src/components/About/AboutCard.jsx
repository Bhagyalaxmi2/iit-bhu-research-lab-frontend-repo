function AboutCard({ card, deleteCard, editCard }) {
  return (
    <div className="card">

      <img src={card.image} alt={card.title} />

      <h3>{card.title}</h3>

      <p>{card.description}</p>

      <div className="buttons">

        <button onClick={() => editCard(card)}>
          Edit
        </button>

        <button onClick={() => deleteCard(card.id)}>
          Delete
        </button>

      </div>

    </div>
  );
}

export default AboutCard;