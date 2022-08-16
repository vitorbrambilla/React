import { useState } from 'react'

// CSS
import './App.css';

// Components
import MyComponent from './components/MyComponent';
import Title from './components/Title';

function App() {

  const n = 15
  const [name] = useState('Vitor')

  const redTitle = true

  return (
    <div className="App">
      {/* CSS global */}
      <h1>React com CSS</h1>

      {/* CSS de component */}
      <MyComponent />
      <p>Este parágrafo é do App</p>

      {/* CSS inline */}
      <p style={{ color: 'yellow', padding: '25px', borderTop: '4px solid red'}}>
        Este elemento foi estilizado de forma inline
      </p>

      {/* CSS inline dinamico */}
      <h2 style={n < 10 ? {color: 'purple'} : {color: 'pink'}}>CSS dinâmico</h2>
      <h2 style={n > 10 ? {color: 'purple'} : {color: 'pink'}}>CSS dinâmico</h2>
      <h2 style={name === 'Vitor' ? {color: 'gray', backgroundColor: 'black'} : null}>Teste nome</h2>

      {/* Classe dinâmica */}
      <h2 className={redTitle ? 'red-title' : 'title' }>Este título vai ter classe dinâmica</h2>

      {/* CSS modules */}
      <Title />
      <h2 className='my_title'>Testando</h2>
    </div>
  );
}

export default App;
