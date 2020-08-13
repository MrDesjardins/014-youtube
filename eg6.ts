type HouseWithType = {
  streetNumber: number;
  streetName: string;
  newHouse?: boolean;
};

const houseWithType: HouseWithType = {
  streetNumber: 1,
  streetName: "ABC",
  newHouse: true,
};

interface PersonAsInterface {
  id: number;
}

interface PersonAsInterface {
  name: string;
}

const personWithInterface: PersonAsInterface = {
  id: 1,
  name: "My name",
};
