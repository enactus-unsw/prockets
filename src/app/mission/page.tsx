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
    description: "Prockets established as an Enactus UNSW project.",
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
    title: "As it is",
    description:
      "Prototyping and testing a number of potential sockets and materials.",
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

export default function MissionPage() {
  return (
    <>
      <section
        className="px-8 py-14 md:px-20 md:py-20"
        style={{ background: colors[800], color: colors[100] }}
      >
        <div className="max-w-3xl mx-auto">
          <h1
            className="mt-4 text-3xl md:text-5xl font-extralight leading-tight"
            style={{ color: colors[50] }}
          >
            Movement shouldn&apos;t be a luxury.
          </h1>
          <div className="mt-8 space-y-6">
            <p
              className="text-lg font-thin leading-relaxed"
              style={{ color: colors[300] }}
            >
              Millions of people who need a prosthetic limb can&apos;t access
              one — cost, distance from a clinic, and lack of local expertise
              get in the way. We exist to close that gap.
            </p>
            <p
              className="text-lg font-thin leading-relaxed"
              style={{ color: colors[300] }}
            >
              Prockets is a modular transtibial prosthetic system designed for
              affordable access, local clinical assembly, and modular component
              replacement — so a limb can be built, fitted, and repaired close
              to where someone actually lives.
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
            Timeline
          </span>
          <h2
            className="mt-4 text-3xl md:text-5xl font-extralight leading-tight"
            style={{ color: colors[50] }}
          >
            How we got here.
          </h2>
          <MissionTimeline items={timeline} />
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
            History
          </span>
          <h2
            className="mt-4 text-3xl md:text-5xl font-extralight leading-tight"
            style={{ color: colors[50] }}
          >
            Built by students who saw the gap firsthand.
          </h2>
          <div className="mt-8 space-y-6">
            <p
              className="text-lg font-thin leading-relaxed"
              style={{ color: colors[300] }}
            >
              Prockets started as an Enactus UNSW project after our team kept
              running into the same story: someone needing a prosthetic limb,
              and no affordable or local way to get one. Traditional devices are
              expensive, custom-built, and often require travel to a specialist
              clinic just for a fitting or a repair.
            </p>
            <p
              className="text-lg font-thin leading-relaxed"
              style={{ color: colors[300] }}
            >
              So we set out to design something different: a limb that
              clinicians anywhere can assemble from modular parts, fit locally,
              and repair piece by piece instead of replacing the whole device.
              What began as a class project is now a working prototype, backed
              by a growing team and early recognition from Enactus Australia.
            </p>
          </div>
        </div>
      </section>
    </>
  );
}
