import { Metadata } from "next";
import { colors, accent } from "../components/theme";
import { workflow } from "../components/workflow";

export const metadata: Metadata = {
  title: "Services | Prockets",
  description:
    "How a Prockets limb reaches a patient — four steps through the existing EnableNSW clinic network.",
};

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
            className="mt-4 text-3xl md:text-5xl font-extralight leading-tight"
            style={{ color: colors[50] }}
          >
            From clinic to comfort.
          </h1>
          <p
            className="mt-8 text-lg font-thin leading-relaxed"
            style={{ color: colors[300] }}
          >
            Getting a prosthetic limb to someone who needs one already has a
            path — referral, assessment, casting, fitting, follow-up care.
            Prockets doesn&apos;t replace that path. We supply the modular
            system that moves along it.
          </p>
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
            The Workflow
          </span>
          <h2
            className="mt-4 text-3xl md:text-5xl font-extralight leading-tight"
            style={{ color: colors[50] }}
          >
            Four steps, start to finish.
          </h2>
          <ol className="mt-12 space-y-10">
            {workflow.map((stage) => (
              <li key={stage.step} className="relative pl-12">
                <span
                  className="absolute left-0 top-0 font-mono text-xs tracking-[0.2em]"
                  style={{ color: accent.DEFAULT }}
                >
                  {stage.step}
                </span>
                <h3
                  className="text-sm font-mono uppercase tracking-wide"
                  style={{ color: colors[100] }}
                >
                  {stage.title}
                </h3>
                <p
                  className="mt-3 text-lg font-thin leading-relaxed"
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
            Supported By
          </span>
          <h2
            className="mt-4 text-3xl md:text-5xl font-extralight leading-tight"
            style={{ color: colors[50] }}
          >
            We integrate. We don&apos;t replace.
          </h2>
          <div className="mt-8 space-y-6">
            <p
              className="text-lg font-thin leading-relaxed"
              style={{ color: colors[300] }}
            >
              EnableNSW accredits providers to assess, cast, manufacture, fit
              and repair prostheses. That network already spans 7 commercial and
              2 public prosthetic services across New South Wales — trained
              clinicians, accredited facilities, established referral pathways.
            </p>
            <p
              className="text-lg font-thin leading-relaxed"
              style={{ color: colors[300] }}
            >
              Prockets supplies modular components into that network. Clinics
              retain their fitting, manufacturing and maintenance revenue, and
              nothing about their accreditation or infrastructure has to change
              to take us on.
            </p>
          </div>
          <div className="mt-12 grid grid-cols-3 gap-6">
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
      </section>
    </>
  );
}
