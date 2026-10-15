import { useState, useEffect } from "react";

function AboutForm({
  addCard,
  updateCard,
  editingCard,
  setShowForm,
}) {

  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");
  const [image, setImage] = useState("");

  useEffect(() => {
    if (editingCard) {
      setTitle(editingCard.title);
      setDescription(editingCard.description);
      setImage(editingCard.image);
    } else {
      setTitle("");
      setDescription("");
      setImage("");
    }
  }, [editingCard]);

  function handleSubmit(e) {
    e.preventDefault();

    if (!title || !description || !image) {
      alert("Please fill all fields");
      return;
    }

    if (editingCard) {
      updateCard({
        id: editingCard.id,
        title,
        description,
        image,
      });
    } else {
      addCard({
        id: Date.now(),
        title,
        description,
        image,
      });
    }

    setTitle("");
    setDescription("");
    setImage("");
  }

  return (
    <form className="about-form" onSubmit={handleSubmit}>

      <h2>
        {editingCard ? "Edit Research Card" : "Add Research Card"}
      </h2>

      <input
        type="text"
        placeholder="Research Title"
        value={title}
        onChange={(e) => setTitle(e.target.value)}
      />

      <textarea
        placeholder="Description"
        value={description}
        onChange={(e) => setDescription(e.target.value)}
      />

      <input
        type="text"
        placeholder="Image URL"
        value={image}
        onChange={(e) => setImage(e.target.value)}
      />

      <div className="buttons">

        <button type="submit">
          {editingCard ? "Update Card" : "Add Card"}
        </button>

        <button
          type="button"
          onClick={() => setShowForm(false)}
        >
          Cancel
        </button>

      </div>

    </form>
  );
}

export default AboutForm;