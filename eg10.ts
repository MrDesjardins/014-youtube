enum HobbyInEnum {
  TV = 100,
  MOVIE = 200,
}

// enum HobbyInEnum {
//   TV = "TVVVVVVV",
//   MOVIE = "MOVIE",
// }

interface PersonEnum extends BaseModel {
  name: string;
  hobby: HobbyInEnum;
}

const pers: PersonEnum = {
  id: 1,
  name: "asd",
  hobby: HobbyInEnum.MOVIE,
};
