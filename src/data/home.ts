// ============================================================
// Home-page content (hero copy, research highlights, skills).
// Edit here to update the landing page without touching markup.
// ============================================================

export const hero = {
  name: "Miles A. Moore",
  monogram: "MAM",
  role: "Computational Ecologist",
  badges: ["DOE CSGF Fellow", "PhD Student · CU Boulder"],
  bio: "I build and apply statistical and simulation-based models for studying biological systems under uncertainty. By combining Bayesian inference, machine learning, and high-performance computing, I investigate ecological processes across scales.",
};

export const researchIntro =
  "My work sits at the intersection of ecology, statistics, and computation. I am developing methods that handle the complexity and uncertainty inherent in natural systems.";

export const researchAreas = [
  {
    title: "Bayesian Ecological Modeling",
    blurb: "Hierarchical generative models for phenology and species distributions. Stan · NumPyro · JAX",
  },
  {
    title: "ML for Ecological Inference",
    blurb: "Neural networks + kernel methods paired with mechanistic models. Python · PyTorch",
  },
  {
    title: "High-Performance Simulation",
    blurb: "Supercomputing for large-scale biological simulations. Julia · MPI · Fortran",
  },
  {
    title: "Uncertainty Quantification",
    blurb: "Probabilistic solutions for complex systems (ODEs, Transcendentals).",
  },
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
