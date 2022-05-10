require("@nomiclabs/hardhat-waffle");
const fs = require("fs");
// const infuraId = fs.readFileSync(".infuraid").toString().trim() || "";

// module.exports = {
//   defaultNetwork: "hardhat",
//   networks: {
//     hardhat: {
//       chainId: 1337
//     },
//     /*
//     mumbai: {
//       Infura
//       url: `https://polygon-mumbai.infura.io/v3/${infuraId}`
//       url: "https://rpc-mumbai.matic.today",
//       accounts: [process.env.privateKey]
//     },
//     matic: {
//       Infura
//       url: `https://polygon-mainnet.infura.io/v3/${infuraId}`,
//       url: "https://rpc-mainnet.maticvigil.com",
//       accounts: [process.env.privateKey]
//     }
//     */
//   },
//   solidity: {
//     version: "0.8.4",
//     settings: {
//       optimizer: {
//         enabled: true,
//         runs: 200
//       }
//     }
//   }
// };

module.exports = {
  solidity: "0.8.4",
  networks: {
    rinkeby: {
      url: "https://rinkeby.infura.io/v3/90150fb423994dcf8485fde0abe0700d", //Infura url with projectId
      accounts: [
        "56f6b7fa64e563613aca555eb2a66f7b11fe82c78d4fd1b33d1cf78400cc84b8",
      ], // add the account that will deploy the contract (private key)
    },
  },
};
