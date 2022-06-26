const Account = require('../src/Account')
const Transaction = require ('../src/Transaction')
const Statement = require ('../src/Statement')

describe('Bank ', () => {
    let account
    beforeEach(function () {
    account = new Account()
  })
    let transaction
    beforeEach(function () {
    transaction = new Transaction()
  })
    let statement
    beforeEach(function () {
    statement = new Statement()
  })

  it('return empty account balance and transactions array', () => {
    // set up 
    const expectedResult = 0
    const expectedResult2 = []
    // execute 
    //verify
    expect(account.balance).toEqual(expectedResult)
    expect(account.transactions).toEqual(expectedResult2)
  })

  it('get balance function', () => {
    // set up
    const expectedResult = 0
    // execute
    const result = account.getBalance()
    // verify
    // console.log('Balance = ', account.balance)
    expect(result).toEqual(expectedResult)
  })

  it('get balance after deposit', () => {
    // set up
    const expectedResult = 100
    // execute
    account.creditAccount('20/2/22', 100)
    const result = account.getBalance()
    // verify
    console.log('Balance = ', account.balance)
    expect(result).toEqual(expectedResult)
  })

  it('get transactions function', () => {
    // set up
    const expectedResult = []
    // execute
    const result = account.getTransactions()
    // verify
    console.log('transactions = ', account.transactions)
    expect(result).toEqual(expectedResult)
  })

  it('get transactions after 100 deposit', () => {
    // set up
    const expectedResult = [
      {
        date: '20/2/22',
        credit: 100,
        debit: null,
        balance: 100
      }
    ]
    // execute
    account.creditAccount('20/2/22', 100)
    const result = account.getTransactions()
    // verify
    console.log('transactions = ', account.transactions)
    expect(result).toEqual(expectedResult)
  })

  it('withdraw 100, return new balance', () => {
    // set up
    // execute
    account.creditAccount('20/2/22', 1000)
    const result = account.debitAccount('20/2/22', 100)
    // verify
    console.log('balance = ', account.balance)
    expect(result).toEqual(900)
  })

  it('depoist 100, return new balance', () => {
    // set up
    // execute
    const result = account.creditAccount('20/2/22', 100)
    // verify
    expect(result).toEqual(100)
  })

  it('return error if not enough funds to withdraw', () => {
    // set up
    const expectedResult = 'Not enough funds available to make withdrawal'
    // execute
    const result = account.debitAccount('20/2/22', 100)
    // verify
    console.log(result)
    expect(result).toEqual(expectedResult)
  })

  fit("get statement for final criteria", () => {
    // setup
    const expected = [
      'date       ||credit  ||debit  ||balance',
      { Date: "10/01/2012", Credit: 1000, Debit: null, Balance: 1000 },
      { Date: "13/10/2012", Credit: 2000, Debit: null, Balance: 3000 },
      { Date: "14/10/2012", Credit: null, Debit: 500, Balance: 2500 }
    ];
    // execute
    account.creditAccount("10/01/2012", 1000);
    account.creditAccount("13/10/2012", 2000);
    account.debitAccount("14/10/2012", 500);
    const result = account.getStatement();
    console.log('Statement', result);
    // verify
    expect(result).toEqual(expected);
  });
})