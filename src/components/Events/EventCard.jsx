function EventCard({ event }) {

  return (

    <div className="event-card">

      <img
        src={event.image}
        alt={event.title}
      />

      <h3>{event.title}</h3>

      <p>
        <strong>Date:</strong> {event.date}
      </p>

      <p>
        <strong>Venue:</strong> {event.venue}
      </p>

      <p>{event.description}</p>

      <button>Register Now</button>

    </div>

  );
}

export default EventCard;