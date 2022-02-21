require("@nomiclabs/hardhat-waffle");
const projectId = "2175d834e04d481eba6fccf6a5967e12"

module.exports = {
	solidity: "0.6.5",
	defaultNetwork: "hardhat",
	networks: {
		hardhat: {
			chainID: 1337
		},
		rinkeby: {
			URL: `https://rinkeby.infura.io/v3/${projectId}`,
			accounts: ['0xcc1ef5a937b9414f226c3dab28184b9a44cb42d672cb32c1db223c0ab57c04c8'] //Private key of the account
		}
	}
};
