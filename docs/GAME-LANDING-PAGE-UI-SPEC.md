# Game-like Landing Page UI Specification

Status: implementation-ready design specification  
Scope: `site/` landing pages  
Canonical language: English  
Japanese translation: [`GAME-LANDING-PAGE-UI-SPEC.ja.md`](GAME-LANDING-PAGE-UI-SPEC.ja.md)

This document defines the responsive presentation contract for the Tsuzuri Harness landing page. It is a website implementation specification, not a kernel or instance identity rule.

## 1. Objective

The landing page should make a first-time visitor understand and want to try this experience quickly:

```text
meet a blank AI
      ↓
spend time together
      ↓
a distinct “this one” begins to emerge
      ↓
identity / memory / skills begin to form
      ↓
“I want to keep this one”
      ↓
save it in a private repository
      ↓
continue growing together
```

The emotional framing should be **emergence**, not configuration. The page should not stop at “we do not preset a personality”; it should immediately communicate the positive outcome: spending time together can produce a distinct individual worth continuing with.

The page should feel game-like and alive without inventing fictional canonical facts such as levels, XP, affection, or maturity scores.

The visual design must remain usable without animation and without images.

## 2. Core responsive principle

Do **not** treat desktop as a scaled-up mobile layout.

- **Mobile:** a vertical journey that is easy to read and tap.
- **Tablet / narrow desktop:** preserve the mobile content order and use wider cards, but do not force cramped two-column hero layouts.
- **Wide desktop:** become a game-screen-like composition using horizontal space for status panels, branching, comparisons, and side-by-side views.

The same semantic content should remain available across breakpoints; only presentation changes.

## 3. Target files

Primary implementation surface:

- `site/styles.css`
- `site/responsive-v2.css`
- `site/app.js`
- `site/index.html`
- `site/ja/index.html`
- translated landing pages under `site/<locale>/`

Do not add a framework or external animation library unless native HTML/CSS/JS cannot meet the acceptance criteria.

## 4. Layout breakpoints

Breakpoints are implementation defaults, not universal UX laws. Adjust only when verified rendering shows a better boundary.

### Mobile: up to 767px

- One-column layout.
- Hero copy first, interactive demo second.
- CTA buttons stack or wrap without shrinking text below comfortable touch size.
- Branch source, connector, and comparison cards are presented vertically.
- The branch connector points **down** when the destination is below the source.
- Achievement cards may use horizontal snap scrolling.
- Save flow is vertical.
- CORE / JOURNEY stack vertically.

### Tablet / narrow desktop: 768px–1179px

This range must **not** automatically become the full desktop layout.

- Keep Hero mostly single-column or use a wide stacked composition.
- The interactive demo may be centered and wider than on mobile.
- Avoid any state card narrower than about 280px.
- The branch source may remain above two side-by-side outcome cards; the connector still points **down** because the outcomes are below the source.
- Do not allow Japanese hero text and demo panels to compete for width.

### Wide desktop: 1180px and above

- Main content container: approximately `1200px` maximum, with responsive side padding.
- Hero becomes a two-column composition.
- Recommended Hero ratio: copy `45–48%`, game panel `52–55%`.
- Align Hero columns to the top rather than vertically centering mismatched content.
- Branch comparison becomes horizontal and its connector points **right**.
- Save-flow sections may use horizontal layouts.
- CORE and JOURNEY should appear side by side when space permits.

### Very wide screens

Do not allow the page to stretch indefinitely. Keep the reading and game UI area centered around the same maximum width; increase outer whitespace rather than card width.

## 5. Hero contract

The Hero is the primary conversion surface.

### Copy area

Must communicate, in this order:

1. AI personality is not predefined.
2. Spending time together can make a distinct “this one” emerge.
3. The user can try without saving.
4. If they want to continue with this instance, they can save it.

Recommended English display copy:

> **Don't preset a personality.**  
> Spend time together, and **“this one” begins to emerge.**

Recommended Japanese display copy:

> **AIに人格を設定しない。**  
> 一緒に過ごすうちに、**「この子」が生まれてくる。**

The Japanese headline should not rely on arbitrary browser wrapping. Use a controlled content width and explicit semantic line groups where needed.

