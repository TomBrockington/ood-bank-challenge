class Account {
    constructor() {
        this.transactions = []
        this.balance = 0
    }

    getBalance() {
        return this.balance
    }

    getTransactions() {
        return this.transactions
    }

    creditAccount(amount) {
        this.balance += amount
        return this.balance
    }

    debitAccount(amount) {
        if (this.balance >= amount) {
            this.balance -= amount
            const transaction = new Transaction('TODO: 22/22/22', 0, amount, this.balance)
            this.transactions.push(transaction)
            
            return this.balance
        } else {
            return 'Not enough funds available to make withdrawal'
        }
    }


}

module.exports = Account