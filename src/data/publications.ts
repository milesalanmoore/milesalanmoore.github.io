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

/**
 * The small uppercase meta line above a publication title.
 * Deduplicates so an unpublished entry reads "In Review", not
 * "In Review · In Review".
 */
export function pubMeta(p: Publication): string[] {
  return [p.journal, String(p.year)].filter(
    (v, i, all) => all.indexOf(v) === i
  );
}

/** Renders **Author** in an author string as bold. */
export function boldAuthors(raw: string): string {
  return raw.replace(/\*\*(.+?)\*\*/g, "<strong>$1</strong>");
}

export const publications: Publication[] = [
    {
    title:
      "Divergent regional trends in alpine tundra productivity linked to changes in snow-free season length and summer warming",
    authors: "**Moore, M.A.**, Emery, N.C., and Elmendorf, S.C.",
    year: "2026",
    journal: "Environmental Research: Ecology",
    slug: "alpine-greening-browning",
    featured: true,
    tags: ["alpine tundra", "NDVI", "remote sensing", "experiment", "rocky mountains"],
    abstract:
      "Despite widespread reports of tundra 'greening,' it remained unclear whether greening is occurring in the mid-latitude alpine tundra of the southwestern United States, where vegetation productivity strongly influences headwater ecohydrology and ecosystem function. Combining 39 years of Landsat data (1984–2023), a four-year factorial snow-and-temperature manipulation experiment, and two decades of field measurements at the Niwot Ridge LTER in Colorado, we found that—contrary to Arctic and European alpine systems—NDVI declined 2.8% across the Southern Rocky Mountain alpine on average. This regional average masked pronounced spatial heterogeneity: 20.2% of the region browned while 17.6% greened. Experimentally, warming reduced NDVI while snow addition had a slight positive effect, with the two treatments acting additively. Regionally, summer warming raised the probability of both greening and browning, and the length of the snow-free season determined the direction: browning tracked lengthening growing seasons while greening occurred where growing seasons stayed stable. These findings demonstrate that alpine productivity responses to climate change are not globally uniform, and that regional context mediates the effect of warming.",
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
      },
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
