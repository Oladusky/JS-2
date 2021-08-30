const duplicateText = document.querySelector('duplicateField');
const inp = document.querySelector('input');
const btn = document.querySelector('button');

input.addEventListener ('input', 
(event) => {
    duplicateField.textContent = input.value;
})

button.addEventListener ('click', 
(event) => {
    console.log(input.value);
    duplicateField.textContent = null;
    input.value = null;
})