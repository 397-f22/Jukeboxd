import { useState } from 'react';
import logo from './logo.svg';
import './App.css';
import Header from './Header.jsx'
import { BrowserRouter, Routes, Route, useParams } from 'react-router-dom';
import Homepage from './components/Homepage.jsx';
import ProfilePage from './components/ProfilePage.jsx';
import NavigationBar from './components/NavigationBar.jsx';
import { useDbData } from './utilities/firebase';

const ProfileForUrl = ({ user, data }) => {
  const { id } = useParams();

  return <ProfilePage id={id} user={user} data={data} />;
};

// const FriendsForUrl = ({ user, data }) => {
//   const { id } = useParams();

//   return <FriendsPage id={id} user={user} data={data} />;
// };

const App = () => {
  const [count, setCount] = useState(0);
  const [user, setUser] = useState(0);
  const [data, error] = useDbData(`/`)

  return (
    <div className="App">
      <Header user={user} setUser={setUser} />

      <BrowserRouter>
        <Routes>
          <Route path="/" element={
            <div>
              <Homepage /> {/* sign in */}
            </div>
          } />
          <Route path="/profile/:id" element={
            <div>
              <ProfileForUrl user={user} data={data} />
            </div>
          } />
        </Routes>
      </BrowserRouter>
      <NavigationBar user={user} />
    </div>
  );
};

export default App;
