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

/* ----------------
  tabs
-------------------*/
const tablist = document.querySelector('[role="tablist"]');
const tabs = tablist.querySelectorAll('[role="tab"]');

// focus switch
tablist.addEventListener('keydown', switchFocus);

let currentTabFocus = 0;
function switchFocus(e) {
  const currentKey = e.key;
  const KeyLeft = 'ArrowLeft';
  const KeyRight = 'ArrowRight';

  if (currentKey === KeyLeft || currentKey === KeyRight) {
    tabs[currentTabFocus].setAttribute('tabindex', -1);

    if (currentKey === KeyLeft) {
      currentTabFocus--;
      if (currentTabFocus < 0) currentTabFocus = tabs.length - 1;
    } else if (currentKey === KeyRight) {
      currentTabFocus++;
      if (currentTabFocus >= tabs.length) currentTabFocus = 0;
    }

    tabs[currentTabFocus].setAttribute('tabindex', 0);
    tabs[currentTabFocus].focus();
  }
}

// click tab listeners
tabs.forEach(tab => {
  tab.addEventListener('click', (e) => {
    const currentTab = e.target;
    const panelId = currentTab.getAttribute('aria-controls');
    const imageId = currentTab.getAttribute('data-tab-image');
    const tablist = currentTab.closest('[role="tablist"]');
    const mainContainer = tablist.parentElement;


    // change the focus
    Array.from(tablist.children).forEach(tab => tab.setAttribute('aria-selected', false))
    currentTab.setAttribute('aria-selected', true);

    // change the content
    mainContainer
      .querySelectorAll('[role="tabpanel"]')
      .forEach(panel => panel.setAttribute('hidden', true));
    mainContainer.querySelector(`#${panelId}`).removeAttribute('hidden');

    // change the image
    mainContainer
      .querySelectorAll('[data-tab-image-item]')
      .forEach(panel => panel.setAttribute('hidden', true));
    mainContainer.querySelector(`#${imageId}`).removeAttribute('hidden');
  })
})
