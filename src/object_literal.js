let cn = "company name";
let createPerson = function (firstname, lastname, age) {
    return {
        "first name": firstname,
        lastname,
        [cn]: "amazon",
        isSenior() {
            return age > 50;
        }
    };
};
let p1 = createPerson("Upinder", "Singh", 55);
console.log(p1);
console.log(p1["first name"], p1.lastname, p1[cn], p1.isSenior());
//# sourceMappingURL=object_literal.js.map