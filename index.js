var cart = [];

function getCart() {
 return cart;
}

function setCart(c) {
  cart = c;
  return cart;
}

function addToCart(itemName) {
 console.log(`${itemName} has been added to your cart.`)
 var itemPrice = Math.floor(Math.random()*100)
 cart.push({[itemName]:itemPrice})
 return cart
}

function viewCart() {
  if (cart.length === 0) {console.log('Your shopping cart is empty.')}
  else {
    var list = []
    for (i = 0; i < obj.length; i++) {
      list.push(`${Object.keys(obj)[i]} at $${Object.values(obj)[i]}`)
    }
    console.log(`In your cart, you have${list}.`)
  }
}

function total() {
  // write your code here
}

function removeFromCart(item) {
  // write your code here
}

function placeOrder(cardNumber) {
  // write your code here
}
