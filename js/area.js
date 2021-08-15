// 8. write a function which will calculate the area of circle and rectangle

// area of circle
function areaCircle(radius) {
  let area = 3.14 * radius * radius;
  return area;
}
console.log(areaCircle(3));

// area of rectangle
function areaRectangle(length, width) {
  let area = length * width;
  return area;
}
console.log(areaRectangle(5, 5));
