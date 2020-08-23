//Crie um programa para realizar operações bancárias 
//na conta de um usuário.

const user = {
    name: "Mariana",
    transactions: [],
    balance: 0
}

function createTransaction(type, value) {
    user.transactions.push({
        type: type,
        value: value
    })
    if (type == "credit") {
        return user.balance = user.balance + value
    }
    else {
        return user.balance = user.balance - value
    }
}


createTransaction("credit",  50);
createTransaction("credit", 120);
createTransaction("debit", 80);
createTransaction("debit", 30);

console.log(user.balance); // 60

getHigherTransactionByType("credit"); // { type: 'credit', value: 120 }
getHigherTransactionByType("debit"); // { type: 'debit', value: 80 }

getAverageTransactionValue(); // 70

getTransactionsCount(); // { credit: 2, debit: 2 }