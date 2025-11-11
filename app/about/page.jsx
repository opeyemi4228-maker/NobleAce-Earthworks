'use client';
import React from "react";
import { motion } from "framer-motion";
import Navbar from "@/components/Navbar";
import Footersection from "@/components/Footer1";

const fadeInUp = {
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.8 } },
};

export default function AboutPage() {
  return (
    <div className="bg-white text-gray-900 min-h-screen font-sans">
      <Navbar />

      {/* Hero Section */}
      <section className="mt-8 mb-10 px-4 sm:px-6">
        <div className="rounded-2xl overflow-hidden shadow-lg relative">
          <img
            src="https://images.unsplash.com/photo-1596477602103-b74d9b6b69b1?auto=format&fit=crop&w=1200&q=80"
            alt="NobleAce Earthworks Mining Operation"
            className="w-full h-56 md:h-72 lg:h-96 object-cover"
            loading="lazy"
          />
          <div className="absolute inset-0 bg-black bg-opacity-40 flex flex-col justify-end p-6 md:p-8">
            <motion.h1
              className="text-2xl md:text-3xl lg:text-4xl font-bold text-white mb-2"
              initial={{ opacity: 0, y: -20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
            >
              About NobleAce Earthworks
            </motion.h1>
            <motion.h2
              className="text-base md:text-lg lg:text-xl text-white font-medium"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 1, delay: 0.3 }}
            >
              Engineering sustainability. Redefining mining for a greener future.
            </motion.h2>
          </div>
        </div>
      </section>

      {/* Introduction Section */}
      <motion.section
        className="max-w-5xl mx-auto mb-10 px-4 sm:px-6 md:px-8 grid grid-cols-1 md:grid-cols-3 gap-8 font-light text-[16px] md:text-[18px] text-slate-700"
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
        variants={fadeInUp}
      >
        <div>
          <p>
            NobleAce Earthworks is a multidisciplinary mining and geoscience company driving responsible resource exploration, sustainable extraction, and environmental restoration. We combine innovation, engineering excellence, and social commitment to build a brighter, greener future for communities and ecosystems alike.
          </p>
        </div>
        <div>
          <p>
            Our mission is to unlock Africa’s geological potential while safeguarding the environment. Leveraging advanced mining technology, clean energy solutions, and eco-conscious excavation methods, we minimize our carbon footprint and ensure stable, lasting landscapes across every project.
          </p>
        </div>
        <div>
          <p>
            For our clients, NobleAce delivers reliability and measurable results. For communities, we create infrastructure and opportunities. And for the planet, we ensure that each project contributes to a cleaner, safer, and more sustainable world.
          </p>
        </div>
      </motion.section>

      {/* Statistics Section */}
      <motion.section
        className="bg-gray-100 py-10 mb-10"
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
        variants={fadeInUp}
      >
        <div className="max-w-5xl mx-auto px-4 sm:px-6 md:px-8 gap-8">
          <h2 className="text-xl md:text-2xl lg:text-3xl font-medium text-slate-700 mb-1">
            NobleAce at a Glance
          </h2>
          <p className="text-gray-700 mb-12">
            Empowering Progress. Preserving the Planet. Building with Purpose.
          </p>
        </div>
        <div className="max-w-5xl mx-auto px-4 sm:px-6 md:px-8 grid grid-cols-1 md:grid-cols-3 gap-8 text-left">
          <div>
            <div className="text-3xl md:text-5xl text-sky-800 mb-3 font-medium">
              25+ years of expertise
            </div>
            <div className="text-gray-700 text-base md:text-lg border-b-slate-300 border-b-2 pb-12 md:pb-16 font-thin">
              With decades of experience, we’ve become a trusted leader in geological surveying, excavation, and mineral resource management across West Africa.
            </div>
          </div>
          <div>
            <div className="text-3xl md:text-5xl text-sky-800 mb-3 font-medium">
              500+ professionals
            </div>
            <div className="text-gray-700 text-base md:text-lg border-b-slate-300 border-b-2 pb-12 md:pb-16 font-thin">
              Our team of geologists, engineers, and sustainability experts drive innovative mining solutions that balance growth with environmental stewardship and community engagement.
            </div>
          </div>
          <div>
            <div className="text-3xl md:text-5xl text-sky-800 mb-3 font-medium">
              12 major projects
            </div>
            <div className="text-gray-700 text-base md:text-lg border-b-slate-300 border-b-2 pb-10 md:pb-16 font-thin">
              From mineral exploration to earthworks and reclamation, we’ve executed large-scale projects in Nigeria and beyond — setting benchmarks in safe and eco-conscious mining.
            </div>
          </div>
        </div>
      </motion.section>

      {/* Our Perspective Section */}
      <motion.section
        className="max-w-5xl mx-auto px-4 sm:px-6 md:px-8 lg:px-12 mb-16"
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
        variants={fadeInUp}
      >
        <div className="text-3xl md:text-4xl lg:text-5xl font-normal text-slate-800 tracking-wide mb-8 md:mb-10">
          Our Perspective
        </div>
        <div className="text-gray-700 text-base md:text-[18px] font-thin leading-relaxed">
          Mining today is more than extraction — it’s about innovation, rehabilitation, and sustainable transformation. At NobleAce Earthworks, we lead with purpose: delivering solutions that fuel economies, create jobs, and protect biodiversity.
          <br /><br />
          By embracing smart technologies, renewable energy integration, and community-centered practices, we ensure every project enhances life above and below ground.
          <br /><br />
          Our aim is clear: responsible mining that meets global standards while restoring and enriching the Earth for generations to come.
        </div>
      </motion.section>

      {/* Detailed Info Sections */}
      <motion.section
        className="py-10 mb-10 px-4 sm:px-6 md:px-8 bg-gray-100"
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
        variants={fadeInUp}
      >
        <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-8 my-12">
          <div>
            <h3 className="font-light text-3xl md:text-5xl tracking-wider mb-8 md:mb-10">Where We’re Going</h3>
            <p className="font-thin text-base md:text-lg text-gray-700 leading-relaxed">
              We envision a future where mining drives sustainable development — not environmental harm. NobleAce invests in renewable-powered excavation systems, advanced geotechnical mapping, and AI-driven predictive models to minimize waste and maximize precision.
              <br /><br />
              Our focus includes expanding sustainable quarrying, low-impact drilling, and partnerships that strengthen Africa’s position in the global green-mineral economy.
            </p>
          </div>
          <div>
            <p className="font-thin text-base md:text-lg text-gray-700 leading-relaxed">
              We are also investing in human capital — training geologists, technicians, and community workers to build lasting local expertise.
              <br /><br />
              Our research explores circular economy models, land reclamation techniques, and renewable integration for mining operations, enhancing resilience and long-term value creation.
              <br /><br />
              From engineering mega-projects to rehabilitating post-mining environments, NobleAce Earthworks innovates and delivers — turning mining into a catalyst for sustainable progress.
            </p>
          </div>
        </div>

        <div className="max-w-5xl mx-auto px-4 sm:px-6 md:px-8">
          <h3 className="text-3xl md:text-4xl text-slate-800 tracking-wide mb-4 font-normal">
            Our History
          </h3>
          <h3 className="text-xl md:text-2xl mb-4 font-light">
            Built on Discovery. Defined by Integrity.
          </h3>
          <p className="text-gray-700 mb-6 leading-relaxed">
            Starting as a small geological survey team two decades ago, we’ve evolved into a full-scale earthworks and mining enterprise. Exploration, innovation, and respect for the Earth guide every project.
            <br /><br />
            From mapping mineral deposits to pioneering sustainable excavation, NobleAce Earthworks embodies trust, transparency, and transformation in Africa’s mining industry.
          </p>
          <div className="text-right">
            <a
              href="#"
              className="text-blue-600 hover:underline font-semibold"
            >
              Learn more about our story →
            </a>
          </div>
        </div>
      </motion.section>

      <Footersection />
    </div>
  );
}
