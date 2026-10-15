(() => {
  'use strict';

  // Public demo only. Never fetch private repositories, transcripts, or session storage.
  const root = document.querySelector('[data-memory-observatory]');
  if (!root) return;

  const lang = document.documentElement.lang === 'ja' ? 'ja' : 'en';
  const copy = {
    en: {
      empty: 'No records match your search.',
      records: 'records shown',
      selected: 'Selected record',
      type: 'Type',
      recorded: 'Recorded',
      status: 'Status',
      confidence: 'Confidence',
      links: 'Explicit connections',
      none: 'No explicit connections in this sample.',
      source: 'Source',
      synthetic: 'Synthetic example — not a real conversation',
      timeline: 'Retained',
      unavailable: 'Not recorded',
      usage: 'Read count',
      note: 'This sample does not record reads. A relationship edge is shown only when explicitly declared in the fixture.',
      noHistory: 'No matching events.',
      active: 'active',
      confirmed: 'confirmed'
    },
    ja: {
      empty: '一致する記録がありません。',
      records: '件を表示',
      selected: '選択中の記録',
      type: '分類',
      recorded: '記録日',
      status: '状態',
      confidence: '確信度',
      links: '明示された関係',
      none: 'このサンプルには明示された関係がありません。',
      source: '出典',
      synthetic: '架空の表示例（実際の会話ではありません）',
      timeline: '保持',
      unavailable: '未計測',
      usage: '参照回数',
      note: 'このサンプルは参照履歴を収集しません。関係線はサンプル内で明示された場合だけ表示します。',
      noHistory: '一致する履歴がありません。',
      active: '有効',
      confirmed: '確認済み'
    }
  }[lang];

  // Five synthetic context records: four memory records plus one relationship
  // state. Relationship is not misrepresented as a memory-record schema type.
  const records = [
    {
      id: 'first-prototype', layer: 'memory', type: 'episodic', date: '2026-08-05',
      x: 184, y: 175,
      short: { en: 'Prototype', ja: '試作' },
      title: { en: 'First shared prototype', ja: '最初に一緒に作った試作品' },
      summary: {
        en: 'A formative shared build that later inspired a debugging practice.',
        ja: '共同制作の原体験。後のデバッグ手順につながった記録。'
      }
    },
    {
      id: 'review-moment', layer: 'memory', type: 'episodic', date: '2026-08-08',
      x: 424, y: 85,
      short: { en: 'Review', ja: '振り返り' },
      title: { en: 'First review of a failed assumption', ja: '思い込みを見直した最初の振り返り' },
      summary: {
        en: 'A small formative lesson from comparing a guess with observable evidence.',
        ja: '推測を観測結果と照合した、形成的な振り返り。'
      }
    },
    {
      id: 'uncertainty-principle', layer: 'memory', type: 'reflective', date: '2026-08-10',
      x: 687, y: 178,
      short: { en: 'Uncertainty', ja: '不確実性' },
      title: { en: 'Keep uncertainty visible', ja: '不確実性を明示する' },
      summary: {
        en: 'An ongoing tendency to separate observed facts from provisional interpretation.',
        ja: '観測した事実と暫定的な解釈を分けようとする、継続的な傾向。'
      }
    },
    {
      id: 'debug-checklist', layer: 'memory', type: 'procedural', date: '2026-08-14',
      x: 300, y: 326,
      short: { en: 'Debugging', ja: 'デバッグ' },
      title: { en: 'Debugging checklist', ja: 'デバッグのチェックリスト' },
      summary: {
        en: 'A reusable sequence for reproducing a failure and verifying the fix.',
        ja: '不具合の再現から修正確認までを扱う再利用可能な手順。'
      }
    },
    {
      id: 'status-preference', layer: 'relationship', type: 'relationship', date: '2026-08-12',
      x: 660, y: 330,
      short: { en: 'Status notes', ja: '進捗報告' },
      title: { en: 'Preference for concise status notes', ja: '簡潔な進捗報告を好む' },
      summary: {
        en: 'A relationship preference kept separately from canonical memory records.',
        ja: 'メモリーレコードとは分けて保持する、関係上の好み。'
      }
    }
  ];

  const edges = [
    { from: 'first-prototype', to: 'debug-checklist', kind: 'related_to' },
    { from: 'review-moment', to: 'uncertainty-principle', kind: 'supports' },
    { from: 'uncertainty-principle', to: 'status-preference', kind: 'related_to' }
  ];

  const search = root.querySelector('[data-memory-search]');
  const type = root.querySelector('[data-memory-type]');
  const count = root.querySelector('[data-memory-count]');
  const graph = root.querySelector('[data-memory-graph]');
  const list = root.querySelector('[data-memory-list]');
  const detail = root.querySelector('[data-memory-detail]');
  const history = root.querySelector('[data-memory-history]');
  const note = root.querySelector('[data-memory-note]');
  if (![search, type, count, graph, list, detail, history, note].every(Boolean)) return;

  note.textContent = copy.note;
  const ns = 'http://www.w3.org/2000/svg';
  const svg = (name, attrs = {}) => {
    const el = document.createElementNS(ns, name);
    Object.entries(attrs).forEach(([key, value]) => el.setAttribute(key, String(value)));
    return el;
  };
  const element = (tag, className, label) => {
    const el = document.createElement(tag);
    if (className) el.className = className;
    if (label !== undefined) el.textContent = label;
    return el;
  };
  let selectedId = records[0].id;

  function select(id) {
    selectedId = id;
    render();
  }

  function render() {
    const term = search.value.trim().toLocaleLowerCase(lang);
    const category = type.value;
    const shown = records.filter((item) =>
      (category === 'all' || item.type === category) &&
      (!term || [item.title[lang], item.summary[lang], item.type, item.id].some((field) =>
        field.toLocaleLowerCase(lang).includes(term)))
    );
    const visible = new Set(shown.map((item) => item.id));
    if (!visible.has(selectedId)) selectedId = shown[0]?.id || null;
    count.textContent = String(shown.length) + ' ' + copy.records;
    list.replaceChildren();
    graph.replaceChildren();
    history.replaceChildren();

    edges.filter((edge) => visible.has(edge.from) && visible.has(edge.to))
      .forEach((edge) => {
        const from = records.find((item) => item.id === edge.from);
        const to = records.find((item) => item.id === edge.to);
        graph.appendChild(svg('line', {
          x1: from.x, y1: from.y, x2: to.x, y2: to.y, class: 'observatory-edge'
        }));
      });

    shown.forEach((item) => {
      const button = element('button', 'observatory-record');
      button.type = 'button';
      button.dataset.selected = String(item.id === selectedId);
      button.setAttribute('aria-pressed', String(item.id === selectedId));
      button.append(
        element('strong', '', item.title[lang]),
        element('small', '', item.type + ' · ' + item.date)
      );
      button.addEventListener('click', () => select(item.id));
      list.appendChild(button);

      const group = svg('g', {
        class: 'observatory-node',
        role: 'button',
        tabindex: '0',
        'aria-label': item.title[lang],
        'aria-pressed': String(item.id === selectedId),
        'data-layer': item.layer,
        'data-selected': String(item.id === selectedId)
      });
      group.appendChild(svg('circle', { cx: item.x, cy: item.y, r: item.id === selectedId ? 60 : 53 }));
      const label = svg('text', {
        x: item.x, y: item.y + 5, 'text-anchor': 'middle'
      });
      label.textContent = item.short[lang];
      group.appendChild(label);
      group.addEventListener('click', () => select(item.id));
      group.addEventListener('keydown', (event) => {
        if (event.key === 'Enter' || event.key === ' ') {
          event.preventDefault();
          select(item.id);
        }
      });
      graph.appendChild(group);
    });

    if (shown.length === 0) {
      list.appendChild(element('p', 'observatory-empty', copy.empty));
      detail.replaceChildren(element('p', 'observatory-empty', copy.empty));
      history.appendChild(element('p', 'observatory-empty', copy.noHistory));
      return;
    }

    const current = records.find((item) => item.id === selectedId);
    const heading = element('h3', '', current.title[lang]);
    heading.id = 'observatory-detail-heading';
    const summary = element('p', '', current.summary[lang]);
    const meta = element('dl', 'observatory-meta');
    const values = [
      [copy.type, current.type],
      [copy.recorded, current.date],
      [copy.status, copy.active],
      [copy.confidence, copy.confirmed],
      [copy.usage, copy.unavailable],
      [copy.source, copy.synthetic]
    ];
    values.forEach(([key, value]) => {
      meta.append(element('dt', '', key), element('dd', '', value));
    });
    const relatedTitle = element('h4', '', copy.links);
    const related = element('ul', 'observatory-related');
    edges.filter((edge) => edge.from === selectedId || edge.to === selectedId).forEach((edge) => {
      const other = records.find((item) => item.id === (edge.from === selectedId ? edge.to : edge.from));
      const li = element('li');
      const button = element('button', '', other.title[lang] + ' · ' + edge.kind);
      button.type = 'button';
      button.addEventListener('click', () => {
        // Clear a filter hiding the destination rather than silently selecting an invisible record.
        search.value = '';
        type.value = 'all';
        select(other.id);
      });
      li.appendChild(button);
      related.appendChild(li);
    });
    if (!related.children.length) related.appendChild(element('li', '', copy.none));
    detail.replaceChildren(heading, summary, meta, relatedTitle, related);

    [...shown].sort((a, b) => b.date.localeCompare(a.date)).forEach((item) => {
      const li = element('li', 'observatory-event');
      const time = element('time', '', item.date);
      time.dateTime = item.date;
      const btn = element('button', '', copy.timeline + ' · ' + item.title[lang]);
      btn.type = 'button';
      btn.addEventListener('click', () => select(item.id));
      li.append(time, btn);
      history.appendChild(li);
    });
  }

  search.addEventListener('input', render);
  type.addEventListener('change', render);
  render();
})();