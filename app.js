const container = document.querySelector(".container");
container.style.display = "grid";
let numbers =document.querySelectorAll(".num");
let screen = document.querySelector("#screen");
let minus = document.querySelector("#minus");
let percentage = document.querySelector("#percentage");
let decimal = document.querySelector("#decimal")
let clear = document.querySelector("#clear")
let operatorsBtn = document.querySelectorAll(".operator");
let figure = [];
let inputs = [];
let operand;



// NUMBER BUTTON
// add all the numbers clicked to the screen
[...numbers].forEach((number)=> number.addEventListener("click",(number)=>{
	figure.push( number.target.innerText);
	
	return screen.innerText = figure.join("");
}));


//MINUS BUTTON
// when minus is clicked, check if "-" is contained in the screen remove minus sign
// else  add minus sign
minus.addEventListener("click",(e)=>{
	if (figure.includes("-")) {
		figure.splice(figure.indexOf("-"), 1);
		screen.innerText = figure.join("");
	} else {
		figure.unshift("-");
		figure.join("");
		return screen.innerText = figure.join("");
	}

	           
	return figure.join("")
	// return screen.innerText = figure.join("");
})

//PERCENTAGE BUTTON
percentage.addEventListener("click",findPercent)

function findPercent(e){
	// figure.join("");
	let dig= figure.join("");
	let percent = +dig/100;
	figure = [percent]
	return screen.innerText = figure.join("");
}

//DIGIT BUTTON

decimal.addEventListener("click",(e)=>{
	if (figure.includes(".")) {
		return
	} else {
		figure.push(".");
		figure.join("");
		return screen.innerText = figure.join("");
	}

	           
	
})


//CLEAR BUTTON

clear.addEventListener("click",(e)=>{
	
	figure = [];
	return screen.innerText = figure.join("");

})




const operators = {
	sum : function(a,b){return a + b},
	subtract : function(a,b){return a - b},
	multiply : function(a,b){return a * b},
	divide : function(a,b){return a / b}
};


function operate(operand1, operators, operand2){
	operand1 = figure.join("");
	operators(operand1, operand2);
};	





[...operatorsBtn].forEach((operator)=>operator.addEventListener("click",(operator)=>{
	operand = operator.target.id
	console.log(operand)
}))

