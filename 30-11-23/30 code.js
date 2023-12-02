function convertTemperature() {
    // Get input values
    const temperatureInput = document.getElementById("temperature").value;
    const unitInput = document.getElementById("unit").value;

    // Convert temperature
    let result;
    if (unitInput === "celsius") {
      result = (temperatureInput * 9/5) + 32;
    } else {
      result = (temperatureInput - 32) * 5/9;
    }

    // Display the result
    document.getElementById("result").innerHTML = `Result: ${result.toFixed(2)}° ${unitInput === "celsius" ? "Fahrenheit" : "Celsius"}`;
  }

  console.log("loop through an array");
  const fruits = ["Apple", "Banana", "Orange", "Grapes", "Mango"];

console.log(fruits[0]);
console.log(fruits[1]);
console.log(fruits[2])
console.log(fruits[3])
console.log(fruits[4])
fruits[6]="pineapple"
fruits[3]="kkkkkkkkkk"



console.log("for");
    // Loop through the array using a for loop
    for (let i = 0; i < fruits.length; i++) {
      console.log(fruits[i]);
    }

    console.log("for..each");
    // Loop through the array using forEach
    fruits.forEach(function(fruit,index,array) {
        console.log(index,fruit,array);
      });

      console.log("for..of");
      // Loop through the array using for...of loop
    for (const fruit of fruits) {
        console.log(fruit);
      }
      console.log("map");
let num=[4,5,7,8,99,5,33]
      let fru1=num.map(myfru)
      function myfru(value,index,array){
        return value*2

      }
      console.log(fru1);

      let fru=fruits.map(myfruit)
      function myfruit(value,index,array){
        return value,index

      }
      console.log(fru);

      const myArr = [1, 2, 3, 4, 5,6];
      const newArr = myArr.flatMap((x) => x * 2);
      console.log(newArr);


console.log("while")
let i=0
while(i<fruits.length)
{
  console.log(fruits[i]);
  i++
}

console.log("reduce");
let sum = num.reduce(function(acc, element) {
  if (typeof element === 'number') {
  return acc + element;
  } else {
  return acc;
  }
 }, 0);
 
 console.log(sum); // Output: 4 (1 + 3)
 













