const web3 = require('./web3');
const SmartCarInsuranceContract = require('./build/SmartCarInsuranceContract.json');

module.exports = (address) => {
    return new web3.eth.Contract(
        JSON.parse(SmartCarInsuranceContract.interface),
        address
    );
};
