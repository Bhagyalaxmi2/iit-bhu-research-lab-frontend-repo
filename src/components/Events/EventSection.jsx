import "./Event.css";
import EventCard from "./EventCard";

function EventSection() {

  const events = [

    {
      id: 1,
      title: "AI in Healthcare Workshop",
      date: "15 August 2026",
      venue: "Seminar Hall, IIT (BHU)",
      image: "https://images.unsplash.com/photo-1511578314322-379afb476865",
      description:
        "Hands-on workshop on Artificial Intelligence applications in healthcare and medical diagnostics.",
    },

    {
      id: 2,
      title: "International Research Conference",
      date: "22 September 2026",
      venue: "Main Auditorium",
      image: "https://images.unsplash.com/photo-1505373877841-8d25f7d46678",
      description:
        "International conference featuring researchers from leading universities and industries.",
    },

    {
      id: 3,
      title: "Drug Discovery Seminar",
      date: "5 October 2026",
      venue: "Research Block",
      image: "https://images.unsplash.com/photo-1581093458791-9f3c3900df4b",
      description:
        "Seminar covering computational drug discovery, molecular docking, and pharmaceutical research.",
    },

    {
      id: 4,
      title: "Innovation Hackathon",
      date: "20 November 2026",
      venue: "Innovation Centre",
      image: "https://images.unsplash.com/photo-1522202176988-66273c2fd55f",
      description:
        "24-hour hackathon encouraging students to solve real-world healthcare and technology challenges.",
    },

  ];

  return (

    <section className="events">

      <h1>Research Events</h1>

      <p className="event-subtitle">
        Explore workshops, conferences, seminars, hackathons, and research
        activities organized by our laboratory.
      </p>

      <div className="event-container">

        {events.map((event) => (

          <EventCard
            key={event.id}
            event={event}
          />

        ))}

      </div>

    </section>

  );
}

export default EventSection;