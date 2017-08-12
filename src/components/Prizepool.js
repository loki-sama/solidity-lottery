import React from 'react'
import LotteryContract from '../../build/contracts/Lottery'

const contract = require('truffle-contract')
const Lottery = contract(LotteryContract)

class Prizepool extends React.Component{
    
    listenForBuyTicketEvent(){

    }

    render(){
        return(
            <div>
                <h3>{this.props.prizepool}</h3>
            </div>
        )
    }
}

export default Prizepool