import React, { useEffect, useState } from "react";
import { motion } from "framer-motion";
import { Mail, Phone, MapPin, Truck, Clock, Shield, ArrowRight } from "lucide-react";

/**
 * ARZU LLC — Single‑file React site (Tailwind)
 * -------------------------------------------------
 * Updated UI with a fresh logo and modernized styling.
 */

const COMPANY_INFO = {
  name: "Arzu LLC",
  tagline: "Owner‑Operator • Reliable • On‑Time",
  phone: "+1 (555) 555‑1212", // TODO: replace with real number
  phoneHref: "tel:+15555551212",
  email: "dispatch@arzullc.com",
  emailHref: "mailto:dispatch@arzullc.com",
  location: "Utah, USA",
  dot: "DOT # —",
  mc: "MC # —",
};

const services = [
  {
    title: "Long‑Haul Freight",
    desc: "Coast‑to‑coast coverage with a focus on safe, punctual delivery.",
    icon: Truck,
  },
  {
    title: "Regional & Dedicated",
    desc: "Consistent lanes across the Mountain West and surrounding states.",
    icon: Clock,
  },
  {
    title: "Safety‑First & Insured",
    desc: "Clean record, professional standards, and transparent communication.",
    icon: Shield,
  },
];

const testimonials = [
  {
    quote:
      "Arzu LLC delivered ahead of schedule and kept us updated the whole trip.",
    author: "Logistics Manager, Salt Lake City",
  },
  {
    quote:
      "Professional, reliable, and easy to work with. Will book again.",
    author: "Operations Lead, Denver",
  },
];

const statTargets = [
  { label: "On‑Time Rate", value: 99, suffix: "%" },
  { label: "Miles Driven", value: 500000, suffix: "+" },
  { label: "Years Experience", value: 10, suffix: "+" },
];

function useCounter(target, duration = 1500) {
  const [count, setCount] = useState(0);
  useEffect(() => {
    let start;
    const step = (ts) => {
      if (!start) start = ts;
      const p = Math.min((ts - start) / duration, 1);
      setCount(Math.floor(p * target));
      if (p < 1) requestAnimationFrame(step);
    };
    const id = requestAnimationFrame(step);
    return () => cancelAnimationFrame(id);
  }, [target, duration]);
  return count;
}

function Stat({ label, value, suffix }) {
  const c = useCounter(value);
  return (
    <div className="text-center p-6 rounded-3xl bg-white/5 backdrop-blur border border-white/10">
      <div className="text-4xl font-extrabold tracking-tight">
        {c.toLocaleString()} {suffix}
      </div>
      <div className="text-sm opacity-80 mt-1">{label}</div>
    </div>
  );
}

function Logo({ className = "" }) {
  return (
    <svg
      viewBox="0 0 100 60"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className={className}
    >
      <defs>
        <linearGradient id="logoGradient" x1="0" x2="100" y1="0" y2="60" gradientUnits="userSpaceOnUse">
          <stop stopColor="#3b82f6" />
          <stop offset="1" stopColor="#06b6d4" />
        </linearGradient>
      </defs>
      <path d="M5 40h55V15H5z" fill="url(#logoGradient)" />
      <path d="M60 40h20l10-10V25H60z" fill="url(#logoGradient)" />
      <circle cx="25" cy="40" r="7" fill="white" />
      <circle cx="55" cy="40" r="7" fill="white" />
      <circle cx="80" cy="40" r="7" fill="white" />
    </svg>
  );
}

function Nav() {
  const scrollTo = (id) => {
    const el = document.getElementById(id);
    if (el) el.scrollIntoView({ behavior: "smooth", block: "start" });
  };
  return (
    <div className="sticky top-0 z-40 backdrop-blur bg-slate-900/70 border-b border-white/10">
      <div className="mx-auto max-w-7xl px-4 py-3 flex items-center justify-between">
        <div className="flex items-center gap-2">
          <Logo className="w-8 h-8" />
          <span className="font-semibold text-lg tracking-tight">
            {COMPANY_INFO.name}
          </span>
        </div>
        <div className="hidden md:flex items-center gap-6 text-sm">
          <button onClick={() => scrollTo("services")} className="hover:text-blue-300">
            Services
          </button>
          <button onClick={() => scrollTo("about")} className="hover:text-blue-300">
            About
          </button>
          <button onClick={() => scrollTo("reviews")} className="hover:text-blue-300">
            Reviews
          </button>
          <button onClick={() => scrollTo("contact")} className="hover:text-blue-300">
            Contact
          </button>
        </div>
        <a
          href={COMPANY_INFO.phoneHref}
          className="inline-flex items-center gap-2 rounded-xl px-4 py-2 bg-gradient-to-r from-blue-600 to-cyan-500 hover:from-blue-500 hover:to-cyan-400 transition"
        >
          <Phone className="w-4 h-4" /> Call Now
        </a>
      </div>
    </div>
  );
}

