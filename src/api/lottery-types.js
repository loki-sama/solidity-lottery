import Web3 from 'web3'
const web3 = new Web3()

function makeMethod(methodName, ...params) {
    const checkTxObjincluded = params[params.length - 1]
    if (typeof checkTxObjincluded === 'object' && checkTxObjincluded !== null) {
        const txObj = params.pop()
        console.log(
            `makeMethod: ${methodName} ${params} ${JSON.stringify(txObj, null, 1)}`
        )
        return {
            methodName,
            params,
            txObj
        }
    }
    console.log(`makeMethod: ${methodName} ${params}`)
    return {
        methodName,
        params
    }
}
export const ContractInteractions = {
    getWinners: () => makeMethod('prevWinners'),
    getTotalEthSentToContract: () => makeMethod('totalEthWon')
}