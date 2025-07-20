const langBtn = document.getElementById('lang-btn');
let currentLang = 'es';

// Diccionario de traducciones
const translations = {
  es: {
    'hero-title': 'Organiza tu vida con MiApp',
    'hero-text': 'La mejor herramienta para mejorar tu productividad desde cualquier lugar.',
    'hero-btn': 'Empieza gratis',
    'features-title': '¿Qué puedes hacer con MiApp?',
    'f1': '✔ Crear tareas',
    'f2': '✔ Gestionar tu tiempo',
    'f3': '✔ Sincronizar en la nube',
    'footer-text': '© 2025 MiApp. Todos los derechos reservados.',
  },
  en: {
    'hero-title': 'Organize your life with MiApp',
    'hero-text': 'The best tool to boost your productivity from anywhere.',
    'hero-btn': 'Start for free',
    'features-title': 'What can you do with MiApp?',
    'f1': '✔ Create tasks',
    'f2': '✔ Manage your time',
    'f3': '✔ Sync to the cloud',
    'footer-text': '© 2025 MiApp. All rights reserved.',
  }
};

// Cambia el idioma dinámicamente
langBtn.addEventListener('click', () => {
  currentLang = currentLang === 'es' ? 'en' : 'es';
  langBtn.textContent = currentLang.toUpperCase() === 'ES' ? 'EN' : 'ES';

  const texts = translations[currentLang];
  for (let id in texts) {
    const el = document.getElementById(id);
    if (el) el.textContent = texts[id];
  }
});