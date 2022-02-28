import { ethers } from "ethers"
import { useEffect, useState } from "react"
import axios from "axios"
import Web3Modal from web3Modal

import { nftaddress, nftmarketaddress } from "../config"
import Market from '../artifacts/contracts/Market.sol/NFTMarket.json'
import NFT from '../artifacts/contracts/NFT.sol/NFT.json'

const MyAssets = () => {
const [nfts, setNfts] = useState([])
const [loadingSate, setLoadingState] = useState('not-loaded')
 useEffect(()=>{
loadNFTS()

}, [])

async function loadNFTS(){
const web3Modal = new Web3Modal({
newtwork: "mainnet",
cacheProvider: true
})
const connection = await web3Modal.connect()
const provider = new ethers.providers.Web3Provider(connection)
const signer = provider.getSigner()
const marketContract = new ethers.Contract(nftmarketaddress, Market.abi, signer)
const tokenContract = new ethers.Contract(nftaddress, NFT.abi, provider)
const data = await marketContract.fetchMyNFTs()

const items = Promise.all(data.map(async i => {
const tokenUri = await tokenContract.tokenURI(i.tokenId)
const meta = await axios.get(tokenUri)
let price = ethers.utils.formatUnits(i.price.toString(), 'ether')
let item = {
price,
tokenId: i.tokenId.toNumber(),
seller: i.seller,
owner: i.owner,
image: meta.data.image,

}
return item
}))
setNfts(items)
setLoadingState('loaded')
}
if(loadingSate === 'loaded' && !nfts.length) return (<h1 className="py-10 px-20 text-3xl">No Assets owned</h1>)

	return (
		<div>
			Hello World
		</div>
	)
}

export default MyAssets
