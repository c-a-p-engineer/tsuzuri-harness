#!/usr/bin/env python3
"""Reconcile public feature links and contribution guidance.

This is a transitional helper. The canonical public inventory is
`docs/CAPABILITIES.md`; normative behavior remains owned by AGENTS.md,
function contracts, schemas, and evals.
"""

from __future__ import annotations

import argparse
from pathlib import Path

ROOT = Path(__file__).resolve().parents[1]
SYNC_START = "<!-- FEATURE-DOC-SYNC:START -->"
SYNC_END = "<!-- FEATURE-DOC-SYNC:END -->"


def replace_between(text: str, start: str, end: str, block: str) -> str:
    if start not in text or end not in text:
        return text
    a = text.index(start)
    b = text.index(end, a) + len(end)
    return text[:a] + block.rstrip() + text[b:]


def updated_text(path: Path, text: str) -> str:
    text = text.replace("docs/FEATURES.ja.md", "docs/CAPABILITIES.ja.md")
    text = text.replace("docs/FEATURES.md", "docs/CAPABILITIES.md")
    text = text.replace(
        "https://github.com/c-a-p-engineer/tsuzuri-harness/blob/master/docs/FEATURES.ja.md",
        "https://github.com/c-a-p-engineer/tsuzuri-harness/blob/master/docs/CAPABILITIES.ja.md",
    )
    text = text.replace(
        "https://github.com/c-a-p-engineer/tsuzuri-harness/blob/master/docs/FEATURES.md",
        "https://github.com/c-a-p-engineer/tsuzuri-harness/blob/master/docs/CAPABILITIES.md",
    )

    if path.name == "CONTRIBUTING.md":
        block = """<!-- FEATURE-DOC-SYNC:START -->
## Public capability documentation

`docs/CAPABILITIES.md` is the canonical **public human-readable capability inventory**. Normative behavior remains owned by `AGENTS.md`, `function/`, schemas, and evals.

When a change **adds, removes, renames, deprecates, merges, or materially changes a public capability**, review `docs/CAPABILITIES.md` in the same change. Update `docs/CAPABILITIES.ja.md` when the affected Japanese explanation exists, and review README / GitHub Pages when the change affects what an ordinary user should understand before trying the Harness.

Internal refactors and bug fixes with no public capability impact do not require ceremonial documentation edits. `no_public_doc_change` is a valid conclusion when justified.

Follow [`docs/DOCUMENTATION-SYNC.md`](docs/DOCUMENTATION-SYNC.md) for the full source-of-truth hierarchy and review sequence.
<!-- FEATURE-DOC-SYNC:END -->
"""
        text = replace_between(text, SYNC_START, SYNC_END, block)

    if path.name == "PULL_REQUEST_TEMPLATE.md":
        block = """<!-- FEATURE-DOC-SYNC:START -->
## Public capability surface

- [ ] This change does not add/remove/rename/deprecate/materially change a public capability
- [ ] OR: `docs/CAPABILITIES.md` was reviewed/updated for the public capability change
- [ ] Japanese README / Pages / `docs/CAPABILITIES.ja.md` were reviewed where affected
- [ ] `docs/DOCUMENTATION-SYNC.md` review sequence was considered
<!-- FEATURE-DOC-SYNC:END -->
"""
        text = replace_between(text, SYNC_START, SYNC_END, block)

    return text


def main() -> int:
    parser = argparse.ArgumentParser()
    mode = parser.add_mutually_exclusive_group(required=True)
    mode.add_argument("--write", action="store_true")
    mode.add_argument("--check", action="store_true")
    args = parser.parse_args()

    paths = [
        ROOT / "README.md",
        ROOT / "README.ja.md",
        ROOT / "site/index.html",
        ROOT / "site/ja/index.html",
        ROOT / "CONTRIBUTING.md",
        ROOT / ".github/PULL_REQUEST_TEMPLATE.md",
    ]

    drift: list[str] = []
    for path in paths:
        current = path.read_text(encoding="utf-8")
        expected = updated_text(path, current)
        if current != expected:
            drift.append(str(path.relative_to(ROOT)))
            if args.write:
                path.write_text(expected, encoding="utf-8")

    if args.check and drift:
        print("Public capability documentation needs reconciliation:")
        for item in drift:
            print(f"- {item}")
        return 1

    if args.write:
        if drift:
            print("Reconciled public capability documentation:")
            for item in drift:
                print(f"- {item}")
        else:
            print("Public capability documentation already reconciled.")
    return 0


if __name__ == "__main__":
    raise SystemExit(main())
