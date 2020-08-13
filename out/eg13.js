"use strict";
function addIdGeneric2(obj, value = 1 // default
) {
    return Object.assign({}, obj, { id: value, dateCreated: new Date() });
}
const pwithdate = { name: "Patrick" };
const pwithdateandbase = addIdGeneric2(pwithdate, 110);
console.log(pwithdateandbase.id);
console.log(pwithdateandbase.dateCreated);
console.log(pwithdateandbase.name);
const pwithdateandbase2 = addIdGeneric2(pwithdate);
