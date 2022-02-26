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
  const [fileUrl, setFileUrl] = useState(null);
  const [formInput, setFormInput] = useState({
    price: "",
    name: "",
    description: "",
  });
  const router = useRouter();

  async function onChange(e) {
    const file = e.target.files[0];
    try {
      const added = await client.add(file, {
        progress: (prog) => console.log(`received: ${prog}`),
      });
      const url = `https://ipfs.infura.io/ipfs/${added.path}`;
      setFileUrl(url);
    } catch (error) {
      console.log("Error uploading file: ", error);
    }
  }
async function createMarket(){
const {name, description, price} = formInput
if(!name || !description || !price || !fileUrl) return
const data = JSON.stringify({
name, description, image: fileUrl

})
try{
const added = await client.add(data)
const url = `https://ipfs.infura.io/ipfs/${added.path}`
createSale(url)
}catch(error){
console.log(' Error uploading file: ', error)
}


}
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
