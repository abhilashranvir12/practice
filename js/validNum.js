// 7. Write a function which will take a valid number and print the table of it. Append it to HTML
const trial = document.getElementById("test");
let str = " ";
const num = parseInt(prompt("Enter an integer: "));
function(checkNum){
    if(Number.isInteger(num)) //typeOf (num) != number
    alert("please enter a number");
}


for (let i = 1; i <= 10; i++) {
  // multiply by number entered
  const result = i * num;
  console.log(`${num} * ${i} = ${result}`);
  str = str + `<li>${num} * ${i} = ${result}</li>`;
}

trial.innerHTML = str;
