import React, { useState } from "react";
import emailjs from "@emailjs/browser";

export const ContactForm = () => {
  const [form, setForm] = useState({
    firstName: "",
    lastName: "",
    email: "",
    phone: "",
    message: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setForm((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();

   emailjs
   .send(
  process.env.REACT_APP_EMAILJS_SERVICE_ID,
  process.env.REACT_APP_EMAILJS_TEMPLATE_ID,
  form,
  process.env.REACT_APP_EMAILJS_PUBLIC_KEY
   )

      .then(
        (result) => {
          console.log("Email sent:", result.text);
          alert("Message sent successfully!");
          setForm({
            firstName: "",
            lastName: "",
            email: "",
            phone: "",
            message: "",
          });
        },
        (error) => {
          console.error("Email error:", error);
          alert("Failed to send message. Please try again.");
        }
      );
  };

  const inputClass = "p-3 bg-off rounded-md outline-none w-full";

  return (
    <form
      onSubmit={handleSubmit}
      className="max-w-3xl mx-auto px-4 py-8 mt-8 rounded-xl"
    >
      <div className="text-center mb-12">
        <h2 className="font-darker text-3xl md:text-5xl font-bold leading-snug max-w-3xl mx-auto">
          Want to contact me?
          <br /> Drop a message!
        </h2>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-6">
        <input
          type="text"
          name="firstName"
          placeholder="First Name"
          className={inputClass}
          value={form.firstName}
          onChange={handleChange}
          required
        />
        <input
          type="text"
          name="lastName"
          placeholder="Last Name"
          className={inputClass}
          value={form.lastName}
          onChange={handleChange}
          required
        />
        <input
          type="email"
          name="email"
          placeholder="Enter Email"
          className={inputClass}
          value={form.email}
          onChange={handleChange}
          required
        />
        <input
          type="tel"
          name="phone"
          placeholder="Phone Number"
          className={inputClass}
          value={form.phone}
          onChange={handleChange}
        />
      </div>

      <textarea
        name="message"
        rows="5"
        placeholder="Write your message here"
        className="w-full p-3 bg-off rounded-md outline-none mb-6"
        value={form.message}
        onChange={handleChange}
        required
      />

      <button
        type="submit"
        className="bg-navy text-white w-full py-3 rounded-full font-semibold hover:opacity-90 transition"
      >
        Send
      </button>
    </form>
  );
};
