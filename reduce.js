let orders = [
    { amount: 250 },
    { amount: 400 },
    { amount: 100 },
    { amount: 325 },
]

//let result = 0;
//for ( let i = 0; i < orders.length; i++ ) {
//    result += orders[i].amount;
//}

//console.log(result);

let total = orders.reduce((sum,order, idk) => {
    console.log(sum, order, idk);
    return sum + order.amount
}, 10)

console.log(total);