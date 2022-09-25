//CONFIGURE web3

import Web3 from "web3";

let web3;

if (typeof window !== "undefined" && typeof window.ethereum !== "undefined") {
  window.ethereum.request({ method: "eth_requestAccounts" });
  web3 = new Web3(window.ethereum);
} else {
  const provider = new Web3.providers.HttpProvider(
    "https://eth-goerli.g.alchemy.com/v2/Y0LWPMYsKg4_tlcUiGQ-dopQlxyQ6vpb"
  );
  web3 = new Web3(provider);
}

export default web3;
