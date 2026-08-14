// ============================================================
// CV entries. Each section is a list of {date, title, sub}.
// Add a row here and it appears on /cv/.
// ============================================================

export type CVEntry = {
  date: string;
  title: string;
  sub: string;
  /** Optional short honor/award note shown after the title. */
  note?: string;
};

export const education: CVEntry[] = [
  {
    date: "Aug 2024 – May 2029 (expected)",
    title: "PhD, Ecology and Evolutionary Biology",
    sub: "University of Colorado Boulder",
  },
  {
    date: "Jan 2022 – Dec 2023",
    title: "B.A., Ecology and Evolutionary Biology",
    sub: "University of Colorado Boulder · Certificate in GIS & Computational Science",
    note: "Summa cum laude · With distinction · GPA 4.0",
  },
  {
    date: "Aug 2019 – Dec 2021",
    title: "A.S.",
    sub: "Front Range Community College",
  },
];

export const experience: CVEntry[] = [
  {
    date: "Sep 2025 – Present",
    title: "Department of Energy Computational Science Graduate Fellow",
    sub: "Krell Institute",
  },
  {
    date: "May 2025 – Aug 2025",
    title: "Graduate Research Assistant",
    sub: "Cooperative Institute for Research in Environmental Sciences (CIRES), CU Boulder",
  },
  {
    date: "Dec 2023 – Aug 2024",
    title: "Professional Scientist I",
    sub: "Institute of Arctic and Alpine Research (INSTAAR), CU Boulder",
  },
  {
    date: "May 2023 – Dec 2023",
    title: "Remote Sensing Intern",
    sub: "NASA Goddard Space Flight Center, Greenbelt, MD",
  },
  {
    date: "Aug 2021 – Dec 2023",
    title: "Data Management Assistant",
    sub: "Institute of Arctic and Alpine Research (INSTAAR), CU Boulder",
  },
  {
    date: "May 2021 – Aug 2021",
    title: "Field Research Assistant",
    sub: "Niwot Ridge Long-Term Ecological Research Site",
  },
];

export const teaching: CVEntry[] = [
  {
    date: "Aug 2024 – Dec 2024",
    title: "Teaching Assistant",
    sub: "EBIO 4410/5410 — Biological Statistics · University of Colorado Boulder",
  },
];

export const presentations: CVEntry[] = [
  {
    date: "Dec 2023 · San Francisco, CA",
    title:
      "From Field to Air: Integrating Field Data in Support of the ABoVE Airborne Campaign",
    sub: "AGU Fall Meeting 2023 (Poster)",
  },
];
