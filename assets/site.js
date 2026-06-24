const navLinks = [
  { href: "/index.html", label: "Home" },
  { href: "/about.html", label: "About" },
  { href: "/film/", label: "Film" },
  { href: "/news/", label: "News" },
  { href: "/research/", label: "Research" },
  { href: "/ai/", label: "AI" },
  { href: "/license.html", label: "License" }
];

function normalize(path) {
  if (path === "/" || path === "/index.html") return "/index.html";
  if (path.endsWith("/")) return path;
  if (!path.endsWith(".html") && !path.includes(".")) return `${path}/`;
  return path;
}

function getBasePrefix(pathname) {
  const clean = pathname.replace(/^\/+|\/+$/g, "");
  if (!clean || clean === "index.html") return ".";
  if (clean.endsWith(".html")) {
    const depth = clean.split("/").length - 1;
    return depth === 0 ? "." : "../".repeat(depth).replace(/\/$/, "");
  }
  return "../".repeat(clean.split("/").length).replace(/\/$/, "");
}

function toRelative(prefix, absoluteHref) {
  const trimmed = absoluteHref.replace(/^\//, "");
  return prefix === "." ? `./${trimmed}` : `${prefix}/${trimmed}`;
}

function renderHeader() {
  const headerNode = document.getElementById("site-header");
  if (!headerNode) return;

  const path = normalize(window.location.pathname);
  const prefix = getBasePrefix(path);

  const linksHtml = navLinks
    .map((link) => {
      const href = toRelative(prefix, link.href);
      const active = normalize(link.href) === path || (path === "/index.html" && link.href === "/");
      return `<a href="${href}" class="${active ? "active" : ""}">${link.label}</a>`;
    })
    .join("");

  const homeHref = toRelative(prefix, "/index.html");
  headerNode.innerHTML = `
    <nav class="site-nav" aria-label="Main">
      <a class="site-brand" href="${homeHref}">Miles A. Moore</a>
      <div class="site-links">
        ${linksHtml}
        <a class="site-contact" href="mailto:miles@milesalanmoore.com">Contact</a>
      </div>
    </nav>
  `;
}

function renderFooter() {
  const footerNode = document.getElementById("site-footer");
  if (!footerNode) return;

  footerNode.innerHTML = `
    <div class="site-footer-inner">
      <div>&copy; 2026 Miles Alan Moore</div>
      <div class="site-footer-links">
        <a href="https://bsky.app/profile/milesalanmoore.bsky.social" target="_blank" rel="noopener">Bluesky</a>
        <a href="https://linkedin.com/in/milesalanmoore" target="_blank" rel="noopener">LinkedIn</a>
        <a href="https://github.com/milesalanmoore" target="_blank" rel="noopener">GitHub</a>
        <a href="https://scholar.google.com/citations?user=SaaaeRYAAAAJ&hl=en" target="_blank" rel="noopener">Google Scholar</a>
      </div>
    </div>
  `;
}

renderHeader();
renderFooter();
