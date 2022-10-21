import { useEffect } from 'react';
import { connectBlockchainNetwork } from './Services/Utils/Web3/web3Connection'

function App() {
  useEffect(() => {
    connectBlockchainNetwork();
  }, [])

  return (
    <div className="App">
      WEB3 BLOCKCHAIN NETWORK
      <button>Enable Ethereum Network</button>
    </div>
  )
}

export default App
