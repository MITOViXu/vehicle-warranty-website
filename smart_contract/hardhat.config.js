require('dotenv').config();
require('@nomiclabs/hardhat-ethers')
// const { API_URL } = process.env;

module.exports = {
  solidity: "0.8.11",
  defaultNetwork: "sepolia",
  networks: {
    hardhat: {},
    sepolia: {
      url: "https://eth-sepolia.g.alchemy.com/v2/MPMfIIQQw3C8j6ZPKtmlX-dBPCSE7rmU",
      accounts: [`0xc57adc217f6a0e901a655d0f215f15759b3e0c8e9bc621c0b8d031aa9cb2b8b2`],
    },
  },
};
