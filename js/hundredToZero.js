// 6. print numbers from 100 to 0 and append to HTML
const trial = document.getElementById("test");

for (let i = 100; i >= 0; i--) {
  console.log(i);
  strong.textContent = "strong";
  trial.append(strong);
}
