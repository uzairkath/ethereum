const advanced = artifacts.require("advancedSmartContract");
module.exports = function(deployer) {
    deployer.deploy(advanced);
}