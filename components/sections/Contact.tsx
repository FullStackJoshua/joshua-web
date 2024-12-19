"use client";
import { useState } from "react";
import React from "react";

const Contact = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    if (!formData.name || !formData.email || !formData.message) {
      alert("All fields are required!");
      return;
    }
    console.log("Form Data:", formData);
    alert("Message sent successfully!");
    setFormData({ name: "", email: "", message: "" });
  };

  return (
    <section className="bg-noiseonwhite px-5 py-16 md:px-28" id="contact">
      <h1 className="title mb-10 md:text-lgTitle">
        HAVE A PLAN? LET’S <br /> CONNECT -
      </h1>

      <div className="flex items-center justify-center">
        <form onSubmit={handleSubmit} className="w-full max-w-md content3 text-gray ">
          {/* Name Field */}
          <div className="mb-6">
            <label htmlFor="name" className="block mb-1 font-medium ">
              Name
            </label>
            <input
              type="text"
              id="name"
              name="name"
              value={formData.name}
              onChange={handleChange}
              aria-label="Name"
              className="w-full border-b border-gray-300 bg-transparent text-black focus:outline-none focus:border-black py-2 appearance-none"
            />
          </div>

          {/* Email Field */}
          <div className="mb-6">
            <label htmlFor="email" className="block mb-1  font-medium ">
              Email
            </label>
            <input
              type="email"
              id="email"
              name="email"
              value={formData.email}
              onChange={handleChange}
              aria-label="Email"
              className="w-full border-b-1 border-gray-300 bg-transparent text-black focus:outline-none focus:border-black py-2 appearance-none"
            />
          </div>

          {/* Message Field */}
          <div className="mb-6">
            <label htmlFor="message" className="block mb-1  font-medium ">
              Message
            </label>
            <textarea
              id="message"
              name="message"
              value={formData.message}
              onChange={handleChange}
              aria-label="Message"
              rows={4}
              className="w-full border-b border-gray-300 bg-transparent text-black focus:outline-none focus:border-black py-2 appearance-none resize-none"
            ></textarea>
          </div>

          {/* Submit Button */}
          <div className="flex justify-end">
            <button
              type="submit"
              className="bg-black text-white px-4 py-2 rounded hover:bg-gray-800 active:bg-gray-900 transition text-button"
            >
              Send
            </button>
          </div>
        </form>
      </div>
    </section>
  );
};

export default Contact;
