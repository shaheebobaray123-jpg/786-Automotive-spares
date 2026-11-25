// Mobile navigation and automatic footer year.
const menuButton = document.querySelector(".menu-toggle");
const siteLinks = document.querySelector("#site-links");

if (menuButton && siteLinks) {
  menuButton.addEventListener("click", () => {
    const isOpen = siteLinks.classList.toggle("is-open");
    menuButton.setAttribute("aria-expanded", String(isOpen));
    menuButton.setAttribute("aria-label", isOpen ? "Close navigation" : "Open navigation");
  });

  siteLinks.querySelectorAll("a").forEach((link) => {
    link.addEventListener("click", () => {
      siteLinks.classList.remove("is-open");
      menuButton.setAttribute("aria-expanded", "false");
      menuButton.setAttribute("aria-label", "Open navigation");
    });
  });
}

const yearElement = document.querySelector("#current-year");
if (yearElement) {
  yearElement.textContent = new Date().getFullYear();
}
