
const blockchainConfig = {
    "MAINNET": {
        "ERC20Address": "0x50f09629d0afDF40398a3F317cc676cA9132055c",
        "alchemyURL": `https://polygon-mainnet.g.alchemy.com/v2/w49DplP1rlab4TmaesQci1TS4N-xS-U3`,
    },
    "TESTNET": {
        "ERC20Address": "0x58506F01a66F2f75dB055FE051C2ada297524CC2",
        "alchemyURL": `https://polygon-mumbai.g.alchemy.com/v2/w49DplP1rlab4TmaesQci1TS4N-xS-U3`,
    }  
}

const getBlockchainEnv = () => {
    return 'TESTNET'
}

const getBlockchainConfig = () => {
  const blockchainENV = getBlockchainEnv()
  return blockchainConfig[blockchainENV]
}


module.exports = {
    getBlockchainConfig

}


