type RevealOptions = {
  once?: boolean;
  rootMargin?: string;
  threshold?: number;
};

const SELECTOR = "[data-sr], .animate-fade-in, .animate-slide-up, .animate-slide-in-left, .animate-slide-in-right";
// Tags padrão a serem instrumentadas automaticamente (textos, ícones e imagens)
const AUTO_SELECTORS = "h1,h2,h3,h4,h5,h6,p,li,a,button,img,svg,figure,blockquote";

function clamp(num: number, min: number, max: number) {
  return Math.min(Math.max(num, min), max);
}

function parseNumberAttr(el: HTMLElement, name: string, def: number): number {
  const v = el.getAttribute(name);
  if (!v) return def;
  const n = parseFloat(v);
  return Number.isFinite(n) ? n : def;
}

function applyVars(el: HTMLElement, durationSec: number, ease: string) {
  el.style.setProperty("--sr-duration", `${durationSec}s`);
  el.style.setProperty("--sr-ease", ease);
}

function splitText(el: HTMLElement, mode: "words" | "chars") {
  if ((el as any)._srSplitApplied) return;
  const text = el.innerText;
  if (!text || text.trim().length === 0) return;

  const target = el.getAttribute("data-sr") || "up";
  const baseDelay = clamp(parseNumberAttr(el, "data-sr-delay", 0), 0, 5);
  const step = clamp(parseNumberAttr(el, "data-sr-step", 0.08), 0.02, 0.25);
  const duration = clamp(parseNumberAttr(el, "data-sr-duration", 0.8), 0.6, 1.2);
  const ease = el.getAttribute("data-sr-ease") || "ease-in-out";

  const parts: (string | null)[] = mode === "words" ? text.split(/(\s+)/) : text.split("");
  const frag = document.createDocumentFragment();
  let index = 0;

  parts.forEach((p) => {
    if (p === null) return;
    if (p.match(/^\s+$/)) {
      frag.appendChild(document.createTextNode(p));
    } else {
      const span = document.createElement("span");
      span.className = "sr-item sr-paused";
      span.setAttribute("data-sr", target);
      applyVars(span, duration, ease);
      const delay = baseDelay + index * step;
      span.style.animationDelay = `${delay}s`;
      span.textContent = p;
      frag.appendChild(span);
      index++;
    }
  });

  el.innerHTML = "";
  el.appendChild(frag);
  (el as any)._srSplitApplied = true;

  // Also keep root paused so non-staggered elements behave consistently
  el.classList.add("sr-paused");
  applyVars(el, duration, ease);
}

