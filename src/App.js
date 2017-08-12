import React, { Component } from 'react'
import LotteryContract from '../build/contracts/Lottery.json'
import getWeb3 from './utils/getWeb3'

import './css/oswald.css'
import './css/open-sans.css'
import './css/pure-min.css'
import './App.css'


const contract = require('truffle-contract');
const Lottery = contract(LotteryContract);

class App extends Component {
  constructor(props) {
    super(props)

    this.state = {
      web3: null
    }
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

  render() {
    return (
      <div className="App">
        <main className="container">
        </main>
      </div>
    );
  }
}

export default App
