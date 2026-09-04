#!/usr/bin/env python3
"""Synchronize public feature discovery surfaces from docs/features.json.

The feature catalog is a discovery/source-of-presentation file, not the normative
owner of harness behavior. Normative behavior remains in AGENTS.md, function/
contracts, schemas, and evals.
"""

from __future__ import annotations

import argparse
import html
import json
from pathlib import Path

ROOT = Path(__file__).resolve().parents[1]
CATALOG_PATH = ROOT / "docs/features.json"

FEATURE_START = "<!-- FEATURE-CATALOG:START -->"
FEATURE_END = "<!-- FEATURE-CATALOG:END -->"
SYNC_START = "<!-- FEATURE-DOC-SYNC:START -->"
SYNC_END = "<!-- FEATURE-DOC-SYNC:END -->"


def load_catalog() -> dict:
    return json.loads(CATALOG_PATH.read_text(encoding="utf-8"))


def rel_doc_link(reference: str) -> str:
    if reference.startswith("docs/"):
        return reference.removeprefix("docs/")
    return "../" + reference


def render_features_doc(catalog: dict, lang: str) -> str:
    ja = lang == "ja"
    title = "Tsuzuri Harness 標準機能" if ja else "Tsuzuri Harness Default Capabilities"
    intro = (
        "この一覧は、Blank Instanceに**最初から人格・Memory・獲得Skillが入っている**という意味ではありません。"
        "最初から入っているのは、それらを経験から形成・維持・検索・進化させるためのKernel機構です。\n\n"
        "このページは公開機能を見つけるためのDiscovery Catalogです。Normativeな挙動の正本は `AGENTS.md`、`function/`、Schema、Evalです。"
        if ja
        else "This list does **not** mean a blank instance ships with a persona, memories, or acquired specialist skills. "
        "It ships with kernel mechanisms that can form, maintain, retrieve, and evolve those things through experience.\n\n"
        "This page is a discovery catalog. Normative behavior remains owned by `AGENTS.md`, `function/` contracts, schemas, and evals."
    )
    lines = [f"# {title}", "", intro, ""]
    for category in catalog["categories"]:
        ctitle = category["title_ja" if ja else "title_en"]
        csummary = category["summary_ja" if ja else "summary_en"]
        lines += [f"## {ctitle}", "", csummary, "", "| Feature | What it does | Reference |" if not ja else "| 機能 | 何をする？ | Reference |", "| --- | --- | --- |"]
        for feature in category["features"]:
            name = feature["name_ja" if ja else "name_en"]
            summary = feature["summary_ja" if ja else "summary_en"]
            ref = feature["reference"]
            lines.append(f"| **{name}** | {summary} | [`{ref}`]({rel_doc_link(ref)}) |")
        lines.append("")
    lines += [
        "## 境界" if ja else "## Boundaries",
        "",
        (
            "HarnessはBase Model、Browser、Terminal、Sandbox、Scheduler等のHost Runtimeそのものは提供しません。"
            "また、綴理本人のIdentity・Private Memory・Relationship・獲得済み専門Skillも含みません。"
            if ja
            else "The harness does not provide a base model, browser, terminal, sandbox, scheduler, or other host runtime. "
            "It also does not include Tsuzuri's personal identity, private memory, relationship history, or acquired specialist skills."
        ),
        "",
    ]
    return "\n".join(lines)


def render_readme_block(catalog: dict, lang: str) -> str:
    ja = lang == "ja"
    heading = "## Harnessが標準で提供する機能" if ja else "## Default capabilities"
    lead = (
        "Blank Instanceは名前・人格・Memory・獲得Skillが空の状態から始まります。**空なのは中身で、育つための仕組みは最初からあります。**"
        if ja
        else "A blank instance starts with no name, predefined persona, long-term memory, or acquired specialist skills. **The personal state is blank; the mechanisms for growing it are already there.**"
    )
    lines = [FEATURE_START, heading, "", lead, "", "| | " + ("カテゴリ" if ja else "Area") + " | " + ("標準でできること" if ja else "What is built in") + " |", "| --- | --- | --- |"]
    for category in catalog["categories"]:
        icon = category["icon_ja" if ja else "icon_en"]
        title = category["title_ja" if ja else "title_en"]
        summary = category["summary_ja" if ja else "summary_en"]
        lines.append(f"| **{icon}** | **{title}** | {summary} |")
    if ja:
        lines += ["", "**全機能一覧:** [`docs/FEATURES.ja.md`](docs/FEATURES.ja.md) · [Canonical English](docs/FEATURES.md)"]
    else:
        lines += ["", "**Full capability catalog:** [`docs/FEATURES.md`](docs/FEATURES.md) · [日本語](docs/FEATURES.ja.md)"]
    lines += [FEATURE_END, ""]
    return "\n".join(lines)


