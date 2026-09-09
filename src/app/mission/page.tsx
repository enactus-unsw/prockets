import Link from "next/link";
import { colors } from "../components/Hero";

const timeline = [
  {
    year: "2025",
    title: "Founded",
    description:
      "Started as an Enactus UNSW venture after seeing how many people locally couldn't access a prosthetic limb.",
  },
  {
    year: "Early 2026",
    title: "First prototype",
    description:
      "Built the first modular transtibial prototype — socket, pylon, and foot as swappable parts.",
  },
  {
    year: "2026",
    title: "Runner-up, Enactus Australia",
    description:
      "Placed Early Stage Runner-Up at the Enactus Australia 2026 Championship.",
  },
  {
    year: "What's next",
    title: "Clinic pilots",
    description:
      "Field-testing the assembly process with local clinicians ahead of a wider rollout.",
  },
];

export default function MissionPage() {
  return (
    <>
      <section className="bg-[#1a1d18] text-[#e6e1d7] px-8 py-24 md:px-20 md:py-32">
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

      <section className="bg-black text-[#e6e1d7] px-8 py-24 md:px-20 md:py-32">
        <div className="max-w-3xl mx-auto">
          <span
            className="font-mono text-xs uppercase tracking-[0.2em] opacity-70"
            style={{ color: colors[200] }}
          >
            Timeline
          </span>
          <h2
            className="mt-4 text-3xl md:text-5xl font-extralight leading-tight"
            style={{ color: colors[50] }}
          >
            How we got here.
          </h2>
          <div className="mt-16 space-y-12">
            {timeline.map((item) => (
              <div key={item.title} className="relative pl-8">
                <div
                  className="absolute top-1.5 left-0 w-4 h-px"
                  style={{ background: colors[200] }}
                ></div>
                <div
                  className="text-xs font-mono uppercase tracking-wide opacity-70"
                  style={{ color: colors[200] }}
                >
                  {item.year}
                </div>
                <h3
                  className="mt-2 text-lg font-light"
                  style={{ color: colors[100] }}
                >
                  {item.title}
                </h3>
                <p
                  className="mt-2 text-sm font-thin leading-relaxed"
                  style={{ color: colors[300] }}
                >
                  {item.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="bg-[#1a1d18] text-[#e6e1d7] px-8 py-24 md:px-20 md:py-32">
        <div className="max-w-3xl mx-auto">
          <span
            className="font-mono text-xs uppercase tracking-[0.2em] opacity-70"
            style={{ color: colors[200] }}
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
