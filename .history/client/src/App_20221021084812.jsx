import { useState } from 'react';
import Web3 from 'web3';

function App() {
  // connect to blockchain network
  const connectBlockchainNetwork = async () => {
    // check if ethereum network is available on browser
    !window.ethereum && console.log('Please install metamask wallet');

    // blockchain network connection
    const web3 = new Web3(Web3.givenProvider || 'http://localhost:8545');
    const network = await web3.eth.net.getNetworkType();
    const account = await web3.eth.getAccounts();
    console.log(`Blockchain network: ${network},  Account address: ${account}`)
  }

  connectBlockchainNetwork();

  return (
    <div className="App">
      WEB3 BLOCKCHAIN NETWORK
    </div>
  )
}

export default App