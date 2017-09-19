import React, {Component} from 'react'
import {
    Segment,
    List
} from 'semantic-ui-react'
import propTypes from 'prop-types'

export default class LotteryResults extends Component {
    static propTypes = {
        winners: propTypes.arrayOf(
            propTypes.shape({
                winner: propTypes.string
            })
        )
    }

    addWinnerItem(winner) {
        return (
            <List.Item>{winner}</List.Item>
        )
    }

    addWinnersToList(winners) {
        //return winners.map(id => this.addWinnerItem(winners[id]))
    }
    render() {
        return (
            <Segment>
                <List>
                    <List.Header></List.Header>
                    {this.addWinnersToList ({ winners: this.props.winners })}
                </List>
            </Segment>
        )
    }

}