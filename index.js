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
  if (Object.keys(cart).length == 0) {console.log('Your shopping cart is empty.')}
  else {
    var i = 0
    const list = []
    while (i < Object.keys(cart).length-1) {
      list.push(` ${Object.keys(cart)[i]} at $${Object.values(cart)[i]}`)
      i++
    }
    list.push(` ${Object.keys(cart)[Object.keys(cart).length]} at $${Object.values(cart)[Object.keys(cart).length]}`)
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
