import Web3Api from '../utils/getWeb3'
import helpers from './lottery-helpers'
import actionCreator from '../actions/lottery-actions'

const loadApp = async () => {
    const web3API = new Web3Api()
    console.log('Loading and deploying lottery contract...')
    await web3API.loadContract()
    const deployed = await web3API.deployContract()
    const lotteryContract = web3API.deployed.lottery

    const logCreator = actionCreators => (err, log) => {
        if (err) {
            console.error(err)
            throw err
        }
        let val
        Object.keys(actionCreators).forEach(key => {
            if (actionCreators[key][log.event])
                val = actionCreators[key][log.event](helpers.normalizeArgs(log))
        })
        return val
    }

    //Watching lotteryContract for events
    const filterObj = { fromBlock: 0, toBlock: 'latest' }
    const logHandler = logCreator({ actionCreator })
    lotteryContract.watch(async (err, result) => {
        console.log('Lottery log found', result)
        const action = logHandler(err, result)
        console.log('Posting action back to main script...')
        postMessage(action)
    })

}

console.log('Webworker loaded')
loadApp()