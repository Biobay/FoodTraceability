const LotRegistry = artifacts.require("LotRegistry");

module.exports = function (deployer) {
  deployer.deploy(LotRegistry);
};
