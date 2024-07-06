const productregistry = artifacts.require("ProductRegistry");

module.exports = function (deployer) {
  deployer.deploy(productregistry);
};

