import Web3 from "web3";

// connect to metamask wallet network
export const connectMetamask = async () => {
 return await window.ethereum.request({ method: 'eth_requestAccounts' })
}

