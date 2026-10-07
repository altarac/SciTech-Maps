/* Palette sampled from the curriculum-planning slide supplied on 7 October 2026.
   Subject families retain their colours across grades; mixed units use their main storyline. */
(function () {
  const units = {
    g3u1: 'teal', g3u2: 'teal', g3u3: 'gold', g3u4: 'green',
    g4u1: 'teal', g4u2: 'gold', g4u3: 'green', g4u4: 'green',
    g5u1: 'teal', g5u2: 'teal', g5u3: 'green', g5u4: 'green',
    g6u1: 'teal', g6u2: 'orange', g6u3: 'gold', g6u4: 'gold'
  };
  window.scitechUnitThemes = units;
  window.scitechApplyTheme = function (key) {
    document.documentElement.dataset.unitTheme = units[key] || 'slate';
  };
  document.addEventListener('DOMContentLoaded', function () {
    const reader = location.pathname.match(/Grade_(\d)_Unit_(\d)/);
    if (reader) window.scitechApplyTheme('g' + reader[1] + 'u' + reader[2]);
    if (document.querySelector('.library-list')) {
      window.scitechApplyTheme(null);
      document.querySelectorAll('.library-list li').forEach(function (row) {
        const match = row.querySelector('a').getAttribute('href').match(/Grade_(\d)_Unit_(\d)/);
        if (match) row.dataset.unitTheme = units['g' + match[1] + 'u' + match[2]];
      });
    }
  });
}());
