let cn = "company name";
let createPerson = function(firstname , lastname, age){
    return {
        "first name": firstname,    //spaces can be there in property names
        lastname,                   //lastname: lastname can be sumarized as this
        [cn]:"amazon",              //placeholder/variable names can be used with []
        isSenior(){                 //isSenior: function(){...} can also be written as
        return age > 50
        }
    }
};

let p1 = createPerson("Upinder", "Singh", 55);
console.log(p1);

console.log(p1["first name"], p1.lastname, p1[cn] ,p1.isSenior());