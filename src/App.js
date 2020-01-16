import React from 'react';
import './App.css';
import CountDisplay from './components/CountDisplay';
import CountButton from './components/CountButton'
import OddEvenDisplay from './components/OddEvenDisplay';
import CountButton2 from './components/CountButton2';

function App() {
  return (
    <div className="App">
        <CountDisplay></CountDisplay>
        <CountButton></CountButton>
        <OddEvenDisplay></OddEvenDisplay>
        <CountButton2></CountButton2>
    </div>
  );
}

export default App;
