export class Product {
  constructor(
    public id: number,
    public name: string,
    public price: number,
    public category: string,
  ) {
    this.id = id
    this.name = name
    this.price = price
    this.category = category
  }
}
