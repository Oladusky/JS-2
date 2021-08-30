document.querySelector('#consoleLog').addEventListener('click', 
  (event) => {
    this.alert('Используется для вывода сообщения в консоль');
})

document.querySelector('#alert').addEventListener('click', 
  (event) => {
    this.alert('Используется для вывода на экран важного сообщения для пользователя');
})

document.querySelector('#prompt').addEventListener('click', 
  (event) => {
    this.alert('Используется для запроса ввести данные пользователем');
})

