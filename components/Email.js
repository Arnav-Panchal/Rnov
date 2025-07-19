"use client";
// Import Tailwind CSS classes
import React from 'react';
import { useForm, ValidationError } from '@formspree/react';
import { motion } from 'framer-motion'; // Import motion

function ContactForm() {
  const [state, handleSubmit] = useForm("xzbnpkdy");

  if (state.succeeded) {
    return (
      <div className="flex items-center justify-center h-screen bg-black text-green-400 VT323"> {/* Apply terminal styling */}
        <p className="text-4xl font-bold">Message Sent Successfully!</p> {/* Updated success message */}
      </div>
    );
  }

  return (
    <section id="contact" className="py-20 px-10 text-green-400 VT323">
      <div className="max-w-2xl mx-auto">
        <motion.h2
          className="text-4xl sm:text-5xl md:text-6xl text-center font-bold mb-10 text-white"
          initial={{ opacity: 0, y: -20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          Contact Me
        </motion.h2>
        <div>
          <div className="flex items-center mb-4">
            <div className="w-3 h-3 bg-red-500 rounded-full mr-2"></div>
            <div className="w-3 h-3 bg-yellow-500 rounded-full mr-2"></div>
            <div className="w-3 h-3 bg-green-500 rounded-full"></div>
            <span className="ml-4 text-sm text-gray-400">send_message.sh</span> {/* Simulated file name */}
          </div>

          <motion.form
            onSubmit={handleSubmit}
            className="space-y-4" // Add spacing between form elements
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            <div>
              <label htmlFor="email" className="block text-sm font-medium text-gray-400">
                {`>`} Enter your email:
              </label>
              <input
                id="email"
                type="email"
                name="email"
                className="mt-1 p-2 w-full border border-gray-700 rounded-md bg-black text-green-400 placeholder-gray-600 focus:outline-none focus:border-green-400" // Terminal input styling
                placeholder="your.email@example.com"
              />
              <ValidationError
                prefix="Email"
                field="email"
                errors={state.errors}
                className="text-red-500 text-sm mt-1"
              />
            </div>

            <div>
              <label htmlFor="message" className="block text-sm font-medium text-gray-400">
                {`>`} Enter your message:
              </label>
              <textarea
                id="message"
                name="message"
                className="mt-1 p-2 w-full border border-gray-700 rounded-md bg-black text-green-400 placeholder-gray-600 focus:outline-none focus:border-green-400 h-32" // Terminal textarea styling
                placeholder="Your message here..."
              />
              <ValidationError
                prefix="Message"
                field="message"
                errors={state.errors}
                className="text-red-500 text-sm mt-1"
              />
            </div>

            <button
              type="submit"
              disabled={state.submitting}
              className="mt-6 p-3 w-full bg-green-600 text-white rounded-md hover:bg-green-700 transition-colors duration-300 font-semibold" // Terminal button styling
            >
              {state.submitting ? 'Sending...' : 'Send Message'} {/* Button text changes on submitting */}
            </button>
          </motion.form>
        </div>
      </div>
    </section>
  );
}

export default ContactForm; // Keep the original export name
