/**
 * DFW CABINETS & KITCHEN REMODELING - SCRIPT
 * - 100% Real Project Photography Showcase (HD)
 * - Actual Phone Number: +1 (945) 599-1459
 * - Scroll Stacking Reveals ("Next image slides up on scroll")
 * - Full English & Arabic (RTL) Localization
 * - Interactive Before & After Comparison (Oak to Modern Remodel)
 * - Real-Time Remodeling Pricing Estimator
 * - Zero Popups; Clean Bottom-Right WhatsApp Integration
 */

// ========================================================
// 1. TRANSLATION ENGINE (ENGLISH & ARABIC)
// ========================================================
const translations = {
  en: {
    // Header
    brand_badge: "REMODELING",
    nav_showcase: "Projects",
    nav_comparison: "Before & After",
    nav_services: "Expertise",
    nav_pricing: "Pricing",
    nav_reviews: "Reviews (5.0★)",
    nav_contact: "Contact",
    btn_whatsapp_nav: "WhatsApp",

    // Hero
    hero_factory_spec: "Factory Spray Finishes",
    hero_title: 'Architectural Kitchen Remodeling & <span class="gradient-text">Factory-Grade Cabinet Finishing</span>',
    hero_lead: "We transform dated kitchens into clean, high-end culinary spaces. Flawless industrial spray application, custom Shaker conversions, and island renovations that save you thousands over full cabinet replacement.",
    btn_explore_projects: "Explore Transformations",
    btn_whatsapp_hero: "Instant WhatsApp Estimate",
    hero_img_tag: "Texas Luxury Remodel • Two-Tone White & Oak with Calacatta Quartz",

    // Scroll Stacking Cards Showcase (Real Projects)
    showcase_sub: "Scroll Down to Reveal",
    showcase_title: "Featured Kitchen Transformations",
    showcase_desc: "Watch each real transformation smoothly slide up as you scroll. Notice the crisp grain-free finish, custom doors, and modern hardware integration.",

    card_1_badge: "Two-Tone Olive Green Island Remodel",
    card_1_type: "Full Cabinet Spray Refinishing & Island Upgrade",
    card_1_title: "Warm Cream Perimeter with Olive Green Chef's Island",
    card_1_text: "A complete two-tone kitchen update featuring silk off-white perimeter cabinetry, contrasted by an earthy olive green center island with brushed brass towel ring, black gooseneck faucet, and polished granite surfaces.",

    card_2_badge: "Statement Cobalt Blue Custom Finish",
    card_2_type: "Custom Lacquer Cabinet Spraying & Island Remodel",
    card_2_title: "Cobalt Blue Custom Lacquer with Chef's Island & Checkered Tile",
    card_2_text: "Bold, architectural statement transformation. Full spray conversion to vibrant royal cobalt blue with matching island, black granite countertops, commercial cooktop range, and built-in microwave drawer.",

    card_3_badge: "Silk White & Calacatta Marble Waterfall",
    card_3_type: "Turnkey Luxury Kitchen Remodel",
    card_3_title: "Silk White Upper Cabinets with Slate Blue Waterfall Island",
    card_3_text: "Featuring custom X-mullion glass upper accent doors, integrated pantry enclosures, continuous marble-veined quartz backsplash, and a calming coastal slate blue island with concealed Blum® soft-close hinges.",

    card_4_badge: "Chantilly White & Waterfall Quartz",
    card_4_type: "Complete Shaker Conversion & Lighting Redesign",
    card_4_title: "Seamless Factory Silk White with Waterfall Island & Matte Black Accents",
    card_4_text: "Flawless spray-applied factory satin finish, paired with custom full-depth shaker drawers, Calacatta quartz waterfall peninsula, warm under-cabinet LED ribbons, and designer black hardware.",

    spec_turnaround: "Timeline:",
    spec_coating: "Coating:",
    spec_hardware: "Hardware:",
    spec_doors: "Doors:",
    spec_location: "Location:",
    btn_ask_project: "Inquire About This Style on WhatsApp",

    // Before & After (Traditional Oak vs Modern Remodel)
    ba_badge: "Real Transformation",
    ba_title: "Traditional Honey Oak vs. Modern Remodel",
    ba_desc: "Slide the divider horizontally to compare a classic traditional wood oak kitchen with a modern bright silk finish.",
    pill_after: "AFTER: Factory Spray Finish",
    pill_before: "BEFORE: Traditional Golden Oak",

    // Services
    srv_badge: "Our Craft",
    srv_title: "Kitchen Remodeling Specialties",
    srv_subtitle: "We specialize in modernizing kitchens with high-grade finishes and meticulous craftsmanship.",
    srv_1_name: "Factory Spray Cabinet Painting",
    srv_1_desc: "Doors and drawer fronts are removed and sprayed off-site in our dust-controlled booth using heavy-duty 2K polyurethane for a flawless, rock-hard factory finish.",
    srv_2_name: "Cabinet Refacing & Shaker Doors",
    srv_2_desc: "Replace dated arched doors with clean, modern square Shaker doors made of solid hardwood while keeping your existing sturdy cabinet frames intact.",
    srv_3_name: "Full Kitchen Remodeling & Islands",
    srv_3_desc: "Kitchen island extensions, built-in microwave and trash pullouts, custom pantry cabinetry, and coordinated quartz countertop updates.",
    srv_4_name: "Soft-Close Blum® Hardware",
    srv_4_desc: "Upgrade squeaky hinges to premium European soft-close concealed hinges and install modern brushed brass or matte black pulls with laser precision.",

    // Pricing Calculator
    calc_badge: "Instant Pricing",
    calc_title: "Transparent Remodeling Investment",
    calc_subtitle: "Configure your kitchen openings to see an immediate estimated range with zero obligations.",
    calc_lbl_scope: "Project Scope:",
    calc_scope_paint: "Cabinet Spray Painting",
    calc_scope_doors: "New Shaker Doors + Paint",
    calc_scope_full: "Full Kitchen Remodel",
    calc_lbl_openings: "Cabinet Doors & Drawer Count:",
    calc_lbl_island: "Kitchen Island:",
    calc_isl_none: "No Island",
    calc_isl_same: "Paint Island (Same Color)",
    calc_isl_accent: "Accent / Two-Tone Island",
    calc_est_range: "Estimated Project Investment",
    calc_est_note: "Includes all industrial materials, spray prep & curing",
    calc_row_timeline: "Turnaround:",
    calc_row_savings: "Savings vs Replacement:",
    btn_confirm_estimate: "Confirm Estimate On WhatsApp",

    // Real Reviews (Real Feedback, No Names/Phones)
    rev_badge: "Client Experiences",
    rev_title: "Real Homeowner Reviews",
    rev_desc: "Authentic feedback from verified homeowners across Carrollton and the Dallas-Fort Worth metroplex.",
    rev_verified_caption: "Google Maps & HomeAdvisor Verified",
    rev_1_body: '"They completely transformed our 1990s honey oak kitchen cabinets into a stunning modern white finish. The surface is silky smooth like it came from the factory. The crew arrived on time every day, sealed off the kitchen with plastic to keep dust away from the rest of the house, and finished right on schedule. Incredible attention to detail!"',
    rev_1_project: "Oak Cabinet Spray Refinishing",

    rev_2_body: '"Outstanding craftsmanship on our kitchen cabinet repainting and island modification. The prep work was meticulous—sanding, filling wood grain, priming, and multi-coat spraying without a single drip or brush mark. The crew was very courteous and respectful of our home. Highly recommended for any kitchen upgrade."',
    rev_2_project: "Island Modification & Cabinet Spraying",

    rev_3_body: '"Fair pricing, clear communication, and top quality results. They took our dated, dark kitchen and made it look brand new and open without the massive expense of tearing down all the cabinets. Extremely clean, professional team. Would hire them again in a heartbeat."',
    rev_3_project: "Full Kitchen Cabinet Remodel",

    rev_4_body: '"We had our upper cabinets painted crisp white and lower cabinets plus the island painted in deep navy, along with new soft-close hinges installed. The finish is rock solid, durable, and wipe-clean even with our two toddlers. Five stars all the way!"',
    rev_4_project: "Two-Tone Navy & Soft-Close Hinges",

    maps_title: "Verified Local Business Listing on Google Maps",
    maps_sub: "Serving Carrollton, Texas and the Dallas-Fort Worth metroplex. View driving directions and verified business credentials.",
    btn_view_maps: "Open on Google Maps",

    // Contact
    contact_badge: "Start Your Project",
    contact_title: "Ready To Upgrade Your Kitchen?",
    contact_desc: "Call us directly at (945) 599-1459 or send a photo of your kitchen cabinets on WhatsApp for a free estimate in hours.",
    contact_wa_note: "Fastest response • Send photos for instant quote",
    contact_call_note: "Speak directly with our remodeling specialist",
    contact_service_note: "In-home consultations throughout DFW",
    contact_hours_title: "Operating Hours",
    form_title: "Direct Inquiry",
    form_name: "Full Name",
    form_phone: "Phone / WhatsApp",
    form_notes: "Project Notes",
    form_btn_send: "Send Inquiry via WhatsApp",

    // Footer & FAB
    footer_desc: "Professional kitchen remodeling & factory spray cabinet refinishing in Carrollton, TX and the Dallas-Fort Worth metro area. Call +1 (945) 599-1459.",
    fab_chat_text: "WhatsApp"
  },

  ar: {
    // Header
    brand_badge: "تجديد المطابخ",
    nav_showcase: "المشاريع",
    nav_comparison: "قبل وبعد",
    nav_services: "خدماتنا",
    nav_pricing: "التكلفة",
    nav_reviews: "تقييمات (5.0★)",
    nav_contact: "تواصل معنا",
    btn_whatsapp_nav: "واتساب",

    // Hero
    hero_factory_spec: "تشطيبات رش صناعية بمستوى المصنع",
    hero_title: 'تجديد المطابخ المعماري و<span class="gradient-text">طلاء الخزائن الاحترافي</span>',
    hero_lead: "نحوّل المطابخ القديمة إلى مساحات عصرية فاخرة وأنيقة. رش صناعي متقن خالي من أي عيوب، وتغيير الأبواب لطراز شاكر، وتجديد جزر المطبخ مع توفير آلاف الدولارات مقارنة بالاستبدال الكامل.",
    btn_explore_projects: "استكشف التحولات",
    btn_whatsapp_hero: "تقدير فوري عبر واتساب",
    hero_img_tag: "تجديد مطبخ تكساس فاخر • أبيض حريري وخشب سنديان طبيعي مع شلال كوارتز",

    // Scroll Stacking Cards Showcase (Real Projects)
    showcase_sub: "مرّر للأسفل لاستعراض المشاريع",
    showcase_title: "تحولات مطابخ مميزة تنزلق للأعلى",
    showcase_desc: "شاهد كل مشروع حقيقي ينزلق بسلاسة للأعلى أثناء التمرير. لاحظ ملمس الطلاء الناعم، تفصيل الأبواب المتقن، والمقابض العصرية.",

    card_1_badge: "تجديد مطبخ بلونين وجزيرة زيتونية",
    card_1_type: "إعادة طلاء ورش صناعي كامل وتطوير الجزيرة",
    card_1_title: "خزائن محيطية بلون كريمي دافئ مع جزيرة بلون أخضر زيتوني",
    card_1_text: "تجديد مطبخ متكامل بلونين عصريين يتميز بخزائن محيطية بيضاء ناعمة، وجزيرة مطبخ بلون أخضر زيتوني أنيق مع حلقة مناشف نحاسية، وصنبور أسود فاخر وأسطح جرانيت متينة.",

    card_2_badge: "طلاء لاكير أزرق ملكي كحلي مميز",
    card_2_type: "رش طلاء لاكير مخصص وتعديل الجزيرة",
    card_2_title: "طلاء لاكير أزرق ملكي كحلي وجزيرة طهاة متكاملة",
    card_2_text: "تجديد جريء ومميز بطلاء لاكير كحلي ملكي مقاوم للبقع والخدوش، مع جزيرة مطابقة وأسطح جرانيت سوداء مصقولة ومدخنة مخصصة مع سيراميك مربعات أنيق.",

    card_3_badge: "أبيض حريري وشلال كوارتز كالاكاتا",
    card_3_type: "تجديد مطبخ فاخر متكامل",
    card_3_title: "خزائن شاكر بيضاء حريرية مع شلال كوارتز كالاكاتا وجزيرة رمادية مزرقة",
    card_3_text: "تحول معماري فاخر بخزائن علوية زجاجية بتصميم X الأنيق، وأسطح وباكسبلاش شلال كوارتز بتعريقات رخامية فاخرة وجزيرة عصرية بمفصلات بلوم (Blum®) المخفية الهادئة.",

    card_4_badge: "أبيض ناصع وشلال كوارتز كالاكاتا",
    card_4_type: "تحويل كامل لأبواب شاكر وتحديث الإضاءة",
    card_4_title: "طلاء أبيض حريري بمستوى المصنع مع جزيرة شلال وإكسسوارات سوداء عصرية",
    card_4_text: "طلاء ساتان مصنعي ناعم ومقاوم، مع أدراج شاكر مخصصة، وشبه جزيرة شلال كوارتز كالاكاتا، وإضاءة LED دافئة تحت الخزائن، ومقابض سوداء معمارية أنيقة.",

    spec_turnaround: "المدة:",
    spec_coating: "نوع الطلاء:",
    spec_hardware: "الإكسسوارات:",
    spec_doors: "الأبواب:",
    spec_location: "الموقع:",
    btn_ask_project: "استفسر عن هذا التصميم عبر واتساب",

    // Before & After
    ba_badge: "تحول واقعي",
    ba_title: "خشب السنديان التقليدي مقابل التحول العصري",
    ba_desc: "حرّك الفاصل أفقياً لمقارنة مطبخ السنديان الخشبي التقليدي بالتشطيب الحريري الأبيض العصري.",
    pill_after: "بعد: طلاء مصنعي أملس",
    pill_before: "قبل: خشب سنديان ذهبي قديم",

    // Services
    srv_badge: "حرفتنا",
    srv_title: "تخصصاتنا في تجديد المطابخ",
    srv_subtitle: "متخصصون في تحديث وتجميل المطابخ بأعلى درجات الجودة والتشطيبات الصناعية المتقنة.",
    srv_1_name: "طلاء ورش الخزائن بجودة المصنع",
    srv_1_desc: "يتم فك الأبواب ورشها في كابينة رش معزولة عن الغبار باستخدام طلاء بولي يوريثين مقسّى لتحقيق سطح أملس شديد الصلابة.",
    srv_2_name: "تجديد الواجهات بأبواب شاكر",
    srv_2_desc: "استبدال الأبواب القديمة بأبواب شاكر عصرية مستقيمة من الخشب الصلب مع الحفاظ على هياكل الخزائن الأصلية المتينة وتوفير حتى 70%.",
    srv_3_name: "تجديد المطابخ وجزر المطبخ",
    srv_3_desc: "بناء وتوسيع جزر المطبخ، وتعديل أماكن الميكروويف وسلات المهملات المخفية، وتنسيق أسطح الكوارتز والجرانيت الفاخرة.",
    srv_4_name: "مفصلات بلوم® للإغلاق الهادئ",
    srv_4_desc: "ترقية المفصلات القديمة إلى مفصلات أوروبية مخفية هادئة وسلسة للغاية، وتركيب أحدث المقابض بدقة ليزرية متناهية.",

    // Pricing Calculator
    calc_badge: "تسعير فوري",
    calc_title: "استثمار تجديد واضح وشفاف",
    calc_subtitle: "حدد عدد أبواب وأدراج مطبخك للحصول على نطاق تقديري فوري بدون أي التزام.",
    calc_lbl_scope: "نطاق العمل:",
    calc_scope_paint: "طلاء ورش الخزائن",
    calc_scope_doors: "أبواب شاكر جديدة + طلاء",
    calc_scope_full: "تجديد مطبخ متكامل",
    calc_lbl_openings: "عدد فتحات الأبواب والأدراج:",
    calc_lbl_island: "جزيرة المطبخ:",
    calc_isl_none: "بدون جزيرة",
    calc_isl_same: "طلاء الجزيرة (نفس اللون)",
    calc_isl_accent: "طلاء الجزيرة بلون مميز",
    calc_est_range: "الاستثمار التقديري للمشروع",
    calc_est_note: "يشمل كافة المواد الصناعية والتحضير والرش والمعالجة",
    calc_row_timeline: "المدة المتوقعة:",
    calc_row_savings: "التوفير مقارنة بمطبخ جديد:",
    btn_confirm_estimate: "تأكيد التقدير عبر واتساب",

    // Reviews
    rev_badge: "تجارب العملاء",
    rev_title: "تقييمات حقيقية من ملاك المنازل",
    rev_desc: "آراء واقعية وموثقة من عملاء في كارولتون وكافة أرجاء دالاس فورت وورث.",
    rev_verified_caption: "موثق عبر Google Maps و HomeAdvisor",
    rev_1_body: '"قاموا بتحويل خزائن مطبخنا الخشبية القديمة بالكامل إلى طلاء أبيض عصري رائع. السطح ناعم كالحرير وكأنه خرج من المصنع مباشرة. الفريق التزم بالمواعيد تماماً وعزلوا المطبخ بالبلاستيك لمنع أي غبار عن بقية المنزل وأنهوا العمل في الوقت المحدد. دقة متناهية بالتفاصيل!"',
    rev_1_project: "رش وإعادة طلاء الخزائن",

    rev_2_body: '"حرفية استثنائية في إعادة طلاء خزائن المطبخ وتعديل الجزيرة. أعمال التحضير كانت دقيقة للغاية من صنفرة وملء مسام الخشب وطبقات الأساس والرش متعدد الطبقات بدون أي نقطة دهان زائدة أو علامة فرشاة. الفريق كان مهذباً ومحترماً للغاية. نوصي بهم بشدة."',
    rev_2_project: "تعديل الجزيرة ورش الخزائن",

    rev_3_body: '"أسعار عادلة وتواصل رائع ونتائج تفوق التوقعات. جعلوا مطبخنا المظلم القديم يبدو جديداً وواسعاً ومشرقاً دون الحاجة لدفع مبالغ طائلة لهدم وتغيير الخزائن. فريق نظيف ومحترف جداً وسأتعامل معهم مجدداً بالتأكيد."',
    rev_3_project: "تجديد شامل لخزائن المطبخ",

    rev_4_body: '"قمنا بطلاء الخزائن العلوية بالأبيض النقي والخزائن السفلية مع الجزيرة باللون الكحلي الملكي، مع تركيب مفصلات الإغلاق الهادئ. الدهان قوي وصلب وسهل التنظيف والمسح حتى مع وجود طفلين صغار. يستحقون خمس نجوم بجدارة!"',
    rev_4_project: "خزائن بلونين ومفصلات هادئة",

    maps_title: "نشاط تجاري موثق على خرائط جوجل (Google Maps)",
    maps_sub: "نخدم كارولتون، تكساس وكافة مناطق دالاس فورت وورث الكبرى. اطلع على اتجاهات القيادة وملف النشاط التجاري المعتمد.",
    btn_view_maps: "فتح خرائط جوجل",

    // Contact
    contact_badge: "ابدأ مشروعك",
    contact_title: "هل أنت مستعد لتحديث مطبخك؟",
    contact_desc: "اتصل بنا مباشرة على 1459-599 (945) أو أرسل صور خزائن مطبخك عبر واتساب للحصول على تسعيرة مجانية خلال ساعات معدودة.",
    contact_wa_note: "أسرع استجابة • أرسل الصور لتقدير فوري",
    contact_call_note: "تحدث مباشرة مع أخصائي التجديد لدينا",
    contact_service_note: "معاينات منزلية في جميع مدن DFW",
    contact_hours_title: "ساعات العمل",
    form_title: "طلب استشارة مباشر",
    form_name: "الاسم الكريم",
    form_phone: "رقم الجوال / واتساب",
    form_notes: "ملاحظات وتفاصيل المطبخ",
    form_btn_send: "إرسال الاستفسار عبر واتساب",

    // Footer & FAB
    footer_desc: "تجديد المطابخ الاحترافي وطلاء الخزائن المصنعي في كارولتون، تكساس ومنطقة دالاس فورت وورث الكبرى. اتصل بنا: 1459-599 (945) 1+",
    fab_chat_text: "واتساب"
  }
};

