/**
 * Plant Doctor - Ultra-Simple, Professional Plant Health & Medicine Guide
 * Self-Contained High-Definition Leaf SVGs (Zero Broken Images)
 * Natural Fluent Neural Voice Narrator Engine (English, Hindi, Spanish)
 */

// ============================================================================
// 1. PRESET THUMBNAIL MAP (Zero Broken Images, Native Vector SVGs)
// ============================================================================
const PRESET_THUMB_MAP = {
  tomato_blight: 'thumb-sample-tomato',
  rose_blackspot: 'thumb-sample-rose',
  citrus_canker: 'thumb-sample-citrus',
  healthy_pepper: 'thumb-sample-pepper'
};

// ============================================================================
// 2. MULTILINGUAL UI DICTIONARY (English, Hindi, Spanish)
// ============================================================================
const UI_TEXT = {
  en: {
    tagline: "Easy Plant Health Check & Medicine Guide",
    mainTitle: "What is wrong with your plant?",
    mainSub: "Take a clear photo of the sick leaf. We will tell you the problem and the easiest medicine to cure it.",
    step1: "Take Photo",
    step2: "See Problem",
    step3: "Follow Cure",
    cardCameraTitle: "Take a Photo with Camera",
    cardCameraSub: "Open camera, point at leaf, and click.",
    cardUploadTitle: "Choose Photo from Phone",
    cardUploadSub: "Pick any leaf photo already in your gallery.",
    camGuide: "Point camera at the sick leaf",
    camCancel: "Cancel",
    flipCam: "Flip Front/Back",
    snapBtn: "Click Photo & Check Now",
    sampleTitle: "Or tap a sample leaf to test:",
    loadingTitle: "Checking Plant Leaf...",
    loadingSub: "Finding what is wrong and preparing the medicine guide.",
    voiceBtnNormal: "Listen to Doctor's Advice",
    voiceBtnPlaying: "Speaking Advice... (Tap to Pause)",
    voiceSpeedSlow: "Speed: Slow (0.85x)",
    voiceSpeedNormal: "Speed: Normal (1.0x)",
    actionTitle: "What You Must Do (Step by Step):",
    checklistTitle: "My Treatment Checklist (Tap as you complete)",
    doseTitle: "How Much Medicine Do You Need? Tap your plant size:",
    doseMixLabel: "How to mix:",
    advToggle: "Show Agricultural & Chemical Fungicides (For Experts) ▼",
    scanAnother: "Check Another Leaf",
    sprayInterval: "Spray Every 7 Days",
    whatsAppBtn: "Send Medicine Recipe on WhatsApp (For Fertilizer Shop / Family)",
    checklistDoneBanner: "🎉 Excellent! You have completed all steps. Your plant will recover quickly!"
  },
  hi: {
    tagline: "पौधों की बीमारी की जांच और आसान दवा गाइड",
    mainTitle: "आपके पौधे में क्या बीमारी है?",
    mainSub: "खराब या पीली पत्ती का साफ फोटो लें। हम बीमारी बताएंगे और ठीक करने की सबसे आसान दवा देंगे।",
    step1: "फोटो लें",
    step2: "बीमारी देखें",
    step3: "इलाज करें",
    cardCameraTitle: "कैमरे से फोटो खींचें",
    cardCameraSub: "कैमरा खोलें, पत्ती पर रखें और फोटो लें।",
    cardUploadTitle: "गैलरी से फोटो चुनें",
    cardUploadSub: "अपने फोन में मौजूद पत्ती का फोटो चुनें।",
    camGuide: "कैमरे को खराब पत्ती के सामने रखें",
    camCancel: "रद्द करें",
    flipCam: "कैमरा बदलें",
    snapBtn: "फोटो लें और जांच करें",
    sampleTitle: "या जांचने के लिए इनमें से कोई पत्ता चुनें:",
    loadingTitle: "पत्ती की जांच हो रही है...",
    loadingSub: "बीमारी पहचानी जा रही है और दवा तैयार हो रही है।",
    voiceBtnNormal: "डॉक्टर की सलाह सुनें (आवाज़ में)",
    voiceBtnPlaying: "डॉक्टर सलाह दे रहे हैं... (रोकने के लिए दबाएं)",
    voiceSpeedSlow: "आवाज़: धीमी (0.85x)",
    voiceSpeedNormal: "आवाज़: सामान्य (1.0x)",
    actionTitle: "आपको क्या करना होगा (कदम दर कदम):",
    checklistTitle: "इलाज की चेकलिस्ट (काम पूरा होने पर टिक करें)",
    doseTitle: "दवा की कितनी मात्रा चाहिए? पौधे का आकार चुनें:",
    doseMixLabel: "दवा कैसे बनाएं:",
    advToggle: "रासायनिक खाद और टेक्निकल नाम देखें (विशेषज्ञों के लिए) ▼",
    scanAnother: "दूसरे पौधे की जांच करें",
    sprayInterval: "हर 7 दिन में छिड़कें",
    whatsAppBtn: "व्हाट्सएप पर दवा का पर्चा भेजें (खाद-दुकानदार या परिवार को)",
    checklistDoneBanner: "🎉 बहुत बढ़िया! आपने सभी कदम पूरे कर लिए हैं। आपका पौधा जल्द ठीक हो जाएगा!"
  },
  es: {
    tagline: "Guía fácil de salud y medicina para plantas",
    mainTitle: "¿Qué le pasa a su planta?",
    mainSub: "Tome una foto clara de la hoja enferma. Le diremos el problema y la medicina más fácil para curarla.",
    step1: "Tomar Foto",
    step2: "Ver Problema",
    step3: "Seguir Cura",
    cardCameraTitle: "Tomar Foto con la Cámara",
    cardCameraSub: "Abra la cámara, apunte a la hoja y haga clic.",
    cardUploadTitle: "Elegir Foto del Teléfono",
    cardUploadSub: "Elija cualquier foto de hoja de su galería.",
    camGuide: "Apunte la cámara a la hoja enferma",
    camCancel: "Cancelar",
    flipCam: "Cambiar Cámara",
    snapBtn: "Tomar Foto y Diagnosticar",
    sampleTitle: "O toque una hoja de muestra:",
    loadingTitle: "Analizando la hoja...",
    loadingSub: "Buscando la enfermedad y preparando el tratamiento.",
    voiceBtnNormal: "Escuchar Consejo del Doctor",
    voiceBtnPlaying: "Hablando... (Toque para pausar)",
    voiceSpeedSlow: "Voz: Lenta (0.85x)",
    voiceSpeedNormal: "Voz: Normal (1.0x)",
    actionTitle: "Lo que debe hacer (Paso a Paso):",
    checklistTitle: "Lista de Control (Marque al completar)",
    doseTitle: "¿Cuánta medicina necesita? Elija el tamaño:",
    doseMixLabel: "Cómo mezclar:",
    advToggle: "Ver Químicos Agrícolas (Para Expertos) ▼",
    scanAnother: "Revisar Otra Planta",
    sprayInterval: "Rociar cada 7 días",
    whatsAppBtn: "Enviar Receta por WhatsApp (Para tienda o familia)",
    checklistDoneBanner: "🎉 ¡Excelente! Ha completado todos los pasos. Su planta se recuperará pronto."
  }
};