export function initScrollReveal(options: RevealOptions = {}) {
  const { once = true, rootMargin = "0px 0px -10% 0px", threshold = 0.1 } = options;

  // Instrumentação para headings marcados explicitamente
  const revealTextEls = Array.from(document.querySelectorAll<HTMLElement>(".reveal-text"))
    .filter((el) => !el.matches(SELECTOR));
  revealTextEls.forEach((el) => {
    el.setAttribute("data-sr", "up");
    el.setAttribute("data-sr-stagger", "words");
    el.setAttribute("data-sr-progress", "words");
    el.style.setProperty("--sr-offset-y", "40px");
    el.style.setProperty("--sr-duration", "0.8s");
    el.style.setProperty("--sr-ease", "cubic-bezier(0.22, 1, 0.36, 1)");
  });

  // Instrumentação para seções principais
  const revealSections = Array.from(document.querySelectorAll<HTMLElement>(".scroll-reveal"))
    .filter((el) => !el.matches(SELECTOR));
  revealSections.forEach((el, idx) => {
    el.setAttribute("data-sr", "up");
    const rect = el.getBoundingClientRect();
    const viewportH = window.innerHeight || document.documentElement.clientHeight;
    const posFactor = Math.min(Math.max(rect.top / viewportH, 0), 1);
    const autoDelay = (posFactor * 0.25).toFixed(2);
    el.setAttribute("data-sr-delay", autoDelay);
    el.style.setProperty("--sr-offset-y", "40px");
    el.style.setProperty("--sr-duration", "0.8s");
    el.style.setProperty("--sr-ease", "cubic-bezier(0.22, 1, 0.36, 1)");
  });

  // Instrumentação automática hierárquica
  // Títulos: slide up suave com stagger por palavras
  const titles = Array.from(document.querySelectorAll<HTMLElement>("h1,h2"))
    .filter((el) => !el.matches(SELECTOR));
  titles.forEach((el) => {
    el.setAttribute("data-sr", "up");
    el.setAttribute("data-sr-stagger", "words");
    el.setAttribute("data-sr-progress", "words");
    el.style.setProperty("--sr-offset-y", "40px");
    el.style.setProperty("--sr-duration", "0.8s");
    el.style.setProperty("--sr-ease", "cubic-bezier(0.22, 1, 0.36, 1)");
  });
  
  // Corpo de texto (parágrafos, listas): fade-up sutil
  const textBlocks = Array.from(document.querySelectorAll<HTMLElement>("p,li"))
    .filter((el) => !el.matches(SELECTOR));
  textBlocks.forEach((el) => {
    el.setAttribute("data-sr", "fade");
    el.setAttribute("data-sr-progress", "words");
    el.style.setProperty("--sr-offset-y", "40px");
    el.style.setProperty("--sr-duration", "0.8s");
    el.style.setProperty("--sr-ease", "cubic-bezier(0.22, 1, 0.36, 1)");
  });

  // CTAs e destaques (botões primários/secundários): fade com pulso sutil
  const ctas = Array.from(document.querySelectorAll<HTMLElement>(".btn-primary,.btn-secondary"))
    .filter((el) => !el.matches(SELECTOR));
  ctas.forEach((el, idx) => {
    el.setAttribute("data-sr", "fade");
    el.classList.add("pulse-glow");
    el.setAttribute("data-sr-delay", (Math.min(idx * 0.05, 0.3)).toFixed(2));
    el.style.setProperty("--sr-duration", "0.8s");
    el.style.setProperty("--sr-ease", "cubic-bezier(0.22, 1, 0.36, 1)");
  });

  // Cards: deslize lateral alternando esquerda/direita
  const cards = Array.from(document.querySelectorAll<HTMLElement>(".card"))
    .filter((el) => !el.matches(SELECTOR));
  cards.forEach((el, idx) => {
    const dir = idx % 2 === 0 ? "left" : "right";
    el.setAttribute("data-sr", dir);
    el.setAttribute("data-sr-delay", (Math.min(idx * 0.06, 0.4)).toFixed(2));
    el.style.setProperty("--sr-offset-x", "24px");
    el.style.setProperty("--sr-duration", "0.8s");
    el.style.setProperty("--sr-ease", "cubic-bezier(0.22, 1, 0.36, 1)");
  });

  // Linhas e divisores
  const lines = Array.from(document.querySelectorAll<HTMLElement>("hr,.divider"))
    .filter((el) => !el.matches(SELECTOR));
  lines.forEach((el) => {
    el.classList.add("line-draw");
    el.setAttribute("data-sr", "fade");
    el.style.setProperty("--sr-duration", "0.8s");
    el.style.setProperty("--sr-ease", "cubic-bezier(0.22, 1, 0.36, 1)");
  });

  // Fallback geral
  const autoCandidates = Array.from(document.querySelectorAll<HTMLElement>("img,svg,figure,blockquote,a,button"))
    .filter((el) => !el.matches(SELECTOR));
  autoCandidates.forEach((el) => {
    if (!el.hasAttribute("data-sr")) {
      el.setAttribute("data-sr", "up");
      el.style.setProperty("--sr-duration", "0.8s");
      el.style.setProperty("--sr-ease", "cubic-bezier(0.22, 1, 0.36, 1)");
      el.style.setProperty("--sr-offset-y", "40px");
    }
  });

  const elements = Array.from(document.querySelectorAll<HTMLElement>(SELECTOR));
  if (elements.length === 0) return;

  // Prepare elements
  elements.forEach((el) => {
    const staggerMode = el.getAttribute("data-sr-stagger") as "words" | "chars" | null;
    if (staggerMode === "words" || staggerMode === "chars") {
      splitText(el, staggerMode);
    } else {
      const duration = clamp(parseNumberAttr(el, "data-sr-duration", 0.8), 0.6, 1.2);
      const ease = el.getAttribute("data-sr-ease") || "ease-in-out";
      applyVars(el, duration, ease);
      el.classList.add("sr-paused");
    }
  });

  const observer = new IntersectionObserver(
    (entries) => {
      entries.forEach((entry) => {
        const el = entry.target as HTMLElement;
        const isProgress = el.hasAttribute("data-sr-progress");
        if (entry.isIntersecting) {
          if (isProgress) {
            // Para elementos com progress, não liberar todas as palavras/itens de uma vez
            // O controle será feito pelo updateProgress()
            if (once) {
              observer.unobserve(el);
            }
          } else {
            el.classList.remove("sr-paused");
            el.querySelectorAll<HTMLElement>(".sr-item").forEach((child) => {
              child.classList.remove("sr-paused");
            });
            if (once) {
              observer.unobserve(el);
            }
          }
        } else if (!once) {
          if (isProgress) {
            // Em modo progress, mantemos o controle pelo updateProgress();
            // não re-pausar todos os itens automaticamente aqui.
          } else {
            el.classList.add("sr-paused");
            el.querySelectorAll<HTMLElement>(".sr-item").forEach((child) => {
              child.classList.add("sr-paused");
            });
          }
        }
      });
    },
    { root: null, rootMargin, threshold }
  );

  elements.forEach((el) => observer.observe(el));
  // Progress Reveal
  const progressEls = Array.from(document.querySelectorAll<HTMLElement>("[data-sr-progress]"));
  const activeProgress = new Set<HTMLElement>();
  const maxRevealedMap = new WeakMap<HTMLElement, number>();
  
  progressEls.forEach((el) => {
    const mode = (el.getAttribute("data-sr-progress") || "words") as "words" | "chars";
    if (mode === "words" || mode === "chars") {
      splitText(el, mode);
    }
  });
  
  const progressObserver = new IntersectionObserver(
    (entries) => {
      entries.forEach((entry) => {
        const el = entry.target as HTMLElement;
        if (entry.isIntersecting) {
          activeProgress.add(el);
        } else {
          if (!options.once) activeProgress.delete(el);
        }
      });
    },
    { root: null, rootMargin: "0px", threshold: 0 }
  );
  
  progressEls.forEach((el) => progressObserver.observe(el));
  
  function computeProgress(el: HTMLElement) {
    const rect = el.getBoundingClientRect();
    const vh = window.innerHeight || document.documentElement.clientHeight;
    const p = clamp((vh - rect.top) / (vh + rect.height), 0, 1);
    return p;
  }
  
  function updateProgress() {
    activeProgress.forEach((el) => {
      const items = Array.from(el.querySelectorAll<HTMLElement>(".sr-item"));
      if (items.length === 0) return;
      const p = computeProgress(el);
      const revealCount = Math.floor(p * items.length);
      const prev = maxRevealedMap.get(el) || 0;
      const targetCount = options.once ? Math.max(prev, revealCount) : revealCount;
  
      for (let i = 0; i < items.length; i++) {
        const item = items[i];
        if (i < targetCount) {
          item.classList.remove("sr-paused");
        } else if (!options.once) {
          item.classList.add("sr-paused");
        }
      }
  
      maxRevealedMap.set(el, targetCount);
      if (targetCount > 0) el.classList.remove("sr-paused");
    });
  }
  
  let ticking = false;
  function onScroll() {
    if (!ticking) {
      ticking = true;
      requestAnimationFrame(() => {
        updateProgress();
        ticking = false;
      });
    }
  }
  
  window.addEventListener("scroll", onScroll, { passive: true });
  window.addEventListener("resize", onScroll);
  // inicializa uma vez
  onScroll();
}