let currentLang = 'en';
const BUSINESS_PHONE_CLEAN = '19455991459';
const BUSINESS_PHONE_DISPLAY = '+1 (945) 599-1459';

function setLanguage(lang) {
  currentLang = lang;
  const isAr = lang === 'ar';

  document.documentElement.lang = lang;
  document.documentElement.dir = isAr ? 'rtl' : 'ltr';

  // Toggle button label
  const label = document.getElementById('currentLangLabel');
  if (label) {
    label.textContent = isAr ? 'English' : 'العربية';
  }

  // Translate all [data-i18n]
  const dict = translations[lang];
  document.querySelectorAll('[data-i18n]').forEach(el => {
    const key = el.getAttribute('data-i18n');
    if (dict[key]) {
      if (dict[key].includes('<')) {
        el.innerHTML = dict[key];
      } else {
        el.textContent = dict[key];
      }
    }
  });

  // Update Form Placeholders
  const custName = document.getElementById('custName');
  const custPhone = document.getElementById('custPhone');
  const custNotes = document.getElementById('custNotes');
  if (custName) custName.placeholder = isAr ? "مثال: عبدالله الشمري" : "e.g. Michael Ross";
  if (custPhone) custPhone.placeholder = isAr ? "مثال: (945) 599-1459" : "e.g. (945) 599-1459";
  if (custNotes) custNotes.placeholder = isAr ? "أخبرنا بعدد الخزائن أو التفاصيل التي تفضلها..." : "Tell us about your kitchen, number of cabinets, or desired color...";

  // Refresh dynamic calculator
  calculatePrice();

  // Dispatch languageChanged event for components (e.g. before/after slider)
  window.dispatchEvent(new Event('languageChanged'));
}