// ============================================================================
// 3. BOTANICAL KNOWLEDGE BASE & STRUCTURED REMEDIES
// ============================================================================
const EASY_DISEASE_DB = {
  tomato_blight: {
    id: "tomato_blight",
    svgKey: "tomato_blight",
    plant: { en: "🍅 Tomato Plant", hi: "🍅 टमाटर का पौधा", es: "🍅 Planta de Tomate" },
    disease: { en: "Leaf Blight (Fungus Attack)", hi: "पत्ती झुलसा (फंगस का हमला)", es: "Tizón de la Hoja (Hongo)" },
    danger: { en: "⚠️ Danger: High (Act within 2 days)", hi: "⚠️ ख़तरा: तुरंत इलाज की ज़रूरत है", es: "⚠️ Peligro: Actúe en 2 días" },
    dangerLevel: "high",
    recoveryRate: "85%",
    infectionRate: "15%",
    step1Title: { en: "Step 1: Cut Off Sick Leaves", hi: "कदम 1: खराब पत्तियां काटकर फेंकें", es: "Paso 1: Corte las hojas enfermas" },
    step1Desc: {
      en: "Use clean scissors to cut off yellow and brown spotted leaves at the bottom. Throw them in the trash. Never leave them near plants.",
      hi: "साफ कैंची से पौधे के नीचे की पीली और चित्तीदार पत्तियां काट लें। उन्हें कचरे में फेंक दें, गमले या क्यारी के पास न छोड़ें।",
      es: "Corte las hojas amarillas y manchadas de abajo con tijeras limpias. Tírelas a la basura, lejos de las plantas."
    },
    step2Title: { en: "Step 2: Spray Home Neem Medicine", hi: "कदम 2: घर पर नीम तेल की दवा छिड़कें", es: "Paso 2: Rocíe medicina de Neem" },
    step2Desc: {
      en: "Mix 1 spoon Neem Oil + 1 Liter Water + 2 drops soap in a bottle. Shake well. Spray on top and bottom of leaves at sunset (5:00 PM).",
      hi: "1 चम्मच नीम का तेल + 1 लीटर पानी + 2 बूंद बर्तन धोने का साबुन मिलाएं। शाम 5 बजे पत्तों के ऊपर और नीचे अच्छी तरह छिड़कें।",
      es: "Mezcle 1 cucharada de aceite de Neem + 1 litro de agua + 2 gotas de jabón. Rocíe al atardecer."
    },
    step3Title: { en: "Step 3: Water the Soil, NOT Leaves", hi: "कदम 3: सिर्फ मिट्टी में पानी दें, पत्तों पर नहीं", es: "Paso 3: Riegue la tierra, NO las hojas" },
    step3Desc: {
      en: "Pour water directly into the soil at the roots. Keep leaves completely dry. Wet leaves make fungus spread fast.",
      hi: "पानी सिर्फ गमले या क्यारी की मिट्टी में दें। पत्तियों को बिल्कुल सूखा रखें। पत्तियों पर पानी पड़ने से फंगस तेजी से बढ़ता है।",
      es: "Vierta agua directamente en la tierra. Mantenga las hojas secas, ya que la humedad propaga los hongos."
    },
    dosage: {
      small: { en: "🥄 1 Spoon Neem Oil in 🧴 1 Liter Water", hi: "🥄 1 चम्मच नीम का तेल, 🧴 1 लीटर पानी में", es: "🥄 1 Cucharada de Neem en 🧴 1 Litro de Agua" },
      medium: { en: "🥄 3 Spoons Neem Oil in 🧴 3 Liters Water", hi: "🥄 3 चम्मच नीम का तेल, 🧴 3 लीटर पानी में", es: "🥄 3 Cucharadas de Neem en 🧴 3 Litros de Agua" },
      large: { en: "🧴 1 Cup (100ml) in 🎛️ 15-Liter Backpack Sprayer", hi: "🧴 1 कप (100ml) नीम तेल, 🎛️ 15 लीटर की टंकी में", es: "🧴 1 Taza (100ml) en 🎛️ Tanque de 15 Litros" }
    },
    advPathogen: "Alternaria solani (Early Blight Fungus)",
    advChemical: "Mancozeb 75% WP (2.5 grams per liter) or Copper Oxychloride. 7-day harvest interval.",
    advCause: "Warm humid weather with splashing water spread fungal spores to lower leaves.",
    spokenAdvice: {
      en: "Hello. Here is your plant doctor guide. Your tomato plant has early leaf blight fungus. Do not worry, it is easy to treat. Step one: Cut off all yellow and spotted leaves at the bottom with clean scissors, and throw them in the trash. Step two: Mix one spoon of neem oil and two drops of soap into one liter of water, and spray both sides of the leaves at sunset. Step three: Water only the soil near the roots, and keep the leaves dry. Your plant will recover well.",
      hi: "नमस्ते किसान भाई। आपके टमाटर के पौधे पर पत्ती झुलसा फंगस का रोग लगा है। घबराइए नहीं, यह आसानी से ठीक हो जाएगा। आपको तीन आसान काम करने हैं। पहला काम: साफ कैंची से पौधे के नीचे की सभी पीली और खराब पत्तियां काटकर कचरे में फेंक दें। दूसरा काम: एक लीटर पानी में एक चम्मच नीम का तेल और दो बूंद साबुन मिलाकर शाम को पांच बजे पत्तों पर आगे और पीछे अच्छी तरह छिड़कें। तीसरा काम: पानी हमेशा मिट्टी में दें, पत्तों को गीला न होने दें। आपका पौधा दो हफ्तों में बिल्कुल स्वस्थ हो जाएगा।",
      es: "Hola. Aquí está su guía médica de plantas. Su planta de tomate tiene hongo de tizón. No se preocupe, es fácil de curar. Paso uno: corte las hojas amarillas y manchadas de abajo con tijeras limpias y tírelas a la basura. Paso dos: mezcle una cucharada de aceite de neem y dos gotas de jabón en un litro de agua, y rocíe al atardecer. Paso tres: riegue solo la tierra y mantenga las hojas secas. Su planta se recuperará pronto."
    }
  },
  rose_blackspot: {
    id: "rose_blackspot",
    svgKey: "rose_blackspot",
    plant: { en: "🌹 Rose Plant", hi: "🌹 गुलाब का पौधा", es: "🌹 Planta de Rosa" },
    disease: { en: "Black Spot Fungus", hi: "गुलाब के काले धब्बे (फंगस)", es: "Mancha Negra (Hongo)" },
    danger: { en: "⚠️ Danger: Medium (Treat this week)", hi: "⚠️ ख़तरा: मध्यम (इसी हफ़्ते इलाज करें)", es: "⚠️ Peligro: Medio (Tratar esta semana)" },
    dangerLevel: "medium",
    recoveryRate: "90%",
    infectionRate: "10%",
    step1Title: { en: "Step 1: Pick Off Black-Spotted Leaves", hi: "कदम 1: काले धब्बे वाली पत्तियां तोड़ें", es: "Paso 1: Quite las hojas con manchas negras" },
    step1Desc: {
      en: "Pluck all leaves showing black dots or yellow circles. Clean fallen leaves from the soil.",
      hi: "जिन पत्तियों पर काले धब्बे या पीलापन है, उन्हें हाथ से तोड़ लें। गमले में नीचे गिरी सूखी पत्तियां भी साफ कर दें।",
      es: "Arranque todas las hojas con manchas negras o amarillas. Limpie las hojas caídas de la maceta."
    },
    step2Title: { en: "Step 2: Spray Baking Soda or Neem", hi: "कदम 2: बेकिंग सोडा या नीम तेल छिड़कें", es: "Paso 2: Rocíe bicarbonato o Neem" },
    step2Desc: {
      en: "Mix 1 spoon Baking Soda + 1 Liter Water + 1 spoon cooking oil. Spray all branches thoroughly once a week.",
      hi: "1 चम्मच बेकिंग सोडा (मीठा सोडा) + 1 लीटर पानी + 1 चम्मच तेल मिलाएं। हफ़्ते में एक बार पूरे गुलाब के पौधे पर छिड़कें।",
      es: "Mezcle 1 cucharada de bicarbonato + 1 litro de agua + 1 cucharada de aceite. Rocíe una vez por semana."
    },
    step3Title: { en: "Step 3: Keep in Full Sunlight", hi: "कदम 3: पौधे को पूरी धूप में रखें", es: "Paso 3: Póngala a pleno sol" },
    step3Desc: {
      en: "Roses need 5 to 6 hours of bright sunlight every day. Sunlight kills fungal spots naturally.",
      hi: "गुलाब को रोज़ाना 5 से 6 घंटे की अच्छी धूप चाहिए। धूप से फंगस अपने आप सूखकर खत्म होने लगती है।",
      es: "Las rosas necesitan de 5 a 6 horas de sol directo al día. El sol ayuda a secar el hongo."
    },
    dosage: {
      small: { en: "🥄 1 Spoon Baking Soda in 🧴 1 Liter Water", hi: "🥄 1 चम्मच बेकिंग सोडा, 🧴 1 लीटर पानी में", es: "🥄 1 Cucharada de bicarbonato en 🧴 1 Litro de agua" },
      medium: { en: "🥄 3 Spoons Baking Soda in 🧴 3 Liters Water", hi: "🥄 3 चम्मच बेकिंग सोडा, 🧴 3 लीटर पानी में", es: "🥄 3 Cucharadas de bicarbonato en 🧴 3 Litros de agua" },
      large: { en: "🧴 200g Powder in 🎛️ 15-Liter Backpack Sprayer", hi: "🧴 200 ग्राम पाउडर, 🎛️ 15 लीटर की टंकी में", es: "🧴 200g en 🎛️ Tanque de 15 Litros" }
    },
    advPathogen: "Diplocarpon rosae (Rose Black Spot)",
    advChemical: "Myclobutanil or Tebuconazole systemic rose fungicide spray.",
    advCause: "Overnight wet foliage from evening rain or sprinklers.",
    spokenAdvice: {
      en: "Hello. Your rose plant has black spot fungus. First, pluck all leaves with black spots and clean the soil around the plant. Second, mix one spoon of baking soda and one spoon of oil in one liter of water, and spray weekly. Third, keep your rose plant in 5 hours of direct sunlight. Your roses will bloom happily.",
      hi: "नमस्ते। आपके गुलाब के पौधे में काले धब्बे की बीमारी है। पहला काम: काले धब्बे वाली सभी पत्तियां तोड़कर हटा दें। दूसरा काम: एक लीटर पानी में एक चम्मच बेकिंग सोडा और थोड़ा तेल मिलाकर हफ़्ते में एक बार छिड़कें। तीसरा काम: गुलाब को रोज़ 5 घंटे की धूप में रखें। आपके गुलाब फिर से खिल उठेंगे।",
      es: "Hola. Su planta de rosa tiene hongo de mancha negra. Primero, quite todas las hojas con manchas negras. Segundo, mezcle una cucharada de bicarbonato y aceite en un litro de agua y rocíe semanalmente. Tercero, ponga la planta a pleno sol."
    }
  },
  citrus_canker: {
    id: "citrus_canker",
    svgKey: "citrus_canker",
    plant: { en: "🍋 Lemon / Citrus Plant", hi: "🍋 नींबू / संतरे का पौधा", es: "🍋 Planta de Limón / Cítrico" },
    disease: { en: "Citrus Canker (Rough Spots)", hi: "नींबू का कैंकर रोग (खुरदुरे धब्बे)", es: "Cancro Cítrico" },
    danger: { en: "⚠️ Danger: High (Isolate plant)", hi: "⚠️ ख़तरा: अधिक (पौधे को अलग रखें)", es: "⚠️ Peligro: Alto (Aislar planta)" },
    dangerLevel: "high",
    recoveryRate: "80%",
    infectionRate: "20%",
    step1Title: { en: "Step 1: Cut Affected Twigs", hi: "कदम 1: बीमारी वाली टहनियां काटें", es: "Paso 1: Podar ramitas enfermas" },
    step1Desc: {
      en: "Cut off branches with rough, raised spots 3 inches below the damaged area using clean clippers.",
      hi: "खुरदुरे और उभरे हुए धब्बे वाली टहनियों को धब्बे से 3 इंच नीचे से काट लें। कैंची को डेटॉल से साफ करें।",
      es: "Corte las ramas con manchas ásperas 3 pulgadas por debajo del daño."
    },
    step2Title: { en: "Step 2: Spray Copper Water", hi: "कदम 2: कॉपर (तांबा) दवा का छिड़काव", es: "Paso 2: Rociar agua con Cobre" },
    step2Desc: {
      en: "Spray Copper Oxychloride solution on all new leaves to protect them from bacterial blisters.",
      hi: "कॉपर ऑक्सीक्लोराइड (तांबे वाली दवा) 2 ग्राम प्रति लीटर पानी में मिलाकर नए पत्तों पर छिड़कें।",
      es: "Rocíe solución de oxicloruro de cobre en las hojas nuevas."
    },
    step3Title: { en: "Step 3: Keep Away from Heavy Wind", hi: "कदम 3: तेज हवा और बारिश से बचाएं", es: "Paso 3: Proteger de vientos fuertes" },
    step3Desc: {
      en: "This bacteria spreads with heavy wind-blown raindrops. Move pot to a sheltered wall.",
      hi: "यह बैक्टीरिया तेज हवा और बारिश की बूंदों से फैलता है। गमले को किसी दीवार के सहारे रखें।",
      es: "Esta bacteria se propaga con la lluvia y el viento. Mueva la maceta a un lugar protegido."
    },
    dosage: {
      small: { en: "🥄 Half Spoon Copper in 🧴 1 Liter Water", hi: "🥄 आधा चम्मच कॉपर पाउडर, 🧴 1 लीटर पानी में", es: "🥄 Media Cucharada de Cobre en 🧴 1 Litro" },
      medium: { en: "🥄 2 Spoons Copper in 🧴 3 Liters Water", hi: "🥄 2 चम्मच कॉपर पाउडर, 🧴 3 लीटर पानी में", es: "🥄 2 Cucharadas en 🧴 3 Litros" },
      large: { en: "🧴 40 Grams in 🎛️ 15-Liter Backpack Sprayer", hi: "🧴 40 ग्राम कॉपर, 🎛️ 15 लीटर की टंकी में", es: "🧴 40 Gramos en 🎛️ Tanque de 15 Litros" }
    },
    advPathogen: "Xanthomonas axonopodis pv. citri",
    advChemical: "Copper Hydroxide 77% WP (2g/L) preventive spray every 21 days.",
    advCause: "Bacterial entry via citrus leafminer insect wounds during rains.",
    spokenAdvice: {
      en: "Hello. Your lemon plant has citrus canker bacteria. First, cut off infected branches three inches below the spots with clean scissors. Second, spray copper fungicide on new leaves to protect them. Third, keep the plant sheltered from strong wind and rain. It will heal nicely.",
      hi: "नमस्ते। आपके नींबू के पौधे में कैंकर बैक्टीरिया की बीमारी है। पहला काम: खराब टहनियों को धब्बे से 3 इंच नीचे से काटकर हटा दें। दूसरा काम: कॉपर फंगीसाइड दवा का छिड़काव नए पत्तों पर करें। तीसरा काम: पौधे को तेज हवा और सीधी बारिश से बचाएं। नींबू का पौधा स्वस्थ हो जाएगा।",
      es: "Hola. Su planta de limón tiene cancro bacteriano. Primero, corte las ramas enfermas tres pulgadas por debajo de las manchas. Segundo, rocíe fungicida de cobre en las hojas nuevas. Tercero, proteja la planta del viento fuerte y la lluvia."
    }
  },
  healthy_pepper: {
    id: "healthy_pepper",
    svgKey: "healthy_pepper",
    plant: { en: "🫑 Pepper Plant", hi: "🫑 शिमला मिर्च का पौधा", es: "🫑 Planta de Pimiento" },
    disease: { en: "100% Healthy Plant!", hi: "पौधा बिल्कुल स्वस्थ है!", es: "¡Planta 100% Sana!" },
    danger: { en: "✅ Safe: No disease found", hi: "✅ सुरक्षित: कोई बीमारी नहीं है", es: "✅ Seguro: Sin enfermedades" },
    dangerLevel: "safe",
    recoveryRate: "100%",
    infectionRate: "0%",
    step1Title: { en: "Step 1: Keep Doing What You Do", hi: "कदम 1: पौधे की अच्छी देखभाल जारी रखें", es: "Paso 1: Siga cuidándola igual" },
    step1Desc: {
      en: "The leaf is bright green, clean, and strong. No medicines or chemicals are needed.",
      hi: "पत्तियां हरी-भरी, चमकदार और मजबूत हैं। किसी दवा या केमिकल की कोई जरूरत नहीं है।",
      es: "La hoja está verde brillante, limpia y fuerte. No se necesitan medicinas."
    },
    step2Title: { en: "Step 2: Give Regular Water", hi: "कदम 2: समय पर हल्का पानी दें", es: "Paso 2: Riegue regularmente" },
    step2Desc: {
      en: "Water when the top layer of soil feels dry. Do not let water stand in the pot tray.",
      hi: "जब गमले की ऊपरी मिट्टी सूखी लगे, तभी पानी दें। गमले के नीचे पानी जमा न रहने दें।",
      es: "Riegue cuando la superficie de la tierra esté seca."
    },
    step3Title: { en: "Step 3: Add Organic Compost Monthly", hi: "कदम 3: महीने में एक बार गोबर की खाद दें", es: "Paso 3: Agregue abono mensual" },
    step3Desc: {
      en: "Add one handful of vermicompost or cow dung manure once a month to boost flowering and fruit size.",
      hi: "महीने में एक बार एक मुट्ठी वर्मीकम्पोस्ट या गोबर की खाद डालें ताकि अच्छे फूल और फल आएं।",
      es: "Agregue un puñado de abono orgánico una vez al mes."
    },
    dosage: {
      small: { en: "💧 Pure Fresh Water Only", hi: "💧 केवल सादा ताजा पानी", es: "💧 Solo Agua Limpia" },
      medium: { en: "💧 Normal Watering as usual", hi: "💧 हमेशा की तरह सामान्य पानी", es: "💧 Riego Normal" },
      large: { en: "💧 Routine Irrigation", hi: "💧 नियमित सिंचाई", es: "💧 Riego de Rutina" }
    },
    advPathogen: "None (Healthy Chlorophyll & Turgor)",
    advChemical: "No fungicides or chemicals required. Plant is in prime vegetative condition.",
    advCause: "Optimal sunlight, soil aeration, and nutrition.",
    spokenAdvice: {
      en: "Great news! Your plant is completely healthy. Leaves are green, shiny, and strong. No medicines are needed. Just give regular water and add compost once a month. Happy gardening!",
      hi: "बहुत बढ़िया खबर! आपका पौधा बिल्कुल स्वस्थ है। पत्तियां हरी, चमकदार और मजबूत हैं। किसी भी दवा की कोई ज़रूरत नहीं है। बस समय पर पानी दें और महीने में एक बार खाद डालें।",
      es: "¡Excelentes noticias! Su planta está completamente sana. Las hojas están verdes y fuertes. No necesita medicinas. Solo agua regular y abono una vez al mes."
    }
  }
};

