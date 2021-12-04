// let getRandom = (min, max) => {
// 	return Math.ceil(Math.random() * (max - min) + min);
// }
// let a = getRandom(0,30)

const setError = () => {
	output.parentNode.classList.add('error');
}

const clearError = () => {
	output.parentNode.classList.remove('error');
}

let output = document.getElementById('output');
const numbers = document.getElementsByClassName('number');
const primitive = document.getElementsByClassName('primitive');
const ce = document.getElementById('ce');
const equal = document.getElementById('equal');
const per = document.getElementById('percent');

for (let i = 0; i < numbers.length; i++) {
	numbers.item(i).addEventListener('click', event => {
		clearError();
		if (output.value === '0') {
			output.value = '';
		}
		output.value += event.target.innerHTML;
	});
}
for (let k = 0; k < primitive.length; k++) {
	primitive.item(k).addEventListener('click', event => {
		clearError();
		if (output.value.substr(-1) === parseInt(output.value.substr(-1)).toString()) {
			output.value += event.target.innerHTML;
		}
	});
}

ce.addEventListener('click', event => {
	output.value = '0';
	clearError();
})
equal.addEventListener('click', event => {
	clearError();
	try {
		output.value = eval(output.value);
	} catch (e) {
		setError();
	}
})
per.addEventListener('click', event => {
	clearError();
	const parts = output.value.split(/([-+*/])/);
	const operators = ['+', '-', '*', '/'];
	if (parts.length > 2 && !isNaN(parseFloat(parts[parts.length - 1])) && !isNaN(parseFloat(parts[parts.length - 3])) && operators.includes(parts[parts.length - 2])) {
		parts[parts.length - 1] = (parseFloat(parts[parts.length - 3]) * parseFloat(parts[parts.length - 1]) / 100).toString();
		output.value = parts.join('');
	} else if (!isNaN(parseFloat(output.value)) && parseFloat(output.value).toString() === output.value) {
		output.value = parseFloat(output.value) / 100;
	}
})




