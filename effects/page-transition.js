(() => {
  const main = document.getElementById('main');
  if (!main) return;
  const clean = () => main.classList.remove('kr-page-leave', 'kr-page-enter', 'kr-page-enter-active');
  window.addEventListener('pjax:before', () => {
    clean();
    main.classList.add('kr-page-leave');
  });
  window.addEventListener('pjax:complete', () => {
    main.classList.remove('kr-page-leave');
    main.classList.add('kr-page-enter');
    void main.offsetWidth;
    main.classList.add('kr-page-enter-active');
    setTimeout(clean, 450);
  });
})();
