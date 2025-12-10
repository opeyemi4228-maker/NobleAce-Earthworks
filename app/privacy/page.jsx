import Navbar from "@/components/Navbar";
import Footersection from "@/components/Footer1";
import { motion } from "framer-motion";

// Animation preset
const pageFade = {
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.8 } },
};

export default function PrivacyPolicyPage() {
  return (export default function PrivacyPolicyPage() {
  return (
    <div className="min-h-screen bg-gray-50 text-slate-900 font-sans">
      <Navbar />

      <header className="bg-white border-b py-12">
        <div className="max-w-6xl mx-auto px-6">
          <h1 className="text-3xl md:text-4xl font-bold">Privacy Policy</h1>
          <p className="text-sm text-gray-600 mt-2">Last updated: 2025</p>
        </div>
      </header>

      <main className="max-w-6xl mx-auto px-6 py-12 prose prose-slate lg:prose-lg">
        <section>
          <h2>Overview</h2>
          <p>
            We respect your privacy. This policy explains what data we collect,
            how we use it, and your rights.
          </p>
        </section>

        <section>
          <h3>1. Information We Collect</h3>
          <ul>
            <li>
              <strong>Personal information:</strong> name, email, phone, address
              when you register.
            </li>
            <li>
              <strong>Account data:</strong> login, enrollment records,
              progress.
            </li>
            <li>
              <strong>Usage data:</strong> pages visited, device/browser data,
              errors and logs.
            </li>
            <li>
              <strong>Payment data:</strong> stored and processed by trusted
              payment providers.
            </li>
          </ul>
        </section>

        <section>
          <h3>2. How We Use Information</h3>
          <p>
            We use data to deliver courses, process payments, improve the
            platform, send updates, and provide certificates. We may use
            aggregated anonymized data for analytics and research.
          </p>
        </section>

        <section>
          <h3>3. Data Security</h3>
          <p>
            We implement reasonable safeguards such as encryption and access
            controls. However no system is completely secure and we cannot
            guarantee absolute protection.
          </p>
        </section>

        <section>
          <h3>4. Sharing Data</h3>
          <p>
            We do not sell personal data. We may share data with service
            providers (e.g., payment processors, analytics) and when required by
            law.
          </p>
        </section>

        <section>
          <h3>5. Cookies & Tracking</h3>
          <p>
            We use cookies and analytics to improve user experience. See our
            Cookies Policy for details and options to manage cookies.
          </p>
        </section>

        <section>
          <h3>6. Your Rights</h3>
          <p>
            You can request access, correction, or deletion of your personal
            data and opt out of marketing communications. Contact our Data
            Protection Officer at
            <a href="mailto:privacy@nobleace.com" className="text-sky-700">
              privacy@nobleace.com
            </a>
            .
          </p>
        </section>

        <section>
          <h3>7. International Transfers</h3>
          <p>
            Data may be stored or processed in countries outside your residence;
            we ensure appropriate safeguards are in place.
          </p>
        </section>

        <section>
          <h3>8. Updates</h3>
          <p>
            We may change this policy. Material changes will be posted with an
            updated date.
          </p>
        </section>
      </main>

      <Footersection />
    </div>
  );
}
