import './App.css';
import { Routes, Route, Navigate, useLocation } from 'react-router-dom';
import { useState, lazy, Suspense } from 'react';

import Home from './components/Home';
import Navbar from './components/Navbar';
import { SwitchTransition, CSSTransition } from 'react-transition-group';

const Users = lazy(() => import('./components/Users'));
const NotFound = lazy(() => import('./components/NotFound'));
const UserProfile = lazy(() => import('./components/UserProfile'));
const SearchUser = lazy(() => import('./components/SearchUser'));
const Login = lazy(() => import('./components/Login'));
const AuthProfile = lazy(() => import('./components/AuthProfile'));

function App() {
  const [username, setUsername] = useState("");
  const [loggedIn, setIsLoggedIn] = useState(false);
  const location = useLocation();

  return (
    <>
      <Navbar loggedIn={loggedIn} />
      <div className='App'>
        <SwitchTransition component={null}>
          <CSSTransition key={location.pathname} classNames="fade" timeout={300} unmountOnExit>
            <Suspense fallback={() => <h1>Loading...</h1>}>
              <Routes location={location}>
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
                <Route path="*" element={<NotFound />} />
              </Routes>
            </Suspense>
          </CSSTransition>
        </SwitchTransition>
      </div>
    </>
  );
}

export default App;
