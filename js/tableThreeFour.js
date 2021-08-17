// 1. print a table of 3 and 4 and append to HTML
const trial = document.getElementById("test");
let str = " ";
for (let i = 1; i <= 10; i++) {
  // multiply i with 3
  const result = i * 3;

  // display the result
  console.log(`${3} * ${i} = ${result}`);
  str = str + `<li>${3} * ${i} = ${result}</li>`;
}

for (let i = 1; i <= 10; i++) {
  // multiply i with 4
  const result = i * 4;

  // display the result
  console.log(`${4}* ${i} = ${result}`);
  str = str + `<li>${4} * ${i} = ${result}</li>`;
}
trial.innerHTML = str;
