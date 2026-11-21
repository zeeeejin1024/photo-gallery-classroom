'use strict';
const buttons = document.querySelectorAll('[data-filter]');
const works = document.querySelectorAll('[data-category]');
buttons.forEach(button => button.addEventListener('click', () => {
  const category = button.dataset.filter;
  let visible = 0;
  buttons.forEach(item => item.setAttribute('aria-pressed', String(item === button)));
  works.forEach(work => {
    work.hidden = category !== 'all' && category !== work.dataset.category;
    if (!work.hidden) visible++;
  });
  document.getElementById('count').textContent = `当前显示 ${visible} 幅作品`;
}));
