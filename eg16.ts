class HouseAsClass {
  private id: number;
  public name: string;
  public constructor(id: number, name: string) {
    this.id = id;
    this.name = name;
  }
  public static DingDong(): void {
    console.log("Ding Dong!");
  }
}
const j = new HouseAsClass(1, "test");
