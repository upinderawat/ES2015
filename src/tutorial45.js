var EyeColor;
(function (EyeColor) {
    EyeColor[EyeColor["Black"] = 2] = "Black";
    EyeColor[EyeColor["Brown"] = 0] = "Brown";
    EyeColor[EyeColor["Blue"] = 55] = "Blue";
})(EyeColor || (EyeColor = {}));
;
let myEyeColor = EyeColor.Black;
console.log(myEyeColor);
console.log(EyeColor[myEyeColor]);
let myTuple = ["heelo", 123];
console.log(myTuple);
console.log(typeof myTuple);
//# sourceMappingURL=tutorial45.js.map