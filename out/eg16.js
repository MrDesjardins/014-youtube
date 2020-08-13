"use strict";
class HouseAsClass {
    constructor(id, name) {
        this.id = id;
        this.name = name;
    }
    static DingDong() {
        console.log("Ding Dong!");
    }
}
const j = new HouseAsClass(1, "test");
