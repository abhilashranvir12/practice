// 5. print odd and even numbers between 40 to 60 and append to HTML
const trial = document.getElementById("test");
let str = " ";

for (let i = 40; i <= 60; i++) {
  if (i % 2 == 0) {
    // print even number
    console.log(i);
    str = str + `<li>${i}</li>`;
  } else i % 2 != 0;
  {
    // print odd number
    console.log(i);
    str = str + `<li>${i}</li>`;
  }
}
trial.innerHTML = str;
