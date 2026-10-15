import AdminOnly from "../AdminOnly";
import { useEffect, useState } from "react";

import ResearchCard from "./ResearchCard";

import {
  getResearch,
  addResearch,
  updateResearch,
  deleteResearch,
} from "../../services/researchApi";

import "./ResearchSec.css";

function ResearchSec() {
  // ==========================================
  // RESEARCH DATA
  // ==========================================

  const [researchData, setResearchData] = useState([]);
  const [loading, setLoading] = useState(true);

  // ==========================================
  // EDIT / ADD FORM
  // ==========================================

  const [showEditForm, setShowEditForm] = useState(false);
  const [editingId, setEditingId] = useState(null);
  const [isAdding, setIsAdding] = useState(false);

  const [formData, setFormData] = useState({
    title: "",
    description: "",
    researchArea: "",
    image: "",
    status: "Active",
  });

  // ==========================================
  // GET RESEARCH FROM MONGODB
  // ==========================================

  const fetchResearch = async () => {
    try {
      const data = await getResearch();

      setResearchData(data);
    } catch (error) {
      console.error("Error fetching research:", error);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchResearch();
  }, []);

  // ==========================================
  // HANDLE FORM INPUT
  // ==========================================

  const handleChange = (event) => {
    const { name, value } = event.target;

    setFormData((previous) => ({
      ...previous,
      [name]: value,
    }));
  };

  // ==========================================
  // EDIT BUTTON
  // ==========================================

  const handleEdit = (research) => {
    setIsAdding(false);

    // Put selected research into form
    setFormData({
      title: research.title || "",
      description: research.description || "",
      researchArea: research.researchArea || "",
      image: research.image || "",
      status: research.status || "Active",
    });

    // Store MongoDB ID
    setEditingId(research._id);

    // Open form
    setShowEditForm(true);

    // Scroll to form
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  // ==========================================
  // UPDATE RESEARCH
  // ==========================================

  const handleUpdate = async (event) => {
    event.preventDefault();

    if (!formData.title.trim()) {
      alert("Please enter a research title.");
      return;
    }

    if (!formData.description.trim()) {
      alert("Please enter a description.");
      return;
    }

    try {
      // Update MongoDB
      const updatedResearch = await updateResearch(editingId, formData);

      // Update UI immediately
      setResearchData((previous) =>
        previous.map((item) =>
          item._id === editingId ? updatedResearch : item
        )
      );

      // Close form after successful update
      setShowEditForm(false);
      setEditingId(null);
      setIsAdding(false);

      // Reset form
      setFormData({
        title: "",
        description: "",
        researchArea: "",
        image: "",
        status: "Active",
      });

      alert("Research updated successfully!");
    } catch (error) {
      console.error("Error updating research:", error);

      alert("Failed to update research. Please try again.");
    }
  };

  // ==========================================
  // ADD NEW RESEARCH
  // ==========================================

  const handleAdd = async (event) => {
    event.preventDefault();

    if (!formData.title.trim()) {
      alert("Please enter a research title.");
      return;
    }

    if (!formData.description.trim()) {
      alert("Please enter a description.");
      return;
    }

    if (!formData.researchArea.trim()) {
      alert("Please enter a research area.");
      return;
    }

    try {
      // Save directly to MongoDB
      const newResearch = await addResearch(formData);

      // Add newly created record to UI
      setResearchData((previous) => [...previous, newResearch]);

      // Close form after successful add
      setShowEditForm(false);
      setIsAdding(false);
      setEditingId(null);

      // Reset form
      setFormData({
        title: "",
        description: "",
        researchArea: "",
        image: "",
        status: "Active",
      });

      alert("Research added successfully!");
    } catch (error) {
      console.error(
        "Error adding research:",
        error.response?.data || error
      );

      alert(
        error.response?.data?.message ||
          "Failed to add research. Please try again."
      );
    }
  };

  // ==========================================
  // DELETE RESEARCH
  // ==========================================

  const handleDelete = async (id) => {
    const confirmDelete = window.confirm(
      "Are you sure you want to delete this research area?"
    );

    if (!confirmDelete) return;

    try {
      console.log("Deleting ID:", id);

      await deleteResearch(id);

      setResearchData((previous) =>
        previous.filter((item) => item._id !== id)
      );

      alert("Research deleted successfully!");
    } catch (error) {
      console.error(
        "Delete error:",
        error.response?.data || error
      );

      alert(
        error.response?.data?.message ||
          "Failed to delete research. Please try again."
      );
    }
  };

  // ==========================================
  // CANCEL EDIT / ADD
  // ==========================================

  const handleCancelEdit = () => {
    setShowEditForm(false);
    setEditingId(null);
    setIsAdding(false);

    setFormData({
      title: "",
      description: "",
      researchArea: "",
      image: "",
      status: "Active",
    });
  };

  // ==========================================
  // LOADING
  // ==========================================

  if (loading) {
    return (
      <section className="research-section">
        <p className="research-loading">
          Loading research areas...
        </p>
      </section>
    );
  }

  // ==========================================
  // PAGE
  // ==========================================

  return (
    <section className="research-section">

      {/* =====================================
          SECTION HEADING
      ===================================== */}

      <div className="core-research-header">
        <span className="core-research-label">
          OUR AREA OF INTEREST
        </span>

        <h2>Core Research Areas</h2>

        <p>
          Explore the laboratory's major research directions and the
          technologies being developed to improve therapeutic delivery and
          biomedical outcomes.
        </p>
      </div>

      {/* =====================================
          EDIT / ADD FORM
          ONLY SHOW WHEN BUTTON IS CLICKED
      ===================================== */}

      <AdminOnly>
      {showEditForm && (
        <div className="research-edit-form">

          {/* Header */}
          <div className="research-form-header">

            <div>
              <span className="research-form-label">
                RESEARCH MANAGEMENT
              </span>

              <h3>
                {isAdding
                  ? "Add Research Area"
                  : "Edit Research Area"}
              </h3>

              <p>
                {isAdding
                  ? "Add a new research area to the laboratory."
                  : "Update the details of this research area."}
              </p>
            </div>

            <button
              type="button"
              className="research-form-close"
              onClick={handleCancelEdit}
            >
              ×
            </button>

          </div>

          {/* Form */}
          <form
            onSubmit={isAdding ? handleAdd : handleUpdate}
            className="research-form"
          >

            <div className="research-form-grid">

              {/* Research Title */}
              <div className="research-form-group">
                <label>Research Title</label>

                <input
                  type="text"
                  name="title"
                  value={formData.title}
                  onChange={handleChange}
                  placeholder="e.g. Nanoparticle-Based Drug Delivery"
                  required
                />
              </div>

              {/* Research Area */}
              <div className="research-form-group">
                <label>Research Area</label>

                <input
                  type="text"
                  name="researchArea"
                  value={formData.researchArea}
                  onChange={handleChange}
                  placeholder="e.g. Pharmaceutical Nanotechnology"
                  required
                />
              </div>

              {/* Image Path */}
              <div className="research-form-group">
                <label>Image Path</label>

                <input
                  type="text"
                  name="image"
                  value={formData.image}
                  onChange={handleChange}
                  placeholder="/Research/example.jpg"
                />
              </div>

              {/* Status */}
              <div className="research-form-group">
                <label>Status</label>

                <select
                  name="status"
                  value={formData.status}
                  onChange={handleChange}
                >
                  <option value="Active">Active</option>
                  <option value="Completed">Completed</option>
                  <option value="Upcoming">Upcoming</option>
                </select>
              </div>

              {/* Description */}
              <div className="research-form-group research-form-full">
                <label>Description</label>

                <textarea
                  name="description"
                  value={formData.description}
                  onChange={handleChange}
                  placeholder="Describe the research area, objectives and applications..."
                  rows="5"
                  required
                />
              </div>

            </div>

            {/* Buttons */}
            <div className="research-form-actions">

              <button
                type="submit"
                className="research-save-btn"
              >
                {isAdding
                  ? "+ Add Research"
                  : "Save Changes"}
              </button>

              <button
                type="button"
                className="research-cancel-btn"
                onClick={handleCancelEdit}
              >
                Cancel
              </button>

            </div>

          </form>
        </div>
      )}

      {/* =====================================
          ADD RESEARCH BUTTON
      ===================================== */}

      <div className="research-add-container">

        <button
          type="button"
          className="research-add-btn"
          onClick={() => {

            setIsAdding(true);
            setEditingId(null);

            setFormData({
              title: "",
              description: "",
              researchArea: "",
              image: "",
              status: "Active",
            });

            setShowEditForm(true);

            window.scrollTo({
              top: 0,
              behavior: "smooth",
            });

          }}
        >
          + Add Research
        </button>

      </div>

      {/* =====================================
          RESEARCH CARDS
      ===================================== */}

      </AdminOnly>
      <div className="research-container">

        {researchData.map((research) => (
          <ResearchCard
            key={research._id}
            research={research}
            onEdit={handleEdit}
            onDelete={handleDelete}
          />
        ))}

      </div>

    </section>
  );
}

export default ResearchSec;