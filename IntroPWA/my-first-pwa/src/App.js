import React, { useCallback, useState, useEffect } from 'react';
import logo from './logo.svg';
import './App.css';

function App() {

  const [newItem, setNewItem] = useState("");
  const [items, setItems] = useState([]);
  return (
    <div className="App">
      <header className="App-header">
        <h1>
           ** Proyecto PWA **
        </h1>
        <input style={{fontSize: 24}} type='text' onChange={e => setNewItem(e.target.value)} value={newItem}>
        </input>
        <button style={{fontSize: 24}} onClick={() => setItems ([...items, newItem])}>Añadir</button>
        <h2>Lista de la compra</h2>
        <ul>
          {items.map((item, key) => <li key={key}>{item}</li>)}
        </ul>
      </header>
    </div>
  );
}

export default App;
