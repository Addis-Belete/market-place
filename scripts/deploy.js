
const hre = require("hardhat");

async function main() {


	// NFTMarket contract
	const Market = await hre.ethers.getContractFactory("NFTMarket");
	const market = await Market.deploy();
	await market.deployed();
	console.log("NFTMarket deployed to:", market.address);
	// NFT Contract
	const NFT = await hre.ethers.getContractFactory("NFT");
	const nft = await NFT.deploy(market.address);
	await nft.deployed();
	console.log("NFT deployed to:", nft.address);

}


main()
	.then(() => process.exit(0))
	.catch((error) => {
		console.error(error);
		process.exit(1);
	});
