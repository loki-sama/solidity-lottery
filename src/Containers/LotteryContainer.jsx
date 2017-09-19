import React, { Component } from 'react'
import BasicLayout from '../Components/BasicLayout'
import LotteryContent from '../Components/LotteryContent'
import LotteryResults from '../Components/LotteryResults'
import propTypes from 'prop-types'
import { connect } from 'react-redux'
import { getWinners, getTotalEthSentToContract } from '../api/lottery-api'

class LotteryContainer extends Component {
    static propTypes = {
        winners: propTypes.array,
        totalEth: propTypes.number
    }
    render(){
        return(
            <BasicLayout heading="Lottery">
                <LotteryContent totalEth={this.props.totalEth}/>
                <LotteryResults winners={this.props.winners}/>
            </BasicLayout>
        )
    }
}

function mapStateToProps({ winners, totalEth }) {
    return {
        winners: getWinners,
        totalEth: getTotalEthSentToContract
    }
}

export default connect(mapStateToProps) (LotteryContainer)
