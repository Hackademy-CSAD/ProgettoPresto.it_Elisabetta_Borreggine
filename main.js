let navbar = document.querySelector('#navbar')

document.addEventListener('scroll', ()=>{
    let scrolled = window.scrollY
    if(scrolled > 500){
        navbar.classList.add('navbarScroll')
    }else{
        navbar.classList.remove('navbarScroll')
    }
})

// chiamamte asincrone
let check = true
function createInterval(n,element, time){
    let counter = 0;
    let interval = setInterval(()=>{
        if(counter < n){
            counter ++
            element.innerHTML = counter
        }else{
            clearInterval(interval)
            
        }
    }, time)
    
    setTimeout(() => {
       check = true
      }, "5000");
    
    
}


let osservatore = new IntersectionObserver((entries)=>{
    entries.forEach(entry=>{
        if(entry.isIntersecting && check == true){ 
            createInterval(90, firstNumber, 20)
            createInterval(70, secondNumber, 10)
            createInterval(80, thirdNumber, 5)
            check = false
        }
    })
})

osservatore.observe(firstNumber)


// libreria swiper (framework per carousel)https://swiperjs.com/ prendere cdn => andiamo in demo , sciegliere carousel e andare su core . Uscira' un codice : prendersi cdn css e cdn js, poi copiare l'elemento , e prendersi anche il css (copiare solo le classi che fanno riferimento a swiper)

//per fare off canvas con filtri
//creare altra pagina html 
//1) copiare l'head , nav bar , header e footer , (il main non ci interessa) e incollo in annunci.html, mi copio lo script di bootstrap, fontawsome e il mio e incollo in annunci.html (inserisco una nuova pagina js annunci.js)
// cambio il titolo dall'head , e anche il titolo e le dimensioni dell'h1 che sara' h4 e si chiamera' tutti gli annunci 


