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

// chiamamte asincrone js creazione counter
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


let bottoneFooter = document.querySelector('#bottoneFooter')
let inputFooter = document.querySelector ('#inputFooter')
let containerFooter = document.querySelector('#containerFooter')

bottoneFooter.addEventListener('click', ()=>{
    if(inputFooter.value == ``){
        let p = document.createElement('p')
        p.innerHTML="Campo obbligatoio"
    containerFooter.appendChild(p)
    }
})

