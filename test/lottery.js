var Lottery = artifacts.require("./Lottery.sol");

contract('Lottery', function(accounts) {
  let LotteryInstance
  it("should start the lottery", () => {
    return Lottery.new({
      from: accounts[0],
      gas: 4300000,
      gasPrice: 18
    })
    .then((instance) => {
      LotteryInstance = instance
      return instance.getBalance.call()
    })
    .then((balance) => {
      return web3.fromWei(balance.toNumber(), 'ether')
    })
    .then((balance) => {
      assert.equal(balance.valueOf(), 0, 'lottery should not have any funds yet')
    })
  })

  it("account[1] should purchase 1 eth of tickets", () => {
    return LotteryInstance.buyTickets({
      from: accounts[1],
      value: web3.toWei(1, 'ether')
    })
    .then(() => {
      return LotteryInstance.getBalance.call()
    })
    .then((balance) => {
      assert.equal(
        web3.fromWei(balance.toNumber(), 'ether'), 1, 'lottery should have 1 eth of tickets bought')
    })
    .then(() => {
      return LotteryInstance.getTicketBalance.call(accounts[1])
    })
    .then((tickets) => {
      console.log(tickets.toNumber())
      assert.notEqual(tickets.toNumber(), 0, 'lottery should have awarded tickets')
    })
  })
})