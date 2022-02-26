import { useState } from "react"
import { ethers } from "ethers"
import { create as ipfsHttpClient } from "ipfs-http-client"
import { useRouter } from "next/router"
import Web3Modal from 'web3modal'
import { nftaddress, nftmarketaddress } from "../config"
import NFT from'../artifacts/contracts/NFT.sol/NFT.json'
import Market from '../artifacts/contracts/Market.sol/NFTMarket.json'
const client = ipfsHttpClient('https://ipfs.infura.io:5001/api/v0')

const CreateNfts = () => {
	return (
		<div>
		Hello	
		</div>
	)
}

export default CreateNfts
