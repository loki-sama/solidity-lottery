import React, { Component } from 'react'
import BasicLayout from '../Components/BasicLayout'
import HomeContent from '../Components/HomeContent'
import HomeSplash from '../Components/HomeSplash'
import LotteryResults from '../Components/LotteryResults'
import { connect } from 'react-redux'

class HomeContainer extends Component {
    state={height:800}
    render(){
        return(
            <BasicLayout heading="Solidity Lottery">
                <HomeSplash height={this.props.height}/>
                <HomeContent
                    lottery={this.props.lottery}
                />
                <LotteryResults
                    lottery={this.props.lottery}
                />
            </BasicLayout>
        )
    }
}

function mapStateToProps({ lotteryState }) {
    return {
        lottery: lotteryState
    }
}

export default connect(mapStateToProps)(HomeContainer)