// ========================================================
// 2. SCROLL REVEAL (BUTTERY-SMOOTH SLIDE UP)
// ========================================================
function initScrollSlideUp() {
  const elements = document.querySelectorAll('.slide-up, .slide-up-trigger');
  
  if ('IntersectionObserver' in window) {
    const observer = new IntersectionObserver((entries, obs) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          entry.target.classList.add('visible');
          obs.unobserve(entry.target);
        }
      });
    }, {
      threshold: 0.1,
      rootMargin: "0px 0px -30px 0px"
    });

    elements.forEach(el => observer.observe(el));
  } else {
    elements.forEach(el => el.classList.add('visible'));
  }
}

// ========================================================
// 3. INTERACTIVE BEFORE & AFTER SLIDER
// ========================================================
function initBeforeAfterSlider() {
  const container = document.getElementById('baContainer');
  const clip = document.getElementById('baClip');
  const handle = document.getElementById('baHandle');

  if (!container || !clip || !handle) return;

  let isDragging = false;

  function updateSlider(clientX) {
    const rect = container.getBoundingClientRect();
    const isRtl = document.documentElement.getAttribute('dir') === 'rtl';
    let pos = clientX - rect.left;
    if (pos < 0) pos = 0;
    if (pos > rect.width) pos = rect.width;

    let percent = (pos / rect.width) * 100;
    percent = Math.max(0, Math.min(100, percent));

    if (isRtl) {
      const rtlPercent = 100 - percent;
      clip.style.clipPath = `inset(0 0 0 ${rtlPercent}%)`;
      handle.style.right = `${rtlPercent}%`;
      handle.style.left = 'auto';
    } else {
      clip.style.clipPath = `inset(0 ${100 - percent}% 0 0)`;
      handle.style.left = `${percent}%`;
      handle.style.right = 'auto';
    }
  }

  function resetToCenter() {
    const isRtl = document.documentElement.getAttribute('dir') === 'rtl';
    if (isRtl) {
      clip.style.clipPath = 'inset(0 0 0 50%)';
      handle.style.right = '50%';
      handle.style.left = 'auto';
    } else {
      clip.style.clipPath = 'inset(0 50% 0 0)';
      handle.style.left = '50%';
      handle.style.right = 'auto';
    }
  }

  // Set initial 50/50 state
  resetToCenter();

  // Mouse interaction
  container.addEventListener('mousedown', (e) => {
    isDragging = true;
    updateSlider(e.clientX);
  });

  window.addEventListener('mouseup', () => { isDragging = false; });
  window.addEventListener('mousemove', (e) => {
    if (!isDragging) return;
    updateSlider(e.clientX);
  });

  // Click on container jumps handle directly to click location
  container.addEventListener('click', (e) => {
    updateSlider(e.clientX);
  });

  // Touch Support
  container.addEventListener('touchstart', (e) => {
    isDragging = true;
    updateSlider(e.touches[0].clientX);
  }, { passive: true });

  window.addEventListener('touchend', () => { isDragging = false; });
  window.addEventListener('touchmove', (e) => {
    if (!isDragging) return;
    updateSlider(e.touches[0].clientX);
  }, { passive: true });

  // Update position on language switch
  window.addEventListener('languageChanged', resetToCenter);
}

