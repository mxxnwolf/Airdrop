const RETHToken = artifacts.require('RETHToken.sol');

module.exports = function (deployer) {
  deployer.deploy(RETHToken);
};
