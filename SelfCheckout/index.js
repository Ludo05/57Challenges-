const shoppingList = [{price: 20, quantity: 3},{price: 10, quantity: 1},{price: 20, quantity: 2}];

const sub = shoppingList.reduce( (sub, item) => {
    return sub + (item.price * item.quantity)
},0);
const tax = sub / 100 * 5.5
const total = sub + tax;


console.log(`sub ${sub} tax ${tax.toFixed(2)} total ${total}`)


