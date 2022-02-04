let myMap = new Map([
    ["fname", "Upinder"],
    ["lname", "Singh"]
]);
for (let k of myMap.keys()) {
    console.log(k);
}
for (const v of myMap.values()) {
    console.log(v);
}
for (const [k, v] of myMap.entries()) {
    console.log(`${k} -> ${v}`);
}
//# sourceMappingURL=tutorial32.js.map