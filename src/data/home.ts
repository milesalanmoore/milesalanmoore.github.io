// ============================================================
// Home-page content. Edit here to change the landing page
// without touching any markup.
// ============================================================

export const hero = {
  name: "Miles A. Moore",
  // The greeting is split so the first name can carry the accent.
  greetingFirst: "Miles",
  greetingRole: "Computational Ecologist",
  photo: "/assets/images/bio-photo.jpg",
  // Rendered as one muted line under the name, joined with "·".
  roles: ["DOE CSGF Fellow", "PhD Student, CU Boulder"],
  bio: "I build and apply statistical and simulation-based models for studying biological systems under uncertainty. By combining Bayesian inference, machine learning, and high-performance computing, I investigate ecological processes across scales.",
};

// The phrases the hero's "I do ___" line cycles through. The first is
// what shows before the script runs — and the only one a visitor with
// JavaScript off will ever see — so it should be the truest one.
export const doing = [
  "Bayesian hierarchical modeling",
  "mathematical biology",
  "high-performance scientific computing",
  "machine learning for ecology",
  "ecological forecasting",
  "causal inference"
];

// Three quiet columns under the hero, each with its institution's mark
// beside the text rather than above it. That wants compact, roughly square
// marks — hence `cu-boulder-mark.svg`, the interlocking-CU shield cropped
// out of the full wordmark, whose 11:1 lockup only worked stacked.
// `logo` is a file in src/assets/logos/ and `logoHeight` is the height in
// pixels it is drawn at inside a shared, fixed-width mark column; the three
// marks still differ enough in proportion that one height would look
// lopsided. The marks sit grey and come to their own colours on hover.
export const credentials = [
  {
    title: "DOE Computational Science Graduate Fellow",
    org: "Krell Institute",
    logo: "csgf.png",
    logoHeight: 44,
  },
  {
    title: "PhD, Ecology and Evolutionary Biology",
    org: "University of Colorado Boulder",
    logo: "cu-boulder-mark.svg",
    logoHeight: 42,
  },
  {
    title: "Long Term Ecological Research",
    org: "LTER Network",
    logo: "lter.svg",
    logoHeight: 40,
  },
];

// The numbered expertise list above Research: the kinds of problem people
// actually bring me. Each row is a ghost numeral, the offer itself, and a
// small line diagram of what that work looks like. `figure` names a file in
// src/assets/diagrams/, inlined at build time so the drawings inherit the
// page's ink and accent rather than shipping their own colours.
export const expertise = {
  title: "Technical Expertise",
  intro: "Why people come to me",
  items: [
    {
      title: "Simulation & Mechanistic Modeling",
      blurb:
        "I develop mechanisticly explicit models of biological systems. When the question is what happens if the system changes, a model that only interpolates the data you already have cannot answer it.",
      figure: "dynamics.svg",
    },
    {
      title: "Statistical Consulting for Complex Data",
      blurb:
        "I leverage my expertise to help collaborators pull meaningful (causal) insight from their data. When data are especially messy (nested and crossed effects, measurement error, censoring, missingness that is not at random) I deliver thoughtful solutions to estimate quantities of interests with transparent and rigorous uncertainity around them. I work with biomedical engineering studies and ecological field campaigns turning domain expertise into trustworthy statistical models.",
      figure: "dag.svg",
    },
    {
      title: "Decision Analysis Under Uncertainty",
      blurb:
        "Conservation/Restoration, economic, and agronomic questions whose answer is an action rather than an estimate. I carry the whole posterior distribution through a decision-relevant loss function (e.g. planting dates, treatment thresholds, input and irrigation schedules) so that a recommendation arrives with the cost of being wrong attached.",
      figure: "decision.svg",
    },
    {
      title: "Scaling to High-Performance Computing",
      blurb:
        "Scaling simulations & statistical models to leverage high-performance scientific computing. Vectorised and GPU-backed inference, MPI and OpenMP for simulation, all shipped in a reproducible environment like a Docker container.",
      figure: "compute.svg",
    },
    {
      title: "Agentic AI & Workflow Automation",
      blurb:
        "Agents that handle the scaffolding around a modeling project rather than the modeling itself (i.e. launching fits, sweeping configurations, gathering diagnostics, drafting a preliminary report). I build them for my own work, including an agent that walks a Stan model I've written through the full Bayesian workflow. I deliberately quarantine agentic automation into janitorial and peripheral tasks so my collaborators and can take full responsibility for the core scientific software.",
      figure: "agent.svg",
    },
  ],
};

export const researchIntro =
  "My work sits at the intersection of ecology, statistics, and computation. I am developing methods that handle the complexity and uncertainty inherent in natural systems.";

