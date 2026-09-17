import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { MissionTimeline } from "./MissionTimeline";
import { colors, accent } from "../components/theme";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Mission | Prockets",
  description:
    "Why Prockets exists, how we got here, and where we're going next.",
};

const timeline = [
  {
    id: 1,
    date: "2021",
    title: "Preliminary research",
    description:
      "Preliminary market research along with early stage prosthetic research.",
  },
  {
    id: 2,
    date: "2022",
    title: "Prockets established",
    description:
      'Prockets established as an Enactus UNSW project, a name derived from "prosthetic sockets".',
  },
  {
    id: 3,
    date: "2023/2024",
    title: "Building partnerships",
    description:
      "Connecting with partners, continued market research and brand establishment.",
  },
  {
    id: 4,
    date: "2025",
    title: "Introducing Prockets as a startup",
    description:
      "In 2025, we created a startup focused on one of the most critical and underserved components of prosthetic design: the socket. This led to the creation of Prockets. Key highlights of this phase included:",
    points: [
      "Prototyping sockets for upper-limb prosthetics using recycled plastic materials",
      "Reinforcing our commitment to sustainability",
      "Initiating efforts to develop an online community platform for support and collaboration",
    ],
  },
  {
    id: 5,
    date: "2026",
    title: "Redefining our goal",
    description:
      "We switched our focus from mainly the socket to developing a whole prosthetic, as well as making that prosthetic lower-limb, to maximise our impact on Australian amputees. This year, we achieved a lot, including:",
    points: [
      "Creating a complete model of our prosthetic design in CAD",
      "Fully 3D-printing a physical prototype for testing and to aid our presentation",
      "Placing 2nd in the Early Stage Competition at the Enactus National Championship",
    ],
  },
  {
    id: 6,
    date: "Onward",
    title: "What's next",
    description:
      "In future, we will be working towards ARTG approval and conducting a small scale pilot program for testing of the design. We will also be working with Limbs4Life to connect with amputees and clinics to gain feedback and commercialise our model. Our main activities will include:",
    points: [
      "Developing and testing our design, working directly with amputees",
      "Producing technical documentation in order to demonstrate compliance with TGA regulations",
      "Reaching out to clinics to launch our pilot program",
    ],
  },
];

const problemStats = [
  {
    value: "Every 3 hours",
    label: "Someone in Australia loses a lower limb.",
  },
  {
    value: "8,000+",
    label: "Australians undergo lower-limb amputations every year.",
  },
  {
    value: "22",
    label: "Lower-limb procedures carried out every day.",
  },
];

export default function MissionPage() {
  return (
    <>
      <section
        className="px-8 py-14 md:px-20 md:py-20"
        style={{ background: colors[800], color: colors[100] }}
      >
        <div className="max-w-3xl mx-auto">
          <span
            className="font-mono text-xs uppercase tracking-[0.2em]"
            style={{ color: accent.DEFAULT }}
          >
            Our Mission
          </span>
          <h1
            className="mt-4 text-3xl md:text-5xl font-heading leading-tight"
            style={{ color: colors[50] }}
          >
            Make a prosthetic limb a routine fit, not a years-long wait.
          </h1>
          <div className="mt-8 space-y-6">
            <p
              className="text-lg font-normal leading-relaxed"
              style={{ color: colors[300] }}
            >
              Every three hours, someone in Australia loses a lower limb.
              Getting back on their feet should not depend on what they can
              afford, where they happen to live, or how long a funding queue
              runs.
            </p>
            <p
              className="text-lg leading-relaxed"
              style={{ color: colors[300] }}
            >
              Our mision is to make that recovery routine. Prockets build a
              modular lower-limb prosthetic system that accredited clinics can
              assemble, fit and repair locally, at a fraction of the cost of a
              conventional device, and we supply it through the care network
              those clinics already work in.
            </p>
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
            The Problem
          </span>
          <h2
            className="mt-4 text-3xl md:text-5xl font-heading leading-tight"
            style={{ color: colors[50] }}
          >
            A recurring need, not a niche one.
          </h2>
          <dl className="mt-12 grid gap-8 sm:grid-cols-3">
            {problemStats.map((stat) => (
              <div key={stat.label}>
                <dt
                  className="text-3xl font-light"
                  style={{ color: accent.DEFAULT }}
                >
                  {stat.value}
                </dt>
                <dd
                  className="mt-3 text-sm font-normal leading-relaxed"
                  style={{ color: colors[300] }}
                >
                  {stat.label}
                </dd>
              </div>
            ))}
          </dl>
          <div className="mt-12 space-y-6">
            <p
              className="text-lg font-normal leading-relaxed"
              style={{ color: colors[300] }}
            >
              Roughly 8,000 Australians undergo a lower-limb amputation each
              year. That works out to about 22 procedures every day: one
              national statistic, repeated every single day. At that scale,
              affordability and access are not edge cases. They are the shape of
              the problem.
            </p>
            <p
              className="text-lg font-normal leading-relaxed"
              style={{ color: colors[300] }}
            >
              For most people, what sits between a clear clinical need and
              actually regaining mobility is not the surgery. It is the cost of
              the device, the funding pathway, and the months of waiting that
              come with both.
            </p>
          </div>
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
            Our Approach
          </span>
          <h2
            className="mt-4 text-3xl md:text-5xl font-heading leading-tight"
            style={{ color: colors[50] }}
          >
            Affordable by design, not by discount.
          </h2>
          <div className="mt-8 space-y-6">
            <p
              className="text-lg font-normal leading-relaxed"
              style={{ color: colors[300] }}
            >
              The system is modular. Load-bearing components connect through
              standardised mechanical interfaces, so a worn or damaged part is
              replaced on its own rather than remanufacturing the whole
              prosthesis. That is what brings the lifetime cost down, not just
              the price of the first fitting.
            </p>
            <p
              className="text-lg font-normal leading-relaxed"
              style={{ color: colors[300] }}
            >
              We are not asking clinics to change how they work. Prockets is
              supplied into the existing EnableNSW network of 7 commercial and 2
              public prosthetic services, so their accreditation, their
              infrastructure and their fitting and maintenance revenue all carry
              over unchanged.
            </p>
            <p
              className="text-lg font-normal leading-relaxed"
              style={{ color: colors[300] }}
            >
              And it has a defined regulatory route. Prockets is intended to be
              supplied as a patient-matched medical device, a pathway under
              which ARTG inclusion is exempt until 1 July 2029, giving us a
              clear window to complete the evidence needed for full ARTG
              transition.
            </p>
          </div>
          <Link
            href="/services"
            className="group mt-8 inline-flex items-center gap-1.5 transition-colors"
            style={{ color: accent.DEFAULT }}
          >
            <span className="underline underline-offset-4 decoration-1">
              See how it works in a clinic
            </span>
            <ArrowRight
              size={16}
              aria-hidden="true"
              className="shrink-0 transition-transform group-hover:translate-x-1"
            />
          </Link>
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
            Timeline
          </span>
          <h2
            className="mt-4 text-3xl md:text-5xl font-heading leading-tight"
            style={{ color: colors[50] }}
          >
            How we got here.
          </h2>
          <MissionTimeline items={timeline} />
        </div>
      </section>
    </>
  );
}
