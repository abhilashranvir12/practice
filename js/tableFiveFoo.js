// 2. print a table of 5. If the value is divisable by 3 then print foo and append to HTML
const trial = document.getElementById("test");
let str = " ";
for (let i = 1; i <= 10; i++) {
  // multiply i with 5
  const result = i * 5;
  if (i % 3 === 0) {
    // if divisble by 3 print foo
    console.log(`${5}* ${i} = foo`);
    str = str + `<li>${5}* ${i} = foo</li>`;
  } else {
    // display the result
    console.log(`${5} * ${i} = ${result}`);
    str = str + `<li>${5}* ${i} = ${result} </li>`;
  }
}
trial.innerHTML = str;
