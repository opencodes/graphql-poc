class Product {
  constructor(id, { name, description, price, soldout, inventory, stores }) {
    this.id = id;
    this.name = name;
    this.price = price;
    this.description = description;
    this.soldout = soldout;
    this.stores = stores;
    this.inventory = inventory;
  }
}

const productData = {};

export const resolvers = {
  getProduct: ({ id }) => {
    return new Product(id, productData[id]);
  },
  createProduct: ({ input }) => {
    let id = require("crypto").randomBytes(4).toString("hex");
    productData[id] = input;
    return new Product(id, input);
  },
};
