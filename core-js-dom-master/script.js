// добавить кнопки Купить на каждую карточку
// навесить обработчик событий на кнопки
// по клику должно появляться окошо alert с именем рыбки на которую вы кликнули

const main = document.getElementById("main");
const mainHeading = main.getElementsByTagName("span");
const mainHeadingLi = main.getElementsByTagName("li");
const countFish = mainHeadingLi.length;

function alertFishClick(i) {
   alert(`Вы хотите купить ${mainHeading[i].innerText}?`);
}

function addButtonBuy(i) {
   let buttonBuy = document.createElement("button");
   buttonBuy.className = "fish-list-card-button-buy";
   buttonBuy.style.width = "80px";
   buttonBuy.style.margin = "0 0 10px 0";
   buttonBuy.innerText = `Buy`;
   buttonBuy.onclick = function () {
       alertFishClick(i)
   };
   mainHeadingLi[i].appendChild(buttonBuy)
}

for (let i = 0; i < countFish; i++) {
   addButtonBuy(i)
}
