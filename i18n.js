// 언어 선택(PC 헤더): 바깥을 누르거나 Esc 를 누르면 닫힘
(() => {
  const picks = [...document.querySelectorAll('.approved-lang--pick')];
  if (!picks.length) return;
  document.addEventListener('click', e => picks.forEach(d => { if (d.open && !d.contains(e.target)) d.open = false; }));
  document.addEventListener('keydown', e => { if (e.key === 'Escape') picks.forEach(d => { if (d.open) { d.open = false; d.querySelector('summary').focus(); } }); });
})();
