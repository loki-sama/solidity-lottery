import React from 'react'
import { Link } from 'react-router-dom'
import {
    Container,
    Segment,
    Menu
} from 'semantic-ui-react'

const Nav = () => {
    return (
        <Segment
            inverted
            textAlign='center'
            style={{minHeight:50, padding: '1em 0em'}}
            vertical
        >
            <Container>
                <Menu inverted pointing secondary size='large'>
                    <Menu.Item as={Link} to='/'>Home</Menu.Item>
                    <Menu.Menu position='right'>
                        <Menu.Item as={Link} to="/lottery">
                            <Menu.Item>Join the lottery</Menu.Item>
                        </Menu.Item>
                        {/*Will be adding scolling to make this scroll to prev winners*/}
                        <Menu.Item as={Link} to="#winners">
                            <Menu.Item>Previous Winners</Menu.Item>
                        </Menu.Item>
                        <Menu.Item as={Link} to='https://github.com/Mike-Stupich/solidity-lottery'>
                            <Menu.Item>Source Code</Menu.Item>
                        </Menu.Item>
                    </Menu.Menu>
                </Menu>
            </Container>
        </Segment>
    )
}
export default Nav