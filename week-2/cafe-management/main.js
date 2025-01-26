class Product {
  constructor(name, price, stock) {
    this.name = name;
    this.price = price;
    this.stock = stock;
  }
}

class CustomerProducts {
  constructor(customer_id, product, count) {
    this.customer_id = customer_id;
    this.product = product;
    this.count = count;
  }
}

class Cafe {
  constructor(products, balance) {
    this.products = products;
    this.balance = balance;
    this.customer_products = []; // history (contains many buyRecords)
  }

  buyProduct(customer_id, product, count) {
    let found = false;

    this.products.forEach(p => {
      if (p.name == product.name) {
        found = true;
        product = p;
      }
    });

    if (found == false) return false; // run this only for alien products

    if (product.stock < count) return false; // out of stock

    let buyRecord = new CustomerProducts(customer_id, product, count);
    product.stock -= count; // update stock
    this.balance += product.price * count; // update balance
    this.customer_products.push(buyRecord); // update history

    return true; // ok
  }

  returnProduct(customer_id, product, count) {
    let buyRecord = null; //  we need to search it

    // doing the search
    this.customer_products.forEach(record => {
      if (record.customer_id == customer_id && record.product.name == product.name) {
        buyRecord = record;
        product = record.product;
      }
    });

    // record not found
    if (buyRecord == null) return false;

    // returning more than u purchased
    if (buyRecord.count < count) return false;

    product.stock += count; // update stock
    this.balance -= product.price * count; // update balance
    buyRecord.count -= count;

    // when buy count is zero, now delete the record
    if (buyRecord.count == 0) {
      this.customer_products = this.customer_products.filter(record => {
        if (record == buyRecord) return false;
        return true;
      });
    }

    return true; // ok
  }

  getCurrentBalance() {
    return this.balance;
  }
}

// JUDGE CODE

let biscuit = new Product('Biscuit', 10, 50);
let sandwich = new Product('Sandwich', 70, 50);
let juice = new Product('Juice', 150, 50);

let myProducts = [biscuit, sandwich];
let myCafe = new Cafe(myProducts, 2000);

// console.log(myCafe.buyProduct(1, biscuit, 30));

let myBiscuit = new Product('Biscuit', 10, 50);
console.log(myCafe.buyProduct(1, myBiscuit, 30));
