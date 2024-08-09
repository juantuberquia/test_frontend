document.addEventListener('DOMContentLoaded', () => {
  const menuToggle = document.getElementById('menu-toggle');
  const menu = document.getElementById('menu');

  menuToggle?.addEventListener('click', () => {

    if (menu.classList.contains("openMenu")) {
      menu.classList.remove("openMenu")
    } else {
      menu.classList.add('openMenu');
    }
  });
})

