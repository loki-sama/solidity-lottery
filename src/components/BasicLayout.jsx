import React, { Component } from 'react'
import propTypes from 'prop-types'
import {Menu, Container, Visibility, Segment, Grid, Header, List} from 'semantic-ui-react'

export default class BasicLayout extends Component {
    static propTypes = {
        heading: propTypes.string,
        children: propTypes.any
    }

    state = {}
    hideFixedMenu = () => this.setState({visible: false});
    showFixedMenu = () => this.setState({visible: true});

    navMenu = () => (
        <Menu fixed='top' size='large'>
            <Container>
                <Menu.Item as='a' active>{this.props.heading || 'Lottery'}</Menu.Item>
                <Menu.Menu position='right'>
                    <Menu.Item as='a'>Previous Winners</Menu.Item>
                    <Menu.Item as='a'>Source Code</Menu.Item>
                </Menu.Menu>
            </Container>
        </Menu>
    )

    render(){
        const { visible } = this.state
        return (
            <div>
                {visible ? <navMenu/> : null}
                <Visibility 
                onBottomPassed={this.showFixedMenu}
                onBottomVisible={this.hideFixedMenu}
                once={false}>
                    <Segment
                    inverted
                    textAlign='center'
                    style={{minHeight:100, padding: '1em 0em'}}
                    vertical>
                        <Container>
                            <Menu inverted pointing secondary size='large'>
                                <Menu.Item as='a' active>{this.props.heading || 'Lottery'}</Menu.Item>
                                <Menu.Menu position='right'>
                                    <Menu.Item as='a'>Previous Winners</Menu.Item>
                                    <Menu.Item as='a'>Source Code</Menu.Item>
                                </Menu.Menu>
                            </Menu>
                        </Container>
                    </Segment>
                </Visibility>
                <div>
                    {this.props.children}
                </div>
                <Segment inverted vertical style={{ padding: '5em 0em' }}>
                    <Container>
                        <Grid divided inverted stackable>
                        <Grid.Row>
                            <Grid.Column width={3}>
                            <Header inverted as='h4' content='About' />
                            <List link inverted>
                                <List.Item as='a'>Sitemap</List.Item>
                                <List.Item as='a'>GitHub</List.Item>
                                <List.Item as='a'>My Personal Website</List.Item>
                            </List>
                            </Grid.Column>
                            <Grid.Column width={3}>
                            <Header inverted as='h4' content='Services' />
                            <List link inverted>
                                <List.Item as='a'>Join the lottery</List.Item>
                                <List.Item as='a'>View pervious winners</List.Item>
                            </List>
                            </Grid.Column>
                            <Grid.Column width={7}>
                            <Header as='h4' inverted>My Motivation</Header>
                            <p>This is a personal project. I wanted to create a dApp that does something interesting.</p>
                            </Grid.Column>
                        </Grid.Row>
                        </Grid>
                    </Container>
                </Segment>
            </div>
        )
    }
}