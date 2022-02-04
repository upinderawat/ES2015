//use of generators in Object iterator
let generatorExample = function(){
    let person = {
        "fname": "Upinder",
        "lname": "Singh"
    };
    person[Symbol.iterator] = function*(){
        let properties = Object.keys(person);
        for(const p of properties){
            yield this[p] ;//yield p for keys
        }
    };
    for(const p of person){
        console.log(p);
    }    
}
generatorExample();