import React, { useState, useEffect } from "react";
import "../css/Contact.css";
import AOS from "aos";
import "aos/dist/aos.css";

import { HiOutlineMail } from "react-icons/hi";
import { IoLocation } from "react-icons/io5";
import { FaWhatsapp, FaPhoneAlt } from "react-icons/fa";

const Contact = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });

  const [status, setStatus] = useState("");

  useEffect(() => {
    AOS.init({ duration: 1000, once: true });
  }, []);

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  // ✅ Define API_BASE once (outside handleSubmit)
  const API_BASE =
    process.env.NODE_ENV === "production"
      ? "https://portfolio-backend-lqmi.onrender.com"
      : "http://127.0.0.1:8000/api";

  const handleSubmit = async (e) => {
    e.preventDefault();
    setStatus("Sending...");

    try {
      const response = await fetch(`${API_BASE}/contact/`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(formData),
      });

      if (response.ok) {
        setStatus("✅ Message sent successfully!");
        setFormData({ name: "", email: "", message: "" });
      } else {
        setStatus("❌ Failed to send message.");
      }
    } catch (error) {
      console.error("Error:", error);
      setStatus("⚠️ Error sending message.");
    }
  };

  return (
    <section className="contact-section" id="contact">
      <div className="container">
        <h2 className="section-title" data-aos="fade-down">
          Contact Me
        </h2>
        <div className="contact-container">
          {/* Contact Info */}
          <div
            className="contact-info"
            data-aos="fade-right"
            data-aos-delay="200"
          >
            <div className="info-item">
              <span className="icon"><HiOutlineMail /></span>
              <a href="mailto:akshay.e.elayadath@gmail.com" className="contact-link">
                Email: akshay.e.elayadath@gmail.com
              </a>
            </div>
            <div className="info-item">
              <span className="icon"><FaPhoneAlt /></span>
              <a href="tel:+918075951964" className="contact-link">
                Phone: +91 8075951964
              </a>
            </div>
            <div className="info-item">
              <span className="icon"><FaWhatsapp /></span>
              <a
                href="https://wa.me/918891326360"
                target="_blank"
                rel="noopener noreferrer"
                className="contact-link"
              >
                WhatsApp: +91 8891326360
              </a>
            </div>
            <div className="info-item">
              <span className="icon"><IoLocation /></span>
              <a
                href="https://maps.app.goo.gl/KYsSktzMZqwefcMP8"
                target="_blank"
                rel="noopener noreferrer"
                className="contact-link"
              >
                Location: Kozhikode, Kerala, India
              </a>
            </div>
          </div>

          {/* Contact Form */}
          <form
            className="contact-form"
            onSubmit={handleSubmit}
            data-aos="fade-left"
            data-aos-delay="400"
          >
            <div className="form-group">
              <input
                type="text"
                name="name"
                placeholder="Your Name"
                value={formData.name}
                onChange={handleChange}
                required
              />
            </div>
            <div className="form-group">
              <input
                type="email"
                name="email"
                placeholder="Your Email"
                value={formData.email}
                onChange={handleChange}
                required
              />
            </div>
            <div className="form-group">
              <textarea
                name="message"
                placeholder="Your Message"
                value={formData.message}
                onChange={handleChange}
                required
              ></textarea>
            </div>
            <button type="submit" className="submit-btn">
              Send Message
            </button>
            {status && <p className="status-message">{status}</p>}
          </form>
        </div>
      </div>
    </section>
  );
};

export default Contact;
