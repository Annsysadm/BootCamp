var box = document.querySelector('.box');
var colorInput = document.getElementById('color');
var changeColorButton = document.querySelector('.change-color');
var showMessageButton = document.querySelector('.show-message');
var messageInput = document.getElementById('very-important-message')


changeColorButton.addEventListener('click', function () {
  var color = colorInput.value;
  box.style.backgroundColor = color;
});

showMessageButton.addEventListener('click', function() {
	box.innerHTML = messageInput.value;
})