// ========================================================
// 4. PRICING ESTIMATOR
// ========================================================
let selectedScope = 'painting';
let selectedIsland = 'none';

function initPricingEstimator() {
  const slider = document.getElementById('openingsSlider');
  const openingsVal = document.getElementById('openingsVal');

  if (slider && openingsVal) {
    slider.addEventListener('input', () => {
      const isAr = currentLang === 'ar';
      openingsVal.textContent = isAr ? `${slider.value} فتحة` : `${slider.value} Openings`;
      calculatePrice();
    });
  }

  // Scope Pill Buttons
  const scopePills = document.querySelectorAll('[data-scope]');
  scopePills.forEach(pill => {
    pill.addEventListener('click', () => {
      scopePills.forEach(p => p.classList.remove('active'));
      pill.classList.add('active');
      selectedScope = pill.getAttribute('data-scope');
      calculatePrice();
    });
  });

  // Island Pill Buttons
  const islandPills = document.querySelectorAll('[data-island]');
  islandPills.forEach(pill => {
    pill.addEventListener('click', () => {
      islandPills.forEach(p => p.classList.remove('active'));
      pill.classList.add('active');
      selectedIsland = pill.getAttribute('data-island');
      calculatePrice();
    });
  });

  calculatePrice();
}

function calculatePrice() {
  const slider = document.getElementById('openingsSlider');
  const openings = slider ? parseInt(slider.value) : 30;
  const isAr = currentLang === 'ar';

  let baseRate = 85; // cabinet spray painting
  let timeline = isAr ? "3 - 4 أيام" : "3 - 4 Days";
  let scopeLabel = isAr ? "طلاء ورش الخزائن" : "Cabinet Spray Painting";

  if (selectedScope === 'refacing') {
    baseRate = 160;
    timeline = isAr ? "5 - 7 أيام" : "5 - 7 Days";
    scopeLabel = isAr ? "أبواب شاكر جديدة + طلاء" : "New Shaker Doors + Paint";
  } else if (selectedScope === 'full') {
    baseRate = 240;
    timeline = isAr ? "1 - 2 أسبوع" : "1 - 2 Weeks";
    scopeLabel = isAr ? "تجديد مطبخ متكامل" : "Full Kitchen Remodel";
  }

  let min = openings * baseRate;

  if (selectedIsland === 'same') {
    min += 450;
  } else if (selectedIsland === 'accent') {
    min += 650;
  }

  const max = Math.round((min * 1.25) / 50) * 50;
  min = Math.round(min / 50) * 50;

  // Approximate savings vs new cabinets
  const newCabinetCost = openings * 450;
  const savings = Math.max(newCabinetCost - max, 3500);

  // Update DOM
  const priceDisplay = document.getElementById('calcPriceDisplay');
  const estTimeline = document.getElementById('estTimeline');
  const estSavings = document.getElementById('estSavings');
  const waBtn = document.getElementById('calcWhatsAppBtn');

  if (priceDisplay) priceDisplay.textContent = `$${min.toLocaleString()} - $${max.toLocaleString()}`;
  if (estTimeline) estTimeline.textContent = timeline;
  if (estSavings) estSavings.textContent = isAr ? `وفّر ~$${savings.toLocaleString()}+` : `Save ~$${savings.toLocaleString()}+`;

  if (waBtn) {
    const waText = isAr
      ? `مرحباً DFW Cabinets! حسبت تقدير تكلفة لمطبخي عبر موقعكم:
• نوع العمل: ${scopeLabel}
• عدد الفتحات: ${openings}
• النطاق التقديري: $${min.toLocaleString()} - $${max.toLocaleString()}
أود حجز موعد استشارة وتأكيد التكلفة.`
      : `Hello DFW Cabinets! I calculated an estimate on your website:
• Scope: ${scopeLabel}
• Openings: ${openings}
• Estimated Investment: $${min.toLocaleString()} - $${max.toLocaleString()}
I'd like to schedule a free in-home consultation to confirm.`;

    waBtn.href = `https://wa.me/${BUSINESS_PHONE_CLEAN}?text=${encodeURIComponent(waText)}`;
  }
}

