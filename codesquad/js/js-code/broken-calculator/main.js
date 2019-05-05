let memory;
let val;
function displayVal() {
  document.getElementById("display").value = val;
}
function memRemember(val) {
	// display value from memory
	val = memory;
	document.getElementById("display").value = val;
}
function replace(val) {
	// replace value in the display window with 'val' argument
	document.getElementById("display").value = val;
}
function append(val) {
	// append new value onto existing display
	document.getElementById("display").value += val;
}
function memPlus(val) {
	document.getElementById("display").value = parseFloat(memory) + parseFloat(val);
}
function memSave(val) {
	memory = document.getElementById("display").value;
}
function equals() {
	try{ 		// test the statement to catch errors (www.w3schools.com/js/js_errors.asp)
		replace(
			eval(document.getElementById("display").value)  // solve the math expression
		)
	}
	catch(err) {
		replace('Error') // display custom text if error occurs
	}
}