Recommended desktop copy width: roughly `500–560px`.

### Desktop demo area

On wide desktop, use **one coherent game panel**, not two extremely narrow vertical state cards.

The panel should contain the transition internally:

```text
UNKNOWN INSTANCE
Blank

Name      —
Identity  Unformed
Memory    0
Skills    0

conversation / experience signals
          ↓
FORMING

Name      ???
Identity  Forming
Memory    +candidate
Skill     +candidate

FIRST MEMORY / NAME FOUND / SKILL ACQUIRED
```

The demo is synthetic. It must not imply that a specific name, memory, or skill is guaranteed.

### Narrow widths

If the two-column Hero would make the game panel or text unnaturally narrow, fall back to stacked layout. Do not preserve the desktop composition at the cost of readability.

## 6. AI mascot visual contract

The small AI face is a lightweight visual guide, not a canonical appearance for future instances.

It should communicate **approachable, curious, alive, and neutral enough to remain blank**.

### Required visual qualities

- rounded soft silhouette rather than a sharp or mechanical shell;
- larger, brighter eyes with enough spacing to read as friendly at small sizes;
- a small soft smile rather than a flat status indicator;
- optional subtle cheek warmth / glow to add friendliness without assigning gender or personality;
- a slightly brighter forming-state treatment, while keeping the same underlying mascot identity;
- readable at approximately 70–100px without relying on tiny details.

### Constraints

- keep the mascot CSS-rendered for this iteration;
- do not add a raster image dependency just to make it cuter;
- do not imply that every user instance literally looks like this mascot;
- the mascot must remain decorative and `aria-hidden` where the surrounding text already conveys meaning.

## 7. Same start, different life

Section message:

> They can start the same and still become different.

The connector direction must match the actual layout.

Mobile / stacked tablet:

```text
Blank
  ↓
outcomes
```

Wide desktop:

```text
Blank → technical / creative outcomes
```

Example paths are synthetic demonstrations, not presets.

### Card requirements

- Technical and creative cards must have equal visual height on desktop.
- Keep status rows aligned.
- Put variable-length descriptive copy in a flexible content region.
- Keep tags / chips anchored consistently near the bottom.
- Do not represent generated examples as canonical personalities users will receive.

## 8. Achievement / milestone cards

Use game-like cards for factual categories such as:

- first accepted name
- first retained memory
- first acquired skill
- Journey milestone

These are **possible events**, not mandatory progression gates.

Desktop: four-column or balanced grid when readable.  
Mobile: horizontal snap strip is acceptable.

Motion may include subtle glow, reveal, or unlock emphasis, but the information must remain understandable with motion disabled.

## 9. Save-this-instance section

This is the emotional and operational bridge from trial to persistence.

Recommended wide-desktop composition:

```text
┌ conversation example ┐   ┌ persistence flow ┐
│ “I want to keep      │   │ ChatGPT trial    │
│  this one.”          │   │       ↓          │
│                      │   │ state handoff     │
│ AI prepares accepted │   │       ↓          │
│ state + evidence     │   │ private repo      │
└──────────────────────┘   │       ↓          │
                           │ continue          │
                           └───────────────────┘
```

Mobile: the same content becomes one vertical flow.

Explain GitHub persistence accurately:

- a read-only connection can continue from saved repository state;
- a write-capable GitHub Plugin / Connector can commit when repository permission and governance allow it;
- another write-capable host may perform persistence when ChatGPT cannot.

## 10. CORE / JOURNEY preview

Desktop should show two distinct preview panels:

- **CORE** — who this instance is now.
- **JOURNEY** — how this instance became itself.

Do not use invented levels or XP.

Game-like presentation may use badges, timeline nodes, status chips, or factual counts where those values exist.

## 11. Motion and interaction

Allowed lightweight effects:

- reveal-on-scroll
- subtle card lift on pointer hover
- glowing connector path
- speech bubble cycling
- small status transition emphasis
- achievement unlock highlight

### Motion requirements

- support `prefers-reduced-motion: reduce`;
- essential information must not require animation;
- avoid large continuous movement behind reading text;
- avoid autoplay video as a dependency for understanding the page.

