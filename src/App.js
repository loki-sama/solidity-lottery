import React, { Component } from 'react'
import { connect } from 'react-redux'
import { addContributor } from './actions/actions'

import LotteryContract from '../build/contracts/Lottery.json'
import getWeb3 from './utils/getWeb3'

import './css/oswald.css'
import './css/open-sans.css'
import './css/pure-min.css'
import './css/App.css'

import Navigation from './components/navigation'
import Prizepool from './components/Prizepool'

import Contriblist from './components/contriblist'
import JoinLottery from './components/JoinLottery'

const contract = require('truffle-contract');
const Lottery = contract(LotteryContract);

class App extends Component {
  constructor(props) {
    super(props)

    this.state = {
      web3: null,
      currentPrizePool:0,
      numberOfTicketsSold:0,
      timeUntilPrizeAwarded:0
    }
    this.deployLotteryContract = this.deployLotteryContract.bind(this);
  }

  componentWillMount() {
    // Get network provider and web3 instance.
    // See utils/getWeb3 for more info.

    getWeb3
    .then(results => {
      this.setState({
        web3: results.web3
      })
    })
    .catch(() => {
      console.log('Error finding web3.')
    })
  }

  deployLotteryContract(){
    Lottery.setProvider(this.state.web3.currentProvider);
    this.state.web3.eth.getAccounts((error, accounts) => {
      Lottery.new({from:accounts[0], gas:100000})
    }).catch((err) => {
      console.log(err); 
    })
  }
  
  render() {
    const { 
      dispatch, 
      Contributors 
    } = this.props;

    return (
      <div className="App">
        <Navigation/>
        <main className="container">
          <JoinLottery onJoinLottery={text => dispatch(addContributor(text))}/>
          <Contriblist addContrib={Contributors}/>
        </main>
      </div>
    );
  }
}

function select(state) {
  return{
    Contributors: state.addContrib
  }
}

export default connect(select)(App)
