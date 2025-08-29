import React from "react";
import {
  Github,
  Linkedin,
  Twitter,
  Mail,
  Phone,
  MapPin,
} from "lucide-react";
import Logo from "@/components/Logo";

const nav = [
  { label: "Home", href: "#" },
  { label: "Projects", href: "#" },
  { label: "Services", href: "#" },
  { label: "About", href: "#" },
  { label: "Contact", href: "#" },
];

const socials = [
  { label: "GitHub", href: "https://github.com/", icon: Github },
  { label: "LinkedIn", href: "https://linkedin.com/", icon: Linkedin },
  { label: "Twitter/X", href: "https://x.com/", icon: Twitter },
];

const Footer = () => {
  const year = new Date().getFullYear();

  return (
    <footer className="border-t m bg-gray-950 border-neutral-200 dark:border-neutral-800 dark:bg-neutral-950">
      <div className="px-4 py-12 mx-auto max-w-7xl sm:px-6 lg:px-8">
     
        <div className="grid gap-10 md:grid-cols-3">
          {/* Brand */}
          <div>
            <Logo/>
            <p className="max-w-xs mt-4 text-sm text-neutral-400">
              Building clean, performant web experiences with React & Next.js.
            </p>

            <div className="mt-4 space-y-2 text-sm text-neutral-400">
              <p className="flex items-center gap-2">
                <Mail className="w-4 h-4" />
                <a href="mailto:hello@harun.dev" className="hover:underline">
                 soyebarafat0122@yahoo.com
                </a>
              </p>
              <p className="flex items-center gap-2">
                <Phone className="w-4 h-4" />
                <a href="tel:+8801000000000" className="hover:underline">
                  +880 1317-110122
                </a>
              </p>
              <p className="flex items-center gap-2">
                <MapPin className="w-4 h-4" />
               Rangpur, Bangladesh
              </p>
            </div>
          </div>

          {/* Navigation */}
          <nav className="md:col-span-1">
            <h4 className="text-sm font-semibold tracking-wider uppercase text-neutral-200">
              Quick Links
            </h4>
            <ul className="grid grid-cols-1 gap-2 mt-4">
              {nav.map((item) => (
                <li key={item.label}>
                  <a
                    href={item.href}
                    className="text-white hover:underline "
                  >
                    {item.label}
                  </a>
                </li>
              ))}
            </ul>
          </nav>

          {/* Newsletter */}
          <div className="md:ml-auto">
            <h4 className="text-sm font-semibold tracking-wider uppercase t text-neutral-200">
              Stay in touch
            </h4>

            <form
              onSubmit={(e) => e.preventDefault()}
              className="flex max-w-sm p-2 mt-4 bg-white border shadow-sm rounded-2xl border-neutral-200 p- 0"
            >
              <input
                type="email"
                required
                placeholder="Your email"
                className="flex-1 px-3 py-1 text-sm bg-transparent outline-none text-neutral-800 placeholder:text-neutral-400 dark:text-neutral-100"
              />
              <button
                type="submit"
                className="px-4 py-2 text-sm font-medium text-white rounded-xl bg-neutral-900 hover:opacity-90 dark:bg-white dark:text-neutral-900"
              >
                Subscribe
              </button>
            </form>

            <div className="flex items-center gap-3 mt-4">
              {socials.map(({ label, href, icon: Icon }) => (
                <a
                  key={label}
                  href={href}
                  target="_blank"
                  rel="noreferrer"
                  aria-label={label}
                  className="p-2 transition border rounded-xl border-neutral-200 hover:scale-105 dark:border-neutral-800"
                >
                  <Icon className="w-5 h-5 text-neutral-200" />
                </a>
              ))}
            </div>
          </div>
        </div>

        {/* Bottom */}
        <div className="flex flex-col items-center justify-between gap-4 pt-6 mt-10 text-sm border-t border-neutral-800 text-neutral-400 md:flex-row">
          <p>© {year} Soyeb Ahmed Arafat. All rights reserved.</p>
          <div className="flex items-center gap-6">
            <a href="#" className="hover:underline">
              Privacy
            </a>
            <a href="#" className="hover:underline">
              Terms
            </a>
            <a href="#" className="hover:underline">
              Cookies
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
