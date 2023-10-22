```
mutation {
  createProduct(input: {
    name: "Product 1",
    price: 37.99,
    description: "Desc 1",
    soldout:false,
    stores: [{store: "Store 1"}, {store: "Store 2"}]
  }) {
    id
  }
}
```
