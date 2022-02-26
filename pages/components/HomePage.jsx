import React from "react";
import { ethers } from "ethers";
import { useState, useEffect } from "react";
import axios from "axios";
import Web3Modal from "web3modal";
import { nftAddress, nftmarketAddress } from "../../config";
import NFTABI from "../../artifacts/contracts/Market.sol/NFTMarket.json";
import NFTMarketABI from "../../artifacts/contracts/NFT.sol/NFT.json";
const HomePage = () => {
  const [nfts, setNFfts] = useState([]);
  const [loadingStatet, setLoadingState] = useState("not-loaded");

  useEffect(() => {
    loadNFTs();
  }, []);

  async function loadNFTs() {
    const provider = new ethers.providers.JsonRpcProvider();
    const marketContract = new ethers.Contract(
      nftmarketAddress,
      NFTMarketABI,
      provider
    );
    const tokenContract = new ethers.Contract(nftAddress, NFTABI, provider);
    const data = await marketContract.fetchMarketItems();
    // map over itens returned from smart contract and
    // format them as well as fetch their token metadata

    const items = await Promise.all(
      data.map(async (i) => {
        const tokenUri = await tokenContract.tokenURI(i.tokenId);
        const meta = await axios.get(tokenUri);
        let price = ethers.utils.formatUnits(i.price.toString(), "ether");
        let item = {
          price,
          tokeId: i.tokenId.toNumber(),
          seller: i.seller,
          owner: i.owner,
          image: meta.data.image,
          name: meta.data.name,
          decription: meta.data.description,
        };

        return item;
      })
    );
    setNFfts(items);
    setLoadingState("loaded");
  }
  async function buyNfts(nft) {
    const web3Modal = new Web3Modal();
    const connection = await web3Modal.connect();
    const provider = new ethers.Web3Provider(connection);
    const signer = provider.getSigner();
    const contract = new ethers.Contract(
      nftmarketAddress,
      NFTMarketABI,
      signer
    );

    const price = ethers.utils.parseUnits(nft.price.toString(), "ether");
    const transaction = await contract.createMarketSale(
      nftAddress,
      nft.tokeId,
      { value: price }
    );

    await transaction.wait();
    loadNFTs();
  }
if (loadingState === 'loaded' && !nfts.length) return (<h1 className = "px-20 py-10 text-3xl">No Items in marketPlace</h1>)
  return (
<div>
<div className=" flex justify-center">
<div className="px-4" style={{maxWidth: '1600px'}}>



</div>


</div>


</div>);
};

export default HomePage;
