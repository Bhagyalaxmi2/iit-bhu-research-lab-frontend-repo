import AdminOnly, { isAdminSession } from "../AdminOnly";
import React, { useEffect, useState } from "react";
import {
  getSupervisor,
  updateSupervisor,
} from "../../services/supervisorApi";

import "./Supervisor.css";

// =====================================================
// SUPERVISOR COMPONENT
// =====================================================

function Supervisor() {

  // =====================================================
  // SUPERVISOR DATA
  // =====================================================

  const [data, setData] = useState(null);

  const [loading, setLoading] = useState(true);

  const [error, setError] = useState("");

  const [saving, setSaving] = useState(false);


  // =====================================================
  // LOAD SUPERVISOR FROM MONGODB
  // =====================================================

  useEffect(() => {

    const fetchSupervisor = async () => {

      try {

        const supervisor = await getSupervisor();

        console.log("Supervisor data:", supervisor);

        setData(supervisor);

      } catch (error) {

        console.error(
          "Failed to fetch supervisor:",
          error
        );

        setError(
          "Failed to load supervisor data."
        );

      } finally {

        setLoading(false);

      }

    };

    fetchSupervisor();

  }, []);


  // =====================================================
  // SAVE COMPLETE SUPERVISOR DOCUMENT
  // =====================================================

  const saveToMongoDB = async (updatedData) => {

    try {

      setSaving(true);

      const savedData =
        await updateSupervisor(updatedData);

      console.log(
        "Supervisor saved:",
        savedData
      );

      setData(savedData);

      return savedData;

    } catch (error) {

      console.error(
        "Failed to save supervisor:",
        error
      );

      alert(
        "Failed to save supervisor information."
      );

      throw error;

    } finally {

      setSaving(false);

    }

  };


  // =====================================================
  // UPDATE SIMPLE SUPERVISOR FIELD
  // =====================================================

  const updatePersonal = async (
    field,
    value
  ) => {

    const updatedData = {
      ...data,
      [field]: value,
    };

    setData(updatedData);

    await saveToMongoDB(updatedData);

  };


  // =====================================================
  // DELETE CARD
  // =====================================================

  const deleteItem = async (
    section,
    id
  ) => {

    const confirmDelete =
      window.confirm(
        "Are you sure you want to delete this information?"
      );

    if (!confirmDelete) {
      return;
    }


    // -------------------------------------------------
    // MongoDB subdocuments normally use _id
    // -------------------------------------------------

    const updatedItems =
      (data[section] || []).filter(
        (item) =>
          (item._id || item.id) !== id
      );


    const updatedData = {
      ...data,
      [section]: updatedItems,
    };


    try {

      await saveToMongoDB(
        updatedData
      );

    } catch (error) {

      // If MongoDB update fails,
      // don't keep the incorrect local state.

      return;

    }

  };


  // =====================================================
  // ADD CARD
  // =====================================================

  const addItem = async (
    section,
    item
  ) => {

    const updatedData = {
      ...data,

      [section]: [
        ...(data[section] || []),

        item,
      ],
    };


    try {

      await saveToMongoDB(
        updatedData
      );

    } catch (error) {

      return;

    }

  };


  // =====================================================
  // UPDATE CARD
  // =====================================================

  const updateItem = async (
    section,
    updatedItem
  ) => {

    const updatedData = {
      ...data,

      [section]: (
        data[section] || []
      ).map((item) => {

        const currentId =
          item._id || item.id;

        const updatedId =
          updatedItem._id ||
          updatedItem.id;

        return currentId === updatedId
          ? updatedItem
          : item;

      }),
    };


    try {

      await saveToMongoDB(
        updatedData
      );

    } catch (error) {

      return;

    }

  };


  // =====================================================
  // LOADING
  // =====================================================

  if (loading) {

    return (
      <div className="supervisor-page">

        Loading supervisor...

      </div>
    );

  }


  // =====================================================
  // ERROR
  // =====================================================

  if (error) {

    return (
      <div className="supervisor-page">

        {error}

      </div>
    );

  }


  // =====================================================
  // NO DATA
  // =====================================================

  if (!data) {

    return (
      <div className="supervisor-page">

        Supervisor not found.

      </div>
    );

  }


  // =====================================================
  // MAIN PAGE
  // =====================================================

  return (

    <main className="supervisor-page">


      {/* =================================================
          HERO
      ================================================= */}

      <section className="supervisor-hero">

        <span>
          PRINCIPAL INVESTIGATOR
        </span>

        <h1>
          Supervisor Profile
        </h1>

        <p>
          Academic leadership, pharmaceutical
          nanotechnology and advanced drug delivery
          research.
        </p>

      </section>

{/* =================================================
    PROFILE
================================================= */}

<section className="supervisor-profile-section">

  {/* PHOTO */}

<div className="supervisor-photo">
  <img
    src="/Labmembers/Supervisor.png"
    alt="Dr. Ashish Kumar Agrawal"
  />
</div>


  {/* INFORMATION */}

  <div className="supervisor-main-info">

    <span className="small-label">
      PRINCIPAL INVESTIGATOR
    </span>


    <h2>
      {data.personal?.name}
    </h2>


    <h3>
      {data.personal?.designation}
    </h3>


    <p className="department">
      {data.personal?.department}
    </p>


    {/* FULL PROFILE */}

    <p>
      {data.profile}
    </p>


    {/* EMAIL */}
   

    {data.personal?.email && (
      <div className="contact-info">
          E-mail:{" "}

        <a
          href={`mailto:${data.personal.email}`}
        >
          ✉ {data.personal.email}
        </a>

      </div>
    )}


    {/* PROFESSIONAL LINKS */}

    <div className="profile-links">

      {/* Google Scholar */}

      {data.personal?.scholar && (
        <a
          className="scholar-button"
          href={data.personal.scholar}
          target="_blank"
          rel="noopener noreferrer"
        >
          Google Scholar ↗
        </a>
      )}


      {/* LinkedIn */}

      {data.personal?.Linkedln && (
        <a
          className="linkedln-button"
          href={data.personal.Linkedln}
          target="_blank"
          rel="noopener noreferrer"
        >
          LinkedIn ↗
        </a>
      )}


      {/* ORCID */}

      {data.personal?.Orcid && (
        <a
          className="orcid-button"
          href={data.personal.Orcid}
          target="_blank"
          rel="noopener noreferrer"
        >
          ORCID ↗
        </a>
      )}


      {/* ResearchGate */}

      {data.personal?.ResearchGate && (
        <a
          className="researchgate-button"
          href={data.personal.ResearchGate}
          target="_blank"
          rel="noopener noreferrer"
        >
          ResearchGate ↗
        </a>
      )}

    </div>

  </div>

</section>
{/* =================================================
    RESEARCH AREAS
================================================= */}

<section className="research-expertise-section">

  <div className="research-expertise-heading">

    <span>
      RESEARCH
    </span>

    <h2>
      Research Areas
    </h2>

    <p>
      The laboratory focuses on pharmaceutical
      nanotechnology, advanced drug delivery and
      innovative therapeutic approaches for challenging
      healthcare problems.
    </p>

  </div>


  <div className="research-expertise-grid">

    {(data.researchAreas || []).map(
      (area, index) => (

        <div
          className="research-expertise-card"
          key={index}
        >

          <div className="research-number">

            {String(index + 1).padStart(2, "0")}

          </div>

          <h3>
            {area}
          </h3>

        </div>

      )
    )}

  </div>

</section>


      {/* =================================================
          EDUCATION
      ================================================= */}

      {data.education &&
        data.education.length > 0 && (

          <EditableSection

            title="Education & Training"

            section="education"

            items={data.education}

            onDelete={deleteItem}

            onAdd={addItem}

            onUpdate={updateItem}

          />

        )}



      {/* =================================================
          AWARDS
      ================================================= */}

      {data.awards &&
        data.awards.length > 0 && (

          <EditableSection

            title="Awards & Achievements"

            section="awards"

            items={data.awards}

            onDelete={deleteItem}

            onAdd={addItem}

            onUpdate={updateItem}

          />

        )}



      {/* =================================================
          GRANTS
      ================================================= */}

      {data.grants &&
        data.grants.length > 0 && (

          <EditableSection

            title="Grants & Funded Projects"

            section="grants"

            items={data.grants}

            onDelete={deleteItem}

            onAdd={addItem}

            onUpdate={updateItem}

          />

        )}



      {/* =================================================
          SAVE STATUS
      ================================================= */}

      {saving && (

        <div className="saving-message">
          Saving changes...
        </div>

      )}

    </main>

  );

}



