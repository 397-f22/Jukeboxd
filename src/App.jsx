import { useState } from 'react';
import logo from './logo.svg';
import './App.css';
import Header from './Header.jsx'
import { BrowserRouter, Routes, Route, useParams } from 'react-router-dom';
import Homepage from './components/Homepage.jsx';
import ProfilePage from './components/ProfilePage.jsx';
import NavigationBar from './components/NavigationBar.jsx';
import { useDbData } from './utilities/firebase';
import ReviewNext from './components/ReviewNext';

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
      <Header user={user} setUser={setUser} recentSongs={recentSongs} setrecentSongs={setRecentSongs} />

      <BrowserRouter>
        <Routes>
          <Route path="/" element={
            <div>
              <Homepage /> {/* sign in */}
            </div>
          } />
          <Route path="/profile/:id" element={
            <div>
              <ProfileForUrl user={user} data={data} recentSong={recentSongs} setRecentSong={setRecentSongs} />
            </div>
          } />
        </Routes>
      </BrowserRouter>
      <NavigationBar user={user} />
    </div>
  );
};

export default App;