// ========================================================
// 5. CONTACT FORM VIA WHATSAPP (NO POPUPS)
// ========================================================
function initContactForm() {
  const form = document.getElementById('contactForm');
  if (!form) return;

  form.addEventListener('submit', (e) => {
    e.preventDefault();
    const isAr = currentLang === 'ar';
    const name = document.getElementById('custName').value.trim();
    const phone = document.getElementById('custPhone').value.trim();
    const notes = document.getElementById('custNotes').value.trim();

    const msg = isAr
      ? `مرحباً DFW Cabinets! أود طلب تقدير مجاني لمطبخي:
• الاسم: ${name}
• الهاتف: ${phone}
• تفاصيل المشروع: ${notes || 'معاينة عامة'}`
      : `Hello DFW Cabinets! I'd like to request a free estimate:
• Name: ${name}
• Phone: ${phone}
• Project Notes: ${notes || 'General consultation'}`;

    window.open(`https://wa.me/${BUSINESS_PHONE_CLEAN}?text=${encodeURIComponent(msg)}`, '_blank');
  });
}

// ========================================================
// 6. NAVIGATION & LANGUAGE BUTTON
// ========================================================
function initNav() {
  const toggleBtn = document.getElementById('langToggleBtn');
  if (toggleBtn) {
    toggleBtn.addEventListener('click', () => {
      setLanguage(currentLang === 'en' ? 'ar' : 'en');
    });
  }

  const menuToggle = document.getElementById('menuToggle');
  const navLinks = document.getElementById('navLinks');
  if (menuToggle && navLinks) {
    menuToggle.addEventListener('click', () => {
      const isVisible = navLinks.style.display === 'flex';
      navLinks.style.display = isVisible ? 'none' : 'flex';
      navLinks.style.flexDirection = 'column';
      navLinks.style.position = 'absolute';
      navLinks.style.top = '72px';
      navLinks.style.left = '0';
      navLinks.style.background = 'rgba(245, 239, 230, 0.98)';
      navLinks.style.backdropFilter = 'blur(14px)';
      navLinks.style.webkitBackdropFilter = 'blur(14px)';
      navLinks.style.borderBottom = '1px solid var(--border-topbar)';
      navLinks.style.boxShadow = '0 16px 36px rgba(130, 100, 70, 0.12)';
      navLinks.style.padding = '24px';
      navLinks.style.gap = '16px';
    });
  }
}

// ========================================================
// INITIALIZE ON DOM READY
// ========================================================
document.addEventListener('DOMContentLoaded', () => {
  initNav();
  initScrollSlideUp();
  initBeforeAfterSlider();
  initPricingEstimator();
  initContactForm();
});
