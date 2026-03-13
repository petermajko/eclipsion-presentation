
// ===== LANGUAGE SWITCHING =====
function setLang(lang) {
  const strings = T[lang];
  if (!strings) return;
  document.querySelectorAll('[data-i18n]').forEach(el => {
    const key = el.getAttribute('data-i18n');
    if (strings[key] != null) el.textContent = strings[key];
  });
  document.querySelectorAll('[data-i18n-html]').forEach(el => {
    const key = el.getAttribute('data-i18n-html');
    if (strings[key] != null) el.innerHTML = strings[key];
  });
  document.documentElement.lang = lang;
  try { localStorage.setItem('eclipsion-lang', lang); } catch(e) {}
}

// Restore saved language on load
(function() {
  try {
    const saved = localStorage.getItem('eclipsion-lang');
    if (saved && T[saved]) {
      document.getElementById('langSelect').value = saved;
      setLang(saved);
    }
  } catch(e) {}
})();

// Scroll reveal
const obs = new IntersectionObserver(es => {
  es.forEach(e => { if (e.isIntersecting) e.target.classList.add('visible') });
}, { threshold: .1, rootMargin: '0px 0px -30px 0px' });
document.querySelectorAll('.reveal').forEach(el => obs.observe(el));

// Smooth scroll
document.querySelector('.hero-scroll')?.addEventListener('click', e => {
  e.preventDefault();
  document.querySelector('#intro')?.scrollIntoView({ behavior: 'smooth' });
});

// Theme toggle
function toggleTheme() {
  const tool = document.getElementById('hekaiTool');
  const sw = document.getElementById('themeSwitch');
  const isDark = tool.dataset.theme === 'dark';
  tool.dataset.theme = isDark ? 'light' : 'dark';
  sw.classList.toggle('is-dark', !isDark);
  document.getElementById('lbl-light').classList.toggle('active-label', isDark);
  document.getElementById('lbl-dark').classList.toggle('active-label', !isDark);
}

// Employment/Freelancing toggle
function setToggle(el) {
  el.parentElement.querySelectorAll('.ht-toggle-opt').forEach(o => o.classList.remove('active'));
  el.classList.add('active');
}
</script>
