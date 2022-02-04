let mySet = new Set();

mySet.add("Hello");
mySet.add(2);
mySet.add(2);
mySet.add({});
mySet.add({});//obj are not converted to string. Therefore are unique.

console.log(mySet.size);
//------Constructor
let mySet2 = new Set([1,2,3,4,4,4,4]); //o/p Set: {1,2,3,4}
console.log(mySet2.size);
//-------has method-----
if(mySet2.has(2)){
    console.log("mySet2 has value 2 present");
}
//-------delete method

mySet2.delete(2);
console.log(mySet2.size);
