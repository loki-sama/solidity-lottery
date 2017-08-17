import React, { Component } from 'react'
import propTypes from 'prop-types'
import Nav from './NavBar'
import Footer from './Footer'

export default class BasicLayout extends Component {
    static propTypes = {
        heading: propTypes.string,
        children: propTypes.any
    }
    render(){
        return (
            <div>
                <Nav/>
                <div>
                    {this.props.children}
                </div>
                <Footer/>
            </div>
        )
    }
}