import { useState, useRef } from "react";
import { motion } from "framer-motion";
import emailjs from "@emailjs/browser";

import { styles } from "../styles";
import { EarthCanvas } from "./canvas";
import LazyMount from "./LazyMount";
import Icon from "./Icons";
import { SectionWrapper } from "../hoc";
import { slideIn } from "../utils/motion";
import { profile } from "../constants";

// Vite only exposes variables prefixed with VITE_ (see .env.example)
const SERVICE_ID = import.meta.env.VITE_EMAILJS_SERVICE_ID;
const TEMPLATE_ID = import.meta.env.VITE_EMAILJS_TEMPLATE_ID;
const PUBLIC_KEY = import.meta.env.VITE_EMAILJS_PUBLIC_KEY;

const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

const inputClass =
  "bg-tertiary py-4 px-6 placeholder:text-secondary text-white rounded-lg outline-none border border-transparent focus:border-[#915eff] transition-colors";

const contactLinks = [
  { label: "Email", value: profile.email, href: `mailto:${profile.email}`, icon: "mail" },
  { label: "LinkedIn", value: "Connect with me", href: profile.linkedin, icon: "linkedin" },
  { label: "GitHub", value: "Browse my code", href: profile.github, icon: "github" },
  { label: "Resume", value: "View / download", href: profile.resume, icon: "file" },
];

const Contact = () => {
  const formRef = useRef();
  const [form, setForm] = useState({ name: "", email: "", message: "" });
  const [errors, setErrors] = useState({});
  const [status, setStatus] = useState("idle"); // idle | sending | success | error | fallback
  const [copied, setCopied] = useState(false);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setForm((prev) => ({ ...prev, [name]: value }));
    setErrors((prev) => ({ ...prev, [name]: undefined }));
  };

  const validate = () => {
    const next = {};
    if (!form.name.trim()) next.name = "Please tell me your name.";
    if (!emailRegex.test(form.email.trim())) next.email = "Enter a valid email address.";
    if (form.message.trim().length < 10) next.message = "Message should be at least 10 characters.";
    setErrors(next);
    return Object.keys(next).length === 0;
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!validate()) return;

    // If EmailJS isn't configured yet, fall back to the visitor's mail app
    if (!SERVICE_ID || !TEMPLATE_ID || !PUBLIC_KEY) {
      const subject = encodeURIComponent(`Portfolio message from ${form.name}`);
      const body = encodeURIComponent(`${form.message}\n\n- ${form.name} (${form.email})`);
      window.location.href = `mailto:${profile.email}?subject=${subject}&body=${body}`;
      setStatus("fallback");
      return;
    }

    setStatus("sending");
    emailjs
      .send(
        SERVICE_ID,
        TEMPLATE_ID,
        {
          from_name: form.name,
          to_name: profile.name,
          from_email: form.email,
          to_email: profile.email,
          message: form.message,
        },
        PUBLIC_KEY
      )
      .then(
        () => {
          setStatus("success");
          setForm({ name: "", email: "", message: "" });
        },
        (error) => {
          console.error(error);
          setStatus("error");
        }
      );
  };

  const copyEmail = async () => {
    try {
      await navigator.clipboard.writeText(profile.email);
      setCopied(true);
      setTimeout(() => setCopied(false), 2000);
    } catch {
      /* clipboard unavailable - ignore */
    }
  };

  return (
    <div className="xl:mt-12 xl:flex-row flex-col-reverse flex gap-10 overflow-hidden">
      <motion.div
        variants={slideIn("left", "tween", 0.5, 1)}
        className="flex-[0.75] bg-black-100 p-8 rounded-2xl"
      >
        <p className={styles.sectionSubText}>Get in touch</p>
        <h3 className={styles.sectionHeadText}>Contact</h3>
        <p className="mt-3 text-secondary text-[15px] leading-[26px]">
          Have a project, an internship opportunity, or just want to say hi? My inbox is open.
        </p>

        <div className="mt-8 grid grid-cols-1 sm:grid-cols-2 gap-3">
          {contactLinks.map((item) => (
            <a
              key={item.label}
              href={item.href}
              target={item.href.startsWith("mailto:") ? undefined : "_blank"}
              rel="noopener noreferrer"
              className="flex items-center gap-3 bg-tertiary rounded-xl p-4 border border-white/5 hover:border-[#915eff] transition-colors"
            >
              <span className="w-10 h-10 shrink-0 rounded-full bg-black-200 flex items-center justify-center text-[#915eff]">
                <Icon name={item.icon} />
              </span>
              <span className="min-w-0">
                <span className="block text-white text-[14px] font-semibold">{item.label}</span>
                <span className="block text-secondary text-[12px] truncate">{item.value}</span>
              </span>
            </a>
          ))}
        </div>

        <button
          type="button"
          onClick={copyEmail}
          className="mt-3 text-[13px] text-secondary hover:text-white transition-colors"
        >
          {copied ? "Email copied!" : "Copy my email address"}
        </button>

        <form ref={formRef} onSubmit={handleSubmit} noValidate className="mt-8 flex flex-col gap-6">
          <label className="flex flex-col">
            <span className="text-white font-medium mb-3">Your name</span>
            <input
              type="text"
              name="name"
              value={form.name}
              onChange={handleChange}
              placeholder="What's your name?"
              autoComplete="name"
              className={inputClass}
            />
            {errors.name && <span className="text-red-400 text-[13px] mt-2">{errors.name}</span>}
          </label>

          <label className="flex flex-col">
            <span className="text-white font-medium mb-3">Your email</span>
            <input
              type="email"
              name="email"
              value={form.email}
              onChange={handleChange}
              placeholder="What's your email?"
              autoComplete="email"
              className={inputClass}
            />
            {errors.email && <span className="text-red-400 text-[13px] mt-2">{errors.email}</span>}
          </label>

          <label className="flex flex-col">
            <span className="text-white font-medium mb-3">Message</span>
            <textarea
              rows={6}
              name="message"
              value={form.message}
              onChange={handleChange}
              placeholder="What do you want to say?"
              className={inputClass}
            />
            {errors.message && (
              <span className="text-red-400 text-[13px] mt-2">{errors.message}</span>
            )}
          </label>

          <div className="flex flex-wrap items-center gap-4">
            <button
              type="submit"
              disabled={status === "sending"}
              className="bg-[#915eff] py-3 px-8 outline-none w-fit text-white font-bold shadow-md shadow-primary rounded-xl disabled:opacity-60 hover:brightness-110 transition"
            >
              {status === "sending" ? "Sending..." : "Send"}
            </button>

            <p role="status" aria-live="polite" className="text-[14px]">
              {status === "success" && (
                <span className="text-green-400">Thank you! I'll get back to you soon.</span>
              )}
              {status === "error" && (
                <span className="text-red-400">
                  Something went wrong. Please try again or email me directly.
                </span>
              )}
              {status === "fallback" && (
                <span className="text-secondary">Opening your email app...</span>
              )}
            </p>
          </div>
        </form>
      </motion.div>

      <motion.div
        variants={slideIn("right", "tween", 0.2, 1)}
        className="xl:flex-1 xl:h-auto md:h-[550px] h-[350px]"
      >
        <LazyMount className="w-full h-full">
          <EarthCanvas />
        </LazyMount>
      </motion.div>
    </div>
  );
};

export default SectionWrapper(Contact, "contact");
