require('@babel/register');
({
    ignore: /node_modules/
});
require('@babel/polyfill');

const HDWalletProvider = require('@truffle/hdwallet-provider');

let mnemonic = 'heavy kiwi brand venture stomach response soap artwork grid civil army giant'; 
let testAccounts = [
"0x55cb46d701133a1477e57d523abb0e9b9df7c2eb60a5120e70d2732e76521aa7",
"0x657558d2ab237d9406e4a75fee973d963d1252f427fde50bc80f2acc5a987fed",
"0x454e10aa9c31e09e865b59e1af8d372a1bc4eb0fc8d752d7c4fdcb7881f6199b",
"0xce6a5de809f82bf414ba0b73cc9c95c5ce5fbbb5a152055ad6d554e162fb80ac",
"0xcc95896a620b27f9bfc35d9bbd9262fcb1d8e99d9e120eb8a5ea1401436f4cef",
"0x921c9db608c18a601f2536b4c86a0eef9fcce43177b2cc8ac8b080cbdad0cb69",
"0xe57a4121e44a3e5291673656ae7cc21e7bf3634ca0da9bce9279b842c6079fe3",
"0xca42903482ed378341ca1ffc1a974ae76bac76f46e3bd5cf234fabacc8be4809",
"0x0d2cfac3654eaad2ba28f912871e3cf0d7af6998338b1406b9437c0b072e137e",
"0x63c70f0d598f3f747d308aee46e5f68a35241272b2bb51a932bc77fce2d439af"
]; 
let devUri = 'http://127.0.0.1:7545/';

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
                10, // number of addresses
                true, // share nonce
                `m/44'/60'/0'/0/` // wallet HD path
            ),
            network_id: '*'
        }
    },
    compilers: {
        solc: {
            version: '^0.8.0'
        }
    }
};

