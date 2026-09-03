# Robot Growth Visual Specification

Status: canonical public-site visual specification  
Scope: `site/` synthetic growth demo  
Japanese translation: [`ROBOT-GROWTH-VISUAL-SPEC.ja.md`](ROBOT-GROWTH-VISUAL-SPEC.ja.md)

## Purpose

The public Tsuzuri Harness site uses robot forms to make one concept immediately understandable:

> AI can be something that grows with you, not only something you use.

The robot is a **visual metaphor for formation and individuality**. It is not a canonical avatar system, hidden personality score, or deterministic evolution tree.

## Hero message

Primary English concept:

> **AI is not only something you use. It can grow with you.**

Supporting idea:

> Time spent together slowly shapes who this one becomes.

The site may include a quiet blessing/wish beneath the explanatory copy:

> May you and this one find a good beginning, and a journey worth continuing.

The wish is presentation copy. It does not define instance values, beliefs, or relationship state.

## Visual forms

### 1. Blank Form

Purpose: show an instance before a distinctive history has formed.

Visual properties:

- intentionally inorganic and emotionally neutral;
- compact geometric shell;
- dark display face;
- small sensor-like eyes;
- no smile or cheek marks;
- grayscale / muted green accents;
- stable, non-expressive posture.

Blank must not look damaged, sad, inferior, or incomplete. `null` / unformed state is valid.

### 2. Growing Form

Purpose: show that interaction has begun to produce candidates and observable change.

Visual properties:

- slightly rounder than Blank;
- warmer green light;
- modest expression;
- still visually between Blank and the example outcome forms.

Growing Form is not a mandatory lifecycle stage and does not imply that a name, memory, skill, or personality will necessarily be retained.

### 3. Cool Form — synthetic example

Purpose: visually represent one possible history shaped by technical, investigative, analytical, or building-oriented experience.

Visual properties:

- sharper silhouette;
- cyan / blue-green technical accents;
- calm, narrow sensor eyes;
- small panel / HUD-like details;
- capable and dependable rather than aggressive.

This form must not imply that technical users always create the same personality.

### 4. Cute Form — synthetic example

Purpose: visually represent one possible history shaped by conversational, creative, reflective, or companionship-oriented experience.

Visual properties:

- rounder silhouette;
- larger expressive eyes;
- soft smile and subtle cheek light;
- pink / violet accent allowed while retaining Tsuzuri Harness green in the surrounding UI;
- friendly and companion-like without becoming infantile.

This form must not imply that creative or conversational users always create the same personality.

## No hidden evolution score

The public demo must not invent mechanics such as:

- technical points;
- cute points;
- affection meters;
- XP or levels;
- fixed thresholds that transform one robot into another.

The visual examples communicate **different histories can feel different**. They do not define canonical classification rules.

If a future persistent-instance feature allows an instance to choose, generate, or evolve its own avatar, that must be designed separately with identity acceptance, provenance, governance, and persistence rules.

## Flow presentation

Do not use arrow glyphs as the primary explanation of growth.

Prefer:

- spatial grouping;
- numbered steps;
- soft glowing connector lines;
- speech bubbles entering a state panel;
- changes in the robot itself;
- timelines and milestone cards.

A connector line has no semantic direction by itself. Reading order and headings must remain clear without it.

## Responsive behavior

- Mobile: Blank, interaction, growth examples, and save flow read vertically.
- Tablet: maintain vertical semantic order; branch examples may sit side-by-side.
- Wide desktop: Blank source may sit beside multiple example outcomes, joined by subtle light paths rather than arrows.
- No robot card may become so narrow that the face or status labels collapse.

## Accessibility

- Robot appearance is decorative support, not the only carrier of meaning.
- Text identifies Blank, forming state, and synthetic outcome examples.
- Color alone must not distinguish forms.
- Decorative animation respects `prefers-reduced-motion`.
- The site remains understandable if CSS robot art fails to render.

## Acceptance criteria

1. Blank robot reads as neutral and machine-like, not cute by default.
2. Cool and Cute examples are visually distinct at a glance.
3. Neither example is presented as a guaranteed evolution path.
4. No arrow glyph is required to understand branching or save flow.
5. Japanese and English hero copy center the idea of growth rather than configuration.
6. The wish/blessing is visibly secondary to the product explanation.
7. The public page remains functional without images or external animation libraries.
8. Mobile and wide desktop layouts preserve the same semantic story.
