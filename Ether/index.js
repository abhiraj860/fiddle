"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
Object.defineProperty(exports, "__esModule", { value: true });
const ethers_1 = require("ethers");
function signAndVerify() {
    return __awaiter(this, void 0, void 0, function* () {
        // Generate a random wallet
        const wallet = ethers_1.ethers.Wallet.createRandom();
        // Extract the public and private keys
        const publicKey = wallet.address;
        const privateKey = wallet.privateKey;
        console.log("Public Key (Address):", publicKey);
        console.log("Private Key:", privateKey);
        // Message to sign
        const message = "hello world";
        // Sign the message using the wallet's private key
        const signature = yield wallet.signMessage(message);
        console.log("Signature:", signature);
        // Verify the signature
        const recoveredAddress = ethers_1.ethers.verifyMessage(message, signature);
        console.log("Recovered Address:", recoveredAddress);
        console.log("Signature is valid:", recoveredAddress === publicKey);
    });
}
signAndVerify();
