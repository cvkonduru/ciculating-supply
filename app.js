const ethers = require('ethers');
const express = require('express');
const config = require("./config/config").getBlockchainConfig();
const abi = require("./config/ABI/LFIToken");
const rpc = config.alchemyURL;
const address = config.ERC20Address;
const port = 3000

const app = express();

app.get('/',async(req,res) => {
    const provider = new ethers.providers.JsonRpcProvider(rpc);
    const TOKEN = new ethers.Contract(address,abi,provider);
    try {
        const value = ethers.BigNumber.from(await TOKEN.totalSupply()).toString()/10**18
        res.json({totalSupply:value})
    } catch(e) {
        res.send(e)
    }
})

app.listen(port, () => {
    console.log(`Listening on port ${port}`)
})


