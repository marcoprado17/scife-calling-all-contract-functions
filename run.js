const web3 = require('./ethereum/web3');
const SmartCarInsuranceContract = require('./ethereum/SmartCarInsuranceContract');

const contractAddress = "0x4E9B65847B54939d73E451151c505D1E5f2D4959";

const smartCarInsuranceContract = SmartCarInsuranceContract(contractAddress);

(async () => {
    const accounts = await web3.eth.getAccounts();

    console.log(accounts);
    console.log(await web3.eth.getBalance(contractAddress));
    console.log(web3.utils.toWei("0.01"));

    const account = accounts[0]

    await smartCarInsuranceContract.methods.enterContract().send({
        from: account,
        value: web3.utils.toWei("0.01")
    })
    .then((r) => {
        console.log("-------------------------------------");
        console.log(`enterContract from account ${account}`)
        console.log(r);
    })
    .then(() => {
        return smartCarInsuranceContract.methods.enterContract().send({
            from: accounts[1],
            value: web3.utils.toWei("0.01")
        })
        .then((r) => {
            console.log("-------------------------------------");
            console.log(`enterContract from account ${accounts[1]}`)
            console.log(r);
        })
        .catch((err) => {
            console.log("-------------------------------------");
            console.log(`enterContract from account ${accounts[1]}`)
            console.log(err)
        });
    })
    .then(() => {
        return smartCarInsuranceContract.methods.enterContract().send({
            from: accounts[2],
            value: web3.utils.toWei("0.01")
        })
        .then((r) => {
            console.log("-------------------------------------");
            console.log(`enterContract from account ${accounts[2]}`)
            console.log(r);
        })
        .catch((err) => {
            console.log("-------------------------------------");
            console.log(`enterContract from account ${accounts[2]}`)
            console.log(err)
        });
    })
    .catch((err) => {
        console.log("-------------------------------------");
        console.log(`enterContract from account ${account}`)
        console.log(err)
    });
    
    const currUnixTimestamp = Math.round(Date.now() / 1000);
    console.log(currUnixTimestamp);

    await smartCarInsuranceContract.methods.pushGpsData(currUnixTimestamp, "449bd2ecfce7012c1b4b2999d472daffad867c35deb283a3f6f5d3c7949a5d5e").send({
        from: account,
    })
    .then((r) => {
        console.log("-------------------------------------");
        console.log(`pushGpsData(${currUnixTimestamp}, 449bd2ecfce7012c1b4b2999d472daffad867c35deb283a3f6f5d3c7949a5d5e)`);
        console.log(r);
    })
    .then(() => {
        return smartCarInsuranceContract.methods.pushGpsData(currUnixTimestamp+1, "449bd2ecfce7012c1b4b2999d472daffad867c35deb283a3f6f5d3c7949a5d5e").send({
            from: account,
        })
        .then((r) => {
            console.log("-------------------------------------");
            console.log(`pushGpsData(${currUnixTimestamp+1}, 449bd2ecfce7012c1b4b2999d472daffad867c35deb283a3f6f5d3c7949a5d5e)`);
            console.log(r);
        })
        .catch((err) => {
            console.log("-------------------------------------");
            console.log(`pushGpsData(${currUnixTimestamp+1}, 449bd2ecfce7012c1b4b2999d472daffad867c35deb283a3f6f5d3c7949a5d5e)`);
            console.log(err)
        });
    })
    .then(() => {
        return smartCarInsuranceContract.methods.pushGpsData(currUnixTimestamp+2, "449bd2ecfce7012c1b4b2999d472daffad867c35deb283a3f6f5d3c7949a5d5e449bd2ecfce7012c1b4b2999d472daffad867c35deb283a3f6f5d3c7949a5d5e").send({
            from: account,
        })
        .then((r) => {
            console.log("-------------------------------------");
            console.log(`pushGpsData(${currUnixTimestamp+2}, 449bd2ecfce7012c1b4b2999d472daffad867c35deb283a3f6f5d3c7949a5d5e449bd2ecfce7012c1b4b2999d472daffad867c35deb283a3f6f5d3c7949a5d5e)`);
            console.log(r);
        })
        .catch((err) => {
            console.log("-------------------------------------");
            console.log(`pushGpsData(${currUnixTimestamp+2}, 449bd2ecfce7012c1b4b2999d472daffad867c35deb283a3f6f5d3c7949a5d5e449bd2ecfce7012c1b4b2999d472daffad867c35deb283a3f6f5d3c7949a5d5e)`);
            console.log(err)
        });
    })
    .then(() => {
        return smartCarInsuranceContract.methods.pushGpsData(currUnixTimestamp+3, "449bd2ecfce7012c1b4b2999d472daffad867c35deb283a3f6f5d3c7949a5d5e449bd2ecfce7012c1b4b2999d472daffad867c35deb283a3f6f5d3c7949a5d5e449bd2ecfce7012c1b4b2999d472daffad867c35deb283a3f6f5d3c7949a5d5e449bd2ecfce7012c1b4b2999d472daffad867c35deb283a3f6f5d3c7949a5d5e").send({
            from: account,
        })
        .then((r) => {
            console.log("-------------------------------------");
            console.log(`pushGpsData(${currUnixTimestamp+3}, 449bd2ecfce7012c1b4b2999d472daffad867c35deb283a3f6f5d3c7949a5d5e449bd2ecfce7012c1b4b2999d472daffad867c35deb283a3f6f5d3c7949a5d5e449bd2ecfce7012c1b4b2999d472daffad867c35deb283a3f6f5d3c7949a5d5e449bd2ecfce7012c1b4b2999d472daffad867c35deb283a3f6f5d3c7949a5d5e)`);
            console.log(r);
        })
        .catch((err) => {
            console.log("-------------------------------------");
            console.log(`pushGpsData(${currUnixTimestamp+3}, 449bd2ecfce7012c1b4b2999d472daffad867c35deb283a3f6f5d3c7949a5d5e449bd2ecfce7012c1b4b2999d472daffad867c35deb283a3f6f5d3c7949a5d5e449bd2ecfce7012c1b4b2999d472daffad867c35deb283a3f6f5d3c7949a5d5e449bd2ecfce7012c1b4b2999d472daffad867c35deb283a3f6f5d3c7949a5d5e)`);
            console.log(err)
        });
    })
    .catch((err) => {
        console.log("-------------------------------------");
        console.log(`pushGpsData(${currUnixTimestamp}, 449bd2ecfce7012c1b4b2999d472daffad867c35deb283a3f6f5d3c7949a5d5e)`);
        console.log(err)
    });

    await smartCarInsuranceContract.methods.createNewRefundRequest("449bd2ecfce7012c1b4b2999d472daffad867c35deb283a3f6f5d3c7949a5d5e").send({
        from: account,
    })
    .then((r) => {
        console.log("-------------------------------------");
        console.log(`createNewRefundRequest(449bd2ecfce7012c1b4b2999d472daffad867c35deb283a3f6f5d3c7949a5d5e)`);
        console.log(r);
    })
    .then(() => {
        return smartCarInsuranceContract.methods.createNewRefundRequest("449bd2ecfce7012c1b4b2999d472daffad867c35deb283a3f6f5d3c7949a5d5e449bd2ecfce7012c1b4b2999d472daffad867c35deb283a3f6f5d3c7949a5d5e").send({
            from: account,
        })
        .then((r) => {
            console.log("-------------------------------------");
            console.log(`createNewRefundRequest(449bd2ecfce7012c1b4b2999d472daffad867c35deb283a3f6f5d3c7949a5d5e449bd2ecfce7012c1b4b2999d472daffad867c35deb283a3f6f5d3c7949a5d5e)`);
            console.log(r);
        })
        .catch((err) => {
            console.log("-------------------------------------");
            console.log(`createNewRefundRequest(449bd2ecfce7012c1b4b2999d472daffad867c35deb283a3f6f5d3c7949a5d5e449bd2ecfce7012c1b4b2999d472daffad867c35deb283a3f6f5d3c7949a5d5e)`);
            console.log(err)
        });
    })
    .then(() => {
        return smartCarInsuranceContract.methods.createNewRefundRequest("449bd2ecfce7012c1b4b2999d472daffad867c35deb283a3f6f5d3c7949a5d5e449bd2ecfce7012c1b4b2999d472daffad867c35deb283a3f6f5d3c7949a5d5e449bd2ecfce7012c1b4b2999d472daffad867c35deb283a3f6f5d3c7949a5d5e449bd2ecfce7012c1b4b2999d472daffad867c35deb283a3f6f5d3c7949a5d5e").send({
            from: account,
        })
        .then((r) => {
            console.log("-------------------------------------");
            console.log(`createNewRefundRequest(449bd2ecfce7012c1b4b2999d472daffad867c35deb283a3f6f5d3c7949a5d5e449bd2ecfce7012c1b4b2999d472daffad867c35deb283a3f6f5d3c7949a5d5e449bd2ecfce7012c1b4b2999d472daffad867c35deb283a3f6f5d3c7949a5d5e449bd2ecfce7012c1b4b2999d472daffad867c35deb283a3f6f5d3c7949a5d5e)`);
            console.log(r);
        })
        .catch((err) => {
            console.log("-------------------------------------");
            console.log(`createNewRefundRequest(449bd2ecfce7012c1b4b2999d472daffad867c35deb283a3f6f5d3c7949a5d5e449bd2ecfce7012c1b4b2999d472daffad867c35deb283a3f6f5d3c7949a5d5e449bd2ecfce7012c1b4b2999d472daffad867c35deb283a3f6f5d3c7949a5d5e449bd2ecfce7012c1b4b2999d472daffad867c35deb283a3f6f5d3c7949a5d5e)`);
            console.log(err)
        });
    })
    .catch((err) => {
        console.log("-------------------------------------");
        console.log(`createNewRefundRequest(449bd2ecfce7012c1b4b2999d472daffad867c35deb283a3f6f5d3c7949a5d5e)`);
        console.log(err)
    });

    await smartCarInsuranceContract.methods.approveRequest(0).send({
        from: account,
    })
    .then((r) => {
        console.log("-------------------------------------");
        console.log(`approveRequest(0)`);
        console.log(r);
    })
    .catch((err) => {
        console.log("-------------------------------------");
        console.log(`approveRequest(0)`);
        console.log(err)
    });

    await smartCarInsuranceContract.methods.confirmBO(0).send({
        from: accounts[5],
    })
    .then((r) => {
        console.log("-------------------------------------");
        console.log(`confirmBO(0)`);
        console.log(r);
    })
    .catch((err) => {
        console.log("-------------------------------------");
        console.log(`confirmBO(0)`);
        console.log(err)
    });

    await smartCarInsuranceContract.methods.getRefund(0).send({
        from: accounts[0],
    })
    .then((r) => {
        console.log("-------------------------------------");
        console.log(`getRefund(0)`);
        console.log(r);
    })
    .catch((err) => {
        console.log("-------------------------------------");
        console.log(`getRefund(0)`);
        console.log(err)
    });
})();

// console.log(web3);
// console.log(SmartCarInsuranceContract);
