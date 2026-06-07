/* REstars PropTech — interazioni del sito
   Bilingue (IT/EN) via attributo html[lang] + CSS; menu mobile; reveal; nav attiva */
(function () {
  "use strict";

  /* ---------------- Lingua ---------------- */
  var STORE = "restars-lang";
  function getLang() {
    var saved = null;
    try { saved = localStorage.getItem(STORE); } catch (e) {}
    if (saved === "it" || saved === "en") return saved;
    var nav = (navigator.language || "it").toLowerCase();
    return nav.indexOf("it") === 0 ? "it" : "en";
  }
  function setLang(lang) {
    document.documentElement.setAttribute("lang", lang);
    try { localStorage.setItem(STORE, lang); } catch (e) {}
    document.querySelectorAll("[data-lang-btn]").forEach(function (b) {
      b.classList.toggle("active", b.getAttribute("data-lang-btn") === lang);
      b.setAttribute("aria-pressed", b.getAttribute("data-lang-btn") === lang);
    });
    // aggiorna <title> e meta description se forniti
    var t = document.querySelector('[data-title-' + lang + ']');
    // titoli/meta gestiti per-pagina via attributi sul <html>
    var html = document.documentElement;
    if (html.getAttribute("data-title-" + lang)) {
      document.title = html.getAttribute("data-title-" + lang);
    }
    var descEl = document.querySelector('meta[name="description"]');
    if (descEl && html.getAttribute("data-desc-" + lang)) {
      descEl.setAttribute("content", html.getAttribute("data-desc-" + lang));
    }
  }

  setLang(getLang());

  document.addEventListener("click", function (e) {
    var btn = e.target.closest("[data-lang-btn]");
    if (btn) { setLang(btn.getAttribute("data-lang-btn")); }
  });

  /* ---------------- Menu mobile ---------------- */
  var burger = document.querySelector(".burger");
  var links = document.querySelector(".nav-links");
  if (burger && links) {
    burger.addEventListener("click", function () {
      var open = links.classList.toggle("open");
      burger.classList.toggle("open", open);
      burger.setAttribute("aria-expanded", open);
    });
    links.querySelectorAll("a").forEach(function (a) {
      a.addEventListener("click", function () {
        links.classList.remove("open");
        burger.classList.remove("open");
        burger.setAttribute("aria-expanded", "false");
      });
    });
  }

  /* ---------------- Nav attiva ---------------- */
  var here = location.pathname.split("/").pop() || "index.html";
  document.querySelectorAll(".nav-links a").forEach(function (a) {
    var href = a.getAttribute("href");
    if (href === here || (here === "" && href === "index.html")) a.classList.add("active");
  });

  /* ---------------- Reveal on scroll ---------------- */
  var reveals = document.querySelectorAll(".reveal");
  if ("IntersectionObserver" in window && reveals.length) {
    var io = new IntersectionObserver(function (entries) {
      entries.forEach(function (en) {
        if (en.isIntersecting) { en.target.classList.add("in"); io.unobserve(en.target); }
      });
    }, { threshold: 0.12 });
    reveals.forEach(function (el) { io.observe(el); });
  } else {
    reveals.forEach(function (el) { el.classList.add("in"); });
  }

  /* ---------------- Anno corrente nel footer ---------------- */
  document.querySelectorAll("[data-year]").forEach(function (el) {
    el.textContent = new Date().getFullYear();
  });
})();
