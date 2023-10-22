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
  getProductList: () => {
    return new Promise((resolve, reject) => {
      WidgetModel.find().then((doc) => {
        if (doc) {
          resolve(doc);
        } else {
          reject(new Error("Product not found"));
        }
      });
    });
  },
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
  updateProduct: ({ input }) => {
    console.log(input);
    const updates = {};
    if (input.name) {
      updates.name = input.name;
    }
    if (input.description) {
      updates.description = input.description;
    }
    if (input.price) {
      updates.price = input.price;
    }
    if (input.inventory) {
      updates.inventory = input.inventory;
    }
    if (input.soldout) {
      updates.soldout = input.soldout;
    }
    if (input.stores) {
      updates.stores = input.stores;
    }
    console.log(updates);

    return new Promise((resolve, reject) => {
      console.log(updates);
      WidgetModel.findByIdAndUpdate(input.id, updates, { new: true })
        .then((doc) => {
          if (doc) {
            console.log(doc);
            resolve(new Product(doc._id, doc));
          } else {
            reject(new Error("Product not found"));
          }
        })
        .catch((err) => reject(err));
    });
  },
  deleteProduct: ({ id }) => {
    return new Promise((resolve, reject) => {
      WidgetModel.findByIdAndDelete(id)
        .then((doc) => {
          if (doc) {
            resolve("Product deleted successfully");
          } else {
            reject(new Error("Product not found"));
          }
        })
        .catch((err) => reject(err));
    });
  },
};
