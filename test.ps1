# Verification Test for Plant Doctor Enhanced Version
$html = Get-Content "index.html" -Raw
$js = Get-Content "app.js" -Raw

$requiredIds = @(
  "lbl-tagline", "lbl-main-title", "lbl-main-sub", "lbl-step1", "lbl-step2", "lbl-step3",
  "lbl-card-camera-title", "lbl-card-camera-sub", "lbl-card-upload-title", "lbl-card-upload-sub",
  "lbl-cam-guide", "lbl-cam-cancel", "lbl-flip-cam", "lbl-snap-btn",
  "lbl-sample-title", "lbl-loading-title", "lbl-loading-sub",
  "btn-speak-voice", "icon-voice-state", "lbl-voice-btn", "voice-equalizer",
  "btn-voice-speed", "lbl-voice-speed", "lbl-recovery-rate", "lbl-infection-rate", "bar-recovery", "bar-infection",
  "lbl-action-title", "lbl-step1-title", "lbl-step1-desc", "lbl-step2-title", "lbl-step2-desc",
  "lbl-step3-title", "lbl-step3-desc", "lbl-checklist-title", "checklist-progress",
  "chk-step1", "chk-step2", "chk-step3", "lbl-chk-step1", "lbl-chk-step2", "lbl-chk-step3", "checklist-completed-banner",
  "lbl-dose-title", "lbl-dose-mix-label", "lbl-dose-result", "scale-btn-small", "scale-btn-medium", "scale-btn-large",
  "lbl-whatsapp-btn", "lbl-adv-toggle", "adv-details-container", "adv-pathogen", "adv-chemical", "adv-cause",
  "lbl-scan-another", "res-plant-name", "res-disease-name", "res-badge-danger", "res-leaf-photo",
  "section-welcome", "section-input-cards", "section-samples", "section-loading", "section-result",
  "container-camera", "camera-feed", "camera-canvas", "file-input"
)

$missing = @()
foreach ($id in $requiredIds) {
  if ($html -notmatch "id=['`"]$id['`"]") {
    $missing += $id
  }
}

if ($missing.Count -eq 0) {
  Write-Host "[PASS] All UI Element IDs verified in index.html!" -ForegroundColor Green
} else {
  Write-Host "[FAIL] Missing IDs: $($missing -join ', ')" -ForegroundColor Red
  exit 1
}

$requiredFuncs = @(
  "setAppLanguage", "startCameraMode", "closeCameraMode", "switchCameraFacing",
  "captureFromCamera", "loadSample", "processImageAndDiagnose", "displayDiagnosisResult",
  "setSimpleScale", "toggleDoctorVoice", "toggleVoiceSpeed", "getBestNaturalVoice",
  "updateChecklist", "shareOnWhatsApp", "toggleAdvancedDetails", "resetToHome"
)

$missingFuncs = @()
foreach ($fn in $requiredFuncs) {
  if ($js -notmatch "function\s+$fn\b") {
    $missingFuncs += $fn
  }
}

if ($missingFuncs.Count -eq 0) {
  Write-Host "[PASS] All core JS functions verified!" -ForegroundColor Green
} else {
  Write-Host "[FAIL] Missing JS functions: $($missingFuncs -join ', ')" -ForegroundColor Red
  exit 1
}

Write-Host "Enhanced Plant Doctor verification successful!" -ForegroundColor Cyan
