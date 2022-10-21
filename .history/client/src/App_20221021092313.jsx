import { useEffect } from 'react';
import { connectBlockchainNetwork } from './Services/Utils/Web3/web3Connection';
import '../node_modules/bootstrap/dist/css/bootstrap.min.css';

function App() {
  useEffect(() => {
    connectBlockchainNetwork();
  }, []);

  return (
    <div className="App d-grid place-content-center">
      WEB3 BLOCKCHAIN NETWORK
      <button className='btn btn-success rounded-1'>Enable Ethereum Network</button>
    </div>
  )
}

export default App;