def render_site_block(catalog: dict, lang: str) -> str:
    ja = lang == "ja"
    kicker = "最初から入っているもの" if ja else "WHAT SHIPS WITH THE HARNESS"
    title = "空なのは人格。育つための仕組みは、最初からある。" if ja else "The persona starts blank. The growth mechanisms do not."
    lead = (
        "名前・Memory・獲得Skillは0から始まります。その一方で、育つ・覚える・学ぶ・変わる・長く続けるためのKernel機能は標準で備わっています。"
        if ja
        else "Names, memories, and acquired skills start at zero. The kernel mechanisms for growing, remembering, learning, evolving, and continuing safely are built in."
    )
    parts = [
        FEATURE_START,
        '<section class="game-section" id="features">',
        '  <div class="section-head reveal">',
        f'    <div class="section-kicker">{html.escape(kicker)}</div>',
        f'    <h2>{html.escape(title)}</h2>',
        f'    <p>{html.escape(lead)}</p>',
        '  </div>',
        '  <div class="achievement-strip reveal" aria-label="' + ("Tsuzuri Harnessの標準機能カテゴリ" if ja else "Tsuzuri Harness default capability categories") + '">',
    ]
    for category in catalog["categories"]:
        icon = html.escape(category["icon_ja" if ja else "icon_en"])
        ctitle = html.escape(category["title_ja" if ja else "title_en"])
        summary = html.escape(category["summary_ja" if ja else "summary_en"])
        parts += [
            '    <article class="achievement-card">',
            f'      <div class="achievement-icon">{icon}</div>',
            f'      <h3>{ctitle}</h3>',
            f'      <p class="muted">{summary}</p>',
            '    </article>',
        ]
    features_url = "https://github.com/c-a-p-engineer/tsuzuri-harness/blob/master/docs/FEATURES.ja.md" if ja else "https://github.com/c-a-p-engineer/tsuzuri-harness/blob/master/docs/FEATURES.md"
    label = "標準機能を全部見る" if ja else "See every default capability"
    parts += [
        '  </div>',
        f'  <p class="branch-caption reveal"><a class="btn" href="{features_url}">{html.escape(label)}</a></p>',
        '</section>',
        FEATURE_END,
        "",
    ]
    return "\n".join(parts)


def replace_between_markers(text: str, block: str, start: str, end: str) -> str | None:
    if start not in text or end not in text:
        return None
    a = text.index(start)
    b = text.index(end, a) + len(end)
    return text[:a] + block.rstrip() + text[b:]


def replace_readme_section(text: str, block: str, lang: str) -> str:
    replaced = replace_between_markers(text, block, FEATURE_START, FEATURE_END)
    if replaced is not None:
        return replaced
    start_heading = "## Harnessが提供するもの" if lang == "ja" else "## What the harness provides"
    end_heading = "## 提供しないもの" if lang == "ja" else "## What it does not provide"
    a = text.index(start_heading)
    b = text.index(end_heading, a)
    return text[:a] + block + "\n" + text[b:]


def replace_site_section(text: str, block: str) -> str:
    replaced = replace_between_markers(text, block, FEATURE_START, FEATURE_END)
    if replaced is not None:
        return replaced
    anchor = '<section class="game-section" id="keep">'
    idx = text.index(anchor)
    return text[:idx] + block + text[idx:]


