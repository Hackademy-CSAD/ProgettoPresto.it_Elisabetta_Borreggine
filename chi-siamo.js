//js scrollo navbar
let navbar = document.querySelector('#navbar')

document.addEventListener('scroll', ()=>{
    let scrolled = window.scrollY
    if(scrolled > 500){
        navbar.classList.add('navbarScroll')
        navbar.classList.add('navbartextColor')
    }else{
        navbar.classList.remove('navbarScroll')
        navbar.classList.remove('navbartextColor')
    }
})