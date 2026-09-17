/**
 * The clinic pipeline, shared between the landing page and /services.
 *
 * `summary` is the teaser shown on the landing page — deliberately terse, so
 * the detail stays a reason to open the services page. `detail` is the full
 * version used on /services itself.
 */
export const workflow = [
  {
    step: "01",
    title: "Patient referral",
    summary: "A patient is referred for prosthetic assessment.",
    detail:
      "A patient is referred for prosthetic assessment through the existing EnableNSW pathway. Nothing about how someone reaches care has to change.",
  },
  {
    step: "02",
    title: "Assess & cast",
    summary: "An accredited clinic assesses and casts the patient.",
    detail:
      "An EnableNSW-accredited clinic assesses and casts the patient. The clinicians, the accreditation and the process are the ones already in place.",
  },
  {
    step: "03",
    title: "Manufacture",
    summary: "Built at the clinic, or centrally by Prockets.",
    detail:
      "Made in-house at the clinic using existing EnableNSW infrastructure, or centrally by Prockets when clinic capacity is limited. Two paths mean throughput is never capped by a single site.",
  },
  {
    step: "04",
    title: "Fit & maintain",
    summary: "The clinic fits the device and supports it long-term.",
    detail:
      "The clinic fits the device and provides ongoing care, maintenance and support. Because the system is modular, worn parts are swapped individually instead of remaking the entire limb.",
  },
];
