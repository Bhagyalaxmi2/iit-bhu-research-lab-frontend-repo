import AdminOnly from "../components/AdminOnly";
import { useState } from "react";
import "./About.css";
import AboutCard from "../components/About/AboutCard";
import AboutForm from "../components/About/AboutForm";
// import { useEffect, useState } from "react";
// import { getAboutCards } from "../services/aboutApi";

function About() {
  const [cards, setCards] = useState([
    {
      id: 1,
      title: "AI Drug Discovery",
      description: "Research using AI for medicine.",
      image: "https://picsum.photos/300?1",
    },
    {
      id: 2,
      title: "Nanotechnology",
      description: "Targeted drug delivery research.",
      image: "https://picsum.photos/300?2",
    },
    {
      id: 3,
      title: "Nanotechnology",
      description: "Targeted drug delivery research.",
      image: "https://picsum.photos/300?3",
    },
    {
      id: 4,
      title: "Nanotechnology",
      description: "Targeted drug delivery research.",
      image: "https://picsum.photos/300?4",
    },
  ]);

  const [showForm, setShowForm] = useState(false);
  const [editingCard, setEditingCard] = useState(null);

  // Add new card
  const addCard = (newCard) => {
    setCards((prev) => [...prev, newCard]);
    setShowForm(false);
  };

  // Delete card
  const deleteCard = (id) => {
    setCards((prev) => prev.filter((card) => card.id !== id));
  };

  // Open form for editing
  const editCard = (card) => {
    setEditingCard(card);
    setShowForm(true);
  };

  // Save edited card
  const updateCard = (updatedCard) => {
    setCards((prev) =>
      prev.map((card) =>
        card.id === updatedCard.id ? updatedCard : card
      )
    );

    setEditingCard(null);
    setShowForm(false);
  };

  return (
    <section className="about">

      <h1>About Our Research Lab</h1>

      <h4>Our laboratory focuses on advanced research
in Artificial Intelligence, Drug Discovery,
Machine Learning and Biotechnology.</h4>

      <AdminOnly><button
        className="add-btn"
        onClick={() => {
          setEditingCard(null);
          setShowForm(true);
        }}
      >
        + Add Research
      </button>

      {showForm && (
        <AboutForm
          addCard={addCard}
          updateCard={updateCard}
          editingCard={editingCard}
          setShowForm={setShowForm}
        />
      )}

      </AdminOnly><div className="cards">
        {cards.map((card) => (
          <AboutCard
            key={card.id}
            card={card}
            deleteCard={deleteCard}
            editCard={editCard}
          />
        ))}
      </div>

    </section>
  );
}

export default About;



