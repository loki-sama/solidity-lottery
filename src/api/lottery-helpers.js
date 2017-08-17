import BigNumber from 'bignumber.js'

function  isBigNumber(object) {
    return (
        object instanceof BigNumber ||
        (object && object.constructor && object.constructor.name === 'BigNumber')
    )
}

const normalizeArgs = log => {
    const { args, address } = log
    const metadata = { ...log }

    delete metadata.args
    delete metadata.address

    return {
        address,

        data: Object.keys(args).reduce(
            (obj, key) => ({
                ...obj,
                [key[0] === '_' ? key.slice(1): key]: isBigNumber(args[key])
                    ? args[key].toString()
                    : args[key]
            }),
            {}
        ),
        metadata
    }
}

function mapToBN(arr) {
    return arr.map(x => BNToStr(x))
}

function BNToStr(x) {
    return isBigNumber(x) ? x.toString(10) : x
}

export default {
    normalizeArgs,
    isBigNumber,
    mapToBN,
    BNToStr
}