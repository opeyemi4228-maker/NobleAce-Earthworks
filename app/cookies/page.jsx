"use client";

import React from "react";
import { motion } from "framer-motion";

export default function CookiesPolicyPage() {
  return (
    <div className="w-full min-h-screen bg-white text-gray-800">
      {/* Header Section */}
      <section className="w-full bg-gray-900 text-white py-24 px-6">
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="max-w-4xl mx-auto text-center"
        >
          <h1 className="text-4xl md:text-5xl font-bold mb-4">
            Cookies Policy
          </h1>
          <p className="text-lg md:text-xl opacity-80">
            How we use cookies to enhance your experience on our website.
          </p>
        </motion.div>
      </section>

      {/* Content Section */}
      <div className="max-w-4xl mx-auto py-16 px-6 leading-relaxed text-lg">
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.3, duration: 0.8 }}
        >
          {/* Intro */}
          <h2 className="text-2xl font-bold mb-4">1. Introduction</h2>
          <p className="mb-6">
            This Cookies Policy explains how we use cookies and similar tracking
            technologies on our website. By using our site, you consent to our
            use of cookies in accordance with this policy.
          </p>

          {/* What Are Cookies */}
          <h2 className="text-2xl font-bold mb-4">2. What Are Cookies?</h2>
          <p className="mb-6">
            Cookies are small text files placed on your device when you visit a
            website. They help enhance functionality, improve performance, and
            provide insights into how visitors engage with our content.
          </p>

          {/* Types of Cookies */}
          <h2 className="text-2xl font-bold mb-4">3. Types of Cookies We Use</h2>
          <ul className="list-disc ml-6 mb-6 space-y-3">
            <li>
              <strong>Essential Cookies:</strong> Required for core website
              functions like navigation and security.
            </li>
            <li>
              <strong>Performance Cookies:</strong> Help us analyze website
              traffic and improve user experience.
            </li>
            <li>
              <strong>Functional Cookies:</strong> Allow us to remember your
              preferences and personalize your experience.
            </li>
            <li>
              <strong>Advertising Cookies:</strong> Used to deliver relevant ads
              and measure their effectiveness (if applicable).
            </li>
          </ul>

          {/* Third Party */}
          <h2 className="text-2xl font-bold mb-4">4. Third-Party Cookies</h2>
          <p className="mb-6">
            Our website may include cookies from trusted third-party services
            such as analytics tools, advertising networks, and social media
            integrations. These providers may collect information about your
            browsing behavior.
          </p>

          {/* Managing Cookies */}
          <h2 className="text-2xl font-bold mb-4">5. Managing & Disabling Cookies</h2>
          <p className="mb-4">
            You can modify your browser settings to block or delete cookies at
            any time. However, disabling cookies may affect the functionality
            and performance of our website.
          </p>
          <p className="mb-6">
            Common browser settings paths include:
          </p>
          <ul className="list-disc ml-6 mb-6 space-y-3">
            <li>Chrome: Settings → Privacy and Security → Cookies</li>
            <li>Firefox: Options → Privacy & Security → Cookies</li>
            <li>Safari: Preferences → Privacy → Cookies</li>
            <li>Edge: Settings → Cookies and Site Permissions</li>
          </ul>

          {/* Updates */}
          <h2 className="text-2xl font-bold mb-4">6. Updates to This Policy</h2>
          <p className="mb-6">
            We may update our Cookies Policy periodically to reflect new
            practices, legal requirements, or improvements to our website. Any
            changes will be posted on this page with a revised "Last Updated"
            date.
          </p>

          {/* Contact */}
          <h2 className="text-2xl font-bold mb-4">7. Contact Us</h2>
          <p className="mb-6">
            If you have any questions about our use of cookies, please contact
            us at:
          </p>
          <p className="font-semibold">
            Email: support@nobleaceearthworks.com  
          </p>
        </motion.div>
      </div>
    </div>
  );
}
