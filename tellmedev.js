const langSwitcher = document.getElementById("language-switcher");
const elements = document.querySelectorAll("[data-translate]");

// قائمة اللغات المتوفرة
const availableLanguages = ["en", "ar", "fr", "es"];
availableLanguages.forEach(lang => {
  const option = document.createElement("option");
  option.value = lang;
  option.textContent = lang.toUpperCase();
  langSwitcher.appendChild(option);
});

async function setLanguage(lang) {
  try {
    const response = await fetch(`lang/${lang}.json`);
    const translations = await response.json();

    elements.forEach(el => {
      const key = el.getAttribute("data-translate");
      if (translations[key]) el.textContent = translations[key];
    });

    document.body.setAttribute("dir", lang === "ar" ? "rtl" : "ltr");
    localStorage.setItem("siteLanguage", lang);
    langSwitcher.value = lang;
  } catch (error) {
    console.error("خطأ في تحميل ملف الترجمة:", error);
  }
}

// تحميل اللغة المحفوظة أو الإنجليزية
const savedLang = localStorage.getItem("siteLanguage") || "en";
setLanguage(savedLang);

langSwitcher.addEventListener("change", e => {
  setLanguage(e.target.value);
});