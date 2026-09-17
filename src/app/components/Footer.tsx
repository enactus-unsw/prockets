import Image from "next/image";
import Link from "next/link";
import { colors, accent } from "./theme";
import { socialLinks } from "./socials";

const navLinks = [
  { href: "/product", label: "Product" },
  { href: "/services", label: "Services" },
  { href: "/mission", label: "Mission" },
  { href: "/contact", label: "Contact" },
];

const connectLinks = [
  { href: socialLinks.email, label: "Email us", external: false },
  {
    href: socialLinks.instagram,
    label: socialLinks.instagramHandle,
    external: true,
  },
  { href: socialLinks.enactus, label: "Enactus UNSW", external: true },
];

export function Footer() {
  return (
    <footer
      className="border-t px-8 py-12 md:px-16 md:py-16"
      style={{
        background: colors["footer"],
        color: colors[100],
        borderColor: `${colors[200]}1a`,
      }}
    >
      <div className="max-w-6xl mx-auto grid gap-10 sm:grid-cols-2 md:grid-cols-4">
        <div className="sm:col-span-2">
          <Link href="/" className="inline-flex items-center gap-3">
            <Image
              src="/prockets_logo.png"
              alt=""
              width={160}
              height={160}
              className="h-8 w-auto"
            />
            <span
              className="font-mono text-sm uppercase tracking-[0.2em]"
              style={{ color: colors[50] }}
            >
              Prockets
            </span>
          </Link>
          <p
            className="mt-4 max-w-xs text-sm  leading-relaxed"
            style={{ color: colors[300] }}
          >
            Affordable, modular prosthetics designed to move with you.
          </p>
        </div>

        <div>
          <h2
            className="font-mono text-xs uppercase tracking-[0.2em]"
            style={{ color: accent.DEFAULT }}
          >
            Explore
          </h2>
          <ul className="mt-4 space-y-2">
            {navLinks.map((link) => (
              <li key={link.href}>
                <Link
                  href={link.href}
                  className="text-sm  opacity-70 transition-opacity hover:opacity-100"
                  style={{ color: colors[200] }}
                >
                  {link.label}
                </Link>
              </li>
            ))}
          </ul>
        </div>

        <div>
          <h2
            className="font-mono text-xs uppercase tracking-[0.2em]"
            style={{ color: accent.DEFAULT }}
          >
            Connect
          </h2>
          <ul className="mt-4 space-y-2">
            {connectLinks.map((link) => (
              <li key={link.href}>
                <a
                  href={link.href}
                  target={link.external ? "_blank" : undefined}
                  rel={link.external ? "noopener noreferrer" : undefined}
                  className="text-sm  opacity-70 transition-opacity hover:opacity-100"
                  style={{ color: colors[200] }}
                >
                  {link.label}
                </a>
              </li>
            ))}
          </ul>
        </div>
      </div>

      <div
        className="max-w-6xl mx-auto mt-12 flex flex-col gap-2 border-t pt-6 text-xs font-mono uppercase tracking-wide sm:flex-row sm:items-center sm:justify-between"
        style={{ borderColor: `${colors[200]}1a`, color: colors[300] }}
      >
        <span>® 2026 Prockets. All rights reserved.</span>
        <span className="opacity-70">Built by IT @ Enactus UNSW.</span>
      </div>
    </footer>
  );
}
