import AdminOnly from "../components/AdminOnly";
import React, { useEffect, useState } from "react";
import { useParams, Link, useNavigate } from "react-router-dom";

import {
  getPeople,
  updatePerson,
  deletePerson,
} from "../services/peopleAPi";

import "./PersonProfile.css";

function PersonProfile() {

  // =====================================================
  // GET PERSON ID FROM URL
  // =====================================================

  const { id } = useParams();

  const navigate = useNavigate();

  // =====================================================
  // STATE
  // =====================================================

  const [person, setPerson] = useState(null);

  const [loading, setLoading] = useState(true);

  const [error, setError] = useState("");

  // Edit mode
  const [isEditing, setIsEditing] = useState(false);

  // Edit form
  const [formData, setFormData] = useState({});

  // =====================================================
  // FETCH PERSON FROM MONGODB
  // =====================================================

  useEffect(() => {

    const fetchPerson = async () => {

      try {

        setLoading(true);

        const people = await getPeople();

        // Find MongoDB document using _id
        const foundPerson = people.find(
          (item) => String(item._id) === String(id)
        );

        if (!foundPerson) {
          setError("Person not found");
          return;
        }

        setPerson(foundPerson);

        // Initialize edit form
        setFormData(foundPerson);

      } catch (err) {

        console.error(err);

        setError(
          "Failed to load person profile."
        );

      } finally {

        setLoading(false);

      }
    };

    fetchPerson();

  }, [id]);

  // =====================================================
  // HANDLE INPUT CHANGE
  // =====================================================

  const handleChange = (e) => {

    const { name, value } = e.target;

    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));

  };

  // =====================================================
  // SAVE EDIT
  // =====================================================

  const handleUpdate = async (e) => {

    e.preventDefault();

    try {

      const updatedPerson = await updatePerson(
        person._id,
        formData
      );

      setPerson(updatedPerson);

      setFormData(updatedPerson);

      setIsEditing(false);

      alert("Person profile updated successfully!");

    } catch (err) {

      console.error(err);

      alert(
        "Failed to update person profile."
      );

    }

  };

  // =====================================================
  // DELETE PERSON
  // =====================================================

  const handleDelete = async () => {

    const confirmDelete = window.confirm(
      `Are you sure you want to delete ${person.name}?`
    );

    if (!confirmDelete) {
      return;
    }

    try {

      await deletePerson(person._id);

      alert(
        "Person deleted successfully!"
      );

      // Return to People page
      navigate("/people");

    } catch (err) {

      console.error(err);

      alert(
        "Failed to delete person."
      );

    }

  };

  // =====================================================
  // LOADING
  // =====================================================

  if (loading) {

    return (
      <div className="profile-not-found">
        <h2>Loading Profile...</h2>
      </div>
    );

  }

  // =====================================================
  // ERROR / NOT FOUND
  // =====================================================

  if (error || !person) {

    return (
      <div className="profile-not-found">

        <h2>
          {error || "Person Not Found"}
        </h2>

        <Link to="/people">
          ← Back to People
        </Link>

      </div>
    );

  }

  // =====================================================
  // ALUMNI CHECK
  // =====================================================

  const isAlumni =
    person.category === "alumni";

  // =====================================================
  // UI
  // =====================================================

  return (

    <main className="person-profile-page">

      {/* =================================================
          BACK BUTTON
      ================================================= */}

      <div className="profile-container">

        <Link
          to="/people"
          className="profile-back"
        >
          ← Back to People
        </Link>

      </div>


      <div className="profile-container">


        {/* =================================================
            MANAGEMENT BUTTONS
        ================================================= */}

        <AdminOnly><div className="profile-actions">

          {!isEditing && (
            <>
              <button
                className="profile-edit-btn"
                onClick={() => setIsEditing(true)}
              >
                ✏️ Edit Profile
              </button>

              <button
                className="profile-delete-btn"
                onClick={handleDelete}
              >
                🗑 Delete Profile
              </button>
            </>
          )}

        </div></AdminOnly>


        {/* =================================================
            EDIT FORM
        ================================================= */}

        <AdminOnly>{isEditing && (

          <section className="profile-edit-form">

            <div className="edit-heading">

              <span>EDIT PROFILE</span>

              <h2>
                Update {person.name}
              </h2>

            </div>


            <form onSubmit={handleUpdate}>

              {/* NAME */}

              <div className="edit-field">

                <label>
                  Name
                </label>

                <input
                  type="text"
                  name="name"
                  value={formData.name || ""}
                  onChange={handleChange}
                  required
                />

              </div>


              {/* DESIGNATION */}

              <div className="edit-field">

                <label>
                  Designation
                </label>

                <input
                  type="text"
                  name="designation"
                  value={
                    formData.designation || ""
                  }
                  onChange={handleChange}
                  required
                />

              </div>


              {/* POSITION */}

              <div className="edit-field">

                <label>
                  Position
                </label>

                <input
                  type="text"
                  name="position"
                  value={
                    formData.position || ""
                  }
                  onChange={handleChange}
                />

              </div>


              {/* CATEGORY */}

              <div className="edit-field">

                <label>
                  Category
                </label>

                <select
                  name="category"
                  value={
                    formData.category || "phd"
                  }
                  onChange={handleChange}
                >

                  <option value="phd">
                    PhD Scholar
                  </option>

                  <option value="mtech">
                    M.Tech Student
                  </option>

                  <option value="alumni">
                    Alumni
                  </option>

                </select>

              </div>


              {/* RESEARCH AREA */}

              <div className="edit-field">

                <label>
                  Research Area
                </label>

                <textarea
                  name="researchArea"
                  value={
                    formData.researchArea || ""
                  }
                  onChange={handleChange}
                  rows="4"
                />

              </div>


              {/* ENROLLMENT */}

              <div className="edit-field">

                <label>
                  Enrollment
                </label>

                <input
                  type="text"
                  name="enrollment"
                  value={
                    formData.enrollment || ""
                  }
                  onChange={handleChange}
                />

              </div>


              {/* FELLOWSHIP */}

              <div className="edit-field">

                <label>
                  Fellowship
                </label>

                <input
                  type="text"
                  name="fellowship"
                  value={
                    formData.fellowship || ""
                  }
                  onChange={handleChange}
                />

              </div>


              {/* YEAR */}

              <div className="edit-field">

                <label>
                  Alumni Year
                </label>

                <input
                  type="text"
                  name="year"
                  value={
                    formData.year || ""
                  }
                  onChange={handleChange}
                />

              </div>


              {/* CURRENT POSITION */}

              <div className="edit-field">

                <label>
                  Current Position
                </label>

                <textarea
                  name="currentPosition"
                  value={
                    formData.currentPosition || ""
                  }
                  onChange={handleChange}
                  rows="3"
                />

              </div>


              {/* EMAIL */}

              <div className="edit-field">

                <label>
                  Email
                </label>

                <input
                  type="email"
                  name="email"
                  value={
                    formData.email || ""
                  }
                  onChange={handleChange}
                />

              </div>


              {/* IMAGE */}

              <div className="edit-field">

                <label>
                  Image Path
                </label>

                <input
                  type="text"
                  name="image"
                  value={
                    formData.image || ""
                  }
                  onChange={handleChange}
                  placeholder="/Labmembers/example.jpeg"
                />

              </div>


              {/* FORM BUTTONS */}

              <div className="edit-form-actions">

                <button
                  type="submit"
                  className="save-profile-btn"
                >
                  Save Changes
                </button>

                <button
                  type="button"
                  className="cancel-profile-btn"
                  onClick={() => {

                    setFormData(person);

                    setIsEditing(false);

                  }}
                >
                  Cancel
                </button>

              </div>

            </form>

          </section>

        )}</AdminOnly>


        {/* =================================================
            HERO PROFILE CARD
        ================================================= */}

        <section className="profile-hero-card">

          <div className="hero-photo-area">

            <div className="photo-decoration"></div>

            <img
              src={person.image}
              alt={person.name}
              className="hero-photo"
            />

          </div>


          <div className="hero-details">

            <div className="member-badge">

              <span></span>

              {isAlumni
                ? "LAB ALUMNI"
                : "CURRENT LAB MEMBER"}

            </div>


            <h1>
              {person.name}
            </h1>


            <h2>
              {person.designation}
            </h2>


            {person.position && (

              <p className="hero-position">
                {person.position}
              </p>

            )}


            <div className="hero-institute">

              <strong>
                Department of Pharmaceutical Engineering
                and Technology
              </strong>

              <span>
                Indian Institute of Technology (BHU), Varanasi
              </span>

            </div>

          </div>

        </section>


        {/* =================================================
            QUICK INFORMATION
        ================================================= */}

        <section className="quick-cards">

          {person.enrollment && (

            <div className="quick-card">

              <span className="quick-number">
                01
              </span>

              <div>

                <p>
                  Enrollment
                </p>

                <h3>
                  {person.enrollment}
                </h3>

              </div>

            </div>

          )}


          {person.fellowship && (

            <div className="quick-card">

              <span className="quick-number">
                02
              </span>

              <div>

                <p>
                  Fellowship
                </p>

                <h3>
                  {person.fellowship}
                </h3>

              </div>

            </div>

          )}


          {person.researchArea &&
            person.researchArea !== "NA" && (

              <div className="quick-card research-quick">

                <span className="quick-number">
                  03
                </span>

                <div>

                  <p>
                    Research Focus
                  </p>

                  <h3>
                    {person.researchArea}
                  </h3>

                </div>

              </div>

          )}


          {person.year && (

            <div className="quick-card">

              <span className="quick-number">
                03
              </span>

              <div>

                <p>
                  Alumni Year
                </p>

                <h3>
                  {person.year}
                </h3>

              </div>

            </div>

          )}

        </section>


        {/* =================================================
            TWO COLUMN AREA
        ================================================= */}

        <section className="profile-two-column">


          {/* LEFT */}

          <div>

            {/* RESEARCH */}

            {person.researchArea &&
              person.researchArea !== "NA" && (

                <article className="profile-card research-card">

                  <div className="card-top">

                    <div className="card-symbol">
                      R
                    </div>

                    <div>

                      <span>
                        RESEARCH
                      </span>

                      <h2>
                        Research Area
                      </h2>

                    </div>

                  </div>


                  <div className="research-highlight">

                    {person.researchArea}

                  </div>


                  <div className="research-footer">

                    Pharmaceutical Nanotechnology
                    & Drug Delivery

                  </div>

                </article>

            )}


            {/* CURRENT POSITION */}

            {person.currentPosition && (

              <article className="profile-card">

                <div className="card-top">

                  <div className="card-symbol">
                    P
                  </div>

                  <div>

                    <span>
                      CAREER
                    </span>

                    <h2>
                      Current Position
                    </h2>

                  </div>

                </div>


                <p className="card-description">

                  {person.currentPosition}

                </p>

              </article>

            )}

          </div>


          {/* RIGHT */}

          <div>

            {/* CONTACT */}

            {person.email && (

              <article className="profile-card contact-card">

                <div className="card-top">

                  <div className="card-symbol">
                    @
                  </div>

                  <div>

                    <span>
                      CONTACT
                    </span>

                    <h2>
                      Academic Contact
                    </h2>

                  </div>

                </div>


                <p className="contact-label">
                  Email
                </p>


                <a
                  href={`mailto:${person.email}`}
                  className="email-link"
                >
                  {person.email}
                </a>

              </article>

            )}


            {/* LAB INFORMATION */}

            <article className="profile-card">

              <div className="card-top">

                <div className="card-symbol">
                  L
                </div>

                <div>

                  <span>
                    LAB
                  </span>

                  <h2>
                    Lab Information
                  </h2>

                </div>

              </div>


              <div className="lab-info">

                <div>

                  <span>
                    Status
                  </span>

                  <strong>
                    {isAlumni
                      ? "Alumni"
                      : "Current Member"}
                  </strong>

                </div>


                <div>

                  <span>
                    Category
                  </span>

                  <strong>
                    {isAlumni
                      ? "Alumni"
                      : person.designation}
                  </strong>

                </div>


                <div>

                  <span>
                    Department
                  </span>

                  <strong>
                    Pharmaceutical Engineering
                    & Technology
                  </strong>

                </div>

              </div>

            </article>

          </div>

        </section>


        {/* =================================================
            ACADEMIC SNAPSHOT
        ================================================= */}

        <section className="academic-snapshot">

          <div className="snapshot-heading">

            <span>
              ACADEMIC PROFILE
            </span>

            <h2>
              Research Group Member
            </h2>

            <p>

              {isAlumni
                ? "Former member of the research group"
                : "Current member of the research group"}

            </p>

          </div>


          <div className="snapshot-content">

            <div className="snapshot-item">

              <span>
                Designation
              </span>

              <strong>
                {person.designation}
              </strong>

            </div>


            <div className="snapshot-item">

              <span>
                Position
              </span>

              <strong>
                {person.position ||
                  "Not specified"}
              </strong>

            </div>


            <div className="snapshot-item">

              <span>
                Research Domain
              </span>

              <strong>
                {person.researchArea ||
                  "Pharmaceutical Research"}
              </strong>

            </div>

          </div>

        </section>


        {/* =================================================
            BOTTOM
        ================================================= */}

        <div className="profile-bottom">

          <Link to="/people">
            ← Explore Other Lab Members
          </Link>

        </div>

      </div>

    </main>

  );

}

export default PersonProfile;