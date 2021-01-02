export class Attempt {
  constructor(
    public isFull: boolean,
    private uriFullLife: string = "assets/lifes/full-life.png",
    private uriEmptyLife: string = "assets/lifes/empty-life.png"
  ) { }

  get url() {
    if (this.isFull) {
      return this.uriFullLife;
    }
    return this.uriEmptyLife;
  }
}
