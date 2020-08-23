//Crie um programa para realizar operações bancárias 
//na conta de um usuário.

const user = {
    name: "Mariana",
    transactions: [],
    balance: 0
}

function createTransaction(transaction){
    user.transactions.push(transaction)
}

if (transation === 'credit') {
    return user.balance = user.balance + transaction.value
}
else {
    return user.balance = user.balance - transaction.value
}

createTransaction({ type: "credit", value: 50 });
createTransaction({ type: "credit", value: 120 });
createTransaction({ type: "debit", value: 80 });
createTransaction({ type: "debit", value: 30 });

console.log(user.balance); // 60

getHigherTransactionByType("credit"); // { type: 'credit', value: 120 }
getHigherTransactionByType("debit"); // { type: 'debit', value: 80 }

getAverageTransactionValue(); // 70

getTransactionsCount(); // { credit: 2, debit: 2 }