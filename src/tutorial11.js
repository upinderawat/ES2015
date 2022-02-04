let displayColors = function (msg, ...colors) {
    console.log(msg);
    for (let c in colors) {
        console.log(colors[c]);
    }
};
displayColors("one color", "Red");
displayColors("Two colors", "Red", "Green");
displayColors("Three colors", "Red", "Green", "Blue");
let arrayOfColors = ["Red", "Green", "Blue", "White", "Black"];
console.log("use of Spread Operator");
displayColors("froma array", ...arrayOfColors);
//# sourceMappingURL=tutorial11.js.map