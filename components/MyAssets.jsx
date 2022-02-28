import { ethers } from "ethers"
import { useEffect, useState } from "react"
import axios from "axios"
import Web3Modal from web3Modal

import { nftaddress, nftmarketaddress } from "../config"
import Market from '../artifacts/contracts/Market.sol/NFTMarket.json'
import NFT from '../artifacts/contracts/NFT.sol/NFT.json'

const MyAssets = () => {
	return (
		<div>
			Hello World
		</div>
	)
}

export default MyAssets
