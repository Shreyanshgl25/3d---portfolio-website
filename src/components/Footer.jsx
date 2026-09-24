import { profile, navLinks } from "../constants";
import Icon from "./Icons";

const socials = [
  { name: "GitHub", icon: "github", href: profile.github },
  { name: "LinkedIn", icon: "linkedin", href: profile.linkedin },
  { name: "Email", icon: "mail", href: `mailto:${profile.email}` },
];

const Footer = () => {
  return (
    <footer className="relative z-10 border-t border-white/10 bg-primary/70 backdrop-blur-sm">
      <div className="max-w-7xl mx-auto sm:px-16 px-6 py-8 flex flex-col md:flex-row items-center justify-between gap-6">
        <div className="text-center md:text-left">
          <p className="text-white font-bold">{profile.name}</p>
          <p className="text-secondary text-[13px] mt-1">
            &copy; {new Date().getFullYear()} All rights reserved. Built with React, Three.js &amp; Tailwind.
          </p>
        </div>

        <ul className="flex flex-wrap justify-center gap-x-6 gap-y-2 text-[14px] text-secondary">
          {navLinks.map((link) => (
            <li key={link.id}>
              <a href={`#${link.id}`} className="hover:text-white transition-colors">
                {link.title}
              </a>
            </li>
          ))}
        </ul>

        <div className="flex gap-3">
          {socials.map((s) => (
            <a
              key={s.name}
              href={s.href}
              target="_blank"
              rel="noopener noreferrer"
              aria-label={s.name}
              className="w-10 h-10 rounded-full bg-tertiary flex items-center justify-center text-secondary hover:text-white hover:bg-[#915eff] transition-colors"
            >
              <Icon name={s.icon} />
            </a>
          ))}
        </div>
      </div>
    </footer>
  );
};

export default Footer;
