import './App.css'

function App() {
  console.log('App component is rendering...')
  
  return (
    <div style={{ 
      background: '#1C1C1C', 
      color: '#FCFAF2', 
      minHeight: '100vh', 
      padding: '20px',
      fontFamily: 'Arial, sans-serif'
    }}>
      <h1>Erfun Ackley - Test Page</h1>
      <p>This is a simplified version to test if React is loading properly.</p>
      <p>If you can see this, React is working and the issue is elsewhere.</p>
    </div>
  )
}

export default App