/*
Iterable = {
    [Symbol.Iterator](): Iterator  // has property "Symbol.Iterator" which returns an Iterator
}
Iterator={
    next(): IResultObj //knows access elements in a collection
}
IResultObj={
    value: any data type,
    done: bool data type indicates iteration is complete
}*/
let IteratorExample = function () {
    let person = {
        "fname": "Upinder",
        "lname": "Singh"
    };
    person[Symbol.iterator] = function () {
        let properties = Object.keys(person);
        let isDone = false;
        let count = 0;
        let next = function () {
            if (count >= properties.length) {
                isDone = true;
            }
            return {
                value: properties[count++],
                done: isDone
            };
        };
        return { next };
    };
    for (const p of person) {
        console.log(person[p]);
    }
};
IteratorExample();
//# sourceMappingURL=tutorial38.js.map