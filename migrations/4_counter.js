const counter1 = artifacts.require("Counter");

module.exports = function(deployer) {
    deployer.deploy(counter1);
}