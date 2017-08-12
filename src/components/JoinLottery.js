import React, {Component, PropTypes } from 'react'

export default class JoinLottery extends Component {

    handleClick(e){
        const node = this.refs.input
        const text = node.value.trim()
        this.props.onJoinLottery(text)
        node.value = ''
    }

    render(){
        return(
            <div>
                <input type='text' ref='input'/>
                <button onClick={(e) => this.handleClick(e)}>Contribute to lottery</button>
            </div>

        )
    }
}