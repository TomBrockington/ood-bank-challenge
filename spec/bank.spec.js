const Account = require('../src/BankAccount')

describe('Bank ', () => {
    let account
    beforeEach(function () {
    account = new Account()
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
    expect(result).toEqual(expectedResult)
  })

  it('get transactions function', () => {
    // set up
    const expectedResult = []
    // execute
    const result = account.getTransactions()
    // verify
    expect(result).toEqual(expectedResult)
  })

  it('deposit 100 to balance, return new balance', () => {
    // set up
    // execute
    const result = account.creditAccount(100)
    // verify
    expect(result).toEqual(100)
  })

  it('withdraw 100 from balance, return new balance', () => {
    // set up
    // execute
    const result = account.creditAccount(100)
    // verify
    expect(result).toEqual(100)
  })

  it('return error if not enough funds to withdraw', () => {
    // set up
    const expectedResult = 'Not enough funds available to make withdrawal'
    // execute
    const result = account.debitAccount(100)
    // verify
    expect(result).toEqual(expectedResult)
  })
})