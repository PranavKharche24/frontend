import React, { useState } from 'react';

export default function ContactForm() {
  const [formData, setFormData] = useState({ name: '', email: '', message: '' });

  const handleInputChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Here you would typically send the form data to your backend
    console.log('Form submitted:', formData);
    alert('Thank you for your message!');
    setFormData({ name: '', email: '', message: '' });
  };

  return (
    <form onSubmit={handleSubmit} className="space-y-4">
      <input
        type="text"
        name="name"
        value={formData.name}
        onChange={handleInputChange}
        placeholder="Your Name"
        className="w-full border rounded px-3 py-2 transition duration-300 focus:ring-2 focus:ring-blue-300"
        required
      />
      <input
        type="email"
        name="email"
        value={formData.email}
        onChange={handleInputChange}
        placeholder="Your Email"
        className="w-full border rounded px-3 py-2 transition duration-300 focus:ring-2 focus:ring-blue-300"
        required
      />
      <textarea
        name="message"
        value={formData.message}
        onChange={handleInputChange}
        placeholder="Your Message"
        rows="4"
        className="w-full border rounded px-3 py-2 transition duration-300 focus:ring-2 focus:ring-blue-300"
        required
      ></textarea>
      <button
        type="submit"
        className="w-full bg-green-500 text-white px-4 py-2 rounded hover:bg-green-600 transition duration-300"
      >
        Send Message
      </button>
    </form>
  );
}