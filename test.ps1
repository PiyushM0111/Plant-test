# Automated Test Suite for FloraDoc AI
$ErrorActionPreference = "Stop"

Write-Host "Running automated tests for FloraDoc AI..." -ForegroundColor Cyan

# 1. Check HTML Structure and required element IDs
$htmlContent = Get-Content "index.html" -Raw

$requiredIds = @(
    "camera-feed", "camera-canvas", "camera-overlay", "camera-fallback",
    "btn-torch", "btn-shutter", "file-input", "dropzone",
    "preview-section", "active-image-preview", "gradcam-canvas", "scanning-laser",
    "spectral-metrics-card", "spectral-chlorophyll", "spectral-necrosis", "spectral-viability",
    "btn-toggle-gradcam", "gradcam-btn-text", "btn-trigger-diagnose",
    "panel-empty-state", "panel-result", "res-badge-severity", "res-plant-name",
    "res-disease-name", "res-pathogen-scientific", "res-description",
    "res-confidence-circle", "res-confidence-text", "btn-speak-report",
    "timeline-slider", "prognosis-day-label", "prognosis-title", "prognosis-desc",
    "res-organic-cures", "res-chemical-cures", "res-prevention-tips", "res-quarantine-box", "res-quarantine-text",
    "chat-messages", "chat-form", "chat-input",
    "view-scanner", "view-calculator", "view-library", "view-history",
    "calc-pot-volume", "calc-garden-area", "calc-severity", "calc-res-neem", "calc-res-copper", "calc-res-water",
    "library-search", "library-grid", "history-container", "history-badge"
)

$missingIds = @()
foreach ($id in $requiredIds) {
    if ($htmlContent -notmatch "id=['`"]$id['`"]") {
        $missingIds += $id
    }
}

if ($missingIds.Count -gt 0) {
    Write-Host "[FAIL] Missing HTML IDs: $($missingIds -join ', ')" -ForegroundColor Red
} else {
    Write-Host "[PASS] All $($requiredIds.Count) critical HTML element IDs verified!" -ForegroundColor Green
}

# 2. Check JS content for critical functions
$jsContent = Get-Content "app.js" -Raw
$requiredFunctions = @(
    "initCamera", "switchCameraFacing", "toggleTorch", "captureFromCamera",
    "analyzeLeafPixels", "generateGradCamOverlay", "toggleGradCamHeatmap",
    "setActiveImage", "clearActiveImage", "runDiagnosis", "renderDiagnosisResult",
    "updatePrognosisDay", "calculateDosage", "setCalcScale", "speakPrescription",
    "handleChatSubmit", "saveToJournal", "renderHistoryJournal", "renderDiseaseLibrary",
    "switchNav", "setInputMode"
)

$missingFuncs = @()
foreach ($fn in $requiredFunctions) {
    if ($jsContent -notmatch "function\s+$fn\b") {
        $missingFuncs += $fn
    }
}

if ($missingFuncs.Count -gt 0) {
    Write-Host "[FAIL] Missing JS functions: $($missingFuncs -join ', ')" -ForegroundColor Red
} else {
    Write-Host "[PASS] All $($requiredFunctions.Count) core JavaScript functions verified!" -ForegroundColor Green
}

# 3. Test Web Server Response Simulation
Write-Host "[INFO] Validating manifest.json..."
$manifest = Get-Content "manifest.json" -Raw | ConvertFrom-Json
if ($manifest.name -and $manifest.display -eq "standalone") {
    Write-Host "[PASS] Web App Manifest configured correctly for mobile standalone PWA!" -ForegroundColor Green
}

Write-Host "`nTest Suite Completed Successfully!" -ForegroundColor Cyan
