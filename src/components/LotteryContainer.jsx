import React, { Component } from 'react'
import BasicLayout from './BasicLayout'
import LotteryContent from './LotteryContent'

export default class LotteryContainer extends Component {
    render(){
        return(
            <BasicLayout heading="Lottery">
                <LotteryContent />
            </BasicLayout>
        )
    }
}