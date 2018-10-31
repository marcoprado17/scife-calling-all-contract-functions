const Web3 = require('web3');
const HDWalletProvider = require('truffle-hdwallet-provider');

const provider = new HDWalletProvider(
    "session scissors vivid ensure race trade infant prepare pencil worth fabric pipe",
    "https://rinkeby.infura.io/v3/571882635b684ab1b99b7f9bb253f93a",
    0,
    10
);
const web3 = new Web3(provider);

module.exports = web3;
