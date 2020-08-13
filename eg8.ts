interface BaseModel {
  id: number;
}

type HobbyAsType = "TV" | "MOVIE";
interface personWithoutId extends BaseModel {
  name: string;
  hobby: HobbyAsType;
}

const personWithIdFromBaseModel: personWithoutId = {
  id: 1,
  name: "My name",
  hobby: "TV",
};
