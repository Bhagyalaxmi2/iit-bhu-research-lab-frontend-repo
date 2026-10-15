import { useState } from "react";
import "./Phome.css";

function Phome({ onAddPerson }) {

  // ============================================
  // Form visibility
  // ============================================

  const [showForm, setShowForm] = useState(false);


  // ============================================
  // Form data
  // ============================================

  const [formData, setFormData] = useState({
    category: "phd",
    name: "",
    image: "",
    designation: "",
    position: "",
    researchArea: "",
    enrollment: "",
    fellowship: "",
    email: "",
  });


  // ============================================
  // Handle input
  // ============================================

  const handleChange = (e) => {

    const { name, value } = e.target;

    setFormData((previous) => ({
      ...previous,
      [name]: value,
    }));

  };


  // ============================================
  // Submit
  // ============================================

  const handleSubmit = (e) => {

    e.preventDefault();

    if (
      !formData.name ||
      !formData.designation ||
      !formData.researchArea
    ) {

      alert("Please fill all required fields.");

      return;
    }

    onAddPerson(formData);


    // Clear form

    setFormData({
      category: "phd",
      name: "",
      image: "",
      designation: "",
      position: "",
      researchArea: "",
      enrollment: "",
      fellowship: "",
      email: "",
    });

    setShowForm(false);

  };


  return (

    <section className="people-home">

      <div className="people-content">

        {/* ======================================
            BREADCRUMB
        ====================================== */}

        <div className="breadcrumb">

          <span>Home</span>

          <span className="breadcrumb-line">
            /
          </span>

          <span>People</span>

        </div>


        {/* ======================================
            PAGE TITLE
        ====================================== */}

        <div className="people-title">

          <h1>
            Our People
          </h1>

          <div className="title-line"></div>

          <p className="people-description">

            Meet the passionate researchers, doctoral scholars,
            and postgraduate students of the Pharmaceutical
            Nanotechnology Research Laboratory at IIT (BHU),
            Varanasi. Together, we are advancing innovative drug
            delivery systems and next-generation pharmaceutical
            technologies.

          </p>

        </div>


        {/* ======================================
            SINGLE ADD PERSON BUTTON
        ====================================== */}

        <button
          className="add-person-btn"
          onClick={() => setShowForm(!showForm)}
        >

          {showForm
            ? "✕ Close Form"
            : "+ Add Person"}

        </button>


        {/* ======================================
            ADD PERSON FORM
        ====================================== */}

        {showForm && (

          <div className="person-form">

            <h2>
              Add New Person
            </h2>


            <form onSubmit={handleSubmit}>


              {/* CATEGORY */}

              <label>
                Education / Category
              </label>

              <select
                name="category"
                value={formData.category}
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


              {/* NAME */}

              <label>
                Name
              </label>

              <input
                type="text"
                name="name"
                placeholder="Enter full name"
                value={formData.name}
                onChange={handleChange}
                required
              />


              {/* IMAGE */}

              <label>
                Image URL
              </label>

              <input
                type="text"
                name="image"
                placeholder="/Labmembers/name.jpeg"
                value={formData.image}
                onChange={handleChange}
              />


              {/* DESIGNATION */}

              <label>
                Designation
              </label>

              <input
                type="text"
                name="designation"
                placeholder="e.g. PhD Scholar"
                value={formData.designation}
                onChange={handleChange}
                required
              />


              {/* POSITION */}

              <label>
                Position
              </label>

              <input
                type="text"
                name="position"
                placeholder="e.g. Teaching Assistant"
                value={formData.position}
                onChange={handleChange}
              />


              {/* RESEARCH AREA */}

              <label>
                Research Area
              </label>

              <input
                type="text"
                name="researchArea"
                placeholder="e.g. Nanomedicine"
                value={formData.researchArea}
                onChange={handleChange}
                required
              />


              {/* ENROLLMENT */}

              <label>
                Enrollment
              </label>

              <input
                type="text"
                name="enrollment"
                placeholder="e.g. July 2025"
                value={formData.enrollment}
                onChange={handleChange}
              />


              {/* FELLOWSHIP */}

              <label>
                Fellowship
              </label>

              <input
                type="text"
                name="fellowship"
                placeholder="e.g. ICMR PRS-I / TA / NF"
                value={formData.fellowship}
                onChange={handleChange}
              />


              {/* EMAIL */}

              <label>
                Email
              </label>

              <input
                type="email"
                name="email"
                placeholder="example@iitbhu.ac.in"
                value={formData.email}
                onChange={handleChange}
              />


              {/* BUTTON */}

              <button
                type="submit"
                className="create-person-btn"
              >

                Create Person

              </button>

            </form>

          </div>

        )}

      </div>

    </section>

  );
}

export default Phome;