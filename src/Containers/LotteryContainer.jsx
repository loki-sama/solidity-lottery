import React, { Component } from 'react'
import BasicLayout from '../Components/BasicLayout'
import LotteryContent from '../Components/LotteryContent'
import LotteryResults from '../Components/LotteryResults'
import propTypes from 'prop-types'
import { connect } from 'react-redux'

class LotteryContainer extends Component {
    static propTypes = {
        lottery: propTypes.object
    }
    render(){
        return(
            <BasicLayout heading="Lottery">
                <LotteryContent lottery={this.props.lottery}/>
                <LotteryResults lottery={this.props.lottery}/>
            </BasicLayout>
        )
    }
}

function mapStateToProps({ lotteryState: lottery }) {
    return {
        lottery
    }
}

export default connect(mapStateToProps) (LotteryContainer)
