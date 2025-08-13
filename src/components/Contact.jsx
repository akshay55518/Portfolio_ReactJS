import React, { useState } from "react";
import "../css/Contact.css";

import { HiOutlineMail } from "react-icons/hi";
import { IoLocation } from "react-icons/io5";
import { FaWhatsapp, FaPhoneAlt } from "react-icons/fa";

const Contact = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Handle form submission
    console.log(formData);
  };

  return (
    <section className="contact-section" id="contact">
      <div className="container">
        <h2 className="section-title">Contact Me</h2>
        <div className="contact-container">
          <div className="contact-info">
            <div className="info-item">
              <HiOutlineMail />
              <i className="fas fa-envelope"></i>
              <a
                href="mailto:akshay.e.elayadath@gmail.com"
                className="contact-link"
              >
                Email: akshay.e.elayadath@gmail.com
              </a>
            </div>
            <div className="info-item">
              <FaPhoneAlt />
              <i className="fas fa-phone"></i>
              <a href="tel:+918075951964" className="contact-link">
                Phone: +91 8075951964
              </a>
            </div>
            <div className="info-item">
              <FaWhatsapp />
              <i className="fab fa-whatsapp"></i>
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
              <IoLocation />
              <i className="fas fa-map-marker-alt"></i>
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
          <form className="contact-form" onSubmit={handleSubmit}>
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
          </form>
        </div>
      </div>
    </section>
  );
};

export default Contact;
