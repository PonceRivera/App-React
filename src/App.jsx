import './App.css'
import Home from './pages/Home'
import Snowfall from 'react-snowfall'

function App() {
  return (
    <>
      <div style={{ position: 'fixed', inset: 0, zIndex: 10, pointerEvents: 'none' }}>
        <Snowfall />
      </div>
      <div className="safety-stripes-left"></div>
      <div className="safety-stripes-right"></div>
      <main>
        <Home />
      </main>
    </>
  )
}

export default App
