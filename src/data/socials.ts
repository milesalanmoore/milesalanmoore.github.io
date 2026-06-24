// ============================================================
// Professional links — single source of truth.
// Rendered two ways:
//   • tabular rows on the home hero (uses `label` + `handle`)
//   • favicon row in the footer (uses `icon`)
// `icon` is a Font Awesome class. Swap freely.
// ============================================================

export type Social = {
  label: string; // short uppercase label shown on the hero
  handle: string; // the display text / handle
  href: string;
  icon: string; // Font Awesome class for the footer favicons
};

export const socials: Social[] = [
  {
    label: "GitHub",
    handle: "milesalanmoore",
    href: "https://github.com/milesalanmoore",
    icon: "fa-brands fa-github",
  },
  {
    label: "Scholar",
    handle: "Miles A. Moore",
    href: "https://scholar.google.com/citations?user=SaaaeRYAAAAJ&hl=en",
    icon: "fa-brands fa-google-scholar",
  },
  {
    label: "ORCID",
    handle: "0009-0003-0173-7602",
    href: "https://orcid.org/0009-0003-0173-7602",
    icon: "fa-brands fa-orcid",
  },
  {
    label: "LinkedIn",
    handle: "milesalanmoore",
    href: "https://linkedin.com/in/milesalanmoore",
    icon: "fa-brands fa-linkedin",
  }
];

// Contact email used by the nav + about page.
export const email = "mail@milesalanmoore.com";

// CV PDF location (drop your file at public/assets/cv/).
export const cvPath = "/assets/cv/miles-moore-cv.pdf";
