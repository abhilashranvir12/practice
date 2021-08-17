// 4. print odd numbers between 24 to 50 and append to HTML
const trial = document.getElementById("test");
let str = " ";
for (let i = 24; i <= 50; i++) {
  if (i % 2 != 0) {
    console.log(i);
    str = str + `<li>${i}</li>`;
  }
}
trial.innerHTML = str;
