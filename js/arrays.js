// -=-=-=-=-=-=-=- arrays -=-=-=-=-=-=-=-
//let array = new Array();
let array = [];

let colors = ["red", "green", "blue", "black", "brown"];
const mixed = [120, null, "hello", true, [1, 2, 3], { id: 1002, title: "Super" }, () => { }];

console.log("[3] = ", colors[3]);
colors[3] = "pink";

console.log("Colors arr length: ", colors.length); // 5

colors[colors.length - 1]; // last item (brown)

// all values between are undefined
// [4]...[19]: undefined
colors[20] = "white"; // !bad practice

// access by index: 0>
console.log("Colors: ", colors);

console.log("Is Array: ", Array.isArray(colors)); // true

// ------------ methods
colors.pop();            // remove last
colors.push("purple");   // insert last
colors.shift();          // remove first
colors.unshift("yellow");// insert first

console.log("Colors: ", colors);

let numbers = [4, 60, 1, -1, 0, -3, 99, -4, 120, 1, -4, 44, -10];

console.log("Numbers:", numbers);

console.log("Index of 1: ", numbers.indexOf(1)); // 2, if not found: -1
console.log("Last Index of 1: ", numbers.lastIndexOf(1)); // 9

if (numbers.indexOf(1) === numbers.lastIndexOf(1)) {
    console.log("1 appears only once in array!");
}

if (numbers.includes(120)) // numbers.indexOf(120) !== -1
    console.log("Array contains 120 value!");
else
    console.log("Array does not contains 120 value!");

let firstHalf = numbers.slice(0, numbers.length / 2);
console.log("First Half:", firstHalf);

numbers.splice(1, 3); // change original array
console.log("After splice:", numbers);

numbers.sort(); // lexicograph mode
console.log("Sorted Numbers:", numbers);

numbers.sort((a, b) => a - b); // change original array
console.log("Custom sort Numbers:", numbers);

numbers.fill(7, 1, 3); // [1...3) - change original array
console.log("Numbers:", numbers);

console.log("Find of 1: ", numbers.find(x => x > 100));             // 120
console.log("Find index of 1: ", numbers.findIndex(x => x > 100));  // 8

// return copy array with true values
console.log("Filtered: ", numbers.filter((x) => x < 0));

// TASK: remove all elements '5'
numbers = numbers.filter(x => x !== 5);

// return copy array with mapped values
console.log("Mapped:", numbers.map((x) => x + 2));
console.log("Mapped:", numbers.map((x) => x + "$"));

numbers.forEach(x => {
    if (x > 10) console.log(x + '!');
});

console.log("Reversed:", numbers.reverse()); // change original array

// we can use method chain: method1().method2().method3().forEach() - X
console.log(numbers.slice(3, 7).map((x) => x * x).filter(x => x > 2));

document.write(`<h1>Color: ${colors[0]}</h1>`);