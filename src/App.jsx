import { useState } from 'react';
import logo from './logo.svg';
import './App.css';
import Header from './Header.jsx'
import { BrowserRouter, Routes, Route, useParams } from 'react-router-dom';
import Homepage from './components/Homepage.jsx';
import ProfilePage from './components/ProfilePage.jsx';
import NavigationBar from './components/NavigationBar.jsx';


const ProfileForUrl = ({data}) => {
  const { id } = useParams();

  return <ProfilePage id={id} data={data} />;
};

const App = () => {
  const [count, setCount] = useState(0);

  return (
    <div className="App">
      <Header/>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={
            <div>
              <Homepage /> {/* sign in */}
            </div>
          } />
          <Route path="/profile/:id" element={
            <div>
              <ProfileForUrl />  {/* add inputs later (i.e. username, etc )? */}
            </div>
          } />
        </Routes>        
      </BrowserRouter>
      <NavigationBar />
    </div>
  );
};

export default App;
