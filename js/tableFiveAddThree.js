// 3. print a table of 5. If the value is divisable by 3 then add 3 in the result and append to HTML
const trial = document.getElementById("test");
let str = " ";
for (let i = 1; i <= 10; i++) {
  // multiply i with 5
  const result = i * 5;
  if (i % 3 === 0) {
    // add 3 to the result
    console.log(`${5}* ${i} = ${result + 3}`);
    str = str + `<li>${5} * ${i} = ${result + 3}</li>`;
  } else {
    // display the result
    console.log(`${5} * ${i} = ${result}`);
    str = str + `<li>${5} * ${i} = ${result}</li>`;
  }
}

trial.innerHTML = str;