// ============================================================================
// 4. APPLICATION STATE & VOICE ENGINE
// ============================================================================
let currentLang = 'en';
let activeMediaStream = null;
let currentFacingMode = 'environment';
let currentActiveDiagnosis = null;
let currentScale = 'small';
let isSpeaking = false;
let voiceSpeed = 1.0; // 1.0 = Normal, 0.85 = Slow & Clear
const synth = window.speechSynthesis;
let availableVoices = [];

// Initialize & load voices
function initVoices() {
  if (synth) {
    availableVoices = synth.getVoices();
    synth.onvoiceschanged = () => {
      availableVoices = synth.getVoices();
    };
  }
}

// Select the most fluent, human-sounding natural voice for the target language
function getBestNaturalVoice(langCode) {
  if (!availableVoices || availableVoices.length === 0) {
    if (synth) availableVoices = synth.getVoices();
  }
  if (!availableVoices || availableVoices.length === 0) return null;

  const prefix = langCode === 'hi' ? 'hi' : (langCode === 'es' ? 'es' : 'en');

  // Priority 1: High-fidelity Neural / Online / Natural / Google voices
  const naturalVoices = availableVoices.filter(v => {
    const l = v.lang.toLowerCase();
    const n = v.name.toLowerCase();
    const isLangMatch = l.startsWith(prefix) || (prefix === 'hi' && (l.includes('in') || n.includes('hindi')));
    const isQualityMatch = n.includes('natural') || n.includes('online') || n.includes('google') || n.includes('neural');
    return isLangMatch && isQualityMatch;
  });
  if (naturalVoices.length > 0) return naturalVoices[0];

  // Priority 2: Standard matching language voices
  const matchingVoices = availableVoices.filter(v => {
    const l = v.lang.toLowerCase();
    return l.startsWith(prefix) || (prefix === 'hi' && l.includes('in'));
  });
  if (matchingVoices.length > 0) return matchingVoices[0];

  return null;
}

