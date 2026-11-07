/* ============================================================
   ads.js — lazy, CLS-safe ad slot engine for GitHub Pages
   ------------------------------------------------------------
   HOW TO GO LIVE (2 steps):
   1. Put your AdSense publisher id below  →  publisherId: "ca-pub-XXXXXXXXXXXXXXXX"
   2. Paste each unit's slot id below      →  slots: { leaderboard: "1234567890", ... }
      (also update ads.txt at the repo root — see README)
   Until then every .ad-slot renders a labelled placeholder so
   you can see exactly where revenue units sit.
   ============================================================ */

const AD_CONFIG = {
  publisherId: "",            // e.g. "ca-pub-1234567890123456"
  slots: {
    leaderboard: "",          // top-of-page responsive banner
    inArticleTop: "",         // after 1st paragraph — historically the highest eCPM slot
    inArticleMid: "",         // mid-article — captures scroll-depth readers
    sidebar: "",              // desktop sticky tall unit — best viewability
    contentFooter: "",        // end-of-article — engaged audience
    inFeed: "",               // homepage in-feed unit between card rows
  },
};

(function () {
  "use strict";

  let scriptRequested = false;

  const loadAdSenseScript = function () {
    if (scriptRequested || !AD_CONFIG.publisherId) return;
    scriptRequested = true;
    const s = document.createElement("script");
    s.async = true;
    s.crossOrigin = "anonymous";
    s.src = "https://pagead2.googlesyndication.com/pagead/js/adsbygoogle.js?client=" + AD_CONFIG.publisherId;
    document.head.appendChild(s);
  };

  const fillSlot = function (el) {
    const name = el.dataset.slot || "";
    const format = el.dataset.format || "horizontal";
    const slotId = AD_CONFIG.slots[name] || "";

    if (AD_CONFIG.publisherId && slotId) {
      loadAdSenseScript();
      const ins = document.createElement("ins");
      ins.className = "adsbygoogle";
      ins.style.display = "block";
      ins.setAttribute("data-ad-client", AD_CONFIG.publisherId);
      ins.setAttribute("data-ad-slot", slotId);
      ins.setAttribute("data-ad-format", format === "in-article" ? "fluid" : "auto");
      if (format === "in-article") ins.setAttribute("data-ad-layout", "in-article");
      ins.setAttribute("data-full-width-responsive", "true");
      el.replaceChildren(ins);
      el.classList.add("filled");
      try {
        (window.adsbygoogle = window.adsbygoogle || []).push({});
      } catch (err) {
        // Never let a loader error shift or blank the surrounding article.
        console.warn("Ad slot failed:", name, err);
      }
      return;
    }

    // Placeholder so layout intentions stay visible before Monetization On.
    const note = document.createElement("p");
    note.className = "ad-note";
    note.innerHTML =
      "<strong>Ad:</strong> " + name +
      " (" + format + ")" +
      "<br>add <code>publisherId</code> + slot id in <code>ads.js</code>";
    el.replaceChildren(note);
  };

  const slots = document.querySelectorAll(".ad-slot[data-slot]");
  if (!slots.length) return;

  if (!("IntersectionObserver" in window)) {
    slots.forEach(fillSlot);
    return;
  }

  // 300px lookahead: units are requested just before entering the viewport.
  const io = new IntersectionObserver(
    function (entries) {
      entries.forEach(function (entry) {
        if (!entry.isIntersecting) return;
        fillSlot(entry.target);
        io.unobserve(entry.target);
      });
    },
    { rootMargin: "300px 0px", threshold: 0.01 }
  );

  slots.forEach(function (el) { io.observe(el); });
})();
