import { log } from "console";
import WidgetModel from "./dbconnection";

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
    return new Promise((resolve, reject) => {
      WidgetModel.findById(id).then((doc) => {
        if (doc) {
          resolve(new Product(doc._id, doc));
        } else {
          reject(new Error("Product not found"));
        }
      });
    });
  },
  createProduct: ({ input }) => {
    let id = require("crypto").randomBytes(4).toString("hex");
    productData[id] = input;
    const newWidget = new WidgetModel({
      name: input.name,
      description: input.description,
      price: input.price,
      soldout: input.soldout,
      inventory: input.inventory,
      stores: input.stores,
    });

    return new Promise((resolve, reject) => {
      newWidget
        .save()
        .then((doc) => {
          log(doc);
          resolve(new Product(doc._id, doc));
        })
        .catch((err) => {
          reject(err);
        });
    });
  },
};
