var employee = ["Chandler", "Bing", "Male"];
var fname = employee[0], lname = employee[1], gender = employee[2]; // same as python list destructuring 
console.log(fname); //simple destructuring
console.log(lname);
console.log(gender);
console.log("***********************");
var var1 = employee[0], var2 = employee[1];
console.log(var1); //if a variable is missed, the remaining values are trashed
console.log(var2);
console.log("***********************");
var var3 = employee[0], var4 = employee.slice(1);
console.log(var3); //remaining values are collected using REST operator
console.log(var4);
console.log("***********************");
var gender2 = employee[2]; //one way to skip initial values
console.log(gender2);
var var5 = employee[0], var6 = employee[1], var7 = employee[2], _a = employee[3], var8 = _a === void 0 ? "any default value" : _a; //providing default values
console.log(var8);
//# sourceMappingURL=tutorial17.js.map