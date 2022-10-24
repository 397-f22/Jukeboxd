import { useState } from 'react';
import logo from './logo.svg';
import './App.css';
import Header from './Header.jsx'

const App = () => {
  const [count, setCount] = useState(0);

  return (
    <div className="App">
      <Header/>
    </div>
  );
};

export default App;
