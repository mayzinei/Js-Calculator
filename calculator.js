const display = document.querySelector(".text-input");
const buttons = document.querySelectorAll("input");
const specialChars = ["%", "*", "/", "-", "+", "+"];

let output = "";
let equalsPressed = false;

const calculate = (btnValue) => {
	if (btnValue === "=") {
		if (output !== "") {
			output = eval(output.replace("%", "/100"));
			equalsPressed = true;
		}
	} else if (btnValue === "AC") {
		output = "";
		equalsPressed = false;
	} else if (btnValue === "DEL") {
		output = output.toString().slice(0, -1);
	} else {
		if (equalsPressed) {
			output = btnValue;
			equalsPressed = false;
		} else {
			if (output === "" && specialChars.includes(btnValue)) return;
			output += btnValue;
		}
	}
	display.value = output;
};

buttons.forEach((btn) => {
	btn.addEventListener("click", (e) => calculate(e.target.value));
});
