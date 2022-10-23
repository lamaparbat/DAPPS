const Ballot = artifacts.require("Accounts");

module.exports = function (deployer) {
 deployer.deploy(Ballot);
}