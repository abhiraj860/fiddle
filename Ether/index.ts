// import { ethers } from "ethers";

// async function signAndVerify() {

//     // Generate a random wallet
//     const wallet = ethers.Wallet.createRandom();

//     // Extract the public and private keys
//     const publicKey = wallet.address;
//     const privateKey = wallet.privateKey;

//     console.log("Public Key (Address):", publicKey);
//     console.log("Private Key:", privateKey);

//     // Message to sign
//     const message = "hello world";

//     // Sign the message using the wallet's private key
//     const signature = await wallet.signMessage(message);
//     console.log("Signature:", signature);

//     // Verify the signature
//     const recoveredAddress = ethers.verifyMessage(message, signature);

//     console.log("Recovered Address:", recoveredAddress);
//     console.log("Signature is valid:", recoveredAddress === publicKey);
// }
// signAndVerify();

import { generateMnemonic } from 'bip39';

// Generate a 12-word mnemonic
const mnemonic = generateMnemonic();
console.log('Generated Mnemonic:', mnemonic);