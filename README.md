# 🌿 FloraDoc AI — Smart Plant Disease Classifier & Prescription Clinic

A modern, responsive, botanical health web platform that detects plant diseases from leaves, computes severity metrics, and prescribes organic, chemical, and preventive treatment plans.

---

## 🌟 Key Features

1. **Multi-Input Leaf Capture:**
   - 📷 **Live Camera Scanner:** Real-time webcam/mobile camera viewfinder with targeting reticle and front/rear camera switcher.
   - 📤 **Drag & Drop Uploader:** Instant image dropping, file browsing, or direct clipboard pasting (`Ctrl + V`).
   - 🧪 **One-Click Samples:** Pre-loaded real diseased and healthy leaf scenarios (Tomato Early Blight, Rose Black Spot, Citrus Canker, Potato Late Blight, Monstera Root Rot, Healthy Bell Pepper).

2. **Holographic Pathology Scanner:**
   - Animated laser beam sweep simulation with step-by-step progress tracking.
   - Confidence dial and severity indicator (`Critical`, `High`, `Moderate`, `Healthy`).
   - Interactive lesion heatmap hotspot overlay.

3. **4-Pillar Clinical Treatment Plan:**
   - 🌿 **Organic Remedies:** Natural, eco-friendly recipes (neem oil emulsions, baking soda spray, copper fungicidal washes).
   - 🧪 **Chemical Intervention:** Targeted fungicides with dosage guidelines and harvest interval warnings.
   - 🛡️ **Prevention & Cultural Care:** Irrigation guidelines, crop rotation, soil aeration, and ventilation advice.
   - ⚠️ **Quarantine & Urgency Checklist:** Pruning hygiene and containment advice.

4. **Interactive Plant Doctor Chatbot:**
   - Ask follow-up questions directly beneath the diagnosis (e.g., fruit edibility, neem oil schedule, cross-contamination risks).

5. **Garden Journal & Local History:**
   - Saves all past scans to browser `localStorage` with thumbnails, timestamps, and full diagnosis recall.

6. **Disease Encyclopedia:**
   - Searchable reference library of common horticultural pathogens and biological details.

7. **Voice Audio & Print Prescription:**
   - Built-in Text-to-Speech audio reader and 1-click printable prescription slip.

---

## 🚀 How to Run

### Method 1: Instant 1-Click Launch (Recommended)
Double-click `start.bat` in this folder. It starts a lightweight local server and automatically opens `http://localhost:3000` in your default browser.

### Method 2: Direct File Open
Double-click `index.html` to open directly in Google Chrome, Microsoft Edge, or Mozilla Firefox.

---

## 🛠️ Tech Stack
- **Frontend:** HTML5, CSS3, JavaScript (ES6+)
- **Styling & UI:** Tailwind CSS, Glassmorphism, Custom Keyframe Animations
- **Icons:** Lucide Icons
- **APIs:** HTML5 MediaDevices (Camera), Canvas API, Web Speech API, LocalStorage API
- **AI Engine:** Built-in Botanical Pathology Database with optional Google Gemini Multimodal Vision API toggle
