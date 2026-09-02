$ErrorActionPreference = 'Stop'
$Root = (Resolve-Path (Join-Path $PSScriptRoot '..')).Path
Set-Location $Root
$Timestamp = (Get-Date).ToUniversalTime().ToString('yyyyMMddTHHmmssZ')
$Dest = Join-Path $Root ".runtime/backups/$Timestamp"
New-Item -ItemType Directory -Force -Path $Dest | Out-Null

$Paths = @('identity', 'relationship', 'memory', 'evolution', 'function/skills', 'CORE.md', 'JOURNEY.md', '.tsuzuri-instance.yaml')
foreach ($Path in $Paths) {
    if (Test-Path $Path) {
        $Target = Join-Path $Dest $Path
        $Parent = Split-Path $Target -Parent
        if ($Parent) {
            New-Item -ItemType Directory -Force -Path $Parent | Out-Null
        }
        if ((Get-Item $Path).PSIsContainer) {
            Copy-Item -Recurse -Force $Path $Target
        } else {
            Copy-Item -Force $Path $Target
        }
    }
}

Write-Host "Tsuzuri Harness instance backup created at $Dest"
Write-Host 'This backup is under .runtime/ and is not a substitute for an external or committed backup.'
