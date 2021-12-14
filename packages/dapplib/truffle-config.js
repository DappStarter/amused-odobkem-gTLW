require('@babel/register');
({
    ignore: /node_modules/
});
require('@babel/polyfill');

const HDWalletProvider = require('@truffle/hdwallet-provider');

let mnemonic = 'gesture hill fresh skull drift response museum unable hidden clock equal genuine'; 
let testAccounts = [
"0x2a469592fde60ffafb7e93621912466c128745de8602836e74fb2a873c5f60fe",
"0xe8158906cf8fb676948616810564dc4120f0cf60f43a8dcc25c98144e306a2f8",
"0x1bb69b479d3ba6e47c9468d6110bec59728cefb088e84407adf411745fce04fb",
"0x8223a1e1a510622fe857f83cbd403b01fd36c53e7c0291a2a0ba392b0d1c5187",
"0x249a7edfed6b8e56be9e1cfac20cd2fbe997eccc38213f7608989ca82e405e7d",
"0x6e6fe59bdd99bb2e67f14d06a03cdf23852746130ffec25c6f335d94610839c5",
"0x68c5216b4f9fddc66a478faa869330fc22386d07e98d265bb98b131e44d28282",
"0x7036ed4b5b65c28a84a09448f01cb061c80a27608fa9864eb0d7963d696e15ce",
"0xd4e02bbaedb4694b4b1d4719cf675bef27ed24df9a55fa728bf1a94093e1c2a4",
"0xc0de7064d57600ddbd4fc883cc6ab54192eb950dcb2cfe9f625fd0b67fb2f1e7"
]; 
let devUri = 'https://api.avax-test.network/ext/bc/C/rpc';

module.exports = {
    testAccounts,
    mnemonic,
    networks: {
        development: {
            uri: devUri,
            provider: () => new HDWalletProvider(
                mnemonic,
                devUri, // provider url
                0, // address index
                6, // number of addresses
                true, // share nonce
                `m/44'/60'/0'/0/` // wallet HD path
            ),
            gas: 8000000,
            network_id: '*',
            chainId: 43113,
            skipDryRun: true
        }
    },
    compilers: {
        solc: {
            version: '^0.8.0'
        }
    }
};


