var __spreadArray = (this && this.__spreadArray) || function (to, from) {
    for (var i = 0, il = from.length, j = to.length; i < il; i++, j++)
        to[j] = from[i];
    return to;
};
var displayColors = function (msg) {
    var colors = [];
    for (var _i = 1; _i < arguments.length; _i++) {
        colors[_i - 1] = arguments[_i];
    }
    console.log(msg);
    for (var c in colors) {
        console.log(colors[c]);
    }
};
displayColors("one color", "Red");
displayColors("Two colors", "Red", "Green");
displayColors("Three colors", "Red", "Green", "Blue");
var arrayOfColors = ["Red", "Green", "Blue", "White", "Black"];
console.log("use of Spread Operator");
displayColors.apply(void 0, __spreadArray(["froma array"], arrayOfColors));
//# sourceMappingURL=tutorial11.js.map