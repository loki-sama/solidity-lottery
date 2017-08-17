import React, {Component} from 'react'
import {
    Header,
    Container,
    Segment
} from 'semantic-ui-react'
import propTypes from 'prop-types'
import getWeb3 from '../utils/getWeb3'


class LotteryContent extends Component {
    static propTypes = {
        lottery: propTypes.object
    }
    render(){
        return(
            <div>
                <Segment
                    textAlign='center'
                    style={{minHeight:600, padding: '1em 0em'}}
                    vertical
                >   
                    <Container text>
                        <Header
                        as='h1'
                        content='Welcome to the Lottery!'
                        style={{fontsize: '4em', fontweight: 'normal', marginBottom:0, marginTop: '3em'}}/>
                        <p>Send your Eth to the contract {this.props.lottery} to recieve your tickets!</p>
                    </Container>
                </Segment>
            </div>
        )
    }
}

export default LotteryContent