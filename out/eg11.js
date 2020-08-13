"use strict";
function addId(obj, value) {
    return Object.assign({}, obj, { id: value });
}
const h = { streetName: "ABC", streetNumber: 1 };
const hId = addId(h, 110);
console.log(hId);
