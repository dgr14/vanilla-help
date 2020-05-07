let box = document.getElementById('item-container')
// box.style.backgroundColor = 'green'
let button = document.getElementById('submit')
let h1 = document.createElement('h1')

h1.textContent = 'hello world'
box.appendChild(h1)

box.addEventListener('click', function(){
    this.style.backgroundColor ='green'
})

button.addEventListener('click', function(){
    box.style.height = '300px'
    box.style.width = '300px'
})

console.log(h1)