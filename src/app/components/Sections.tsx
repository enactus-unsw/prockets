import Link from "next/link";
import { colors } from "./Hero";

export function MissionSection() {
  return (
    <section className="bg-[#1a1d18] text-[#e6e1d7] px-8 py-32 md:px-20 md:py-60">
      <div className="max-w-6xl mx-auto grid md:grid-cols-2 gap-12 md:gap-20 items-center">
        <div>
          <span
            className="font-mono text-xs uppercase tracking-[0.2em] opacity-70"
            style={{ color: colors[200] }}
          >
            Our Mission
          </span>
          <h2
            className="mt-4 text-3xl md:text-5xl font-extralight leading-tight"
            style={{ color: colors[50] }}
          >
            Movement shouldn&apos;t be a luxury.
          </h2>
        </div>
        <div className="space-y-6">
          <p
            className="text-lg font-thin leading-relaxed"
            style={{ color: colors[300] }}
          >
            Millions of people who need a prosthetic limb can&apos;t access one
            — cost, distance from a clinic, and lack of local expertise get in
            the way. We&apos;re building a modular transtibial system that can
            be assembled and fitted locally, at a fraction of the cost of
            traditional devices.
          </p>
          <Link href="/mission" className="underline">
            Learn more about our mission
          </Link>
          <div className="grid grid-cols-3 gap-6 pt-4">
            <div>
              <div
                className="text-2xl font-light"
                style={{ color: colors[100] }}
              >
                80%
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

const services = [
  {
    title: "Clinical Assessment",
    description:
      "Local clinicians take fit measurements using a lightweight kit — no specialist equipment required.",
  },
  {
    title: "Local Assembly",
    description:
      "Modular components snap together on-site, cutting lead time from months to days.",
  },
  {
    title: "Ongoing Support",
    description:
      "Worn parts are replaced individually instead of remaking the entire limb.",
  },
];

export function ServicesSection() {
  return (
    <section className="bg-black text-[#e6e1d7] px-8 py-24 md:px-16 md:py-60">
      <div className="max-w-6xl mx-auto grid md:grid-cols-2 gap-12 md:gap-20 items-center">
        <div>
          <span
            className="font-mono text-xs uppercase tracking-[0.2em] opacity-70"
            style={{ color: colors[200] }}
          >
            What We Do
          </span>
          <h2
            className="mt-4 text-3xl md:text-5xl font-extralight leading-tight"
            style={{ color: colors[50] }}
          >
            From clinic to comfort.
          </h2>
        </div>
        <div className="grid sm:grid-cols-3 gap-8">
          {services.map((service) => (
            <div key={service.title}>
              <div
                className="w-8 h-px mb-4"
                style={{ background: colors[200] }}
              ></div>
              <h3
                className="text-sm font-mono uppercase tracking-wide mb-2"
                style={{ color: colors[100] }}
              >
                {service.title}
              </h3>
              <p
                className="text-sm font-thin leading-relaxed"
                style={{ color: colors[300] }}
              >
                {service.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

const productFeatures = [
  "Modular socket, pylon, and foot components",
  "Field-serviceable — swap parts without a full refit",
  "Built from durable, low-cost materials",
];

export function ProductSection() {
  return (
    <section className="bg-[#1a1d18] text-[#e6e1d7] px-8 py-24 md:px-16 md:py-28">
      <div className="max-w-6xl mx-auto grid md:grid-cols-2 gap-12 md:gap-20 items-center">
        <div
          className="order-2 md:order-1 aspect-square rounded-lg border flex items-center justify-center"
          style={{ borderColor: `${colors[200]}33` }}
        >
          <span
            className="font-mono text-xs uppercase tracking-[0.2em] opacity-50"
            style={{ color: colors[200] }}
          >
            Product visual
          </span>
        </div>
        <div className="order-1 md:order-2">
          <span
            className="font-mono text-xs uppercase tracking-[0.2em] opacity-70"
            style={{ color: colors[200] }}
          >
            The Product
          </span>
          <h2
            className="mt-4 text-3xl md:text-5xl font-extralight leading-tight"
            style={{ color: colors[50] }}
          >
            One system, built to adapt.
          </h2>
          <ul className="mt-6 space-y-3">
            {productFeatures.map((feature) => (
              <li
                key={feature}
                className="flex items-start gap-3 text-sm font-thin leading-relaxed"
                style={{ color: colors[300] }}
              >
                <span
                  className="mt-2 w-1.5 h-1.5 rounded-full shrink-0"
                  style={{ background: colors[200] }}
                ></span>
                {feature}
              </li>
            ))}
          </ul>
        </div>
      </div>
    </section>
  );
}
