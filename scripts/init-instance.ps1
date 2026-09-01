param(
    [switch]$Force
)

$ErrorActionPreference = 'Stop'
$Root = Split-Path -Parent (Split-Path -Parent $MyInvocation.MyCommand.Path)
Set-Location $Root

function Copy-InstanceFile {
    param(
        [Parameter(Mandatory = $true)][string]$Source,
        [Parameter(Mandatory = $true)][string]$Destination
    )

    $parent = Split-Path -Parent $Destination
    if ($parent) {
        New-Item -ItemType Directory -Force -Path $parent | Out-Null
    }

    if ((Test-Path $Destination) -and -not $Force) {
        throw "Refusing to overwrite $Destination. Re-run with -Force only if you intentionally want to reset this file."
    }

    Copy-Item -Path $Source -Destination $Destination -Force
}

Copy-InstanceFile 'templates/instance/identity/state.yaml' 'identity/state.yaml'
Copy-InstanceFile 'templates/instance/relationship/state.yaml' 'relationship/state.yaml'
Copy-InstanceFile 'templates/instance/memory/index.yaml' 'memory/index.yaml'

@'
schema_version: 1
mode: instance
upstream: c-a-p-engineer/tsuzuri-harness
identity_state: identity/state.yaml
relationship_state: relationship/state.yaml
memory_index: memory/index.yaml
'@ | Set-Content -Path '.tsuzuri-instance.yaml' -Encoding utf8

Write-Host 'Tsuzuri Harness instance initialized.'
Write-Host ''
Write-Host 'Next steps:'
Write-Host '  1. Prefer storing this personal instance in an independent private repository.'
Write-Host '  2. Read AGENTS.md with your compatible AI host.'
Write-Host '  3. Do not pre-fill a persona just to complete the template; null/unformed state is valid.'
Write-Host '  4. Keep .runtime/ transient and untracked.'
Write-Host ''
Write-Host 'If this repository is a GitHub fork, continuing is supported, but long-lived personal instances are easier to maintain in an independent repository because local evolution can diverge from upstream.'
