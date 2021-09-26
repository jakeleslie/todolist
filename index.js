//selectors
let addToDoButton = document.getElementById('addTodo')
let todoContainer = document.getElementById('todoContainer')
let inputField = document.getElementById('inputField')


addToDoButton.addEventListener('click', function(){
    var para = document.createElement('p')
    para.innerText = inputField.value
    todoContainer.appendChild(para)
})