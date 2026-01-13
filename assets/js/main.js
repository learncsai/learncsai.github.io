(function () {
  // Footer year
  const y = document.getElementById("year");
  if (y) y.textContent = new Date().getFullYear();

  // Mobile nav
  const toggle = document.querySelector("[data-nav-toggle]");
  const nav = document.querySelector("[data-nav]");
  if (toggle && nav) {
    toggle.addEventListener("click", () => {
      const expanded = toggle.getAttribute("aria-expanded") === "true";
      toggle.setAttribute("aria-expanded", String(!expanded));
      nav.classList.toggle("open");
    });
  }

  // Contact: mailto builder
  const sendBtn = document.getElementById("sendEmail");
  if (sendBtn) {
    const params = new URLSearchParams(window.location.search);
    const presetSubject = params.get("subject") || "Request a Demo — AI RES";

    // NOTE: Replace this email with your real inbox:
    const to = "hello@aires.example";

    sendBtn.addEventListener("click", () => {
      const name = (document.getElementById("name")?.value || "").trim();
      const email = (document.getElementById("email")?.value || "").trim();
      const topic = (document.getElementById("topic")?.value || "").trim();
      const message = (document.getElementById("message")?.value || "").trim();

      const subject = presetSubject + (topic ? ` (${topic})` : "");
      const bodyLines = [
        `Name: ${name || "-"}`,
        `Email: ${email || "-"}`,
        `Topic: ${topic || "-"}`,
        "",
        "Message:",
        message || "-",
        "",
        "— Sent from AI RES website",
      ];

      const href =
        `mailto:${encodeURIComponent(to)}` +
        `?subject=${encodeURIComponent(subject)}` +
        `&body=${encodeURIComponent(bodyLines.join("\n"))}`;

      window.location.href = href;
    });
  }

  // Capability slider controls
  const slider = document.querySelector("[data-slider]");
  const track = document.querySelector("[data-slider-track]");
  const prev = document.querySelector("[data-slider-prev]");
  const next = document.querySelector("[data-slider-next]");
  if (slider && track && prev && next) {
    const scrollAmount = () => {
      const card = track.querySelector(".slider-card");
      if (!card) return 260;
      const gap = parseFloat(getComputedStyle(track).columnGap || "16");
      return card.getBoundingClientRect().width + gap;
    };

    prev.addEventListener("click", () => {
      track.scrollBy({ left: -scrollAmount(), behavior: "smooth" });
    });
    next.addEventListener("click", () => {
      track.scrollBy({ left: scrollAmount(), behavior: "smooth" });
    });
  }
})();
