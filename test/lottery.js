var Lottery = artifacts.require("./Lottery.sol");

contract('Lottery', function(accounts) {
  it("should start the lottery", function() {
    return Lottery.deployed()
    .then(function(instance) {
      return instance.call(accounts[0]);
    });
  });
});
