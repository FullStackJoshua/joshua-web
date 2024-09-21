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
    <section className="px-20 py-40 bg-noiseonwhite">
      <h1 className="title pb-40">
        HAVE A PLAN? LET’S <br /> CONNECT -
      </h1>

      <form onSubmit={handleSubmit}>
        <div className="flex flex-col space-y-4">
          <div className="flex items-center space-x-4">
            <label htmlFor="name" className="text-gray">
              Name
            </label>
            <input
              type="text"
              id="name"
              name="name"
              value={formData.name}
              onChange={handleChange}
              className="border-b-2 border-gray focus:outline-none focus:border-gray px-2 py-1 bg-inherit"
              required
            />
          </div>

          <div className="flex items-center space-x-4">
            <label htmlFor="email" className="text-gray">
              Email
            </label>
            <input
              type="email"
              id="email"
              name="email"
              value={formData.email}
              onChange={handleChange}
              className="border-b-2 border-gray focus:outline-none focus:border-gray px-2 py-1 bg-inherit"
              required
            />
          </div>

          <div className="flex flex-col">
            <label htmlFor="message" className="text-gray">
              Message
            </label>
            <textarea
              id="message"
              name="message"
              value={formData.message}
              onChange={handleChange}
              className="border-b-2 border-gray focus:outline-none px-2 py-1 h-32 bg-inherit"
              required
            />
          </div>

          <button
            type="submit"
            className="text-white py-2 px-4 rounded hover:bg-gray transition-colors"
          >
            Submit
          </button>
        </div>
      </form>
    </section>
  );
};

export default Contact;
