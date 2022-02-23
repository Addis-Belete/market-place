const { expect } = require("chai");
const { ethers } = require("hardhat");

describe("NFTMarket", function () {
	// deploy the marketplace

	const Market = await ethers.getContractFactory("NFTMarket")
	const market = await Market.deploy();
	await market.deployed()
	const marketAddress = market.address

	// deploy  the NFT contract

	const NFT = await ethers.getContractFactory("NFT");
	const nft = await NFT.deploy()
	await nft.deployed();
	const nftContractAddress = nft.address
	let listingPrice = await market.getListingPrice();
	listingPrice = listingPrice.toString()

	// create two tokens
	await nft.createToken("https://www.mytokenlocation.com")
	await nft.createToken("https://www.mytokenlocation2.com")
})
