import Link from "next/link";
import Image from "next/image";
import { ArrowRight } from "lucide-react";
import { colors, accent } from "./Hero";
import { ProductShowcase } from "./ProductViewer";
import { workflow } from "./workflow";

const sponsors: {
  name: string;
  logo: string;
  href: string;
  heightClass?: string;
}[] = [
  {
    name: "OAPL",
    logo: "/sponsors/oapl.webp",
    href: "https://oapl.com.au/",
  },
  {
    name: "AmputeesNSW",
    logo: "/sponsors/amputees_nsw.png",
    href: "https://amputeesnsw.org.au/",
    heightClass: "h-14 md:h-22",
  },
  {
    name: "Limbs4Life",
    logo: "/sponsors/limbs4life.png",
    href: "https://www.limbs4life.org.au/",
    heightClass: "h-10 md:h-18",
  },
];

export function SponsorsSection() {
  return (
    <section
      className="px-8 py-12 md:px-20 md:py-16"
      style={{ background: colors[900] }}
    >
      <div className="max-w-6xl mx-auto">
        <p
          className="text-center font-mono text-xs uppercase tracking-[0.2em] opacity-70"
          style={{ color: colors[200] }}
        >
          Supported by
        </p>
        <div className="mt-8 flex flex-wrap items-center justify-center gap-12 md:gap-20">
          {sponsors.map((sponsor) => (
            <a
              key={sponsor.name}
              href={sponsor.href}
              target="_blank"
              rel="noopener noreferrer"
              className="opacity-60 transition-opacity hover:opacity-100"
            >
              <Image
                src={sponsor.logo}
                alt={sponsor.name}
                width={400}
                height={120}
                className={`w-auto ${sponsor.heightClass ?? "h-8 md:h-14"}`}
              />
            </a>
          ))}
        </div>
      </div>
    </section>
  );
}

export function MissionSection() {
  return (
    <section
      className="px-8 py-32 md:px-20 md:py-60"
      style={{ background: colors[900], color: colors[100] }}
    >
      <div className="max-w-6xl mx-auto grid md:grid-cols-2 gap-12 md:gap-20 items-center">
        <div>
          <h2
            className="mt-4 text-3xl md:text-5xl font-heading leading-tight"
            style={{ color: colors[50] }}
          >
            Movement shouldn&apos;t be a luxury.
          </h2>
        </div>
        <div className="space-y-6">
          <p
            className="text-lg font-normal leading-relaxed"
            style={{ color: colors[300] }}
          >
            Every 3 hours, someone in Australia loses their lower limb.
            <br />
            <br />
            However, issues with cost, eligibility and long waiting times mean
            that people can have a clear clinical need but still lack a simple,
            affordable route to a prosthetic.
            <br />
            <br />
            We&apos;re building an affordable, modular prosthetic system with a
            clear regulatory pathway, enabling scalable access and long-term
            impact.
          </p>
          <Link
            href="/mission"
            className="group inline-flex items-center gap-1.5 transition-colors"
            style={{ color: accent.DEFAULT }}
          >
            <span className="underline underline-offset-4 decoration-1">
              Learn more about our mission
            </span>
            <ArrowRight
              size={16}
              aria-hidden="true"
              className="shrink-0 transition-transform group-hover:translate-x-1"
            />
          </Link>
          <div className="grid grid-cols-3 gap-6 pt-4">
            <div>
              <div
                className="text-2xl font-light"
                style={{ color: colors[100] }}
              >
                70%
              </div>
              <div
                className="text-xs font-mono uppercase tracking-wide opacity-70"
                style={{ color: colors[200] }}
              >
                Lower cost
              </div>
            </div>
            <div>
              <div
                className="text-2xl font-light"
                style={{ color: colors[100] }}
              >
                Local
              </div>
              <div
                className="text-xs font-mono uppercase tracking-wide opacity-70"
                style={{ color: colors[200] }}
              >
                Clinical assembly
              </div>
            </div>
            <div>
              <div
                className="text-2xl font-light"
                style={{ color: colors[100] }}
              >
                Modular
              </div>
              <div
                className="text-xs font-mono uppercase tracking-wide opacity-70"
                style={{ color: colors[200] }}
              >
                Component design
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export function ServicesSection() {
  return (
    <section
      className="px-8 py-24 md:px-16 md:py-60"
      style={{ background: colors[800], color: colors[100] }}
    >
      <div className="max-w-6xl mx-auto grid md:grid-cols-2 gap-12 md:gap-20 items-start">
        <div>
          <h2
            className="mt-4 text-3xl md:text-5xl font-heading leading-tight"
            style={{ color: colors[50] }}
          >
            From clinic to comfort.
          </h2>
          <p
            className="mt-6 text-lg font-normal leading-relaxed"
            style={{ color: colors[300] }}
          >
            Prockets plugs into the clinic network that already exists — four
            steps from referral to a fitted limb.
          </p>
          <Link
            href="/services"
            className="group mt-6 inline-flex items-center gap-1.5 transition-colors"
            style={{ color: accent.DEFAULT }}
          >
            <span className="underline underline-offset-4 decoration-1">
              See how it works
            </span>
            <ArrowRight
              size={16}
              aria-hidden="true"
              className="shrink-0 transition-transform group-hover:translate-x-1"
            />
          </Link>
        </div>
        <ol className="grid sm:grid-cols-2 gap-8">
          {workflow.map((stage) => (
            <li key={stage.step}>
              <div
                className="font-medium font-mono tracking-[0.2em] mb-3"
                style={{ color: accent.DEFAULT }}
              >
                {stage.step}
              </div>
              <h3
                className="text-medium font-mono uppercase tracking-wide mb-2"
                style={{ color: colors[100] }}
              >
                {stage.title}
              </h3>
              <p
                className="text-md font-thin leading-relaxed"
                style={{ color: colors[300] }}
              >
                {stage.summary}
              </p>
            </li>
          ))}
        </ol>
      </div>
    </section>
  );
}

export function ProductSection() {
  return (
    <section
      className="px-8 py-24 md:px-16 md:py-28"
      style={{ background: colors[800], color: colors[100] }}
    >
      <div className="max-w-6xl mx-auto grid md:grid-cols-2 gap-12 md:gap-20 items-center">
        <ProductShowcase />
        <div className="order-1 md:order-2">
          <h2
            className="mt-4 text-3xl md:text-5xl font-heading leading-tight"
            style={{ color: colors[50] }}
          >
            One system, built to adapt.
          </h2>
          <p
            className="mt-6 text-lg font-normal leading-relaxed"
            style={{ color: colors[300] }}
          >
            Prockets uses a modular socket, pylon, and foot components and is
            field-serviceable, where parts can be swapped without a full refit.
            <br />
            <br />
            Most importantly, our prosthetics are built from durable, low-cost
            materials.
          </p>
        </div>
      </div>
    </section>
  );
}
