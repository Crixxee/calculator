// This function clears all the values(so that one can perform another evaluation)

function clearScreen() {
document.getElementById("box").value = "";}

// This function displays the values

function display(value) {	document.getElementById("box").value += value;
	}	

// This function evaluates the expression and returns result

function calculate() {
var p = document.getElementById("box").value;
var q = eval(p);
document.getElementById("box").value = q;
}
