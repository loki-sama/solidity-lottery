import React, { Component, PropTypes } from 'react'

export default class Contributor extends Component{
    render(){
        return(
            <li>
                {this.props.text}
            </li>
        )
    }
}