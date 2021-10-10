function search_fruit() {
  let input = document.getElementById("searchbar").value;
  input = input.toLowerCase();
  let fruitList = document.getElementsByClassName("fruits");

  for (i = 0; i < fruitList.length; i++) {
    if (!fruitList[i].innerHTML.toLowerCase().includes(input)) {
      fruitList[i].style.display = "none";
    } else {
      fruitList[i].style.display = "list-item";
    }
  }
}
