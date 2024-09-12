let name = prompt("what is your name")
console.log(name);

// =======================================================

let mode = prompt("select mode from = dark, green, blue ,  ..custom = White");
let color;
if (mode === "dark") {
    console.log(color = "black");
}
else if (mode === "green") {
    console.log(color = "green");
}
else if (mode === "blue") {
    console.log(color = "blue");
}
else {
    console.log(color = "white");
}

// =============================================================

let age = prompt("what is your age"); {
    age >= 18 ? "you can vote" : "you CANNOT vote";

    let result = age >= 18 ? "you can vote" : "you CANNOT vote  , you are under age";
    console.log(result);
}

// ===================================================================
let year;
let currentYear = new Date().getFullYear()
switch (currentYear) {
    case 2020:
        year = 2020;
        break;
    case 2021:
        year = 2021;
        break;
    case 2022:
        year = 2022;
        break;
    case 2023:
        year = 2023;
        break;
    case 2024:
        year = 2024;
        break;
    case 2025:
        year = 2025;
        break;
}
document.getElementById("demo").innerHTML = " current year is " + year;