require("@nomiclabs/hardhat-waffle");
const fs = require('fs') //update the hradhat config with matic credentials
const privateKey = fs.readFileSync(".secret").toString().trim();


module.exports = {
	solidity: "0.8.4",
};
