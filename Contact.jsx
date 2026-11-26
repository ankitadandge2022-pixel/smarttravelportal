
import React, { useState } from 'react';

function Contact() {

  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    subject: '',
    message: ''
  });

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    alert('Thank you ' + formData.name +
      '! Your message has been submitted successfully.');

    setFormData({
      name: '',
      email: '',
      phone: '',
      subject: '',
      message: ''
    });
  };

  return (
    <div className="section">

      <h1>Contact Us</h1>
      <p>Have questions? We are here to help you!</p>

      <div className="contact-info">
        <h3>📍 Address</h3>
        <p>Pune, Maharashtra, India</p>

        <h3>📧 Email</h3>
        <p>support@travelgo.com</p>

        <h3>📞 Phone</h3>
        <p>+91 9876543210</p>
      </div>

      <form className="contact-form" onSubmit={handleSubmit}>

        <input
          type="text"
          name="name"
          placeholder="Enter Your Name"
          value={formData.name}
          onChange={handleChange}
          required
        />

        <input
          type="email"
          name="email"
          placeholder="Enter Your Email"
          value={formData.email}
          onChange={handleChange}
          required
        />

        <input
          type="tel"
          name="phone"
          placeholder="Enter Your Phone Number"
          value={formData.phone}
          onChange={handleChange}
          required
        />

        <input
          type="text"
          name="subject"
          placeholder="Subject"
          value={formData.subject}
          onChange={handleChange}
          required
        />

        <textarea
          name="message"
          placeholder="Write Your Message"
          value={formData.message}
          onChange={handleChange}
          required
        />

        <button type="submit" className="btn">
          Send Message
        </button>

      </form>

    </div>
  );
}

export default Contact;
