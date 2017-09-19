import Web3 from 'web3'
import store from '../store'
import contract from 'truffle-contract'
import web3Actions from '../actions/web3actions'
let  Lottery = require('../../build/contracts/Lottery')

export default class Web3API {
  static web3
  static provider
  static lottery
  static deployed = { lottery: {} }

  constructor() {
    if (!Web3API.provider) {
      Web3API.provider = new Web3.providers.HttpProvider('http://localhost:8545')
    }
    if (!Web3API.web3) {
      Web3API.web3 = new Web3(Web3API.provider)
      store.dispatch(web3Actions.web3Connected())
    }
  }

  getLottery(){
    return Web3API.deployed.lottery
  }

  //Deploy the lottery contract to the Ethereum network
  async loadContract(){
    //Lottery already deployed
    if (Web3API.lottery)
      return false

    Web3API.lottery = await contract(Lottery)
    await Web3API.lottery.setProvider(Web3API.provider)
    
  }

  async deployContract() {
    Web3API.deployed.lottery = await Web3API.lottery.deployed()
    store.dispatch(web3Actions.lotteryDeployed())
    return true
  }
}
