## Query

```
query {
  getProductList{
    id
    name
    price
    description
    inventory
    stores{
      store
    }
    soldout
  }
}

```

```
{
  "data": {
    "getProduct": {
      "id": "6534d0326e2f9d147a5a6eca",
      "name": "Product 1",
      "price": 37.99,
      "description": "Desc 1",
      "inventory": 10,
      "stores": [
        {
          "store": "Store 1"
        },
        {
          "store": "Store 2"
        }
      ],
      "soldout": "ONSALE"
    }
  }
}
```

## Mutation - Create

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

## Mutation - Update

```
mutation{
  updateProduct(input:{
     id: "6534d0326e2f9d147a5a6eca",
      name: "Product 1-2",
      price: 38.99,
      description: "Desc 1",
      inventory: 9,
      stores: [
        {
          store: "Store 2"
        },
        {
          store: "Store 3"
        }
      ],
      soldout: ONSALE

  }){
    id
    name
    stores {
      store
    }
    soldout
    description
    price
    inventory
  }
}
```

## Fragment Query

```
query {
  firstProduct: getProduct(id:"6534d063a3f4737f269a6f60"){
   ...wifgetFragment
  }
  secondProduct: getProduct(id:"6534d083d1f3037b1b4d552c"){
   ...wifgetFragment
  }
}

fragment wifgetFragment on Product{
  name
  id
}
```

```
query ExampleQuery {
  getProductList {
    id
    name
  }
  getProduct(id:"6534d063a3f4737f269a6f60") {
    id
    name
    description
    inventory
    price
    stores {
      store
    }
    soldout
  }
}

```
