require("@nomiclabs/hardhat-waffle");
require("dotenv").config();

// This is a sample Hardhat task. To learn how to create your own go to
// https://hardhat.org/guides/create-task.html
task("accounts", "Prints the list of accounts", async () => {
  const accounts = await ethers.getSigners();

  for (const account of accounts) {
    console.log(account.address);
  }
});

// You need to export an object to set up your config
// Go to https://hardhat.org/config/ to learn more

/**
 * @type import('hardhat/config').HardhatUserConfig
 */
module.exports = {
  networks: {
    hardhat: {

    },
    ropsten: {
      url: process.env.ALCHEMY_API,
      accounts: [process.env.PRIVATE_KEY]
    }
  },
  solidity: {
    version: "0.6.2",
    settings: {
      optimizer: {
        enabled: true,
        runs: 200
      }
    }
  }
};
