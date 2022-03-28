const RETHToken = artifacts.require('RETHToken.sol');
const Airdrop = artifacts.require('Airdrop.sol');

module.exports = async function (deployer, network) {
  const adminAddress = network === 'bsc' ? '0x8f338771757bd5Ca8242bfDa5Bc9ad2e50492653' : '0xc9cD37086A0442d3B008D6D5407655A2b746418a'; 
  const token = await RETHToken.deployed();
  const TotatAmount = 1000000;
  await deployer.deploy(Airdrop, token.address, adminAddress, TotatAmount);
  const airdrop = await Airdrop.deployed();
  await token.transfer(airdrop.address, web3.utils.toWei('100000'));
};
