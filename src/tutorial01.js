var displayColorsArray = function (colors) {
    for (var c in colors) {
        console.log(colors[c] + " ");
    }
};
var displayColorsEllipses = function () {
    var colors = [];
    for (var _i = 0; _i < arguments.length; _i++) {
        colors[_i] = arguments[_i];
    }
    for (var c in colors) {
        console.log(c + " ");
    }
};
var colors = ["red", "blue", "green"];
displayColorsArray(colors);
displayColorsEllipses.apply(void 0, colors);
//# sourceMappingURL=tutorial01.js.map