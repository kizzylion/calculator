
// GET MY DISPLAY AND BUTTONS AND CONTAINER

	// FIRST GIVE THE CONTAINER THAT HOLDS ALL THE BUTTONS A GRID DISPLAY
const container = document.querySelector(".container");
container.style.display = "grid";

	//GET THE SCREEN ELEMENT
let screen = document.querySelector("#screen");

	// GET THE NUMBER BUTTONS
let numbers =document.querySelectorAll(".num");

	//GET THE MINUS, PERCENTAGE, CLEAR, EQUAL AND OPERATION BUTTONS.
let minus = document.querySelector("#minus");
let percentage = document.querySelector("#percentage");
let decimal = document.querySelector("#decimal")
let clear = document.querySelector("#clear")
let operatorsBtn = document.querySelectorAll(".operator");
let equalBtn = document.querySelector("#equal");

// initialization of variables
let figure = []; //all the number that click on will be pushed into the figure array
let operand1 = null;  //first operand
let operand2 = false; // waiting for second operand will be false 
let operator = null; 
let screenValue = 0;


// when the number buttons are clicked,

[...numbers].forEach((number)=> number.addEventListener("click",(number)=>{
	//when current value is 0 displaying on the screen, take in figures into the array, set the joint array as currentvalue
	if(screenValue==="0" || operand2===true){
		figure.push( parseFloat(number.target.innerText));
		screenValue = parseFloat(figure.join("")) ;
		screen.innerText = screenValue;
		operand2 = false;
		screen.innerText = screenValue;
	}else{
		//set display by pushing inputs into the screen.
		figure.push( parseFloat(number.target.innerText));
		screenValue = parseFloat(figure.join("")) ;
		screen.innerText = screenValue;
		
	}
	

}));


//MINUS BUTTON
// onclick check if "-" is contained in the screen; remove minus sign
// else  add minus sign
minus.addEventListener("click",(e)=>{
	if (figure.includes("-")) {
		figure.splice(figure.indexOf("-"), 1);
		screenValue = parseFloat(figure.join("")) ;
		screen.innerText = screenValue;
	} else {
		figure.unshift("-");
		figure.join("");
		screenValue = parseFloat(figure.join("")) ;
		screen.innerText = screenValue;
	}

	           
	
})

//PERCENTAGE BUTTON
//
percentage.addEventListener("click",findPercent)

function findPercent(e){
	//replace the current screen after dividing by 100
	let percent = parseFloat(figure.join(""))/100;
	screenValue = parseFloat(percent) ;
	screen.innerText = screenValue;
}


//DECIMAL BUTTON
//onclick check if figure is contained in current display, don't add decimal if its contained else add decimal 
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
//onclick, return all variables to default.
clear.addEventListener("click",(e)=>{
	
	screenValue = "0";
	figure = [];
	operand1 = null;
	operand2 = false;
	return screen.innerText = "0";

})



// stored operator function into the operator object
const operators = {
	sum : function(){
		let result = 0;
		result = operand1 + parseFloat(screen.innerText);
		return result
	},
	subtract : function(){
		let result = 0;
		result = operand1 - parseFloat(screen.innerText);
		return result
	},
	multiply : function(){
		let result = 0;
		result = operand1 * parseFloat(screen.innerText);
		return result
	},
	divide : function(){
		let result = 0;
		result = operand1 / parseFloat(screen.innerText);
		return result
	}
};


//OPERATOR BUTTONS
// once operator is clicked, save the current value on display as operand1, empty the figure array
//save the operator clicked, activate activate operand2 and set current value as 0
[...operatorsBtn].forEach(function(btn){
	btn.addEventListener("click",(btn)=>{
		operand1 = parseFloat(screenValue)
		figure = [];
		operator = btn.target.id
		operand2 = true;
		screenValue = "0";


	})
	
})





//EQUAL BUTTON
//if operand and operators are not empty, call the function of the operation clicked, display result. and empty the figure array.
equalBtn.addEventListener("click", operate)

function operate(){

	// operators[operator];
	// console.log(operator)

	if(operand1 === null || operator === null){
		return
	}
	let result = operators[operator]();
	screenValue=result.toString();
	screen.innerText= screenValue;
	figure = [];
};	

