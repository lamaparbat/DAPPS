import Web3 from "web3";

// connect to blockchain network
export const connectMetamask = async () => {
 // check if ethereum network is available on browser
 !window.ethereum && toast.warn('Please install metamask wallet');

 return await window.ethereum.request({ method: 'eth_requestAccounts' })
}