def ensure_contributing(text: str) -> str:
    block = """<!-- FEATURE-DOC-SYNC:START -->
## Public capability documentation

`docs/features.json` is the canonical **public discovery catalog** for default capabilities. It does not replace normative ownership in `AGENTS.md`, `function/`, schemas, or evals.

When a change **adds, removes, renames, merges, or materially changes a public capability**, update `docs/features.json` in the same change. Internal refactors and bug fixes that do not change the public capability surface do not require a catalog edit.

Run:

```bash
python scripts/sync-public-features.py --write
python scripts/sync-public-features.py --check
```

The generator keeps these discovery surfaces synchronized:

- `docs/FEATURES.md` and `docs/FEATURES.ja.md`
- the default-capability summaries in `README.md` and `README.ja.md`
- the feature overview on the English and Japanese GitHub Pages homepages

Do not hand-edit generated feature blocks. Update the catalog, then regenerate.
<!-- FEATURE-DOC-SYNC:END -->
"""
    replaced = replace_between_markers(text, block, SYNC_START, SYNC_END)
    if replaced is not None:
        return replaced
    anchor = "## Pull requests"
    idx = text.index(anchor)
    return text[:idx] + block + "\n" + text[idx:]


def ensure_pr_template(text: str) -> str:
    block = """<!-- FEATURE-DOC-SYNC:START -->
## Public capability surface

- [ ] This change does not add/remove/rename/materially change a public capability
- [ ] OR: `docs/features.json` was updated for the public capability change
- [ ] `python scripts/sync-public-features.py --check` passes
<!-- FEATURE-DOC-SYNC:END -->
"""
    replaced = replace_between_markers(text, block, SYNC_START, SYNC_END)
    if replaced is not None:
        return replaced
    anchor = "## Validation"
    idx = text.index(anchor)
    return text[:idx] + block + "\n" + text[idx:]


def expected_files(catalog: dict) -> dict[Path, str]:
    outputs: dict[Path, str] = {}
    outputs[ROOT / "docs/FEATURES.md"] = render_features_doc(catalog, "en")
    outputs[ROOT / "docs/FEATURES.ja.md"] = render_features_doc(catalog, "ja")

    readme_en = (ROOT / "README.md").read_text(encoding="utf-8")
    readme_ja = (ROOT / "README.ja.md").read_text(encoding="utf-8")
    outputs[ROOT / "README.md"] = replace_readme_section(readme_en, render_readme_block(catalog, "en"), "en")
    outputs[ROOT / "README.ja.md"] = replace_readme_section(readme_ja, render_readme_block(catalog, "ja"), "ja")

    site_en = (ROOT / "site/index.html").read_text(encoding="utf-8")
    site_ja = (ROOT / "site/ja/index.html").read_text(encoding="utf-8")
    outputs[ROOT / "site/index.html"] = replace_site_section(site_en, render_site_block(catalog, "en"))
    outputs[ROOT / "site/ja/index.html"] = replace_site_section(site_ja, render_site_block(catalog, "ja"))

    contributing = (ROOT / "CONTRIBUTING.md").read_text(encoding="utf-8")
    pr_template = (ROOT / ".github/PULL_REQUEST_TEMPLATE.md").read_text(encoding="utf-8")
    outputs[ROOT / "CONTRIBUTING.md"] = ensure_contributing(contributing)
    outputs[ROOT / ".github/PULL_REQUEST_TEMPLATE.md"] = ensure_pr_template(pr_template)
    return outputs


def main() -> int:
    parser = argparse.ArgumentParser()
    mode = parser.add_mutually_exclusive_group(required=True)
    mode.add_argument("--write", action="store_true")
    mode.add_argument("--check", action="store_true")
    args = parser.parse_args()

    catalog = load_catalog()
    outputs = expected_files(catalog)
    drift: list[str] = []

    for path, expected in outputs.items():
        expected = expected.rstrip() + "\n"
        current = path.read_text(encoding="utf-8") if path.exists() else ""
        if current != expected:
            drift.append(str(path.relative_to(ROOT)))
            if args.write:
                path.parent.mkdir(parents=True, exist_ok=True)
                path.write_text(expected, encoding="utf-8")

    if args.check and drift:
        print("Public feature documentation is out of sync:")
        for path in drift:
            print(f"- {path}")
        print("Run: python scripts/sync-public-features.py --write")
        return 1

    if args.write:
        if drift:
            print("Synchronized public feature documentation:")
            for path in drift:
                print(f"- {path}")
        else:
            print("Public feature documentation already synchronized.")
    return 0


if __name__ == "__main__":
    raise SystemExit(main())
