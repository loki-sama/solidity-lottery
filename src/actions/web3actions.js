import types from './action-types'

const web3Connected = () => ({
    type: types.WEB3_CONNECTED
})

const lotteryDeployed = () => ({
    type: types.LOTTERY_DEPLOYED
})

export default { web3Connected, lotteryDeployed };