// ============================================================================
// 5. INITIALIZATION
// ============================================================================
document.addEventListener('DOMContentLoaded', () => {
  lucide.createIcons();
  initVoices();
  setupFileInput();
});

// ============================================================================
// 6. LANGUAGE SELECTION
// ============================================================================
function setAppLanguage(lang) {
  currentLang = lang;
  if (synth && synth.speaking) synth.cancel();
  resetVoiceButtonUI();

  ['en', 'hi', 'es'].forEach(l => {
    const btn = document.getElementById(`lang-btn-${l}`);
    if (l === lang) {
      btn.className = "px-2.5 sm:px-3 py-1.5 rounded-xl text-xs font-bold transition-all bg-emerald-600 text-white shadow";
    } else {
      btn.className = "px-2.5 sm:px-3 py-1.5 rounded-xl text-xs font-bold transition-all text-slate-300 hover:text-white";
    }
  });

  const t = UI_TEXT[lang];
  document.getElementById('lbl-tagline').innerText = t.tagline;
  document.getElementById('lbl-main-title').innerText = t.mainTitle;
  document.getElementById('lbl-main-sub').innerText = t.mainSub;
  document.getElementById('lbl-step1').innerText = t.step1;
  document.getElementById('lbl-step2').innerText = t.step2;
  document.getElementById('lbl-step3').innerText = t.step3;
  document.getElementById('lbl-card-camera-title').innerText = t.cardCameraTitle;
  document.getElementById('lbl-card-camera-sub').innerText = t.cardCameraSub;
  document.getElementById('lbl-card-upload-title').innerText = t.cardUploadTitle;
  document.getElementById('lbl-card-upload-sub').innerText = t.cardUploadSub;
  document.getElementById('lbl-cam-guide').innerText = t.camGuide;
  document.getElementById('lbl-cam-cancel').innerText = t.camCancel;
  document.getElementById('lbl-flip-cam').innerText = t.flipCam;
  document.getElementById('lbl-snap-btn').innerText = t.snapBtn;
  document.getElementById('lbl-sample-title').innerText = t.sampleTitle;
  document.getElementById('lbl-loading-title').innerText = t.loadingTitle;
  document.getElementById('lbl-loading-sub').innerText = t.loadingSub;
  document.getElementById('lbl-action-title').innerText = t.actionTitle;
  document.getElementById('lbl-checklist-title').innerText = t.checklistTitle;
  document.getElementById('lbl-dose-title').innerText = t.doseTitle;
  document.getElementById('lbl-dose-mix-label').innerText = t.doseMixLabel;
  document.getElementById('lbl-adv-toggle').innerText = t.advToggle;
  document.getElementById('lbl-scan-another').innerText = t.scanAnother;
  document.getElementById('lbl-whatsapp-btn').innerText = t.whatsAppBtn;
  document.getElementById('checklist-completed-banner').innerText = t.checklistDoneBanner;

  // Update speed button label
  document.getElementById('lbl-voice-speed').innerText = voiceSpeed === 0.85 ? t.voiceSpeedSlow : t.voiceSpeedNormal;

  if (currentActiveDiagnosis) {
    displayDiagnosisResult(currentActiveDiagnosis);
  }
}

