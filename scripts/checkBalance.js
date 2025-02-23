require("dotenv").config();
const { ethers } = require("ethers");

async function main() {
    const provider = new ethers.JsonRpcProvider(process.env.ALCHEMY_SEPOLIA_URL);

    const address = "0x9f271D440DbEB191841f37cebfc2e92E9DC54F7A"; // Replace with your address
    const balance = await provider.getBalance(address);
    
    console.log(`Balance: ${ethers.formatEther(balance)} ETH`);
}

main().catch((error) => {
    console.error(error);
    process.exitCode = 1;
});
