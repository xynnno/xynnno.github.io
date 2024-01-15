// toggle class active

const navbarNav=document.querySelector('.navbar-nav')

document.querySelector('#burger-menu'). onclick =() => {
    navbarNav.classList.toggle('active');
}

const burger=document.querySelector('#burger-menu')

document.addEventListener('click', function(e) {
    if(!burger.contains(e.target) && !navbarNav.contains(e.target)) {
        navbarNav.classList.remove("active")
    }
})
