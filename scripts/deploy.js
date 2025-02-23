require("dotenv").config();
const hre = require("hardhat");

async function main() {
    if (!hre.ethers) {
        console.error("Hardhat environment not loaded correctly.");
        process.exit(1);
    }

    // Get the contract factory
    const KuverseNFT = await hre.ethers.getContractFactory("KuverseNFT");
    const kuverseNFT = await KuverseNFT.deploy({ gasLimit: 5000000 });
    

    await kuverseNFT.deployed();
    console.log("KuverseNFT deployed to:", kuverseNFT.address);
}

// Handle errors
main().catch((error) => {
    console.error(error);
    process.exitCode = 1;
});
