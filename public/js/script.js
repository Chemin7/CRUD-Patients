

let addOpt = document.getElementById('add')
let updtOpt = document.getElementById('update')
let delOpt = document.getElementById('delete');
let form = document.querySelector('#patient-form')
addOpt.classList.add('active')

addOpt.classList.add('active')

addOpt.addEventListener('click',()=>{
    updtOpt.classList.remove('active')
    delOpt.classList.remove('active')
    addOpt.classList.add('active')
})
updtOpt.addEventListener('click',()=>{
    addOpt.classList.remove('active')
    delOpt.classList.remove('active')
    updtOpt.classList.add('active')
})
delOpt.addEventListener('click',()=>{
    updtOpt.classList.remove('active')
    addOpt.classList.remove('active')
    delOpt.classList.add('active')
})