import AdminOnly from "../AdminOnly";
import React, { useEffect, useState } from "react";

import {
  getPublications,
  addPublication,
  updatePublication,
  deletePublication
} from "../../services/publicationApi";

import PublicationCard from "./PublicationCard";

import "./Publication.css";


// =====================================================
// EMPTY FORM
// =====================================================

const emptyPublication = {
  id: "",
  title: "",
  authors: "",
  journal: "",
  year: new Date().getFullYear(),
  status: "Published",
  details: "",
  category: "",
  impactFactor: "",
  doi: "",
  link: "",
};


// =====================================================
// COMPONENT
// =====================================================

function PublicationSection() {

  // ===================================================
  // PUBLICATIONS
  // ===================================================

  const [publications, setPublications] = useState([]);

  const [loading, setLoading] = useState(true);

  const [error, setError] = useState("");


  // ===================================================
  // FILTER
  // ===================================================

  const [filter, setFilter] = useState("All");


  // ===================================================
  // FORM
  // ===================================================

  const [showForm, setShowForm] = useState(false);

  const [editingId, setEditingId] = useState(null);

  const [formData, setFormData] =
    useState(emptyPublication);


  // ===================================================
  // LOAD PUBLICATIONS FROM MONGODB
  // ===================================================

  useEffect(() => {

    const loadPublications = async () => {

      try {

        setLoading(true);

        setError("");

        // Get publications from backend
        const data = await getPublications();


        // Convert MongoDB data into
        // the format expected by our UI
        const formattedData = data.map((publication) => ({

          ...publication,

          // MongoDB gives us _id
          // Our existing UI uses id
          id: publication._id,

          // MongoDB stores authors as an array
          // Our form/card uses a string
          authors: Array.isArray(publication.authors)
            ? publication.authors.join(", ")
            : publication.authors || ""

        }));


        setPublications(formattedData);

      } catch (error) {

        console.error(
          "Failed to load publications:",
          error
        );

        setError(
          "Failed to load publications."
        );

      } finally {

        setLoading(false);

      }

    };


    loadPublications();

  }, []);


  // ===================================================
  // FILTER PUBLICATIONS
  // ===================================================

  const filteredPublications =
    filter === "All"
      ? publications
      : publications.filter(
          (publication) =>
            publication.status === filter
        );


  // ===================================================
  // OPEN ADD FORM
  // ===================================================

  const handleAddPublication = () => {

    setEditingId(null);

    setFormData({
      ...emptyPublication,
      year: new Date().getFullYear()
    });

    setShowForm(true);


    // Scroll to form

    setTimeout(() => {

      document
        .getElementById("publication-form")
        ?.scrollIntoView({
          behavior: "smooth",
          block: "center",
        });

    }, 100);

  };


  // ===================================================
  // OPEN EDIT FORM
  // ===================================================

  const handleEdit = (publication) => {

    // Save MongoDB _id
    // through our converted id field
    setEditingId(publication.id);


    // Put existing publication data into form

    setFormData({

      ...publication,

      authors: Array.isArray(publication.authors)
        ? publication.authors.join(", ")
        : publication.authors || ""

    });


    setShowForm(true);


    // Scroll to form

    setTimeout(() => {

      document
        .getElementById("publication-form")
        ?.scrollIntoView({
          behavior: "smooth",
          block: "center",
        });

    }, 100);

  };


  // ===================================================
  // DELETE PUBLICATION
  // ===================================================

  const handleDelete = async (id) => {

    const confirmed = window.confirm(
      "Are you sure you want to delete this publication?"
    );


    if (!confirmed) {
      return;
    }


    try {

      // Delete from MongoDB
      await deletePublication(id);


      // Remove from React state
      setPublications((current) =>
        current.filter(
          (publication) =>
            publication.id !== id
        )
      );


      alert(
        "Publication deleted successfully!"
      );

    } catch (error) {

      console.error(
        "Failed to delete publication:",
        error
      );

      alert(
        "Failed to delete publication. Please try again."
      );

    }

  };


  // ===================================================
  // INPUT CHANGE
  // ===================================================

  const handleChange = (event) => {

    const { name, value } = event.target;


    setFormData((current) => ({

      ...current,

      [name]: value,

    }));

  };


  // ===================================================
  // SUBMIT FORM
  // ===================================================

  const handleSubmit = async (event) => {

    event.preventDefault();


    // ================================================
    // BASIC VALIDATION
    // ================================================

    if (
      !formData.title.trim() ||
      !formData.authors.trim() ||
      !formData.journal.trim()
    ) {

      alert(
        "Please fill Title, Authors and Journal."
      );

      return;

    }


    // ================================================
    // PREPARE DATA FOR MONGODB
    // ================================================

    const publicationPayload = {

      title: formData.title.trim(),

      // Convert:
      // "Author 1, Author 2"
      //
      // into:
      // ["Author 1", "Author 2"]

      authors: formData.authors
        .split(",")
        .map((author) => author.trim())
        .filter(Boolean),

      journal: formData.journal.trim(),

      year: Number(formData.year),

      status: formData.status,

      category: formData.category,

      impactFactor: formData.impactFactor,

      details: formData.details,

      doi: formData.doi,

      link: formData.link

    };


    try {

      // ================================================
      // EDIT EXISTING PUBLICATION
      // ================================================

      if (editingId) {

        console.log(
          "Updating publication:",
          editingId
        );


        // PUT request to MongoDB
        const updatedPublication =
          await updatePublication(
            editingId,
            publicationPayload
          );


        // Convert response into UI format

        const formattedPublication = {

          ...updatedPublication,

          id: updatedPublication._id,

          authors: Array.isArray(
            updatedPublication.authors
          )
            ? updatedPublication.authors.join(", ")
            : updatedPublication.authors || ""

        };


        // Update React state

        setPublications((current) =>

          current.map((publication) =>

            publication.id === editingId
              ? formattedPublication
              : publication

          )

        );


        alert(
          "Publication updated successfully!"
        );

      }


      // ================================================
      // ADD NEW PUBLICATION
      // ================================================

      else {

        console.log(
          "Adding new publication"
        );


        // POST request to MongoDB

        const newPublication =
          await addPublication(
            publicationPayload
          );


        // Convert response into UI format

        const formattedPublication = {

          ...newPublication,

          id: newPublication._id,

          authors: Array.isArray(
            newPublication.authors
          )
            ? newPublication.authors.join(", ")
            : newPublication.authors || ""

        };


        // Add new publication to top

        setPublications((current) => [

          formattedPublication,

          ...current

        ]);


        alert(
          "Publication added successfully!"
        );

      }


      // ================================================
      // RESET FORM
      // ================================================

      setFormData({

        ...emptyPublication,

        year: new Date().getFullYear()

      });

      setEditingId(null);

      setShowForm(false);


    } catch (error) {

      console.error(
        "Failed to save publication:",
        error
      );


      alert(
        "Failed to save publication. Please check the backend."
      );

    }

  };


  // ===================================================
  // CANCEL
  // ===================================================

  const handleCancel = () => {

    setFormData({

      ...emptyPublication,

      year: new Date().getFullYear()

    });

    setEditingId(null);

    setShowForm(false);

  };


  // ===================================================
  // RENDER
  // ===================================================

  return (

    <section className="publication-section">


      {/* =================================================
          HEADER
      ================================================= */}

      <div className="publication-header">

        <div>

          <span className="publication-label">
            RESEARCH OUTPUT
          </span>


          <h1>
            Research Publications
          </h1>


          <p>
            Selected research publications from our
            laboratory in pharmaceutical nanotechnology,
            advanced drug delivery, cancer nanomedicine
            and antimicrobial strategies.
          </p>

        </div>


        {/* =================================================
            GOOGLE SCHOLAR
        ================================================= */}

        <a
          href="https://scholar.google.com/citations?user=ZOZwu6AAAAAJ&hl=en"
          target="_blank"
          rel="noopener noreferrer"
          className="scholar-link"
        >
          View Google Scholar ↗
        </a>

      </div>


      {/* =================================================
          PUBLICATION CONTROLS
      ================================================= */}

      <div className="publication-controls">

        <div>

          <span className="recent-label">
            RECENT WORK
          </span>


          <h2>
            Publications
          </h2>


          <p>
            Research scholarly work from 2021 onwards.
          </p>

        </div>


        {/* =================================================
            FILTER BUTTONS
        ================================================= */}

        <div className="publication-filters">

          <button
            type="button"
            className={
              filter === "All"
                ? "filter-active"
                : ""
            }
            onClick={() => setFilter("All")}
          >
            All
          </button>


          <button
            type="button"
            className={
              filter === "Published"
                ? "filter-active"
                : ""
            }
            onClick={() =>
              setFilter("Published")
            }
          >
            Published
          </button>


          <button
            type="button"
            className={
              filter === "Accepted"
                ? "filter-active"
                : ""
            }
            onClick={() =>
              setFilter("Accepted")
            }
          >
            Accepted
          </button>

        </div>


        {/* =================================================
            ADD BUTTON
        ================================================= */}

        <AdminOnly><button
          type="button"
          className="add-publication-btn"
          onClick={handleAddPublication}
        >
          + Add Publication
        </button></AdminOnly>

      </div>


      {/* =================================================
          LOADING
      ================================================= */}

      {loading && (

        <div className="no-publications">

          <h3>
            Loading publications...
          </h3>

        </div>

      )}


      {/* =================================================
          ERROR
      ================================================= */}

      {!loading && error && (

        <div className="no-publications">

          <h3>
            {error}
          </h3>

          <p>
            Please make sure the backend server is running.
          </p>

        </div>

      )}


      {/* =================================================
          ADD / EDIT FORM
      ================================================= */}

      <AdminOnly>{!loading && !error && showForm && (

        <div
          id="publication-form"
          className="publication-form-container"
        >

          <div className="publication-form-header">

            <div>

              <span>

                {editingId
                  ? "EDIT PUBLICATION"
                  : "NEW PUBLICATION"}

              </span>


              <h2>

                {editingId
                  ? "Edit Research Publication"
                  : "Add Research Publication"}

              </h2>

            </div>


            <button
              type="button"
              className="form-close"
              onClick={handleCancel}
            >
              ×
            </button>

          </div>


          <form
            onSubmit={handleSubmit}
            className="publication-form"
          >


            {/* =================================================
                TITLE
            ================================================= */}

            <div className="form-group full">

              <label>
                Publication Title *
              </label>


              <input
                type="text"
                name="title"
                value={formData.title}
                onChange={handleChange}
                placeholder="Enter research paper title"
                required
              />

            </div>


            {/* =================================================
                AUTHORS
            ================================================= */}

            <div className="form-group full">

              <label>
                Authors *
              </label>


              <textarea
                name="authors"
                value={formData.authors}
                onChange={handleChange}
                placeholder="Enter authors separated by commas"
                rows="3"
                required
              />

            </div>


            {/* =================================================
                JOURNAL
            ================================================= */}

            <div className="form-group">

              <label>
                Journal *
              </label>


              <input
                type="text"
                name="journal"
                value={formData.journal}
                onChange={handleChange}
                placeholder="Journal name"
                required
              />

            </div>


            {/* =================================================
                YEAR
            ================================================= */}

            <div className="form-group">

              <label>
                Year *
              </label>


              <input
                type="number"
                name="year"
                value={formData.year}
                onChange={handleChange}
                min="1900"
                max="2100"
                required
              />

            </div>


            {/* =================================================
                STATUS
            ================================================= */}

            <div className="form-group">

              <label>
                Status *
              </label>


              <select
                name="status"
                value={formData.status}
                onChange={handleChange}
              >

                <option value="Published">
                  Published
                </option>


                <option value="Accepted">
                  Accepted
                </option>

              </select>

            </div>


            {/* =================================================
                CATEGORY
            ================================================= */}

            <div className="form-group">

              <label>
                Research Area
              </label>


              <input
                type="text"
                name="category"
                value={formData.category}
                onChange={handleChange}
                placeholder="e.g. Drug Delivery"
              />

            </div>


            {/* =================================================
                IMPACT FACTOR
            ================================================= */}

            <div className="form-group">

              <label>
                Impact Factor
              </label>


              <input
                type="text"
                name="impactFactor"
                value={formData.impactFactor}
                onChange={handleChange}
                placeholder="e.g. 5.4"
              />

            </div>


            {/* =================================================
                DETAILS
            ================================================= */}

            <div className="form-group full">

              <label>
                Publication Details
              </label>


              <input
                type="text"
                name="details"
                value={formData.details}
                onChange={handleChange}
                placeholder="Volume, issue, pages, DOI etc."
              />

            </div>


            {/* =================================================
                DOI
            ================================================= */}

            <div className="form-group">

              <label>
                DOI
              </label>


              <input
                type="text"
                name="doi"
                value={formData.doi}
                onChange={handleChange}
                placeholder="10.xxxx/xxxxx"
              />

            </div>


            {/* =================================================
                LINK
            ================================================= */}

            <div className="form-group">

              <label>
                Paper Link
              </label>


              <input
                type="url"
                name="link"
                value={formData.link}
                onChange={handleChange}
                placeholder="https://..."
              />

            </div>


            {/* =================================================
                FORM ACTIONS
            ================================================= */}

            <div className="form-actions">

              <button
                type="button"
                className="cancel-btn"
                onClick={handleCancel}
              >
                Cancel
              </button>


              <button
                type="submit"
                className="save-btn"
              >

                {editingId
                  ? "Save Changes"
                  : "Add Publication"}

              </button>

            </div>


          </form>

        </div>

      )}


      </AdminOnly>{/* =================================================
          PUBLICATION GRID
      ================================================= */}

      {!loading && !error && (

        <div className="publication-grid">

          {filteredPublications.length > 0 ? (

            filteredPublications.map(
              (publication) => (

                <PublicationCard
                  key={publication.id}
                  publication={publication}
                  onEdit={handleEdit}
                  onDelete={handleDelete}
                />

              )
            )

          ) : (

            <div className="no-publications">

              <h3>
                No publications found
              </h3>


              <p>
                Add a publication or select another filter.
              </p>

            </div>

          )}

        </div>

      )}

    </section>

  );

}


export default PublicationSection;