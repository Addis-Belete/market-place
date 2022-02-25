import React from 'react'
import { ethers } from 'ethers'
import { useState, useEffect } from 'react'
import axios from 'axios'
import web3Modal from "web3modal"
import {
nftAddress, nftmarketAddress
} from '../../config'
import NFTABI from'../../artifacts/contracts/Market.sol/NFTMarket.json'
import NFTMarketABI from '../../artifacts/contracts/NFT.sol/NFT.json'
const HomePage = () => {

async function loadNFTs(){
const provider = new ethers.providers.JsonRpcProvider()
const marketContract = new ethers.Contract(nftmarketAddress, NFTMarketABI, provider)
const tokenContract = new ethers.Contract(nftAddress, NFTABI, provider)
const data = await marketContract.fetchMarketItems()
// map over itens returned from smart contract and 
// format them as well as fetch their token metadata


}

	return (
		<div>
			
		</div>
	)
}

export default HomePage
