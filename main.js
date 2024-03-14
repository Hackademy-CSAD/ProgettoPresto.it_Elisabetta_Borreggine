//js scrollo navbar
let navbar = document.querySelector('#navbar')

document.addEventListener('scroll', ()=>{
    let scrolled = window.scrollY
    if(scrolled > 300){
        navbar.classList.add('navbarScroll')
        navbar.classList.add('navbartextColor')
    }else{
        navbar.classList.remove('navbarScroll')
        navbar.classList.remove('navbartextColor')
    }
})


//js Footer

let bottoneFooter = document.querySelectorAll('#bottoneFooter')
let inputFooter = document.querySelector ('#inputFooter')
let containerFooter = document.querySelector('#containerFooter')
let confirm =false
bottoneFooter.forEach(bottone =>{
        bottone.addEventListener('click', ()=>{
            let p = document.createElement('p')
        if(inputFooter.value == `` && confirm == false){
            containerFooter.innerHTML = ``
            p.innerHTML="Campo obbligatoio"
            confirm = true
        }else if(inputFooter.value != ``){
            containerFooter.innerHTML = ``
            p.innerHTML="registrazione avvenuta correttamente"
            inputFooter.value = ``
        }  
        containerFooter.appendChild(p)
        
    })
})



//progress circular
//catturiamo i container di ogni counter
let container1Circular = document.querySelector('.container1-circular');
let container2Circular = document.querySelector('.container2-circular');
let container3Circular = document.querySelector('.container3-circular');

let firstNumber = document.querySelector('#firstNumber');
let secondNumber = document.querySelector('#secondNumber');
let thirdNumber = document.querySelector('#thirdNumber');
// chiamamte asincrone
let check = true
function createInterval(n,element, time, progress){ //aggiungiamo un parametro ovvero progress che fa riferimento ai contenitori dei counter
    let counter = 0;
    let interval = setInterval(()=>{
        if(counter < n){
            counter ++
            element.innerHTML = `${counter} %`
            progress.style.background = `conic-gradient(var(--main) ${counter * 3.6}deg, #ffffff 0deg)` //aggiungiamo style a progress e con la string interpolation passiamo counter (che è 0 e gli facciamo eseguire un'operazione con l'angolo 3.6) e ci servirà per animare la progress bar
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
            createInterval(100, firstNumber, 20, container1Circular) //passiamo il parametro reale, ovvero container1-circular, che nella funzione createInterval e' progress
            createInterval(70, secondNumber, 10, container2Circular)//passiamo il parametro reale, ovvero container2-circular, che nella funzione createInterval e' progress
            createInterval(50, thirdNumber, 5, container3Circular)//passiamo il parametro reale, ovvero container3-circular, che nella funzione createInterval e' progress
            check = false
        }
    })
})



osservatore.observe(firstNumber)