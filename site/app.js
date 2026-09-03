(() => {
  const scriptUrl = document.currentScript?.src;
  if (scriptUrl && !document.querySelector('link[data-tsuzuri-responsive]')) {
    const responsiveStyles = document.createElement('link');
    responsiveStyles.rel = 'stylesheet';
    responsiveStyles.href = new URL('responsive-v2.css', scriptUrl).href;
    responsiveStyles.dataset.tsuzuriResponsive = 'v2';
    document.head.appendChild(responsiveStyles);
  }

  document.documentElement.classList.add('js');

  const reducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;

  const revealItems = [...document.querySelectorAll('.reveal')];
  if (!reducedMotion && 'IntersectionObserver' in window) {
    const revealObserver = new IntersectionObserver((entries, observer) => {
      entries.forEach((entry) => {
        if (!entry.isIntersecting) return;
        entry.target.classList.add('is-visible');
        observer.unobserve(entry.target);
      });
    }, { threshold: 0.12, rootMargin: '0px 0px -5% 0px' });
    revealItems.forEach((item) => revealObserver.observe(item));
  } else {
    revealItems.forEach((item) => item.classList.add('is-visible'));
  }

  const demo = document.querySelector('.hero-demo');
  const replay = document.querySelector('.demo-replay');
  const liveText = document.querySelector('.demo-live-text');

  function playDemo() {
    if (!demo) return;
    demo.classList.remove('is-running');
    // Restart the CSS timeline without storing semantic state in JavaScript.
    void demo.offsetWidth;
    demo.classList.add('is-running');
    if (liveText) {
      liveText.textContent = document.documentElement.lang === 'ja'
        ? 'デモ再生中。会話から記憶・名前・スキルの候補が現れる様子を表示しています。'
        : 'Demo playing. Conversation signals lead to memory, naming, and skill candidates.';
    }
  }

  replay?.addEventListener('click', playDemo);

  if (demo && !reducedMotion && 'IntersectionObserver' in window) {
    let played = false;
    const demoObserver = new IntersectionObserver((entries, observer) => {
      if (played) return;
      const entry = entries[0];
      if (!entry?.isIntersecting) return;
      played = true;
      playDemo();
      observer.disconnect();
    }, { threshold: 0.35 });
    demoObserver.observe(demo);
  } else if (demo) {
    demo.classList.add('is-running');
  }
})();
