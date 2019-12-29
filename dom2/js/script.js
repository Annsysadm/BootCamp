var box = document.querySelector('.box');
var propertyInput = document.getElementById('css-property');/* присваиваем в новую переменную элемент с id css-property - это наш инпут с Property*/
var valueInput = document.getElementById('css-value');			/* присваиваем в новую переменную элемент с id css-value - это наш инпут с value of property*/
var changeMeButton = document.querySelector('.change-box-button'); /* находим элемент - кнопку со стилем change-box*/


changeMeButton.addEventListener('click', function () {
	console.log('propertyInput:', propertyInput.value)
	console.log('valueInput:', valueInput.value)

	let propertyName = propertyInput.value;
	console.log('propertyName:', propertyName)

	// box.style.cssText = `${propertyInput.value} : ${valueInput.value}`
	// box.setAttribute('style', `${propertyInput.value} : ${valueInput.value}`)

	box.style.setProperty(propertyInput.value, valueInput.value)

	document.getElementById('css-value').value = "";
	document.getElementById('css-property').value = "";
	
});