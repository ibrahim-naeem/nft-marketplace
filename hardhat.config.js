require("@nomiclabs/hardhat-waffle");
const fs = require("fs");

const privateKey = fs.readFileSync(".secret").toString();
const projectId = "";

module.exports = {
  network: {
    hardhat: {
      chainId: 31337,
    },
    mumbai: {
      url: ``,
      accounts: [privateKey],
    },
    mainnet: {
      url: ``,
      accounts: [privateKey],
    },
  },
  solidity: "0.8.4",
};
