const Transaction = require('./transaction.js')
const Account= require ('./account.js')

class Statement {
    // construct the template for the printed statemtn here???
    constructor(transactions, balance) {
        this.statement =  'date       ||credit  ||debit  ||balance'
        this.transactions = transactions
        this.balance = balance
    }

    getTransactions() {
        let statementTrans = []
        for (let i = 0; i < this.transactions.length; i++) {
            if (this.transactions[i].credit === null) {
                statementTrans.push(`${this.transactions[i].date}||        || ${this.transactions[i].debit}||${this.balance}`)
            } else {
                statementTrans.push(`${this.transactions[i].date}|| ${this.transactions[i].credit}||       ||${this.balance}`)
            }
        }
        return statementTrans
    }
    
    printStatement() {
        return `${this.statement} \n ${this.getTransactions()}` 
    }
}

module.exports = Statement