
const elDarkModeButton = document.querySelector('.dark-mode-btn');
const elLightModeButton = document.querySelector('.light-mode-btn');

elDarkModeButton.addEventListener('click', function () {
  document.body.classList.add('dark-mode')
});

elLightModeButton.addEventListener(
  'click', function name(params) {
    document.body.classList.remove('dark-mode')
  }
);