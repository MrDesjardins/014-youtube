"use strict";
var HobbyInEnum;
(function (HobbyInEnum) {
    HobbyInEnum[HobbyInEnum["TV"] = 100] = "TV";
    HobbyInEnum[HobbyInEnum["MOVIE"] = 200] = "MOVIE";
})(HobbyInEnum || (HobbyInEnum = {}));
const pers = {
    id: 1,
    name: "asd",
    hobby: HobbyInEnum.MOVIE,
};
