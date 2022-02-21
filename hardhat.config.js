require("@nomiclabs/hardhat-waffle");
const projectId = "2175d834e04d481eba6fccf6a5967e12"
const fs = require("fs")
privateKey = fs.readFileSync(".secret").toString();
module.exports = {
	solidity: "0.6.5",
	defaultNetwork: "hardhat",
	networks: {
		hardhat: {
			chainID: 1337
		},
		rinkeby: {
			URL: `https://rinkeby.infura.io/v3/${projectId}`,
			accounts: ['privateKey'] //Private key of the account
		}
	}
};
