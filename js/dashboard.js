const menuToggle = document.getElementById('menu-toggle');
const sidebarMenu = document.getElementById('sidebar-menu');
const menuClose = document.getElementById('menu-close');
const overlay = document.getElementById('overlay');

function openMenu() {
    sidebarMenu.classList.add('open');
    overlay.style.display = 'block';
    setTimeout(() => {
        overlay.style.opacity = '1';
    }, 10);
}

// Function to close the sidebar
function closeMenu() {
    sidebarMenu.classList.remove('open');
    overlay.style.opacity = '0';
    setTimeout(() => {
        overlay.style.display = 'none';
    }, 300);
}

menuToggle.addEventListener('click', openMenu);
menuClose.addEventListener('click', closeMenu);
overlay.addEventListener('click', closeMenu); 