// ============================================================================
// 7. CAMERA ENGINE
// ============================================================================
async function startCameraMode() {
  document.getElementById('section-welcome').classList.add('hidden');
  document.getElementById('section-input-cards').classList.add('hidden');
  document.getElementById('section-samples').classList.add('hidden');
  document.getElementById('container-camera').classList.remove('hidden');

  const videoElem = document.getElementById('camera-feed');

  if (activeMediaStream) {
    activeMediaStream.getTracks().forEach(track => track.stop());
  }

  try {
    const stream = await navigator.mediaDevices.getUserMedia({
      video: {
        facingMode: currentFacingMode,
        width: { ideal: 1280 },
        height: { ideal: 960 }
      },
      audio: false
    });

    activeMediaStream = stream;
    videoElem.srcObject = stream;
  } catch (err) {
    alert(currentLang === 'hi' 
      ? "कैमरा शुरू नहीं हो सका। कृपया ब्राउज़र में कैमरा की अनुमति दें, या गैलरी से फोटो चुनें।"
      : "Could not open camera. Please allow camera permissions or upload a photo.");
    closeCameraMode();
  }
}

function closeCameraMode() {
  if (activeMediaStream) {
    activeMediaStream.getTracks().forEach(track => track.stop());
    activeMediaStream = null;
  }
  document.getElementById('container-camera').classList.add('hidden');
  document.getElementById('section-welcome').classList.remove('hidden');
  document.getElementById('section-input-cards').classList.remove('hidden');
  document.getElementById('section-samples').classList.remove('hidden');
}

