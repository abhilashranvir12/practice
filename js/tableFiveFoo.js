// 2. print a table of 5. If the value is divisable by 3 then print foo and append to HTML

for (let i = 1; i <= 10; i++) {
  // multiply i with 5
  const result = i * 5;
  if (i % 3 === 0) {
    // if divisble by 3 print foo
    console.log(`${5}* ${i} = foo`);
  } else {
    // display the result
    console.log(`${5} * ${i} = ${result}`);
  }
}
