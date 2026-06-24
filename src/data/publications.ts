export type PubLink = {
  text: string;
  url: string;
  icon?: string;
  type?: "primary" | "details";
};

export type Publication = {
  title: string;
  authors: string;
  year: number | "Accepted" | "In Review";
  journal: string;
  slug?: string;
  abstract?: string;
  tags?: string[];
  links?: PubLink[];
  featured?: boolean;
};

export const publications: Publication[] = [
    {
    title:
      "Divergent regional trends in alpine tundra productivity linked to changes in snow-free season length and summer warming",
    authors: "**Moore, M.A.**, Emery, N.C., and Elmendorf, S.C.",
    year: "2026",
    journal: "Environmental Research: Ecology",
    featured: true,
    tags: ["alpine tundra", "NDVI", "remote sensing", "experiment", "rocky mountains"],
    links: [
      {
        text: "DOI",
        url: "https://doi.org/10.1088/2752-664X/ae6d04",
        icon: "link",
        type: "primary",
      },
      {
        text: "Full-text",
        url: "https://doi.org/10.1088/2752-664X/ae6d04",
        icon: "file-pdf",
        type: "primary",
      }
    ],
  },
  {
    title:
      "Climate drives variation in optimal phenology: 46 years of multi-environment trials in sunflower",
    authors:
      "Clark, E.I., **Moore, M.A.**, Khoury, C.K., Hulke, B.S., Kane, N.C. and Elmendorf, S.C.",
    year: 2025,
    journal: "New Phytologist",
    slug: "sunflower-optimal",
    featured: true,
    tags: ["phenology", "agriculture", "climate", "sunflower", "phenology"],
    abstract:
      "We analyzed 46 years of multi-environment sunflower trials to quantify how temperature drives optimal flowering phenology across the Great Plains. Using hierarchical Bayesian models, we show that temperature is the primary driver of optimal flowering time, and that a single week off from optimal phenology causes a median 23% yield reduction. These findings highlight the challenge of breeding for optimal phenology under climate change.",
    links: [
      {
        text: "DOI",
        url: "https://doi.org/10.1111/nph.70790",
        icon: "link",
        type: "primary",
      },
      {
        text: "Full-text",
        url: "https://onlinelibrary.wiley.com/share/author/4EAASTMRPFVR9PUSPKAE?target=10.1111/nph.70790",
        icon: "file-pdf",
        type: "primary",
      },
    ],
  },
  {
    title:
      "Geographical disparities in sunflower yield improvement and environmental effects in the Great Plains identify challenges to crop improvement",
    authors:
      "Elmendorf, S.C., Hulke, B.S., Clark, E.I., **Moore, M.A.**, Kane, N.C.",
    year: "In Review",
    journal: "In Review",
    tags: ["agriculture", "sunflower", "Great Plains", "climate"],
    links: [],
  },
  {
    title: "Forty-six years of sunflower multi-environment trials in the Great Plains",
    authors:
      "Elmendorf, S.C., Hulke, B.S., ..., Clark, E.I., **Moore, M.A.**, ..., Kane, N.C.",
    year: "In Review",
    journal: "In Review",
    tags: ["agriculture", "sunflower", "data"],
    links: [],
  },
  {
    title:
      "Soil moisture and active layer thickness across Alaska, USA and Northwestern Canada",
    authors:
      "**Moore, M.A.**, Hoy, E.E., Clayton, L.K., Schaefer, K., Bourgeau-Chavez, L.L., et al.",
    year: "In Review",
    journal: "In Review",
    featured: true,
    tags: ["remote sensing", "permafrost", "Alaska", "soil moisture"],
    links: [],
  },
];

export type Dataset = {
  title: string;
  authors: string;
  year: number;
  repository: string;
  doi?: string;
  url?: string;
};

export const datasets: Dataset[] = [
  {
    title:
      "ABoVE: Soil Moisture and Active Layer Thickness in Alaska, USA and Canada, 2005–2022",
    authors: "Moore, M.A. et al.",
    year: 2025,
    repository: "ORNL DAAC",
  },
  {
    title:
      "Homogenized, gap-filled, daily air temperature data for Saddle, 1986–Ongoing",
    authors: "Moore, M.A. et al.",
    year: 2025,
    repository: "EDI",
  },
  {
    title: "Infilled daily precipitation data for Saddle, 1981–Ongoing",
    authors: "Moore, M.A. et al.",
    year: 2025,
    repository: "EDI",
  },
  {
    title:
      "Infilled daily air temperature data for C1 chart recorder, 1952–Ongoing",
    authors: "Moore, M.A. et al.",
    year: 2025,
    repository: "EDI",
  },
  {
    title:
      "Infilled daily air temperature data for D1 chart recorder, 1952–Ongoing",
    authors: "Moore, M.A. et al.",
    year: 2025,
    repository: "EDI",
  },
  {
    title:
      "Infilled daily precipitation data for C1 chart recorder, 1952–Ongoing",
    authors: "Moore, M.A. et al.",
    year: 2025,
    repository: "EDI",
  },
  {
    title:
      "Infilled daily precipitation data for D1 chart recorder, 1952–Ongoing",
    authors: "Moore, M.A. et al.",
    year: 2025,
    repository: "EDI",
  },
  {
    title: "Helianthus agrestis chloroplast genome",
    authors: "Moore, M.A. et al.",
    year: 2024,
    repository: "NCBI",
  },
];
