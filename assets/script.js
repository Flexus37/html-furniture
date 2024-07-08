document.addEventListener('DOMContentLoaded', function () {

  // Sidebar и Filters
  const sidebar = document.getElementById('sidebar');
  const sidebarCloseBtn = document.getElementById('sidebar__close-btn');
  const overlay = document.getElementById('overlay');
  const filters = document.getElementById('filters');
  const filtersCloseBtn = document.getElementById('filters__close-btn');
  const menuToggle = document.getElementById('menu-toggle');
  const filtersBtn = document.getElementById('filters-btn');
  const body = document.body;

  function openSidebar() {
    sidebar.classList.add('open');
    overlay.classList.add('active');
    body.classList.add('no-scroll');
  }

  function closeSidebar() {
    sidebar.classList.remove('open');
    overlay.classList.remove('active');
    body.classList.remove('no-scroll');
  }

  function openFilters() {
    filters.classList.add('open');
    filtersBtn.classList.add('active');
    overlay.classList.add('active');
    body.classList.add('no-scroll');
  }

  function closeFilters() {
    filters.classList.remove('open');
    filtersBtn.classList.remove('active');
    overlay.classList.remove('active');
    body.classList.remove('no-scroll');
  }

  function handleMenuToggle() {
    if (window.innerWidth < 880) {
      openSidebar();
    }
  }

  function handleFiltersBtn() {
    if (window.innerWidth < 880) {
      openFilters();
    }
  }

  menuToggle.addEventListener('click', handleMenuToggle);
  filtersBtn.addEventListener('click', handleFiltersBtn);
  sidebarCloseBtn.addEventListener('click', closeSidebar);
  filtersCloseBtn.addEventListener('click', closeFilters);
  overlay.addEventListener('click', () => {
    closeSidebar();
    closeFilters();
  });

  // Закрытие сайдбара и фильтров, если ширина экрана больше 880px
  window.addEventListener('resize', () => {
    if (window.innerWidth >= 880) {
      closeSidebar();
      closeFilters();
    }
  });
});
