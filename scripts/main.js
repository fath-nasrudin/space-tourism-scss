// navigation toggle
const navToggle = document.querySelector('.js-toggle-nav-mobile');
const primaryNavigation = document.querySelector('.js-primary-navigation');

navToggle.addEventListener('click', (e) => {
  const isVisible = primaryNavigation.getAttribute('data-visible')
  if (isVisible === 'false') {
    primaryNavigation.setAttribute('data-visible', true);
    navToggle.setAttribute('aria-expanded', true);
  } else {
    primaryNavigation.setAttribute('data-visible', false);
    navToggle.setAttribute('aria-expanded', false);

  }
})