// 6. print numbers from 100 to 0 and append to HTML
const trial = document.getElementById("test");
let str = " ";
for (let i = 100; i >= 0; i--) {
  console.log(i);
  str = str + `<li>${i}</li>`;
}
trial.innerHTML = str;