// Research themes, rendered as a soft-cornered grid — every theme carries
// equal weight. `tone` picks one of the three tints; leave it off for
// the accent.
export const themes = [
  // { label: "Bayesian inference" },
  // { label: "Phenology", tone: "moss" },
  // { label: "Alpine tundra ecology", tone: "moss" },
  // { label: "Uncertainty quantification", tone: "slate" },
  // { label: "Gaussian processes" },
  // { label: "Species distributions", tone: "moss" },
  // { label: "Ecological forecasting", tone: "slate" },
  // { label: "Remote sensing", tone: "moss" },
  // { label: "Differential equations", tone: "slate" },
  // { label: "Hierarchical models" },
  // { label: "High-performance computing", tone: "slate" },
  // { label: "Scientific machine learning" },
];

export const researchAreas = [
  {
    title: "Bayesian Ecological Modeling",
    blurb:
      "Hierarchical generative models for phenology and species distributions.",
    tools: "Stan · NumPyro · JAX",
  },
  {
    title: "ML for Ecological Inference",
    blurb: "Neural networks + kernel methods paired with mechanistic models.",
    tools: "Python · PyTorch",
  },
  {
    title: "High-Performance Simulation",
    blurb: "Supercomputing for large-scale biological simulations.",
    tools: "Julia · MPI · Fortran",
  },
  {
    title: "Uncertainty Quantification",
    blurb: "Probabilistic solutions for complex systems (ODEs, Transcendentals).",
    tools: "",
  },
];

// The tools gallery. Feeds two things: the horizontally scrolling card
// rail (every entry) and the logo marquee under the hero.
//
// `mark` is a file in src/assets/logos/. `brand` is the colour that mark blooms
// into on hover, and having one means the mark is a single shape that can be
// recoloured wholesale — either a `currentColor` vector or, for `monoMark`
// raster, a shape painted through the file's alpha.
//
// A mark with no `brand` is artwork whose identity is its own colours: it is
// desaturated at rest and returns to full colour on hover, rather than being
// flattened to one hue. JAX is the clear case — its lattice is only legible
// because its tiles differ in tone — and OpenMP's wordmark is two-tone.
export const stack = [
  {
    name: "Stan",
    mark: "stan.svg",
    brand: "#3E8EBC",
    kind: "Probabilistic",
    blurb: "Hamiltonian Monte Carlo for the hierarchical models most of my work rests on.",
  },
  {
    name: "Python",
    mark: "python.svg",
    brand: "#3776AB",
    kind: "Language",
    blurb: "The everyday language — analysis, pipelines, and anything with a deadline.",
  },
  {
    name: "NumPyro",
    mark: "numpyro.png",
    kind: "Probabilistic",
    blurb: "Vectorised, GPU-backed inference when a model outgrows a single chain.",
  },
  {
    name: "JAX",
    mark: "jax.svg",
    kind: "Numerical computing",
    blurb: "Autodiff and JIT compilation underneath the sampling and the surrogates.",
  },
  {
    name: "R",
    mark: "r.svg",
    brand: "#276DC3",
    kind: "Language",
    blurb: "Ecological data wrangling, spatial work, and figures meant for print.",
  },
  {
    name: "PyTorch",
    mark: "pytorch.svg",
    brand: "#EE4C2C",
    kind: "Machine learning",
    blurb: "Neural surrogates and kernel methods paired with mechanistic models.",
  },
  {
    name: "Julia",
    mark: "julia.svg",
    brand: "#9558B2",
    kind: "Language",
    blurb: "Differential-equation models where speed and expressiveness both matter.",
  },
  {
    name: "OpenMP",
    mark: "openmp.png",
    kind: "Parallelism",
    blurb: "Shared-memory scaling for simulations too big for a single core.",
  },
  {
    name: "Fortran",
    mark: "fortran.svg",
    brand: "#734F96",
    kind: "Language",
    blurb: "Reading, extending, and coupling the legacy kernels ecology still runs on.",
  },
  {
    name: "Docker",
    mark: "docker.svg",
    brand: "#2496ED",
    kind: "Reproducibility",
    blurb: "Pinned environments so a result computed today recomputes next year.",
  },
  {
    name: "Git",
    mark: "git.svg",
    brand: "#F03C2E",
    kind: "Reproducibility",
    blurb: "Version control and CI for papers, packages, and this site.",
  }
];

export const skills = [
  {
    category: "Common Languages",
    items: ["Python", "R", "Julia", "Stan", "Bash"],
  },
  {
    category: "Recent Methods",
    items: [
      "Bayesian Inference",
      "Gaussian Processes",
      "Neural Networks",
      "Ordinary Differential Equations",
      "Predictive Machine Learning",
    ],
  },
  {
    category: "Computing Platforms",
    items: [
      "High-Performance Computing / SLURM",
      "OpenMP / MPI (Parallel Computing)",
      "Docker",
      "Git / GitHub",
      "Quarto / R Markdown",
    ],
  },
];
