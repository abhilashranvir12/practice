// 3. print a table of 5. If the value is divisable by 3 then add 3 in the result and append to HTML

for (let i = 1; i <= 10; i++) {
  // multiply i with 5
  const result = i * 5;
  if (i % 3 === 0) {
    // add 3 to the result
    console.log(`${5}* ${i} = ${result + 3}`);
  } else {
    // display the result
    console.log(`${5} * ${i} = ${result}`);
  }
}
