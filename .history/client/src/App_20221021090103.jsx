import { useEffect } from 'react';
import connectBlockchainNetwork from './App'

function App() {
  useEffect(() => {
    connectBlockchainNetwork();
  }, [])

  return (
    <div className="App">
      WEB3 BLOCKCHAIN NETWORK
    </div>
  )
}

export default App
