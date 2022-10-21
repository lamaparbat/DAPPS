import { useState } from 'react';
import Web3 from 'web3';

function App() {
  // connect to blockchain network
  const connectBlockchainNetwork = async () => {
    const web3 = new Web3(Web3.givenProvider || 'http://localhost:8085');
    // const network = await web3.eth.net.getNetworkType();
    const account = await web3.eth.getAccount();
    console.log('hel ' ,account)
  }
  
  connectBlockchainNetwork();
  
  return (
    <div className="App">
      i am parbats
    </div>
  )
}

export default App
