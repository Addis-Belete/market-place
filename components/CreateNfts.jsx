import { useState } from "react";
import { ethers } from "ethers";
import { create as ipfsHttpClient } from "ipfs-http-client";
import { useRouter } from "next/router";
import Web3Modal from "web3modal";
import { nftaddress, nftmarketaddress } from "../config";
import NFT from "../artifacts/contracts/NFT.sol/NFT.json";
import Market from "../artifacts/contracts/Market.sol/NFTMarket.json";
const client = ipfsHttpClient("https://ipfs.infura.io:5001/api/v0");

const CreateNfts = () => {
  return (
    <div className=" flex justify-center">
      <div className="w-1/2 flex flex-col pb-12">
        <input
          type="text"
          placeholder="Asset Name"
          className="mt-8 border rounded p-4"
        />
        <textarea
          name="description"
          id="description"
          cols="30"
          rows="10"
          placeholder="Asset Description"
          className="mt-2 border rounded p-4"
        />
        <input
          placeholder="Asset Price in ETH"
          className="mt-2 border rounded p-4"
        />
        <input type="file" name="Asset" id="asset" className="my-4" />
        {fileUrl && <img className="rounded mt-4 " width="350" src={fileUrl} />}

        <button className="font-bold mt-4 bg-pink-500 text-white rounded p-4 shadow-lg">
          
          Create Digital Asset
        </button>
      </div>
    </div>
  );
};

export default CreateNfts;
