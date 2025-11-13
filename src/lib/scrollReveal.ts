type RevealOptions = {
  once?: boolean;
  rootMargin?: string;
  threshold?: number;
};

const SELECTOR = 
  ".animate-fade-in, .animate-slide-up, .animate-slide-in-left, .animate-slide-in-right";

export function initScrollReveal(options: RevealOptions = {}) {
  const { once = true, rootMargin = "0px 0px -10% 0px", threshold = 0.1 } = options;

  const elements = Array.from(document.querySelectorAll<HTMLElement>(SELECTOR));
  if (elements.length === 0) return;

  // Pause animations initially so they only run on reveal
  elements.forEach((el) => {
    el.classList.add("sr-paused");
  });

  const observer = new IntersectionObserver(
    (entries) => {
      entries.forEach((entry) => {
        const el = entry.target as HTMLElement;
        if (entry.isIntersecting) {
          el.classList.remove("sr-paused");
          if (once) {
            observer.unobserve(el);
          }
        } else if (!once) {
          // Reset when leaving viewport
          el.classList.add("sr-paused");
        }
      });
    },
    { root: null, rootMargin, threshold }
  );

  elements.forEach((el) => observer.observe(el));
}