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

function getHigherTransactionByType(transactionType) {
    let maxValue = 0
    let typeTransaction = ""
    for (userTransaction of user.transactions) {
        if (userTransaction.type == transactionType && userTransaction.value > maxValue) {
            typeTransaction = userTransaction.type
            maxValue = userTransaction.value

        }
    }
    console.log(`Max value ${typeTransaction} is ${maxValue}`)
}

function getTransactionsCount() {
    let count = { credit: 0, debit: 0 }
    for (let transaction of user.transactions) {

        if (transaction.type === 'credit') {
            count.credit += 1
        }
        else {
            count.debit += 1
        }
    }
    console.log(count)
}

createTransaction("credit", 50)
createTransaction("credit", 120)
createTransaction("debit", 80)
createTransaction("debit", 30)

console.log(`Your balance is $ ${user.balance}`)

getHigherTransactionByType("credit")
getHigherTransactionByType("debit")


getAverageTransactionValue() // 70


getTransactionsCount() 