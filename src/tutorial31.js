//problem with (strong) Set is that it persists the object 
//reference even when all the references to the object have been removed.
//this means GC can not reallocate that memory.
let setFun = function () {
    let strongSet = new Set();
    let a = { 'value': '123' };
    strongSet.add(a);
    console.log(strongSet.size); // op: 1
    a = null;
    console.log(strongSet.size); // Still op: 1
    //you can still retrieve the value using 
    a = [...strongSet][0];
    console.log(a);
    //-----------Weak Set
    //can only store object and not primitive, 
    //object is removed from the set when all references to it have been removed
    let weakSet = new WeakSet();
    let b = {};
    weakSet.add(b);
    console.log(weakSet.has(b));
    b = null;
};
setFun();
// The main difference is that references to objects in Set are strong while references to objects in WeakSet are weak. This means that an object in WeakSet can be garbage collected if there is no other reference to it.
// Other differences (or rather side-effects) are:
// Sets can store any value. WeakSets are collections of objects only.
// WeakSet does not have size property.
// WeakSet does not have clear, keys, values, entries, forEach methods.
// WeakSet is not iterable
//# sourceMappingURL=tutorial31.js.map