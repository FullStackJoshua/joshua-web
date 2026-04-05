"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import NoiseBackground from "../NoiseBackground";
import SplitText from "@/TextAnimations/SplitText";

const Contact = () => {
  return (
    <NoiseBackground mode="light" intensity={0.1}>
      <section id="contact" className="px-7 py-10 md:py-20">
        <div className="container mx-auto">
          <Header />
          <ContactForm />
        </div>
      </section>
    </NoiseBackground>
  );
};

const Header = () => (
  <div className="heading md:text-lgHeading mb-10 md:mb-20">
    <SplitText text="Great things can happen" />
    <SplitText text={' with a simple "Hello!"'} />
  </div>
);

const ContactForm = () => {
  const [formData, setFormData] = useState({ name: "", email: "", message: "" });
  const [submitted, setSubmitted] = useState(false);
  const [sending, setSending] = useState(false);
  const [error, setError] = useState("");

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setError("");
    setSending(true);

    try {
      const response = await fetch("/api/send-email", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          name: formData.name,
          email: formData.email,
          message: formData.message,
        }),
      });

      const data = await response.json();

      if (!response.ok || !data.success) {
        throw new Error(data.error || "Failed to send message.");
      }

      setSubmitted(true);
    } catch (err) {
      console.error("Failed to send email:", err);
      setError(
        err instanceof Error ? err.message : "Something went wrong. Please try again later."
      );
    } finally {
      setSending(false);
    }
  };

  return (
    <>
      <AnimatePresence mode="wait">
        {submitted ? (
          <motion.p
            key="success"
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: 20 }}
            className="text-green-600 text-center text-xl"
          >
            Your message has been sent. Thank you!
          </motion.p>
        ) : (
          <motion.form
            key="form"
            onSubmit={handleSubmit}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            className="md:grid md:grid-cols-12 gap-6 mx-auto"
          >
            <div className="relative border-b border-gray md:col-span-3">
              <label htmlFor="contact-name" className="sr-only">
                Name
              </label>
              <input
                id="contact-name"
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
              <label htmlFor="contact-email" className="sr-only">
                Email
              </label>
              <input
                id="contact-email"
                type="email"
                name="email"
                placeholder="Email"
                className="content w-full bg-transparent border-none text-lg placeholder-gray focus:outline-none focus:ring-0 md:text-lgContent"
                value={formData.email}
                onChange={handleChange}
                required
              />
            </div>

            <div className="relative border-b border-gray md:col-span-6">
              <label htmlFor="contact-message" className="sr-only">
                Message
              </label>
              <textarea
                id="contact-message"
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
              disabled={sending}
              className="col-span-3 mt-6 py-3 px-6 bg-black text-white rounded-md hover:bg-gray disabled:opacity-50 disabled:cursor-not-allowed transition"
            >
              {sending ? "Sending..." : "Send Message"}
            </button>
          </motion.form>
        )}
      </AnimatePresence>

      <AnimatePresence>
        {error && (
          <motion.p
            key="error"
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: 20 }}
            className="text-red-600 mt-4 text-center"
          >
            {error}
          </motion.p>
        )}
      </AnimatePresence>
    </>
  );
};

export default Contact;
