# Kuverse NFT - Hardhat Setup and Deployment Guide

## 📌 Prerequisites
Ensure you have the following installed:
- [Node.js](https://nodejs.org/)
- [Hardhat](https://hardhat.org/)
- [MetaMask Wallet](https://metamask.io/)
- Sepolia ETH for deployment

## 🚀 Getting Started

### 1️⃣ **Clone the Repository**
```sh
git clone https://github.com/your-repo/kuverse-nft.git
cd kuverse-nft
```

### 2️⃣ **Install Dependencies**
```sh
npm install
```

### 3️⃣ **Setup Environment Variables**
Create a `.env` file and add your Alchemy API key and private key:
```sh
ALCHEMY_API_URL=https://eth-sepolia.g.alchemy.com/v2/YOUR_ALCHEMY_KEY
PRIVATE_KEY=YOUR_WALLET_PRIVATE_KEY
```

## 💰 Getting Free Sepolia ETH
To deploy smart contracts, you need Sepolia ETH. Use one of these faucets:

✅ **[QuickNode Sepolia Faucet](https://faucet.quicknode.com/ethereum/sepolia)**  *(No ETH required!)*  
✅ **[Infura Sepolia Faucet](https://www.infura.io/faucet)** *(Requires Infura account)*  

After receiving ETH, check your balance:
```sh
npx hardhat run scripts/checkBalance.js --network sepolia
```

## 🔥 Deploying the Smart Contract
```sh
npx hardhat run scripts/deploy.js --network sepolia
```

## 🛠 Checking Balance Script (`scripts/checkBalance.js`)
```js
const { ethers } = require("hardhat");
require("dotenv").config();

async function main() {
  const provider = new ethers.JsonRpcProvider(process.env.ALCHEMY_API_URL);
  const balance = await provider.getBalance("0x9f271D440DbEB191841f37cebfc2e92E9DC54F7A");
  console.log("Balance:", ethers.formatEther(balance), "ETH");
}

main().catch((error) => {
  console.error(error);
  process.exit(1);
});
```

## 🏗 Hardhat Tasks
- Check accounts:
  ```sh
  npx hardhat accounts --network sepolia
  ```
- Compile contracts:
  ```sh
  npx hardhat compile
  ```
- Run tests:
  ```sh
  npx hardhat test
  ```

## ❓ Troubleshooting
**Error: `insufficient funds for gas * price + value`**  
🔹 Solution: Get more Sepolia ETH using a faucet.  

**Error: `Cannot read properties of undefined (reading 'formatEther')`**  
🔹 Solution: Ensure `ethers` is correctly imported in the script.

---
📢 **Author:** Yash Gupta  
📧 **Email:** gup098@gmail.com
