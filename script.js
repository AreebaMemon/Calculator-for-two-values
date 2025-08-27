let num1 = document.querySelector("#num1");
let num2 = document.querySelector("#num2");
let result = document.querySelector("#result");
let buttons = document.querySelectorAll(".btn");

for (let i = 0; i < buttons.length; i++) {
  buttons[i].addEventListener("click", () => {
    if ((num1.value) == "" && num2.value == "") {
      alert("Both numbers are required");
    } else if (num1.value == "" || num2.value == "") {
      alert("Please enter the missing number");
    } else {
      console.log(buttons[i].innerHTML);
      if (buttons[i].innerHTML === "Addition") {
        result.innerHTML = `${num1.value} + ${num2.value} = ${
          Number(num1.value) + Number(num2.value)
        }`;
      } else if (buttons[i].innerHTML === "Subtraction") {
        result.innerHTML = `${num1.value} - ${num2.value} = ${
          Number(num1.value) - Number(num2.value)
        }`;
      } else if (buttons[i].innerHTML === "Multiplication") {
        result.innerHTML = `${num1.value} * ${num2.value} = ${
          Number(num1.value) * Number(num2.value)
        }`;
      } else if (buttons[i].innerHTML === "Division") {
        if (Number(num2.value) === 0) {
          alert("Division by zero is not allowed");
          return;
        } else {
          result.innerHTML = `${num1.value} / ${num2.value} = ${
            Number(num1.value) / Number(num2.value)
          }`;
        }
      } else if (buttons[i].innerHTML === "Modulus") {
        if (Number(num2.value) === 0) {
          alert("Modulo by zero is not allowed");
        } else {
          result.innerHTML = `${num1.value} % ${num2.value} = ${
            Number(num1.value) % Number(num2.value)
          }`;
        }
      } else {
        if (Number(num1.value) === 0 && Number(num2.value) === 0) {
          alert("0 to the power of 0 is undefined");
        } else if (Number(num1.value) === 0 && Number(num2.value) < 0) {
          alert("0 cannot be raised to a negative power");
        } else if (Number(num1.value) < 0 && !Number.isInteger(Number(num2.value))) {
          alert("Negative base with non-integer exponent is not allowed");
        } else {
          result.innerHTML = `${num1.value} ** ${num2.value} = ${
            Number(num1.value) ** Number(num2.value)
          }`;
        }
      }
    }
  });
}
