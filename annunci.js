//js navbar scrollo
let navbar = document.querySelector('#navbar')

document.addEventListener('scroll', ()=>{
    let scrolled = window.scrollY
    if(scrolled > 500){
        navbar.classList.add('navbarScroll')
    }else{
        navbar.classList.remove('navbarScroll')
    }
})

//fetch per collegare file json + card
fetch("./annunci.json").then((response)=>response.json()).then ((data)=>{

    data.sort((a,b)=> a.price - b.price)

    let containerCard = document.querySelector('#containerCard')
    

    function showCards(array){
        array.forEach(annuncio => {
            let div = document.createElement('div')
            div.classList.add('col-6', 'col-md-3', 'mb-3')
            div.innerHTML = `<div class="card customCard" >
            <img src="${annuncio.img}" class="card-img-top" alt="...">
            <div class="card-body d-flex flex-column justify-content-between">
              <h5 class="card-title titleCard">${annuncio.name}</h5>
              <p class="card-text">${annuncio.category}</p>
             <div class="d-flex align-items-end" style="height:50px">
             <a href="#" class="btn btnCustom">${annuncio.price} $</a>
             </div>
            </div>
          </div>`
          containerCard.appendChild(div)
        });
    }

    showCards(data)
    
    // js off canvas filtri
    let containerCategories = document.querySelector('#containerCategories')

    function radioCreate(array){
        let categorie = array.map(annuncio => annuncio.category)
        let uniquecategoires = Array.from(new Set(categorie)) 
        uniquecategoires.forEach(categoria=>{
            let div = document.createElement('div')
            div.innerHTML = ` <input class="form-check-input" type="radio" name="categoria" id="${categoria}">
            <label class="form-check-label" for="${categoria}">
              ${categoria}
            </label>`
            containerCategories.appendChild(div)
        })


    }
    
    radioCreate(data)

    let radioBtn = document.querySelectorAll('.form-check-input')

    function filterbycategories(array){
        let btnChecked = Array.from(radioBtn).find(btn => btn.checked)
       
        if(btnChecked.id != 'All'){
            let filtered = array.filter(annuncio => annuncio.category == btnChecked.id)
            containerCard.innerHTML = ``
            showCards(filtered)
        }else{
            showCards(array)
        }
     }
    

     radioBtn.forEach(btn=>{
         btn.addEventListener('click', ()=>{
            filterbycategories(data)
        })

})
})
