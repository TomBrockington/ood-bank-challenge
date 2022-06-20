# Bank Domain Model

- Account
  - Properties
    - transactions: Transaction[] // trans objects in array type?
    - balance: RealNumber
  - Methods
    - constructor()
    - deposit(amount :RealNumber, date: string)
      - return balance
    - withdrawal(amount: RealNumber, date: string)
      - if not enough - error
      - return balance
    - getBalance() : RealNumber
    - getTransactions() : Transaction[]
    - #getTodaysDate(date: string) : String
      - return date
  
- Transaction
  - Properties
    - date: String
    - credit: RealNumber
    - debit: RealNumber
    - balance: RealNumber
  - Methods
    - constructor( date, credit, debit, balance )
      - // set object properties to arguments 
    - getDate()
      - return this.date
    - getBalance()
      - return this.balance
    - getType(credit, debit)

- Statement
  - Properties
    - transactions: Transactions[] // from Account constructor? 
  - Methods
    - constructor( transactions: Transactions[] )
      - this.transactions = transactions []
    - printStatement()
      - statement = String ${transactions} String
      - return 'Bank statement 20/7/22 dep 10, ...'

