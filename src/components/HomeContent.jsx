import React, {Component} from 'react'
import {Segment, Grid, Header, Container, Divider,  Button, Icon, Image} from 'semantic-ui-react'
import propTypes from 'prop-types'

export default class HomeContent extends Component{
    static propTypes = {
        totalWinnings: propTypes.number,
        uniquePlayers: propTypes.number
    }

    render(){
        return(
            <div>
                
                <Segment style={{ padding: '8em 0em' }} vertical>
                    <Grid container stackable verticalAlign='middle'>
                        <Grid.Row>
                        <Grid.Column width={8}>
                            <Header as='h3' style={{ fontSize: '2em' }}>Using Ethereum smart contracts we are able to make truly random lotteries</Header>
                            <p style={{ fontSize: '1.33em' }}>
                            You can now join in on the fun of a truly random lottery game! 100% of the Ether sent to the smart contract is awarded to the
                            winner of the lottery!
                            </p>
                            <Header as='h3' style={{ fontSize: '2em' }}>Send as much Ether as you want!</Header>
                            <p style={{ fontSize: '1.33em' }}>
                            1 Finney = 1 ticket, or 1 Ether = 100 Million tickets! Buying more tickets increases your chance at winning the lottery!
                            </p>
                        </Grid.Column>
                        <Grid.Column floated='right' width={6}>
                            <Image
                            bordered
                            size='large'
                            src={require('../assets/images/Ethereum.png')}
                            />
                        </Grid.Column>
                        </Grid.Row>
                        <Grid.Row>
                        <Grid.Column textAlign='center'>
                            <Button size='huge' onClick={ (e) => this.handleButtonClicks(e) }>Buy Tickets!</Button>
                        </Grid.Column>
                        </Grid.Row>
                    </Grid>
                </Segment>
                
                <Segment style={{ padding: '8em 0em' }} vertical>
                    <Container text>
                        <Header as='h3' style={{ fontSize: '2em' }}>Recent lottery winners</Header>
                        <p style={{ fontSize: '1.33em' }}>
                            Instead of focusing on content creation and hard work, we have learned how to master the art of doing
                            nothing by providing massive amounts of whitespace and generic content that can seem massive, monolithic
                            and worth your attention.
                        </p>

                        <Divider
                            as='h4'
                            className='header'
                            horizontal
                            style={{ margin: '3em 0em', textTransform: 'uppercase' }}>
                        </Divider>

                        <Header as='h3' style={{ fontSize: '2em' }}>Lottery Statistics</Header>
                        <p style={{ fontSize: '1.33em' }}>
                            {/*this.state.totalWinnings*/} ETH have been awarded to winners 
                        </p>
                        <p style={{ fontSize: '1.33em' }}>
                            {/*this.state.uniquePlayers*/} Unique players have participated in the lottery
                        </p>
                    </Container>
                </Segment>
            </div>
        )
    }
}