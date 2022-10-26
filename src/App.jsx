import { useState } from 'react';
import logo from './logo.svg';
import './App.css';
import Header from './Header.jsx'
import { BrowserRouter, Routes, Route, useParams } from "react-router-dom";
import Homepage from './components/Homepage.jsx';

const App = () => {
  const [count, setCount] = useState(0);

  return (
    <div className="App">
      <Header/>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={
            <div>
              <Homepage />
            </div>
          } />
        </Routes>
      </BrowserRouter>
    </div>
  );
};

export default App;
