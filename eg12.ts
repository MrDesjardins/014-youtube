function addIdGeneric<Tobj>(obj: Tobj, value: number): Tobj & { id: number } {
  return { ...obj, ...{ id: value } };
}
const houseNoId: House = { streetName: "ABC", streetNumber: 1 };
const houseWith = addIdGeneric(h, 110);
console.log(houseWith.id);


