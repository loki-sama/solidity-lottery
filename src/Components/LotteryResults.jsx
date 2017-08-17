import React, {Component} from 'react'
import {
    Segment,
    List
} from 'semantic-ui-react'
import propTypes from 'prop-types'

export default class LotteryResults extends Component {
    static propTypes = {
        lotteryState: propTypes.arrayOf(
            propTypes.shape({
                winners: propTypes.string
            })
        )
    }

    addWinnerItem(winner) {
        const {
            address
        } = winner
        return (
            <List.Item>{address}</List.Item>
        )
    }

    addWinnersToList() {
        //return winnersId.map(id => this.addWinnerItem(winners[id]))
    }
    render() {
        return (
            <Segment>
                <List>
                    <List.Header></List.Header>
                    {this.addWinnersToList()}
                </List>
            </Segment>
        )
    }

}