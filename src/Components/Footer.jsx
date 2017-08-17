import React from 'react'
import {
    Segment,
    Container,
    Grid,
    List,
    Header
} from 'semantic-ui-react'

const Footer = () => {
    return ( 
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
    )
}

export default Footer