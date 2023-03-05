//your JS code here. If required.
const num1 = document.getElementById('num1');
		const num2 = document.getElementById('num2');
		const operator = document.getElementById('operator');
		const calculateBtn = document.getElementById('calculate');
		const resultDiv = document.getElementById('result');

		calculateBtn.addEventListener('click', () => {
			const n1 = Number(num1.value);
			const n2 = Number(num2.value);
			const op = operator.value;

			let result;

			switch (op) {
				case '+':
					result = n1 + n2;
					break;
				case '-':
					result = n1 - n2;
					break;
				case '*':
					result = n1 * n2;
					break;
				case '/':
					result = n1 / n2;
					break;
				default:
					result = 'Invalid Operator';
			}

			resultDiv.innerText = `Result: ${result}`;
		});

		const textDivs = document.querySelectorAll('.division');
		const changeTextBtn = document.getElementById('change_text');

		changeTextBtn.addEventListener('click', () => {
			textDivs[0].innerText = 'Bye';
			textDivs[1].innerText = 'Good Bye';
			textDivs[3].innerText = 'Your';
		});
