//selectors
const addToDoButton = document.getElementById('addTodo')
const todoContainer = document.getElementById('todoContainer')
const inputField = document.getElementById('inputField')
const removeToDoButton = document.getElementById('removeTodo')

//have to add an event listener so something happens, this says: on button click do this function
addToDoButton.addEventListener('click', function(){
    const para = document.createElement('p') //create a new element p, which will be our todo text
    para.classList.add('para') //add styling to the paragraph
    para.innerText = inputField.value //set the text of paragraph to the inputfield text
    todoContainer.appendChild(para) //add this paragraph to our div so that it is inside of the container
    inputField.value = "" //set the input field text to an empty string so we dont see the last to do in the input
})
removeToDoButton.addEventListener('click', function(){

})