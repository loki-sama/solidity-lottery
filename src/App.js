import React, { Component } from 'react'
import { connect } from 'react-redux'
import getWeb3 from './utils/getWeb3'
import propTypes from 'prop-types'

import './css/oswald.css'
import './css/open-sans.css'
import './css/pure-min.css'
import './css/App.css'
import 'semantic-ui-css/semantic.min.css';

import LotteryContainer from './components/LotteryContainer'
import HomeContainer from './components/HomeContainer'
class App extends Component {
  static propTypes = {
    lottery: propTypes.shape({ deployed: propTypes.bool })
  }

  componentDidMount() {
    this.load()
  }
  async load(){
    const Web3API = new getWeb3()
    Web3API.deployContract();
  }
  

  render() {
    if (!this.props.lottery.deployed)
      return null

    return (
      <div>
          <div>
            <HomeContainer/>
            {/*<Route exact path="/" component={HomeContainer} />
            <Route path="/lotteryEntry" component={LotteryContainer}/>*/}
          </div>
      </div>
      
    );
  }
}

function mapStateToProps({ web3State: { lottery }}) {
  return { lottery }
}
export default connect(mapStateToProps)(App)
