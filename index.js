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
  var i = []
  if (cart.length === 0) {console.log('Your shopping cart is empty.')}
  else {
    var list = []
    for (i = 0; i < cart.length; i++) {
      list.push(`${cart.itemName[0]} at $${cart.itemPrice[1]}.`) // need to understand object.keys? - split contents
    }
    console.log("In your cart, you have " + list)
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
