import { useEffect, useState } from 'react';
import { connectBlockchainNetwork } from './Services/Utils/Web3/web3Connection';
import { connectMetamask } from '../src/Services/Utils/Web3/connectMetamask';
import '../node_modules/bootstrap/dist/css/bootstrap.min.css';
import './App.css'

function App() {
  const [loading, setLoading] = useState(false);
  const [btnStatus, setBtnStatus] = useState('Enable Ethereum Network');

  useEffect(() => {
    connectBlockchainNetwork();
  }, []);

  const startMetamaskConnection = async () => {
    setLoading(true);
    const result = await connectMetamask();
    if (result.length > 0) {
      setBtnStatus('Connected to ' + result[0]);
      setLoading(false);
    } else {
      setBtnStatus('Connecting');
      setLoading(false);
    }
  }

  return (
    <div className="App d-flex flex-column align-items-center justify-content-center">
      <h2>WEB3 BLOCKCHAIN NETWORK</h2><br />
      <button
        className='btn btn-info text-dark rounded-1 w-auto'
        onClick={startMetamaskConnection}
      >{loading ? 'Connecting....' : btnStatus}</button>
    </div>
  )
}

export default App;
