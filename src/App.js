import React from 'react';
import './App.css';
import CountDisplay from './components/CountDisplay';
import CountButton from './components/CountButton'
import OddEvenDisplay from './components/OddEvenDisplay';

function App() {
  return (
    <div className="App">
        <CountDisplay></CountDisplay>
        <OddEvenDisplay></OddEvenDisplay>
        <CountButton></CountButton>
    </div>
  );
}

export default App;
