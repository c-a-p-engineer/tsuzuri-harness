#!/usr/bin/env bash
set -euo pipefail

root="$(cd "$(dirname "${BASH_SOURCE[0]}")/.." && pwd)"
cd "$root"

timestamp="$(date -u +%Y%m%dT%H%M%SZ)"
dest=".runtime/backups/$timestamp"
mkdir -p "$dest"

for path in identity relationship memory function/skills; do
  if [[ -e "$path" ]]; then
    mkdir -p "$dest/$(dirname "$path")"
    cp -a "$path" "$dest/$path"
  fi
done

printf 'Tsuzuri Harness instance backup created at %s\n' "$dest"
printf 'This backup is under .runtime/ and is not a substitute for an external or committed backup.\n'
