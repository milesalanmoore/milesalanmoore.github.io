// ============================================================
// Home-page content. Edit here to change the landing page
// without touching any markup.
// ============================================================

export const hero = {
  name: "Miles A. Moore",
  photo: "/assets/images/bio-photo.jpg",
  // Rendered as one muted line under the name, joined with "·".
  roles: ["Computational Ecologist", "DOE CSGF Fellow", "PhD Student, CU Boulder"],
  bio: "I build and apply statistical and simulation-based models for studying biological systems under uncertainty. By combining Bayesian inference, machine learning, and high-performance computing, I investigate ecological processes across scales.",
  aside:
    "Away from the terminal, I am usually at a show, in the snow, or arguing about drum tone.",
};

export const researchIntro =
  "My work sits at the intersection of ecology, statistics, and computation. I develop methods that handle the complexity and uncertainty inherent in natural systems.";

export const researchAreas = [
  {
    title: "Bayesian Ecological Modeling",
    blurb:
      "Hierarchical generative models for phenology and species distributions.",
    tools: "Stan · NumPyro · JAX",
  },
  {
    title: "ML for Ecological Inference",
    blurb: "Neural networks and kernel methods paired with mechanistic models.",
    tools: "Python · PyTorch",
  },
  {
    title: "High-Performance Simulation",
    blurb: "Supercomputing for large-scale biological simulations.",
    tools: "Julia · MPI · Fortran",
  },
  {
    title: "Uncertainty Quantification",
    blurb:
      "Probabilistic solutions for complex systems — ODEs and transcendentals.",
    tools: "",
  },
];

export const skills = [
  {
    category: "Languages",
    items: ["Python", "R", "Julia", "Stan", "Bash"],
  },
  {
    category: "Methods",
    items: [
      "Bayesian inference",
      "Gaussian processes",
      "Neural networks",
      "Differential equations",
      "Predictive machine learning",
    ],
  },
  {
    category: "Platforms",
    items: [
      "HPC / SLURM",
      "OpenMP / MPI",
      "Docker",
      "Git / GitHub",
      "Quarto / R Markdown",
    ],
  },
];
