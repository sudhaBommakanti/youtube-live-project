import logo from './assets/logo.svg';
import './styles/App.css';

import { useState } from 'react';
import Card from './components/Card';

function App() {
  const [total, setTotal] = useState(10);
  return (
    <div className="App">
      <header className="App-header">
        <h1>Hello {total}</h1>
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.jsx</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
      <button onClick = {() => {
        setTotal(555);
      }}> Click me </button>
      <p> Hello {total} </p>
      <Card/>
    </div>
  );
}

export default App;
