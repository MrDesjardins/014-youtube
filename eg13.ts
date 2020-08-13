interface BaseModelWithDate {
  id: number;
  dateCreated: Date;
}

interface Person {
  name: string;
}

function addIdGeneric2<Tobj>(
  obj: Tobj,
  value: number = 1 // default
): Tobj & BaseModelWithDate {
  return { ...obj, ...{ id: value, dateCreated: new Date() } };
}

const pwithdate: Person = { name: "Patrick" };
const pwithdateandbase = addIdGeneric2(pwithdate, 110);
console.log(pwithdateandbase.id);
console.log(pwithdateandbase.dateCreated);
console.log(pwithdateandbase.name);
const pwithdateandbase2 = addIdGeneric2(pwithdate);
