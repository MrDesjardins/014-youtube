function addId(obj: any, value: number): any & { id: number } {
  return { ...obj, ...{ id: value } };
}
const h: House = { streetName: "ABC", streetNumber: 1 };
const hId = addId(h, 110);
console.log(hId);
