import './App.css';
import { Routes, Route, Navigate } from 'react-router-dom';
import { useState } from 'react';

import Users from './components/Users';
import Home from './components/Home';
import Navbar from './components/Navbar';
import NotFound from './components/NotFound';
import UserProfile from './components/UserProfile';
import SearchUser from './components/SearchUser';
import Login from './components/Login';
import AuthProfile from './components/AuthProfile';

function App() {
  const [username, setUsername] = useState("");
  const [loggedIn, setIsLoggedIn] = useState(false);
  return (
    <div className='App'>
      <Routes>
        <Route path="/" element={<Navbar loggedIn={loggedIn} />}>
          <Route path="/" element={<Home />} />
          <Route path="/users" element={<Users />} />
          <Route path="/users/user/:username" element={<UserProfile />} />
          <Route path="/search" element={<SearchUser />} />
          <Route path="/login" element={<Login setUsername={setUsername} setIsLoggedIn={setIsLoggedIn} />} />
          <Route path="/profile" element={
            loggedIn ? <AuthProfile username={username} /> : (
              <Navigate replace to="/login" />
            )
          } />
        </Route>
        <Route path="*" element={<NotFound />} />
      </Routes>
    </div>
  );
}

export default App;
