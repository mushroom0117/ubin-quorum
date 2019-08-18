const fs = require('fs');
var nodes = JSON.parse(fs.readFileSync('../testnet.json', 'utf8'))['nodes'];

var PaymentAgent = artifacts.require("PaymentAgent")
var SGDz = artifacts.require("SGDz")
// var ZSLPrecompile = artifacts.require("./ZSLPrecompile.sol")

module.exports = async function(deployer) {
  // deployer.deploy(ZSLPrecompile);  
  await deployer.deploy(SGDz);
  await deployer.deploy(PaymentAgent, {privateFor: nodes.slice(1)});
};
