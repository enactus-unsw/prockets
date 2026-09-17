import { Metadata } from "next";
import { colors, accent } from "../components/theme";
import { ContactForm } from "./ContactForm";

export const metadata: Metadata = {
  title: "Contact | Prockets",
  description: "Get in touch with the Prockets team.",
};

const socials = [
  {
    label: "Enactus UNSW Website",
    cta: "Take Me There",
    href: "https://enactusunsw.org/",
    external: true,
  },
  {
    label: "Email",
    cta: "prockets.team@enactusunsw.org",
    href: "mailto:prockets.team@enactusunsw.org",
    external: false,
  },
  {
    label: "Instagram",
    cta: "@prockets.au",
    href: "https://www.instagram.com/prockets.au?utm_source=ig_web_button_share_sheet",
    external: true,
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
            className="mt-4 text-3xl font-extralight leading-tight md:text-4xl"
            style={{ color: colors[50] }}
          >
            Let&apos;s connect.
          </h1>
          <p
            className="mt-6 text-base font-thin leading-relaxed"
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
                  className="inline-block rounded-full px-6 py-3 text-sm font-medium transition-colors hover:opacity-90"
                  style={{ background: accent.DEFAULT, color: accent.ink }}
                >
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
            className="text-2xl font-extralight leading-tight"
            style={{ color: colors[50] }}
          >
            Send us a message.
          </h2>
          <p
            className="mt-3 text-sm font-thin leading-relaxed"
            style={{ color: colors[300] }}
          >
            Fill out the form and a real person will get back to you.
          </p>
          <div className="mt-8">
            <ContactForm />
          </div>
        </div>
      </div>
    </section>
  );
}
