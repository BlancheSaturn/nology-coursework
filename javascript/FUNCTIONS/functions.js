// **Challenge**

// 1. Write a function to find a perimeter of a retangle.
const calculatePerimeter = (width, height) => {
  return  width + width + height + height;
}

console.log(calculatePerimeter(1,1));

// 2. Write a function to find the area of a circle. when given a radius, print the area to the console.
const calculateArea = (radius) => {
    const area = Math.PI * radius * radius;
    console.log(area)
}
calculateArea(2);

// 3. Now do the same to find the circumference of a circle

const calculateCircumference = (radius) => {
    const circumference = Math.PI * 2 * radius;
    console.log(circumference)
}
calculateCircumference(1);
