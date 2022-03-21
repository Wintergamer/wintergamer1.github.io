const navSlide = () => {
    const navMobile = document.querySelector('.nav-mobile')
    const navBar = document.querySelector('nav-links')
    const navLinks = document.querySelectorAll('.nav-link li')

    navMobile.addEventListener ('click',() => {
        navBar.classList.toggle('nav-active')
    });
}

navSlide();