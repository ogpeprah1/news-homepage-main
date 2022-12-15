let openMenu = document.getElementById('menu-open')
let MenuItems = document.getElementById('Links')
let Overlay = document.getElementById('overlay')
let closeMenu = document.getElementById('menu-close')

openMenu.addEventListener('click', function(){
    MenuItems.style.display = 'inline-flex';
    MenuItems.style.transition = 'all 0.5s'
    Overlay.style.display = 'inline-flex'
})

closeMenu.addEventListener('click', function(){
    MenuItems.style.display = 'none';
    Overlay.style.display = 'none'
})