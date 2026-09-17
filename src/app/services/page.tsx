import { Metadata } from "next";
import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { colors, accent } from "../components/theme";
import { workflow } from "../components/workflow";

export const metadata: Metadata = {
  title: "Services | Prockets",
  description:
    "How a Prockets limb reaches a patient — the clinic workflow, modular servicing, and our TGA regulatory pathway.",
};

const replacementCycle = [
  {
    step: "1",
    title: "Damaged module",
    detail: "A single component wears, breaks or needs upgrading.",
  },
  {
    step: "2",
    title: "Disconnect",
    detail: "Released at a standardised mechanical interface.",
  },
  {
    step: "3",
    title: "Replace module",
    detail: "A new part is fitted — no remake of the surrounding assembly.",
  },
  {
    step: "4",
    title: "Reassemble",
    detail: "Back together, with the patient's existing fit intact.",
  },
];

const regulatory = [
  {
    title: "Patient-matched medical device",
    detail:
      "Supplied as a patient-matched medical device (PMMD), in collaboration with partner clinics.",
  },
  {
    title: "ARTG inclusion exempt until 1 July 2029",
    detail:
      "Under the PMMD pathway, ARTG inclusion is exempt until 1 July 2029, a defined window to complete the evidence requirements.",
  },
  {
    title: "Full ARTG transition from 1 July 2029",
    detail:
      "We're preparing for full ARTG inclusion and ongoing TGA compliance beyond that window.",
  },
];

export default function ServicesPage() {
  return (
    <>
      <section
        className="px-8 py-24 md:px-20 md:py-32"
        style={{ background: colors[800], color: colors[100] }}
      >
        <div className="max-w-3xl mx-auto">
          <span
            className="font-mono text-xs uppercase tracking-[0.2em]"
            style={{ color: accent.DEFAULT }}
          >
            What We Do
          </span>
          <h1
            className="mt-4 text-3xl md:text-5xl font-heading leading-tight"
            style={{ color: colors[50] }}
          >
            From clinic to comfort.
          </h1>
          <p
            className="mt-8 text-lg font-normal leading-relaxed"
            style={{ color: colors[300] }}
          >
            Getting a prosthetic limb to someone already has a path. Referral,
            assessment, casting, fitting, follow-up care. Prockets doesn&apos;t
            replace it. We supply the modular system that moves along it.
          </p>

          <ol className="mt-14 space-y-10">
            {workflow.map((stage) => (
              <li key={stage.step} className="relative pl-12">
                <span
                  className="absolute left-0 top-0 font-mono text-xs tracking-[0.2em]"
                  style={{ color: accent.DEFAULT }}
                >
                  {stage.step}
                </span>
                <h2
                  className="text-sm font-mono uppercase tracking-wide"
                  style={{ color: colors[100] }}
                >
                  {stage.title}
                </h2>
                <p
                  className="mt-3 text-lg  leading-relaxed"
                  style={{ color: colors[300] }}
                >
                  {stage.detail}
                </p>
              </li>
            ))}
          </ol>

          <div
            className="mt-14 border-t pt-10"
            style={{ borderColor: `${colors[200]}1a` }}
          >
            <p
              className="text-lg font-normal leading-relaxed"
              style={{ color: colors[300] }}
            >
              None of this asks a clinic to change how it operates. EnableNSW
              accredits providers to assess, cast, manufacture, fit and repair
              prostheses — 7 commercial and 2 public services across NSW.
              Prockets supplies modular components into that network, clinics
              keep their fitting, manufacturing and maintenance revenue, and
              their existing accreditation and infrastructure carry over
              unchanged.
            </p>
            <div className="mt-10 grid grid-cols-3 gap-6">
              <div>
                <div
                  className="text-2xl font-light"
                  style={{ color: colors[100] }}
                >
                  9
                </div>
                <div
                  className="text-xs font-mono uppercase tracking-wide opacity-70"
                  style={{ color: colors[200] }}
                >
                  NSW prosthetic services
                </div>
              </div>
              <div>
                <div
                  className="text-2xl font-light"
                  style={{ color: colors[100] }}
                >
                  2
                </div>
                <div
                  className="text-xs font-mono uppercase tracking-wide opacity-70"
                  style={{ color: colors[200] }}
                >
                  Manufacturing paths
                </div>
              </div>
              <div>
                <div
                  className="text-2xl font-light"
                  style={{ color: colors[100] }}
                >
                  0
                </div>
                <div
                  className="text-xs font-mono uppercase tracking-wide opacity-70"
                  style={{ color: colors[200] }}
                >
                  New infrastructure
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section
        className="px-8 py-14 md:px-20 md:py-20"
        style={{ background: colors[900], color: colors[100] }}
      >
        <div className="max-w-3xl mx-auto">
          <span
            className="font-mono text-xs uppercase tracking-[0.2em]"
            style={{ color: accent.DEFAULT }}
          >
            Ongoing Care
          </span>
          <h2
            className="mt-4 text-3xl md:text-5xl font-heading leading-tight"
            style={{ color: colors[50] }}
          >
            Replace the component, not the prosthesis.
          </h2>
          <p
            className="mt-8 text-lg font-normal leading-relaxed"
            style={{ color: colors[300] }}
          >
            Modules connect through standardised interfaces, so a worn part is
            swapped on its own. No full remanufacturing, which is what keeps
            lifetime cost down, not just the first fitting.
          </p>
          <ol className="mt-10 grid gap-8 sm:grid-cols-2">
            {replacementCycle.map((stage) => (
              <li key={stage.step}>
                <div
                  className="font-normal text-xs tracking-[0.2em] mb-3"
                  style={{ color: accent.DEFAULT }}
                >
                  {stage.step}
                </div>
                <h3
                  className="text-sm font-normal uppercase tracking-wide mb-2"
                  style={{ color: colors[100] }}
                >
                  {stage.title}
                </h3>
                <p
                  className="text-sm font-normal leading-relaxed"
                  style={{ color: colors[300] }}
                >
                  {stage.detail}
                </p>
              </li>
            ))}
          </ol>
        </div>
      </section>

      <section
        className="px-8 py-14 md:px-20 md:py-20"
        style={{ background: colors[800], color: colors[100] }}
      >
        <div className="max-w-3xl mx-auto">
          <span
            className="font-mono text-xs uppercase tracking-[0.2em]"
            style={{ color: accent.DEFAULT }}
          >
            Regulatory Pathway
          </span>
          <h2
            className="mt-4 text-3xl md:text-5xl font-heading leading-tight"
            style={{ color: colors[50] }}
          >
            A defined route through the TGA.
          </h2>
          <dl className="mt-10 space-y-8">
            {regulatory.map((item) => (
              <div key={item.title}>
                <dt
                  className="text-sm font-normal uppercase tracking-wide"
                  style={{ color: colors[100] }}
                >
                  {item.title}
                </dt>
                <dd
                  className="mt-3 text-lg font-normal leading-relaxed"
                  style={{ color: colors[300] }}
                >
                  {item.detail}
                </dd>
              </div>
            ))}
          </dl>
          <Link
            href="/contact"
            className="group mt-12 inline-flex items-center gap-1.5 transition-colors"
            style={{ color: accent.DEFAULT }}
          >
            <span className="underline underline-offset-4 decoration-1">
              Talk to us about a pilot
            </span>
            <ArrowRight
              size={16}
              aria-hidden="true"
              className="shrink-0 transition-transform group-hover:translate-x-1"
            />
          </Link>
        </div>
      </section>
    </>
  );
}
