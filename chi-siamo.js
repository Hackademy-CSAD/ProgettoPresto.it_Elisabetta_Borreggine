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

//js card chi siamo
let chiSiamo = [
    {
        name:'Marge Simpson',
        description: 'Lorem, ipsum dolor sit amet consectetur adipisicing elit. Blanditiis doloribus tempore illum veniam ipsum.',
        job: 'CHEF',
        img:'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ1vGv4MX0ISqgjMxywvEjisNJjONtdAcE3gA&usqp=CAU'
    },
    {
        name:'Ned Flanders',
        description: 'Lorem, ipsum dolor sit amet consectetur adipisicing elit. Blanditiis doloribus tempore illum veniam ipsum.',
        job: 'DIRETTORE CREATIVO',
        img:'https://www.gyfted.me/_next/image?url=%2Fimg%2Fcharacters%2Fned-flanders.png&w=640&q=75'
    },
    {   
        name:'Lisa Simpson',
        description: 'Lorem, ipsum dolor sit amet consectetur adipisicing elit. Blanditiis doloribus tempore illum veniam ipsum.',
        job: 'SOUS CHEF',
        img:'https://facts.net/wp-content/uploads/2023/09/24-facts-about-lisa-simpson-the-simpsons-1693830278.jpg'
    },
]

let containerCard = document.querySelector('#containerCard')

chiSiamo.forEach(card=>{
    let div = document.createElement('div')
    div.classList.add('col-6', 'col-md-3')
    div.innerHTML = `<div class="card cardChiSiamo">
    <img src="${card.img}" class="card-img-top img-fluid " alt="...">
    <div class="card-body ">
      <h5 class="card-title cardTitle">${card.name}</h5>
      <p class="card-text cardDescription">${card.description}</p>
      <h3 class="nav-link h3">${card.job}</h3>
    </div>
  </div>`
  containerCard.appendChild(div)
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
            p.innerHTML="Campo obbligatoio"
            confirm = true
            containerFooter.appendChild(p)
        }else{
            confirm = false
           containerFooter.innerHTML=``
        }  
        
    })
})