// =======================================================
// REUSABLE EDITABLE SECTION
// =======================================================

function EditableSection({

  title,

  section,

  items,

  onDelete,

  onAdd,

  onUpdate,

}) {


  const [
    showForm,
    setShowForm
  ] = useState(false);


  const [
    editing,
    setEditing
  ] = useState(null);



  // =====================================================
  // NEW ITEM TEMPLATE
  // =====================================================

  const createEmptyItem = () => {


    if (
      section === "education"
    ) {

      return {

        degree: "",

        institution: "",

        year: "",

        detail: "",

      };

    }



    if (
      section === "awards"
    ) {

      return {

        title: "",

        organization: "",

        year: "",

        description: "",

      };

    }



    return {

      agency: "",

      title: "",

      duration: "",

      amount: "",

      role: "",

      status: "Ongoing",

    };

  };



  // =====================================================
  // SAVE ITEM
  // =====================================================

  const handleSave = async (
    event
  ) => {

    event.preventDefault();


    if (!editing) {
      return;
    }


    try {


      // -------------------------------------------------
      // UPDATE EXISTING ITEM
      // -------------------------------------------------

      if (
        editing._id ||
        editing.id
      ) {

        await onUpdate(
          section,
          editing
        );

      }


      // -------------------------------------------------
      // ADD NEW ITEM
      // -------------------------------------------------

      else {

        await onAdd(
          section,
          editing
        );

      }


      setEditing(null);

      setShowForm(false);


    } catch (error) {

      console.error(
        "Failed to save item:",
        error
      );

    }

  };



  return (

    <section className="content-section">


      {/* =================================================
          SECTION HEADER
      ================================================= */}

      <div className="section-heading-row">


        <div>

          <span>
            {section.toUpperCase()}
          </span>

          <h2>
            {title}
          </h2>

        </div>


        <AdminOnly><button
          className="add-button"
          type="button"
          onClick={() => {

            setEditing(
              createEmptyItem()
            );

            setShowForm(true);

          }}
        >
          + Add
        </button></AdminOnly>


      </div>



      {/* =================================================
          CARDS
      ================================================= */}

      <div className="editable-grid">


        {(items || []).map(
          (item, index) => (

            <article
              className="editable-card"
              key={
                item._id ||
                item.id ||
                index
              }
            >


              {/* =================================================
                  EDUCATION
              ================================================= */}

              {section === "education" && (

                <>

                  <span className="card-year">
                    {item.year}
                  </span>


                  <h3>
                    {item.degree}
                  </h3>


                  <p>
                    {item.institution}
                  </p>


                  {item.detail && (

                    <strong>
                      {item.detail}
                    </strong>

                  )}

                </>

              )}



              {/* =================================================
                  AWARDS
              ================================================= */}

              {section === "awards" && (

                <>

                  <span className="card-year">
                    {item.year}
                  </span>


                  <h3>
                    {item.title}
                  </h3>


                  <h4>
                    {item.organization}
                  </h4>


                  <p>
                    {item.description}
                  </p>

                </>

              )}



              {/* =================================================
                  GRANTS
              ================================================= */}

              {section === "grants" && (

                <>

                  <div className="grant-top">

                    <span>
                      {item.agency}
                    </span>


                    <span>
                      {item.status}
                    </span>

                  </div>


                  <h3>
                    {item.title}
                  </h3>


                  <div className="grant-details">

                    <p>
                      <b>
                        Duration:
                      </b>{" "}
                      {item.duration}
                    </p>


                    <p>
                      <b>
                        Amount:
                      </b>{" "}
                      {item.amount}
                    </p>


                    <p>
                      <b>
                        Role:
                      </b>{" "}
                      {item.role}
                    </p>

                  </div>

                </>

              )}



              {/* =================================================
                  CARD ACTIONS
              ================================================= */}

              <AdminOnly><div className="card-actions">


                <button
                  type="button"
                  onClick={() => {

                    setEditing({
                      ...item,
                    });

                    setShowForm(true);

                  }}
                >
                  Edit
                </button>


                <button
                  type="button"
                  className="delete-button"
                  onClick={() =>
                    onDelete(
                      section,
                      item._id ||
                      item.id
                    )
                  }
                >
                  Delete
                </button>


              </div></AdminOnly>


            </article>

          )
        )}


      </div>



      {/* =================================================
          ADD / EDIT FORM
      ================================================= */}

      {isAdminSession() && showForm &&
        editing && (

          <div className="editor-box">


            <div className="editor-header">

              <h3>

                {editing._id ||
                editing.id

                  ? "Edit Information"

                  : `Add ${title}`}

              </h3>


              <button
                type="button"
                onClick={() => {

                  setShowForm(false);

                  setEditing(null);

                }}
              >
                ✕
              </button>


            </div>



            <form
              onSubmit={handleSave}
            >


              {/* =================================================
                  EDUCATION FORM
              ================================================= */}

              {section === "education" && (

                <>

                  <input
                    placeholder="Degree"
                    value={
                      editing.degree ||
                      ""
                    }
                    onChange={(e) =>
                      setEditing({
                        ...editing,

                        degree:
                          e.target.value,

                      })
                    }
                    required
                  />


                  <input
                    placeholder="Institution"
                    value={
                      editing.institution ||
                      ""
                    }
                    onChange={(e) =>
                      setEditing({
                        ...editing,

                        institution:
                          e.target.value,

                      })
                    }
                    required
                  />


                  <input
                    placeholder="Year"
                    value={
                      editing.year ||
                      ""
                    }
                    onChange={(e) =>
                      setEditing({
                        ...editing,

                        year:
                          e.target.value,

                      })
                    }
                  />


                  <input
                    placeholder="Additional detail"
                    value={
                      editing.detail ||
                      ""
                    }
                    onChange={(e) =>
                      setEditing({
                        ...editing,

                        detail:
                          e.target.value,

                      })
                    }
                  />

                </>

              )}



              {/* =================================================
                  AWARD FORM
              ================================================= */}

              {section === "awards" && (

                <>

                  <input
                    placeholder="Award title"
                    value={
                      editing.title ||
                      ""
                    }
                    onChange={(e) =>
                      setEditing({
                        ...editing,

                        title:
                          e.target.value,

                      })
                    }
                    required
                  />


                  <input
                    placeholder="Organization"
                    value={
                      editing.organization ||
                      ""
                    }
                    onChange={(e) =>
                      setEditing({
                        ...editing,

                        organization:
                          e.target.value,

                      })
                    }
                  />


                  <input
                    placeholder="Year"
                    value={
                      editing.year ||
                      ""
                    }
                    onChange={(e) =>
                      setEditing({
                        ...editing,

                        year:
                          e.target.value,

                      })
                    }
                  />


                  <textarea
                    placeholder="Description"
                    value={
                      editing.description ||
                      ""
                    }
                    onChange={(e) =>
                      setEditing({
                        ...editing,

                        description:
                          e.target.value,

                      })
                    }
                  />

                </>

              )}



              {/* =================================================
                  GRANT FORM
              ================================================= */}

              {section === "grants" && (

                <>

                  <input
                    placeholder="Grant Agency"
                    value={
                      editing.agency ||
                      ""
                    }
                    onChange={(e) =>
                      setEditing({
                        ...editing,

                        agency:
                          e.target.value,

                      })
                    }
                    required
                  />


                  <textarea
                    placeholder="Project Title"
                    value={
                      editing.title ||
                      ""
                    }
                    onChange={(e) =>
                      setEditing({
                        ...editing,

                        title:
                          e.target.value,

                      })
                    }
                    required
                  />


                  <input
                    placeholder="Duration"
                    value={
                      editing.duration ||
                      ""
                    }
                    onChange={(e) =>
                      setEditing({
                        ...editing,

                        duration:
                          e.target.value,

                      })
                    }
                  />


                  <input
                    placeholder="Amount"
                    value={
                      editing.amount ||
                      ""
                    }
                    onChange={(e) =>
                      setEditing({
                        ...editing,

                        amount:
                          e.target.value,

                      })
                    }
                  />


                  <input
                    placeholder="Role"
                    value={
                      editing.role ||
                      ""
                    }
                    onChange={(e) =>
                      setEditing({
                        ...editing,

                        role:
                          e.target.value,

                      })
                    }
                  />


                  <select
                    value={
                      editing.status ||
                      "Ongoing"
                    }
                    onChange={(e) =>
                      setEditing({
                        ...editing,

                        status:
                          e.target.value,

                      })
                    }
                  >

                    <option>
                      Ongoing
                    </option>

                    <option>
                      Completed
                    </option>

                  </select>

                </>

              )}



              {/* =================================================
                  SAVE BUTTON
              ================================================= */}

              <button
                className="save-button"
                type="submit"
              >
                Save Information
              </button>


            </form>

          </div>

        )}


    </section>

  );

}


export default Supervisor;