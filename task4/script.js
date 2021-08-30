const Link = document.querySelector('link');

link.addEventListener ('click', 
(event) => {
  link.textContent = prompt('Введите текст');
})

link.preventDefault();