Pointer hover must never be required for content access; touch and keyboard users need equivalent access.

## 12. Visual system

Keep the existing Tsuzuri Harness green identity, but use it as an accent rather than flooding the entire viewport.

Recommended visual hierarchy:

- light neutral page background;
- dark blank-instance panel for contrast;
- green forming-state and primary CTA accents;
- blue / violet accents for synthetic branch examples;
- thin grid / circuit / path decoration at low contrast;
- rounded panels with consistent radii and restrained shadows.

The page should feel like a polished game UI, not a generic SaaS dashboard and not a children’s game.

## 13. Typography and overflow rules

- Never rely on character-by-character wrapping for labels such as `UNKNOWN INSTANCE`.
- Use short display labels or allow whole-word wrapping.
- Japanese headline containers must have bounded widths.
- Cards must use `min-width: 0` inside CSS grid/flex parents to avoid intrinsic overflow.
- Long localization strings must wrap without shrinking adjacent panels below their minimum readable width.
- Do not use fixed pixel heights for text-heavy cards unless overflow behavior is explicitly handled.

## 14. Accessibility

At minimum:

- semantic headings preserve document order across all breakpoints;
- CTA links and buttons have visible focus states;
- color is not the only indicator of Blank / Forming / event state;
- touch controls remain comfortably targetable;
- horizontal snap areas remain keyboard-scrollable where practical;
- decorative animation is disabled or reduced for reduced-motion users;
- decorative mascot and connector arrows do not create duplicate screen-reader narration;
- text remains readable at browser zoom and narrow desktop windows.

## 15. Localization contract

Structure and CSS are shared across locales.

Do not solve locale differences by creating separate hand-tuned layouts per language unless a specific language requires it.

Design for expansion:

- English and Spanish may be longer than Japanese labels;
- Chinese may be compact but should not use assumptions tied to Japanese line breaks;
- Korean line breaks must remain natural;
- heading and card layout must tolerate variable text length.

If a locale requires a shorter display label, keep the semantic meaning equivalent and leave detailed terminology to body copy or documentation.

## 16. Acceptance criteria

The implementation is not complete until the deployed page is visually checked at representative widths.

### Required viewport classes

At least:

- narrow phone: approximately 360–390px
- large phone: approximately 430px
- tablet / narrow desktop: approximately 768–1024px
- desktop: approximately 1280px
- wide desktop: approximately 1440px or more

### Must pass

1. Hero headline communicates both **no preset personality** and **emergence of “this one.”**
2. Hero headline does not break into visually accidental single-character columns.
3. Hero demo cards / panel remain readable and are not compressed into narrow strips.
4. The AI mascot reads as friendly and clearly smiling at mobile size without an image dependency.
5. Branch connector points down in vertical layouts and right in horizontal layouts.
6. At 768–1179px, layout may stack rather than forcing desktop columns.
7. Desktop branch cards have aligned, balanced visual height.
8. CTA labels remain readable without overlapping or clipping.
9. No horizontal page overflow at supported widths.
10. Mobile achievement strip is usable by touch.
11. Reduced-motion mode remains understandable.
12. Primary links still work after layout changes.
13. English and Japanese pages use the same responsive system.

## 17. Validation procedure

1. Run existing repository validation / CI.
2. Open the deployed GitHub Pages site, not only local source.
3. Inspect mobile and desktop layouts visually.
4. Test at an intermediate width around 900–1024px specifically; this is a common failure zone.
5. Check Japanese and English text wrapping.
6. Confirm the branch arrow direction in stacked and wide layouts.
7. Confirm the mascot remains recognizable at phone width.
8. Confirm primary ChatGPT, guide, repository-generation, CORE, and JOURNEY links.
9. Re-test after any CSS change that affects sizing, grid, typography, or breakpoints.

Automated checks can detect missing selectors and links, but they do not prove visual correctness. Final acceptance requires visual inspection of the deployed artifact.

## 18. Non-goals for this iteration

- Remotion integration
- autoplay hero video
- framework migration
- real user-instance state rendered on the public demo
- fictional RPG stats
- full design-system extraction
- a fixed canonical character design for user instances

Those may be evaluated after the responsive game-like landing page is stable.