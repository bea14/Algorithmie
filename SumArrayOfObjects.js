/*

*/

let cart = [
    {
      name: "JavaScript book",
      quantity: 3,
      price: 4,
    },
    {
      name: "UGG Women's Hazel Ankle Boot",
      quantity: 2,
      price: 79,
    },
    {
      name: "OXO Good Grips 11-Inch Balloon Whisk",
      quantity: 5,
      price: 9,
    },
  ];
  
 // totalPrice is 215

let totalPrice = cart.reduce(function (accumulator, item) {
    return accumulator + item.quantity * item.price;
  }, 0);

// totalPrice is 170

let totalPrice = cart
.filter(
  (item) =>
    item.name === "JavaScript book" ||
    item.name === "UGG Women's Hazel Ankle Boot"
)
.reduce((accumulator, item) => {
  return accumulator + item.quantity * item.price;
}, 0);