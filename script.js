let lang = localStorage.getItem("lang") || "ar";

const translations = {
  ar: {
    // عام
    title: "منظّم مهامي",
    home: "منظّم مهامي",
    add: "إضافة",

    // الناف بار
    nav_home: "الرئيسية",
    nav_tasks: "المهام",
    nav_appointments: "المواعيد",
    nav_about: "عنّا",

    // الصفحة الرئيسية
    welcome: "مرحبًا بك في منظّم مهامك",
    desc: "نظّم مهامك ومواعيدك بسهولة وتابع إنجازاتك يومًا بيوم.",

    // المهام
    tasks: "المهام",
    task_placeholder: "اكتب المهمة",

    // المواعيد
    appointments: "المواعيد",
    event_name: "اسم الموعد",

    // عن التطبيق
    about: "عن التطبيق",
    aboutText:
      "هذا التطبيق يساعدك على تنظيم مهامك ومواعيدك مع حفظ تلقائي وتنبيهات."
  },

  en: {
    // General
    title: "My Planner",
    home: "My Planner",
    add: "Add",

    // Navbar
    nav_home: "Home",
    nav_tasks: "Tasks",
    nav_appointments: "Appointments",
    nav_about: "About",

    // Home
    welcome: "Welcome to your task organizer",
    desc: "Organize your tasks and appointments easily.",

    // Tasks
    tasks: "Tasks",
    task_placeholder: "Write task",

    // Appointments
    appointments: "Appointments",
    event_name: "Event name",

    // About
    about: "About",
    aboutText:
      "This app helps you organize your tasks and appointments with auto saving and reminders."
  }
};

function applyLang() {
  // اتجاه + لغة الصفحة
  document.documentElement.lang = lang;
  document.body.dir = lang === "ar" ? "rtl" : "ltr";

  // النصوص
  document.querySelectorAll("[data-key]").forEach(el => {
    const key = el.getAttribute("data-key");
    if (translations[lang][key]) {
      el.textContent = translations[lang][key];
    }
  });

  // الـ placeholder
  document.querySelectorAll("[data-key-placeholder]").forEach(el => {
    const key = el.getAttribute("data-key-placeholder");
    if (translations[lang][key]) {
      el.placeholder = translations[lang][key];
    }
  });
}

function toggleLang() {
  lang = lang === "ar" ? "en" : "ar";
  localStorage.setItem("lang", lang);
  applyLang();
}

document.addEventListener("DOMContentLoaded", applyLang);
