  c_czech: "Чеська Республіка", c_czech_d: "Відмінне співвідношення витрат і доходу",
  c_germany: "Німеччина", c_germany_d: "Найкраща охорона здоров'я та безпека",
  c_netherlands: "Нідерланди", c_netherlands_d: "Сильна спільнота та робота",
  ht_hint: 'Додайте більше про себе, щоб уточнити рейтинг. Чим більше Hek<em>ai</em> знає, тим точнішими стають ваші збіги.',
  closing_quote: 'Як затемнення, що перетворює все, до чого торкається,<br>ми віримо, що <em>кожна людина, до якої ми дотягуємося</em>, несе далі<br>світло, що змінює світ навколо —<br>одне життя, одна фаза, один <em>великий перехід</em>.'
}
};

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
