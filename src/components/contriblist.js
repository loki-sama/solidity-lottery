import React, {Component, PropTypes } from 'react'
import Contributor from './Contributor'

export default class ContribList extends Component{
    render(){
        return(
            <ul>
                {this.props.addContrib.map(contrib =>
                    <Contributor
                        key={contrib.id}
                        {...contrib}
                        />
                    )}
            </ul>
        )
    }
}