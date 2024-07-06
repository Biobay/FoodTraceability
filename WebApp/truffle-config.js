module.exports = {
  networks: {
    development: {
      host: "127.0.0.1",     // Localhost (default: Ganache)
      port: 7545,            // Porta di default per Ganache GUI
      network_id: "5777",       // Match any network id
    },
  },
  compilers: {
    solc: {
      version: "0.8.0",     // Specifica la versione del compilatore Solidity
    },
  },
};
