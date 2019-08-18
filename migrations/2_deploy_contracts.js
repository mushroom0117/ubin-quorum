const fs = require('fs');
var nodes = JSON.parse(fs.readFileSync('../testnet.json', 'utf8'))['nodes'];

var PaymentAgent = artifacts.require("PaymentAgent")
var SGDz = artifacts.require("SGDz")
// var ZSLPrecompile = artifacts.require("./ZSLPrecompile.sol")

module.exports = function(deployer) {
  // deployer.deploy(ZSLPrecompile);  
  deployer.deploy(SGDz);
  deployer.deploy(PaymentAgent, {privateFor: nodes.slice(1)});
};
