// Alle Kategorie-Reihen der Speisekarte einsammeln
const menuRows = document.querySelectorAll(".menu-row");

// Für jede Reihe die Pfeile mit ihrer Karten-Schiene verbinden
menuRows.forEach(function (row) {
  const track = row.querySelector(".menu-track");
  const arrows = row.querySelectorAll(".arrow");
  const prevButton = arrows[0];
  const nextButton = arrows[1];

  // Wie weit pro Klick gescrollt wird (eine Karte + Abstand)
  const scrollAmount = 272;

  // Klick auf den linken Pfeil -> nach links scrollen
  prevButton.addEventListener("click", function () {
    track.scrollBy({ left: -scrollAmount, behavior: "smooth" });
  });

  // Klick auf den rechten Pfeil -> nach rechts scrollen
  nextButton.addEventListener("click", function () {
    track.scrollBy({ left: scrollAmount, behavior: "smooth" });
  });
});

// ===== Google-Karte erst auf Klick laden (Datenschutz) =====
const mapButton = document.querySelector("#map-load");

if (mapButton) {
  mapButton.addEventListener("click", function () {
    const placeholder = document.querySelector("#map-placeholder");

    // Das iframe (die echte Karte) erzeugen
    const iframe = document.createElement("iframe");
    iframe.src = "https://www.google.com/maps?q=Hermannstra%C3%9Fe+164+12051+Berlin&output=embed";
    iframe.title = "Karte: Blend Coffee House, Hermannstraße 164, Berlin";
    iframe.loading = "lazy";
    iframe.width = "100%";
    iframe.height = "100%";
    iframe.style.border = "0";

    // Platzhalter durch die Karte ersetzen
    placeholder.replaceWith(iframe);
  });
}
// ===== Burger-Menü öffnen/schließen =====
const navToggle = document.querySelector("#nav-toggle");
const navList = document.querySelector("#nav-list");

if (navToggle && navList) {
  navToggle.addEventListener("click", function () {
    // Button-Animation UND das Menü umschalten
    navToggle.classList.toggle("is-active");
    navList.classList.toggle("is-open");

    // Barrierefreiheit: Zustand NACH dem Umschalten auslesen
    const isOpen = navList.classList.contains("is-open");
    navToggle.setAttribute("aria-expanded", isOpen);
    navToggle.setAttribute("aria-label", isOpen ? "Menü schließen" : "Menü öffnen");
  });

  // Menü schließen, wenn ein Link angeklickt wird
  const navLinks = navList.querySelectorAll("a");
  navLinks.forEach(function (link) {
    link.addEventListener("click", function () {
      navToggle.classList.remove("is-active");
      navList.classList.remove("is-open");
      navToggle.setAttribute("aria-expanded", "false");
      navToggle.setAttribute("aria-label", "Menü öffnen");
    });
  });
}