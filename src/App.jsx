import { useState } from 'react';
import logo from './logo.svg';
import './App.css';
import Header from './Header.jsx'
import { BrowserRouter, Routes, Route, useParams } from 'react-router-dom';
import Homepage from './components/Homepage.jsx';
import ProfilePage from './components/ProfilePage.jsx';
import NavigationBar from './components/NavigationBar.jsx';
import { useDbData } from './utilities/firebase';
import FriendPage from './components/FriendPage';

const ProfileForUrl = ({ user, data, recentSongs, setRecentSongs }) => {
  const { id } = useParams();

  return <div>
    <ProfilePage id={id} user={user} data={data} recentSongs={recentSongs} setRecentSongs={setRecentSongs} />
  </div>;
};

// const FriendsForUrl = ({ user, data }) => {
//   const { id } = useParams();

//   return <FriendsPage id={id} user={user} data={data} />;
// };

const App = () => {
  const [count, setCount] = useState(0);
  const [user, setUser] = useState(0);
  const [recentSongs, setRecentSongs] = useState([]);
  const [data, error] = useDbData(`/`)


  return (
    <div className="App">
      <Header user={user} setUser={setUser} recentSongs={recentSongs} setRecentSongs={setRecentSongs} data={data}/>

      <BrowserRouter>
        <Routes>
          <Route path="/" element={
            <div>
              <Homepage data={data} user={user}/> {/* sign in */}
            </div>
          } />
          <Route path="/profile/:id" element={
            <div>
              <ProfileForUrl user={user} data={data} recentSongs={recentSongs} setRecentSongs={setRecentSongs} />
            </div>
          } />
          <Route path="/friends" element={
            <div>
              <FriendPage data={data} user={user}/> 
            </div>
          } />
        </Routes>
      </BrowserRouter>
      <NavigationBar user={user} />
    </div>
  );
};

export default App;
