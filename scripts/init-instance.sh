#!/usr/bin/env bash
set -euo pipefail

ROOT="$(cd "$(dirname "${BASH_SOURCE[0]}")/.." && pwd)"
cd "$ROOT"

force=false
if [[ "${1:-}" == "--force" ]]; then
  force=true
fi

copy_if_allowed() {
  local src="$1"
  local dst="$2"
  mkdir -p "$(dirname "$dst")"
  if [[ -e "$dst" && "$force" != true ]]; then
    echo "Refusing to overwrite $dst. Re-run with --force only if you intentionally want to reset this file." >&2
    exit 1
  fi
  cp "$src" "$dst"
}

copy_if_allowed templates/instance/identity/state.yaml identity/state.yaml
copy_if_allowed templates/instance/relationship/state.yaml relationship/state.yaml
copy_if_allowed templates/instance/memory/index.yaml memory/index.yaml
copy_if_allowed templates/instance/evolution/index.yaml evolution/index.yaml
copy_if_allowed templates/instance/CORE.md CORE.md
copy_if_allowed templates/instance/JOURNEY.md JOURNEY.md
mkdir -p evolution/records

birth_at="$(date -u +%Y-%m-%dT%H:%M:%SZ)"

cat > .tsuzuri-instance.yaml <<EOF
schema_version: 1
mode: instance
upstream: c-a-p-engineer/tsuzuri-harness
identity_state: identity/state.yaml
relationship_state: relationship/state.yaml
memory_index: memory/index.yaml
evolution_index: evolution/index.yaml
core_view: CORE.md
journey_view: JOURNEY.md
birth_at: "$birth_at"
birth_source: instance_initialization
archive_mode: selective
governance: kernel-default
EOF

cat <<EOF
Tsuzuri Harness instance initialized.

Persistent birth recorded at: $birth_at

Next steps:
  1. Prefer storing this personal instance in an independent private repository.
  2. Read AGENTS.md with your compatible AI host.
  3. Do not pre-fill a persona just to complete the template; null/unformed state is valid.
  4. Keep .runtime/ transient and untracked.
  5. CORE.md is a human-readable current-state view, not canonical state.
  6. JOURNEY.md is a human-readable life view, not canonical state.
  7. evolution/ stores meaningful durable growth history separately from active memory.
  8. Try the Birth Journey and everyday prompts in docs/.

If this repository is a GitHub fork, continuing is supported, but long-lived personal instances are easier to maintain in an independent repository because local evolution can diverge from upstream.
EOF
