export function initScrollReveal() {
  if (typeof window !== 'undefined' && (window as any).ScrollReveal) {
    const ScrollReveal = (window as any).ScrollReveal;

    // Inicialização global do Scroll Reveal
    const sr = ScrollReveal({
      distance: '40px',
      duration: 800,
      easing: 'ease-out',
      interval: 120,
      reset: false,
      mobile: true
    });

    // Revelar seções
    sr.reveal('section', {
      origin: 'bottom'
    });

    // Títulos
    sr.reveal('h1, h2, h3', {
      origin: 'top'
    });

    // Textos
    sr.reveal('p, li, span', {
      origin: 'bottom'
    });

    // Botões e CTAs
    sr.reveal('button, .btn, a.cta', {
      origin: 'bottom',
      distance: '20px'
    });

    // Cards / grids
    sr.reveal('.card, .grid-item, .produto, .box', {
      origin: 'bottom',
      interval: 150
    });
  }
}
