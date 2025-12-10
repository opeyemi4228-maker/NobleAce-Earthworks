"use client";

import React from "react";
import { motion } from "framer-motion";
import Navbar from "@/components/Navbar";
import Footer1 from "@/components/Footer1";

const pageFade = {
  hidden: { opacity: 0, y: 12 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.5 } },
};

export default function TermsOfUsePage() {
  return (
    <div className="min-h-screen bg-gray-50 text-slate-900">
      <Navbar />

      {/* HEADER */}
      <motion.header
        initial="hidden"
        animate="visible"
        variants={pageFade}
        className="bg-white border-b py-12"
      >
        <div className="max-w-6xl mx-auto px-6 mt-10">
          <h1 className="text-3xl md:text-4xl font-bold">Terms of Use</h1>
          <p className="text-sm text-gray-600 mt-2">Last updated: 2025</p>
        </div>
      </motion.header>

      {/* PAGE CONTENT */}
      <main className="max-w-6xl mx-auto px-6 py-12 prose prose-slate lg:prose-lg">

        <section>
          <h2>Welcome to NobleAce Earthworks</h2>
          <p>
            By accessing or using our website, training platform, digital
            materials, or any services offered by NobleAce Earthworks, you agree
            to comply with these Terms of Use. If you do not agree, please
            discontinue use immediately.
          </p>
        </section>

        <section>
          <h3>1. Acceptance of Terms</h3>
          <p>
            Your use of this platform confirms you are at least 18 years old—or
            accessing it with parental/guardian consent—and legally capable of
            entering binding agreements.
          </p>
        </section>

        <section>
          <h3>2. Permitted Use of Our Services</h3>
          <ul>
            <li>
              You may use our website and training platform only for lawful,
              educational, and professional development purposes.
            </li>
            <li>
              You agree not to engage in activities that could disrupt, overload,
              or compromise platform performance or security.
            </li>
            <li>
              Reverse-engineering, copying, distributing, or exploiting any
              content without written authorization is strictly prohibited.
            </li>
          </ul>
        </section>

        <section>
          <h3>3. Intellectual Property</h3>
          <p>
            All course materials, videos, illustrations, documents, brand assets,
            graphics, and platform tools belong exclusively to NobleAce
            Earthworks and are protected under applicable copyright and
            intellectual property laws. Unauthorized use is strictly prohibited.
          </p>
        </section>

        <section>
          <h3>4. User Accounts</h3>
          <p>
            You are responsible for maintaining the confidentiality of your login
            credentials. You also agree to notify us immediately of any
            unauthorized account use. We reserve the right to suspend or
            terminate accounts violating these Terms or engaging in abusive
            conduct.
          </p>
        </section>

        <section>
          <h3>5. Payments & Refunds</h3>
          <p>
            Payments made for training, certifications, and services are subject
            to our refund policy. Refund approval is not automatic and will be
            assessed based on course engagement, access duration, and
            administrative guidelines stated at purchase.
          </p>
        </section>

        <section>
          <h3>6. Limitation of Liability</h3>
          <p>
            NobleAce Earthworks is not liable for indirect, incidental, or
            consequential damages arising from platform use, technical issues,
            third-party service failures, or decisions made based on course
            materials or tools.
          </p>
        </section>

        <section>
          <h3>7. Modifications to Terms</h3>
          <p>
            We may update or modify these Terms of Use at any time. Continued use
            of our website or training services after changes constitutes
            acceptance of the updated Terms.
          </p>
        </section>

        <section>
          <h3>8. Contact Information</h3>
          <p>
            For questions or concerns regarding these Terms, please contact us at:
            <br />
            <a href="mailto:legal@nobleace.com" className="text-sky-700">
              legal@nobleace.com
            </a>
          </p>
        </section>
      </main>

      <Footer1 />
    </div>
  );
}
