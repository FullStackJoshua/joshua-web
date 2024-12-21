"use client";

import { useState } from "react";
import emailjs from "@emailjs/browser";

const Contact = () => {
  return (
    <section id="contact" className="bg-noiseonwhite px-7 py-20">
      <div className="container mx-auto">
        <Header />
        <ContactForm />
      </div>
    </section>
  );
};

const Header = () => (
  <h2 className="title md:text-lgTitle mb-16 md:mb-20">Have A Plan? Let&apos;s Connect -</h2>
);

const ContactForm = () => {
  const [formData, setFormData] = useState({ name: "", email: "", message: "" });
  const [submitted, setSubmitted] = useState(false);
  const [error, setError] = useState("");

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setError("");

    try {
      console.log("Sending email with:", {
        from_name: formData.name,
        to_name: "Joshua",
        message: formData.message,
      });

      const result = await emailjs.send(
        process.env.NEXT_PUBLIC_EMAILJS_SERVICE_ID!,
        process.env.NEXT_PUBLIC_EMAILJS_TEMPLATE_ID!,
        {
          from_name: formData.name,
          to_name: "Joshua",
          message: formData.message,
        },
        process.env.NEXT_PUBLIC_EMAILJS_PUBLIC_KEY!
      );

      console.log("Email sent successfully:", result);
      setSubmitted(true);
    } catch (err) {
      console.error("Failed to send email:", err);
      setError("Something went wrong. Please try again later.");
    }
  };

  return (
    <>
      {submitted ? (
        <p className="text-green-600">Your message has been sent. Thank you!</p>
      ) : (
        <form onSubmit={handleSubmit} className="md:grid md:grid-cols-12 gap-6 max-w-6xl mx-auto">
          <div className="relative border-b border-gray md:col-span-3">
            <input
              type="text"
              name="name"
              placeholder="Name"
              className="content w-full bg-transparent border-none text-lg placeholder-gray focus:outline-none focus:ring-0 md:text-lgContent"
              value={formData.name}
              onChange={handleChange}
              required
            />
          </div>

          <div className="relative border-b border-gray md:col-span-3">
            <input
              type="email"
              name="email"
              placeholder="Email"
              className="content w-full bg-transparent border-none text-lg placeholder-gray focus:outline-none focus:ring-0 md:text-lgContent"
              value={formData.email}
              onChange={handleChange}
              required
            />
          </div>

          {/* Message Field */}
          <div className="relative border-b border-gray md:col-span-6">
            <textarea
              name="message"
              placeholder="Message"
              className="content w-full bg-transparent border-none text-lg placeholder-gray focus:outline-none focus:ring-0 md:text-lgContent"
              value={formData.message}
              onChange={handleChange}
              required
            />
          </div>

          <button
            type="submit"
            className="col-span-3 mt-6 py-3 px-6 bg-black text-white rounded-md hover:bg-gray"
          >
            Send Message
          </button>
        </form>
      )}
      {error && <p className="text-red-600 mt-4">{error}</p>}
    </>
  );
};

export default Contact;
