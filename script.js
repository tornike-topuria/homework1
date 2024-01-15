// 1
let age = 100;
if (age < 50) {
  console.log("ნაკლებია 50-ზე");
} else if (age > 20) {
  console.log("მეტია 20-ზე");
} else {
  console.log("შეცდომა");
}

// 2
let Name = "მარიამ";
if (Name == "მარიამ") {
  console.log(true);
} else {
  console.log(false);
}

// 3
switch (Name) {
  case "მარიამ":
    console.log(true);
    break;
  default:
    console.log(false);
    break;
}

// 4
let NAme = "თორნიკე";
console.log(typeof NAme);

// 5
let number = 10;
console.log(String(number));
