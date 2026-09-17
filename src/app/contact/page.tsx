import { Metadata } from "next";
import { ExternalLink, Mail } from "lucide-react";
import { colors, accent } from "../components/theme";
import { ContactForm } from "./ContactForm";
import { socialLinks } from "../components/socials";

export const metadata: Metadata = {
  title: "Contact | Prockets",
  description: "Get in touch with the Prockets team.",
};

/**
 * lucide-react dropped its brand icons, so this is drawn to match the rest of
 * the set: 24x24 box, currentColor stroke, 2px width, round caps and joins.
 */
function InstagramIcon({ size = 16 }: { size?: number }) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width={size}
      height={size}
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
      aria-hidden="true"
    >
      <rect width="20" height="20" x="2" y="2" rx="5" ry="5" />
      <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z" />
      <line x1="17.5" x2="17.51" y1="6.5" y2="6.5" />
    </svg>
  );
}

const socials = [
  {
    label: "Enactus UNSW Website",
    cta: "Take Me There",
    href: socialLinks.enactus,
    external: true,
    Icon: ExternalLink,
  },
  {
    label: "Email",
    cta: socialLinks.emailAddress,
    href: socialLinks.email,
    external: false,
    Icon: Mail,
  },
  {
    label: "Instagram",
    cta: socialLinks.instagramHandle,
    href: socialLinks.instagram,
    external: true,
    Icon: InstagramIcon,
  },
];

export default function ContactPage() {
  return (
    <section
      className="px-8 py-14 md:px-20 md:py-20"
      style={{ background: colors[900], color: colors[100] }}
    >
      <div className="mx-auto grid max-w-5xl overflow-hidden rounded-2xl border border-border md:grid-cols-2">
        <div
          className="order-2 border-border p-8 max-md:border-t md:order-1 md:border-r md:p-12"
          style={{ background: colors[800] }}
        >
          <span
            className="font-mono text-xs uppercase tracking-[0.2em]"
            style={{ color: accent.DEFAULT }}
          >
            Contact
          </span>
          <h1
            className="mt-4 text-3xl font-heading leading-tight md:text-4xl"
            style={{ color: colors[50] }}
          >
            Let&apos;s connect.
          </h1>
          <p
            className="mt-6 text-base font-normal leading-relaxed"
            style={{ color: colors[300] }}
          >
            Whether you&apos;re an amputee, a clinician, a potential partner, or
            just curious about what we&apos;re building — we&apos;d love to hear
            from you.
          </p>

          <div className="mt-12 space-y-8">
            {socials.map((social) => (
              <div key={social.label}>
                <div
                  className="mb-3 font-mono text-xs uppercase tracking-wide"
                  style={{ color: colors[200] }}
                >
                  {social.label}
                </div>
                <a
                  href={social.href}
                  target={social.external ? "_blank" : undefined}
                  rel={social.external ? "noopener noreferrer" : undefined}
                  className="inline-flex items-center gap-2 rounded-full px-6 py-3 text-sm font-medium transition-colors hover:opacity-90"
                  style={{ background: accent.DEFAULT, color: accent.ink }}
                >
                  <social.Icon size={16} aria-hidden="true" />
                  {social.cta}
                </a>
              </div>
            ))}
          </div>
        </div>

        <div
          className="order-1 p-8 md:order-2 md:p-12"
          style={{ background: colors[900] }}
        >
          <h2
            className="text-2xl font-heading leading-tight"
            style={{ color: colors[50] }}
          >
            Send us a message.
          </h2>
          <p
            className="mt-3 text-sm font-normal leading-relaxed"
            style={{ color: colors[300] }}
          >
            Fill out the form and we will get back to you!
          </p>
          <div className="mt-8">
            <ContactForm />
          </div>
        </div>
      </div>
    </section>
  );
}
