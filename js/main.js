console.log('Hello, JavaScript in separate file!');
console.warn("Some warning message");
console.error("Some error message");

// типи даних: number, string, boolean, null, undefined, object
let a = 10;
let login = "vlad_tymo"
let numbers = [1, 3, 6, -40, 120];
let user = {
    name: "Nazar",
    position: "Developer",
    salary: 3200,
    account: null
}


console.log(numbers[20]); // undefined
console.log("Salary:", user.salary);
console.log("Bonus:", user.bonus);

console.log("Array:", numbers);
console.log(`Array: ${numbers}`);

alert("Hello, JavaScript!");

let password = prompt("Enter your password:");
let age = +prompt("Enter your age:"); // 33

if (age >= 18)
    alert("Welcome!");
else
    alert("You are too young!");

let result = confirm("Do you like JavaScript?");

if (result)
    alert("Great!");
else
    alert("Too bad!");