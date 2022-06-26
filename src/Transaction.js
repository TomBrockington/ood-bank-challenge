const DEBIT = 'DEBIT'
const CREDIT = 'CREDIT'
const Statement = require ('./statement.js')
const Account= require ('./account.js')

class Transaction {
    constructor(date, credit, debit, balance) {
        this.date = date
        this.credit = credit
        this.debit = debit
        this.balance = balance
    }
    
    getDate() {
        return this.date
    }

    getBalance() {
        return this.balance
    }

    getDebit() {
        return this.debit
    }

    getCredit() {
        return this.credit
    }

    getType() {
        if (this.credit === null) {
            return DEBIT
        } else {
            return CREDIT
        }
        
    }
    
}

module.exports = Transaction
   
