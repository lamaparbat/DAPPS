import { useState } from 'react';
import Web3 from 'web3';

function App() {
  // connect to blockchain network
  const connectBlockchainNetwork = async () => {
    const web3 = new Web3(Web3.givenProvider || 'http://localhost:8085');
    console.log(web3)
  }
  
  connectBlockchainNetwork();
  
  return (
    <div className="App">
      i am parbat
    </div>
  )
}

export default App
