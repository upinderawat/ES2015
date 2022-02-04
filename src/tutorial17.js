let employee = ["Chandler", "Bing", "Male"];
let [fname, lname, gender] = employee; // same as python list destructuring 
console.log(fname); //simple destructuring
console.log(lname);
console.log(gender);
console.log("***********************");
let [var1, var2] = employee;
console.log(var1); //if a variable is missed, the remaining values are trashed
console.log(var2);
console.log("***********************");
let [var3, ...var4] = employee;
console.log(var3); //remaining values are collected using REST operator
console.log(var4);
console.log("***********************");
let [, , gender2] = employee; //one way to skip initial values
console.log(gender2);
console.log("***********************");
let [var5, var6, var7, var8 = "any default value"] = employee; //providing default values
console.log(var8);
//# sourceMappingURL=tutorial17.js.map