const DEBIT = 'DEBIT'
const CREDIT = 'CREDIT'

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
        if (this.credit === 0) {
            return DEBIT
        } else {
            return CREDIT
        }
        
    }
    
}

module.exports = {
    Transaction,
    DEBIT,
    CREDIT
}
