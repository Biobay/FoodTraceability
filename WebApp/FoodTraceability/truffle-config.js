module.exports = {
  networks: {
    development: {
      host: "127.0.0.1",     // Localhost (default: ganache)
      port: 7545,            // Standard Ethereum port
      network_id: "5777",       // Any network (default: none)
    },
  },
  compilers: {
    solc: {
      version: "0.8.0",     // Specific compiler version
    },
  },
};
