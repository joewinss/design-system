import { useState } from 'react'
import { SignIn } from './components/SignIn'
import { SignUp } from './components/SignUp'
import { WalletView } from './components/wallet/WalletView'
import { CreateSubaccount } from './components/subaccount/CreateSubaccount'
import './App.css'

function App() {
  const [appRoute, setAppRoute] = useState<'auth' | 'wallet' | 'subaccount'>('subaccount')
  const [authView, setAuthView] = useState<'signin' | 'signup'>('signin')

  const toggleAuthView = () => {
    setAuthView(authView === 'signin' ? 'signup' : 'signin')
  }

  return (
    <div className="app-container">
      {/* Top Navigation Rail for Demo Purposes */}
      <nav className="demo-nav">
        <button 
          className={appRoute === 'auth' ? 'active' : ''} 
          onClick={() => setAppRoute('auth')}
        >
          Auth Demo
        </button>
        <button 
          className={appRoute === 'wallet' ? 'active' : ''} 
          onClick={() => setAppRoute('wallet')}
        >
          Wallet Demo
        </button>
        <button 
          className={appRoute === 'subaccount' ? 'active' : ''} 
          onClick={() => setAppRoute('subaccount')}
        >
          Subaccount Demo
        </button>
      </nav>

      <div className="app-content">
        <header className="app-header">
          <div className="logo-placeholder">A</div>
          <h1>Acme Corp</h1>
        </header>
        
        <main>
          {appRoute === 'auth' && (
            authView === 'signin' ? (
              <SignIn onToggleView={toggleAuthView} />
            ) : (
              <SignUp onToggleView={toggleAuthView} />
            )
          )}
          {appRoute === 'wallet' && <WalletView />}
          {appRoute === 'subaccount' && <CreateSubaccount />}
        </main>
      </div>
    </div>
  )
}

export default App