function Hero() {
  return (
    <section className="relative overflow-hidden bg-gradient-to-b from-slate-900 to-slate-950">
      <div
        className="absolute inset-0 opacity-20"
        style={{
          backgroundImage:
            "url(https://images.unsplash.com/photo-1558684483-9972caa55ebf?q=80&w=2070&auto=format&fit=crop)",
          backgroundSize: "cover",
          backgroundPosition: "center",
        }}
      />
      <div className="relative mx-auto max-w-7xl px-4 py-28 md:py-36">
        <Logo className="w-16 h-16" />
        <motion.h1
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-4xl md:text-6xl font-extrabold leading-tight"
        >
          {COMPANY_INFO.name}
        </motion.h1>
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.1 }}
          className="mt-4 text-lg md:text-xl max-w-2xl opacity-90"
        >
          {COMPANY_INFO.tagline}
        </motion.p>
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.2 }}
          className="mt-8 flex flex-col sm:flex-row gap-4"
        >
          <a
            href={COMPANY_INFO.phoneHref}
            className="inline-flex items-center justify-center gap-2 rounded-xl px-6 py-3 bg-gradient-to-r from-blue-600 to-cyan-500 hover:from-blue-500 hover:to-cyan-400 transition text-lg font-semibold"
          >
            <Phone className="w-5 h-5" /> Call {COMPANY_INFO.phone}
          </a>
          <a
            href={COMPANY_INFO.emailHref}
            className="inline-flex items-center justify-center gap-2 rounded-xl px-6 py-3 bg-white/10 hover:bg-white/20 transition"
          >
            <Mail className="w-5 h-5" /> Email Dispatch
          </a>
        </motion.div>
        <div className="mt-10 grid grid-cols-1 sm:grid-cols-3 gap-4">
          {statTargets.map((s) => (
            <Stat key={s.label} label={s.label} value={s.value} suffix={s.suffix} />
          ))}
        </div>
        <div className="mt-6 text-sm opacity-75">
          <span>{COMPANY_INFO.location}</span>
          <span className="mx-2">•</span>
          <span>{COMPANY_INFO.dot}</span>
          <span className="mx-2">•</span>
          <span>{COMPANY_INFO.mc}</span>
        </div>
      </div>
      <div className="absolute inset-x-0 bottom-0 h-24 bg-gradient-to-t from-slate-950 to-transparent" />
    </section>
  );
}

function Services() {
  return (
    <section id="services" className="bg-slate-950">
      <div className="mx-auto max-w-7xl px-4 py-20">
        <h2 className="text-3xl md:text-4xl font-bold">Services</h2>
        <p className="mt-2 opacity-80 max-w-2xl">
          Owner‑operator service with direct communication — no middlemen.
          Transparent ETAs and careful handling of your freight.
        </p>
        <div className="mt-10 grid grid-cols-1 md:grid-cols-3 gap-6">
          {services.map((s) => (
            <div
              key={s.title}
              className="p-6 rounded-3xl border border-white/10 bg-white/5 backdrop-blur hover:bg-white/10 transition"
            >
              <s.icon className="w-8 h-8" />
              <h3 className="mt-4 text-xl font-semibold">{s.title}</h3>
              <p className="mt-2 opacity-80">{s.desc}</p>
            </div>
          ))}
        </div>
        <div className="mt-10">
          <a
            href={COMPANY_INFO.emailHref}
            className="inline-flex items-center gap-2 rounded-xl px-6 py-3 bg-gradient-to-r from-blue-600 to-cyan-500 hover:from-blue-500 hover:to-cyan-400 transition font-semibold"
          >
            Request a Quote <ArrowRight className="w-4 h-4" />
          </a>
        </div>
      </div>
    </section>
  );
}

