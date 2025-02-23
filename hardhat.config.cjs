require("@nomicfoundation/hardhat-toolbox");
require("@nomicfoundation/hardhat-toolbox");

task("accounts", "Prints the list of accounts", async (taskArgs, hre) => {
    const accounts = await hre.ethers.getSigners();
    for (const account of accounts) {
        console.log(account.address);
    }
});



require("dotenv").config(); // Load environment variables

module.exports = {
  solidity: "0.8.28",
  networks: {
    sepolia: {
      url: process.env.ALCHEMY_SEPOLIA_URL,  // Ensure this is set in .env
      accounts: [process.env.PRIVATE_KEY],  // Ensure this is set in .env
    },
  },
  etherscan: {
    apiKey: process.env.ETHERSCAN_API_KEY,  // Ensure this is set in .env
  },
};
