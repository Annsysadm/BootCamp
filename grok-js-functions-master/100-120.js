// 100\. Объявите функцию с именем `foo`.

function foo() {};

// 102\. Объявите именованную функцию `foo` со входящим параметром `x`. Обозначьте границы тела функции и границы объявления параметров

function foo(/*params start*/x/*params end*/) {
	/*body start*/
	 /*body end*/
	};

// 104\. Объявите функцию `foo`, которая возвращает число `42`. Обозначьте границы объявления параметров функции.

function foo(/*params start*//*params end*/){
	return 42;
};
// 106\. Объявите анонимную не стрелочную функцию. Где у данной функции имя?

function /*у этой функции нет имени*/ (){ };

// 108\. Объявите функцию без имени.
function(){};

// 110\. Объявите стрелочную функцию. Где у данной функции границы тела и границы объявления параметров?

(/*params*/)=>{/*body of function*/}

// 112\. Присвойте переменной `f` функцию `foo`. Где у данной функции границы тела? Что находится внутри `f`?
const f = function foo(){/*body*/}; /*there is a function inside f*/

// 114\. Присвойте переменной `f` анонимную не стрелочную функцию.
const f = function(){};

// 116\. Присвойте переменной `f` стрелочную функцию. Что находится внутри `f`?

const f = ()=>{}; /*there is an arrow function inside f*/

// 118\. Объявите функцию `foo` со входящим параметром `x`, которая удваивает то, что ей передали на вход.

const f = function foo(x) {
	return x * 2;
}
// 120\. Объявите функцию `foo` со входящим параметром `x`, которая удваивает то, что ей передали на вход. 
// Вызовите данную функцию со входящим значением `4`. Где у данной функции параметры? А где аргументы? Обозначьте границы тела функции.
const f = function foo(x/*this is parameter*/){
	/*body start*/
	return x*2;
	/*body end */
}

foo(4/*there are arguments*/);