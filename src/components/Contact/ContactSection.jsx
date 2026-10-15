import "./Contact.css";

import {
  FaMapMarkerAlt,
  FaPhone,
  FaEnvelope,
  FaClock,
  FaLinkedin,
  FaGithub,
  FaTwitter
} from "react-icons/fa";

import { useState } from "react";
import { sendMessage } from "../../services/contactApi";


function ContactSection() {

  // ==========================================
  // STEP 1: Store form data
  // ==========================================

  const [formData, setFormData] = useState({
    name: "",
    email: "",
    subject: "",
    message: ""
  });


  // ==========================================
  // STEP 2: Handle input changes
  // ==========================================

  const handleChange = (e) => {

    const { name, value } = e.target;

    setFormData((prevData) => ({
      ...prevData,
      [name]: value
    }));

  };


  // ==========================================
  // STEP 3: Handle form submission
  // ==========================================

  const handleSubmit = async (e) => {

    // Prevent browser from refreshing
    e.preventDefault();

    try {

      // Send form data to backend
      await sendMessage(formData);

      // Clear form after successful submission
      setFormData({
        name: "",
        email: "",
        subject: "",
        message: ""
      });

      alert("Message sent successfully!");

    } catch (error) {

      console.error("Error sending message:", error);

      alert("Failed to send message. Please try again.");

    }

  };


  return (

    <section className="contact">


      {/* ==========================================
          PAGE HEADING
      ========================================== */}

      <h1>Contact Us</h1>

      <p className="contact-subtitle">
        We'd love to hear from you. Feel free to contact our research laboratory.
      </p>


      {/* ==========================================
          CONTACT CONTAINER
      ========================================== */}

      <div className="contact-container">


        {/* ==========================================
            LEFT SIDE - CONTACT INFORMATION
        ========================================== */}

        <div className="contact-info">

          <h2>Research Laboratory</h2>


          <p>
            <FaMapMarkerAlt />
            IIT (BHU), Varanasi, Uttar Pradesh, India
          </p>


          <p>
            <FaPhone />
            +91 9876543210
          </p>


          <p>
            <FaEnvelope />
            researchlab@iitbhu.ac.in
          </p>


          <p>
            <FaClock />
            Monday - Friday | 9:00 AM - 5:00 PM
          </p>


          {/* Social Media */}

          <div className="social-icons">

            <FaLinkedin />

            <FaGithub />

            <FaTwitter />

          </div>

        </div>



        {/* ==========================================
            RIGHT SIDE - CONTACT FORM
        ========================================== */}

        <div className="contact-form">

          <h2>Send Message</h2>


          {/* IMPORTANT:
              Connect form to handleSubmit
          */}

          <form onSubmit={handleSubmit}>


            {/* NAME */}

            <input
              type="text"
              name="name"
              placeholder="Your Name"
              value={formData.name}
              onChange={handleChange}
              required
            />


            {/* EMAIL */}

            <input
              type="email"
              name="email"
              placeholder="Email Address"
              value={formData.email}
              onChange={handleChange}
              required
            />


            {/* SUBJECT */}

            <input
              type="text"
              name="subject"
              placeholder="Subject"
              value={formData.subject}
              onChange={handleChange}
              required
            />


            {/* MESSAGE */}

            <textarea
              name="message"
              rows="6"
              placeholder="Message"
              value={formData.message}
              onChange={handleChange}
              required
            ></textarea>


            {/* SUBMIT BUTTON */}

            <button type="submit">
              Send Message
            </button>

          </form>

        </div>

      </div>



      {/* ==========================================
          GOOGLE MAP
      ========================================== */}

      <div className="map">

        <iframe
          title="IIT BHU"
          src="https://www.google.com/maps?q=IIT%20BHU%20Varanasi&output=embed"
          allowFullScreen=""
          loading="lazy"
        ></iframe>

      </div>

    </section>

  );

}


export default ContactSection;