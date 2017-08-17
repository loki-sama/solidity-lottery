import React, {Component} from 'react'
import {Container, Header, Button, Icon,Segment} from 'semantic-ui-react'
import propTypes from 'prop-types'
export default class HomeSplash extends Component{
    static propTypes = {
        height: propTypes.number
    }
    render(){
        return(
            <Segment
                inverted
                textAlign='center'
                style={{minHeight:800, padding: '1em 0em'}}
                vertical
            >   
                <Container text>
                    <Header
                    as='h1'
                    content='Smart Contract Lottery'
                    inverted
                    style={{fontsize: '4em', fontweight: 'normal', marginBottom:0, marginTop: '3em'}}/>
                    <Header
                    as='h2'
                    content='Buy tickets for your chance to win!'
                    inverted
                    style={{fontsize:'1.7em', fontweight:'normal'}}/>
                    <Button primary size='huge'>Join the lottery!<Icon name='right arrow'/></Button>
                </Container>
            </Segment>
        )
    }
}