const Transaction = require ('./transaction.js')
const Statement = require ('./statement.js')

class Account {
    constructor() {
        this.transactions = []
        this.balance = 0
    }

    getBalance() {
        // console.log('Balance = ', this.balance)
        return this.balance
    }

    getTransactions() {
        return this.transactions
    }


    getStatement() {
        const statement = new Statement(this.transactions, this.balance)
        return statement.printStatement()
    }

    creditAccount(date, amount) {
        this.balance += amount
        const {...transaction} = new Transaction(date, amount, null, this.balance)
        this.transactions.push({...transaction})
        return this.balance
    }

    debitAccount(date, amount) {
        if (this.balance >= amount) {
            this.balance -= amount
            const transaction = new Transaction(date, null, amount, this.balance)
            this.transactions.push(transaction)
            return this.balance
        } else {
            return 'Not enough funds available to make withdrawal'
        }
    }


}

module.exports = Account