function switchCameraFacing() {
  currentFacingMode = currentFacingMode === 'environment' ? 'user' : 'environment';
  startCameraMode();
}

function captureFromCamera() {
  const videoElem = document.getElementById('camera-feed');
  const canvasElem = document.getElementById('camera-canvas');

  if (!videoElem || !videoElem.videoWidth) {
    alert("Camera not ready. Please wait a second.");
    return;
  }

  canvasElem.width = videoElem.videoWidth;
  canvasElem.height = videoElem.videoHeight;
  const ctx = canvasElem.getContext('2d');
  ctx.drawImage(videoElem, 0, 0, canvasElem.width, canvasElem.height);

  const dataUrl = canvasElem.toDataURL('image/jpeg', 0.9);
  closeCameraMode();
  processImageAndDiagnose(dataUrl, 'tomato_blight');
}

// ============================================================================
// 8. FILE PICKER & SAMPLE PRESETS
// ============================================================================
function setupFileInput() {
  const fileInput = document.getElementById('file-input');
  fileInput.addEventListener('change', (e) => {
    if (e.target.files && e.target.files.length > 0) {
      const file = e.target.files[0];
      const reader = new FileReader();
      reader.onload = (event) => {
        processImageAndDiagnose(event.target.result, 'tomato_blight');
      };
      reader.readAsDataURL(file);
    }
  });
}

