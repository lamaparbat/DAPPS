import { useEffect } from 'react';
import { connectBlockchainNetwork } from './Services/Utils/Web3/web3Connection';
import '../node_modules/bootstrap/dist/css/bootstrap.min.css';
import './App.css'

function App() {
  useEffect(() => {
    connectBlockchainNetwork();
  }, []);

  return (
    <div className="App d-flex flex-column align-items-center justify-content-center">
      <h2>WEB3 BLOCKCHAIN NETWORK</h2><br />
      <button className='btn btn-info text-dark rounded-1 w-25'>Enable Ethereum Network</button>
    </div>
  )
}

export default App;
