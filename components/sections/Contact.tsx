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
    console.log("Form Data:", formData);
  };

  return (
    <section className="px-20 py-40 bg-noiseonwhite" id="contact">
      <h1 className="title text-black text-6xl pb-20">
        HAVE A PLAN? LET’S <br /> CONNECT -
      </h1>

      <form onSubmit={handleSubmit} className="grid grid-cols-3 gap-8">
        {/* Name Field */}
        <div className="flex flex-col">
          <label htmlFor="name" className="text-gray text-lg pb-2">
            Name
          </label>
          <input
            type="text"
            id="name"
            name="name"
            value={formData.name}
            onChange={handleChange}
            className="border-b-2 border-gray focus:outline-none focus:border-black px-2 py-1 text-xl bg-transparent"
            required
          />
        </div>

        {/* Email Field */}
        <div className="flex flex-col">
          <label htmlFor="email" className="text-gray text-lg pb-2">
            Email
          </label>
          <input
            type="email"
            id="email"
            name="email"
            value={formData.email}
            onChange={handleChange}
            className="border-b-2 border-gray focus:outline-none focus:border-black px-2 py-1 text-xl bg-transparent"
            required
          />
        </div>

        {/* Message Field */}
        <div className="flex flex-col col-span-2">
          <label htmlFor="message" className="text-gray text-lg pb-2">
            Message
          </label>
          <textarea
            id="message"
            name="message"
            value={formData.message}
            onChange={handleChange}
            className="border-b-2 border-gray focus:outline-none focus:border-black px-2 py-1 text-xl bg-transparent h-32"
            required
          />
        </div>

        {/* Submit Button */}
        <div className="col-span-3 mt-6">
          <button
            type="submit"
            className="py-2 px-6 bg-black text-white text-lg font-semibold rounded hover:bg-gray800 transition-colors"
          >
            Submit
          </button>
        </div>
      </form>
    </section>
  );
};

export default Contact;
