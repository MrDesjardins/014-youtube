"use strict";
function addIdGeneric(obj, value) {
    return Object.assign({}, obj, { id: value });
}
const houseNoId = { streetName: "ABC", streetNumber: 1 };
const houseWith = addIdGeneric(h, 110);
console.log(houseWith.id);
