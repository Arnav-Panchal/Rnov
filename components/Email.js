"use client";
// Import Tailwind CSS classes
import React from 'react';
import { useForm, ValidationError } from '@formspree/react';

function ContactForm() {
  const [state, handleSubmit] = useForm("xzbnpkdy");

  if (state.succeeded) {
    return (
      <div className="flex items-center justify-center h-screen">
        <p className="text-teal-500 text-4xl font-bold">Thanks for joining!</p>
      </div>
    );
  }

  const customFontStyle = {
    fontFamily: 'Britannic Bold',
  };

  return (
    <section className="px-4 sm:px-8 md:px-20">
      <div>
        <h1 className="text-4xl sm:text-5xl md:text-6xl mt-20 text-center font-bold mb-14 ">Contact</h1>
      </div>
      <div className="flex items-center justify-center py-4">
        <form onSubmit={handleSubmit} className="w-full sm:w-3/4 md:w-1/2 p-4 border-2 border-gray-300 rounded-lg shadow-md transform hover:scale-105 transition-transform duration-300">
          <label htmlFor="email" className="block text-sm font-medium text-gray-600">
            Email Address
          </label>
          <input
            id="email"
            type="email"
            name="email"
            className="mt-1 p-2 w-full border rounded-md text-black"
          />
          <ValidationError
            prefix="Email"
            field="email"
            errors={state.errors}
            className="text-red-500"
          />

          <label htmlFor="message" className="block mt-4 text-sm font-medium text-gray-600">
            Message
          </label>
          <textarea
            id="message"
            name="message"
            className="mt-1 p-2 w-full border rounded-md text-black"
          />
          <ValidationError
            prefix="Message"
            field="message"
            errors={state.errors}
            className="text-red-500"
          />

          <button
            type="submit"
            disabled={state.submitting}
            className="mt-4 p-2 w-full bg-teal-500 text-white rounded-md hover:bg-teal-600 transition-all duration-300"
          >
            Submit
          </button>
        </form>
      </div>
    </section>
  );
}

export default ContactForm;
