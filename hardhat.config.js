require("@nomiclabs/hardhat-waffle");
const projectId = "2175d834e04d481eba6fccf6a5967e12"
const fs = require("fs")
privateKey = fs.readFileSync(".secret").toString().trim()
module.exports = {
	solidity: {
		compilers:
			[
				{
					version: "0.6.5",
				},
				{
					version: "0.8.0",
				},
				{
					version: "0.8.1",
				}
			],
	},
	defaultNetwork: "hardhat",
	networks: {
		hardhat: {
			chainID: 1337
		},
		rinkeby: {
			url: `https://rinkeby.infura.io/v3/${projectId}`,
			accounts: ['0xcc1ef5a937b9414f226c3dab28184b9a44cb42d672cb32c1db223c0ab57c04c8'] //Private key of the account
		}
	}
};