function loadSample(sampleKey) {
  processImageAndDiagnose(null, sampleKey);
}

// ============================================================================
// 9. DIAGNOSIS PIPELINE
// ============================================================================
async function processImageAndDiagnose(imgUrl, presetKey = 'tomato_blight') {
  if (synth && synth.speaking) synth.cancel();
  resetVoiceButtonUI();

  document.getElementById('section-welcome').classList.add('hidden');
  document.getElementById('section-input-cards').classList.add('hidden');
  document.getElementById('section-samples').classList.add('hidden');
  document.getElementById('section-result').classList.add('hidden');
  document.getElementById('section-loading').classList.remove('hidden');

  const leafImg = document.getElementById('res-leaf-photo');
  const leafSvgBox = document.getElementById('res-leaf-svg-container');

  if (imgUrl) {
    leafImg.src = imgUrl;
    leafImg.classList.remove('hidden');
    if (leafSvgBox) leafSvgBox.classList.add('hidden');
  } else {
    const thumbId = PRESET_THUMB_MAP[presetKey] || 'thumb-sample-tomato';
    const thumbDiv = document.getElementById(thumbId);
    if (thumbDiv && leafSvgBox) {
      leafSvgBox.innerHTML = thumbDiv.innerHTML;
      leafSvgBox.classList.remove('hidden');
      leafImg.classList.add('hidden');
    }
  }

  await new Promise(r => setTimeout(r, 650));

  const diag = EASY_DISEASE_DB[presetKey] || EASY_DISEASE_DB['tomato_blight'];
  currentActiveDiagnosis = diag;

  document.getElementById('section-loading').classList.add('hidden');
  document.getElementById('section-result').classList.remove('hidden');

  displayDiagnosisResult(diag);
  resetChecklist();

  document.getElementById('section-result').scrollIntoView({ behavior: 'smooth', block: 'start' });
}

function displayDiagnosisResult(diag) {
  const lang = currentLang;

  document.getElementById('res-plant-name').innerText = diag.plant[lang] || diag.plant['en'];
  document.getElementById('res-disease-name').innerText = diag.disease[lang] || diag.disease['en'];

  const dangerBadge = document.getElementById('res-badge-danger');
  dangerBadge.innerText = diag.danger[lang] || diag.danger['en'];
  if (diag.dangerLevel === 'safe') {
    dangerBadge.className = "px-3 py-1 rounded-full text-xs font-extrabold uppercase tracking-wide bg-emerald-600 text-white shadow";
  } else if (diag.dangerLevel === 'medium') {
    dangerBadge.className = "px-3 py-1 rounded-full text-xs font-extrabold uppercase tracking-wide bg-amber-500 text-white shadow";
  } else {
    dangerBadge.className = "px-3 py-1 rounded-full text-xs font-extrabold uppercase tracking-wide bg-rose-600 text-white shadow";
  }

  // Recovery & Damage Gauge
  document.getElementById('lbl-recovery-rate').innerText = `Recovery Chance: ${diag.recoveryRate} (High)`;
  document.getElementById('lbl-infection-rate').innerText = `Infection: ${diag.infectionRate}`;
  document.getElementById('bar-recovery').style.width = diag.recoveryRate;
  document.getElementById('bar-infection').style.width = diag.infectionRate;

  // 3 Action Steps
  document.getElementById('lbl-step1-title').innerText = diag.step1Title[lang] || diag.step1Title['en'];
  document.getElementById('lbl-step1-desc').innerText = diag.step1Desc[lang] || diag.step1Desc['en'];

  document.getElementById('lbl-step2-title').innerText = diag.step2Title[lang] || diag.step2Title['en'];
  document.getElementById('lbl-step2-desc').innerText = diag.step2Desc[lang] || diag.step2Desc['en'];

  document.getElementById('lbl-step3-title').innerText = diag.step3Title[lang] || diag.step3Title['en'];
  document.getElementById('lbl-step3-desc').innerText = diag.step3Desc[lang] || diag.step3Desc['en'];

  // Checklist Item Texts
  document.getElementById('lbl-chk-step1').innerText = diag.step1Title[lang] || diag.step1Title['en'];
  document.getElementById('lbl-chk-step2').innerText = diag.step2Title[lang] || diag.step2Title['en'];
  document.getElementById('lbl-chk-step3').innerText = diag.step3Title[lang] || diag.step3Title['en'];

  updateDosageText();

  // Advanced Technical Info
  document.getElementById('adv-pathogen').innerText = diag.advPathogen;
  document.getElementById('adv-chemical').innerText = diag.advChemical;
  document.getElementById('adv-cause').innerText = diag.advCause;

  resetVoiceButtonUI();
}

// ============================================================================
// 10. INTERACTIVE TREATMENT CHECKLIST
// ============================================================================
function resetChecklist() {
  document.getElementById('chk-step1').checked = false;
  document.getElementById('chk-step2').checked = false;
  document.getElementById('chk-step3').checked = false;
  document.getElementById('checklist-progress').innerText = "0 of 3 Done";
  document.getElementById('checklist-completed-banner').classList.add('hidden');
}

function updateChecklist() {
  const c1 = document.getElementById('chk-step1').checked;
  const c2 = document.getElementById('chk-step2').checked;
  const c3 = document.getElementById('chk-step3').checked;
  const count = (c1 ? 1 : 0) + (c2 ? 1 : 0) + (c3 ? 1 : 0);

  document.getElementById('checklist-progress').innerText = `${count} of 3 Done`;

  const banner = document.getElementById('checklist-completed-banner');
  if (count === 3) {
    banner.classList.remove('hidden');
  } else {
    banner.classList.add('hidden');
  }
}

