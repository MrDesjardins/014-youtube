type Hobby = "TV" | "MOVIE";
interface PersonAsInterfaceWithType {
  id: number;
  name: string;
  hobby: Hobby;
}

const personWithInterfaceAndType: PersonAsInterfaceWithType = {
  id: 1,
  name: "My name",
  hobby: "TV",
};
