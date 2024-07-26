import './App.css';
import { Routes, Route, Navigate, useLocation } from 'react-router-dom';
import { useState, Suspense } from 'react';

import Navbar from './components/Navbar';
import { SwitchTransition, CSSTransition } from 'react-transition-group';
import { appRoutes } from './routes';

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

                {
                  appRoutes.map(route => {
                    if (route.requiresAuth && !loggedIn) {
                      return (
                        <Route
                          key={route.path}
                          exact
                          path={route.path}
                          element={<Navigate replace to="/login" />} />
                      )
                    } else {
                      return (
                        <Route
                          key={route.path}
                          exact
                          path={route.path}
                          element={<route.component setUsername={setUsername} setIsLoggedIn={setIsLoggedIn} username={username} />}
                        />
                      )
                    }
                  })
                }

                {/* <Route path="/" element={<Home />} />
                <Route path="/users" element={<Users />} />
                <Route path="/users/user/:username" element={<UserProfile />} />
                <Route path="/search" element={<SearchUser />} />
                <Route path="/login" element={<Login setUsername={setUsername} setIsLoggedIn={setIsLoggedIn} />} />
                <Route path="/profile" element={
                  loggedIn ? <AuthProfile username={username} /> : (
                    <Navigate replace to="/login" />
                  )
                } />
                <Route path="*" element={<NotFound />} /> */}
              </Routes>
            </Suspense>
          </CSSTransition>
        </SwitchTransition>
      </div>
    </>
  );
}

export default App;
