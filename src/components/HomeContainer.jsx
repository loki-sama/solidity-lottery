import React, { Component } from 'react'
import BasicLayout from './BasicLayout'
import HomeContent from './HomeContent'
import HomeSplash from './HomeSplash'
import { connect } from 'react-redux'

class HomeContainer extends Component {

    render(){
        return(
            <BasicLayout heading="Solidity Lottery">
                <HomeSplash/>
                <HomeContent
                    totalWinnings={this.props.totalWinnings}
                    uniquePlayers={this.props.uniquePlayers}
                />
            </BasicLayout>
        )
    }
}

export default connect(
    ({
        lotteryState: totalWinnings,
        lotteryState: uniquePlayers
    }) => ({
        totalWinnings,
        uniquePlayers
    })
)(HomeContainer)