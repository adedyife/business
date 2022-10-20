const open = document.querySelector(".hamburger")
const menu = document.querySelector(".header")
const flip = document.querySelector(".close-btn")
const que1 = document.querySelector("#one")
const que2 = document.querySelector("#two")
const que3 = document.querySelector("#three")
const que4 = document.querySelector("#four")
const question1 = document.querySelector("#question1")
const question2 = document.querySelector("#question2")
const question3 = document.querySelector("#question3")
const question4 = document.querySelector("#question4")









open.addEventListener ('click', () => {
    menu.classList.add('slidein')
    menu.classList.remove('off')
    open.classList.add('off')
    console.log(menu)
}
)   

flip.addEventListener( 'click', () => {
    menu.classList.add('off')
    open.classList.remove('off')
}
)


fetch("faq.json")
.then ((response) =>  response.json())

.then ((data) =>{    
console.log([data[0].answer])





que1.innerHTML = `<p>${[data[0].answer]}</p>`
que2.innerHTML = `<p>${[data[1].answer]}</p>`
que3.innerHTML = `<p>${[data[2].answer]}</p>`
que4.innerHTML = `<p>${[data[3].answer]}</p>`

question1.innerHTML = `<h3>${[data[0].name]}</h3>`
question2.innerHTML = `<h3>${[data[1].name]}</h3>`
question3.innerHTML = `<h3>${[data[2].name]}</h3>`
question4.innerHTML = `<h3>${[data[3].name]}</h3>`

})


