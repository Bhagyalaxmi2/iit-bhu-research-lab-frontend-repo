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
  const [formData, setFormData] = useState({ name: "", email: "", subject: "", message: "" });
  const [isSending, setIsSending] = useState(false);
  const [formStatus, setFormStatus] = useState({ text: "", type: "" });

  const handleChange = (event) => {
    const { name, value } = event.target;
    setFormData((previous) => ({ ...previous, [name]: value }));
  };

  const handleSubmit = async (event) => {
    event.preventDefault();
    setIsSending(true);
    setFormStatus({ text: "", type: "" });

    try {
      const result = await sendMessage(formData);
      setFormData({ name: "", email: "", subject: "", message: "" });
      setFormStatus({
        text: result.emailNotificationSent
          ? "Thank you! Your message has been sent to the lab."
          : "Thank you! Your message was saved. Email notifications are not configured yet.",
        type: "success"
      });
    } catch (error) {
      console.error("Error sending contact message:", error);
      setFormStatus({ text: "We could not send your message. Please try again.", type: "error" });
    } finally {
      setIsSending(false);
    }
  };

  return (
    <section className="contact">
      <h1>Contact Us</h1>
      <p className="contact-subtitle">
        We&apos;d love to hear from you. Feel free to contact our research laboratory.
      </p>

      <div className="contact-container">
        <div className="contact-info">
          <h2>Research Laboratory</h2>
          <p><FaMapMarkerAlt /> IIT (BHU), Varanasi, Uttar Pradesh, India</p>
          <p><FaPhone /> +91 987xxxxxxx</p>
          <p><FaEnvelope /> researchlab@iitbhu.ac.in</p>
          <p><FaClock /> Monday - Friday | 9:00 AM - 5:00 PM</p>
          <div className="social-icons">
            <FaLinkedin />
            <FaGithub />
            <FaTwitter />
          </div>
        </div>

        <div className="contact-form">
          <h2>Send Message</h2>
          <form onSubmit={handleSubmit}>
            <input type="text" name="name" placeholder="Your Name" value={formData.name} onChange={handleChange} autoComplete="name" maxLength={100} required />
            <input type="email" name="email" placeholder="Email Address" value={formData.email} onChange={handleChange} autoComplete="email" maxLength={254} required />
            <input type="text" name="subject" placeholder="Subject" value={formData.subject} onChange={handleChange} maxLength={200} required />
            <textarea name="message" rows="6" placeholder="Message" value={formData.message} onChange={handleChange} maxLength={5000} required />
            <button type="submit" disabled={isSending}>
              {isSending ? "Sending…" : "Send Message"}
            </button>
            {formStatus.text && (
              <p className={`contact-form-status ${formStatus.type}`} role="status" aria-live="polite">
                {formStatus.text}
              </p>
            )}
          </form>
        </div>
      </div>

      <div className="map">
        <iframe
          title="IIT BHU location map"
          src="https://www.google.com/maps?q=IIT%20BHU%20Varanasi&output=embed"
          allowFullScreen
          loading="lazy"
          referrerPolicy="no-referrer-when-downgrade"
        />
      </div>
    </section>
  );
}

export default ContactSection;