import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

const prefersReducedMotion = window.matchMedia(
  "(prefers-reduced-motion: reduce)"
).matches;

export function initReveal() {
  if (prefersReducedMotion) {
    document.querySelectorAll("[data-reveal]").forEach((el) => {
      el.style.opacity = "1";
      el.style.transform = "none";
    });
    return;
  }

  const groups = new Map();

  document.querySelectorAll("[data-reveal]").forEach((el) => {
    const groupKey = el.getAttribute("data-reveal-group") || el;
    if (!groups.has(groupKey)) groups.set(groupKey, []);
    groups.get(groupKey).push(el);
  });

  groups.forEach((els) => {
    gsap.set(els, { opacity: 0, y: 28 });
    ScrollTrigger.batch(els, {
      start: "top 88%",
      once: true,
      onEnter: (batch) =>
        gsap.to(batch, {
          opacity: 1,
          y: 0,
          duration: 0.9,
          ease: "power3.out",
          stagger: 0.12,
        }),
    });
  });
}

export function initHeroIntro(selector = "[data-hero-line]") {
  const lines = document.querySelectorAll(selector);
  if (!lines.length) return;

  if (prefersReducedMotion) {
    lines.forEach((l) => (l.style.opacity = "1"));
    return;
  }

  gsap.set(lines, { opacity: 0, y: 40 });
  gsap.to(lines, {
    opacity: 1,
    y: 0,
    duration: 1.1,
    ease: "power3.out",
    stagger: 0.09,
    delay: 0.15,
  });
}

export function initAmbientScroll() {
  const sections = gsap.utils.toArray("[data-ambient]");
  if (!sections.length) return;

  const root = document.documentElement;

  sections.forEach((section) => {
    const target = parseFloat(section.getAttribute("data-ambient"));
    ScrollTrigger.create({
      trigger: section,
      start: "top center",
      end: "bottom center",
      onEnter: () => root.style.setProperty("--ambient", String(target)),
      onEnterBack: () => root.style.setProperty("--ambient", String(target)),
    });
  });
}

export function initParallax() {
  if (prefersReducedMotion) return;
  gsap.utils.toArray("[data-parallax]").forEach((el) => {
    const speed = parseFloat(el.getAttribute("data-parallax")) || 0.15;
    gsap.to(el, {
      yPercent: speed * 100,
      ease: "none",
      scrollTrigger: {
        trigger: el,
        start: "top bottom",
        end: "bottom top",
        scrub: true,
      },
    });
  });
}

export function initCounters() {
  gsap.utils.toArray("[data-count-to]").forEach((el) => {
    const to = parseFloat(el.getAttribute("data-count-to"));
    const obj = { val: 0 };
    ScrollTrigger.create({
      trigger: el,
      start: "top 90%",
      once: true,
      onEnter: () =>
        gsap.to(obj, {
          val: to,
          duration: 1.6,
          ease: "power2.out",
          onUpdate: () => (el.textContent = Math.round(obj.val).toString()),
        }),
    });
  });
}

export function initFloat() {
  if (prefersReducedMotion) return;
  gsap.utils.toArray("[data-float]").forEach((el) => {
    gsap.to(el, {
      y: -12,
      duration: 2 + Math.random(),
      repeat: -1,
      yoyo: true,
      ease: "sine.inOut",
    });
  });
}

export function initRotateOnHover() {
  if (prefersReducedMotion) return;
  document.querySelectorAll("[data-rotate-hover]").forEach((card) => {
    card.addEventListener("mousemove", (e) => {
      const rect = card.getBoundingClientRect();
      const x = e.clientX - rect.left;
      const y = e.clientY - rect.top;
      const centerX = rect.width / 2;
      const centerY = rect.height / 2;
      const rotateX = (y - centerY) / 20;
      const rotateY = (centerX - x) / 20;
      gsap.to(card, {
        rotateX: rotateX,
        rotateY: rotateY,
        duration: 0.3,
        ease: "power2.out",
      });
    });
    card.addEventListener("mouseleave", () => {
      gsap.to(card, {
        rotateX: 0,
        rotateY: 0,
        duration: 0.5,
        ease: "power2.out",
      });
    });
  });
}

export function initScrollY() {
  if (prefersReducedMotion) return;
  gsap.utils.toArray("[data-scroll-y]").forEach((el) => {
    const distance = parseFloat(el.getAttribute("data-scroll-y")) || 50;
    gsap.to(el, {
      y: -distance,
      ease: "none",
      scrollTrigger: {
        trigger: el,
        start: "top bottom",
        end: "bottom top",
        scrub: true,
      },
    });
  });
}