function About() {
  return (
    <section id="about" className="bg-slate-950">
      <div className="mx-auto max-w-7xl px-4 py-20 grid md:grid-cols-2 gap-10 items-center">
        <div>
          <h2 className="text-3xl md:text-4xl font-bold">
            About the Owner‑Operator
          </h2>
          <p className="mt-4 opacity-80">
            Arzu LLC is a family‑run, single‑truck operation focused on safety,
            care, and consistent communication. You work directly with the
            driver — no dispatch layers, no confusion.
          </p>
          <ul className="mt-6 space-y-3 opacity-90">
            <li>• Clean safety record</li>
            <li>• Fully insured</li>
            <li>• Flexible to your lane and schedule needs</li>
            <li>• Transparent pricing</li>
          </ul>
          <div className="mt-8 flex flex-wrap gap-3 text-sm opacity-80">
            <span className="inline-flex items-center gap-2 px-3 py-1 rounded-full border border-white/10 bg-white/5">
              <Shield className="w-4 h-4" />Safety First
            </span>
            <span className="inline-flex items-center gap-2 px-3 py-1 rounded-full border border-white/10 bg-white/5">
              <Clock className="w-4 h-4" />On‑Time
            </span>
            <span className="inline-flex items-center gap-2 px-3 py-1 rounded-full border border-white/10 bg-white/5">
              <Truck className="w-4 h-4" />Owner‑Operator
            </span>
          </div>
        </div>
        <div className="relative rounded-2xl overflow-hidden border border-white/10 shadow-xl">
          <img
            alt="Arzu LLC Truck"
            className="w-full h-full object-cover"
            src="https://images.unsplash.com/photo-1608553698330-cd4720b3d9c6?q=80&w=2070&auto=format&fit=crop"
          />
          <div className="absolute bottom-0 inset-x-0 p-4 bg-gradient-to-t from-black/60 to-transparent text-sm">
            <div className="flex items-center gap-2">
              <MapPin className="w-4 h-4" /> Mountain West
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

function Reviews() {
  return (
    <section id="reviews" className="bg-slate-950">
      <div className="mx-auto max-w-7xl px-4 py-20">
        <h2 className="text-3xl md:text-4xl font-bold">What Clients Say</h2>
        <div className="mt-10 grid grid-cols-1 md:grid-cols-2 gap-6">
          {testimonials.map((t, i) => (
            <div key={i} className="p-6 rounded-3xl border border-white/10 bg-white/5">
              <p className="text-lg">“{t.quote}”</p>
              <div className="opacity-80 mt-3">— {t.author}</div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

function Contact() {
  return (
    <section id="contact" className="bg-slate-950">
      <div className="mx-auto max-w-7xl px-4 py-20">
        <h2 className="text-3xl md:text-4xl font-bold">Get in Touch</h2>
        <p className="mt-2 opacity-80 max-w-2xl">
          Tell us about your lane, pickup, and drop‑off windows. We’ll respond
          quickly.
        </p>
        <div className="mt-8 grid md:grid-cols-3 gap-6">
          <a
            href={COMPANY_INFO.phoneHref}
            className="p-6 rounded-3xl border border-white/10 bg-white/5 flex items-start gap-3 hover:bg-white/10 transition"
          >
            <Phone className="w-5 h-5 mt-1" />
            <div>
              <div className="font-semibold">Phone</div>
              <div className="opacity-80">{COMPANY_INFO.phone}</div>
            </div>
          </a>
          <a
            href={COMPANY_INFO.emailHref}
            className="p-6 rounded-3xl border border-white/10 bg-white/5 flex items-start gap-3 hover:bg-white/10 transition"
          >
            <Mail className="w-5 h-5 mt-1" />
            <div>
              <div className="font-semibold">Email</div>
              <div className="opacity-80">{COMPANY_INFO.email}</div>
            </div>
          </a>
          <div className="p-6 rounded-3xl border border-white/10 bg-white/5 flex items-start gap-3">
            <MapPin className="w-5 h-5 mt-1" />
            <div>
              <div className="font-semibold">Based In</div>
              <div className="opacity-80">{COMPANY_INFO.location}</div>
            </div>
          </div>
        </div>
        <div className="mt-10">
          <a
            href={COMPANY_INFO.emailHref}
            className="inline-flex items-center gap-2 rounded-xl px-6 py-3 bg-gradient-to-r from-blue-600 to-cyan-500 hover:from-blue-500 hover:to-cyan-400 transition font-semibold"
          >
            Email Dispatch <ArrowRight className="w-4 h-4" />
          </a>
        </div>
      </div>
    </section>
  );
}

function Footer() {
  return (
    <footer className="bg-slate-950 border-t border-white/10">
      <div className="mx-auto max-w-7xl px-4 py-10 text-sm opacity-80 flex flex-col md:flex-row items-center justify-between gap-4">
        <div>
          © {new Date().getFullYear()} {COMPANY_INFO.name}. All rights reserved.
        </div>
        <div className="flex items-center gap-4">
          <span>{COMPANY_INFO.dot}</span>
          <span>•</span>
          <span>{COMPANY_INFO.mc}</span>
        </div>
      </div>
    </footer>
  );
}

export default function ArzuSite() {
  useEffect(() => {
    document.title = `${COMPANY_INFO.name} — Reliable Trucking Services`;
  }, []);

  return (
    <div className="min-h-screen text-white bg-slate-900 font-sans">
      <Nav />
      <Hero />
      <Services />
      <About />
      <Reviews />
      <Contact />
      <Footer />
    </div>
  );
}

