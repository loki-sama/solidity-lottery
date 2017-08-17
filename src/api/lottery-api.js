import Web3API from '../utils/getWeb3'
import { ContractInteractions } from './lottery-types'
import Utils from './lottery-helpers'

const web3API = new Web3API()

//Wrapper to call lottery contract functions
async function wrapTx({ methodName, params, txObj = null }) {
    const defaultParams = {
        from: this.address,
        gas: 210000
    }
    const lotteryInstance = await web3API.getLottery()

    return lotteryInstance[methodName](
        ...[
            ...params,
            txObj ? { ...defaultParams, ...txObj } : defaultParams
        ]
    )
}

//Wraps the TX and gets the array of last 10 winners
async function getWinners() {
    const res = await wrapTx(
        ContractInteractions.getWinners()
    )
    let winners
    res.forEach(function(winner) {
        winners.push(Utils.BNToStr(winner))
    }, this);
    return winners
}

//Wraps the TX and gets the BN of total Eth sent to contract
async function getTotalEthSentToContract() {
    const res = await wrapTx(
        ContractInteractions.getTotalEthSentToContract()
    )
    return Utils.BNToStr(res)
}

export default {
    getWinners,
    getTotalEthSentToContract
}