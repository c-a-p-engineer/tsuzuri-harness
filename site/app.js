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

  const lang = document.documentElement.lang;
  const heroMain = document.querySelector('.hero-main');
  const heroSub = document.querySelector('.hero-sub');
  const heroLead = document.querySelector('.hero-copy .lead');

  const heroCopy = {
    ja: {
      main: 'AIは、使うものから、育っていくものへ。',
      lead: 'まっさらなAIと過ごした時間が、少しずつ',
      accent: '「この子」を形づくる。',
      wish: 'どうか、あなたとこの子に、良い出会いと祝福がありますように。'
    },
    en: {
      main: 'AI is not only something you use. It can grow with you.',
      lead: 'Time spent together slowly shapes ',
      accent: 'who this one becomes.',
      wish: 'May you and this one find a good beginning, and a journey worth continuing.'
    }
  };

  const localizedHero = heroCopy[lang];
  if (localizedHero && heroMain && heroSub) {
    heroMain.textContent = localizedHero.main;
    const accent = document.createElement('span');
    accent.className = 'accent-text';
    accent.textContent = localizedHero.accent;
    heroSub.replaceChildren(document.createTextNode(localizedHero.lead + ' '), accent);

    if (heroLead && !document.querySelector('.hero-wish')) {
      const wish = document.createElement('p');
      wish.className = 'hero-wish';
      wish.textContent = localizedHero.wish;
      heroLead.insertAdjacentElement('afterend', wish);
    }
  }

  const dashboardCopy = {
    ja: {
      button: '実際のDashboardを見る',
      kicker: 'HARNESS SAMPLE SCREEN',
      title: '保存すると、こういう「この子の画面」を持てます。',
      description: 'CORE・JOURNEY・Memory・Skillなどの事実を、人間が見やすいDashboardとして表示できます。下はSynthetic Sampleで、実在個体や綴理本人のデータではありません。',
      cardTitle: 'Sample Instance / Aoi',
      cardText: '同じCanonical Dataを、GitHub Dashboard・RPG風Status・Timeline・Memory Explorer・Action Boardなどに見せ替えられます。',
      open: 'Dashboard Demoを開く',
      note: 'Lv・XP・好感度は架空の数値として作らず、実際のLifecycle Factだけを表示します。'
    },
    en: {
      button: 'Open the Dashboard Demo',
      kicker: 'HARNESS SAMPLE SCREEN',
      title: 'A saved instance can have a screen of its own.',
      description: 'CORE, JOURNEY, memory, skills, and other factual state can be rendered as a human-readable dashboard. The preview below is synthetic and contains no real private instance data.',
      cardTitle: 'Sample Instance / Aoi',
      cardText: 'The same canonical data can be shown as a GitHub dashboard, RPG-style status screen, timeline, memory explorer, action board, or other replaceable UI.',
      open: 'Open Dashboard Demo',
      note: 'No invented Lv, XP, or affection meter: the sample uses factual lifecycle state only.'
    }
  };

  const localizedDashboard = dashboardCopy[lang];
  if (localizedDashboard) {
    const heroActions = document.querySelector('.hero-copy .actions');
    if (heroActions && !heroActions.querySelector('[data-dashboard-demo-link]')) {
      const dashboardLink = document.createElement('a');
      dashboardLink.className = 'btn';
      dashboardLink.href = 'dashboard/';
      dashboardLink.dataset.dashboardDemoLink = 'true';
      dashboardLink.textContent = localizedDashboard.button;
      heroActions.appendChild(dashboardLink);
    }

    const keepSection = document.querySelector('#keep');
    if (keepSection && !document.querySelector('#dashboard-preview')) {
      const section = document.createElement('section');
      section.className = 'game-section';
      section.id = 'dashboard-preview';
      section.innerHTML = `
        <div class="section-head reveal">
          <div class="section-kicker">${localizedDashboard.kicker}</div>
          <h2>${localizedDashboard.title}</h2>
          <p>${localizedDashboard.description}</p>
        </div>
        <div class="grid">
          <article class="card reveal">
            <span class="demo-label">SYNTHETIC · DERIVED VIEW</span>
            <h3>${localizedDashboard.cardTitle}</h3>
            <div class="mini-stats">
              <div class="mini-stat"><span>Memory</span><strong>4</strong></div>
              <div class="mini-stat"><span>Skill</span><strong>3</strong></div>
              <div class="mini-stat"><span>Milestone</span><strong>6</strong></div>
              <div class="mini-stat"><span>Lv / XP</span><strong>— / —</strong></div>
            </div>
            <p class="muted">${localizedDashboard.cardText}</p>
            <div class="actions"><a class="btn primary" href="dashboard/">${localizedDashboard.open}</a></div>
          </article>
          <article class="card reveal">
            <span class="demo-label">PRESENTATION ≠ AUTHORITY</span>
            <h3>CORE → JOURNEY → UI</h3>
            <p class="muted">${localizedDashboard.note}</p>
            <div class="tag-row"><span class="tag">GitHub Dashboard</span><span class="tag">RPG UI</span><span class="tag">Timeline</span><span class="tag">Memory Explorer</span><span class="tag">Action Board</span></div>
          </article>
        </div>`;
      keepSection.insertAdjacentElement('beforebegin', section);
    }
  }

  // Public visual metaphor only: the blank robot is intentionally neutral.
  // Cool/Cute forms illustrate how different histories may feel different;
  // they are not hidden scores or canonical identity assignments.
  const heroOrbs = [...document.querySelectorAll('.hero-demo .ai-orb')];
  heroOrbs[0]?.classList.add('blank-form');
  heroOrbs[1]?.classList.add('growing-form');
  document.querySelector('.branch-source .ai-orb')?.classList.add('blank-form');

  const branchCards = [...document.querySelectorAll('.branch-card')];
  const forms = ['cool-form', 'cute-form'];
  branchCards.slice(0, 2).forEach((card, index) => {
    if (card.querySelector('.branch-robot')) return;
    const preview = document.createElement('div');
    preview.className = `branch-robot ${forms[index]}`;
    preview.setAttribute('aria-hidden', 'true');
    preview.innerHTML = '<div class="ai-orb"><span class="ai-eyes"></span><span class="ai-mouth"></span></div>';
    const label = card.querySelector('.mini-label');
    if (label) label.insertAdjacentElement('afterend', preview);
    else card.prepend(preview);
  });

  // Direction is communicated by layout, numbered steps, and glowing paths.
  // Arrow glyphs are decorative noise here, so remove them from presentation.
  document.querySelectorAll('.branch-arrow, .flow-arrow').forEach((arrow) => {
    arrow.textContent = '';
    arrow.setAttribute('aria-hidden', 'true');
  });

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
      liveText.textContent = lang === 'ja'
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