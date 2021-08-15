// 10. Writw a function that will take the value from the user and print the table of it
const number = parseInt(prompt("Enter an integer: "));
for (let i = 1; i <= 10; i++) {
  // multiply by number entered
  const result = i * number;
  console.log(`${number} * ${i} = ${result}`);
}