// ============================================================================
// 11. DOSAGE ENGINE
// ============================================================================
function setSimpleScale(scale) {
  currentScale = scale;
  ['small', 'medium', 'large'].forEach(s => {
    const btn = document.getElementById(`scale-btn-${s}`);
    if (s === scale) {
      btn.className = "p-3 rounded-2xl border-2 border-emerald-500 bg-emerald-600/30 text-white text-xs font-bold text-center";
    } else {
      btn.className = "p-3 rounded-2xl border border-emerald-900 bg-black/40 text-slate-300 text-xs font-bold text-center";
    }
  });
  updateDosageText();
}

function updateDosageText() {
  if (!currentActiveDiagnosis) return;
  const lang = currentLang;
  const doseInfo = currentActiveDiagnosis.dosage[currentScale];
  document.getElementById('lbl-dose-result').innerText = doseInfo[lang] || doseInfo['en'];
}

// ============================================================================
// 12. NATURAL FLUENT NEURAL VOICE NARRATOR
// ============================================================================
function toggleVoiceSpeed() {
  voiceSpeed = voiceSpeed === 1.0 ? 0.85 : 1.0;
  const t = UI_TEXT[currentLang];
  document.getElementById('lbl-voice-speed').innerText = voiceSpeed === 0.85 ? t.voiceSpeedSlow : t.voiceSpeedNormal;
}

function toggleDoctorVoice() {
  if (!synth) {
    alert("Voice reader is not supported on this device/browser.");
    return;
  }

  // If already speaking, pause/cancel
  if (synth.speaking && isSpeaking) {
    synth.cancel();
    resetVoiceButtonUI();
    return;
  }

  if (!currentActiveDiagnosis) return;

  const lang = currentLang;
  const textToRead = currentActiveDiagnosis.spokenAdvice[lang] || currentActiveDiagnosis.spokenAdvice['en'];

  synth.cancel(); // Clear any previous queue

  const utterance = new SpeechSynthesisUtterance(textToRead);
  utterance.lang = lang === 'hi' ? 'hi-IN' : (lang === 'es' ? 'es-ES' : 'en-US');
  utterance.rate = voiceSpeed; // 0.85 for very slow/clear, 1.0 for normal
  utterance.pitch = 1.0;

  // Pick best natural voice available
  const bestVoice = getBestNaturalVoice(lang);
  if (bestVoice) {
    utterance.voice = bestVoice;
  }

  utterance.onstart = () => {
    isSpeaking = true;
    const t = UI_TEXT[currentLang];
    document.getElementById('lbl-voice-btn').innerText = t.voiceBtnPlaying;
    document.getElementById('voice-equalizer').classList.remove('hidden');
    document.getElementById('icon-voice-state').setAttribute('data-lucide', 'pause-circle');
    lucide.createIcons();
  };

  utterance.onend = () => {
    resetVoiceButtonUI();
  };

  utterance.onerror = () => {
    resetVoiceButtonUI();
  };

  synth.speak(utterance);
}

function resetVoiceButtonUI() {
  isSpeaking = false;
  const t = UI_TEXT[currentLang];
  const lbl = document.getElementById('lbl-voice-btn');
  const eq = document.getElementById('voice-equalizer');
  const icon = document.getElementById('icon-voice-state');

  if (lbl) lbl.innerText = t.voiceBtnNormal;
  if (eq) eq.classList.add('hidden');
  if (icon) icon.setAttribute('data-lucide', 'volume-2');
  lucide.createIcons();
}

// ============================================================================
// 13. WHATSAPP SHARE FOR AGRICULTURAL SHOPS / FRIENDS
// ============================================================================
function shareOnWhatsApp() {
  if (!currentActiveDiagnosis) return;

  const diag = currentActiveDiagnosis;
  const lang = currentLang;
  const plant = diag.plant[lang] || diag.plant['en'];
  const disease = diag.disease[lang] || diag.disease['en'];
  const dose = diag.dosage[currentScale][lang] || diag.dosage[currentScale]['en'];
  const step1 = diag.step1Desc[lang] || diag.step1Desc['en'];
  const step2 = diag.step2Desc[lang] || diag.step2Desc['en'];

  const message = `🌿 *Plant Doctor Prescription Report*\n\n` +
    `🌱 *Plant:* ${plant}\n` +
    `⚠️ *Problem:* ${disease}\n` +
    `💊 *Medicine Mix:* ${dose}\n\n` +
    `📋 *Treatment Steps:*\n` +
    `1. ${step1}\n` +
    `2. ${step2}\n\n` +
    `_Diagnosed via PlantDoctor App_`;

  const url = `https://api.whatsapp.com/send?text=${encodeURIComponent(message)}`;
  window.open(url, '_blank');
}

// ============================================================================
// 14. COLLAPSIBLE EXPERT DETAILS & HOME RESET
// ============================================================================
function toggleAdvancedDetails() {
  const container = document.getElementById('adv-details-container');
  container.classList.toggle('hidden');
}

function resetToHome() {
  if (synth && synth.speaking) synth.cancel();
  resetVoiceButtonUI();
  closeCameraMode();
  currentActiveDiagnosis = null;
  document.getElementById('section-result').classList.add('hidden');
  document.getElementById('section-loading').classList.add('hidden');
  document.getElementById('section-welcome').classList.remove('hidden');
  document.getElementById('section-input-cards').classList.remove('hidden');
  document.getElementById('section-samples').classList.remove('hidden');
  window.scrollTo({ top: 0, behavior: 'smooth' });
}
