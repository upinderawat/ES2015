var cn = "company name";
var createPerson = function (firstname, lastname, age) {
    var _a;
    return _a = {
            "first name": firstname,
            lastname: lastname
        },
        _a[cn] = "amazon",
        _a.isSenior = function () {
            return age > 50;
        },
        _a;
};
var p1 = createPerson("Upinder", "Singh", 55);
console.log(p1);
// console.log(p1["first name"], p1.lastname, p1. ,p1.isSenior());
//# sourceMappingURL=object_literal.js.map