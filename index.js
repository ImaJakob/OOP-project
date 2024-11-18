// // class for product.
// class Product{
//     constructor(id, name, price){
//         this.id = id;
//         this.name = name;
//         this.price = price;
//     }
// }

// // class for shoppingCartItem
// class ShoppingCartItem{
//     constructor(product, quantity){
//         this.product = product;
//         this.quantity = quantity;
//     }

//  // method to calculate total price.
//     caculateTotalPrice(){
//         return this.product.price * this.quantity;
//     }

// }

// // class for shoppingCart, and methods.
// class ShoppingCart{
//     constructor(){
//         this.shoppingCartItem = [];
//     }

//     getTotalItems(){
//         return this.shoppingCartItem.reduce((total,ShoppingCartItem) => total + ShoppingCartItem.quantity, 0);

//     }

//     getTotalPrice() {
//         return this.shoppingCartItem.reduce((total, item) => total + item.getTotalPrice(), 0);
//     }


//     addItems(product, quantity){
//         let shoppingCartItemIndex = this.shoppingCartItem.findIndex(item => item.Product.id === product.id);
//         if(shoppingCartItemIndex !== -1) {
//             this.shoppingCartItem[shoppingCartItemIndex].quantity += quantity;
//         }else {
//             this.ShoppingCartItem.push(new shoppingCartItem(product, quantity));
//         }
//     }


//     removeItems(removedProduct){
//         this.shoppingCartItem = this.shoppingCartItem.filter(item => item.product.id !== removedProduct)
//     }

//     displayCartItems(){
//         if(this.shoppingCartItem.length === 0){
//             console.log("There is nothing in the cart")
//         }else{
//             console.log("Cart items:");
//             this.shoppingCartItem.forEach(item => {
//             console.log(`Product: ${item.product.name}, Quantity: ${item.quantity}, Total: $${item.getTotalPrice().toFixed(2)}`);
//             });
//         }
//     }

// }

// const product1 = new Product(1, "basket", 0.5);
// const product2 = new Product(2, "socks", 0.3);
// const product3 = new Product(3, "bag", 0.7);

// Product class to store properties for each product
class Product {
    constructor(id, name, price) {
      this.id = id;
      this.name = name;
      this.price = price;
    }
  }
  
  // ShoppingCartItem class to store properties for each item in the cart
  class ShoppingCartItem {
    constructor(product, quantity) {
      this.product = product;
      this.quantity = quantity;
    }
  
    // Method to calculate total price for the item
    getTotalPrice() {
      return this.product.price * this.quantity;
    }
  }
  
  // ShoppingCart class to manage the array of items
  class ShoppingCart {
    constructor() {
      this.items = [];
    }
  
    // Method to add an item to the cart
    addItem(product, quantity) {
      // Check if the product already exists in the cart
      const existingItem = this.items.find(item => item.product.id === product.id);
      if (existingItem) {
        existingItem.quantity += quantity;
      } else {
        this.items.push(new ShoppingCartItem(product, quantity));
      }
    }
  
    // Method to remove an item from the cart by product ID
    removeItem(productId) {
      this.items = this.items.filter(item => item.product.id !== productId);
    }
  
    // Method to get the total number of items in the cart
    getTotalItems() {
      return this.items.reduce((total, item) => total + item.quantity, 0);
    }
  
    // Method to get the total price of all items in the cart
    getTotalPrice() {
      return this.items.reduce((total, item) => total + item.getTotalPrice(), 0);
    }
  
    // Method to display cart items
    displayCart() {
      this.items.forEach(item => {
        console.log(`Product: ${item.product.name}, Quantity: ${item.quantity}, Total Price: $${item.getTotalPrice()}`);
      });
      console.log(`Total items in cart: ${this.getTotalItems()}`);
      console.log(`Total cart price: $${this.getTotalPrice()}`);
    }
  }
  
  // Test the ability of the objects
  
  // Create some products
  const product1 = new Product(1, "Baskets", 100);
  const product2 = new Product(2, "Socks", 20);
  const product3 = new Product(3, "Bag", 50);
  
  // Create a shopping cart
  const cart = new ShoppingCart();
  
  // Add items to the cart
  cart.addItem(product1, 2); // Add 2 Baskets
  cart.addItem(product2, 3); // Add 3 Socks
  cart.addItem(product3, 1); // Add 1 Bag
  
  // Display the cart
  cart.displayCart();
  
  // Remove an item (e.g., product with ID 2)
  cart.removeItem(2);
  
  // Display the cart after removing the item
  cart.displayCart();
  



  